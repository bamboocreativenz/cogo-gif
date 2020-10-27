import * as z from 'zod'

export const EmailZ = z.string().email()
export type EmailT = z.infer<typeof EmailZ>
