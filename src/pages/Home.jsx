import React, { useEffect, useState } from 'react';
import { List, Button, Container } from 'reactstrap';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default function Home() {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    axios('https://dummyjson.com/products')
      .then(response => setProduct(response.data.products))
      .catch(err => console.error(err));
  }, []);

  return (
    <Container className='mt-5'>
      <Button color="primary">
        <Link style={{ color: 'white', textDecoration: 'none' }} color='dark' to="/create-user">Create User</Link>
      </Button>
      <h1 className='mt-4'>List all products</h1>
      <List>
        {product.map(product => (
          <li key={product.id}>{product.title}</li>
        ))}
      </List>
    </Container>
  );
}

