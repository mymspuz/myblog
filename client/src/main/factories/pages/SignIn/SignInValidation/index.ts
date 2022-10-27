import {
    ValidationBuilder,
    ValidationComposite,
} from 'validation/validators'

export const makeLoginValidation = (): ValidationComposite => {
    return ValidationComposite.build([
        ...ValidationBuilder.field('login').required().build(),
        ...ValidationBuilder.field('password').required().min(4).build(),
    ])
}
