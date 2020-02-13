import Link from "next/link"

const Header =()=>{
    return(
        <div className="grid-header">
            <Link href="/"><a>Home</a></Link>
            <Link href="/about"><a>About</a></Link>

        </div>
    )
}
export default Header;