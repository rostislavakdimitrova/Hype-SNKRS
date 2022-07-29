
import './Signup.css';
import { toast } from 'react-toastify';
import { inputs } from '../../utils/registerInputs' ;
import { useContext, useEffect, useState } from 'react';
import { FormInput } from '../Input/FormInput';
import { Link, useNavigate } from 'react-router-dom';
import { register } from '../../services/auth';
//import { Loading } from '../Loading/Loading';
import { AuthContext } from '../../contexts/AuthContext';


export const Signup = (props) => {
    useEffect(() => {
        props.showNav(false);
    });
    
    const navigate = useNavigate();

    const { userAuth } = useContext(AuthContext);
    const [ userData, setUserData ] = useState({
        username: '',
        email: '',
        password: '',
        confirmPass: '',
    });

    const [ loading, setLoading ] = useState(false);
    
    const submitHandler = (e) => {
        e.preventDefault();
        
        const { username, email, password, confirmPass } = userData;

        setLoading(true);
        
        register(username, email, password)
            .then(authData => {
                console.log(authData);
                setLoading(false);
                userAuth(authData);
                toast.success('You have successfully registered!'); // ????????????????

                if (authData.role === 'admin') {
                    navigate('/admin/dashboard');
                } else {
                    navigate('/user/dashboard');
                }
            })
            .catch((err)=> {
                console.log('Error: ', err);
                setLoading(false);
                navigate('/404');
                toast.error(err.result.message, 'Bad User Credentials!'); // ??????????
            });
        };

    const changeValueHandler = (e) => {
        setUserData(state => ({
            ...state,
            [e.target.name]: e.target.value
        }));
    };

    console.log(userData);
    const invalid =  !(Object.values(userData).some((v) => v));
 

    if (inputs[3]) {
        inputs[3].pattern = userData.password;
    }

    return (
        <div className='signup-container'>
        <form onSubmit={submitHandler}>
            <h1>Register</h1>
            <i className='fields-required'>* All fields are required</i>
            {inputs.map((input) => (
                <FormInput 
                    key={input.id}
                    {...input}
                    value={userData[input.name]} 
                    onChange={changeValueHandler}
                />
            ))}

            <button disabled={invalid}>Sign up</button>
            <div className='reg-link'>
                Already have an account?  
                <Link to="/signin" className='signupLink'>Sign in</Link>
            </div>
        </form>
        </div>
    );
};