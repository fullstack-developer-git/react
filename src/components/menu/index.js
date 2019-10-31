import React from 'react'
import { Navbar, Nav, NavDropdown } from 'react-bootstrap'
import SearchForm from './../search-form'
import menuItems from './menuItems.json'

export default class Menu extends React.Component {
  renderMenuItem(item, index) {
    if (item.childrens) {
      const dropItems = item.childrens.map((child, index) => {
        return <NavDropdown.Item key={item.name + '_' + child.name + '_' + index} href={child.redirectPath}>{child.name}</NavDropdown.Item>
      })
      return (
        <NavDropdown key={index} title={item.name} id="basic-nav-dropdown">
          {dropItems}
        </NavDropdown>)
    }

    return <Nav.Link key={index} href={item.redirectPath}>{item.name}</Nav.Link>
  }

  render() {
    const itemList = menuItems.map((item, index) => {
      return this.renderMenuItem(item, index)
    })
    return (
      <div>
        <Navbar bg="light" expand="lg">
          <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              {itemList}
            </Nav>
            <SearchForm />
          </Navbar.Collapse>
        </Navbar>
      </div>
    )
  }
}
