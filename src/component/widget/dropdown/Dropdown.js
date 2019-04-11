import {Cookies, withCookies} from "react-cookie";
import React, {Fragment} from "react";
import {Link} from "react-router-dom";
import Logout from "-!svg-react-loader!../../../www/images/header/Logout.svg";
import PropTypes from "prop-types";
import UserIcon from "-!svg-react-loader!../../../www/images/header/user_icon.svg";
import classnames from "classnames";

class Dropdown extends React.Component {

    static propTypes = {
        componentClassName: PropTypes.string,
        dropdownName: PropTypes.string,
        mobileView: PropTypes.bool,
        onPageClick: PropTypes.func,
        handleLogOut: PropTypes.func,
        cookies: PropTypes.instanceOf(Cookies).isRequired
    };

    state = {
        showMenu: false,
        isMobile: false
    };


    static getDerivedStateFromProps(props, state) {
        if (props.mobileView !== state.isMobile) {
            return {
                isMobile: props.mobileView
            };
        }
        return null;
    }

    handleClose = () => {
        this.props.onPageClick();
    };

    handleShowMenu = (event) => {
        event.preventDefault();
        if (!this.props.mobileView) {
            this.setState({showMenu: true}, () => {
                document.addEventListener("click", this.handleCloseMenu);
            });
        }
    };

    handleCloseMenu = (event) => {
        if (!this.dropdownMenu.contains(event.target)) {
            this.setState({showMenu: false}, () => {
                this.handleClose();
                document.removeEventListener("click", this.handleCloseMenu);
            });
        }
    };

    handleLogOut = (event) => {
        this.handleClose(event);
        this.props.handleLogOut(this.props.cookies);
    };

    render() {
        return (
            !this.props.mobileView ?
                <div className={`dropdown-wrapper type--center ${this.props.componentClassName}`}>
                    <UserIcon/>
                    <a onClick={this.handleShowMenu}>
                        {this.props.dropdownName}
                    </a>
                    <ul
                        className={classnames("dropdown", {"hidden": !this.state.showMenu})}
                        ref={(element) => {
                            this.dropdownMenu = element;
                        }}>
                        <li>
                            <Link
                                onClick={this.handleClose}
                                to="/userProfile">
                                {"My profile info"}
                            </Link>
                        </li>
                        <li>
                            <Link
                                onClick={this.handleLogOut}
                                to="/">
                                {"Log out"}
                            </Link>
                        </li>
                    </ul>
                </div> :
                <Fragment>
                    <Link
                        onClick={this.handleClose}
                        to="/userProfile">
                        {"My profile info"}
                    </Link>
                    <div className="log-out__bottom">
                        <Link
                            onClick={this.handleLogOut}
                            to="/">
                            <Logout/>
                            <p className="logout__label">{"Log out"}</p>
                        </Link>
                    </div>
                </Fragment>
        );
    }
}
export default withCookies(Dropdown);
