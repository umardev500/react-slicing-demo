import React from 'react'

export const Home: React.FC = () => {
    return (
        <div className="flex justify-center">
            <div className="container pb-12 pt-20">
                <h3 className="poppins px-4 text-center text-2xl lg:text-4xl font-medium text-gray-700">Warranty & Services</h3>
                <div className="mt-20 px-4 xl:px-32 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Item */}
                    <div className="bg-white border rounded-lg hover:drop-shadow-xl">
                        <img src="thumbs/thumb-1.png" alt="thumb" />
                        <div className="px-9 py-7">
                            <h3 className="poppins text-gray-700 font-semibold text-lg">Warranty & maintenance</h3>
                            <p className="poppins text-gray-600 mt-3">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </p>
                        </div>
                    </div>
                    <div className="bg-white border rounded-lg hover:drop-shadow-xl">
                        <img src="thumbs/thumb-2.png" alt="thumb" />
                        <div className="px-9 py-7">
                            <h3 className="poppins text-gray-700 font-semibold text-lg">24/7 Roadside Assistance</h3>
                            <p className="poppins text-gray-600 mt-3">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </p>
                        </div>
                    </div>
                    <div className="bg-white border rounded-lg hover:drop-shadow-xl">
                        <img src="thumbs/thumb-3.png" alt="thumb" />
                        <div className="px-9 py-7">
                            <h3 className="poppins text-gray-700 font-semibold text-lg">Financial service</h3>
                            <p className="poppins text-gray-600 mt-3">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
