import { useEffect } from "react";

import DashboardIcon from '@mui/icons-material/Dashboard';

import './AdminDashboard.css';

export const AdminDashboard = (props) => {
    useEffect(() => {
        props.showNav(false);
    });

    return (
        <section>
            <div className="bg-dark text-white py-1">
                <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <h1 className="board-title"><i className="dash-icon"><DashboardIcon sx={{display: "flex", justifyContent: "flex-end"}} fontSize="large" /></i> Dashboard</h1>
                    </div>
                </div>
                </div>
            </div>
        </section>
    );
};