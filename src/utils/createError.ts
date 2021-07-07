class CreateError extends Error {
    message: string
    code?: number

    constructor(msg: string) {
        super()

        this.message = msg
    }

    businessException = (): void => {
        this.code = 422
    }
}

export default CreateError
