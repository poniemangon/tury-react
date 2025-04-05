import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import './styles.css';


const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 992);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    const handleResize = () => {
      const mobile = window.innerWidth <= 992;
      setIsMobile(mobile);
      if (!mobile) setMenuOpen(false);
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const toggleMenu = () => {
    if (isMobile) setMenuOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header>
      <section className={`header-section ${scrolled ? "scrolled" : ""} ${menuOpen ? "open" : ""}`}>
        <div className="container">
          <div className="row">
            {/* Logo */}
            <div className="col logo-col d-flex">
              <Link to="/">
                <img src="/images/logo.png" alt="TUR Logo" className="logo m-auto" />
              </Link>
            </div>

            {/* Botón hamburguesa */}
            <div className="col mobile burger-col" onClick={toggleMenu}>
              <FontAwesomeIcon icon={faBars} />
            </div>

            {/* Menú Desktop */}
            <div className="col nav-col desktop">
              <ul className="d-flex">
                <li><Link to="/products" className="subhead">PRODUCTOS</Link></li>
                <li><Link to="/about-us" className="subhead">NOSOTROS</Link></li>
                {/* <li><Link to="/specs" className="subhead">ESPECIFICACIONES</Link></li> */}
                <li><Link to="/contact" className="subhead">CONTACTO</Link></li>
              </ul>
            </div>
          </div>

          {/* Menú Mobile */}
          {isMobile && (
            <div className={`col  nav-col mobile ${menuOpen ? "open" : ""}`}>
              <ul className="d-flex flex-column">
                <li><Link to="/products" onClick={closeMenu} className="subhead">PRODUCTOS</Link></li>
                <li><Link to="/about-us" onClick={closeMenu} className="subhead">NOSOTROS</Link></li>
                {/* <li><Link to="/specs" onClick={closeMenu} className="subhead">ESPECIFICACIONES</Link></li> */}
                <li><Link to="/contact" onClick={closeMenu} className="subhead">CONTACTO</Link></li>
              </ul>
            </div>
          )}
        </div>
      </section>
    </header>
  );
};

export default Header;
``
