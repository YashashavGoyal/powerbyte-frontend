import React from 'react';
import { Link } from "react-router-dom";

import img404 from './404notfound.gif';

export default function NotFound(props) {


    // const windowSize = useRef([window.innerWidth, window.innerHeight]);
    // let width = (windowSize.current[0] <= 720) ? `100%` : `50%`;

    const imgS = {
        height: `auto`
    }


    return (
        <>
            <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
                <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                    <h1 className="h2">The page you are looking for is not found</h1>
                </div>

                {/* <canvas className="my-4 w-100" id="myChart" width="900" height="380"></canvas> */}

                <div className="container-fluid">
                    <div className="not-found-container">
                        <img src={img404} className='not-found-img' alt="404 Not Found" style={imgS} />
                    </div>
                </div>
            </main>

        </>
    )
}
