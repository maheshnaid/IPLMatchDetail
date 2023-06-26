// Write your code here
import {Component} from 'react'

import Loader from 'react-loader-spinner'

import LatestMatch from '../LatestMatch'
import MatchCard from '../MatchCard'

import './index.css'

class TeamMatches extends Component {
  state = {
    banner: '',
    latestMatchDetails: {},
    recentMatchesList: [],
    loader: true,
  }

  componentDidMount() {
    this.getTeamMatchDetails()
  }

  updateData = data => ({
    competingTeam: data.competing_team,
    competingTeamLogo: data.competing_team_logo,
    date: data.date,
    firstInnings: data.first_innings,
    id: data.id,
    manOfTheMatch: data.man_of_the_match,
    result: data.result,
    secondInnings: data.second_innings,
    matchStatus: data.match_status,
    umpires: data.umpires,
    venue: data.venue,
  })

  getTeamMatchDetails = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    // console.log(id)
    const teamUrl = `https://apis.ccbp.in/ipl/${id}`
    const options = {
      method: 'GET',
    }
    const teamResponse = await fetch(teamUrl, options)
    const teamData = await teamResponse.json()
    console.log(teamData)
    const teamBannerUrl = teamData.team_banner_url
    const latestMatch = this.updateData(teamData.latest_match_details)
    const recentMatches = teamData.recent_matches.map(each =>
      this.updateData(each),
    )
    console.log(recentMatches)
    this.setState({
      banner: teamBannerUrl,
      latestMatchDetails: latestMatch,
      recentMatchesList: recentMatches,
      loader: false,
    })
  }

  renderLatestMatch = () => {
    const {latestMatchDetails} = this.state
    return (
      <div className="latestMathCard">
        <LatestMatch details={latestMatchDetails} />
      </div>
    )
  }

  renderRecentMatches = () => {
    const {recentMatchesList} = this.state
    return (
      <ul className="recent-matches">
        {recentMatchesList.map(each => (
          <MatchCard details={each} key={each.id} />
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
    const {banner, loader} = this.state
    const {match} = this.props
    const {params} = match
    const {id} = params
    console.log(id)

    return (
      <div className={`team-match-container ${id}`}>
        <img src={banner} className="banner" alt="team banner" />
        <p className="latestMatchHeading">Latest Match</p>
        {loader ? this.renderLoader() : this.renderLatestMatch()}
        <p className="latestMatchHeading">recent matches</p>
        {loader ? this.renderLoader() : this.renderRecentMatches()}
      </div>
    )
  }
}

export default TeamMatches
