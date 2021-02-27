import "./Header.css";

const Header = (props) => {
  return (
    <nav className="navbar">
      <div className="nav-logo">
        <div className="nav-logo-text">Kasino</div>
      </div>
      <div className="nav-menu">
        <div className="nav-menu-item">
          <div id="balance">${props.balance}</div>
        </div>
        <div className="nav-menu-item">
          <button
            className="my-btn my-btn-dark nav-button"
            onClick={() => props.onChange(20)}
          >
            Login
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Header;
