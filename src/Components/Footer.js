import React from "react"

import HousetLogo from "../assets/image/houset-logo.png"

import "./assets/style/footer.css";

export default function Footer() {
    return (
        <footer>
            <div className="info-section d-flex">
                <div className="p2 flex-fill">
                    <img src={HousetLogo} alt="" />
                </div>

                <ul className="houset-info p2 flex-fill">
                    <p>Jelajahi Houset</p>
                    <li> Tentang Kami </li>
                    <li> Blog </li>
                    <li> Hubungi Kami </li>
                    <li> Penawaran dan Promo </li>
                    <li> Testimoni </li>
                </ul>

                <ul className="houset-helpdesk p2 flex-fill">
                    <p>Bantuan</p>
                    <li> Houset Care </li>
                    <li> Syarat dan Ketentuan </li>
                    <li> Kebijakan Privasi </li>
                    <li> FAQ </li>
                    <li> Status </li>
                </ul>

                <div className="houset-subscribe p2 flex-fill">
                    <p className=""> Berlangganan </p>
                    <input type="text" placeholder="Masukkan alamat email" />
                </div>
            </div>

            <div className="copyright-section">
                <p> © 2021 Houset. All rights reserved </p>
            </div>
        </footer>
    )
}