// create your App component here
import React, {useEffect, useState} from 'react'

function App() {
  const [image, setImage] = useState(null);
  const [loadingStatus, setLoadingStatus] = useState(true);

  useEffect(() => {
    // Fetch a random dog image
    fetch('https://dog.ceo/api/breeds/image/random')
      .then((res) => res.json())
      .then((data) => {
        setImage(data.message);
        setLoadingStatus(false); 
      })
      .catch((error) => {
        console.error('Network Error!!!', error);
        setLoadingStatus(false); 
      });
  }, []); 
  return (
    <div>
       <h1>Random Dog Image</h1>
      {loadingStatus ? (
        <p>Loading...</p>
      ) : (
        <img src={image} alt="A Random Dog" />
      )}

    </div>
  )
}

export default App
