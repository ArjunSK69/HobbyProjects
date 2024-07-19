import { Link } from 'react-router-dom'
const Navbar = () => {
    return (
        <header>
            <div className="container">
                <Link to="/">
                    <h1>Workout buddy</h1>
                </Link>
            </div>
            <div className='nav-links'>
                <Link to="/login">Log in</Link>
                <Link to="/signup">Sig nup</Link>
            </div>
        </header>
    )
}

export default Navbar