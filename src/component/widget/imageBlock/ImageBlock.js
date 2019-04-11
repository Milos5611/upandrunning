import PropTypes from "prop-types";
import React from "react";

const ImageBlock = ({leftImage, rightImage}) => (
    <div className="image-block">
        <div className="image--container">
            <img
                src={leftImage}
                className="image"
                alt="Content Image"
            />
        </div>
        <div className="image--container">
            <img
                src={rightImage}
                className="image"
                alt="Content Image"
            />
        </div>
    </div>
);

ImageBlock.propTypes = {
    leftImage: PropTypes.string,
    rightImage: PropTypes.string,
};

export default ImageBlock;
