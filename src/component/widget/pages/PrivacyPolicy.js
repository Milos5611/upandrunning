import {Banner, LegalPage} from "../index";
import PrivacyBanner from "../../../www/images/static/privacy-policy.jpg";
import React from "react";
import {animateScroll} from "react-scroll";

const conditionsContent = require("../../../www/pages/privacy-policy.html");

const PrivacyPolicy = () => {
    animateScroll.scrollToTop();
    return (
        <div className="legal-page privacy-policy">
            <Banner
                componentClassName="privacy-banner"
                banner={PrivacyBanner}
                width="100%"
                alt="Privacy policy"
            />
            <LegalPage
                title="Privacy policy"
                data={conditionsContent}
                componentClassName="privacy"
            />
        </div>
    );
};

export default PrivacyPolicy;
