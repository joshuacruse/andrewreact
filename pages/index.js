import { useState } from 'react';
import { Container, ListGroup } from 'react-bootstrap';
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
        <Card style={{ width: '18rem' }}>
        <Card.Title>Develop. Previews. Ship. 🚀</Card.Title>
            <Card.Body>
              <ListGroup>
                  {names.map((name) => (
                    <ListGroup.Item key={name}>{name}</ListGroup.Item>
                  ))}
              </ListGroup>
            </Card.Body>
          <Button variant ="primary" onClick={handleClick}>Like ({likes})</Button>
        </Card>  
      </Container>  
    );
  };
};