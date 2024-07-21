import e from "cors";
import React from "react";
import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Button from "../Components/Button";
import Footer from "../Components/Footer";
import NavigationBar from "../Components/NavigationBar";
import "./assets/style/contact-us.css";
import {
    LocationOnIcon,
    PhoneIcon,
    WatchLaterIcon,
    EmailIcon,
} from "./assets/svg";

const ContactUs = () => {
    return (
        <>
            <NavigationBar />
            <Container className="contact-us-page">
                <Row className="contact-us">
                    <Col className="contact-form" sm={9}>
                        <div className="form-header-contact">
                            <div className="form-header-title">
                                <h1>Hubungi Kami</h1>
                            </div>
                            <div className="form-header-description">
                                <p>
                                    Kami senang mendengar kabar dari Anda,
                                    pelanggan Houset.
                                </p>
                                <p>
                                    Jika terdapat pertanyaan, silakan hubungi
                                    layanan kami dan kami siap membantu.
                                </p>
                            </div>
                        </div>
                        <div className="form-body">
                            <ContactUsForm />
                        </div>
                    </Col>
                    <Col sm={3} className="contact-information">
                        <ContactInformation />
                    </Col>
                </Row>
            </Container>
            <Footer />
        </>
    );
};

export default ContactUs;

const ContactUsForm = () => {
    const [name, setName] = useState("");
    const [address, setAddress] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    // const IndonesiaPhoneRegex = "/^(^+62|62|^08)(d{3,4}-?){2}d{3,4}$/";
    const submitHandler = () => {};

    return (
        <form onSubmit={submitHandler}>
            <div className="form-input-group">
                <div className="form-input-name">
                    <label htmlFor="name" className="input-label">
                        Nama
                    </label>
                    <input
                        type="text"
                        name="name"
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Masukkan nama anda"
                    />
                </div>
                <div className="form-input-address">
                    <label htmlFor="address" className="input-label">
                        Alamat
                    </label>
                    <input
                        type="text"
                        name="address"
                        onChange={(e) => setAddress(e.target.value)}
                        placeholder="Masukan alamat anda"
                    />
                </div>
            </div>
            <div className="form-input-group">
                <div className="form-input-phone">
                    <label htmlFor="phone" className="input-label">
                        Nomor Telepon
                    </label>
                    <input
                        type="tel"
                        name="phone"
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="Masukan nomor telepon anda"
                    />
                </div>
                <div className="form-input-email">
                    <label htmlFor="email" className="input-label">
                        Email
                    </label>
                    <input
                        type="text"
                        name="email"
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Masukan email anda"
                    />
                </div>
            </div>
            <div className="form-input-group">
                <div className="form-input-message">
                    <label htmlFor="message" className="input-label">
                        Pesan
                    </label>
                    <textarea
                        type="text"
                        name="message"
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder="Tulis pesan yang ingin disampaikan disini"
                    />
                </div>
            </div>
            <div className="form-submit-button">
                <Button type="primary-button" text="Kirim" />
            </div>
        </form>
    );
};
const ContactInformation = () => {
    const contacts = [
        {
            logo: LocationOnIcon,
            name: "Alamat",
            desc: ["Jl. Telekomunikasi, Sukapura, Kec. Dayeuhkolot, Bandung, Jawa Barat 40257"],
        },
        {
            logo: PhoneIcon,
            name: "Telepon",
            desc: ["+(022) 9999 1919"],
        },
        {
            logo: WatchLaterIcon,
            name: "Jam Operasional",
            desc: [`Senin - Kamis: 9.00 - 17.00 WIB`,`Jumat: 9.00 - 16.00 WIB`],
        },
        {
            logo: EmailIcon,
            name: "E-mail",
            desc: ["houset.startup@gmail.com"],
        },
    ];
    return (
        <div className="contact-information-card">
            {contacts.map((contact, index) => {
                const LogoIcon = contact.logo;
                return (
                    <div className="contact-information-item" key={index}>
                        <div className="information-logo">
                            <LogoIcon />
                        </div>
                        <div className="information-contact">
                            <div className="information-name">
                                <h3>{contact.name}</h3>
                            </div>
                            <div className="information-description">
                                {contact.desc.map((desc,index) => (
                                    <p key={index}>{desc}</p>
                                ))}
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};
