// Write your code here
import './index.css'

const MatchCard = props => {
  const {details} = props
  const {competingTeamLogo, competingTeam, matchStatus, result} = details
  const color = matchStatus === 'Won' ? 'green' : 'red'

  return (
    <li className="match-card">
      <img
        src={competingTeamLogo}
        alt={competingTeam}
        className="competingTeamLogo"
      />
      <h1 className="name">{competingTeam}</h1>
      <p className="won">{result}</p>
      <p className={`lose ${color}`}>{matchStatus}</p>
    </li>
  )
}

export default MatchCard
