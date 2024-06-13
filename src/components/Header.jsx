import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
export const Header = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">Магазин музыкальных инструментов</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Главная</Nav.Link>
            <Nav.Link href="#link">Каталог</Nav.Link>
            <Nav.Link href="#link">Избранное</Nav.Link>
            <Nav.Link href="#link">Корзина</Nav.Link>
            <NavDropdown title="Дополнительно" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Контакты</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Мои заказы
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Блог</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                О нас
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header;
