class CreateError extends Error {
    message: string
    code?: number

    constructor(msg: string) {
        super(msg)

        this.message = msg
    }

    businessException = (): this => {
        this.code = 422

        return this
    }
}

export default CreateError
