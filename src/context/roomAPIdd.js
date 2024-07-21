import axios from "../api/axios";
import {createContext, useEffect, useState } from "react";

const GetRoomDataContext = createContext();

export function GetRoomDataProvider({ children }) {
    const [rooms, setRooms] = useState([]);
    // const url = process.env.REACT_APP_URL;

    useEffect(() => {
        const getData = async () => {
            await axios
                .get(`/room`, {})
                .then((res) => setRooms(res.data))
                .catch((error) => console.log(error));
        };
        getData();
        return () => {
            setRooms([]);
        };
    }, []);

    const changeWishlist = (type, id, favorite) => {
        // function to change fav through API
        switch (type) {
            case "room":
                const editWishlist = () => {
                    axios.patch(`/room/${id}`, { fav: !favorite });
                };
                editWishlist();
                break;
            // case "product":

            default:
                break;
        }
    };

    useEffect(() => {
        // console.log(rooms);
    }, [rooms]);

    return (
        <GetRoomDataContext.Provider
            value={{ rooms, setRooms, changeWishlist }}
        >
            {children}
        </GetRoomDataContext.Provider>
    );
}
export default GetRoomDataContext;
