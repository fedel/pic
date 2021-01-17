import React from 'react';
import clsx from "clsx";
import {
    makeStyles,
    Theme,
    createStyles,
    FormControl,
    InputLabel,
    TextField,
    OutlinedInput,
    InputAdornment,
    IconButton,
    Typography,
    Button
} from "@material-ui/core";
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import {useNavigate} from "@reach/router"
import {BACKEND_URL, login} from '../AuthContext';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        container: {
            textAlign: "center",
        },
        withoutLabel: {
            marginTop: theme.spacing(3),
        },
        textField: {
            width: '40ch',
        },
        row: {
            padding: "1ch",
        },
        actions: {
            padding: "1ch",
            textAlign: "right",
        },
        separator: {
            display: "inline-block",
            minWidth: "70px",
        }
    }),
);

interface FormState {
    username: string;
    password: string;
    showPassword: boolean;
};

function LoginPage(props: any) {
    const classes = useStyles();
    const navigate = useNavigate();
    const [values, setValues] = React.useState<FormState>({
        username: '',
        password: '',
        showPassword: false,
    });

    const handleChange = (prop: keyof FormState) => (event: React.ChangeEvent<HTMLInputElement>) => {
        setValues({...values, [prop]: event.target.value});
    };

    const handleClickShowPassword = () => {
        setValues({...values, showPassword: !values.showPassword});
    };

    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };

    const handleLogin = async (event: React.MouseEvent<HTMLButtonElement>) => {
        const credential = {
            username: values.username,
            password: values.password,
        }
        
        const tokenUsuario1Nivel1 = "eyJhbGciOiJIUzI1NiJ9.eyJSb2xlIjoiTml2ZWwxIiwiSXNzdWVyIjoiSXNzdWVyIiwiVXNlcm5hbWUiOiJ1c3VhcmlvMSIsImV4cCI6MTkxNjY5ODk2NywiaWF0IjoxNjAxMTY2MTY3fQ.su1jWA-xIvCpXHxrjEjhtP5v6MMK6BDUyOtN-rdxTNc";
        login({
            accessToken: tokenUsuario1Nivel1,
            refreshToken: ""
        });

        await navigate('/home');
    };

    function modoWeb() {
        window.sessionStorage.setItem("mode", "web");
        window.location.reload();
    }

    function modoWebLogin() {
        window.sessionStorage.setItem("mode", "web");
        window.location.reload();
    }

    return (
        <div className={classes.container}>
            <Typography variant="h6">Iniciar Sesión</Typography>
            <div className={classes.row}/>
            <div className={classes.row}/>
            <div className={classes.row}>
                <TextField
                    className={clsx(classes.textField)}
                    required
                    id="username"
                    label="Email"
                    value={values.username}
                    onChange={handleChange("username")}
                    variant="outlined"
                />
            </div>

            <div className={classes.row}>
                <FormControl
                    className={clsx(classes.textField)}
                    variant="outlined">
                    <InputLabel htmlFor="outlined-adornment-password">Clave</InputLabel>
                    <OutlinedInput
                        id="password"
                        type={values.showPassword ? 'text' : 'password'}
                        value={values.password}
                        onChange={handleChange('password')}
                        endAdornment={
                            <InputAdornment position="end">
                                <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={handleClickShowPassword}
                                    onMouseDown={handleMouseDownPassword}
                                    edge="end"
                                >
                                    {values.showPassword ? <Visibility/> : <VisibilityOff/>}
                                </IconButton>
                            </InputAdornment>
                        }
                        labelWidth={70}
                    />
                </FormControl>
            </div>

            <div className={classes.row}>
                <Button>Olvido su contraseña</Button>
                <div className={classes.separator}>&nbsp;</div>
                <Button  variant="contained" onClick={handleLogin}>Ingresar</Button>
            </div>

            <div className={classes.row}>
                <Button  variant="contained" onClick={modoWeb}>Ir Web Anonimo</Button>
                <div className={classes.separator}>&nbsp;</div>
                <Button  variant="contained" onClick={modoWebLogin}>Ingresar Web</Button>
            </div>
        </div>
    );
}

export default LoginPage;
