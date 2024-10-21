
import React, { useEffect, useState } from "react";
import './../styles/App.css';

const images = {
  image1 : 'https://www.mercedes-benz.com/en/vehicles/mercedes-eq/eqs-suv/_jcr_content/root/verticalgallery_copy/parsys/verticalgalleryitem/image/MQ6-0-image-20220419101504/01-mercedes-benz-the-new-eqs-suv-x296-2021-1080x1350.jpeg',
  image2 : 'https://www.mercedes-benz.com/en/vehicles/mercedes-eq/eqs-suv/_jcr_content/root/verticalgallery_copy/parsys/verticalgalleryitem_546277676/image/MQ6-0-image-20220819111550/02-mercedes-benz-the-new-eqs-suv-x296-2021-1680x1680.jpeg',
  image3 : 'https://www.mercedes-benz.com/en/vehicles/mercedes-eq/eqs-suv/_jcr_content/root/verticalgallery_copy/parsys/verticalgalleryitem_354875624/image/MQ6-0-image-20220419101505/03-mercedes-benz-the-new-eqs-suv-x296-2021-1680x1680.jpeg'
}

const App = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval((perv) => {
      (perv + 1) % images.length
    }, 5000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div style={styles.slideshow}>
        <img src={images[currentImage]} alt="Images Blog" />
    </div>
  )
}

const styles = {
  slideshow: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "500px", // Adjust the height to your preference
    width: "100%",
    overflow: "hidden",
  },
  image: {
    maxWidth: "100%",
    maxHeight: "100%",
    objectFit: "cover", // Makes sure the image covers the container nicely
  },
};



export default App;
