import React from 'react'
import BootstrapTable from 'react-bootstrap-table-next'
import { Container, Button, Row, Col } from 'reactstrap'
import ToolkitProvider, { Search } from 'react-bootstrap-table2-toolkit'
import paginationFactory from 'react-bootstrap-table2-paginator'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

const mapStateToProps = (state) => {
  return {
    user: state.users.user
  }
}

function TableComponent (props) {
  const { SearchBar } = Search
  const columns = [
    {
      dataField: 'id',
      text: 'ID',
      sort: true,
      headerStyle: () => {
        return { width: '5%' }
      }
    },
    {
      dataField: 'firstname',
      text: 'Firstname',
      sort: true,
      headerStyle: () => {
        return { width: '20%' }
      }
    },
    {
      dataField: 'lastname',
      text: 'Lastname',
      sort: true,
      headerStyle: () => {
        return { width: '20%' }
      }
    },
    {
      dataField: 'link',
      text: 'Action',
      headerStyle: () => {
        return { width: '20%' }
      },
      formatter: (rowContent, row) => {
        return (
          <div>
            <Link to={'detail/' + row.id}>
              <Button color='dark' className='mr-2'>
                Detail
              </Button>
            </Link>

            <Link to={'edit/' + row.id}>
              <Button color='dark' className='mr-2'>
                Edit
              </Button>
            </Link>

            <Button color='dark' className='mr-2'>
              Delete
            </Button>
          </div>
        )
      }
    }
  ]
  const defaultSorted = [
    {
      dataField: 'id',
      order: 'asc'
    }
  ]

  return (

    <>
      <Container>
        <ToolkitProvider
          bootstrap4
          keyField='id'
          data={props.user}
          columns={columns}
          search
          defaultSorted={defaultSorted}
        >
          {(props) => (
            <div>
              <Row>
                <Col>
                  <Link to='/create'>
                    <Button color='dark' className='mr-2'>
                      create user
                    </Button>
                  </Link>
                  <div className='float-right'>
                    <SearchBar {...props.searchProps} placeholder='search...' />
                  </div>

                </Col>
              </Row>

              <br />
              <BootstrapTable
                {...props.baseProps}
                pagination={paginationFactory()}
              />
            </div>
          )}
        </ToolkitProvider>
        {/* <BootstrapTable
          bootstrap4
          keyField="id"
          data={props.user}
          columns={columns}
          defaultSorted={defaultSorted}
        /> */}
      </Container>
    </>
  )
}
export default connect(mapStateToProps, null)(TableComponent)
