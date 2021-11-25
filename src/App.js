import './App.css';

import { useState, useEffect } from 'react';
import PostImage from './PostImage';
import HeadingP from './HeadingP'
import Header from './Header'
import ErrorModal from './ErrorModal'
import BottomRow from './BottomRow';
import Footer from './Footer';

// things to look into:

// screen capture API

// is there a way to fetch first 16 and then bring in the rest after first images appear

// promises / chaining.then


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
      count: 40,
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