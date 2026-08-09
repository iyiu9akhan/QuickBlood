import { getAuth, onAuthStateChanged } from 'firebase/auth'
import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import Container from "../components/Layout/Container"
import { Link } from 'react-router-dom';
import verify_mail from "../assets/verify-mail.png"
import { ThreeDots } from 'react-loader-spinner'


function home() {
    const auth = getAuth();
    const navigate = useNavigate()
    const data = useSelector(state => state.userInfo.value)
    const [verify, setVerify] = useState(false)
    const [loading, setLoading] = useState(true)
    const [btnLoading, setBtnLoading] = useState(false)
    console.log(data, "data")

    useEffect(() => {
        if (!data) {
            navigate("/login")
        }
    }, [])

    onAuthStateChanged(auth, (user) => {
        console.log(user, "home user")
        if (user.emailVerified) {
            setVerify(true)
        }
        setLoading(false)
    });

    if (loading) {
        return null
    }
    const handleRefresh = () => {
        setBtnLoading(true)
        setTimeout(() => {
            window.location.reload()
        }, 500)
    }
    return (
        <>
            <Container>
                {
                    verify ?
                        <div>Lorem ipsum dolor sit amet.</div>
                        :
                        <div className="flex flex-col w-full min-h-screen items-center justify-center text-center px-6">
                            <img src={verify_mail} alt="verify_mail" className='w-60 md:w-90' />
                            {/* <p className='font-primary font-bold text-[65px] my-0 text-primary'>QuickBlood</p> */}
                            <p className="text-[29px] md:text-[40px] font-secondary  font-medium mt-6">Verify your email address</p>
                            <p className='font-secondary text-[16px] md:text-[20px] max-w-200 mt-3'>A verification link has been sent to your email. Click the link to proceed. If you don't see it, please check your spam folder.</p>

                            <div className="mt-9 h-12 flex items-center justify-center w-full md:w-auto">
                                {btnLoading ? (
                                    <ThreeDots
                                        visible={true}
                                        height="44"
                                        width="44"
                                        color="#193CB8"
                                        radius="9"
                                        ariaLabel="three-dots-loading"
                                    />
                                )
                                    :
                                    (
                                        <button
                                            onClick={handleRefresh}
                                            className="text-white text-center font-secondary border border-brand bg-brand font-medium rounded-full text-[16px] md:px-16 py-2.5 w-full md:w-auto cursor-pointer transition duration-200"
                                        >
                                            Refresh
                                        </button>
                                    )}
                            </div>

                            <p className='font-secondary text-[14px] md:text-[16px] max-w-120 mt-3'>Already verified? Click Refresh to access your dashboard. Otherwise, check your email inbox.</p>
                            {/* <Link
                                to="/login"
                                className="text-brand text-center font-secondary box-border border border-1-brand hover:bg-gray-100 focus:bg-brand focus:text-white font-medium leading-5 rounded-full text-[16px] px-4 py-2.5 mt-6 md:mt-13 focus:outline-none w-full cursor-pointer"
                            >
                                Back to Login
                            </Link> */}
                            {/* link has some issue for useEffect  */}
                        </div>

                }
            </Container>
        </>
    )
}

export default home