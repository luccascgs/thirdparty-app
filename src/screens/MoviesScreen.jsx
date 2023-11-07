import React, { Component } from "react";
import { Container, Row, Col, Button, Form } from 'react-bootstrap';
import Movie from '../components/Movie';
import api from '../api';

class MoviesScreen extends Component {

  state = {
    filmes: [],
    query: ''
  }

  handleInputChange = event => {
    this.setState({ query: event.target.value })
  }

  async fetchFilmes(query) {
    const response = await api.get(query);
    this.setState({ filmes: response.data });
  }

  handleSubmit = event => {
    event.preventDefault();
    const { query } = this.state;
    this.fetchFilmes(query);
  }

  render() {
    const { filmes, query } = this.state;
    return (
      <Container>
        <h1>Filmes</h1>
        <Form onSubmit={this.handleSubmit}>
          <label>Pesquisar por Título:</label>
          <input placeholder="Digite um título..." type="text" value={query} onChange={this.handleInputChange} />
          <Button type="submit">Pesquisar</Button>
        </Form>
        <Row>
          {
            filmes.map(filme => (
              <Col key={filme.show.id} md={4}>
                <Movie name={filme.show.name} img={filme.show.image.medium} />
              </Col>
            ))
          }
        </Row>
      </Container>
    );
  };
};

export default MoviesScreen;