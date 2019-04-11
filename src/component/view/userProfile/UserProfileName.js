import {Input} from "../../widget";
import PropTypes from "prop-types";
import React from "react";

export const UserProfileName = ({firstName, lastName, editMode, onHandleUserInput}) => {
    return (
        <article>
            <div className="user--profile__field user--profile--first-name">
                <p className="label headline">{"First Name"}</p>
                <Input
                    name="firstName"
                    value={firstName}
                    placeholder="First name..."
                    onChange={onHandleUserInput}
                    disabled={editMode}
                />
            </div>
            <div className="user--profile__field user--profile--last-name">
                <p className="label headline">{"Last Name"}</p>
                <Input
                    name="lastName"
                    value={lastName}
                    placeholder="Last name..."
                    onChange={onHandleUserInput}
                    disabled={editMode}
                />
            </div>
        </article>
    );
};

UserProfileName.propTypes = {
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    editMode: PropTypes.bool,
    onHandleUserInput: PropTypes.func,
};
