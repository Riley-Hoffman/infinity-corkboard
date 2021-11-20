function PostImage(prop) {
    return (
        prop.imageArray.map(image => {
            return (
        <div class="imageContainer">
            <img class="galleryImage" src={image.url} alt={image.title} />
        </div>
            )
        })
        
    )
}

export default PostImage

// function postImage(image) {
//     // Query for gallery div
//     const gallery = document.querySelector('section > div')

//     // Create div to hold image
//     const imageBox = document.createElement('div')
//     // Add class to container
//     imageBox.classList.add('imageContainer')
//     // Create image element
//     const imageBoxContent = `<img class="galleryImage" src="${image.url}" alt="${image.title}" />`
//     // Add img to imageBox
//     imageBox.innerHTML = imageBoxContent
//     // Append the all images to the gallery
//     gallery.appendChild(imageBox)
// }

    // art.map(artwork => {
    //     return (
    //         <PieceOfArt
    //             key={artwork.id}
    //             alt={artwork.title}
    //             title={artwork.longTitle}
    //             imagePath={artwork.webImage.url}
    //         />
    //     )
    // })