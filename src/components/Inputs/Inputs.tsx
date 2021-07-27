import React from "react";
// import PropTypes from "prop-types";
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

const Inputs: React.FC<IInputs> = ({
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
}) => {
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

// Inputs.defaultProps = {
//   defaultValue: "",
//   pattern: undefined,
//   minLength: undefined,
//   maxLength: undefined,
// };

// Inputs.propTypes = {
//   id: PropTypes.string.isRequired,
//   label: PropTypes.string.isRequired,
//   type: PropTypes.string.isRequired,
//   errors: PropTypes.objectOf(PropTypes.object).isRequired,
//   placeholder: PropTypes.string.isRequired,
//   errorObject: PropTypes.arrayOf(PropTypes.object).isRequired,
//   defaultValue: PropTypes.string,
//   register: PropTypes.func.isRequired,
//   required: PropTypes.bool.isRequired,
//   pattern: PropTypes.objectOf(PropTypes.string),
//   minLength: PropTypes.number,
//   maxLength: PropTypes.number,
// };

export default Inputs;
