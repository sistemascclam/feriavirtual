import React, { useState } from 'react'
import Image from 'next/image';
import Link from 'next/link'
import ReverseTimer from '../ReverseTimer';
import Login from "../Modals/Login";
import { useSelector } from 'react-redux';
import TransitionVideo from '../TransitionVideo';
import { motion } from "framer-motion"

export default function Started({ handleEndEvent, final }) {
    const [isOpen, setIsOpen] = useState(false)
    const { authUser, token } = useSelector(({ auth }) => auth);
    const [startTransition, setstartTransition] = useState(false);

    const onEndTransition = () => {

    }

    return (
        <div className="w-full min-h-screen relative">
            <Login isOpen={isOpen} closeModal={() => setIsOpen(false)} isPre={false} />
            {
                token ?
                    <>
                        <button onClick={() => setstartTransition(true)} className="w-max animate-bounce mx-auto absolute bottom-10 mb-20 lg:mb-6 inset-x-0 flex py-2 px-4 font-semibold rounded-full shadow-md text-white bg-blue-700 hover:bg-blue-800">
                            Ya puedes ingresar
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                            </svg>
                        </button>
                    </>
                    :
                    <button onClick={() => setIsOpen(true)} className="w-max animate-bounce mx-auto absolute bottom-10 mb-20 lg:mb-6 inset-x-0 flex py-2 px-4 font-semibold rounded-full shadow-md text-white bg-blue-700 hover:bg-blue-800">
                        Inscríbete
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                    </button>
            }
            <div className="absolute bottom-5 inset-x-0 lg:top-5 lg:inset-x-auto lg:left-5 text-white text-center text-sm">
                Terminamos en
                <ReverseTimer handleAction={handleEndEvent} dateCompate={final} small={true} />
            </div>
            {
                startTransition &&
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    exit={{ opacity: 0 }}
                >
                    <TransitionVideo
                        newRoute={"entrada"}
                        videroUrl={"/videos/trantitions/entrada.mp4"}
                        onEndTransition={onEndTransition} />
                </motion.div >
            }
        </div>
    )
}
