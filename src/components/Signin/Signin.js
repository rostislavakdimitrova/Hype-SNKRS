import './Signin.css';
import { useState, useEffect } from 'react';
import { useContext } from 'react';
import { inputs } from '../../utils/loginInputs';
import { FormInput } from '../Input/FormInput';
import { Link, useNavigate } from 'react-router-dom';
import { login } from '../../services/auth';
import { toast } from 'react-toastify';
import { Loading } from '../Loading/Loading';
import { AuthContext } from '../../contexts/AuthContext'; 


export const Signin = (props) => {
    useEffect(() => {
        props.showNav(false);
    });

    const navigate = useNavigate();

    const { userAuth } = useContext(AuthContext);
    const [ userData, setUserData ] = useState({
        email: '',
        password: ''
    });

    const [ loading, setLoading ] = useState(false);
    
    
    const submitHandler = (e) => {
        e.preventDefault();
        
        const { email, password } = userData;
        console.log(email, password);
        setLoading(true);

        login(email, password)
            .then(authData => {
                console.log(authData);
                setLoading(false);
                userAuth(authData);
                
                toast.success(authData.message, 'You have successfully signed in!'); // ????????????????

                if (authData.role === 'admin') {
                    navigate('/admin/dashboard');
                } else {
                    navigate('/user/dashboard');
                }
            })
            .catch((err) => {
                console.log(err, 'Signin error');
                toast.error(err.authData.message, 'Server error'); // ????????????????????????
                navigate('/404');
            });
        }; 

    const changeValueHandler = (e) => {
        setUserData((state) => ({
            ...state,
           [ e.target.name]: e.target.value
        }));
    };
  
    console.log(userData);

    const invalid = !(Object.values(userData).some((v) => v));

    return (
        <div className='signin-container'>
        {!loading && <Loading />}
        <form onSubmit={submitHandler}>
            <h1>Login</h1>
          
            {inputs.map((input) => (
                <FormInput 
                    key={input.id}
                    {...input}
                    value={userData[input.name]}
            onChange={changeValueHandler}
                />
            ))}
            <button type='submit' disabled={invalid}>Sign in</button>
            <div className="reg-link">
                <h6 className="reg">You don't have an account?</h6>
                <Link to="/signup" className="signinLink">Sign up</Link>
            </div>
        </form>
        </div>
    );
};


//import { isAuthenticated, setAuthentication } from '../../utils/auth';

//setAuthentication(authData.data.token, authData.data.user);

                /*if (isAuthenticated() && isAuthenticated().role === 'user') { //.role === 1
                    console.log('Redirect to admin dashboard');
                    //history.push('/admin/dashboard');
                    navigate('/admin/dashboard');
                } else {
                    console.log('Redirect to home page');
                    navigate('/'); // /user/dashboard
                }*/

