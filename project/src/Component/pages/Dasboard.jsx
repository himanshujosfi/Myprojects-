import React, { useEffect, useState } from 'react'
import { auth, db } from '../Firebase'
import { getDoc, doc } from 'firebase/firestore'
import { useNavigate } from 'react-router-dom'

const Dasboard = () => {
    const navigate = useNavigate()
    const [formData, setFormData] = useState(null)
    const fetchData = async (user) => {
        if (user) {
            const docRef = doc(db, "Users", user.uid);
            const docSnap = await getDoc(docRef);
            if (docSnap.exists()) {
                setFormData(docSnap.data());
                // console.log(docSnap.data());
            } else {
                console.log('No such document!');
            }
        }
    };
    const handleLogOut = async () => {
        try {
            await auth.signOut()
            navigate('/login')
            console.log('logout sucessfull')
        } catch (error) {
            console.log(error.message)
        }
    }
    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((user) => {
            console.log(user);
            fetchData(user);
        });

        // Clean up subscription on unmount
        return () => unsubscribe();
    }, []);
    return (
        <div>
            {formData ? (
                <div className='flex gap-8 bg-primary '>
                    <div>Logo</div>
                    <div>
                        <img src={formData.photo} alt="" />
                        {formData.email}
                    </div>
                    <div>
                        <button onClick={handleLogOut}>LogOut</button>
                    </div>
                </div>

            ) : (
                <div>Loading...</div>
            )}
            <div>Test</div>
        </div>
    );
}

export default Dasboard