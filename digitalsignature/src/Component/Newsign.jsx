import React, { useRef, useState } from 'react'
import { Button } from 'primereact/button';
import SignatureCanvas from 'react-signature-canvas'


const Newsign = () => {
    const signRef = useRef(null)
    const [sign, setSign] = useState(null)

    const validate = () => { }

    const clearHandle = () => {
        signRef.current.clear()
    }
    const addHandle = () => {
        setSign(signRef.current.toDataURL())
        console.log(sign)

    }
    const downloadHandle = () => {
        if (sign) {
            const link = document.createElement('a')
            link.href = setSign
            link.download = "signature.jpg"
            link.click()
        }
        else (
            alert('please sign ')
        )
    }
    const handleDelete = () => {
        signRef.current.clear()
        setSign(null)
    }

    return (
        <>
            <div className=' '>
                <div className='bg-primary-900 w-8 m-auto p-2 mt-8 border-round '>
                    <h2 className='text-center text-white'>Create Digital Signature</h2>
                    <div className='text-center mb-2 '>
                        <SignatureCanvas penColor='black'
                            ref={signRef}
                            backgroundColor='white'
                            canvasProps={{
                                className: 'sigCanvas border-round '
                            }} />,
                    </div>
                    {
                        sign && (

                            <>    <h4 className='text-white text-center'>Signed By User</h4>
                                <div className='flex justify-content-center flex-wrap saved-signature-container gap-3 text-center '>
                                    <img src={sign} alt="Digital Sign" className='saved-signature' />
                                    <div>
                                        <Button className='bg-red-400 ' icon="pi pi-times" onClick={handleDelete} />
                                    </div>
                                </div>

                            </>

                        )
                    }
                    <div className="card flex justify-content-center gap-7 mt-7 mb-3">
                        <Button label="Clear" className='' onClick={clearHandle} />
                        <Button label="Add" className='' onClick={addHandle} />
                        <Button label="Download" className='' onClick={downloadHandle} />
                    </div>
                </div>
            </div>
        </>

    )
}

export default Newsign