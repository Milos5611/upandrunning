import Dropdown from "react-dropdown";
import PropTypes from "prop-types";
import React from "react";
import classnames from "classnames";

const Select = ({componentClassName, options, onChange, value, disabled}) => {
    return (
        <div className={classnames("select-wrapper", {[`${componentClassName}`]: componentClassName})}>
            <Dropdown
                value={value}
                onChange={onChange}
                options={options}
                placeholder="Select"
                disabled={disabled}
            />
        </div>
    );
};

Select.propTypes = {
    componentClassName: PropTypes.string,
    options: PropTypes.array,
    onChange: PropTypes.func,
    value: PropTypes.string,
    disabled: PropTypes.bool
};

export default Select;
