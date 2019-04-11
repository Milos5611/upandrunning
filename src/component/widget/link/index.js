/* eslint-disable */
import React from "react";
import TwitterIcon from "-!svg-react-loader!../../../www/images/links/icon.svg";
import LinkedInIcon from "-!svg-react-loader!../../../www/images/links/linkedin-logo.svg";
import FacebookIcon from "-!svg-react-loader!../../../www/images/links/facebook-app-logo.svg";
import GooglePlusIcon from "-!svg-react-loader!../../../www/images/links/google-plus-logo-on-black-background.svg";
import InstagramIcon
    from "-!svg-react-loader!../../../www/images/links/instagram-social-network-logo-of-photo-camera.svg";
import PinterestIcon from "-!svg-react-loader!../../../www/images/links/pinterest-social-logo.svg";
import YouTubeIcon from "-!svg-react-loader!../../../www/images/links/youtube-logotype.svg";

const DEFAULT_ICON_SIZE = 10;
export const TwitterLink = ({accountName, size = DEFAULT_ICON_SIZE}) => (
    <a href={`https://twitter.com/${accountName}`}>
        <TwitterIcon size={size}/>
    </a>
);

export const LinkedInLink = ({accountName, size = DEFAULT_ICON_SIZE}) => (
    <a href={`https://www.linkedin.com/company/${accountName}`}>
        <LinkedInIcon size={size}/>
    </a>
);

export const FacebookLink = ({accountName, size = DEFAULT_ICON_SIZE}) => (
    <a href={`https://www.facebook.com/${accountName}`}>
        <FacebookIcon size={size}/>
    </a>
);

export const PinterestLink = ({accountName, size = DEFAULT_ICON_SIZE}) => (
    <a href={`https://www.pinterest.com/${accountName}`}>
        <PinterestIcon size={size}/>
    </a>
);

export const YouTubeLink = ({channel, size = DEFAULT_ICON_SIZE}) => (
    <a href={`https://www.youtube.com/channel/${channel}`}>
        <YouTubeIcon size={size}/>
    </a>
);

export const InstagramLink = ({accountName, size = DEFAULT_ICON_SIZE}) => (
    <a href={`https://www.instagram.com/${accountName}`}>
        <InstagramIcon size={size}/>
    </a>
);
