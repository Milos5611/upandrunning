import {LazyLoadImage} from "react-lazy-load-image-component";
import PropTypes from "prop-types";
import React from "react";
import classnames from "classnames";

const Banner = ({banner, effect, width, height, alt, innerType = "", componentClassName, children}) => (
    <div className={classnames("banner type--center", {[`${componentClassName}`]: componentClassName})}>
        <LazyLoadImage
            alt={alt}
            height={height}
            src={banner}
            width={width}
            effect={effect}
            wrapperClassName="img-wrap"
            threshold={0}
            style={{position: "relative", height: "100%"}}
        />
        {
            children &&
            <div className={`banner__inner banner--${innerType}`}>
                {children}
            </div>
        }
    </div>
);

Banner.propTypes = {
    banner: PropTypes.string,
    effect: PropTypes.string,
    width: PropTypes.string,
    height: PropTypes.string,
    componentClassName: PropTypes.string,
    alt: PropTypes.string,
    innerType: PropTypes.string,
    children: PropTypes.oneOfType([
        PropTypes.element,
        PropTypes.arrayOf(PropTypes.element)
    ])
};

export default Banner;
