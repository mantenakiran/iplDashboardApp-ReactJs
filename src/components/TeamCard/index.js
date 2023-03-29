// Write your code here
import {Link} from 'react-router-dom'
import './index.css'

const TeamCard = props => {
  const {teamDetails} = props
  const {id, name, teamImageUrl} = teamDetails

  return (
    <li className="team-list-container">
      <Link className="link-list" to={`/team-matches/${id}`}>
        <div className="items-list-container">
          <img className="list-image" alt={name} src={teamImageUrl} />
          <p className="list-heading">{name}</p>
        </div>
      </Link>
    </li>
  )
}

export default TeamCard
