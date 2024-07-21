import React from 'react'

export default function DateFormatter({ dayAddition }) {
    // return a new format date from today
    // dayAddition add day from today

    const today = new Date();
    const date = today.getDate() + dayAddition;
    const year = today.getFullYear();
    const toDay = () => {
        switch (today.getDay()) {
            case 0: return "Minggu";
            case 1: return "Senin";
            case 2: return "Selasa";
            case 3: return "Rabu";
            case 4: return "Kamis";
            case 5: return "Jumat";
            case 6: return "Sabtu";
            default: return "can't fetch day";
        }
    }
    const day = toDay();

    const toMonth = () => {
        switch (today.getMonth()) {
            case 0: return "Januari"
            case 1: return "Februari";
            case 2: return "Maret";
            case 3: return "April";
            case 4: return "Mei";
            case 5: return "Juni";
            case 6: return "Juli";
            case 7: return "Agustus";
            case 8: return "September";
            case 9: return "Oktober";
            case 10: return "November";
            case 12: return "Desember";
            default: return "can't fetch month";
        }
    }
    const month = toMonth();

    const minute = () => {
        const min = today.getMinutes();
        if (min < 10) {
            return "0" + min;
        } else {
            return min;
        }
    }

    // console.log(today.get())
    const time = today.getHours() + ":" + minute();

    const fullDate = day + ", " + date + " " + month + " " + year + " " + time;
    // console.log(fullDate)

    return (
        <>
            {fullDate}
        </>
    )
}
