import React, { Component } from 'react'
import TableComponent from '../components/TableComponent'
export default class HomeContainer extends Component {
  render () {
    return (
      <>

        <TableComponent user={this.props.user} />
      </>
    )
  }
}
