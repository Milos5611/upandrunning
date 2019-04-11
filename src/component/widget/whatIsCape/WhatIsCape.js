import PropTypes from "prop-types";
import React from "react";
import classnames from "classnames";

const WhatIsCape = ({title, text, componentClassName}) => (
    <section className={classnames("fowler--cape", {[`${componentClassName}`]: componentClassName})}>
        <h1 className="fowler--cape__headline big-headline">{title}</h1>
        <p className="fowler--cape__text">{text}</p>
    </section>
);

WhatIsCape.propTypes = {
    title: PropTypes.string,
    text: PropTypes.string,
    componentClassName: PropTypes.string
};

export default WhatIsCape;
