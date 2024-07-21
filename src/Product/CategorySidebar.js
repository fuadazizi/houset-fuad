import React from 'react';

import "./assets/style/category-sidebar.css";

// Opsi kategori yang ada di samping kiri

export default function CategorySidebar() {
    return (
        <div className="category-sidebar">
            <p className="category-title-text"> Kategori </p>
            <hr className="category-title-border"/>
            <div className="category-list-choice">
                <ul className="category-ruangan">
                    <p className="category-section"> Ruangan </p>
                    <hr className="category-section-border"/>
                    <li> <input type="checkbox" /> Ruang Tamu </li>
                    <li> <input type="checkbox" /> Ruang Kerja </li>
                    <li> <input type="checkbox" /> Ruang Makan </li>
                    <li> <input type="checkbox" /> Ruang Keluarga </li>
                    <li> <input type="checkbox" /> Ruang Dapur </li>
                    <li> <input type="checkbox" /> Ruang Tidur </li>
                </ul>

                <ul className="category-desain">
                    <p className="category-section"> Desain Interior </p>
                    <hr className="category-section-border"/>
                    <li> <input type="checkbox" /> Rumah </li>
                    <li> <input type="checkbox" /> Apartemen </li>
                    <li> <input type="checkbox" /> Kantor </li>
                    <li> <input type="checkbox" /> Kitchen Set </li>
                    <li> <input type="checkbox" /> Hotel </li>
                    <li> <input type="checkbox" /> Toko</li>
                </ul>

                <ul className="category-furniture">
                    <p className="category-section"> Furniture </p>
                    <hr className="category-section-border"/>
                    <li> <input type="checkbox" /> Kursi </li>
                    <li> <input type="checkbox" /> Sofa </li>
                    <li> <input type="checkbox" /> Meja </li>
                    <li> <input type="checkbox" /> Lampu </li>
                    <li> <input type="checkbox" /> Karpet </li>
                    <li> <input type="checkbox" /> Tempat Tidur </li>
                    <li> <input type="checkbox" /> Kasur </li>
                    <li> <input type="checkbox" /> Dekorasi</li>
                </ul>

                <ul className="category-price">
                    <p className="category-section"> Harga </p>
                    <hr className="category-section-border"/>
                    <label> Max </label> <input type="text" className="category-min-price"/>
                    <input type="text" className="category-max-price"/>
                </ul>
            </div>
        </div>
    )
}
