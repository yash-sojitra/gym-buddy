import { Link } from "react-router-dom";
import { useLogout } from "../hooks/useLogout";
import { useAuthContext } from "../hooks/useAuthContext";

const Navbar = () => {

    const logout = useLogout()
    const { user } = useAuthContext()

    function handleCLick() {
        logout()
    }

    return (
        <header>
            <div className="container">
                <Link to="/">
                    <h2>Gym Buddy</h2>
                </Link>
                <nav>

                    {user ?
                        <div>
                            <span>{user.email}</span>
                            <button onClick={handleCLick}>Log out</button>
                        </div>
                        :
                        <div>
                            <Link to="/login">login</Link>
                            <Link to="/signup">signup</Link>
                        </div>
                    }
                </nav>
            </div>
        </header>
    );
}

export default Navbar;