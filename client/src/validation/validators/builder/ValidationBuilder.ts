import { IFieldValidation } from 'validation/protocols'
import {
    CompareFieldsValidation,
    EmailFieldValidation,
    MinLenFieldValidation,
    RequiredFieldValidation
} from 'validation/validators'

export class ValidationBuilder {
    private constructor(
        private readonly fieldName: string,
        private readonly validations: IFieldValidation[]
    ) {}

    static field(fieldName: string): ValidationBuilder {
        return new ValidationBuilder(fieldName, [])
    }

    required(): ValidationBuilder {
        this.validations.push(new RequiredFieldValidation(this.fieldName))
        return this
    }

    email(): ValidationBuilder {
        this.validations.push(new EmailFieldValidation(this.fieldName))
        return this
    }

    min(length: number): ValidationBuilder {
        this.validations.push(new MinLenFieldValidation(this.fieldName, length))
        return this
    }

    compare(fieldToCompare: string): ValidationBuilder {
        this.validations.push(new CompareFieldsValidation(this.fieldName, fieldToCompare))
        return this
    }

    build(): IFieldValidation[] {
        return this.validations
    }
}