import PropTypes from "prop-types";
import React from "react";

class Home extends React.Component {
    render() {
        return null;
    }
}
const mapStateToProps = (state, ownProps) => {
    return({
        state: state,
        cookies: ownProps.cookies,
    });
};

export const HomeContainer = connect(
    mapStateToProps,
    null
)(Home);
export default HomeContainer;
