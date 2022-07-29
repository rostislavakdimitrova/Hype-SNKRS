import { useEffect } from "react";
import './NotFound.css';

export const NotFound = (props) => {
    useEffect(() => {
        props.showNav(false);
    });

    return (
        <h1 className="not-found">404<br></br>Page Not Found</h1>
    );
};