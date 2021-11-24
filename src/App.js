import './App.css';

import { useState, useEffect } from 'react';
import PostImage from './PostImage';
import HeadingP from './HeadingP'
import Header from './Header'
import BottomRow from './BottomRow';
import Footer from './Footer';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons'

// things to look into:

// screen capture API

// is there a way to fetch first 16 and then bring in the rest after first images appear

// promises / chaining.then

function App() {
  // imageBank for first grid display
  const [imageBank, setImageBank] = useState([])
  

  const apiKey = `bBLy3UXdINwKz9wF5H7c3bENIessM51W3V2tpXR4`;
  const apiUrl = `https://api.nasa.gov/planetary/apod`;
  
  
// store a bank with extra imgs
// 
// for selection use State - where it's selected or to reload
// do on click on the image the do a function where you swap the url/attributes
// or 2 arrays selected, unselected 

  useEffect(() => {
  
    // API information  
    const url = new URL(apiUrl);
    url.search = new URLSearchParams({
      api_key: apiKey,
      count: 25,
    })

    fetch(url)
      .then((response) => {
        
        return response.json();
      })
      .then((jsonResponse) => {
        console.log(fetch(jsonResponse), 'jsonResponse 1')
        // Send All 25 images to imageBank for initial load
        setImageBank(jsonResponse)
  
      })
      .then(() => {
        const url = new URL(apiUrl);
        url.search = new URLSearchParams({
          api_key: apiKey,
          count: 100
        })
        fetch(url)
        .then((response) => {
          return response.json();
        })
        .then((jsonResponse) => {
          console.log(fetch(jsonResponse), 'jsonResponse 2')
           // Send 100 images to imageBank to expand bank
          setImageBank(jsonResponse)
        })
      })
  }, [])
  
  console.log(imageBank)
  
    return (
      <div className="App">
        <main>
          <section className="corkboard">
            <Header />
              <div className="loader">  
                {
                  <PostImage
                    imageArray={imageBank}
                  />

                }
              </div>
              {
                <HeadingP />
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