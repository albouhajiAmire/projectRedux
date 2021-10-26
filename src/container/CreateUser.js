import React, { Component } from 'react'
import { Container } from 'reactstrap'
import BackComponent from '../components/BackComponent'
import TableComponent from '../components/TableComponent'

export default class CreateUser extends Component {
  render () {
    return (
      <>
        <Container>
          <BackComponent />
        </Container>
      </>
    )
  }
}
