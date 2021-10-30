import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import {hideMessage} from "../../redux/actions/common"

export default function Message() {
    const dispatch = useDispatch();
    const { message,error,success } = useSelector(({ common }) => common);
    useEffect(() => {
        setTimeout(() => {
            dispatch(hideMessage());
        }, 3000);
    }, [message])
    return (
        <div className={`fixed z-50 inset-x-0 ${message ? 'block':"hidden"}`}>
            <div className={`${success ? 'bg-green-400' : 'bg-red-400'} text-white rounded-lg pl-4 py-2 w-max mx-auto flex mt-5`}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 my-auto mr-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                {message}
                <button onClick={()=>dispatch(hideMessage())}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 my-auto ml-10 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
            </div>
        </div>
    )
}
