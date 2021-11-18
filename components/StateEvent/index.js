import React from 'react'
import { useState, useEffect } from 'react';
import Preview from "./Preview";
import Started from "./Started";
import Ended from "./Ended";
import { logout } from "../../redux/actions/auth"
import { useDispatch, useSelector } from 'react-redux';
import { motion, AnimatePresence } from "framer-motion"

const inicio = "11/18/2021 00:00:00"
const final = "11/20/2021 00:00:00"
// const inicio = "10/10/2021 00:00:00"
// const final = "12/20/2021 00:00:00"

export default function index() {
    const dispatch = useDispatch();
    const { token } = useSelector(({ auth }) => auth);
    const [eventState, seteventState] = useState(null);

    const handleStartEvent = (newState) => {
        seteventState(newState ? "started" : "waiting")
    }

    const handleEndEvent = (newState) => {
        seteventState(newState ? "ended" : "started")
    }

    useEffect(() => {
        var ahora = new Date();
        var start = new Date(inicio);
        var end = new Date(final);
        if (ahora >= end && token) {
            dispatch(logout())
        }
        seteventState(ahora >= start ? (ahora >= end ? 'ended' : 'started') : 'waiting')
    }, [])


    return (
        <AnimatePresence>
            <motion.div className="bg-inicio bg-cover bg-bottom min-h-screen w-full"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0, scale:1.5 }}
          transition={{
            opacity: { duration: 0.5 }
          }}>
                <div className="relative bottom-0 left-0 ">
                    {
                        eventState ?
                            (
                                eventState === "waiting" ?
                                    <Preview handleStartEvent={handleStartEvent} inicio={inicio} />
                                    :
                                    (
                                        eventState === "ended" ?
                                            <Ended />
                                            :
                                            <Started handleEndEvent={handleEndEvent} final={final} />
                                    )
                            )
                            :
                            ""
                    }
                </div>
            </motion.div>
        </AnimatePresence>
    )
}
