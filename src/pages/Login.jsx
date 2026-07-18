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