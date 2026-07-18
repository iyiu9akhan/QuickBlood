import React from 'react'
import Container from "../components/Layout/Container"
import login_img from "../assets/login/login_img.png"

function Login() {
    return (
        <Container>
            <div className="loginWrapper flex w-full h-screen ">
                <div className="loginLeft w-1/2 flex flex-col justify-center items-center">
                    <img src={login_img} alt="login_img" className=' w-full' />
                </div>
                <div className="loginRight w-1/2 flex flex-col justify-center ">
                    <p className='font-primary font-bold text-[45px] capitalize mb-2 max-w-[550px]'>share hope <span className='text-[#D12B05]'>&</span> save life</p>
                    <p className='font-secondary max-w-[550px] text-[16px] mb-4'>Step forward today to support our growing network of donors. A little warmth from your heart can light up someone's entire world.</p>
                    <form class="max-w-sm">

                        <div class="mb-5">
                            <label for="email" class="block mb-2.5 text-sm font-medium text-heading">Your email</label>
                            <input type="email" id="email" class="bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full px-3 py-2.5 shadow-xs placeholder:text-body" placeholder="name@flowbite.com" required />
                        </div>
                        <div class="mb-5">
                            <label for="password" class="block mb-2.5 text-sm font-medium text-heading">Your password</label>
                            <input type="password" id="password" class="bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full px-3 py-2.5 shadow-xs placeholder:text-body" placeholder="••••••••" required />
                        </div>
                        <div class="mb-6">
                            <label for="success" class="block mb-2.5 text-sm font-medium text-fg-success-strong">Your name</label>
                            <input type="text" id="success" class="bg-success-soft border border-success-subtle text-fg-success-strong text-sm rounded-base focus:ring-success focus:border-success block w-full px-3 py-2.5 shadow-xs placeholder:text-fg-success-strong" placeholder="Success input" required />
                            <p class="mt-2.5 text-sm text-fg-success-strong"><span class="font-medium">Well done!</span> Some success message.</p>
                        </div>
                        <div class="mb-6">
                            <label for="danger" class="block mb-2.5 text-sm font-medium text-fg-danger-strong">Your name</label>
                            <input type="text" id="danger" class="bg-danger-soft border border-danger-subtle text-fg-danger-strong text-sm rounded-base focus:ring-danger focus:border-danger block w-full px-3 py-2.5 shadow-xs placeholder:text-fg-danger-strong" placeholder="Error input" required />
                            <p class="mt-2.5 text-sm text-fg-danger-strong"><span class="font-medium">Oh, snapp!</span> Some error message.</p>
                        </div>
                        <label for="remember" class="flex items-center mb-5">
                            <input id="remember" type="checkbox" value="" class="w-4 h-4 border border-default-medium rounded-xs bg-neutral-secondary-medium focus:ring-2 focus:ring-brand-soft" required />
                            <p class="ms-2 text-sm font-medium text-heading select-none">I agree with the <a href="#" class="text-fg-brand hover:underline">terms and conditions</a>.</p>
                        </label>
                        <button type="submit" class="text-white bg-brand box-border border border-transparent hover:bg-brand-strong focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none">Submit</button>
                    </form>
                </div>
            </div>
        </Container>
    )
}

export default Login





// import React, { useState } from 'react';
// import Container from "../components/Layout/Container";
// import login_img from "../assets/login/login_img.png";

// function Login() {
//     // 1. Core Form States
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const [agree, setAgree] = useState(false);

//     // 2. Track Interaction (Prevents showing error messages on an empty, untouched form)
//     const [emailTouched, setEmailTouched] = useState(false);
//     const [passwordTouched, setPasswordTouched] = useState(false);
//     const [submitAttempted, setSubmitAttempted] = useState(false);
//     const [formSuccess, setFormSuccess] = useState(false);

//     // 3. Real-Time Validation Rules
//     const isEmailValid = email.includes('@') && email.includes('.');
//     const isPasswordValid = password.length >= 6;
//     const isFormValid = isEmailValid && isPasswordValid && agree;

//     // Determine Status states for UI classes ('idle' | 'success' | 'error')
//     const getEmailStatus = () => {
//         if (!emailTouched) return 'idle';
//         return isEmailValid ? 'success' : 'error';
//     };

//     const getPasswordStatus = () => {
//         if (!passwordTouched) return 'idle';
//         return isPasswordValid ? 'success' : 'error';
//     };

//     // 4. Input Handlers that run validation inline
//     const handleEmailChange = (e) => {
//         setEmail(e.target.value);
//         setEmailTouched(true); // User started typing, enable real-time feedback
//     };

//     const handlePasswordChange = (e) => {
//         setPassword(e.target.value);
//         setPasswordTouched(true); // User started typing, enable real-time feedback
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         setSubmitAttempted(true);
        
//         // Force evaluation fields to look active if user hits submit early
//         setEmailTouched(true);
//         setPasswordTouched(true);

//         if (isFormValid) {
//             setFormSuccess(true);
//             console.log("Form successfully logged in:", { email, password, agree });
//         } else {
//             setFormSuccess(false);
//         }
//     };

//     // Dynamic Class Utilities
//     const getInputClass = (status) => {
//         if (status === 'error') {
//             return 'bg-danger-soft border-danger-subtle text-fg-danger-strong focus:ring-danger focus:border-danger placeholder:text-fg-danger-strong';
//         }
//         if (status === 'success') {
//             return 'bg-success-soft border-success-subtle text-fg-success-strong focus:ring-success focus:border-success placeholder:text-fg-success-strong';
//         }
//         return 'bg-neutral-secondary-medium border-default-medium text-heading focus:ring-brand focus:border-brand placeholder:text-body';
//     };

//     const getLabelClass = (status) => {
//         if (status === 'error') return 'text-fg-danger-strong';
//         if (status === 'success') return 'text-fg-success-strong';
//         return 'text-heading';
//     };

//     return (
//         <Container>
//             <div className="loginWrapper flex w-full h-screen">
//                 {/* Left Side Section */}
//                 <div className="loginLeft w-1/2 flex flex-col justify-center items-center">
//                     <img src={login_img} alt="login_img" className='w-full' />
//                 </div>

//                 {/* Right Side Section */}
//                 <div className="loginRight w-1/2 flex flex-col justify-center pl-12">
//                     <p className='font-primary font-bold text-[45px] capitalize mb-2 max-w-[550px]'>
//                         share hope <span className='text-[#D12B05]'>&</span> save life
//                     </p>
//                     <p className='font-secondary max-w-[550px] text-[16px] mb-6 text-gray-600'>
//                         Step forward today to support our growing network of donors. A little warmth from your heart can light up someone's entire world.
//                     </p>

//                     <form className="max-w-sm" onSubmit={handleSubmit} noValidate>
                        
//                         {/* Email Input Field */}
//                         <div className="mb-5">
//                             <label htmlFor="email" className={`block mb-2.5 text-sm font-medium ${getLabelClass(getEmailStatus())}`}>
//                                 Your email
//                             </label>
//                             <input 
//                                 type="email" 
//                                 id="email" 
//                                 value={email}
//                                 onChange={handleEmailChange}
//                                 className={`text-sm rounded-base block w-full px-3 py-2.5 shadow-xs border ${getInputClass(getEmailStatus())}`}
//                                 placeholder="name@flowbite.com" 
//                                 required 
//                             />
//                             {getEmailStatus() === 'error' && (
//                                 <p className="mt-2.5 text-sm text-fg-danger-strong"><span className="font-medium">Oh, snapp!</span> Please enter a valid email.</p>
//                             )}
//                             {getEmailStatus() === 'success' && (
//                                 <p className="mt-2.5 text-sm text-fg-success-strong"><span className="font-medium">Well done!</span> Email address corrected.</p>
//                             )}
//                         </div>

//                         {/* Password Input Field */}
//                         <div className="mb-5">
//                             <label htmlFor="password" className={`block mb-2.5 text-sm font-medium ${getLabelClass(getPasswordStatus())}`}>
//                                 Your password
//                             </label>
//                             <input 
//                                 type="password" 
//                                 id="password" 
//                                 value={password}
//                                 onChange={handlePasswordChange}
//                                 className={`text-sm rounded-base block w-full px-3 py-2.5 shadow-xs border ${getInputClass(getPasswordStatus())}`}
//                                 placeholder="••••••••" 
//                                 required 
//                             />
//                             {getPasswordStatus() === 'error' && (
//                                 <p className="mt-2.5 text-sm text-fg-danger-strong"><span className="font-medium">Oh, snapp!</span> Password must be at least 6 characters.</p>
//                             )}
//                             {getPasswordStatus() === 'success' && (
//                                 <p className="mt-2.5 text-sm text-fg-success-strong"><span className="font-medium">Well done!</span> Strong password secure entry.</p>
//                             )}
//                         </div>

//                         {/* Terms and Conditions Checkbox */}
//                         <div className="mb-5">
//                             <label htmlFor="remember" className="flex items-center cursor-pointer">
//                                 <input 
//                                     id="remember" 
//                                     type="checkbox" 
//                                     checked={agree}
//                                     onChange={(e) => setAgree(e.target.checked)}
//                                     className="w-4 h-4 border border-default-medium rounded-xs bg-neutral-secondary-medium focus:ring-2 focus:ring-brand-soft" 
//                                 />
//                                 <p className="ms-2 text-sm font-medium text-heading select-none">
//                                     I agree with the <a href="#" className="text-fg-brand hover:underline">terms and conditions</a>.
//                                 </p>
//                             </label>
//                             {/* Shows an error banner only if they try to hit submit without checking the box */}
//                             {submitAttempted && !agree && (
//                                 <p className="mt-2 text-xs text-fg-danger-strong font-medium">
//                                     * You must accept the terms and conditions to proceed.
//                                 </p>
//                             )}
//                         </div>

//                         {/* Overall Form Submission Banner Notice */}
//                         {formSuccess && (
//                             <div className="mb-5 p-3 rounded-base bg-success-soft border border-success-subtle text-fg-success-strong text-sm">
//                                 <span className="font-medium">Success!</span> Form authenticated and terms accepted.
//                             </div>
//                         )}

//                         {/* Submit Button */}
//                         <button 
//                             type="submit" 
//                             className="text-white bg-brand box-border border border-transparent hover:bg-brand-strong focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none w-full sm:w-auto"
//                         >
//                             Submit
//                         </button>
//                     </form>
//                 </div>
//             </div>
//         </Container>
//     );
// }

// export default Login;