import React, { useState } from 'react';

import { useGlobalData } from '../../context/data/DataState';

export default function Alerts() {

    const { loading, alert, alertType, alertMsg, setAlert } = useGlobalData();

    const handleCloseError = () => {
        setAlert(false);
    }

    // if (loading) return <div>Loading...</div>;
    return (
        alert &&
        <>
            <div style={{
                position: `absolute`,
                margin: `0px`,
                right: 0,
                zIndex: 1,
                width: `auto`
            }} className={`alert alert-${alertType} alert-dismissible fade show`} role="alert">
            <strong style={{ color: `red` }}>{alertType.toUpperCase()}</strong> : <span style={{ color: `crimson` }}> {alertMsg} </span>
            <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                <span aria-hidden="true" onClick={handleCloseError}>&times;</span>
            </button>
        </div >
        </>
    )
}
