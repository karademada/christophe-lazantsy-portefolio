import React from 'react'
import PropTypes from "prop-types"

const Footer = ({authorName})=>{
    return (
        <footer>
            <p>create by {authorName} © {new Date().getFullYear()}</p>
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