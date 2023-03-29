// Write your code here
import './index.css'

const LatestMatch = props => {
  const {latestMatchDetail} = props
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
  } = latestMatchDetail

  console.log(latestMatchDetail)

  return (
    <div className="latest-match-bg-container">
      <div className="latest-match-container">
        <div className="match-details-container">
          <div>
            <p className="competing-team-text">{competingTeam}</p>
            <p className="competing-date-text">{date}</p>
            <p className="competing-venue-text">{venue}</p>
            <p className="competing-result-text">{result}</p>
          </div>

          <img
            className="competing-team-logo"
            alt={`latest match ${competingTeam}`}
            src={competingTeamLogo}
          />
        </div>
      </div>
      <hr className="line" />

      <div className="latest-bottom-container">
        <h1 className="first-innings-text">First Innings</h1>
        <p className="first-innings-text-value">{firstInnings}</p>

        <h1 className="first-innings-text">Second Innings</h1>
        <p className="first-innings-text-value">{secondInnings}</p>

        <h1 className="first-innings-text">Man Of The Match</h1>
        <p className="first-innings-text-value">{manOfTheMatch}</p>

        <h1 className="first-innings-text">Umpires</h1>
        <p className="first-innings-text-value">{umpires}</p>
      </div>
    </div>
  )
}
export default LatestMatch
