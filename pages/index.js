import { useState } from 'react';
import { Container, ListGroup } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';

function Header({ title }) {
  return <h1>{title ? title : 'Default title'}</h1>;
}

export default function HomePage() {
  const names = ['Ada Lovelace', 'Grace Hopper', 'Margaret Hamilton'];
  const [likes, setLikes] = useState(0);

  function handleClick() {
    setLikes(likes + 1);
  }

  return (
    <Container>
      <Card style={{ width: '18rem' }}>
      <Card.Title>Develop. Previews. Test. Ship. 🚀</Card.Title>
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
}