// import React, { useState } from 'react'
// import Container from '../components/Layout/Container'
// import { Link } from 'react-router-dom';
// import { MdArrowBackIosNew } from "react-icons/md";


// function Registration() {
//     const [firstName , setFirstName]= useState('');
//     const [lastName , setLastName] = useState('');



//     return (
//         <>
//             <Container>
//                 <div id="registrationWrapper" className='flex flex-col  justify-center items-center pt-10'>
//                     <Link to="/login" className='w-1/2'>
//                         <MdArrowBackIosNew className='size-6 text-gray bg-gray-100 hover:bg-gray-200 rounded-full h-8 w-8 p-1.5' />
//                     </Link>
//                     <p className='text-[36px] font-semibold font-primary w-1/2 mt-4'>Join <span className='text-primary'>QuickBlood</span> as a Donor</p>
//                     <p className='font-secondary text-[15px] w-1/2 mb-3'>Become a verified donor or find blood matches instantly during emergencies.
//                         Your small step can bring hope to someone's family</p>
//                 </div>
//             </Container>
//         </>
//     )
// }

// export default Registration


import React, { useState } from 'react';
import Container from '../components/Layout/Container';
import { Link } from 'react-router-dom';
import { MdArrowBackIosNew, MdOutlineVisibility, MdOutlineVisibilityOff } from "react-icons/md";

function Registration() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        dob: { day: '', month: '', year: '' },
        gender: '',
        bloodGroup: '',
        email: '',
        password: ''
    });

    const [errors, setErrors] = useState({});
    const [showPassword, setShowPassword] = useState(false);
    const [submitAttempted, setSubmitAttempted] = useState(false);
    const [agree, setAgree] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
        setErrors(prev => ({ ...prev, [name]: '' }));
    };

    const handleDobChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            dob: { ...prev.dob, [name]: value }
        }));
        setErrors(prev => ({ ...prev, dob: '' }));
    };

    const handleCheckboxChange = (e) => {
        setAgree(e.target.checked);
        setErrors(prev => ({ ...prev, agree: '' }));
    };
    const validateForm = () => {
        let tempErrors = {};
        let isValid = true;

        if (!formData.firstName.trim()) { tempErrors.firstName = "First name is required"; isValid = false; }
        if (!formData.lastName.trim()) { tempErrors.lastName = "Last name is required"; isValid = false; }
        if (!formData.dob.day || !formData.dob.month || !formData.dob.year) { tempErrors.dob = "Full date of birth is required"; isValid = false; }
        if (!formData.gender) { tempErrors.gender = "Gender is required"; isValid = false; }
        if (!formData.bloodGroup) { tempErrors.bloodGroup = "Blood group is required"; isValid = false; }

        if (!formData.email.trim()) {
            tempErrors.email = "Email address is required";
            isValid = false;
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            tempErrors.email = "Invalid email format";
            isValid = false;
        }

        if (!formData.password) {
            tempErrors.password = "Password is required";
            isValid = false;
        } else if (formData.password.length < 6) {
            tempErrors.password = "Password must be at least 6 characters";
            isValid = false;
        }
        if (!agree) {
            tempErrors.agree = "Accept terms to proceed.";
            isValid = false;
        }
        setErrors(tempErrors);
        return isValid;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitAttempted(true);
        if (validateForm()) {
            const finalData = {
                ...formData,
                dateOfBirth: `${formData.dob.year}-${formData.dob.month}-${formData.dob.day}`
            };
            console.log("Registration Successful:", finalData);
        }
    };


    const days = Array.from({ length: 31 }, (_, i) => i + 1);
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const currentYear = new Date().getFullYear();
    const years = Array.from({ length: 80 }, (_, i) => currentYear - i);
    const bloodGroups = ["A+", "A-", "B+", "B-", "O+", "O-", "AB+", "AB-"];

    return (
        <Container>
            <div id="registrationWrapper" className='flex flex-col justify-center items-center pt-10 pb-20'>
                <Link to="/login" className='w-full max-w-lg mb-4'>
                    <MdArrowBackIosNew className='size-6 text-gray bg-gray-100 hover:bg-gray-200 rounded-full h-8 w-8 p-1.5' />
                </Link>

                <div className='w-full max-w-lg text-left mb-6'>
                    <p className='text-[36px] font-semibold font-primary mt-4 leading-tight'>
                        Join <span className='text-primary '>QuickBlood</span> as a Donor
                    </p>
                    <p className='font-secondary text-[15px] text-gray mt-2'>
                        Become a verified donor or find blood matches instantly during emergencies. Your small step can bring hope to someone's family.
                    </p>
                </div>

                <form onSubmit={handleSubmit} className='w-full max-w-lg flex flex-col gap-4'>

                    <div className='flex gap-4 w-full mb-3'>
                        <div className='w-1/2 flex flex-col'>
                            <label className='text-[16px] text-black font-secondary font-medium mb-1'>First Name</label>
                            <input
                                type="text" name="firstName" placeholder="First name"
                                value={formData.firstName} onChange={handleChange}
                                className={`placeholder:font-secondary font-normal font-secondary border p-3 rounded-xl outline-none w-full ${errors.firstName ? 'border-red-500' : 'border-gray-300'}`}
                            />
                            {errors.firstName && <span className='text-red-500 text-xs mt-1.5 font-secondary'>{errors.firstName}</span>}
                        </div>
                        <div className='w-1/2 flex flex-col'>
                            <label className='text-[16px] text-black font-secondary font-medium mb-1'>Last name</label>
                            <input
                                type="text" name="lastName" placeholder="Last name"
                                value={formData.lastName} onChange={handleChange}
                                className={`placeholder:font-secondary font-normal font-secondary border p-3 rounded-xl outline-none w-full ${errors.lastName ? 'border-red-500' : 'border-gray-300'}`}
                            />
                            {errors.lastName && <span className='text-red-500 text-xs mt-1.5 font-secondary'>{errors.lastName}</span>}
                        </div>
                    </div>

                    <div className='flex flex-col mb-3'>
                        <label className='text-[16px] text-black font-secondary font-medium mb-1'>Date of Birth</label>
                        <div className='flex gap-4 w-full font-secondary'>
                            <select name="day" value={formData.dob.day} onChange={handleDobChange} className={`border p-3 rounded-xl outline-none w-1/3 ${errors.dob ? 'border-red-500' : 'border-gray-300'}`}>
                                <option value="">Day</option>
                                {days.map(d => <option key={d} value={d}>{d}</option>)}
                            </select>
                            <select name="month" value={formData.dob.month} onChange={handleDobChange} className={`border p-3 rounded-xl outline-none w-1/3 ${errors.dob ? 'border-red-500' : 'border-gray-300'}`}>
                                <option value="">Month</option>
                                {months.map(m => <option key={m} value={m}>{m}</option>)}
                            </select>
                            <select name="year" value={formData.dob.year} onChange={handleDobChange} className={`border p-3 rounded-xl outline-none w-1/3 ${errors.dob ? 'border-red-500' : 'border-gray-300'}`}>
                                <option value="">Year</option>
                                {years.map(y => <option key={y} value={y}>{y}</option>)}
                            </select>
                        </div>
                        {errors.dob && <span className='text-red-500 text-xs mt-1.5 font-secondary'>{errors.dob}</span>}
                    </div>

                    <div className='flex gap-4 w-full mb-3'>
                        <div className='w-1/2 flex flex-col'>
                            <label className='text-[16px] text-black font-secondary font-medium mb-1'>Gender</label>
                            <select name="gender" value={formData.gender} onChange={handleChange} className={`font-secondary border p-3 rounded-xl outline-none w-full ${errors.gender ? 'border-red-500' : 'border-gray-300'}`}>
                                <option value="">Select Gender</option>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                                <option value="Other">Other</option>
                            </select>
                            {errors.gender && <span className='text-red-500 text-xs mt-1.5 font-secondary'>{errors.gender}</span>}
                        </div>
                        <div className='w-1/2 flex flex-col'>
                            <label className='text-[16px] text-black font-secondary font-medium mb-1'>Blood Group</label>
                            <select name="bloodGroup" value={formData.bloodGroup} onChange={handleChange} className={`font-secondary border p-3 rounded-xl outline-none w-full ${errors.bloodGroup ? 'border-red-500' : 'border-gray-300'}`}>
                                <option value="">Select Group</option>
                                {bloodGroups.map(bg => <option key={bg} value={bg}>{bg}</option>)}
                            </select>
                            {errors.bloodGroup && <span className='text-red-500 text-xs mt-1.5 font-secondary'>{errors.bloodGroup}</span>}
                        </div>
                    </div>

                    <div className='flex flex-col mb-3'>
                        <label className='text-[16px] text-black font-secondary font-medium mb-1'>Email address</label>
                        <input
                            type="email" name="email" placeholder="Email address"
                            value={formData.email} onChange={handleChange}
                            className={`font-secondary border p-3 rounded-xl outline-none w-full ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
                        />
                        <p className='font-secondary mt-1.5 text-gray'>You may receive email verification and notifications from us.</p>
                        {errors.email && <span className='text-red-500 text-xs mt-1.5 font-secondary'>{errors.email}</span>}
                    </div>

                    <div className='flex flex-col mb-3'>
                        <label className='text-[16px] text-black font-secondary font-medium mb-1'>Password</label>
                        <div className='relative flex items-center'>
                            <input
                                type={showPassword ? "text" : "password"}
                                name="password"
                                placeholder="Password"
                                value={formData.password}
                                onChange={handleChange}
                                className={`font-secondary border p-3 pr-12 rounded-xl outline-none w-full ${errors.password ? 'border-red-500' : 'border-gray-300'}`}
                            />
                            <div
                                className='absolute right-4 text-xl cursor-pointer text-gray-500 flex items-center justify-center'
                                onClick={() => setShowPassword(!showPassword)}
                            >
                                {showPassword ? <MdOutlineVisibilityOff /> : <MdOutlineVisibility />}
                            </div>
                        </div>
                        {errors.password && <span className='text-red-500 text-xs mt-1.5 font-secondary'>{errors.password}</span>}
                    </div>
                    <div className="flex flex-col mb-3">
                        <label htmlFor="remember" className="flex items-center cursor-pointer">
                            <input
                                id="remember"
                                type="checkbox"
                                checked={agree}
                                onChange={handleCheckboxChange}
                                className="w-4 h-4 border border-default-medium rounded-xs bg-neutral-secondary-medium focus:ring-2 focus:ring-brand-soft"
                            />
                            <p className="ms-2 text-sm font-medium text-heading select-none">
                                I agree with the <a href="#" className="text-fg-brand hover:underline">terms and conditions</a>.
                            </p>
                        </label>
                        {/* Pulling the error string directly from the standard errors object */}
                        {errors.agree && (
                            <p className="text-red-500 text-xs mt-1.5 font-secondary">
                                {errors.agree}
                            </p>
                        )}
                    </div>
                    <button
                        type="submit"
                        className='bg-brand font-secondary text-white font-semibold p-3.5 rounded-xl hover:bg-brand-strong transition-colors w-full text-lg shadow-md'
                    >
                        Sign Up
                    </button>

                </form>
            </div>
        </Container>
    );
}

export default Registration;