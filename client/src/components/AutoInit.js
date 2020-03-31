import React, { Fragment, useEffect } from 'react'
import M from 'materialize-css/dist/js/materialize.min.js';

const AutoInit = () => {

    useEffect(() => {
        M.AutoInit();
    })

    return (
        <Fragment />
    )
}

export default AutoInit
