/*

Route for handling pdf download email capture.
Necessary to avoid exposing the Airtable API key to the client.

*/

import { NowRequest, NowResponse } from '@vercel/node'
import { Airtable } from '@bamboocreativenz/pip-airtable'

import { ArrayStringZ, EmailZ } from '../../types/util'

import { ERROR_BAD_REQUEST } from '../../constants'

const airtable = new Airtable(
  process.env.AIRTABLE_API_KEY,
  process.env.AIRTABLE_BASE
)

export default (req: NowRequest, res: NowResponse) => {
  const { pdfType, email, ids } = req.body

  return new Promise((resolve, reject) => {
    try {
      EmailZ.parse(email)
      ArrayStringZ.parse(ids)
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
        tableName: `${pdfType} Downloads`,
        records: [
          {
            fields: {
              Email: email,
              [pdfType]: ids
            }
          }
        ]
      })
    })
    .then(records => {
      res.statusCode = 200
      res.send('OK')
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
