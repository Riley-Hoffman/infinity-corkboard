function PostImage(prop) {

    let imagesOnly = prop.imageArray.filter(obj => {
        return obj.media_type === 'image'
    })


    const handleClick = (e) => {

        /*randomized image swap */
        // e.target.src = (imagesOnly[Math.floor(Math.random() * imagesOnly.length)].url)
        // e.target.key = (imagesOnly[Math.floor(Math.random() * imagesOnly.length)].id)
        // e.target.alt = (imagesOnly[Math.floor(Math.random() * imagesOnly.length)].title)
        // AVOID RECURRING IMAGES 
        const targetTitle = e.target.title

        /* take images with same index */
        e.target.src = imagesOnly[e.target.id].url
        e.target.key = imagesOnly[e.target.id].id
        e.target.alt = imagesOnly[e.target.id].title
        e.target.title = imagesOnly[e.target.id].title

        // Remove object with matching index
        imagesOnly.splice(e.target.id, 1);
    }  

    return (
        imagesOnly.slice(0, 16).map((image, index) => {
            // AVOID RECURRING IMAGES 
            // take each image out of the array as it comes in

            // imagesOnly.splice(0, 1)
            // Variables for object with with same index
            // const sameDate = (i) => i.date === image.date;
            // Remove matching object
            // const indexToRemove = image.id
            // imagesOnly.splice(0, 1);
            
            const remove = imagesOnly.splice(0, 1)

            return (
                <div key={`imageContainer${index}`} className="imageContainer" >
                    {/* for and ID attributes must be variables */}
                    <label key={`label${index}`} htmlFor={index}>
                        <input key={`input${index}`} className="checkbox" type="checkbox" id={`checkbox${index}`} />
                        <img key={`image${image.date}`} className="galleryImage" src={image.url} alt={image.title} title={image.title} id={index} onClick={handleClick} />
                    </label>
                </div>
            )
        })


    )

}

export default PostImage