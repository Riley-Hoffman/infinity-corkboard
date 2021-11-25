// INFINITY CORKBOARD

/* 

Pulls images for NASA into a grid allowing the user to 
customize the grid by refreshing individual images on 
click and save the full grid to PDF. 

*/

import './App.css';

import { useState, useEffect } from 'react';
import PostImage from './PostImage';
import HeadingP from './HeadingP'
import Header from './Header'
import ErrorModal from './ErrorModal'
import BottomRow from './BottomRow';
import Footer from './Footer';

function App() {
  // imageBank for first grid display
  const [imageBank, setImageBank] = useState([])

  useEffect(() => {
  
    const apiKey = `bBLy3UXdINwKz9wF5H7c3bENIessM51W3V2tpXR4`;
    const apiUrl = `https://api.nasa.gov/planetary/apod`;
    
    // API information  
    const url = new URL(apiUrl);
    url.search = new URLSearchParams({
      api_key: apiKey,
      count: 100,
    })

    fetch(url)
      .then((response) => {
        
        return response.json();
      })
      .then((jsonResponse) => {
        setImageBank(jsonResponse)
      })
  }, [])
  
    return (
      <div className="App">
        <main>
          <section className="corkboard">
            <Header />
            <ErrorModal />
              <div className="loader">  
                  <PostImage
                  imageArray={imageBank}
                  />
              </div>
                <HeadingP />
              <BottomRow imageArray={imageBank}/>
          </section>
        </main>
        <Footer imageArray={imageBank}/>
      </div>
    );
}

export default App;