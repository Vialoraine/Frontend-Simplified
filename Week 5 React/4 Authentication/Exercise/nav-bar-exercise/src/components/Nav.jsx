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
  const [user, setUser] = React.useState({});
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
        console.log(user);
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
        <div className="logo__container">
          <button className="logo__btn">
            <FontAwesomeIcon icon="bars" className="logo__btn--img" />
          </button>
          <figure className="logo__wrapper">
            <a href="/" className="nav__link">
              <img
                src="https://frontendsimplified.com/_nuxt/img/Frontend%20Simplified%20Logo.853fbda.png"
                alt=""
                className="logo__img"
              />
            </a>
          </figure>
        </div>
        {!user.email ? (
          <ul className="nav__links">
            <li className="nav__list">
              <button className="nav__btn btn-login" onClick={login}>
                Login
              </button>
            </li>
            <li className="nav__list">
              <button className="nav__btn btn-register" onClick={register}>
                Register
              </button>
            </li>
          </ul>
        ) : (
          <ul className="nav__links">
            <li className="nav__list">
              <button className="nav__btn btn-logout" onClick={logout}>
                {user.email[0]}
              </button>
            </li>
          </ul>
        )}
      </div>
    </nav>
  );
};