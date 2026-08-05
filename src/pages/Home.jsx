import { getAuth, onAuthStateChanged } from 'firebase/auth'
import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
// import { Navigate } from 'react-router-dom'

function home() {
    const auth = getAuth();
    const navigate = useNavigate()
    const data = useSelector(state => state.userInfo.value)
    const [verify, setVerify] = useState(false)
    const [loading, setLoading] = useState(true)
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

    return (
        <>
            {
                verify ?
                    <div>Lorem ipsum dolor sit amet.</div>
                    :
                    <p>verify ur gmail</p>
            }
        </>
    )
}

export default home