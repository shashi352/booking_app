import "./navbar.css"

const Navbar = () =>{
    return(
    <div className="navbar">
        <div className="navContainer">
            <span className="logo"> lamabooking</span>
                <div className="navItems">
                <button className="nevButton">Register</button>
                <button className="nevButton">Login</button>
                </div>
        </div>
    </div>);
}

export default Navbar;