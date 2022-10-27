export class MinLenFieldError extends Error {
    constructor(minLength: number) {
        super(`Min length ${minLength}`)
    }
}