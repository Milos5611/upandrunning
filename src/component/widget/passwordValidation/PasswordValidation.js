import CheckMark from "-!svg-react-loader!../../../www/images/login/check-mark.svg";
import PropTypes from "prop-types";
import React from "react";

const PasswordValidation = ({accepted, condition}) => (
    <div className="password-validation">
        <CheckMark
            height={13}
            width={17}
            fill={accepted ? "#6abca4" : "#d9d9d9"}
        />
        <span className="small-text--check">
            {condition}
        </span>
    </div>
);

PasswordValidation.propTypes = {
    accepted: PropTypes.bool,
    condition: PropTypes.string
};

export default PasswordValidation;
