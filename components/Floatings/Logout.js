import React from 'react'
import { logout } from "../../redux/actions/auth"
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/router'

export default function Logout({ small }) {
    const router = useRouter()
    const dispatch = useDispatch();
    return (
        <>
            {
                router.asPath !== "/" ?
                    <div className="absolute z-10 inset-x-auto top-2 right-2 rounded-full bg-white bg-opacity-60 text-indigo-500 text-center text-sm">
                        <button title="Cerrar sesión" onClick={() => {dispatch(logout()); window.location.reload();}} className="flex p-1 rounded-full">
                            <svg viewBox="0 0 24 24" className="h-5 w-5" focusable="false" role="img" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <g data-name="Layer 2"><g data-name="power"><path d="M12 13a1 1 0 001-1V2a1 1 0 00-2 0v10a1 1 0 001 1z"></path><path d="M16.59 3.11a1 1 0 00-.92 1.78 8 8 0 11-7.34 0 1 1 0 10-.92-1.78 10 10 0 109.18 0z"></path></g></g>
                            </svg>
                        </button>
                    </div>
                    :
                    <>
                        <div className="hidden sm:block absolute z-10 inset-x-auto top-2 right-2 text-white text-center text-sm">
                            <button onClick={() => {dispatch(logout()); window.location.reload();}} className="flex text-xs  px-3 py-2 rounded-full hover:shadow-lg hover:bg-white hover:text-gray-500 hover:font-medium">
                                <svg viewBox="0 0 24 24" className="h-4 w-4 mr-1" focusable="false" role="img" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                    <g data-name="Layer 2"><g data-name="power"><path d="M12 13a1 1 0 001-1V2a1 1 0 00-2 0v10a1 1 0 001 1z"></path><path d="M16.59 3.11a1 1 0 00-.92 1.78 8 8 0 11-7.34 0 1 1 0 10-.92-1.78 10 10 0 109.18 0z"></path></g></g>
                                </svg>
                                Cerrar Sesión
                            </button>
                        </div>
                        <div className="block sm:hidden absolute z-10 inset-x-auto top-2 right-2 rounded-full bg-white text-gray-500 text-center text-sm">
                            <button onClick={() => {dispatch(logout()); window.location.reload();}} className="flex p-1 rounded-full">
                                <svg viewBox="0 0 24 24" className="h-5 w-5" focusable="false" role="img" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                    <g data-name="Layer 2"><g data-name="power"><path d="M12 13a1 1 0 001-1V2a1 1 0 00-2 0v10a1 1 0 001 1z"></path><path d="M16.59 3.11a1 1 0 00-.92 1.78 8 8 0 11-7.34 0 1 1 0 10-.92-1.78 10 10 0 109.18 0z"></path></g></g>
                                </svg>
                            </button>
                        </div>
                    </>
            }
        </>
    )
}
