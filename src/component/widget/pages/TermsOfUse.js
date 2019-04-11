import {Banner, LegalPage} from "../index";
import React from "react";
import TermsOfUseBanner from "../../../www/images/static/termofuse.jpg";
import {animateScroll} from "react-scroll";

const conditionsContent = require("../../../www/pages/terms-of-use.html");

const TermOfUsePage = () => {
    animateScroll.scrollToTop();
    return (
        <div className="legal-page terms-of-use">
            <Banner
                componentClassName="terms-banner"
                banner={TermsOfUseBanner}
                width="100%"
                alt="Terms Of Use"
            />
            <LegalPage
                title="Terms Of Use"
                data={conditionsContent}
                componentClassName="terms"
            />
        </div>
    );
};

export default TermOfUsePage;
