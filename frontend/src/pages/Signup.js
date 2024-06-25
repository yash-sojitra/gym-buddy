import { useState } from "react"
import { useSignup } from "../hooks/useSignup"

const Signup = () => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const {signup, error, isLoading, info} = useSignup();

    const handleSubmit = async (e) => {
        e.preventDefault()
        await signup(email, password)
    }

    return (
        <form className="signup" onSubmit={handleSubmit}>
            <h3>Signup</h3>
            <label>Email</label>
            <input
                type="email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
            />
            <label>Password</label>
            <input
                type="password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
            />
            <button type="submit" disabled={isLoading}>Sign up</button>
            {error && <div className="error">{error}</div>}
            {!error && info && <div className="info">{info}</div>}
        </form>
    )
}

export default Signup