import {
    ADDRESS,
    BILLING_ADDRESS,
    BILLING_STATE,
    BILLING_ZIP_CODE,
    DATE_OF_BIRTH,
    EMAIL,
    ERROR,
    FIRST_NAME,
    LAST_NAME,
    PASSWORD,
    PHONE,
    STATE,
    ZIP_CODE,
} from "../service/reducer/userProfile";
import {
    getUserProfileData,
    updateUserData,
    updateUserProfileAddress,
    updateUserProfileBillingAddress,
    updateUserProfileBillingState,
    updateUserProfileBillingZipCode,
    updateUserProfileDob,
    updateUserProfileFirstName,
    updateUserProfileLastName,
    updateUserProfilePassword,
    updateUserProfilePhone,
    updateUserProfileState,
    updateUserProfileZip
} from "../service/actionCreator/userProfileActionCreator";
import UserProfile from "../component/view/userProfile/UserProfile";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
    return {
        [EMAIL]: state.userProfile[EMAIL],
        [FIRST_NAME]: state.userProfile[FIRST_NAME],
        [LAST_NAME]: state.userProfile[LAST_NAME],
        [ADDRESS]: state.userProfile[ADDRESS],
        [DATE_OF_BIRTH]: state.userProfile[DATE_OF_BIRTH],
        [PASSWORD]: state.userProfile[PASSWORD],
        [STATE]: state.userProfile[STATE],
        [ZIP_CODE]: state.userProfile[ZIP_CODE],
        [PHONE]: state.userProfile[PHONE],
        [BILLING_ADDRESS]: state.userProfile[BILLING_ADDRESS],
        [BILLING_STATE]: state.userProfile[BILLING_STATE],
        [BILLING_ZIP_CODE]: state.userProfile[BILLING_ZIP_CODE],
        [ERROR]: state.userProfile[ERROR],
    };
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        getUserProfileData, updateUserData, updateUserProfileState, updateUserProfileAddress,
        updateUserProfileDob, updateUserProfileFirstName, updateUserProfileLastName,
        updateUserProfileZip, updateUserProfilePhone, updateUserProfilePassword,
        updateUserProfileBillingAddress, updateUserProfileBillingState, updateUserProfileBillingZipCode,
    }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(UserProfile);
