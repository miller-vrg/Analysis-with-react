import "./css/header.css";

const Header = () => {
  return (
    <>
      <header>
      <i className="fi fi-br-menu-burger"></i>
      <i className="fi fi-br-cross"></i>
        <nav className="cabecera">
          <ul className="cabecera__menu">
            <li className="cabecera__menu-items">
              <a className="menu-items__link" href="#">Inicio</a>
            </li>
            <li className="cabecera__menu-items">
              <a className="menu-items__link" href="#">Analisis anual</a>
            </li>
            <li className="cabecera__menu-items">
              <a className="menu-items__link" href="#genero">Genero</a>
            </li>
            <li className="cabecera__menu-items">
              <a className="menu-items__link" href="#conclusion">Conclusion</a>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Header;