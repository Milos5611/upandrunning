import React, {Fragment} from "react";
import PropTypes from "prop-types";
import ReactDOM from "react-dom";
import classnames from "classnames";

const ModalAdminChangePassword = ({open, email, onCloseModal, onChangePasswordRequest, setDefaultResetPassword, isPasswordResetSent}) => {
    return (
        open &&
        ReactDOM.createPortal(
            <div
                className={classnames("fowler__modal", {"modal-open": open})}>
                <div className="fowler__modal--wrapper">
                    {
                        !isPasswordResetSent ?
                            <Fragment>
                                <h1 className="fowler__modal__headline">{"CHANGE PASSWORD "}</h1>
                                <p className="fowler__modal__text">
                                    {"Are you sure you want to send password rest to user: "}
                                    <span className="fowler__modal__text--email">{`${email} ?`}</span>
                                </p>
                                <section className="fowler__modal--action">
                                    <div className="change-password">
                                        <button
                                            onClick={onCloseModal}
                                            className="fowler__modal--action__button cancel button">
                                            {"Cancel"}
                                        </button>
                                        <button
                                            onClick={onChangePasswordRequest}
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
                                    <span className="fowler__modal__text--email">{`${email} ?`}</span>
                                </p>
                                <section className="fowler__modal--action">
                                    <div className="change-password">
                                        <button
                                            onClick={setDefaultResetPassword}
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

ModalAdminChangePassword.defaultProps = {
    email: PropTypes.string,
    open: PropTypes.bool,
    onChangePasswordRequest: PropTypes.func,
    onCloseModal: PropTypes.func,
    setDefaultResetPassword: PropTypes.func,
    isPasswordResetSent: PropTypes.bool
};

export default ModalAdminChangePassword;
