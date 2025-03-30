import { useEffect, useState } from 'react';
import {
  Alert,
  Button,
  Card,
  Col,
  Container,
  Form,
  ListGroup,
  Nav,
  Navbar,
  Row,
} from 'react-bootstrap';

async function loadAPI(pokemon) {
  const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Pokémon não encontrado');
    }
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

function App() {
  const [pokemon, setPokemon] = useState(null);
  const [search, setSearch] = useState('charizard');
  const [error, setError] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const data = await loadAPI('charizard');
        setPokemon(data);
        setError(null);
      } catch (err) {
        setError(err.message);
      }
    })();
  }, []);

  async function loadPokemon(e) {
    e.preventDefault();
    const cleanedSearch = search.toLowerCase().replace(/\s/g, '');
    if (!cleanedSearch) {
      setError('Digite o nome ou número do Pokémon');
      setPokemon(null);
      return;
    }
    try {
      const data = await loadAPI(cleanedSearch);
      setPokemon(data);
      setError(null);
    } catch (err) {
      setError(err.message);
      setPokemon(null);
    }
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
        {error && (
          <Row className="justify-content-center">
            <Col md={6}>
              <Alert variant="danger" className="text-center">
                {error}
              </Alert>
            </Col>
          </Row>
        )}
        {pokemon && !error ? (
          <>
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

            <Row className="justify-content-center">
              <Col md={8}>
                <Card className="mt-4">
                  <Card.Header>Detalhes</Card.Header>
                  <Card.Body>
                    <Card.Text>
                      <strong>Experiência Base:</strong>{' '}
                      {pokemon.base_experience} <br />
                      <strong>Habilidades:</strong>{' '}
                      {pokemon.abilities.map((a) => a.ability.name).join(', ')}{' '}
                      <br />
                      <strong>Tipos:</strong>{' '}
                      {pokemon.types.map((t) => t.type.name).join(', ')}
                    </Card.Text>
                  </Card.Body>
                </Card>

                <Card className="mt-4">
                  <Card.Header>Estatísticas</Card.Header>
                  <ListGroup variant="flush">
                    {pokemon.stats.map((stat, index) => (
                      <ListGroup.Item key={index}>
                        <strong>{stat.stat.name.toUpperCase()}:</strong>{' '}
                        {stat.base_stat}
                      </ListGroup.Item>
                    ))}
                  </ListGroup>
                </Card>

                <Card className="mt-4">
                  <Card.Header>Movimentos (exibindo 5 primeiros)</Card.Header>
                  <Card.Body>
                    <ListGroup>
                      {pokemon.moves.slice(0, 5).map((move, index) => (
                        <ListGroup.Item key={index}>
                          {move.move.name}
                        </ListGroup.Item>
                      ))}
                    </ListGroup>
                    <small className="text-muted">
                      Total de movimentos: {pokemon.moves.length}
                    </small>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </>
        ) : (
          !error && (
            <Row className="justify-content-center">
              <Col md={6} className="text-center">
                <p>Carregando...</p>
              </Col>
            </Row>
          )
        )}
      </Container>
    </>
  );
}

export default App;
