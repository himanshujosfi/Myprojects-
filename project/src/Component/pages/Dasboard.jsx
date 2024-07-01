import React, { useEffect, useState } from 'react'
import { auth, db } from '../Firebase'
import { getDoc, doc } from 'firebase/firestore'
import { useNavigate } from 'react-router-dom'

const Dashboard = () => {
    const [data, setData] = useState(null)
    const navigate = useNavigate()
    const fetchData = async () => {
        auth.onAuthStateChanged(async (user) => {
            console.log(user)
            const getData = doc(db, "NewUsers", user.uid)
            const docSnap = await getDoc(getData)
            if (docSnap.exists()) {
                setData(docSnap?.data())
                console.log(docSnap?.data())
            }
        })
    }
    useEffect(() => {
        fetchData()
    }, [])
    const handleLogout = async () => {
        try {
            await auth.signOut()
            navigate("/login")
            console.log("logout sucessfull")
        } catch (error) {
            console.log(error.message)
        }
    }

    return (
        <div>
            {
                data && (
                    <div>{data.email}</div>
                )
            }
            <button onClick={handleLogout}>LogOut</button>
        </div>

    )
}

export default Dashboard