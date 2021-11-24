function PostImage(prop) {
    // filter out videos
    let imagesOnly = prop.imageArray.filter(obj => {
        return obj.media_type === 'image'
    })
    const errorModal = document.querySelector('.errorModal')
   
    // Update images when clicked
    const handleClick = (e) => {
        if (imagesOnly[0] === undefined) {
            console.log(imagesOnly, 'error')
            errorModal.style.display = `block`;
        } else {
                /* take an image from array */
                e.target.src = imagesOnly[0].url
                e.target.key = imagesOnly[0].id
                e.target.alt = imagesOnly[0].title
                e.target.title = imagesOnly[0].title

                // AVOID RECURRING IMAGES 
                // Remove object with matching index
                imagesOnly.splice(imagesOnly[0], 1);
                console.log(imagesOnly, 'imageOnly[0]')
        }
    } 
     
    return (
        // First 16 Images On Load
        imagesOnly.slice(0, 16).map((image, index) => {
            // AVOID RECURRING IMAGES 
            // Remove each image object that is posted
            imagesOnly.splice(0, 1)

            return (
                <div key={`imageContainer${index}`} className="imageContainer" >
                        <img key={`image${image.date}`} className="galleryImage" src={image.url} alt={image.title} title={image.title} id={index} onClick={handleClick} />
                </div>
            )
        })


    )

}

export default PostImage