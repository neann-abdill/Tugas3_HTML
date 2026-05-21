import { Link, useNavigate } from "react-router-dom";


function Navbar() {
    const navigate = useNavigate();
    return(
        <>
        <Link to="/">Home</Link>
        <Link to="/Contact">Contact</Link>
        <Link to="/Profile">Profile</Link>
        <button onClick={() => navigate("*")}>Rahasia ssttt</button>
        </>
    )
}

export default Navbar;