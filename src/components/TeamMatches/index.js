// Write your code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import LatestMatch from '../LatestMatch'
import MatchCard from '../MatchCard'
import './index.css'

class TeamMatches extends Component {
  state = {
    isLoading: true,
    teamBannerUrlLink: '',
    latestMatchDetail: {},
    recentMatchDetails: {},
  }

  componentDidMount() {
    this.getTeamMatchDetails()
  }

  getTeamMatchDetails = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params

    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const data = await response.json()

    const teamBannerUrl = data.team_banner_url

    const latestMatchDetails = data.latest_match_details

    const recentMatchesDetails = data.recent_matches

    const lastMatchRes = {
      competingTeam: latestMatchDetails.competing_team,
      competingTeamLogo: latestMatchDetails.competing_team_logo,
      date: latestMatchDetails.date,
      firstInnings: latestMatchDetails.first_innings,
      id: latestMatchDetails.id,
      manOfTheMatch: latestMatchDetails.man_of_the_match,
      matchStatus: latestMatchDetails.match_status,
      result: latestMatchDetails.result,
      secondInnings: latestMatchDetails.second_innings,
      umpires: latestMatchDetails.umpires,
      venue: latestMatchDetails.venue,
    }

    const updatedRecentMatch = recentMatchesDetails.map(eachItem => ({
      competingTeam: eachItem.competing_team,
      competingTeamLogo: eachItem.competing_team_logo,
      date: eachItem.date,
      firstInnings: eachItem.first_innings,
      id: eachItem.id,
      manOfTheMatch: eachItem.man_of_the_match,
      matchStatus: eachItem.match_status,
      result: eachItem.result,
      secondInnings: eachItem.second_innings,
      umpires: eachItem.umpires,
      venue: eachItem.venue,
    }))

    this.setState({
      teamBannerUrlLink: teamBannerUrl,
      latestMatchDetail: lastMatchRes,
      recentMatchDetails: updatedRecentMatch,
      isLoading: false,
    })
  }

  render() {
    const {
      isLoading,
      teamBannerUrlLink,
      latestMatchDetail,
      recentMatchDetails,
    } = this.state

    return isLoading ? (
      <div className="matches-bg-container">
        <div testid="loader">
          <Loader type="Oval" color="#ffffff" height={50} width={50} />
        </div>
      </div>
    ) : (
      <div className="inner-container">
        <img className="banner" alt="team banner" src={teamBannerUrlLink} />

        <h1 className="latest-matches-text">Latest Matches</h1>
        <LatestMatch
          key={latestMatchDetail.id}
          latestMatchDetail={latestMatchDetail}
        />

        <ul className="match-result-list">
          {recentMatchDetails.map(eachMatch => (
            <MatchCard key={eachMatch.id} matchDetails={eachMatch} />
          ))}
        </ul>
      </div>
    )
  }
}
export default TeamMatches
