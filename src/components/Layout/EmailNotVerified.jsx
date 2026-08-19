import verify_mail from "../../assets/verify-mail.png"
import { ThreeDots } from 'react-loader-spinner'
import { useState } from 'react';


function EmailNotVerified() {

    const [btnLoading, setBtnLoading] = useState(false)

    const handleRefresh = () => {
        setBtnLoading(true)
        setTimeout(() => {
            window.location.reload()
        }, 500)
    }

    return (
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
        </div>
    )
}

export default EmailNotVerified