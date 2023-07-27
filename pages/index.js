import { useState } from 'react';
import { Carousel, Container, ListGroup } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function HomePage(loggedInUser, loggedoutUser) {
  loggedInUser = true;
  loggedoutUser = false;

  if (loggedoutUser==true) {
    console.log('logged out user');
    return (
          <Container>
            <h1>hi</h1>
          </Container>)
  }
  else if (loggedInUser==true){
    const names = ['Ada Lovelace', 'Grace Hopper', 'Margaret Hamilton'];
    const [likes, setLikes] = useState(0);

    function handleClick() {
      setLikes(likes + 1);
    }

    return (
      <Container>
        <Carousel>
          <Carousel.Item>
            <Button variant="primary"> </Button>
            <Button variant="secondary"> </Button>
            <Button variant="success"> </Button>
            
        
          </Carousel.Item>
          <Carousel.Item>
            <Button variant="primary"> </Button>
          </Carousel.Item>
          <Carousel.Item>
            <Button variant="secondary"> </Button>
            <Button variant="success"> </Button>
            <Button variant="primary"> </Button>
          </Carousel.Item>
        </Carousel>
      </Container>
    );
  };
};