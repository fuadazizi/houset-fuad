import React from 'react';

import "./assets/style/selection-room-card.css";

// Elemen per ruangan yang dapat discroll

export default function SelectionRoomCard( {picture, name} ) {
    return (
        <div className="selection-card-scrollable">
            {/* <div> */}
                {/* {console.log(picture.path)} */}
                <img src={picture} alt="" />
                <p> {name} </p>
            {/* </div> */}
        </div>
    )
}
