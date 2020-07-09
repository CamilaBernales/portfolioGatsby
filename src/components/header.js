import React, { useState, useEffect } from "react"
import "./index.css"
import { Link } from "gatsby"

const Header = () => {
  const [checked, setChecked] = useState(
    localStorage.getItem("theme") === "dark" ? true : false
  )
  useEffect(() => {
    document
      .getElementsByTagName("body")[0]
      .setAttribute("data-theme", localStorage.getItem("theme"))
    document
      .getElementsByClassName("navbar")[0]
      .setAttribute("data-theme", localStorage.getItem("theme"))
  }, [checked])
  const toggleThemeChange = () => {
    if (checked === false) {
      localStorage.setItem("theme", "dark")
      setChecked(true)
    } else {
      localStorage.setItem("theme", "light")
      setChecked(false)
    }
  }

  return (
    <nav className="navbar navbar-expand-lg">
      <Link className="navbar-brand text-secondary" to="/">
        Camila Bernales
      </Link>
      {localStorage.getItem("theme") === "dark" ? (
        <button
          className="navbar-toggler  navbar-dark bg-dark"
          type="button"
          data-toggle="collapse"
          data-target="#navbarText"
          aria-controls="navbarText"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
      ) : (
        <button
          className="navbar-toggler navbar-light bg-light"
          type="button"
          data-toggle="collapse"
          data-target="#navbarText"
          aria-controls="navbarText"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
      )}

      <div className="collapse navbar-collapse" id="navbarText">
        <ul className="navbar-nav m-auto">
          <li className="nav-item mt-1">
            <Link
              activeClassName="active"
              className="nav-link text-secondary"
              to="/"
            >
              <p>Home</p>
            </Link>
          </li>
          <li className="nav-item mt-1">
            <Link
              activeClassName="active"
              className="nav-link text-secondary"
              to="/aboutme/"
            >
              About me
            </Link>
          </li>
          <li className="nav-item mt-1">
            <Link
              className="nav-link text-secondary"
              activeClassName="active"
              to="/contact/"
            >
              Contact
            </Link>
          </li>
        </ul>
        <div className="custom-control custom-switch">
          <label className="custom-control-label" htmlFor="customSwitch1">
          <input
            type="checkbox"
            className="custom-control-input"
            id="customSwitch1"
            defaultChecked={checked}
            onChange={() => toggleThemeChange()}
          />
            <span role="img" aria-label="day emoji">&#127774;</span>
            <span role="img" aria-label="night emoji">&#127770;</span>
          </label>
        </div>
      </div>
    </nav>
  )
}

export default Header
