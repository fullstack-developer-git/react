import React from 'react'
import { Form, FormControl, Button } from 'react-bootstrap'
export default class SearchForm extends React.Component {
  render() {
    return (
      <Form inline>
        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
        <Button variant="outline-success">Search</Button>
      </Form>
    )
  }
}