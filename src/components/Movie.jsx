import React from 'react';
import { Card } from 'react-bootstrap';

const Movie = ({ name, img }) => {
  return (
    <Card className="text-center">
      <Card.Header>{name}</Card.Header>
      <Card.Body>
        <Card.Img src={img} alt={name}></Card.Img>
      </Card.Body>
    </Card>
  );
};

export default Movie;
