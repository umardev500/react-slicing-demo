import React from 'react'
import { type Card } from '../../../types'
import { CardListing } from '../../molecules'

interface Props {
    data: Card[]
}

export const CardList: React.FC<Props> = ({ data }) => {
    return (
        <div className="mt-20 px-4 xl:px-32 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {data.map((val) => (
                <CardListing {...val} key={val.id} />
            ))}
        </div>
    )
}
