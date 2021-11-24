function Modal(prop) {

    const modal = document.querySelector('.modal')
    // Close modal window button
    const handleCloseClick = (e) => {
        modal.style.visibility = `hidden`;
        window.location.reload();
    }
return (
    <div className="modal">
        <p>Oops, there are no more images! Refresh to start again with new images.</p>
        <button className="modalButton" onClick={handleCloseClick}>Start Again</button>
    </div>
)
}

export default Modal