import React from 'react';


export default function Navbar(props) {

    let despS, navS, titleS;

    if (props.navStyle == true) {
        navS = props.navS;
        titleS = props.titleS;
        despS = props.despS;
    } else{
        navS = {background : `#212529`};
    }
    
    return (
        <>
            <nav style={navS} className="navbar navbar-expand-lg ">
                <div className="container-fluid">
                    <a style={titleS} className="navbar-brand" href="">{props.title}</a>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a style={despS} className="nav-link disabled" tabIndex="-1" aria-disabled="true">With us manage your energy consumption</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}
