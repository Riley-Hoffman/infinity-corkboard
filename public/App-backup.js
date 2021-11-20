// import './App.css';

// import { useState, useEffect } from 'react';
// import firebase from './firebase'



// // Namespace object
// const spaceApp = {};


// // API information

// function App() {
//     const [image, setImages] = useState([])

//     spaceApp.apiKey = `bBLy3UXdINwKz9wF5H7c3bENIessM51W3V2tpXR4`;

//     spaceApp.apiUrl = `https://api.nasa.gov/planetary/apod`;


//     // Create P element for instructions
//     spaceApp.instructions = document.createElement('p')
//     // Create insturctions text
//     spaceApp.instructionsHtml = "Pin your favourite images. Refresh what's left"
//     // Add instruction to p
//     spaceApp.instructions.innerText = spaceApp.instructionsHtml

//     useEffect(() => {
//         // make a reference to our database
//         spaceApp.dbRef = firebase.database().ref();

//         // add the event listener to watch for changes to our database
//         spaceApp.dbRef.on('value', (response) => {

//             // variable to store new state
//             const newState = [];
//             // .val() gets you straigth to the data
//             const data = response.val();

//             // iterate through the data object
//             for (let property in data) {
//                 // push each book name into the new array
//                 newState.push(data[property]);
//             }

//             // 
//             setImages(newState);

//         })

//     }, [])



//     // Request information from the API
//     spaceApp.getImages = () => {
//         const url = new URL(spaceApp.apiUrl);
//         url.search = new URLSearchParams({
//             api_key: spaceApp.apiKey,
//             count: 8
//         })

//         fetch(url)
//             .then((response) => {

//                 return response.json();
//             })
//             .then((jsonResponse) => {
//                 console.log(jsonResponse)


//                 jsonResponse.forEach(img => {
//                     postImage(img)
//                 })
//             })
//     }

//     const handleSelections = (event) => {
//         // add the event listener to watch for changes to our database
//         // .val() got straight to your data
//         console.log(event)

//     }

//     function postImage(image) {
//         // Query for section
//         spaceApp.section = document.querySelector('section')
//         // Query for gallery div
//         spaceApp.gallery = document.querySelector('section > div')
//         // Append instructions
//         spaceApp.section.appendChild(spaceApp.instructions)
//         // Create div to hold image
//         spaceApp.imageBox = document.createElement('div')
//         // Add class to container
//         spaceApp.imageBox.classList.add('imageContainer')
//         // Create image element
//         spaceApp.imageBoxContent = `<img class="galleryImage" src="${image.url}" alt="${image.title}" onClick={handleSelections} />`
//         // Add img to imageBox
//         spaceApp.imageBox.innerHTML = spaceApp.imageBoxContent
//         // Append the all images to the gallery
//         spaceApp.gallery.appendChild(spaceApp.imageBox)
//     }

//     // useEffect(() => {






//     // refactor this
//     spaceApp.init = () => {


//         spaceApp.getImages()
//     }

//     // Kickoff the app 🏈
//     spaceApp.init();
//     return (
//         <div class="App">
//             <section class="corkboard">
//                 <div class="wrapper">
//                 </div>
//             </section>
//             <footer>

//             </footer>
//         </div>
//     );
// }

// export default App;


// // to do
// // get images into database
// //  .map data output in return


// // App Name: Infinity Corkboard

// /*  PSEUDO CODE

// - Get 16 images from Nasa's Astronomy Pictures Of The Day API

// - Display images on the page in a grid

// - Allow the user to select as many of the images as they wish

// - When the user refreshes the page (or clicks a button) the selected images will remain while unselected images are updated

// - A save button allows the user to save collage */

// // from code along
// // useEffect(() => {
// //   // make a reference to our database
// //   const dbRef = firebase.database().ref();

// //   // add the event listener to watch for changes to our database
// //   dbRef.on('value', (response) => {

// //     // variable to store new state
// //     const newState = [];
// //     // .val() gets you straigth to the data
// //     const data = response.val();

// //     // iterate through the data object
// //     for (let property in data) {
// //       // push each book name into the new array
// //       newState.push(data[property]);
// //     }

// //     // 
// //     setBooks(newState);

// //   })

// // }, [])