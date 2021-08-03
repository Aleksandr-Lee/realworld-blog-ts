import React from "react";
import classes from "./Inputs.module.scss";

interface IErrorObject {
  typeError: string;
  message: string;
}

interface IErrors {
  [key: string]: any;
}

interface IInputs {
  label: string;
  register: any;
  required: boolean;
  type: string;
  placeholder: string;
  id: string;
  errors: IErrors;
  errorObject: IErrorObject[];
  pattern?: any;
  minLength?: number;
  maxLength?: number;
  defaultValue?: string;
}

const Inputs = ({
  label,
  register,
  required,
  type,
  placeholder,
  id,
  errors,
  errorObject,
  pattern,
  minLength,
  maxLength,
  defaultValue,
}: IInputs) => {
  return (
    <>
      <label className={classes.form__label} htmlFor={id}>
        {label}
      </label>
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        defaultValue={defaultValue}
        className={
          errors[id]?.type
            ? `${classes.form__input} ${classes.error}`
            : `${classes.form__input}`
        }
        ref={register}
        {...register(id, {
          required,
          pattern,
          minLength,
          maxLength,
        })}
      />
      {errorObject.map(
        ({ typeError, message }: IErrorObject) =>
          errors[id]?.type === typeError && (
            <span
              key={`${typeError}-${message}`}
              className={classes.form__errorMessage}
            >
              {message}
            </span>
          )
      )}
    </>
  );
};

export default Inputs;
