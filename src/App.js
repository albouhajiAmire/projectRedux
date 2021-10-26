import React, { Component } from 'react'
import JumbotronComponent from './components/JumbotronComponent'
import NavbarComponent from './components/NavbarComponent'
import TableComponent from './components/TableComponent'
import { BrowserRouter, Route } from 'react-router-dom'
import CreateUser from './container/CreateUser'
import EditUser from './container/EditUser'
import DetailsUser from './container/DetailsUser'
import HomeContainer from './container/HomeContainer'
export default class App extends Component {
  // state = {
  //   title : "hello sure!!",
  //   user : [
  //     {
  //       id : 1,
  //       lastname : "amine",
  //       firstname : "bhj",
  //       age : 24,
  //       phone : "0687244982"

  //     },
  //     {
  //       id : 2,
  //       lastname : "Ziko",
  //       firstname : "fdl",
  //       age : 24,
  //       phone : "0687244982"

  //     },
  //     {
  //       id : 3,
  //       lastname : "youssef",
  //       firstname : "bly",
  //       age : 24,
  //       phone : "0687244982"

  //     },
  //     {
  //       id : 4,
  //       lastname : "youssef",
  //       firstname : "bly",
  //       age : 24,
  //       phone : "0687244982"

  //     },
  //     {
  //       id : 5,
  //       lastname : "youssef",
  //       firstname : "bly",
  //       age : 24,
  //       phone : "0687244982"

  //     },
  //     {
  //       id : 6,
  //       lastname : "youssef",
  //       firstname : "bly",
  //       age : 24,
  //       phone : "0687244982"

  //     },
  //     {
  //       id : 7,
  //       lastname : "youssef",
  //       firstname : "bly",
  //       age : 24,
  //       phone : "0687244982"

  //     },
  //     {
  //       id : 8,
  //       lastname : "youssef",
  //       firstname : "bly",
  //       age : 24,
  //       phone : "0687244982"

  //     },
  //     {
  //       id : 9,
  //       lastname : "youssef",
  //       firstname : "bly",
  //       age : 24,
  //       phone : "0687244982"

  //     },
  //     {
  //       id : 11,
  //       lastname : "youssef",
  //       firstname : "bly",
  //       age : 24,
  //       phone : "0687244982"

  //     },
  //     {
  //       id : 12,
  //       lastname : "youssef",
  //       firstname : "bly",
  //       age : 24,
  //       phone : "0687244982"

  //     },
  //   ]
  // }
  render () {
    return (
      <div>
        <NavbarComponent />
        <JumbotronComponent />
        <BrowserRouter>
          <Route exact path='/'>
            <HomeContainer />
          </Route>
          <Route exact path='/create '>
            <CreateUser />
          </Route>
          <Route path='/detail/:id'>
            <DetailsUser />
          </Route>
          <Route path='/edit/:id'>
            <EditUser />
          </Route>
        </BrowserRouter>
      </div>
    )
  }
}
