import { useEffect, useState } from 'react';

export default function ReverseTimer({dateCompate,handleAction,small}) {
    const [timeLeft, settimeLeft] = useState({
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0
    });

    const checkTime = () => {
      var comparar = new Date(dateCompate);
      var ahora = new Date();
      
      handleAction(ahora >= comparar)
  
      var seconds = Math.floor((comparar - (ahora)) / 1000);
      var minutes = Math.floor(seconds / 60);
      var hours = Math.floor(minutes / 60);
      var days = Math.floor(hours / 24);
  
      hours = hours - (days * 24);
      minutes = minutes - (days * 24 * 60) - (hours * 60);
      seconds = seconds - (days * 24 * 60 * 60) - (hours * 60 * 60) - (minutes * 60);
  
      settimeLeft({
        days: days > 0 ? (days < 10 ? '0' + days : days) : '00',
        hours: hours > 0 ? (hours < 10 ? '0' + hours : hours) : '00',
        minutes: minutes > 0 ? (minutes < 10 ? '0' + minutes : minutes) : '00',
        seconds: seconds > 0 ? (seconds < 10 ? '0' + seconds : seconds) : '00',
      })
  
    }
  
    useEffect(() => {
        const timerId = setInterval(checkTime, 1000);
        return function cleanup() {
          clearInterval(timerId);
        };
    }, [])

    return (
        <div className="flex justify-center">
          <div className={`flex flex-col ${small ? 'mx-2' : 'mx-3'}`}>
            <span className={`${small ? 'text-xl lg:text-3xl' : 'text-4xl lg:text-6xl'}`}>{timeLeft.days}</span>
            <span className={`${small ? 'text-xs' : 'text-xl'} font-extrabold`}>DÍAS</span>
          </div>
          <div className="flex mt-3">
            <span className={`${small ? 'text-xs lg:text-xl' : 'text-2xl lg:text-4xl'}`}>:</span>
          </div>
          <div className={`flex flex-col ${small ? 'mx-2' : 'mx-3'}`}>
            <span className={`${small ? 'text-xl lg:text-3xl' : 'text-4xl lg:text-6xl'}`}>{timeLeft.hours}</span>
            <span className={`${small ? 'text-xs' : 'text-xl'} font-extrabold`}>HORAS</span>
          </div>
          <div className="flex mt-3">
            <span className={`${small ? 'text-xs lg:text-xl' : 'text-2xl lg:text-4xl'}`}>:</span>
          </div>
          <div className={`flex flex-col ${small ? 'mx-2' : 'mx-3'}`}>
            <span className={`${small ? 'text-xl lg:text-3xl' : 'text-4xl lg:text-6xl'}`}>{timeLeft.minutes}</span>
            <span className={`${small ? 'text-xs' : 'text-xl'} font-extrabold`}>MIN</span>
          </div>
          <div className="flex mt-3">
            <span className={`${small ? 'text-xs lg:text-xl' : 'text-2xl lg:text-4xl'}`}>:</span>
          </div>
          <div className={`flex flex-col ${small ? 'mx-2' : 'mx-3'}`}>
            <span className={`${small ? 'text-xl lg:text-3xl' : 'text-4xl lg:text-6xl'}`}>{timeLeft.seconds}</span>
            <span className={`${small ? 'text-xs' : 'text-xl'} font-extrabold`}>SEG</span>
          </div>
        </div>
    )
}
