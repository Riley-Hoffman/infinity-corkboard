import { useState, useEffect } from 'react';
function BottomRow(prop) {
    // Render p and buttom elements
    const [bottomRowLoadState, setBottomRowLoadState] = useState('')

    useEffect(() => {
        // display return once images have loaded 
        const imageContainer = document.getElementsByClassName('imageContainer')
        if (imageContainer.length) {
            setBottomRowLoadState('loaded')
        }

    }, [prop])
    // Show saveModal when How To Save is clicked
    const saveModal = document.querySelector('.saveModal')

    const handleSaveClick = (e) => {
        saveModal.style.display = `block`;
    }
    
    // Close modal window button
    const handleCloseSaveClick = (e) => {
        saveModal.style.display = `none`;
    }

    return (
        <div className={`bottomRow ${bottomRowLoadState} wrapper`}>
            <p>Click or tap images change them.</p>
            <button onClick={handleSaveClick}>How To Save</button>
            {/* Instructions to save the image (print display is style to hide page elements) */}
            <div className="saveModal">
                <ol>
                    <p>To save your finished board:</p>
                    <li>Go to your browser's File menu</li> 
                    <li>Choose Print</li>
                    <li>Set Destination as Save To PDF</li> 
                    <li>Set Orientation to Landscape</li> 
                    <li>Click Save</li>
                </ol>
                <button className="modalButton" onClick={handleCloseSaveClick}>Ok</button>
            </div>
        </div>
    )
}

export default BottomRow