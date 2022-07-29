import EmailIcon from '@mui/icons-material/Email';
import LockIcon from '@mui/icons-material/Lock';


export const inputs = [
    {
        id: 1,
        name: "email",
        type: "email",
        placeholder: "Email Address",
        errorMessage: "Email address must be valid!",
        pattern: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
        icon: <EmailIcon/>,
        label: "Email",
        required: true
    },
    {
        id: 2,
        name: "password",
        type: "password",
        placeholder: "Password",
        errorMessage: "Password is required!",
        icon: <LockIcon/>,
        label: "Password",
        required: true
    }
]