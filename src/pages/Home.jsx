import React, { useState } from 'react'

function home() {
    const [verify, setVerify] = useState(false)

    return (
        <>
            {
                verify ?
                    <div>Lorem ipsum dolor sit amet.</div>
                    :
                    <p>verify ur main</p>
            }
        </>
    )
}

export default home