import React from 'react';
import styled from 'styled-components';
import Navbar from '../../layout/Navbar';

const GalleryContainer = styled.section`
  padding: 4rem 0;
  background: #e8eced;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const ImgContainer = styled.figure`
  position: relative;
  overflow: hidden;
  cursor: pointer;

  &:hover .img-content-hover {
    display: block;
  }
`;

const Img = styled.img`
  width: 100%;
  height: 500px; 
  object-fit: cover;
  border-radius: 10px ;
  box-shadow: 20px 20px 20px rgba(0, 0, 0, 0.5);
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.05);
  }
`;

const ImgContentHover = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  display: none;
  padding: 1rem;
  background: white;
  z-index: 1;

  h2 {
    color: #2e2e2e;
    font-size: 1.5rem;
    font-weight: 700;
  }

  h3 {
    font-size: 1rem;
    color: #787878;
  }
`;

const images = [
  { src: 'public/assets/1.jpeg', title: 'powercard' },
  { src: 'public/assets/2.jpeg', title: 'powercard' },
  { src: 'public/assets/3.jpeg', title: 'powercard' },
  { src: 'public/assets/4.jpeg', title: 'powercard' },
  { src: 'public/assets/5.jpeg', title: 'powercard' },
  { src: 'public/assets/6.jpeg', title: 'powercard' },
  { src: 'public/assets/7.jpeg', title: 'powercard' },
];

const Gallery = () => {
  return (
    <>
<Navbar/>
    <GalleryContainer>
      <Grid>
        {images.map((image, index) => (
          <div key={index}>
            <ImgContainer>
              <Img src={image.src} alt={image.title} />
              <ImgContentHover>
                <h2>{image.title}</h2>
                {/* <h3>Showcase</h3> */}
              </ImgContentHover>
            </ImgContainer>
          </div>
        ))}
      </Grid>
    </GalleryContainer>
    </>
  );
};

export default Gallery;