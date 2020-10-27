/** @jsx jsx */
import { jsx, Flex, Heading, Text, Input, Button } from 'theme-ui'
import { useForm } from 'react-hook-form'

import { EmailZ } from '../types/util'

import FullWidthCentered from './FullWidthCentered'
import OneThenTwoColumns from './OneThenTwoColumns'
import { useState } from 'react'

function signUpToNewsletter ({ data, setSigningUp, setSignUpSuccess }) {
  setSigningUp(true)
  setSignUpSuccess(null)
  return window
    .fetch('/api/newsletter', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(() => {
      setSigningUp(false)
      setSignUpSuccess(true)
    })
    .catch(err => {
      setSigningUp(false)
      setSignUpSuccess(false)
    })
}

interface LatestProps {
  copy: any // TODO: type better
}

export default function Latest ({ copy }: LatestProps) {
  const [signingUp, setSigningUp] = useState(false)
  const [signUpSuccess, setSignUpSuccess] = useState(null)
  const { register, handleSubmit, errors } = useForm({
    // @ts-expect-error
    resolver: values => {
      try {
        EmailZ.parse(values.email)
        return {
          values,
          errors: {}
        }
      } catch (err) {
        return {
          values: {},
          errors: {
            email: err.errors[0].message
          }
        }
      }
    }
  })

  return (
    <FullWidthCentered bg='greyBackground'>
      <Flex px={[3, 5]} mb={5} sx={{ flexDirection: 'column' }}>
        <OneThenTwoColumns
          firstColumnContent={<Heading variant='h1'>{copy.Title}</Heading>}
          remainingContent={
            <Flex ml={[0, 4]} sx={{ flexDirection: 'column' }}>
              <Text variant='p3'>{copy.Content}</Text>
              <Flex as='form' mt={3} sx={{ alignItems: 'flex-start' }}>
                <Flex sx={{ flexDirection: 'column' }}>
                  <Input name='email' placeholder='Email' ref={register} />
                  {errors.email && (
                    <Text mt={1} sx={{ color: 'tomato' }}>
                      {errors.email}
                    </Text>
                  )}
                  {signUpSuccess && (
                    <Text mt={1}>Success! Thank you for signing up.</Text>
                  )}
                  {signUpSuccess === false && (
                    <Text mt={1} sx={{ color: 'tomato' }}>
                      Something went wrong - if this persists, contact the GIF
                      team.
                    </Text>
                  )}
                </Flex>
                <Button
                  ml={2}
                  variant={signingUp ? 'disabled' : 'primary'}
                  disabled={signingUp}
                  onClick={handleSubmit(data =>
                    signUpToNewsletter({
                      data,
                      setSigningUp,
                      setSignUpSuccess
                    })
                  )}
                  sx={{ minWidth: 100, height: 38 }}
                >
                  SIGN UP
                </Button>
              </Flex>
            </Flex>
          }
        />
      </Flex>
    </FullWidthCentered>
  )
}
