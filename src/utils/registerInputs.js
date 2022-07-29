import PersonIcon from '@mui/icons-material/Person';
import EmailIcon from '@mui/icons-material/Email';
import LockIcon from '@mui/icons-material/Lock';

export const inputs = [
    {
        id: 1,
        name: "username",
        type: "text",
        placeholder: "Username",
        errorMessage: "Username must be 3-16 characters and should not include any special character!",
        //label: "Username",
        icon: <PersonIcon />,
        pattern: "^[A-Za-z0-9]{3,16}$",
        required: true
    },
    {
        id: 2,
        name: "email",
        type: "email",
        placeholder: "Email",
        errorMessage: "Email address must be valid!",
        icon: <EmailIcon/>,
        //label: "Email",
        required: true
    },
    {
        id: 3,
        name: "password",
        type: "password",
        placeholder: "Password",
        errorMessage: "Password must be 8-20 characters and include at least 1 letter, 1 number and 1 special character!",
        icon: <LockIcon/>,
        //label: "Password",
        pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
        required: true
    },
    {
        id: 4,
        name: "confirmPass",
        type: "password",
        placeholder: "Confirm Password",
        errorMessage: "Passwords don't match!",
        icon: <LockIcon/>,
        //label: "Confirm Password",
        pattern: "",
        required: true
    }
];