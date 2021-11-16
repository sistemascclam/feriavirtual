import React, { useState } from 'react'
import Image from 'next/image';
import Link from 'next/link'
import ReverseTimer from '../ReverseTimer';
import Login from "../Modals/Login";
import { useSelector } from 'react-redux';
import Entrada from '../Transitions/Entrada';
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
            <div className="transform scale-90 lg:mr-20 flex flex-col lg:flex-row justify-end">
                <div className="animate-wiggle w-max mx-auto lg:mx-0">
                    <div className="transform rotate-new scale-x-invert w-max">
                        <div className="relative mr-10 w-60 lg:w-80 h-max">
                            <Image
                                alt="Airship"
                                src="/images/airship.png"
                                height={160}
                                width={280}
                                layout="responsive"
                            />
                        </div>
                    </div>
                    <div className="leading-tight relative -mt-12 lg:-mt-14 mx-auto font-bold bg-white bg-opacity-80 shadow-md text-blackText text-center w-max p-4 lg:p-6 rounded-large">
                        {authUser ?
                            <>
                                <p className="text-md text-gray-500">Hola, {authUser}.</p>
                                <p className="text-md font-normal my-1">Bienvenid@ a nuestra</p>
                            </>
                            :
                            <p className="text-md font-normal my-1">Bienvenidos a nuestra</p>
                        }
                        <p className="text-xl leading-tight">I FERIA VIRTUAL</p>
                        <p className="text-xl leading-tight">BICENTENARIO BANSEGURO 2021</p>
                    </div>
                </div>
            </div>
            {
                token ?
                    <>
                        <button onClick={() => setstartTransition(true)} className="w-max animate-bounce mt-44 mx-auto flex py-2 px-4 font-semibold rounded-full shadow-md text-white bg-blue-600 hover:bg-blue-700">
                            Ingresar
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                            </svg>
                        </button>
                        {/* <Link href={`/presentacion`}>
                            <a className="w-max animate-bounce mt-44 mx-auto flex py-2 px-4 font-semibold rounded-full shadow-md text-white bg-blue-600 hover:bg-blue-700">
                                Ingresar
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                </svg>
                            </a>
                        </Link> */}
                    </>
                    :
                    <button onClick={() => setIsOpen(true)} className="w-max animate-bounce mt-44 mx-auto flex py-2 px-4 font-semibold rounded-full shadow-md text-white bg-blue-600 hover:bg-blue-700">
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
                <Entrada
                newRoute={"feria"}
                videroUrl={"/videos/trantitions/pruebatransicion.mp4"}
                onEndTransition={onEndTransition} />
                </motion.div >
            }
        </div>
    )
}
