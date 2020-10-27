import * as z from 'zod'

export const StringZ = z.string()
export type StringT = z.infer<typeof StringZ>

export const EmailZ = z.string().email()
export type EmailT = z.infer<typeof EmailZ>
