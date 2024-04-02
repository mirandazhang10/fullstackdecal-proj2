import { Outlet, Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import nwLogo from "./assets/logos/noteworthy-bear-w-text.png";

function Layout() {
  return (
    <>
        <div className="sticky top-0 z-10 bg-white shadow-md">
            <div className="p-5 px-10 flex justify-between items-center">
                <div>
                    <Link to="/">
                        <img
                            src={nwLogo}
                            width="60"
                            height="60"
                            className="d-inline-block align-top"
                            alt="Noteworthy logo"
                        />
                    </Link>
                </div>
                <div>
                    <div className="me-auto flex justify-end text-lg">
                        <HashLink className="hover:text-orange" smooth to="/#about">About</HashLink>
                        <Link className="hover:text-pink pl-10" to="/members">People of Note</Link>
                        <Link className="hover:text-green pl-10" to="/">Hire Us</Link>
                        <Link className="hover:text-blue pl-10" to="/">Auditions</Link>
                    </div>
                </div>
            </div>
        </div>
        <Outlet />
    </>
  )
}

export default Layout;