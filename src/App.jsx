import { useEffect, useState } from 'react';
import {
  Button,
  Card,
  Col,
  Container,
  Form,
  Nav,
  Navbar,
  Row,
} from 'react-bootstrap';

async function loadAPI(pokemon) {
  const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;
  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
}

function App() {
  const [pokemon, setPokemon] = useState(null);
  const [search, setSearch] = useState('charizard');

  useEffect(() => {
    (async () => {
      const data = await loadAPI('charizard');
      setPokemon(data);
    })();
  }, []);

  async function loadPokemon(e) {
    e.preventDefault();
    const data = await loadAPI(search);
    setPokemon(data);
  }

  return (
    <>
      <Navbar bg="primary" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand href="#">Pokédex</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto" />
            <Form className="d-flex" onSubmit={loadPokemon}>
              <Form.Control
                type="text"
                placeholder="Digite o nome ou número do Pokémon"
                className="me-2"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
              <Button variant="outline-light" type="submit">
                Buscar
              </Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Container className="mt-4">
        {pokemon ? (
          <Row className="justify-content-center">
            <Col md={6} lg={4}>
              <Card className="text-center">
                <Card.Img
                  variant="top"
                  src={pokemon.sprites.front_default}
                  alt={pokemon.name}
                  style={{ backgroundColor: '#f2f2f2' }}
                />
                <Card.Body>
                  <Card.Title className="text-capitalize">
                    {pokemon.name}
                  </Card.Title>
                  <Card.Text>
                    <strong>Nº:</strong> {pokemon.id} <br />
                    <strong>Peso:</strong> {pokemon.weight / 10}kg <br />
                    <strong>Altura:</strong> {pokemon.height / 10}m
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        ) : (
          <Row className="justify-content-center">
            <Col md={6} className="text-center">
              <p>Carregando...</p>
            </Col>
          </Row>
        )}
      </Container>
    </>
  );
}

export default App;
