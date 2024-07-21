import React from 'react'
import { Link } from 'react-router-dom';
import "./assets/style/see-more.css";

export default function LinkSeeMore(props) {
  return (
    <div className="see-more-container">
      <p className="see-more-title"> {props.title} </p>
      <Link to={props.links} className="see-more-link"> {props.text} {'>'} </Link>
    </div>
  )
}
