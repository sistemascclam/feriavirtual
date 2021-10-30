import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useEffect, useState } from 'react'

export default function VideoPlayer({ isOpen, closeModal, src }) {

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
                        <div className="relative inline-block w-full max-w-4xl	 overflow-hidden text-center align-middle transition-all transform bg-white shadow-2xl rounded-2xl">
                            <span className="cursor-pointer flex justify-center content-center items-center select-none absolute top-1 right-1 z-10  w-8 h-8 text-black rounded-full hover:shadow-lg hover:text-white hover:bg-black hover:bg-opacity-50" onClick={closeModal}>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                                </svg>
                            </span>
                            <video width="100%" preload="metadata" controls autoplay>
                                <source src={src} type="video/mp4" />
                                Tu buscador no soporta este tipo de video.
                            </video>
                        </div>
                    </Transition.Child>
                </div>
            </Dialog>
        </Transition>
    )
}
