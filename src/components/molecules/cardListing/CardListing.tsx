import React from 'react'
import { type Card } from '../../../types/card'

interface Props extends Card {}

export const CardListing: React.FC<Props> = ({ title, text, thumb }) => {
    return (
        <div className="cursor-pointer bg-white border rounded-lg hover:drop-shadow-xl">
            <img src={thumb} alt="thumb" />
            <div className="px-9 py-7">
                <h3 className="poppins text-gray-700 font-semibold text-lg">{title}</h3>
                <p className="poppins text-gray-600 mt-3">{text}</p>
            </div>
        </div>
    )
}
