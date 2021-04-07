import { ValidationError } from 'yup';

interface Errors {
  [key: string]: string;
}

export default function getValidationErrors(err: ValidationError): Errors {
  

  const validationErrors: Errors = {};

    err.inner.forEach(error => {
        const i = !!error.path ? error.path : '';
        validationErrors[i] = error?.message;
    });
  return validationErrors;
}