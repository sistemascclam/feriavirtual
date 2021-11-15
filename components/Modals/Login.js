import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useEffect, useState } from 'react'
import { useForm } from "react-hook-form";

import { useSelector, useDispatch } from 'react-redux'
import { signup, signin, checkuser, resetcheck } from "../../redux/actions/auth"

var timeOutFunc;
export default function Login({ isOpen, closeModal, isPre }) {
    const dispatch = useDispatch()
    const { register, handleSubmit, reset } = useForm();
    const { userExists } = useSelector(({ auth }) => auth);
    const [dni, setdni] = useState("");

    const onSubmit = (data) => {
        setdni("")
        if (isPre) {
            dispatch(signup(data));
        } else {
            dispatch(signin(data));
        }
        closeModal();
    }

    const handleDocTyped = (e) => {
        clearTimeout(timeOutFunc);
        setdni(e.target.value);
        if (e.target.value) {
            timeOutFunc = setTimeout(() => {
                dispatch(checkuser({ dni: e.target.value }));
            }, 500);
        } else {
            dispatch(resetcheck());
        }
    }

    useEffect(() => {
        reset({ dni: dni });
        if (userExists.user) {
            reset({ ...userExists.user, dni: userExists.user.username });
        }
    }, [userExists])

    return (
        <Transition appear show={isOpen} as={Fragment}>
            <Dialog
                as="div"
                className="fixed inset-0 z-10 overflow-y-auto"
                onClose={closeModal}
            >
                <Dialog.Overlay className="fixed inset-0 bg-black opacity-80" />
                <div className="min-h-screen px-4 text-center">
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
                        <div className="relative inline-block w-full max-w-lg p-6 my-8 overflow-hidden text-center align-middle transition-all transform bg-white shadow-2xl rounded-2xl">
                            <Dialog.Title
                                as="h3"
                                className="text-lg font-medium leading-6 text-gray-900"
                            >
                                {isPre ? "Preinscripcion" : "Registro"}
                                <button className="absolute top-3 right-5" onClick={closeModal}>x</button>
                            </Dialog.Title>
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div className="mt-2">
                                    <p className="text-sm text-gray-500 mb-6">
                                        Regístrate en la I FERIA VIRTUAL BICENTENARIO BANSEGURO 2021.
                                    </p>
                                    <div className="grid grid-cols-6 gap-4">
                                        <div className="col-span-6 sm:col-span-3 relative text-gray-400 focus-within:text-blue-500 block">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 pointer-events-none absolute top-1/2 transform -translate-y-1/2 left-3" viewBox="0 0 20 20" fill="currentColor">
                                                <path fillRule="evenodd" d="M10 2a1 1 0 00-1 1v1a1 1 0 002 0V3a1 1 0 00-1-1zM4 4h3a3 3 0 006 0h3a2 2 0 012 2v9a2 2 0 01-2 2H4a2 2 0 01-2-2V6a2 2 0 012-2zm2.5 7a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm2.45 4a2.5 2.5 0 10-4.9 0h4.9zM12 9a1 1 0 100 2h3a1 1 0 100-2h-3zm-1 4a1 1 0 011-1h2a1 1 0 110 2h-2a1 1 0 01-1-1z" clipRule="evenodd" />
                                            </svg>
                                            <input
                                                {...register("dni", { required: true })}
                                                onChange={handleDocTyped}
                                                placeholder="DNI"
                                                type="tel"
                                                name="dni"
                                                id="dni"
                                                autoComplete="given-name"
                                                className="pl-10 text-gray-700 mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                            />
                                        </div>
                                        <div className={`${userExists?.message ? 'flex content-center justify-center' : 'hidden sm:block'} col-span-6 sm:col-span-3`}>
                                            <span className={`my-auto ${userExists?.exists ? 'text-green-500' : 'text-blue-500'} font-medium leading-tight`}>{userExists?.message}</span>
                                        </div>
                                        <div className="col-span-6 sm:col-span-3 relative text-gray-400 focus-within:text-blue-500 block">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 pointer-events-none absolute top-1/2 transform -translate-y-1/2 left-3" viewBox="0 0 20 20" fill="currentColor">
                                                <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                                            </svg>
                                            <input
                                                {...register("nombres", { required: true })}
                                                placeholder="Nombres"
                                                type="text"
                                                name="nombres"
                                                id="nombres"
                                                autoComplete="given-name"
                                                className="pl-10 text-gray-700 mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                            />
                                        </div>
                                        <div className="col-span-6 sm:col-span-3 relative text-gray-400 focus-within:text-blue-500 block">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 pointer-events-none absolute top-1/2 transform -translate-y-1/2 left-3" viewBox="0 0 20 20" fill="currentColor">
                                                <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                                            </svg>
                                            <input
                                                {...register("apellidos", { required: true })}
                                                placeholder="Apellidos"
                                                type="text"
                                                name="apellidos"
                                                id="apellidos"
                                                autoComplete="given-name"
                                                className="pl-10 text-gray-700 mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                            />
                                        </div>
                                        <div className="col-span-6 sm:col-span-3 relative text-gray-400 focus-within:text-blue-500 block">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 pointer-events-none absolute top-1/2 transform -translate-y-1/2 left-3" viewBox="0 0 20 20" fill="currentColor">
                                                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                                                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                                            </svg>
                                            <input
                                                {...register("email")}
                                                placeholder="Correo"
                                                type="email"
                                                name="email"
                                                id="email"
                                                autoComplete="given-name"
                                                className="pl-10 text-gray-700 mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                            />
                                        </div>
                                        <div className="col-span-6 sm:col-span-3 relative text-gray-400 focus-within:text-blue-500 block">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 pointer-events-none absolute top-1/2 transform -translate-y-1/2 left-3" viewBox="0 0 20 20" fill="currentColor">
                                                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                                            </svg>
                                            <input
                                                {...register("telefono")}
                                                placeholder="Teléfono"
                                                type="tel"
                                                name="telefono"
                                                id="telefono"
                                                autoComplete="given-name"
                                                className="pl-10 text-gray-700 mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                            />
                                        </div>
                                    </div>
                                    <div className="my-6">
                                        <p className="text-sm leading-tight">
                                            Al registrarte, aceptas los <a href="http://localhost:3000/Terminos_y_condiciones_CCLAM.pdf" target="_blank" className="text-blue-700 hover:text-blue-900">Términos de servicio, políticas de privacidad y uso de Cookies</a>.
                                        </p>
                                    </div>
                                </div>
                                <div className="mt-8">
                                    <button
                                        type="submit"
                                        className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-full text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"

                                    >
                                        {isPre ? 'Registrarme' : 'Ingresar'}
                                    </button>
                                </div>
                            </form>
                        </div>
                    </Transition.Child>
                </div>
            </Dialog>
        </Transition>
    )
}
