import { Dialog, Transition } from '@headlessui/react'
import { Fragment } from 'react'
import Carousel from 'framer-motion-carousel'
import Image from 'next/image'

export default function ContenidoExtra({ isOpen, closeModal, cantidad, path }) {

    return (
        <Transition appear show={isOpen} as={Fragment}>
            <Dialog
                as="div"
                className="fixed inset-0 z-10 overflow-y-auto"
                onClose={closeModal}
            >
                <Dialog.Overlay className="fixed inset-0 bg-black opacity-80" />
                <div className="min-h-screen text-center">
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <Dialog.Overlay className="fixed inset-0" />
                    </Transition.Child>
                    <span
                        className="inline-block h-screen align-middle"
                        aria-hidden="true"
                    >
                        &#8203;
                    </span>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0 scale-95"
                        enterTo="opacity-100 scale-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100 scale-100"
                        leaveTo="opacity-0 scale-95"
                    >
                        <div className="relative inline-block w-full max-w-4xl overflow-hidden text-center align-middle transition-all transform bg-white bg-opacity-0  rounded-2xl">
                            <span className="cursor-pointer flex justify-center content-center items-center select-none absolute top-1 right-1 z-10  w-8 h-8 text-black rounded-full hover:shadow-lg hover:text-white hover:bg-black hover:bg-opacity-50" onClick={closeModal}>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                                </svg>
                            </span>
                            <Carousel>
                                {
                                    Array(cantidad).fill(1).map((a, k) =>
                                    <div className="relative w-full h-screen" key={`${path}_extra_${k}`}>
                                    <div className="absolute inset-0 z-0 pt-72">
                                        <svg className="animate-spin h-8 w-8 text-white mx-auto text-center" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                        </svg>
                                    </div>
                                        
                                        <Image
                                            alt={k}
                                            src={`/images/extra/${path}/${k+1}.jpg`}
                                            layout="fill"
                                            objectFit="contain"
                                        />
                                        </div>
                                    )
                                }
                                    </Carousel>
                        </div>
                    </Transition.Child>
                </div>
            </Dialog>
        </Transition>
    )
}
