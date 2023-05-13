import Carousel from 'react-bootstrap/Carousel';
import img1 from '../images/slider1.jpg'
import img2 from '../images/slider2.jpg'
import img3 from '../images/slider3.jpg'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import img4 from '../images/product-01.jpg'
import img5 from '../images/product-02.jpg'
import img6 from '../images/product-03.jpg'
import img7 from '../images/product-04.jpg'
import img8 from '../images/product-05.jpg'
import img9 from '../images/product-07.jpg'
import img10 from '../images/product-08.jpg'
import img11 from '../images/product-10.jpg'
import img12 from '../images/product-11.jpg'
import img13 from '../images/product-16.jpg'

function Home () {
  return(
    <>
    <Carousel>
    <Carousel.Item>
      
      <img
        className="d-block w-100"
        src={img1}
              alt="First slide"
      />
      <Carousel.Caption>
     
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src={img2}
        alt="Second slide"
      />

      <Carousel.Caption>
        
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src={img3}       
         alt="Third slide"
      />

      <Carousel.Caption>
     
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>

<br/>
<br/>
<br/>

<div class="container">
    <div class="row">

    <div class="col-sm-3 card">
<Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={img1} />
      
    </Card>
    </div>
    <div class="col-sm-3 card">
<Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={img2} />
      
    </Card>
    </div>
    <div class="col-sm-3 card">
<Card style={{ width: '13rem' }}>
  <Card.Img variant="top" src={img3} />
    </Card>
    </div>
    </div>

</div>

<br/>
<br/>
<h2 style={{marginRight:"100px" }}>PRODUCT OVERVIEW</h2>
<br/>
<br/>

<div class="container">
    <div class="row">
    <div class="col-sm-3 card">
<Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={img4} />
      <Card.Body>
        <Card.Text>
Only Check Trouser
          
        </Card.Text>
        <span >
$25.50
</span>
      </Card.Body>
    </Card>
    </div>
    <div class="col-sm-3 card">
<Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={img5} />
      <Card.Body>
        <Card.Text>
Herscel Supply 
          
        </Card.Text>
        <span >
$35.50
</span>
      </Card.Body>
    </Card>
    </div>
    <div class="col-sm-3 card">
<Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={img6} />
      <Card.Body>
        <Card.Text>
Only Check Trousers
          
        </Card.Text>
        <span >
$25.50
</span>
      </Card.Body>
    </Card>
    </div>
    <div class="col-sm-3 card">
<Card style={{ width: '13rem' }}>
  <Card.Img variant="top" src={img7} style={{height:"355px" }} />
  <Card.Body>
        <Card.Text>
Only Check Trouser
          
        </Card.Text>
        <span >
$25.50
</span>
      </Card.Body>
    </Card>
    </div>
    </div>

</div>
<br/>
<br/>



<div class="container">
    <div class="row">
    <div class="col-sm-3 card">
<Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={img8} />
      <Card.Body>
        <Card.Text>
Only Check Trouser
          
        </Card.Text>
        <span >
$25.50
</span>
      </Card.Body>  
    </Card>
    </div>
    <div class="col-sm-3 card">
<Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={img9} />
      <Card.Body>
        <Card.Text>
Only Check Trouser
          
        </Card.Text>
        <span >
$25.50
</span>
      </Card.Body>
    </Card>
    </div>
    <div class="col-sm-3 card">
<Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={img10} />
      <Card.Body>
        <Card.Text>
Only Check Trouser
          
        </Card.Text>
        <span >
$25.50
</span>
      </Card.Body>
    </Card>
    </div>
    <div class="col-sm-3 card">
<Card style={{ width: '13rem' }}>
  <Card.Img variant="top" src={img11}  style={{height:'355px' }}/>
  <Card.Body>
        <Card.Text>
Only Check Trouser
          
        </Card.Text>
        <span >
$25.50
</span>
      </Card.Body>
    </Card>
    </div>
    </div>

</div>
<br/>
<br/>

<div class="container">
    <div class="row">

    <div class="col-sm-3 card">
<Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={img12} />
      <Card.Body>
        <Card.Text>
Only Check Trouser
          
        </Card.Text>
        <span >
$25.50
</span>
      </Card.Body>
    </Card>
    </div>
    <div class="col-sm-3 card">
<Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={img13} />
      
      <Card.Body>
        <Card.Text>
Only Check Trouser
          
        </Card.Text>
        <span >
$25.50
</span>
      </Card.Body>
    </Card>
    </div>
    <div class="col-sm-3 card">
<Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={img2}  style={{height:"355px"}}/>
      <Card.Body>
        <Card.Text>
Only Check Trouser
          
        </Card.Text>
        <span >
$25.50
</span>
      </Card.Body>
    </Card>
    </div>
    <div class="col-sm-3 card">
<Card style={{ width: '13rem' }}>
  <Card.Img variant="top" src={img1}  style={{height:"355px "}}/>
  <Card.Body>
        <Card.Text>
Only Check Trouser
          
        </Card.Text>
        <span >
$25.50
</span>
      </Card.Body>

    </Card>
    </div>
    </div>


</div>


  </>
  )
}

export default Home;