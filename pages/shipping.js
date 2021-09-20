import { useRouter } from "next/router";
import Layout from "../components/Layout";

export default function Shipping() {

    const router = useRouter();
    router.push('/login');

    return (
        <Layout>
            <h2>Shipping</h2>
        </Layout>
    )
}
