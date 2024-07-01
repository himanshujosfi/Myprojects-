// import React, { useState } from 'react'
// import { useNavigate } from 'react-router-dom'
// import { auth } from '../Firebase'
// import { signInWithEmailAndPassword } from 'firebase/auth'
// import SignInWithEmail from './SignInWithEmail'

// const Login = () => {
//     const [formData, setFormData] = useState({
//         email: "",
//         password: ""
//     }
//     )
//     const navigate = useNavigate()
//     const handleLogin = async (e) => {
//         e.preventDefault()
//         const { email, password } = formData
//         try {
//             await signInWithEmailAndPassword(auth, email, password)
//             console.log('sucesss')
//             navigate('/dashboard')
//             // toast.success('Login Sucessfully !'), {
//             //     position: 'top-left'
//             // }
//         } catch (error) {
//             console.log(error.message)
//             // toast.success(error.message)
//         }
//     }
//     return (
//         <div className='text-center mb-8 mt-8 w-8 bg-primary h-30 p-2 m-auto  '>
//             <h3>Welcome Into</h3>
//             {/* <div className='ml-18px'>
//                 <button className='text-end'>Sign In </button><p>Create new account ?</p>
//             </div> */}
//             <div className='m-auto'>
//                 <label htmlFor="">Email <span>*</span></label>
//                 <input type="text" placeholder='Enter the Email' value={formData.email}
//                     onChange={(e) => setFormData(pre => ({ ...pre, email: e.target.value }))}
//                 />

//                 <label htmlFor="">Password <span></span></label>
//                 <input type="text" placeholder='Enter Password' value={formData.password}
//                     onChange={(e) => setFormData(pre => ({ ...pre, password: e.target.value }))}
//                 />

//             </div>
//             <button onClick={handleLogin}>Login</button>
//             <button className='' onClick={() => navigate("/signin")}>Sign In </button>
//             <div>
//                 <SignInWithEmail />
//             </div>
//         </div>
//     )
// }

// export default Login