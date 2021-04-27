import React from "react"
import PropTypes from "prop-types"
import * as footerStyles from "./footer.module.scss"

const Footer = ({ authorName }) => {
  return (
    <footer className={footerStyles.footer}>
      <p>
        create by {authorName} © {new Date().getFullYear()}
      </p>
    </footer>
  )
}

Footer.propTypes = {
  authorName: PropTypes.string,
}

Footer.defaultProps = {
  authorName: ``,
}

export default Footer
