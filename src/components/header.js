import React from "react"
import { propTypes } from "react-bootstrap/esm/Image"

export default function Header(props) {
    return (<>
    <h1>{props.headerText}</h1>
    <div>{props.miti}</div>
    </>
    )
}