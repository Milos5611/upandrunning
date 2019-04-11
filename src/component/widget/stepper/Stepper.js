import PropTypes from "prop-types";
import React from "react";
import classnames from "classnames";

const Stepper = ({Icon, title, text, componentClassName}) => (
    <section className={classnames("fowler--stepper", "stepper", {[`${componentClassName}`]: componentClassName})}>
        <Icon/>
        <h3 className="fowler--what-is-cape__title">{title}</h3>
        <p className="fowler--what-is-cape__text">{text}</p>
    </section>
);

Stepper.propTypes = {
    Icon: PropTypes.func,
    title: PropTypes.string,
    text: PropTypes.string,
    componentClassName: PropTypes.string
};

export default Stepper;
