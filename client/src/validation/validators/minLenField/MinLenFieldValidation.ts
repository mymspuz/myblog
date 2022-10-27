import { IFieldValidation } from 'validation/protocols'
import { MinLenFieldError } from 'validation/errors'

export class MinLenFieldValidation implements IFieldValidation {
    constructor(
        readonly field: string,
        private readonly minLength: number
    ) {}

    validate(input: object): Error | null {
        // @ts-ignore
        return input[this.field]?.length <= this.minLength ? new MinLenFieldError(this.minLength) : null
    }
}