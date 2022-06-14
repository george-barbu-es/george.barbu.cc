import React from "react"
import { Link } from "gatsby"

const NotFound = () => {
  return (
    <>
      <h1>Page not found</h1>
      <p>
        <Link to="/">Head home</Link>
      </p>
    </>
  )
}

export default NotFound