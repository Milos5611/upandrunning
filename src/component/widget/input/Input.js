import React, {Fragment} from "react";
import PropTypes from "prop-types";
import classnames from "classnames";

const Input = ({placeholder = "", type = "text", value, onChange, name, error, pattern, disabled, className}) => {
    const errorMessage = {
        "email": "Email is not in good format",
        "confirmPassword": "Password don't match",
        "password": "Please check your password and try again"
    };
    return (
        <Fragment>
            <input
                className={classnames("input", {[`${className}`]: className})}
                type={type}
                name={name}
                placeholder={placeholder}
                value={value || ""}
                onChange={onChange}
                pattern={pattern}
                disabled={disabled}
            />
            {error && <p className="error__text">{errorMessage[name]}</p>}
        </Fragment>
    );
};

Input.propTypes = {
    placeholder: PropTypes.string,
    name: PropTypes.string,
    type: PropTypes.string,
    value: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ]),
    onChange: PropTypes.func,
    error: PropTypes.bool,
    disabled: PropTypes.bool,
    pattern: PropTypes.string,
    className: PropTypes.string
};

export default Input;
