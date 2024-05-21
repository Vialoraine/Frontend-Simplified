import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { auth } from "../firebase/init";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";

export const Nav = () => {
  const [user, setUser] = React.useState();
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setLoading(false);
      if (user) {
        setUser(user);
      }
    });
  }, []);

  function register() {
    createUserWithEmailAndPassword(auth, "email@email.com", "test123")
      .then((user) => {
        console.log(user);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  function login() {
    signInWithEmailAndPassword(auth, "email@email.com", "test123")
      .then(({ user }) => {
        setUser(user);
      })
      .catch((error) => {
        console.log(error.message);
      });
  }

  function logout() {
    signOut(auth);
    setUser({});
  }

  return (
    <nav>
      <div className="nav__container">
        <ul className="nav__links">
          <li className="nav__list">
            <a href="/" className="nav__link">
              <FontAwesomeIcon icon="bars" />
            </a>
          </li>
          <li className="nav__list">
            <a href="/" className="nav__link">
              <img
                src="https://frontendsimplified.com/_nuxt/img/Frontend%20Simplified%20Logo.853fbda.png"
                alt=""
                className="logo"
              />
            </a>
          </li>
          {loading ? (
            <>
              <li className="nav__list">Loading...</li>
              <li className="nav__list">Loading...</li>
              <li className="nav__list">Loading...</li>
            </>
          ) : (
            <>
              <li className="nav__list">
                  <button className="btn btn-login" onClick={login}>
                    Login
                  </button>
              </li>
              <li className="nav__list">
                  <button className="btn btn-register" onClick={register}>
                    Register
                  </button>
              </li>
              <li className="nav__list">
                {user === true ? (
                    <button className="btn btn-user" onClick={logout}>
                      {user.email[0]}
                    </button>
                ) : (
                  "Please Login"
                )}
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
};

// <button className="btn" onClick={register}>Register</button>
// <button className="btn" onClick={login}>Login</button>
// <button className="btn" onClick={logout}>Logout</button>
// {loading ? "loading..." : user.email}
