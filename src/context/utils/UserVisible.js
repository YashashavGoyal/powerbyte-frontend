import { createContext, useContext, useEffect, useState } from 'react';

const DataContext = createContext();

export function UserVisible() {
    return useContext(DataContext);
}

const UserVisibleContext = (props) => {

    function getBrowserVisibilityProp() {
        if (typeof document.hidden !== "undefined") {
            // Opera 12.10 and Firefox 18 and later support
            return "visibilitychange"
        } else if (typeof document.msHidden !== "undefined") {
            return "msvisibilitychange"
        } else if (typeof document.webkitHidden !== "undefined") {
            return "webkitvisibilitychange"
        }
    }

    function getBrowserDocumentHiddenProp() {
        if (typeof document.hidden !== "undefined") {
            return "hidden"
        } else if (typeof document.msHidden !== "undefined") {
            return "msHidden"
        } else if (typeof document.webkitHidden !== "undefined") {
            return "webkitHidden"
        }
    }

    function getIsDocumentHidden() {
        return !document[getBrowserDocumentHiddenProp()]
    }

    const state = {
        getBrowserVisibilityProp,
        getBrowserDocumentHiddenProp,
        getIsDocumentHidden
    };

    return (
        <DataContext.Provider value={state}>{props.children}</DataContext.Provider>
    );
};

export default UserVisibleContext;