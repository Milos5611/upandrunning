import {Input} from "../../widget";
import PropTypes from "prop-types";
import React from "react";

export const UserCredential = ({email, password, passwordError, emailError, editMode, onHandleUserInput}) => {
    return (
        <div className="user-credential">
            <div className="user user--email">
                <p className="label headline">{"Username"}</p>
                <Input
                    name="email"
                    value={email}
                    onChange={onHandleUserInput}
                    error={emailError}
                    disabled={editMode}
                />
            </div>
            <div className="user user--password">
                <p className="label headline">{"Password"}</p>
                <Input
                    name="password"
                    type="password"
                    value={password}
                    error={passwordError}
                    onChange={onHandleUserInput}
                    disabled={editMode}
                />
            </div>
        </div>
    );
};

UserCredential.propTypes = {
    email: PropTypes.string,
    password: PropTypes.string,
    passwordError: PropTypes.bool,
    emailError: PropTypes.bool,
    editMode: PropTypes.bool,
    onHandleUserInput: PropTypes.func
};
