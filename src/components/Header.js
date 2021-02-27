import { useState } from "react";
import {
  OverlayTrigger,
  Popover,
  InputGroup,
  FormControl,
  Button,
} from "react-bootstrap";
import "./Header.css";

const Header = (props) => {
  const [loggedIn, setLoggedIn] = useState(false);
  const login = (e) => {
    e.preventDefault();
    localStorage.setItem("username", e.target.username.value);
    localStorage.setItem("balance", props.balance);
    setLoggedIn(true);
  };

  const logout = () => {
    localStorage.removeItem("username");
    localStorage.removeItem("balance");
    setLoggedIn(false);
  };
  return (
    <nav className="navbar">
      <div className="nav-logo">
        <div className="nav-logo-text">Kasino</div>
      </div>
      <div className="nav-menu">
        <div className="nav-menu-item">
          <div id="balance">${props.balance}</div>
        </div>
        {loggedIn ? (
          <span
            onClick={logout}
            id="login-avatar"
            className="p-2 rounded-circle"
            title="Logout"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              fill="#ffffff"
              class="bi bi-person-fill"
              viewBox="0 0 16 16"
            >
              <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
            </svg>
          </span>
        ) : (
          <div className="nav-menu-item">
            {/* Login button and pop-over */}
            <OverlayTrigger
              trigger="click"
              placement="bottom"
              overlay={
                <Popover id="login-popover">
                  <Popover.Content>
                    <form onSubmit={login}>
                      <InputGroup>
                        <FormControl
                          placeholder="Username"
                          aria-label="Username"
                          aria-describedby="username"
                          name="username"
                          id="username"
                          required
                        />
                        <InputGroup.Append>
                          <Button type="submit" variant="outline-dark">
                            Go
                          </Button>
                        </InputGroup.Append>
                      </InputGroup>
                    </form>
                  </Popover.Content>
                </Popover>
              }
            >
              <button className="my-btn my-btn-dark nav-button">Login</button>
            </OverlayTrigger>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Header;
