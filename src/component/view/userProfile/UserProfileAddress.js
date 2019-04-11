import {Input, Select} from "../../widget";
import React, {Fragment} from "react";
import PropTypes from "prop-types";
import {states} from "../../../common/utils";

export const UserProfileAddress = ({state, editMode, onHandleSelectState, onHandleOnlyNumber, zipCode, address, onHandleUserInput}) => {
    return (
        <Fragment>
            <article>
                <div className="user--profile__field user--profile__select-city">
                    <p className="label headline">{"State"}</p>
                    <Select
                        value={state}
                        onChange={onHandleSelectState}
                        options={states}
                        componentClassName="select--state"
                        disabled={editMode}
                    />
                </div>
                <div className="user--profile__field user--profile__select-code">
                    <p className="label headline">{"Zip Code"}</p>
                    <Input
                        type="tel"
                        name="zipCode"
                        value={zipCode}
                        placeholder="Zip Code..."
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
                        name="address"
                        value={address}
                        placeholder="Address..."
                        onChange={onHandleUserInput}
                        disabled={editMode}
                    />
                </div>
            </article>
        </Fragment>
    );
};

UserProfileAddress.propTypes = {
    state: PropTypes.string,
    zipCode: PropTypes.string,
    address: PropTypes.string,
    editMode: PropTypes.bool,
    onHandleUserInput: PropTypes.func,
    onHandleOnlyNumber: PropTypes.func,
    onHandleSelectState: PropTypes.func,
};
