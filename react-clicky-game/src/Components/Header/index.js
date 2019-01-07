import React from "react";
import ReactDOM from "react-dom";


const Header = (props) => {
    return (
        <div className="header container">
        <h3 className="ui block header">
            <div className="message">{ props.message }</div>
            <div className="score hi-score">Score: { props.score  }| Top Score: { props.hiscore }</div>
        </h3>
        </div>

    )
}

export default Header;