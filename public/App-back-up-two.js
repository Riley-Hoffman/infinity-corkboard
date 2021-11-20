// import './App.css';

// import { useState, useEffect } from 'react';
// import firebase from './firebase'

// function App() {
//   const [imageDb, setImages] = useState([])
  
//   const apiKey = `bBLy3UXdINwKz9wF5H7c3bENIessM51W3V2tpXR4`;
  
//   const apiUrl = `https://api.nasa.gov/planetary/apod`;
  
  


//   useEffect(() => {
    
//     function callApi () {
//     // API information
//     const url = new URL(apiUrl);
//     url.search = new URLSearchParams({
//       api_key: apiKey,
//       count: 16 /* variable for 16 minus whatever is in the database, for example */
//     })
  
//     fetch(url)
//       .then((response) => {
  
//         return response.json();
//       })
//       .then((jsonResponse) => {
//         console.log(jsonResponse) 
//         updateData(jsonResponse)
//         jsonResponse.forEach(img => {
//           postImage(img)
//           // store entire API return in state
//         })
  
//       })

//     }
      
//   function postImage(image) {   
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
//   }
  
//   function addInstructions () {
//     // Create P element for instructions
//     const instructions = document.createElement('p')
//     // Create insturctions text
//     const instructionsHtml = "Pin your favourite images. Refresh what's left"
//     // Add instruction to p
//     instructions.innerText = instructionsHtml
//     // Query for section
//     const section = document.querySelector('section')
//     // Append instructions
//     section.appendChild(instructions)
//   }

//   function updateData (newImages) {
  
//     // variable to store new state
//     const newState = [];
//     // make a reference to our database
//     const dbRef = firebase.database().ref();
//     dbRef.push(newImages)

//     // Clicked img can be added to STATE then on reload the clicked images can be sent to the database
//     // Allowing the selected images to be positioned randomly with the new ones will be easiest
//     // controlling the position of selected images = FLEX GOAL







//     // add the event listener to watch for changes to our database
//     // dbRef.on('value', (response) => {

    
  
//     //   const data = response;
//     //   // iterate through the data object
//     //   data.forEach(newImg => {
        
    
//     //     newState.push(newImg);
//     //   })
//     // })
    
  
//     // 
//     // setImages(newState);
//     console.log(dbRef, "dbRef")
//   }
    
    

  
//   }, [])


      

//       // 
      
      
  
   
 

  

 
//   return (
//     <div class="App">
//         <section class="corkboard">
//           <div class="wrapper">
//             {/* add images with .map next */}
   
//           </div>
//         </section>
//         <footer>
          
//         </footer>
//     </div>
//   );
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

// // Note afters speaking to Darshana
// // create components 
// // gallery components
// // article component

// // hidden inputs for images 
// // capture user selections -> only push those ?