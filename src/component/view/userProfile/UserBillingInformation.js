import {Input, Select} from "../../widget";
import React, {Fragment} from "react";
import PropTypes from "prop-types";
import {states} from "../../../common/utils";

export const UserBillingInformation = ({billingState, billingZipCode, billingAddress, editMode, onHandleSelectBillingState, onHandleOnlyNumber, onHandleUserInput}) => {
    return (
        <Fragment>
            <article>
                <div className="user--profile__field user--profile__select-city">
                    <p className="label headline">{"State"}</p>
                    <Select
                        value={billingState}
                        onChange={onHandleSelectBillingState}
                        options={states}
                        componentClassName="select--state"
                        disabled={editMode}
                    />
                </div>
                <div className="user--profile__field user--profile__select-code">
                    <p className="label headline">{"Zip Code"}</p>
                    <Input
                        type="tel"
                        name="billingZipCode"
                        value={billingZipCode}
                        placeholder="Billing Zip Code..."
                        onChange={onHandleOnlyNumber}
                        pattern="[0-9]{0,5}"
                        disabled={editMode}
                    />
                </div>
            </article>
            <article>
                <div className="user--profile__field user--profile--address">
                    <p className="label headline">{"Address"}</p>
                    <Input
                        name="billingAddress"
                        value={billingAddress}
                        placeholder="Billing address..."
                        onChange={onHandleUserInput}
                        disabled={editMode}
                    />
                </div>
            </article>
        </Fragment>
    );
};

UserBillingInformation.propTypes = {
    billingState: PropTypes.string,
    billingZipCode: PropTypes.string,
    billingAddress: PropTypes.string,
    editMode: PropTypes.bool,
    onHandleSelectBillingState: PropTypes.func,
    onHandleOnlyNumber: PropTypes.func,
    onHandleUserInput: PropTypes.func
};
