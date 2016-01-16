class Results extends React.Component{
  constructor(props){
    super(props);
    this.state = { ballots: this.props.ballots, team1: this.props.team1, team2: this.props.team2, team3: this.props.team3, team4: this.props.team4, team5: this.props.team5, totals: this.props.totals, results: this.props.results }
  }
  render(){
    let voters1 = this.state.team1.map( ballot => {
      return(' ' + ballot.voter + ' ')
    });
    let voters2 = this.state.team2.map( ballot => {
      return(' ' + ballot.voter + ' ')
    });
    let voters3 = this.state.team3.map( ballot => {
      return(' ' + ballot.voter + ' ')
    });
    let voters4 = this.state.team4.map( ballot => {
      return(' ' + ballot.voter + ' ')
    });
    let voters5 = this.state.team5.map( ballot => {
      return(' ' + ballot.voter + ' ')
    });
    return(
      <div className='row'>
        <div className='col s12 m8 offset-m2'>
          <h3 className='center'>Results</h3>
          <div className='ballot-box'>
            <b>Choose My Restaurant Final Score: {this.state.results.team1}</b>
            <p>Front End: {this.state.totals.team1.front_end}</p>
            <p>Back End: {this.state.totals.team1.back_end}</p>
            <p>Creativity: {this.state.totals.team1.creativity}</p>
            <p>Overall: {this.state.totals.team1.overall}</p>
          </div>
          <div className='ballot-box'>
            <b>Github Ratings Final Score: {this.state.results.team2}</b>
            <p>Front End: {this.state.totals.team2.front_end}</p>
            <p>Back End: {this.state.totals.team2.back_end}</p>
            <p>Creativity: {this.state.totals.team2.creativity}</p>
            <p>Overall: {this.state.totals.team2.overall}</p>
          </div>
          <div className='ballot-box'>
            <b>Growler GPS Final Score: {this.state.results.team3}</b>
            <p>Front End: {this.state.totals.team3.front_end}</p>
            <p>Back End: {this.state.totals.team3.back_end}</p>
            <p>Creativity: {this.state.totals.team3.creativity}</p>
            <p>Overall: {this.state.totals.team3.overall}</p>
          </div>
          <div className='ballot-box'>
            <b>SLC Activity Meetup Final Score: {this.state.results.team4}</b>
            <p>Front End: {this.state.totals.team4.front_end}</p>
            <p>Back End: {this.state.totals.team4.back_end}</p>
            <p>Creativity: {this.state.totals.team4.creativity}</p>
            <p>Overall: {this.state.totals.team4.overall}</p>
          </div>
          <div className='ballot-box'>
            <b>Drink & Thrive Final Score: {this.state.results.team5}</b>
            <p>Front End: {this.state.totals.team5.front_end}</p>
            <p>Back End: {this.state.totals.team5.back_end}</p>
            <p>Creativity: {this.state.totals.team5.creativity}</p>
            <p>Overall: {this.state.totals.team5.overall}</p>
          </div>
          <div className='ballot-box'>
            <p><b>Team1 Voters: </b>{ voters1 }</p>
            <p><b>Team2 Voters: </b>{ voters2 }</p>
            <p><b>Team3 Voters: </b>{ voters3 }</p>
            <p><b>Team4 Voters: </b>{ voters4 }</p>
            <p><b>Team5 Voters: </b>{ voters5 }</p>
          </div>
        </div>
      </div>
    )
  }
}
