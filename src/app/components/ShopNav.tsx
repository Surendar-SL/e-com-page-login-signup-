import Link from "next/link";

const Navbar = () => {
    return ( <nav >
        <ul>
        <li><Link href="/shop/cart">Cart</Link></li>
        <li><Link href="/shop/catagories">Catagories</Link></li>
        </ul>
    </nav> );
}
 
export default Navbar;