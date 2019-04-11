import React, {Fragment} from "react";
import PropTypes from "prop-types";
import classnames from "classnames";

const Input = ({placeholder = "", type = "text", value, onChange, name, disabled, className}) => {
    return (
        <Fragment>
            <input
                className={classnames("input", {[`${className}`]: className})}
                type={type}
                name={name}
                placeholder={placeholder}
                value={value || ""}
                onChange={onChange}
                disabled={disabled}
            />
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
    disabled: PropTypes.bool,
    className: PropTypes.string
};

export default Input;
