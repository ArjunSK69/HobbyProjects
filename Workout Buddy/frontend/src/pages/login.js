import { useState } from 'react'


const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')


    const handleSubmit = async (e) => {
        e.preventDefault()

        console.log(email, password)
    }

    return (
        <form className="login" onSubmit={handleSubmit}>
            <h3>Log in</h3>

            <label>Email: </label>
            <input 
                type="email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
            />

            <label>Password: </label>
            <input 
                type="password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
            />

            <div>
                <button className='button'>Log in</button>
            </div>
        </form>
    )
}

export default Login