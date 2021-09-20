import Link from "next/link";

export default function Menu() {
    return (
        <div className="menu">
            <Link href="/">
                <a>
                    <i className="bx bxs-home"></i>
                </a>
            </Link>
            <Link href="/products">
                <a>
                    <i className="bx bxs-category"></i>
                </a>
            </Link>
            <Link href="/cart">
                <a>
                    <i className="bx bxs-cart"></i>
                </a>
            </Link>
            <Link href="/heart">
                <a>
                    <i className="bx bxs-heart"></i>
                </a>
            </Link>
            <Link href="/login">
                <a>
                    <i className="bx bxs-user"></i>
                </a>
            </Link>
        </div>
    );
}
