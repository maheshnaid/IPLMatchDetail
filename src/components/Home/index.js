// Write your code here
import {Component} from 'react'

import Loader from 'react-loader-spinner'

import TeamCard from '../TeamCard'

import './index.css'

class Home extends Component {
  state = {
    allTeams: [],
    loader: true,
  }

  componentDidMount() {
    this.getAllIplTeams()
  }

  getAllIplTeams = async () => {
    const url = 'https://apis.ccbp.in/ipl'
    const options = {
      method: 'GET',
    }
    const response = await fetch(url, options)
    const returnData = await response.json()
    console.log(returnData)
    const updateData = returnData.teams.map(each => ({
      id: each.id,
      name: each.name,
      teamLogo: each.team_image_url,
    }))
    this.setState({allTeams: updateData, loader: false})
    console.log(updateData)
  }

  renderAllTeams = () => {
    const {allTeams} = this.state

    return (
      <ul className="teams-container">
        {allTeams.map(each => (
          <TeamCard teamDetails={each} key={each.id} />
        ))}
      </ul>
    )
  }

  renderLoader = () => (
    <div className="loader-container" data-testid="loader">
      <Loader type="Oval" color="#ffffff" height={50} width={50} />
    </div>
  )

  render() {
    const {loader} = this.state

    return (
      <div className="home-container">
        <div className="container">
          <div className="logo-heading-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
              alt="ipl logo"
              className="logo"
            />
            <h1 className="heading">IPL Dashboard</h1>
          </div>
          {loader ? this.renderLoader() : this.renderAllTeams()}
        </div>
      </div>
    )
  }
}

export default Home
