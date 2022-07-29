import { useEffect } from "react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import { logout } from "../../services/auth";

export const Logout = () => {
    const navigate = useNavigate();

    const {user, userLogout} = useContext(AuthContext);

    useEffect(() => {
        logout(user.token)
            .then(() => {
                userLogout();
                navigate('/');
            })
            .catch((err) => {
                console.log(err);
                navigate('/404');
            });
    });
    return null;
};