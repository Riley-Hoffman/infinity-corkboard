import './App.css';

import { useState, useEffect } from 'react';
import PostImage from './PostImage';
import BottomRow from './BottomRow';
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
  const apiUrl1 = `https://api.nasa.gov/planetary/apod?api_key=bBLy3UXdINwKz9wF5H7c3bENIessM51W3V2tpXR4&count=20`;
  const apiUrl2 = `https://api.nasa.gov/planetary/apod?api_key=bBLy3UXdINwKz9wF5H7c3bENIessM51W3V2tpXR4&count=100`;
  
  
// store a bank with extra imgs
// 
// for selection use State - where it's selected or to reload
// do on click on the image the do a function where you swap the url/attributes
// or 2 arrays selected, unselected 

  useEffect(() => {
  
    // API information  
    const url = new URL(apiUrl1);
    url.search = new URLSearchParams({
      api_key: apiKey,
      count: 100,
    })

    fetch(url)
      .then((response) => {
        
        return response.json();
      })
      .then((jsonResponse) => {
        console.log(fetch(jsonResponse), 'jsonResponse 1')
        // Send All 100 images to imageBank
        
        setImageBank(/*[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20].map(sixteen => */jsonResponse/*[sixteen])*/)
  
      })
      // CURRENTLY REPLACING ALL IMAGES WHEN THEY COME IN
      // .then(() => {
      //   const url = new URL(apiUrl2);
      //   // url.search = new URLSearchParams({
      //   //   api_key: apiKey,
      //   // })
      //   fetch(url)
      //   .then((response) => {
      //     return response.json();
      //   })
      //   .then((jsonResponse) => {
      //     console.log(fetch(jsonResponse), 'jsonResponse 2')
      //     setImageBank(jsonResponse)
      //   })
      // })
  }, [])
  
  console.log(imageBank)
  
    return (
      <div className="App">
        <main>
          <section className="corkboard">
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
              {
                <BottomRow />
              }
          </section>
        </main>
        <Footer />
      </div>
    );
}

export default App;