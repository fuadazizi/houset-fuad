import React from 'react'
import NumberFormat from 'react-number-format';

// formatter so that price written in Rp format
export default function PriceFormatter({value}) {
    return (
        <NumberFormat
            displayType='text'
            value={value}
            thousandSeparator='.'
            decimalSeparator=','
            prefix="Rp "
        />
    )
}
