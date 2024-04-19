import ProductsCard from '@components/eCommerce/ProductsCard/ProductsCard';
import { Col, Container, Row } from 'react-bootstrap';

const Products = () => {
  return (
    <Container>
      <Row>
        <Col xs={6} md={3} className="d-flex justify-content-center mb-5 mt-2">
          <ProductsCard />
        </Col>
        <Col xs={6} md={3} className="d-flex justify-content-center mb-5 mt-2">
          <ProductsCard />
        </Col>
        <Col xs={6} md={3} className="d-flex justify-content-center mb-5 mt-2">
          <ProductsCard />
        </Col>
        <Col xs={6} md={3} className="d-flex justify-content-center mb-5 mt-2">
          <ProductsCard />
        </Col>
        <Col xs={6} md={3} className="d-flex justify-content-center mb-5 mt-2">
          <ProductsCard />
        </Col>
      </Row>
    </Container>
  );
};

export default Products;
