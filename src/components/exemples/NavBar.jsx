const NavBar = () => {
    return(
    <nav className="navbar bg-gradient shadow bg-primary mx-0">
        <div className="container d-flex">
            <a href="/" className="text-decoration-none">
             <h1 className="navbar-brand m-0 text-light">E-commerce</h1>
            </a>
            <div className="navbar-nav flex-row gap-4">
                    <a href="#" className="nav-link text-light">Products</a>
                    <a href="#" className="nav-link text-light">Connnetion</a>
                    <a href="#" className="nav-link text-light">Contact</a>
            </div>
        </div>
    </nav>
    )
    
}



export default NavBar