import { useRouter } from "next/dist/client/router"
import data from "../../utils/data";

export default function ProductScreen() {
    const router = useRouter();
    const {slug} = router.query;
    const product = data.computers.find(a => a.slug === slug)

    if(!product){
        return <div>Computer Not found</div>
    }
    return (
        <div>
            <h2>{product.name}</h2>
        </div>
    )
}
