// Write your code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import TeamCard from '../TeamCard'
import './index.css'

class Home extends Component {
  state = {dashBoardList: [], isLoading: true}

  componentDidMount() {
    this.getDashBoardList()
  }

  getDashBoardList = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const data = await response.json()
    const {teams} = data

    const newData = teams.map(eachTeam => ({
      id: eachTeam.id,
      name: eachTeam.name,
      teamImageUrl: eachTeam.team_image_url,
    }))

    this.setState({dashBoardList: newData, isLoading: false})
  }

  render() {
    const {dashBoardList, isLoading} = this.state

    return (
      <div className="bg-container">
        <div className="title-container">
          <img
            className="ipl-logo"
            alt="ipl logo"
            src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
          />
          <h1 className="main-heading">IPL Dashboard</h1>
        </div>

        <ul className="ul-list-container">
          {isLoading ? (
            <div testid="loader">
              <Loader type="Oval" color="#ffffff" height={50} width={50} />
            </div>
          ) : (
            dashBoardList.map(eachTeam => (
              <TeamCard key={eachTeam.id} teamDetails={eachTeam} />
            ))
          )}
        </ul>
      </div>
    )
  }
}
export default Home
