import React, {Fragment} from "react";
import PropTypes from "prop-types";
import classnames from "classnames";

const ContentBlock = ({Image, title, text, type, componentClassName}) => (
    <section className={classnames("fowler--content-block", {
        [`${componentClassName}`]: componentClassName,
        [`${type}`]: type
    })}>
        {/*<Image/>*/}
        {type === "left" ?
            <Fragment>
                {
                    typeof Image === "function" ?
                        <Image/> :
                        <img
                            src={Image}
                            alt="Content Block"
                        />
                }
                <aside>
                    {title && <h3 className={`fowler--content-block__title ${type}--side`}>{title}</h3>}
                    {text && <p className={`fowler--content-block__text  ${type}--side`}>{text}</p>}
                </aside>
            </Fragment> :
            <Fragment>
                <aside>
                    {title && <h3 className={`fowler--content-block__title ${type}--side`}>{title}</h3>}
                    {text && <p className={`fowler--content-block__text  ${type}--side`}>{text}</p>}
                </aside>
                <Image/>
            </Fragment>
        }
    </section>
);

ContentBlock.propTypes = {
    Image: PropTypes.oneOfType([
        PropTypes.func,
        PropTypes.string
    ]),
    title: PropTypes.string,
    text: PropTypes.string,
    type: PropTypes.string,
    componentClassName: PropTypes.string
};

export default ContentBlock;
