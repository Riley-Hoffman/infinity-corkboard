function ErrorModal(prop) {

    const errorModal = document.querySelector('.errorModal')
    // Close modal window button
    const handleCloseClick = (e) => {
        errorModal.style.visibility = `hidden`;
        window.location.reload();
    }
    
    return (
        <div className="errorModal">
            <p>Oops, there are no more images! Refresh to start again with new images.</p>
            <button className="modalButton" onClick={handleCloseClick}>Start Again</button>
        </div>
    )
}

export default ErrorModal