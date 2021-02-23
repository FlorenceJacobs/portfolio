import React, { FunctionComponent } from 'react';
import './contactSection.scss';

type Props = {
    colorBar: string,
    colorBarLinkIn: string,
    colorBg: string,
    colorIcon: string,
    colorIconLinkIn: string,
    colorIconGithub: string,
    colorFooter: string
};

const ContactSection : FunctionComponent<Props> = (props) => {
    
 return (
    <div className={props.colorFooter}>
        <div className="container contact-container">
            <div className="contact-col">
                <span className={props.colorBar}>
                    <i className={props.colorIcon}>mail</i>&nbsp;<a className="link-contact" href="mailto:florencejacobs85@gmail.com">florencejacobs85@gmail.com</a>
                </span>
            </div>
            <div className="contact-col padd-left">
                <span className={props.colorBar}>
                    <i className={props.colorIcon}>phone_android</i>&nbsp;<a className="link-contact" href="tel:+32492865800">+ 32 492 865 800</a>
                </span>
            </div>
            <div className="contact-col padd-left">
                <span className={props.colorBarLinkIn}>
                <a href="https://www.linkedin.com/in/florence-jacobs/" className="link-contact" target="_blank"><i className={props.colorIconLinkIn}></i></a>&nbsp;<a href="https://github.com/FlorenceJacobs" className="link-contact" target="_blank"><i className={props.colorIconGithub}></i></a>
                </span>
            </div>
        </div>
    </div>
 )
}
  
export default ContactSection;