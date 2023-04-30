import React from 'react'
import data from './data.json'
import { CardList } from '../../components'

export const Home: React.FC = () => {
    return (
        <div className="flex justify-center">
            <div className="container pb-12 pt-20">
                <h3 className="poppins px-4 text-center text-2xl lg:text-4xl font-medium text-gray-700">Warranty & Services</h3>
                <CardList data={data} />
            </div>
        </div>
    )
}
