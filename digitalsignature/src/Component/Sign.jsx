import React, { useRef, useState } from 'react'
import SignatureCanvas from 'react-signature-canvas'
import { Button } from 'primereact/button';


const Sign = () => {
    const signRef = useRef(null)
    const [saveSign, SetSaveSign] = useState(null)
    const [downloadSign, setDownloadSign] = useState(null)

    const clearHandle = () => {
        signRef.current.clear()
    }
    const saveHandle = () => {
        const dataSign = signRef.current.toDataURL()
        SetSaveSign(dataSign)
        console.log(dataSign)
    }
    const downloadHandle = () => {
        if (saveSign) {
            const link = document.createElement('a')
            link.href = saveSign
            link.download = 'signature.jpg'
            link.click()
        } else {
            alert("No signature to download. Please save your signature first.")
        }
    }
    return (

        <div className="signature-container  surface-100 w-full h-full">
            <div><h2>Create Digital Signature</h2></div>
            <div>
                <SignatureCanvas
                    penColor='white'
                    className="signature-canvas"
                    backgroundColor='black'
                    ref={signRef}
                />
            </div>
            {saveSign && (
                <div className="saved-signature-container">
                    <h2>Saved Signature</h2>
                    <img src={saveSign} alt="Signature" className="saved-signature" />
                </div>
            )}

            <div className="card flex flex-wrap  gap-3 button-container">
                <Button label="Clear" className='bg-yellow-300' onClick={clearHandle} />
                <Button label="Save" className='bg-red-500' onClick={saveHandle} />
                <Button label="Download" className='bg-primary' onClick={downloadHandle} />
            </div>
        </div>

    )
}

export default Sign