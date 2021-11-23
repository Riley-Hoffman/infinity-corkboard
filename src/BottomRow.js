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

    })
        


    return (
        <div className={`bottomRow ${bottomRowLoadState} wrapper`}>
            <p>Click or tap images change them.</p>
            <button>Save Gallery</button>
        </div>
    )

}

export default BottomRow