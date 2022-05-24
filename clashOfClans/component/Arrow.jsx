import React from 'react'

export default function Arrow(props) {
    return (
        <div className="arrow-wrapper" onClick={props.handleClick}>
          <div className="round">
            <div id="cta">
              <span className={"arrow "+props.dir}></span>
            </div>
          </div>
        </div>
    )
}
