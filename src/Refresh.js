function Refresh(prop) {
    prop.addEventListener(`submit`, function (e) {


        // prevent page reload on form submissions
        e.preventDefault();
        // Save user's selections in a variable
       const checkedValue = document.querySelector('.messageCheckbox:checked').value;
       console.log(checkedValue)

    });
    // return (
    //     prop.imageArray.map(image => {
    //         return (
    //             <div class="imageContainer">
    //                 {/* for and ID attributes must be variables */}
    //                 <label htmlFor={image.date}>
    //                     <input class="checkbox" type="checkbox" id={image.date} />
    //                     <img class="galleryImage" src={image.url} alt={image.title} />
    //                 </label>
    //             </div>
    //         )
    //     })

    // )
}

export default Refresh