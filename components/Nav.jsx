import Link from "next/link"
import Head from "next/head"

function Nav() {
  return (
    <ul className="nav">

      <Head>
        <meta http-equiv="Content-Security-Policy" content="upgrade-insecure-requests" /> 
      </Head>

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