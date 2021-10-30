import React, { useState } from 'react'
import ReverseTimer from '../ReverseTimer';
import Login from "../Modals/Login";

export default function Preview({ handleStartEvent, inicio }) {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <div className="flex flex-col items-center gap-5 ">
            <Login isOpen={isOpen} closeModal={() => setIsOpen(false)} isPre={true} />
            <div className="mt-3 bg-white bg-opacity-0 text-white text-center w-max px-3 pt-6 lg:px-5 lg:py-8 rounded-large">
                <p className="font-semibold text-md lg:text-base text-gray-100">PRÓXIMAMENTE</p>
                <p className="font-extrabold text-xl lg:text-4xl uppercase">I Feria Virtual Bicentenario</p>
                <p className="font-extrabold text-xl lg:text-4xl uppercase">BANSEGURO 2021</p>
            </div>
            <div className="mt-1 font-bold bg-gray-200 text-blackText text-center w-max px-3 py-6 lg:px-5 lg:py-8 rounded-large shadow-md">
                <p>EMPIEZA EN</p>
                <ReverseTimer handleAction={handleStartEvent} dateCompate={inicio} />
            </div>
            <button onClick={() => setIsOpen(true)} className="mt-3 w-max animate-bounce mx-auto flex py-2 px-4 font-semibold rounded-full shadow-md text-white bg-blue-600 hover:bg-blue-700">
                Pre inscríbete
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
            </button>
        </div>
    )
}
