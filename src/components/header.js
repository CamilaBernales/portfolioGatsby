import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <nav   style={{
    margin: `0 auto`,
    maxWidth: 960,
    padding: `0 1.0875rem 1.45rem`,
  }}>
    <span class="navbar-brand mb-0 h1">Camila Bernales</span>
    <a class="navbar-brand" href="#">
      About
    </a>
    <a class="navbar-brand" href="#">
      Contact
    </a>
  </nav>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
