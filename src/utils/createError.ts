import { response } from 'express'

//TODO: TESTAR SE FUNCIONA

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const createError = (status: number, msg: string): any =>
    response.status(status).send({ errors: [{ msg }] })

export default createError
