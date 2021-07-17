import { Response } from 'express'

import CustomError, { IErrorBody } from './CustomError'

const createErrorBody = (err: Error): IErrorBody => ({
    errors: [{ message: err.message || 'Server Error, try again' }],
})

export default function handleError(res: Response, err: CustomError): void {
    res.status(err.code ?? 500).send(err.body ?? createErrorBody(err))
}
