import PropTypes from "prop-types";
import React from "react";
import {Section} from "../index";
import classnames from "classnames";

const LegalPage = ({data, componentClassName}) => (
    <Section>
        <div className={classnames("legal-page", {
            [`legal-page--${componentClassName}`]: componentClassName
        })}>
            <div
                dangerouslySetInnerHTML={{__html: data}}
            />
        </div>
    </Section>
);

LegalPage.propTypes = {
    data: PropTypes.string,
    componentClassName: PropTypes.string
};

export default LegalPage;
