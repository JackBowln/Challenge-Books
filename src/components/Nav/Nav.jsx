import * as React from "react"
import { Link } from "react-router-dom"
import "./nav.css"
import { useAuthUser, useSignOut } from "react-auth-kit"
export default function Nav() {
  const auth = useAuthUser()
  const signOut = useSignOut()

  return (
    <nav>
      <ul>
        <li className="logo">
          <Link to="/">
            <strong>ioasys</strong> Books
          </Link>
        </li>
        <li className="logout">
          <span>
            Bem vindo, <strong>{auth().name.split(" ")[0]}!</strong>
          </span>
          <button onClick={() => signOut()}></button>
        </li>
      </ul>
    </nav>
  )
}
