/** @jsx jsx */
import { jsx, Flex, Heading, Text, Input, Button } from 'theme-ui'
import { useForm } from 'react-hook-form'

import { EmailZ } from '../types/util'

import FullWidthCentered from './FullWidthCentered'
import OneThenTwoColumns from './OneThenTwoColumns'

function signUpToNewsletter (data) {
  console.log({ data })
  return window.fetch('/api/newsletter', {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json'
    }
  })
}

interface LatestProps {
  copy: any // TODO: type better
}

export default function Latest ({ copy }: LatestProps) {
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
                </Flex>
                <Button
                  ml={2}
                  variant='primary'
                  onClick={handleSubmit(signUpToNewsletter)}
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
