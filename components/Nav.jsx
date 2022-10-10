import Link from "next/link"

function Nav() {
  return (
    <ul className="nav">
        <li>
            <Link href="/">Home</Link>
        </li>

        <li>
            <Link href="/contact">Contact</Link>
        </li>

        <li>
            <Link href="/login">Log In</Link>
        </li>
    </ul>
  )
}

export default Nav