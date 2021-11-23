import './App.css';

import { useState, useEffect } from 'react';
import PostImage from './PostImage';
import Canvas from './Canvas';
import HeadingOne from './HeadingOne'
import Footer from './Footer';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons'

// library.add(fabGithub);

// import Refresh from './Refresh';

function App() {
  // const [imageBankFilterBySelect, setimageBankFilterBySelect] = useState([])
  const [imageBank, setImageBank] = useState([])

  const apiKey = `bBLy3UXdINwKz9wF5H7c3bENIessM51W3V2tpXR4`;

  const apiUrl = `https://api.nasa.gov/planetary/apod`;
  
// store a bank with extra imgs
// 
// for selection use State - where it's selected or to reload
// do on click on the image the do a function where you swap the url/attributes
// or 2 arrays selected, unselected 

  useEffect(() => {
  
    console.log(imageBank.length, "imageBank length")
    // API information  
    const url = new URL(apiUrl);
    url.search = new URLSearchParams({
      api_key: apiKey,
      count: 100,/* take extra images for bank */
    })

    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((jsonResponse) => {
        // Send All 100 images to imageBank
        
        setImageBank(/*[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20].map(sixteen => */jsonResponse/*[sixteen])*/)
  
      })
  }, [])
  

  
    return (
      <div className="App">
        <main>
          <section className="corkboard">
            {/* <form action="_blank"> */}
              {/* look into <canvas> */}
              <div className="loader">
              
                {
                  <PostImage
                    imageArray={imageBank}
                  />

                }
              </div>
              {
                <HeadingOne />
              }
            {/* </form> */}
              {
                // Does it need this pass?
                <Canvas imageArray={imageBank} />
              }
            <canvas className="canvasHidden" id="canvas"></canvas>
          </section>
        </main>
        <Footer />
      </div>
    );
}

export default App;


// to do
// get images into database
//  .map data output in return


// App Name: Infinity Corkboard

/*  PSEUDO CODE

- Get 16 images from Nasa's Astronomy Pictures Of The Day API

- Display images on the page in a grid

- Allow the user to select as many of the images as they wish

- When the user refreshes the page (or clicks a button) the selected images will remain while unselected images are updated

- A save button allows the user to save collage */

// Note afters speaking to Darshana
// create components 
// gallery components
// article component

// hidden inputs for images 
// capture user selections -> only push those ?



// function updateData (newImages) {

  //   // variable to store new state
  //   const newState = [];
  //   // make a reference to our database
  //   const dbRef = firebase.database().ref();
  //   dbRef.push(newImages)

  //   // Clicked img can be added to STATE then on reload the clicked images can be sent to the database
  //   // Allowing the selected images to be positioned randomly with the new ones will be easiest
  //   // controlling the position of selected images = FLEX GOAL







// function refresh() {
//   // Save form in a variable
//   const form = document.querySelector('form')
//   form.addEventListener(`submit`, function (e) {


//     // prevent page reload on form submissions
//     e.preventDefault();
//     // Save user's selections in a variable
//     const checkbox = document.querySelectorAll('.checkbox:checked');
//     // Save unselected images in a variable ---DOESN"T WORK
//     // const imagesToKeep = document.querySelectorAll('.checkbox:unchecked')
//     // Save user's selections in a variable
//     const checkedValue = checkbox.length

//     // Calculate new number of images to call
//     if (checkedValue === null || checkedValue === undefined || checkedValue === 0) {
//       selectionObject.numImagesToChange = 16
//       console.log(selectionObject.numImagesToChange, '1')
//     } else {
//       selectionObject.numImagesToChange = 16 - checkedValue
//       console.log(selectionObject.numImagesToChange, '2')
//     }

//     // New API Call   
//     const url = new URL(apiUrl);
//     url.search = new URLSearchParams({
//       api_key: apiKey,
//       count: selectionObject.numImagesToChange,
//     })

//     fetch(url)
//       .then((response) => {
//         return response.json();
//       })
//       .then((jsonResponse) => {
//         console.log(jsonResponse)
//         setImageResults(jsonResponse)
//       })
//     // refresh()



//   });
// }