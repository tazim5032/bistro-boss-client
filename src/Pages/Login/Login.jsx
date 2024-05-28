import { useContext, useEffect, useState } from 'react';
import Helmet from 'react-helmet';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import {
    loadCaptchaEnginge, LoadCanvasTemplate,
    validateCaptcha
} from 'react-simple-captcha';
import Swal from 'sweetalert2';
import SocialLogIn from '../../Components/Social/SocialLogIn';




import { AuthContext } from '../../providers/AuthProvider';

const Login = () => {

    // const captchaRef = useRef(null);
    const [disabled, setDisabled] = useState(true)

    const { signIn } = useContext(AuthContext);


    useEffect(() => {
        loadCaptchaEnginge(6);
    }, [])

    const navigate = useNavigate();
    const location = useLocation();

    const from = location?.state?.from?.pathname || '/';


    const handleLogin = e => {
        e.preventDefault();

        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        signIn(email, password)
            .then(result => {

                if (result.user) {
                    navigate(from);
                    Swal.fire({
                        icon: 'success',
                        title: 'Congrats',
                        text: 'Login Successful!',
                    });


                }
                else {
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'Invalid email or password!',
                    });
                }
            })

    }

    const handleValidateCaptcha = e => {
        e.preventDefault()
        const user_captcha_value = e.target.value;

        if (validateCaptcha(user_captcha_value)) {
            setDisabled(false)
        }

        else {
            setDisabled(true)
        }
    }

    return (
        <div className="hero min-h-screen bg-base-200">
            <Helmet>
                <title>Bistro Boss | Login</title>
            </Helmet>
            <div className="hero-content flex-col sm:flex-row">
                <div className="text-center md:w-1/2 lg:text-left">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                </div>
                <div className="card md:w-1/2 max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleLogin}
                        className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="Email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="Password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <LoadCanvasTemplate />
                            </label>
                            <input type="text" onBlur={handleValidateCaptcha} name="captcha" placeholder="Type The Captcha Above"
                                className="input input-bordered" required />

                        </div>
                        <div className="form-control mt-6">

                            <input disabled={disabled} className="btn btn-primary" type="submit" value="Login" />
                        </div>
                    </form>

                    
                    <div className="md:w-3/4 lg:w-1/2 mx-auto pb-6"
                        data-aos="zoom-in"
                        data-aos-duration="1000">
                        <SocialLogIn ></SocialLogIn>
                    </div>


                    <p><small>New Here? <Link to='/signup'>Create an Account</Link> </small></p>
                </div>

            </div>
        </div>
    );
};

export default Login;