import React from 'react'
import Link from 'next/link'

export default function Ended() {
    return (
        <div className="flex flex-col items-center ">
            <div className="font-bold bg-white bg-opacity-0 text-white text-center w-max px-3 py-6 lg:px-5 lg:py-8 rounded-large">
                <p className="font-semibold text-md lg:text-base mb-3">Si te la perdiste...</p>
                <p className="font-extrabold text-xl lg:text-4xl uppercase">I Feria Virtual Bicentenario</p>
                <p className="font-extrabold text-xl lg:text-4xl uppercase">BANSEGURO 2021</p>
                <Link href="/si-te-lo-perdiste">
                <a className="w-max animate-bounce mt-10 mx-auto flex py-2 px-4 font-semibold rounded-full shadow-md text-white bg-blue-600 hover:bg-blue-500">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-1" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z" />
                    </svg>
                    Recordar
                </a>
                </Link>
            </div>
        </div>
    )
}
