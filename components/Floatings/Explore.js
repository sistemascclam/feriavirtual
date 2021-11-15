import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { useRouter } from 'next/router'
import Link from 'next/link'

var links = [
    {
        title: "Entrada",
        route: "/",
        icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 my-auto mr-2" viewBox="0 0 20 20" fill="currentColor">
            <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
        </svg>
    },
    {
        title: "Zona ferial",
        route: "/feria",
        icon: <svg viewBox="0 0 24 24" className="h-4 w-4 my-auto mr-2" viewBox="0 0 20 20" fill="currentColor">
            <path d="M10.5 14.5V22h-3v-7.5h3zm6.75-1.5h-3.5a.75.75 0 0 0-.75.75v3.5c0 .42.34.75.75.75h3.5c.42 0 .75-.33.75-.75v-3.5a.75.75 0 0 0-.75-.75zm-.75 1.5v2h-2v-2h2zM8.17 7H3.5v1.17c0 1.18.88 2.15 2.02 2.3l.15.02h.16c1.24 0 2.25-.95 2.33-2.16V7zm6.16 0H9.67v1.17c0 1.18.87 2.15 2.01 2.3l.16.02H12c1.23 0 2.24-.95 2.33-2.16V7zm6.17 0h-4.67v1.17c0 1.18.88 2.15 2.02 2.3l.16.02h.16c1.23 0 2.24-.95 2.32-2.16V7zM9.06 3.5H6.33l-1.86 2h3.98l.61-2zm4.3 0h-2.73l-.62 2h3.97l-.61-2zm4.31 0h-2.73l.61 2h3.98l-1.86-2zM2.2 5.74l3.25-3.5c.12-.13.28-.2.45-.23L6 2h12c.17 0 .34.06.47.17l.08.07 3.27 3.53.03.04c.1.13.15.29.15.44v1.92c0 1-.38 1.9-1 2.58v10.5c0 .38-.28.7-.65.74l-.1.01H12v-8.25a.75.75 0 0 0-.75-.75h-4.5a.75.75 0 0 0-.75.75V22H3.75a.75.75 0 0 1-.74-.65v-.1L3 10.75a3.82 3.82 0 0 1-1-2.39V6.3c0-.14.02-.28.1-.4l.05-.08.05-.07z"></path>
        </svg>
    },
    {
        title: "Patio de comidas",
        route: "/feria",
        icon: <svg viewBox="0 0 24 24" className="h-4 w-4 my-auto mr-2" viewBox="0 0 20 20" fill="currentColor">
            <rect width="24" height="24" fill="none"></rect><path d="M21.9 5H18V2c0-.55-.45-1-1-1s-1 .45-1 1v3h-3.9c-.59 0-1.05.51-1 1.1l.12 1.21C14.9 8.16 18 10.77 18 15l.02 8h1.7c.84 0 1.53-.65 1.63-1.47L22.89 6.1c.06-.59-.4-1.1-.99-1.1zM15 21H2c-.55 0-1 .45-1 1s.45 1 1 1h13c.55 0 1-.45 1-1s-.45-1-1-1z"></path><path d="M2.1 15h12.8c.62 0 1.11-.56.99-1.16-.65-3.23-4.02-4.85-7.39-4.85s-6.73 1.62-7.39 4.85c-.12.6.38 1.16.99 1.16zM15 17H2c-.55 0-1 .45-1 1s.45 1 1 1h13c.55 0 1-.45 1-1s-.45-1-1-1z"></path>
        </svg>
    },
    {
        title: "Conferencias",
        route: "/conferencias",
        icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 my-auto mr-2" viewBox="0 0 20 20" fill="currentColor">
            <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z" />
        </svg>
    },
    {
        title: "Agenda",
        route: "/agenda",
        icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 my-auto mr-2" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
        </svg>
    },
    {
        title: "Speakers",
        route: "/speakers",
        icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 my-auto mr-2" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M18 3a1 1 0 00-1.447-.894L8.763 6H5a3 3 0 000 6h.28l1.771 5.316A1 1 0 008 18h1a1 1 0 001-1v-4.382l6.553 3.276A1 1 0 0018 15V3z" clipRule="evenodd" />
        </svg>
    },
    {
        title: "Si te los perdiste...",
        route: "/si-te-lo-perdiste",
        icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 my-auto mr-2" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm3 2h6v4H7V5zm8 8v2h1v-2h-1zm-2-2H7v4h6v-4zm2 0h1V9h-1v2zm1-4V5h-1v2h1zM5 5v2H4V5h1zm0 4H4v2h1V9zm-1 4h1v2H4v-2z" clipRule="evenodd" />
        </svg>
    }
]

export default function Explore() {
    const router = useRouter()
    return (
        <div className="fixed z-10 lg:bottom-0 lg:inset-x-0 lg:mb-2">
            {
                router.asPath !== "/" &&
                <div className="hidden lg:flex w-max mx-auto gap-x-4 bg-gradient-to-r from-blue-700 to-indigo-700 rounded-full px-2 shadow-lg">
                    {
                        links.map((l,i)=>
                        <Link key={i} href={l.route}>
                            <a
                                className={`${router.asPath === l.route ? "text-white border-b-4 border-white font-medium":"text-gray-100 hover:text-white"} shadow-lg flex px-4 py-2 text-sm`}
                            >
                                {l.icon}
                                {l.title}
                            </a>
                        </Link>
                        )
                    }
                </div>
            }
            {/* <div className="hidden lg:block">
                <Menu as="div" className="ml-2 relative pt-0">
                    <div className="divide-y origin-top-right absolute left-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                        <div>
                            <Menu.Item>
                                {({ active }) => (
                                    <Link href={`/`}>
                                        <a
                                            className={`${router.asPath === "/" ? "bg-blue-100" : "hover:bg-gray-100"} flex px-4 py-2 text-sm text-gray-700`}
                                        >
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 my-auto mr-2 text-blue-600" viewBox="0 0 20 20" fill="currentColor">
                                                <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                                            </svg>
                                            Entrada
                                        </a>
                                    </Link>
                                )}
                            </Menu.Item>
                            <Menu.Item>
                                {({ active }) => (
                                    <Link href={`/feria`}>
                                        <a
                                            className={`${router.asPath === "/feria" ? "bg-blue-100" : "hover:bg-gray-100"} flex px-4 py-2 text-sm text-gray-700`}
                                        >
                                            <svg viewBox="0 0 24 24" className="h-4 w-4 my-auto mr-2 text-blue-600" viewBox="0 0 20 20" fill="currentColor">
                                                <path d="M10.5 14.5V22h-3v-7.5h3zm6.75-1.5h-3.5a.75.75 0 0 0-.75.75v3.5c0 .42.34.75.75.75h3.5c.42 0 .75-.33.75-.75v-3.5a.75.75 0 0 0-.75-.75zm-.75 1.5v2h-2v-2h2zM8.17 7H3.5v1.17c0 1.18.88 2.15 2.02 2.3l.15.02h.16c1.24 0 2.25-.95 2.33-2.16V7zm6.16 0H9.67v1.17c0 1.18.87 2.15 2.01 2.3l.16.02H12c1.23 0 2.24-.95 2.33-2.16V7zm6.17 0h-4.67v1.17c0 1.18.88 2.15 2.02 2.3l.16.02h.16c1.23 0 2.24-.95 2.32-2.16V7zM9.06 3.5H6.33l-1.86 2h3.98l.61-2zm4.3 0h-2.73l-.62 2h3.97l-.61-2zm4.31 0h-2.73l.61 2h3.98l-1.86-2zM2.2 5.74l3.25-3.5c.12-.13.28-.2.45-.23L6 2h12c.17 0 .34.06.47.17l.08.07 3.27 3.53.03.04c.1.13.15.29.15.44v1.92c0 1-.38 1.9-1 2.58v10.5c0 .38-.28.7-.65.74l-.1.01H12v-8.25a.75.75 0 0 0-.75-.75h-4.5a.75.75 0 0 0-.75.75V22H3.75a.75.75 0 0 1-.74-.65v-.1L3 10.75a3.82 3.82 0 0 1-1-2.39V6.3c0-.14.02-.28.1-.4l.05-.08.05-.07z"></path>
                                            </svg>
                                            Zona ferial
                                        </a>
                                    </Link>
                                )}
                            </Menu.Item>
                            <Menu.Item>
                                {({ active }) => (
                                    <Link href={`/feria`}>
                                        <a
                                            className={`${router.asPath === "/patio-de-comidas" ? "bg-blue-100" : "hover:bg-gray-100"} flex px-4 py-2 text-sm text-gray-700`}
                                        >
                                            <svg viewBox="0 0 24 24" className="h-4 w-4 my-auto mr-2 text-blue-600" viewBox="0 0 20 20" fill="currentColor">
                                                <rect width="24" height="24" fill="none"></rect><path d="M21.9 5H18V2c0-.55-.45-1-1-1s-1 .45-1 1v3h-3.9c-.59 0-1.05.51-1 1.1l.12 1.21C14.9 8.16 18 10.77 18 15l.02 8h1.7c.84 0 1.53-.65 1.63-1.47L22.89 6.1c.06-.59-.4-1.1-.99-1.1zM15 21H2c-.55 0-1 .45-1 1s.45 1 1 1h13c.55 0 1-.45 1-1s-.45-1-1-1z"></path><path d="M2.1 15h12.8c.62 0 1.11-.56.99-1.16-.65-3.23-4.02-4.85-7.39-4.85s-6.73 1.62-7.39 4.85c-.12.6.38 1.16.99 1.16zM15 17H2c-.55 0-1 .45-1 1s.45 1 1 1h13c.55 0 1-.45 1-1s-.45-1-1-1z"></path>
                                            </svg>
                                            Patio de comidas
                                        </a>
                                    </Link>
                                )}
                            </Menu.Item>
                            <Menu.Item>
                                {({ active }) => (
                                    <Link href={`/conferencias`}>
                                        <a
                                            className={`${router.asPath === "/conferencias" ? "bg-blue-100" : "hover:bg-gray-100"} flex px-4 py-2 text-sm text-gray-700`}
                                        >
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 my-auto mr-2 text-blue-600" viewBox="0 0 20 20" fill="currentColor">
                                                <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z" />
                                            </svg>
                                            Conferencias
                                        </a>
                                    </Link>
                                )}
                            </Menu.Item>
                        </div>
                        <div>
                            <Menu.Item>
                                {({ active }) => (
                                    <Link href={`/agenda`}>
                                        <a
                                            className={`${router.asPath === "/agenda" ? "bg-blue-100" : "hover:bg-gray-100"} flex px-4 py-2 text-sm text-gray-700`}
                                        >
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 my-auto mr-2 text-blue-600" viewBox="0 0 20 20" fill="currentColor">
                                                <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                                            </svg>
                                            Agenda
                                        </a>
                                    </Link>
                                )}
                            </Menu.Item>
                            <Menu.Item>
                                {({ active }) => (
                                    <Link href={`/speakers`}>
                                        <a
                                            className={`${router.asPath === "/speakers" ? "bg-blue-100" : "hover:bg-gray-100"} flex px-4 py-2 text-sm text-gray-700`}
                                        >
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 my-auto mr-2 text-blue-600" viewBox="0 0 20 20" fill="currentColor">
                                                <path fillRule="evenodd" d="M18 3a1 1 0 00-1.447-.894L8.763 6H5a3 3 0 000 6h.28l1.771 5.316A1 1 0 008 18h1a1 1 0 001-1v-4.382l6.553 3.276A1 1 0 0018 15V3z" clipRule="evenodd" />
                                            </svg>
                                            Speakers
                                        </a>
                                    </Link>
                                )}
                            </Menu.Item>
                            <Menu.Item>
                                {({ active }) => (
                                    <Link href={`/si-te-lo-perdiste`}>
                                        <a
                                            className={`${router.asPath === "/si-te-lo-perdiste" ? "bg-blue-100" : "hover:bg-gray-100"} flex px-4 py-2 text-sm text-gray-700`}
                                        >
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 my-auto mr-2 text-blue-600" viewBox="0 0 20 20" fill="currentColor">
                                                <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm3 2h6v4H7V5zm8 8v2h1v-2h-1zm-2-2H7v4h6v-4zm2 0h1V9h-1v2zm1-4V5h-1v2h1zM5 5v2H4V5h1zm0 4H4v2h1V9zm-1 4h1v2H4v-2z" clipRule="evenodd" />
                                            </svg>
                                            Si te los perdiste...
                                        </a>
                                    </Link>
                                )}
                            </Menu.Item>
                        </div>
                    </div>
                </Menu>
            </div> */}
            <div className="block lg:hidden">
                <Disclosure as="nav">
                    {({ open }) => (
                        <>
                            <Menu as="div" className="ml-3 relative pt-3">
                                <div>
                                    <Menu.Button title="Explorar" className="bg-white text-blue-600 shadow-lg p-2 flex text-sm rounded-full hover:bg-gray-100">
                                        <div >
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 20 20" fill="currentColor">
                                                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                                            </svg>
                                        </div>
                                    </Menu.Button>
                                </div>
                                <Transition
                                    as={Fragment}
                                    enter="transition ease-out duration-100"
                                    enterFrom="transform opacity-0 scale-95"
                                    enterTo="transform opacity-100 scale-100"
                                    leave="transition ease-in duration-75"
                                    leaveFrom="transform opacity-100 scale-100"
                                    leaveTo="transform opacity-0 scale-95"
                                >
                                    <Menu.Items className="divide-y origin-top-right absolute left-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                                        <div>
                                            <Menu.Item>
                                                {({ active }) => (
                                                    <Link href={`/`}>
                                                        <a
                                                            className={`${router.asPath === "/" ? "bg-blue-100" : "hover:bg-gray-100"} flex px-4 py-2 text-sm text-gray-700`}
                                                        >
                                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 my-auto mr-2 text-blue-600" viewBox="0 0 20 20" fill="currentColor">
                                                                <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                                                            </svg>
                                                            Entrada
                                                        </a>
                                                    </Link>
                                                )}
                                            </Menu.Item>
                                            <Menu.Item>
                                                {({ active }) => (
                                                    <Link href={`/feria`}>
                                                        <a
                                                            className={`${router.asPath === "/feria" ? "bg-blue-100" : "hover:bg-gray-100"} flex px-4 py-2 text-sm text-gray-700`}
                                                        >
                                                            <svg viewBox="0 0 24 24" className="h-4 w-4 my-auto mr-2 text-blue-600" viewBox="0 0 20 20" fill="currentColor">
                                                                <path d="M10.5 14.5V22h-3v-7.5h3zm6.75-1.5h-3.5a.75.75 0 0 0-.75.75v3.5c0 .42.34.75.75.75h3.5c.42 0 .75-.33.75-.75v-3.5a.75.75 0 0 0-.75-.75zm-.75 1.5v2h-2v-2h2zM8.17 7H3.5v1.17c0 1.18.88 2.15 2.02 2.3l.15.02h.16c1.24 0 2.25-.95 2.33-2.16V7zm6.16 0H9.67v1.17c0 1.18.87 2.15 2.01 2.3l.16.02H12c1.23 0 2.24-.95 2.33-2.16V7zm6.17 0h-4.67v1.17c0 1.18.88 2.15 2.02 2.3l.16.02h.16c1.23 0 2.24-.95 2.32-2.16V7zM9.06 3.5H6.33l-1.86 2h3.98l.61-2zm4.3 0h-2.73l-.62 2h3.97l-.61-2zm4.31 0h-2.73l.61 2h3.98l-1.86-2zM2.2 5.74l3.25-3.5c.12-.13.28-.2.45-.23L6 2h12c.17 0 .34.06.47.17l.08.07 3.27 3.53.03.04c.1.13.15.29.15.44v1.92c0 1-.38 1.9-1 2.58v10.5c0 .38-.28.7-.65.74l-.1.01H12v-8.25a.75.75 0 0 0-.75-.75h-4.5a.75.75 0 0 0-.75.75V22H3.75a.75.75 0 0 1-.74-.65v-.1L3 10.75a3.82 3.82 0 0 1-1-2.39V6.3c0-.14.02-.28.1-.4l.05-.08.05-.07z"></path>
                                                            </svg>
                                                            Zona ferial
                                                        </a>
                                                    </Link>
                                                )}
                                            </Menu.Item>
                                            <Menu.Item>
                                                {({ active }) => (
                                                    <Link href={`/feria`}>
                                                        <a
                                                            className={`${router.asPath === "/patio-de-comidas" ? "bg-blue-100" : "hover:bg-gray-100"} flex px-4 py-2 text-sm text-gray-700`}
                                                        >
                                                            <svg viewBox="0 0 24 24" className="h-4 w-4 my-auto mr-2 text-blue-600" viewBox="0 0 20 20" fill="currentColor">
                                                                <rect width="24" height="24" fill="none"></rect><path d="M21.9 5H18V2c0-.55-.45-1-1-1s-1 .45-1 1v3h-3.9c-.59 0-1.05.51-1 1.1l.12 1.21C14.9 8.16 18 10.77 18 15l.02 8h1.7c.84 0 1.53-.65 1.63-1.47L22.89 6.1c.06-.59-.4-1.1-.99-1.1zM15 21H2c-.55 0-1 .45-1 1s.45 1 1 1h13c.55 0 1-.45 1-1s-.45-1-1-1z"></path><path d="M2.1 15h12.8c.62 0 1.11-.56.99-1.16-.65-3.23-4.02-4.85-7.39-4.85s-6.73 1.62-7.39 4.85c-.12.6.38 1.16.99 1.16zM15 17H2c-.55 0-1 .45-1 1s.45 1 1 1h13c.55 0 1-.45 1-1s-.45-1-1-1z"></path>
                                                            </svg>
                                                            Patio de comidas
                                                        </a>
                                                    </Link>
                                                )}
                                            </Menu.Item>
                                            <Menu.Item>
                                                {({ active }) => (
                                                    <Link href={`/conferencias`}>
                                                        <a
                                                            className={`${router.asPath === "/conferencias" ? "bg-blue-100" : "hover:bg-gray-100"} flex px-4 py-2 text-sm text-gray-700`}
                                                        >
                                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 my-auto mr-2 text-blue-600" viewBox="0 0 20 20" fill="currentColor">
                                                                <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z" />
                                                            </svg>
                                                            Conferencias
                                                        </a>
                                                    </Link>
                                                )}
                                            </Menu.Item>
                                        </div>
                                        <div>
                                            <Menu.Item>
                                                {({ active }) => (
                                                    <Link href={`/agenda`}>
                                                        <a
                                                            className={`${router.asPath === "/agenda" ? "bg-blue-100" : "hover:bg-gray-100"} flex px-4 py-2 text-sm text-gray-700`}
                                                        >
                                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 my-auto mr-2 text-blue-600" viewBox="0 0 20 20" fill="currentColor">
                                                                <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                                                            </svg>
                                                            Agenda
                                                        </a>
                                                    </Link>
                                                )}
                                            </Menu.Item>
                                            <Menu.Item>
                                                {({ active }) => (
                                                    <Link href={`/speakers`}>
                                                        <a
                                                            className={`${router.asPath === "/speakers" ? "bg-blue-100" : "hover:bg-gray-100"} flex px-4 py-2 text-sm text-gray-700`}
                                                        >
                                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 my-auto mr-2 text-blue-600" viewBox="0 0 20 20" fill="currentColor">
                                                                <path fillRule="evenodd" d="M18 3a1 1 0 00-1.447-.894L8.763 6H5a3 3 0 000 6h.28l1.771 5.316A1 1 0 008 18h1a1 1 0 001-1v-4.382l6.553 3.276A1 1 0 0018 15V3z" clipRule="evenodd" />
                                                            </svg>
                                                            Speakers
                                                        </a>
                                                    </Link>
                                                )}
                                            </Menu.Item>
                                            <Menu.Item>
                                                {({ active }) => (
                                                    <Link href={`/si-te-lo-perdiste`}>
                                                        <a
                                                            className={`${router.asPath === "/si-te-lo-perdiste" ? "bg-blue-100" : "hover:bg-gray-100"} flex px-4 py-2 text-sm text-gray-700`}
                                                        >
                                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 my-auto mr-2 text-blue-600" viewBox="0 0 20 20" fill="currentColor">
                                                                <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm3 2h6v4H7V5zm8 8v2h1v-2h-1zm-2-2H7v4h6v-4zm2 0h1V9h-1v2zm1-4V5h-1v2h1zM5 5v2H4V5h1zm0 4H4v2h1V9zm-1 4h1v2H4v-2z" clipRule="evenodd" />
                                                            </svg>
                                                            Si te los perdiste...
                                                        </a>
                                                    </Link>
                                                )}
                                            </Menu.Item>
                                        </div>
                                    </Menu.Items>
                                </Transition>
                            </Menu>
                        </>
                    )}
                </Disclosure>
            </div>
        </div>
    )
}
