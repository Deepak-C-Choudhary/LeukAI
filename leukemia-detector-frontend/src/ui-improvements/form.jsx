import React, { useState } from "react";

export const FormInput = ({
  label,
  id,
  type = "text",
  error,
  required,
  helpText,
  className = "",
  ...props
}) => {
  const inputId = `input-${id}`;
  const errorId = `error-${id}`;
  const helpId = `help-${id}`;

  return (
    <div className={`space-y-1 ${className}`}>
      <label
        htmlFor={inputId}
        className="block text-sm font-medium text-gray-700 dark:text-gray-300"
      >
        {label}
        {required && (
          <span className="text-red-500 ml-1" aria-hidden="true">
            *
          </span>
        )}
      </label>

      <input
        id={inputId}
        type={type}
        className={`
          w-full px-3 py-2 rounded-lg border 
          ${
            error
              ? "border-red-500 dark:border-red-500"
              : "border-gray-300 dark:border-gray-600"
          }
          bg-white dark:bg-gray-800
          text-gray-900 dark:text-gray-100
          focus:outline-none focus:ring-2
          ${
            error
              ? "focus:ring-red-500 focus:border-red-500"
              : "focus:ring-blue-500 focus:border-blue-500"
          }
          disabled:bg-gray-100 dark:disabled:bg-gray-900
          disabled:cursor-not-allowed
          transition-colors
        `}
        aria-invalid={error ? "true" : "false"}
        aria-describedby={`${error ? errorId : ""} ${helpText ? helpId : ""}`}
        {...props}
      />

      {helpText && (
        <p id={helpId} className="text-sm text-gray-500 dark:text-gray-400">
          {helpText}
        </p>
      )}

      {error && (
        <p
          id={errorId}
          className="text-sm text-red-600 dark:text-red-400"
          role="alert"
        >
          {error}
        </p>
      )}
    </div>
  );
};

export const useFormValidation = (initialValues, validationRules) => {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});

  const validateField = (name, value) => {
    const rules = validationRules[name];
    if (!rules) return "";

    for (const rule of rules) {
      const error = rule(value, values);
      if (error) return error;
    }
    return "";
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((prev) => ({ ...prev, [name]: value }));
    if (touched[name]) {
      const error = validateField(name, value);
      setErrors((prev) => ({ ...prev, [name]: error }));
    }
  };

  const handleBlur = (e) => {
    const { name } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
    const error = validateField(name, values[name]);
    setErrors((prev) => ({ ...prev, [name]: error }));
  };

  const validateForm = () => {
    const newErrors = {};
    let isValid = true;

    Object.keys(validationRules).forEach((field) => {
      const error = validateField(field, values[field]);
      if (error) {
        newErrors[field] = error;
        isValid = false;
      }
    });

    setErrors(newErrors);
    return isValid;
  };

  return {
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
    validateForm,
    setValues,
    setErrors,
    setTouched,
  };
};

export const ExampleForm = () => {
  const validationRules = {
    email: [
      (v) => !v && "Email is required",
      (v) => !/\S+@\S+\.\S+/.test(v) && "Invalid email format",
    ],
    password: [
      (v) => !v && "Password is required",
      (v) => v.length < 8 && "Password must be at least 8 characters",
      (v) =>
        !/[A-Z]/.test(v) &&
        "Password must contain at least one uppercase letter",
      (v) =>
        !/[a-z]/.test(v) &&
        "Password must contain at least one lowercase letter",
      (v) => !/[0-9]/.test(v) && "Password must contain at least one number",
    ],
  };

  const { values, errors, handleChange, handleBlur, validateForm } =
    useFormValidation({ email: "", password: "" }, validationRules);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Handle form submission
      console.log("Form submitted:", values);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6" noValidate>
      <FormInput
        label="Email"
        id="email"
        name="email"
        type="email"
        required
        value={values.email}
        onChange={handleChange}
        onBlur={handleBlur}
        error={errors.email}
        helpText="We'll never share your email with anyone else."
      />

      <FormInput
        label="Password"
        id="password"
        name="password"
        type="password"
        required
        value={values.password}
        onChange={handleChange}
        onBlur={handleBlur}
        error={errors.password}
        helpText="Password must be at least 8 characters long."
      />

      <button
        type="submit"
        className="w-full px-4 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
      >
        Submit
      </button>
    </form>
  );
};
