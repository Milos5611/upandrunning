import PropTypes from "prop-types";
import React from "react";
import classnames from "classnames";

const Section = ({id, children, className = "", style = {}}) => {
    return (
        <section
            id={id}
            className={classnames("section", {[`${className}`]: className})}
            style={style}>
            <div className="section__inner">
                {children}
            </div>
        </section>
    );
};

Section.propTypes = {
    id: PropTypes.string,
    children: PropTypes.oneOfType([
        PropTypes.element,
        PropTypes.arrayOf(PropTypes.element)
    ]),
    className: PropTypes.string,
    style: PropTypes.object
};

export default Section;
