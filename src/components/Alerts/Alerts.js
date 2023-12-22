import React, { useState } from 'react';

export default function Alerts() {

    const [alert, setAlert] = useState(false)

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
            }} className={`alert alert-danger alert-dismissible fade show`} role="alert">
            <strong style={{ color: `red` }}></strong> : <span style={{ color: `crimson` }}> </span>
            <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                <span aria-hidden="true" onClick={handleCloseError}>&times;</span>
            </button>
        </div >
        </>
    )
}
