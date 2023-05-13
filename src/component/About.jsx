import React from "react";
import img1 from "../images/bg-1.jpg"
import img2 from "../images/about-01.jpg"
import Carousel from 'react-bootstrap/Carousel';

 function About ({text, imageSrc}) {
     return (
        <>
         


         <div>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <div style={{ flex: 1 }}>
          <h1>About Us</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis lorem quis sapien congue euismod. Aenean eget enim euismod, interdum enim a, mollis elit. Vestibulum eget lacus auctor, pellentesque est nec, eleifend leo. Donec ut mi velit. </p>
        </div>
        <div>
          <img src={img2} alt="about us" style={{ maxWidth: '100%', height: 'auto', maxWidth: '300px' }} />
        </div>
      </div>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <div>
          <img src="https://placehold.it/200x150" alt="our mission" style={{ maxWidth: '100%', height: 'auto', maxWidth: '150px' }} />
        </div>
        <div style={{ flex: 1 }}>
          <h2>Our Mission</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis lorem quis sapien congue euismod. Aenean eget enim euismod, interdum enim a, mollis elit. Vestibulum eget lacus auctor, pellentesque est nec, eleifend leo. Donec ut mi velit.</p>
        </div>
      </div>
    </div>
      </>
     )
 }
 export default About;