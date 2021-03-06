/*

Route for handling newsletter signups.
Necessary to avoid exposing the Airtable API key to the client.

*/

import { NowRequest, NowResponse } from '@vercel/node'
import { Airtable } from '@bamboocreativenz/pip-airtable'

import { EmailZ } from '../../types/util'

const ERROR_BAD_REQUEST = 'Bad request'

const airtable = new Airtable(
  process.env.AIRTABLE_API_KEY,
  process.env.AIRTABLE_BASE
)

export default (req: NowRequest, res: NowResponse) => {
  const { email } = req.body

  return new Promise((resolve, reject) => {
    try {
      EmailZ.parse(email)
      resolve()
    } catch (err) {
      // TODO: capture errors somewhere?
      console.error('parsing error', err)
      console.log(JSON.stringify(err.errors, null, 2))
      reject(new Error(ERROR_BAD_REQUEST))
    }
  })
    .then(() => {
      return airtable.createRecords({
        tableName: 'Newsletter Signups',
        records: [
          {
            fields: {
              Email: email,
              Status: 'Active'
            }
          }
        ]
      })
    })
    .then(() => {
      res.statusCode = 200
    })
    .catch(err => {
      if (err.message === ERROR_BAD_REQUEST) {
        res.statusCode = 400
        res.json(err)
      } else {
        res.statusCode = 500
        res.json(err)
      }
    })
}
