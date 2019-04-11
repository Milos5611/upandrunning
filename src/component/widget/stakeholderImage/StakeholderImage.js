import PropTypes from "prop-types";
import React from "react";

const StakeholderImage = ({stakeholder, name}) => (
    <div className="image-block">
        <div className="image--container centred">
            <img
                src={stakeholder}
                className="image"
                alt={name}
            />
        </div>
    </div>
);

StakeholderImage.propTypes = {
    stakeholder: PropTypes.string,
    name: PropTypes.string
};

export default StakeholderImage;
