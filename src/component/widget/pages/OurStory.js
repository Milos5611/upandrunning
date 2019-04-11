import {Banner, ImageBlock, Section, StakeholderImage} from "../index";
import React, {Fragment} from "react";
import Allen from "../../../www/images/story/stakeholders/ahurt.jpg";
import David from "../../../www/images/story/stakeholders/dstandridge.jpg";
import First_Left from "../../../www/images/story/First_Left.jpg";
import First_Right from "../../../www/images/story/First_Right.jpg";
import {Link} from "react-router-dom";
import Story from "../../../www/images/story/Story.jpg";
import Troy from "../../../www/images/story/stakeholders/troy.jpg";
import {animateScroll} from "react-scroll";

const OurStory = () => {
    animateScroll.scrollToTop();
    return (
        <Fragment>
            <Banner
                banner={Story}
                width="100%"
                height="100%"
                innerType="right"
                componentClassName="fowler--our-story__banner">
                <h1 className="fowler--hero__subhead">{"OUR MISSION"}</h1>
                <h2 className="fowler--hero__subtext">
                    {"To empower patients with the information and tools necessary to take control of their own healthcare. "}
                </h2>
                <div className="fowler--hero__link">
                    <Link to="/advisory">
                        <button
                            className="fowler--hero__button">
                            {"Get Prescription Now"}
                        </button>
                    </Link>
                </div>
            </Banner>
            <Section className="fowler--our-story">
                <h1 className="fowler--content-block__title">{"OUR TEAM"}</h1>
                <p className="fowler--content-block__text">
                    {"Allen Hurt, MD who currently owns and operates multi-provider primary care clinics in New Mexico" +
                    " and Texas. Elected to the New Mexico State Senate (2000). Dr. Hurt also owns and operates " +
                    "Veterans Disability Alliance, which is a medical entity dedicated to providing independent medical" +
                    " evaluations for disabled veterans who are involved in the VA disability system."}
                </p>
                <StakeholderImage
                    stakeholder={Allen}
                    name="Allen"
                />
                <p className="fowler--content-block__text">
                    {"David A. Standridge is an attorney licensed before all courts in the State of New Mexico, the " +
                    "Federal District Court, the 10th Circuit Court of Appeals, the Veterans Administration and the " +
                    "Court of Appeals for Veterans Claims.   He has practiced over twenty years and owns the firm, " +
                    "Justice Legal Group, along with other legal related businesses.  In his capacity as an attorney " +
                    "he focuses his practice primarily on assisting veterans who are fighting for their VA disability " +
                    "claims along with providing business consulting and litigation representation to various business " +
                    "entities, including international businesses."}
                </p>
                <StakeholderImage
                    stakeholder={David}
                    name="David"
                />
                <p className="fowler--content-block__text">
                    {"Troy is currently the Chief Growth Officer for Luscinia Health and he himself is an accomplished " +
                    "CEO, entrepreneur, technologist and leader. He’s well versed in publicly traded enterprises as a" +
                    " dot com executive and successful start-up executive. Troy brings years of strategic business " +
                    "development and technology experience to the table.  He’s a respected consultant to a variety of" +
                    " international non-profits, and software development companies. Troy has a knack for thinking " +
                    "outside-the-box and helping companies achieve accelerated growth through tech centered" +
                    " go-to-market strategies."}
                </p>
                <StakeholderImage
                    stakeholder={Troy}
                    name="Troy"
                />
                <div className="fowler--our-story__wrapper">
                    <h1 className="fowler--content-block__title">{"OUR PHILOSOPHY"}</h1>
                    <h1 className="fowler--our-story__information">
                        {"Dr. CAiPE takes a completely different approach to healthcare. Traditional healthcare utilizes " +
                        "the differential diagnosis method. CAiPE (Calamity Averse Interactive Prescription Engine) " +
                        "replaces the differential diagnosis with interactions that eliminate catastrophic conditions. Dr. CAiPE allows " +
                        "patients to make their own prescription decisions twenty-four hours a day, seven days a week," +
                        " three hundred sixty-five days a year."}
                    </h1>
                    <div className="fowler--hero__link">
                        <Link to="/advisory">
                            <button
                                className="fowler--hero__button">
                                {"Get Prescription Now"}
                            </button>
                        </Link>
                    </div>
                </div>
                <ImageBlock
                    leftImage={First_Left}
                    rightImage={First_Right}
                />
            </Section>
        </Fragment>
    );
};

export default OurStory;
