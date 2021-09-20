import { useRouter } from "next/router"

export default function Shipping() {
    const router = useRouter();
    router.push('/login');

    return (
        <div>
            <h2>Shipping</h2>
        </div>
    )
}
