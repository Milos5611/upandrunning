import {BirthDate, Input} from "../../widget";
import DisclaimerIcon from "-!svg-react-loader!../../../www/images/login/disclaimer.svg";
import PropTypes from "prop-types";
import React from "react";
import classnames from "classnames";

export const UserPhoneAndBirth = ({phone, editMode, showDisclaimer, dateOfBirth, onHandleUserInput, onHandleDateChange, onHandleShowDisclaimer}) => {
    return (
        <article>
            <div className="user--profile__field user--profile--phone__number">
                <p className="label headline">{"Phone"}</p>
                <Input
                    type="tel"
                    name="phone"
                    value={phone}
                    placeholder="(xxx) xxx-xxxx"
                    onChange={onHandleUserInput}
                    pattern="[0-9]{0,5}"
                    disabled={editMode}
                />
            </div>
            <div className="user--profile__field user--profile--birth-date">
                <p className="label headline">
                    {"Birth Date"}
                    <DisclaimerIcon
                        style={{
                            paddingLeft: 10,
                            cursor: "pointer"
                        }}
                        onClick={onHandleShowDisclaimer}
                    />
                </p>
                <div className={classnames("user--profile--birth-date--disclaimer", {"hidden": !showDisclaimer})}>
                    <p className="disclaimer">
                        {"Disclaimer for users younger than 13 years old: " +
                        "Dr. CAiPE requires you to be 13 years or older to enter. Please enter your Date of Birth " +
                        "in the fields below in order to continue:"}
                    </p>
                </div>
                <BirthDate
                    className="input"
                    value={dateOfBirth}
                    onChange={onHandleDateChange}
                    disabled={editMode}
                />
            </div>
        </article>
    );
};

UserPhoneAndBirth.propTypes = {
    phone: PropTypes.string,
    dateOfBirth: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.instanceOf(Date)
    ]),
    editMode: PropTypes.bool,
    onHandleUserInput: PropTypes.func,
    onHandleDateChange: PropTypes.func,
    onHandleShowDisclaimer: PropTypes.func,
    showDisclaimer: PropTypes.bool
};
