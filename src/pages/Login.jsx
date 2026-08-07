import React, { useEffect, useState, useTransition } from 'react'
import Container from "../components/Layout/Container"
import login_img from "../assets/login/login_img.png"
import { Link, useNavigate } from 'react-router-dom';
import { MdArrowBackIosNew, MdOutlineVisibility, MdOutlineVisibilityOff } from "react-icons/md";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useDispatch } from 'react-redux';
import { userLoginData } from '../slice/userSlice';

function Login() {
    const auth = getAuth();
    const navigate = useNavigate()
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch()
    // const [agree, setAgree] = useState('');

    const [emailClicked, setEmailClicked] = useState(false);
    const [passwordClicked, setPasswordClicked] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [submitAttempted, setSubmitAttempted] = useState(false);
    const [formSuccess, setFormSuccess] = useState(false);

    useEffect(() => {
        const localData = localStorage.getItem("userLoginData");
        if (localData) {
            navigate("/home", { replace: true });
        }
    }, [navigate]);

    const isEmailValid = email.includes('@');
    const isPasswordValid = password.length >= 6;
    const isFormValid = isEmailValid && isPasswordValid;

    const getEmailStatus = () => {
        if (!emailClicked) return "normal";
        return isEmailValid ? "success" : "error";

    };

    const getPasswordStatus = () => {
        if (!passwordClicked) return "normal";
        return isPasswordValid ? "success" : "error";
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
        setEmailClicked(true);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
        setPasswordClicked(true);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitAttempted(true);
        setEmailClicked(true);
        setPasswordClicked(true);

        if (isFormValid) {
            signInWithEmailAndPassword(auth, email, password)
                .then((user) => {
                    dispatch(userLoginData(user))
                    localStorage.setItem("userLoginData", JSON.stringify(user))

                    console.log(user)
                    setTimeout(() => {
                        navigate("/home", { replace: true })
                    }, 1500)
                })
                .catch((error) => {
                    const errMsg = error.code;
                    console.log(errMsg)
                    if (errMsg.includes("auth/invalid-credential")) {
                        console.log("Please check your info")
                    }
                });

            setFormSuccess(true);
            console.log("Form successfully logged in:", { email, password });
            setEmail('');
            setPassword('');
            // setAgree(false);
            setEmailClicked(false);
            setPasswordClicked(false);
            setSubmitAttempted(false);
        } else {
            setFormSuccess(false);
        }
    };

    const getInputClass = (status) => {
        if (status === 'error') {
            return 'bg-danger-soft border-danger-subtle text-fg-danger-strong focus:ring-danger focus:border-danger placeholder:text-fg-danger-strong';
        }
        if (status === 'success') {
            return 'bg-success-soft border-success-subtle text-fg-success-strong focus:ring-success focus:border-success placeholder:text-fg-success-strong ';
        }
        return 'bg-neutral-secondary-medium border-default-medium text-heading focus:ring-brand focus:border-brand placeholder:text-body';
    };

    const getLabelClass = (status) => {
        if (status === 'error') return 'text-fg-danger-strong';
        if (status === 'success') return 'text-fg-success-strong';
        return 'text-heading';
    };

    return (
        <div className="loginWrapper flex flex-col md:flex-row w-full h-screen">
            <div className="loginLeft md:w-2/3 md:border-r-2 border-gray-200 flex flex-col px-6 md:flex-row md:items-center justify-between">
                <div className='md:h-screen flex md:flex-col justify-center md:justify-between md:py-15 md:pl-15'>
                    <p className='font-primary font-bold text-[50px] md:text-[65px] my-2 md:my-0 text-primary'>QuickBlood</p>
                    <div className='font-secondary capitalize text-[20px] md:text-[54px] font-bold text-brand hidden md:block'>
                        <p>every donor </p>
                        <p>saves lives ;</p>
                    </div>
                </div>
                <img src={login_img} alt="login_img" className='w-50 md:w-225 hidden md:block' />
            </div>
            <div className="loginRight md:w-1/3 flex flex-col px-6 pb-6 md:px-13 md:pb-0 justify-center">
                <p className='font-primary font-bold text-[30px] md:text-[45px] capitalize mb-2 mt-3 md:mt-0 text-center'>share hope <span className='text-primary'>&</span> save life</p>
                <p className='font-secondary text-[13px] md:text-[16px] mb-5 md:mb-9 text-center'>Step forward today to support our growing network of donors. A little warmth from your heart can light up someone's entire world.</p>
                <form onSubmit={handleSubmit} noValidate>

                    <div className="mb-5">
                        <label htmlFor="email" className={`block mb-2.5 text-sm font-medium ${getLabelClass(getEmailStatus())}`}>
                            Your Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={handleEmailChange}
                            className={`w-full h-14 font-secondary rounded-base block px-3 py-2.5 shadow-xs border hover:border-brand ${getInputClass(getEmailStatus())}`}
                            placeholder="Email address"
                            required
                        />

                        {/* error / success msg  */}

                        {/* <div className="h-4 mt-1.5">
                            {getEmailStatus() === 'error' && (
                                <p className=" text-sm text-fg-danger-strong "> Please enter a valid gmail.</p>
                            )}
                            {getEmailStatus() === 'success' && (
                                <p className="text-sm text-fg-success-strong">Valid Email</p>
                            )}
                        </div> */}

                        {/* error / success msg  */}

                    </div>

                    <div className="mb-10">
                        <label htmlFor="password" className={`block mb-2.5 text-sm font-medium ${getLabelClass(getPasswordStatus())}`}>
                            Your password
                        </label>
                        <div className='flex flex-col relative'>
                            <input
                                type={showPassword ? "text" : "password"} name="password"
                                id="password"
                                value={password}
                                onChange={handlePasswordChange}
                                className={`w-full h-14 font-secondary rounded-base block px-3 py-2.5 shadow-xs border hover:border-brand ${getInputClass(getPasswordStatus())}`}
                                placeholder="Password"
                                required
                            />
                            <div
                                className='absolute right-4 top-4 text-xl cursor-pointer text-gray-500'
                                onClick={() => setShowPassword(!showPassword)}
                            >
                                {showPassword ? <MdOutlineVisibilityOff /> : <MdOutlineVisibility />}
                            </div>
                        </div>

                        {/* error / success msg  */}

                        {/* <div className='h-4 mt-1.5'>
                            {getPasswordStatus() === 'error' && (
                                <p className="text-sm text-fg-danger-strong">Please enter 6+ characters.</p>
                            )}
                            {getPasswordStatus() === 'success' && (
                                <p className="text-sm text-fg-success-strong">Secure password.</p>
                            )}
                        </div> */}

                        {/* error / success msg  */}
                    </div>
                    {/* 
                    <div className="mb-6 h-10 mt-10">
                        <label htmlFor="remember" className="flex items-center cursor-pointer">
                            <input
                                id="remember"
                                type="checkbox"
                                checked={agree}
                                onChange={(e) => setAgree(e.target.checked)}
                                className="w-4 h-4 border border-default-medium rounded-xs bg-neutral-secondary-medium focus:ring-2 focus:ring-brand-soft"
                            />
                            <p className="ms-2 text-sm font-medium text-heading select-none">
                                I agree with the <a href="#" className="text-fg-brand hover:underline">terms and conditions</a>.
                            </p>
                        </label>
                        {submitAttempted && !agree && (
                            <p className="ml-5 mt-2 text-[13px] text-fg-danger-strong font-medium font-secondary">
                                * Accept terms to proceed.
                            </p>
                        )}
                    </div> */}

                    <button
                        type="submit"
                        className="text-white font-secondary bg-brand box-border border border-transparent hover:bg-brand-strong focus:ring-4  shadow-xs font-medium leading-5 rounded-full text-[16px] px-4 py-2.5 focus:outline-none w-full cursor-pointer"
                    >
                        Login
                    </button>
                    {/* {formSuccess && (
                        <div className="mb-5 p-3 rounded-base bg-success-soft border border-success-subtle text-fg-success-strong text-sm">
                            <span className="font-medium">Success!</span> Form authenticated and terms accepted.
                        </div>
                    )} */}
                </form>
                <button
                    type="submit"
                    className="text-black font-secondary box-border border border-transparent hover:bg-gray-100 focus:ring-4 font-medium leading-5 rounded-full text-[16px] px-4 py-2.5 mt-3 focus:outline-none w-full cursor-pointer"
                >
                    Forgotten Password ?
                </button>
                <Link
                    to="/registration"
                    className="text-brand text-center font-secondary box-border border border-1-brand hover:bg-gray-100 focus:bg-brand focus:text-white font-medium leading-5 rounded-full text-[16px] px-4 py-2.5 mt-6 md:mt-13 focus:outline-none w-full cursor-pointer"
                >
                    Create new account
                </Link>
            </div>
        </div>
    )
}

export default Login