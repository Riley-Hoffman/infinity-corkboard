function PostImage(prop) {
    let imagesOnly = prop.imageArray.filter(obj => {
        return obj.media_type === 'image'
    })
    
    // Update images when clicked
    const handleClick = (e) => {

        /* take images with same index */
        e.target.src = imagesOnly[e.target.id].url
        e.target.key = imagesOnly[e.target.id].id
        e.target.alt = imagesOnly[e.target.id].title
        e.target.title = imagesOnly[e.target.id].title

        // AVOID RECURRING IMAGES 
        // Remove object with matching index
        imagesOnly.splice(e.target.id, 1);
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