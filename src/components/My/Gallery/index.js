import React from "react";
import Gallery from "react-photo-gallery";


const photos = [
  {
      src: "https://www.nastol.com.ua/download.php?img=201706/2560x1600/nastol.com.ua-231875.jpg",
      width:  1.5,
      height: 1.4
  },
  {
      src: 'https://www.nastol.com.ua/download.php?img=201706/2560x1600/nastol.com.ua-231875.jpg',
      width:  1.6,
      height: 1.4
  },
  {
      src: 'https://www.nastol.com.ua/download.php?img=201706/2560x1600/nastol.com.ua-231875.jpg',
      width:  1.5,
      height: 1.4
},
  {
      src: 'https://www.nastol.com.ua/download.php?img=201706/2560x1600/nastol.com.ua-231875.jpg',
      width:  1.5,
      height: 1.4
},
  {
      src: 'https://www.nastol.com.ua/download.php?img=201706/2560x1600/nastol.com.ua-231875.jpg',
      width:  1.5,
      height: 1.4
},
  {
      src: 'https://www.nastol.com.ua/download.php?img=201706/2560x1600/nastol.com.ua-231875.jpg',
      width:  1.5,
      height: 1.4
}
];
const GalleryHome = () => <Gallery photos={photos} />;
export default GalleryHome;
