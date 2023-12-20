import React, { useState } from 'react';

import { useGlobalData } from '../../context/data/DataState';

export default function Alerts() {

    const { loading ,alert, alertType, alertMsg } = useGlobalData();

    // if (loading) return <div>Loading...</div>;
    return (
        alert &&
        <>
            <div style={{margin: 0}} className={`alert alert-${alertType} alert-dismissible fade show`} role="alert">
                <strong>{alertType.toUpperCase()}</strong> {alertMsg}
                <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
        </>
    )
}
