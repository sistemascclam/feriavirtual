import { useRouter } from 'next/router'

export default function Entrada({ onEndTransition, newRoute, videroUrl }) {
    const router = useRouter()
    const handleEndTransition = () => {
        onEndTransition()
        router.push(newRoute)
    }
    return (
        <video muted autoPlay style={{
            height: "100vh",
            width: "100%",
            objectFit: "cover",
            position: "absolute",
            top: "0",
            zIndex: "50"
        }}
            onEnded={handleEndTransition}
        >
            <source src={videroUrl} type="video/mp4" />
            Tu buscador no soporta este tipo de video.
        </video>
    )
}