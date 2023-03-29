// Write your code here
import './index.css'

const MatchCard = props => {
  const {matchDetails} = props
  const {competingTeam, competingTeamLogo, matchStatus, result} = matchDetails

  const resultTextColor = matchStatus === 'Won' ? 'won-text' : 'lost-text'

  return (
    <li className="result-list-container">
      <img
        className="competing-result-logo"
        alt={`competing team ${competingTeam}`}
        src={competingTeamLogo}
      />
      <p className="result-heading">{competingTeam}</p>
      <p className="result-won-text">{result}</p>
      <p className={resultTextColor}>{matchStatus}</p>
    </li>
  )
}
export default MatchCard
