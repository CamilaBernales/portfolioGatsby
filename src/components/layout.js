/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { useState, useEffect } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Header from "./header"
import "./layout.css"
import "./index.css"

const Layout = ({ children }) => {
  const [checked, setChecked] = useState(
    localStorage.getItem("theme") === "dark" ? true : false
  )
  useEffect(() => {
    document
      .getElementsByTagName("body")[0]
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
    <>
      <Header />
      <input
        type="checkbox"
        defaultChecked={checked}
        onChange={() => toggleThemeChange()}
      />

      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0 1.0875rem 1.45rem`,
        }}
      >
        <main>{children}</main>
        <footer>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
