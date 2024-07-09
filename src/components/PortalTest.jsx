import React from 'react'
import {
    createPortal
} from "react-dom";

function PortalTest() {
    return createPortal(
        <div style={{ color: "white", textAlign: 'center' }}>PortalTest</div>
        , document.getElementById('portal-root'))
}

export default PortalTest;