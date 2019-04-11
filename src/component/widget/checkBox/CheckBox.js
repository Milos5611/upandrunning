import PropTypes from "prop-types";
import React from "react";
import classnames from "classnames";

const CheckBox = ({checked, onChange, className, disabled, animated = true}) => (
    <div className={classnames("admin__table-bodyRole__column", {[`${className}`]: className})}>
        <label
            className={classnames({"switch": animated})}>
            <input
                disabled={disabled}
                checked={checked}
                type="checkbox"
                id="checkbox"
                onChange={onChange}
            />
            <span
                onClick={onChange}
                className="slider round"
            />
        </label>
    </div>
);


CheckBox.propTypes = {
    checked: PropTypes.bool,
    onChange: PropTypes.func,
    className: PropTypes.string,
    disabled: PropTypes.bool,
    animated: PropTypes.bool
};

export default CheckBox;
