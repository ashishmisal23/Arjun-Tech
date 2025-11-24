import React from 'react';
import '../Style/contact-us.css';
import { Link } from 'react-router-dom';
import ContactForm from './ContactForm';



const ContactUs = () => {
    return (
        <section className="primary-bg-color" id="call-us">
            <div className="section-common">
                <div className="call-now-container">

                    <h2 className="white-color align-center large-heading">Contact US</h2>
                    <Link to="tel:+917879797676" target='_blank' rel='noreferrer'>
                        <div id="call-us-btn" >
                            <img src="https://img.icons8.com/fluency-systems-filled/48/FFFFFF/phone.png" alt="phone" />
                            <p className="white-color align-center fifth-large-heading">Call Now</p>
                        </div>
                    </Link>
                    <div className="call-email-container">

                        <p className="white-color align-center fifth-large-heading">
                            <Link to="tel:+917879797676" target='_blank'>
                                <strong>78 7979 7676</strong>
                            </Link>
                        </p>
                        <p className="white-color align-center fifth-large-heading"><Link to="mailto:admin@arjuntech.in"
                            className="white-color" target='_blank'>admin@arjuntech.in</Link></p>
                    </div>
                    <ContactForm />
                </div>

            </div>
        </section>
    )
}

export default ContactUs