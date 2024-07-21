import React from 'react';
import { ScrollMenu } from 'react-horizontal-scrolling-menu';
import SelectionRoomCard from './SelectionRoomCard';

import "./assets/style/selection-room-container.css";

import dapur1 from "../assets/image/dapur-1.png";
import dapur2 from "../assets/image/dapur-2.png";
import kamar from "../assets/image/kamar.png";
import ruangtamu from "../assets/image/ruang-tamu.png";

// Container untuk quick select ruangan 
// Preview dapat discroll kesamping
export default function SelectionRoomContainer() {
    return (
        <div className="selection-room-container">
            <p className="selection-room-title"> Temukan tema ruangan favoritmu disini </p>
            <ScrollMenu>
                <SelectionRoomCard picture={dapur1} name="Ruang Dapur" />
                <SelectionRoomCard picture={kamar} name="Kamar Tidur" />
                <SelectionRoomCard picture={dapur2} name="Ruang Dapur" />
                <SelectionRoomCard picture={ruangtamu} name="Ruang Keluarga" />
                <SelectionRoomCard picture={dapur1} name="Ruang Dapur" />
                <SelectionRoomCard picture={kamar} name="Kamar Tidur" />
                <SelectionRoomCard picture={dapur2} name="Ruang Dapur" />
                <SelectionRoomCard picture={ruangtamu} name="Ruang Keluarga" />
            </ScrollMenu>
        </div>
    )
}
