import EditProfile from "-!svg-react-loader!../../../www/images/profile/edit.svg";
import PropTypes from "prop-types";
import React from "react";
import {Section} from "../../widget";
import {UserBillingInformation} from "./UserBillingInformation";
import {UserCredential} from "./UserCredential";
import {UserPhoneAndBirth} from "./UserPhoneAndBirth";
import {UserProfileAddress} from "./UserProfileAddress";
import {UserProfileName} from "./UserProfileName";
import classnames from "classnames";
import {passwordRegex} from "../../../common/utils";

export default class UserProfile extends React.Component {

    static propTypes = {
        updateUserData: PropTypes.func,
        getUserProfileData: PropTypes.func,
        updateUserProfileState: PropTypes.func,
        updateUserProfileAddress: PropTypes.func,
        updateUserProfileDob: PropTypes.func,
        updateUserProfileFirstName: PropTypes.func,
        updateUserProfileLastName: PropTypes.func,
        updateUserProfileZip: PropTypes.func,
        updateUserProfilePhone: PropTypes.func,
        updateUserProfilePassword: PropTypes.func,
        updateUserProfileBillingState: PropTypes.func,
        updateUserProfileBillingZipCode: PropTypes.func,
        updateUserProfileBillingAddress: PropTypes.func,
        firstName: PropTypes.string,
        lastName: PropTypes.string,
        phone: PropTypes.string,
        email: PropTypes.string,
        password: PropTypes.string,
        state: PropTypes.string,
        zipCode: PropTypes.string,
        address: PropTypes.string,
        dateOfBirth: PropTypes.instanceOf(Date),
        billingState: PropTypes.string,
        billingZipCode: PropTypes.string,
        billingAddress: PropTypes.string,
        error: PropTypes.string
    };

    state = {
        dataLoaded: false,
        emailError: false,
        passwordError: false,
        registrationErrorMessage: undefined,
        editMode: false,
        showDisclaimer: false
    };

    componentDidMount() {
        this.props.getUserProfileData();
    }


    handleOnlyNumber = (event) => {
        const component = event.target.name;
        if (event.target.validity.valid) {
            if (component === "zipCode") {
                this.props.updateUserProfileZip(event.target.value);
            } else {
                this.props.updateUserProfileBillingZipCode(event.target.value);
            }
        }
    };

    handleUserInput = (event) => {
        const filed = event.currentTarget.name;
        const value = event.currentTarget.value;
        switch (filed) {
            case "address":
                this.props.updateUserProfileAddress(value);
                break;
            case "firstName":
                this.props.updateUserProfileFirstName(value);
                break;
            case "lastName":
                this.props.updateUserProfileLastName(value);
                break;
            case "phone":
                this.props.updateUserProfilePhone(value);
                break;
            case "password":
                this.props.updateUserProfilePassword(value);
                break;
            case "billingAddress":
                this.props.updateUserProfileBillingAddress(value);
                break;
            case "billingZipCode":
                this.props.updateUserProfileBillingZipCode(value);
                break;
            default:
                break;
        }
    };

    handleDateChange = (date) => {
        this.props.updateUserProfileDob(date);
    };

    handleSelectState = (selected) => {
        this.props.updateUserProfileState(selected.value);
    };

    handleSelectBillingState = (selected) => {
        this.props.updateUserProfileBillingState(selected.value);
    };

    handleEditMode = () => {
        this.setState(prevState => ({
            editMode: !prevState.editMode
        }));
    };

    handleValidateBeforeSubmit = () => {
        const {password} = this.props;
        if (!passwordRegex.test(password)) {
            return this.setState({passwordError: true});
        } else {
            this.setState({passwordError: false});
        }
        this.handleSubmitForm();
    };

    handleSubmitForm() {
        this.props.updateUserData();
    }

    handleShowDisclaimer = () => {
        this.setState(prevState => ({
            showDisclaimer: !prevState.showDisclaimer
        }));
    };

    render() {
        const {editMode, emailError, passwordError, registrationErrorMessage, showDisclaimer} = this.state;
        const {
            firstName, lastName, address, dateOfBirth, state, zipCode, email,
            phone, password, billingState, billingZipCode, billingAddress, error
        } = this.props;
        return (
            <div className={classnames("user--profile--wrapper", {"edit": editMode})}>
                <Section>
                    <div className="user--profile">
                        <div className="edit-mode">
                            <h2 className="user--profile__headline">{"My Profile"}</h2>
                            <span
                                className={classnames("edit--text", {"hidden": editMode})}
                                onClick={this.handleEditMode}>
                                <EditProfile/>
                                <p className="edit__paragraph">{"Edit"}</p>
                            </span>
                        </div>
                        <UserProfileName
                            editMode={!editMode}
                            firstName={firstName}
                            lastName={lastName}
                            onHandleUserInput={this.handleUserInput}
                        />
                        <UserProfileAddress
                            editMode={!editMode}
                            zipCode={zipCode}
                            address={address}
                            state={state}
                            onHandleUserInput={this.handleUserInput}
                            onHandleOnlyNumber={this.handleOnlyNumber}
                            onHandleSelectState={this.handleSelectState}
                        />
                        <UserPhoneAndBirth
                            editMode={!editMode}
                            dateOfBirth={dateOfBirth}
                            showDisclaimer={showDisclaimer}
                            phone={phone}
                            onHandleDateChange={this.handleDateChange}
                            onHandleUserInput={this.handleUserInput}
                            onHandleShowDisclaimer={this.handleShowDisclaimer}
                        />
                        <section className="user--profile__field billing-data">
                            <h2 className="user--profile__headline">{"Billing Address"}</h2>
                            <UserBillingInformation
                                editMode={!editMode}
                                billingAddress={billingAddress}
                                billingState={billingState}
                                billingZipCode={billingZipCode}
                                onHandleUserInput={this.handleUserInput}
                                onHandleOnlyNumber={this.handleOnlyNumber}
                                onHandleSelectBillingState={this.handleSelectBillingState}
                            />
                        </section>
                        <section className="user--profile__field account-information">
                            <h2 className="user--profile__headline">{"Account Information"}</h2>
                            <UserCredential
                                editMode={!editMode}
                                email={email}
                                emailError={emailError}
                                password={password}
                                passwordError={passwordError}
                                onHandleUserInput={this.handleUserInput}
                            />
                            {registrationErrorMessage &&
                            <label className="error__text">{registrationErrorMessage}</label>}
                        </section>
                        {editMode &&
                        <p className="user--profile_disclamer">{"Please confirm your password in order to save changes to your profile."}</p>}
                        {error &&
                        <p
                            className="error__text user--profile--update">
                            {error}
                        </p>
                        }
                        <section className="user--profile-sign-up">
                            <div className="sign-up">
                                <button
                                    onClick={this.handleValidateBeforeSubmit}
                                    className={classnames("user--profile__button button save", {"hidden": !editMode})}>
                                    {"Save"}
                                </button>
                                <button
                                    onClick={this.handleEditMode}
                                    className={classnames("user--profile__button button cancel", {"hidden": !editMode})}>
                                    {"Cancel"}
                                </button>
                            </div>
                        </section>
                    </div>
                </Section>
            </div>
        );
    }
}
