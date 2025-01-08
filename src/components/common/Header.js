import { Link, useLocation } from "react-router-dom";
import '../../index.css'
export default function Header(props) {
    let location = useLocation();
    return (
        <nav className="navbar fixed-top shadow navbar-expand-lg bg-dark">
            <div className="container-fluid">
                <img src="/logo.jpg" className="my-2 mx-2" alt="temp" style={{ width: "150px" }} />
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className={`nav-link text-white ${location.pathname === '/' ? "active" : ""}`} aria-current="page" to="/"
                            >Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`nav-link text-white ${location.pathname === '/contact' ? "active" : ""}`} to="/contact">Contact</Link>
                        </li>
                        <li className="nav-item dropdown">
                            <Link
                                className="nav-link dropdown-toggle text-white"
                                to="/"
                                role="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                            >
                                Category
                            </Link>
                            <ul className="dropdown-menu">
                                <li><Link className={`dropdown-item ${location.pathname === "/category/all" ? "active" : ""}`} to="/category/all">All</Link></li>
                                <li><Link className={`dropdown-item ${location.pathname === "/category/technology" ? "active" : ""}`} to="/category/technology">Technology</Link></li>
                                <li><Link className={`dropdown-item ${location.pathname === "/category/sports" ? "active" : ""}`} to="/category/sports">Sports</Link></li>
                                <li><Link className={`dropdown-item ${location.pathname === "/category/wildlife" ? "active" : ""}`} to="/category/wildlife">Wildlife</Link></li>
                                <li><Link className={`dropdown-item ${location.pathname === "/category/nature" ? "active" : ""}`} to="/category/nature">Nature</Link></li>
                                <li><Link className={`dropdown-item ${location.pathname === "/category/lifestyle" ? "active" : ""}`} to="/category/lifestyle">Lifestyle</Link></li>
                            </ul>
                        </li>
                    </ul>
                    <form className="d-flex" role="search">
                        {!props.isLogin?<Link className="nav-link text-info mx-3 my-2" to="/login">Login</Link>:<Link className="nav-link text-info mx-3 my-2" to="/">Logout</Link>}
                        <input
                            className="form-control me-2"
                            type="search"
                            placeholder="Search"
                            aria-label="Search"
                        />
                        <button className="btn btn-outline-success" type="submit">
                            Search
                        </button>
                    </form>
                </div>
            </div>
        </nav>
    )
}