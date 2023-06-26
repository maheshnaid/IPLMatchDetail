// Write your code here
import './index.css'

const LatestMatch = props => {
  const {details} = props
  const {
    competingTeam,
    competingTeamLogo,
    date,
    firstInnings,
    manOfTheMatch,
    result,
    secondInnings,
    umpires,
    venue,
  } = details

  return (
    <>
      <div className="latest-match-container">
        <div className="details-container-one">
          <div>
            <h1 className="competing-team-name">{competingTeam}</h1>
            <p className="date">{date}</p>
            <p className="venue">{venue}</p>
            <p className="result">{result}</p>
          </div>
          <img
            src={competingTeamLogo}
            alt={competingTeam}
            className="competingTeam"
          />
        </div>
        <hr />
        <div className="second-container">
          <p className="head">First Innings</p>
          <p className="details">{firstInnings}</p>
          <p className="head">Second Innings</p>
          <p className="details">{secondInnings}</p>
          <p className="head">Man Of The Match</p>
          <p className="details">{manOfTheMatch}</p>
          <p className="head">Umpires</p>
          <p className="details">{umpires}</p>
        </div>
      </div>
      <div className="large-device-container">
        <div>
          <h1 className="competing-team-name">{competingTeam}</h1>
          <p className="date">{date}</p>
          <p className="venue">{venue}</p>
          <p className="result">{result}</p>
        </div>
        <img
          src={competingTeamLogo}
          alt={competingTeam}
          className="competingTeam"
        />
        <div>
          <p className="head">First Innings</p>
          <p className="details">{firstInnings}</p>
          <p className="head">Second Innings</p>
          <p className="details">{secondInnings}</p>
          <p className="head">Man Of The Match</p>
          <p className="details">{manOfTheMatch}</p>
          <p className="head">Umpires</p>
          <p className="details">{umpires}</p>
        </div>
      </div>
    </>
  )
}

export default LatestMatch
