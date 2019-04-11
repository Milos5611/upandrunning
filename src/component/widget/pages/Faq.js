import {
    Accordion,
    AccordionItem,
    AccordionItemBody,
    AccordionItemTitle
} from "react-accessible-accordion";
import {Banner, Section} from "../index";
import React, {Fragment} from "react";
import FaqBanner from "../../../www/images/static/faq-banner.jpg";
import {animateScroll} from "react-scroll";

const Faq = () => {
    animateScroll.scrollToTop();
    return (
        <Fragment>
            <Banner
                componentClassName="faq"
                banner={FaqBanner}
                width="100%"
                alt="FAQ Hero Banner"
            />
            <Section>
                <h1 className="fowler--faq__headline">{"General questions"}</h1>
                <section className="fowler--faq__accordion--wrapper">
                    <Accordion>
                        <AccordionItem>
                            <AccordionItemTitle>
                                <h3 className="accordion__item__headline">{"Is Dr. CAiPE safe? "}</h3>
                                <div
                                    className="accordion__arrow"
                                    role="presentation"
                                />
                            </AccordionItemTitle>
                            <AccordionItemBody>
                                <p className="accordion__text">
                                    {"Yes, Dr. CAiPE has been vetted by a focus group of doctors who specialize in pediatrics," +
                                    " internal medicine and family practice.  The protocols and approach used by Dr. CAiPE " +
                                    "provides consistent standards that avoid the errors associated with human " +
                                    "practitioners."}
                                </p>
                            </AccordionItemBody>
                        </AccordionItem>
                        <AccordionItem>
                            <AccordionItemTitle>
                                <h3 className="accordion__item__headline">{"Is there a doctor involved?"}</h3>
                                <div
                                    className="accordion__arrow"
                                    role="presentation"
                                />
                            </AccordionItemTitle>
                            <AccordionItemBody>
                                <p className="accordion__text">
                                    {"Yes, Dr. CAiPE uses licensed doctors in each and every state where Dr. CAiPE is implemented" +
                                    " to ensure proper prescriptive authority and that complies with each state's " +
                                    "standards and regulations."}
                                </p>
                            </AccordionItemBody>
                        </AccordionItem>
                        <AccordionItem>
                            <AccordionItemTitle>
                                <h3 className="accordion__item__headline">{"Why is Dr. CAiPE limited to just a few illnesses and symptoms?"}</h3>
                                <div
                                    className="accordion__arrow"
                                    role="presentation"
                                />
                            </AccordionItemTitle>
                            <AccordionItemBody>
                                <p className="accordion__text">
                                    {"Dr. CAiPE is designed to address the simple, routine ailments commonly seen in urgent " +
                                    "care facilities.  The goal of Dr. CAiPE is to offer a more affordable and quicker " +
                                    "response to the needs of patients.  We know that illnesses are not isolated to " +
                                    "an 8 to 5 schedule.  That is why Dr. CAiPE is here when you need it."}
                                </p>
                            </AccordionItemBody>
                        </AccordionItem>
                        <AccordionItem>
                            <AccordionItemTitle>
                                <h3 className="accordion__item__headline">{"Are there any limits on how many prescriptions I can obtain?"}</h3>
                                <div
                                    className="accordion__arrow"
                                    role="presentation"
                                />
                            </AccordionItemTitle>
                            <AccordionItemBody>
                                <p className="accordion__text">
                                    {"Yes, our proprietary system protects against over use of any medication. " +
                                    " Dr. CAiPE is dedicated to ensuring patient safety and security.  For that reason our " +
                                    "system is able to identify if a person is receiving 'too many' prescriptions. " +
                                    " The health and safety of patients is of the utmost importance to Dr. CAiPE."}
                                </p>
                            </AccordionItemBody>
                        </AccordionItem>
                    </Accordion>
                </section>
            </Section>
        </Fragment>
    );
};

export default Faq;
