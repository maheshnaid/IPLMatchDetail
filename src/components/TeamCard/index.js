// Write your code here
import {Link} from 'react-router-dom'
import './index.css'

const TeamCard = props => {
  const {teamDetails} = props
  const {name, teamLogo, id} = teamDetails

  return (
    <Link to={`/team-matches/${id}`} className="nav-link">
      <li className="team">
        <img src={teamLogo} className="team-logo" alt={name} />
        <h1 className="team-name">{name}</h1>
      </li>
    </Link>
  )
}

export default TeamCard
