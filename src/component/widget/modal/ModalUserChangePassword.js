import React, {Fragment} from "react";
import {Input} from "../index";
import PropTypes from "prop-types";
import ReactDOM from "react-dom";
import classnames from "classnames";

const ModalUserChangePassword = ({open, email, onCloseModal, onChange, onSendNewPasswordRequest, passwordResetSent}) => {
    return (
        open &&
        ReactDOM.createPortal(
            <div
                className={classnames("fowler__modal", {"modal-open": open})}>
                <div className="fowler__modal--wrapper">
                    {
                        !passwordResetSent ?
                            <Fragment>
                                <h1 className="fowler__modal__headline">{"CHANGE PASSWORD "}</h1>
                                <p className="fowler__modal__text">
                                    {"Enter email address and we will send you password request token "}
                                </p>
                                <div className="fowler__modal__input">
                                    <Input
                                        name="emailForPasswordReset"
                                        value={email}
                                        onChange={onChange}
                                        placeholder="Enter your email address"
                                        className="user-password"
                                    />
                                </div>
                                <section className="fowler__modal--action">
                                    <div className="change-password">
                                        <button
                                            onClick={onCloseModal}
                                            className="fowler__modal--action__button cancel button">
                                            {"Cancel"}
                                        </button>
                                        <button
                                            onClick={onSendNewPasswordRequest}
                                            className="fowler__modal--action__button save button">
                                            {"Yes Send"}
                                        </button>
                                    </div>
                                </section>
                            </Fragment> :
                            <Fragment>
                                <h1 className="fowler__modal__headline">{"E-MAIL SENT"}</h1>
                                <p className="fowler__modal__text">
                                    {"Information of a password reset sent to the email address: "}
                                    <span className="fowler__modal__text--email">{`${email}.`}</span>
                                </p>
                                <section className="fowler__modal--action">
                                    <div className="change-password">
                                        <button
                                            onClick={onCloseModal}
                                            className="fowler__modal--action__button save button">
                                            {"Close"}
                                        </button>
                                    </div>
                                </section>
                            </Fragment>
                    }
                </div>
            </div>, document.getElementById("app"))
    );
};

ModalUserChangePassword.defaultProps = {
    email: PropTypes.string,
    open: PropTypes.bool,
    onCloseModal: PropTypes.func,
    onChange: PropTypes.func,
    onSendNewPasswordRequest: PropTypes.func,
    passwordResetSent: PropTypes.bool
};

export default ModalUserChangePassword;
