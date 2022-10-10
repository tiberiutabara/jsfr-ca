import LoginForm from "../components/LoginForm"
import Nav from "../components/Nav"

function login() {
  return (
    <div className="container">
      <Nav />

      <h2 className="title">Log In</h2>
      <LoginForm />
    </div>
  )
}

export default login