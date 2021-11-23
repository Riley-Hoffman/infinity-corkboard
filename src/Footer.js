import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons'
function Footer(prop) {
    const [footerLoadState, setFooterLoadState] = useState('')

    useEffect(() => {
        const imageContainer = document.getElementsByClassName('imageContainer')
        if (imageContainer.length) {
            setFooterLoadState('loaded')
        }

    })



    return (
        <footer className={footerLoadState}>
            <p>Created at Juno College</p>
            <div className="flexBox">
                <p>Riley Hoffman | Developer</p>
                <FontAwesomeIcon icon={faGithub} />
            </div>
        </footer>
    )

}

export default Footer