import { useRouter } from 'next/router'
import { motion, AnimatePresence } from "framer-motion"

export default function TransitionVideo({ onEndTransition, newRoute, videroUrl }) {
    const router = useRouter()
    const handleEndTransition = () => {
        if(onEndTransition){
            onEndTransition()
        }
        if(newRoute){
            router.push(newRoute)
        }
    }
    return (
        <div className="absolute inset-0 z-50 top-0">
            <div className="relative">
                <AnimatePresence>
                    <motion.video muted autoPlay style={{
                        height: "100vh",
                        width: "100%",
                        objectFit: "cover",
                    }}
                        onEnded={handleEndTransition}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0, scale: 1.5 }}
                        transition={{
                            opacity: { duration: 0.5 }
                        }}>
                        <source src={videroUrl} type="video/mp4" />
                        Tu buscador no soporta este tipo de video.
                    </motion.video>
                </AnimatePresence>
                <button className="absolute w-max bottom-5 right-5 text-lg font-light text-white hover:font-semibold" onClick={handleEndTransition}>Omitir {">"}</button>
            </div>
        </div>
    )
}