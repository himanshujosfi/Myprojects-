import React, { useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'

const SignUp = () => {
    const navigate = useNavigate()
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        conformPassword: ''
    })
    console.log(formData)
    const submitForm = () => { }
    return (
        <div className='text-center mb-8 mt-8 w-8 bg-primary h-30 p-2 m-a'>
            <h2>SignUp </h2>
            <div>
                <label htmlFor="">Name <span>*</span></label>
                <input type="text" placeholder='Enter Name' value={formData?.name}
                    onChange={(e) => setFormData(pre => ({ ...pre, name: e.target.value }))}
                />

                <div>
                    <label htmlFor="">Email <span>*</span></label>
                    <input type="text" placeholder='Enter Email' value={formData?.email}
                        onChange={(e) => setFormData(pre => ({ ...pre, email: e.target.value }))} />
                </div>


                <div>
                    <label htmlFor="">Password <span>*</span></label>
                    <input type="text" placeholder='Enter password' value={formData?.password}
                        onChange={(e) => setFormData(pre => ({ ...pre, password: e.target.value }))} />
                </div>

                <div>
                    <label htmlFor="">Conform Password <span>*</span></label>
                    <input type="text" placeholder='Conform password' value={formData?.conformPassword}
                        onChange={(e) => setFormData(pre => ({ ...pre, conformPassword: e.target.value }))} />
                </div>
            </div>
            <div className='mt-5'>
                <button className='mr-5' onClick={submitForm}>SignIn</button>
                <button onClick={() => navigate(-1)}>Login</button>
            </div>
        </div>
    )
}

export default SignUp