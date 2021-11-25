import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons'
function Footer(prop) {
    const [footerLoadState, setFooterLoadState] = useState('')

    useEffect(() => {
        // display return once images have loaded 
        const imageContainer = document.getElementsByClassName('imageContainer')
        if (imageContainer.length) {
            setFooterLoadState('loaded')
        }
    }, [prop])

    return (
        <footer className={`wrapper ${footerLoadState}`}>
            <a href="https://junocollege.com/">Created at Juno College</a>
            <div className="flexBox">
                <a href="https://github.com/Riley-Hoffman?tab=repositories">
                <p>Riley Hoffman | Developer</p>
                <FontAwesomeIcon icon={faGithub} />
                </a>
            </div>
        </footer>
    )
}

export default Footer