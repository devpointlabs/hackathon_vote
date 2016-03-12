class Results extends React.Component{
  constructor(props){
    super(props);
    this.state = { teams: this.props.teams, totals: this.props.totals, voters: this.props.voters }
  }
  render(){
    let voters = Object.keys(this.state.voters).map ( team => {
      let key = `${team}-voters`
      return(
        <p key={key}><b>{ team }: </b>{ this.state.voters[team] }</p>
      )
    });
    let results = Object.keys(this.state.totals).map ( team => {
      let key = `${team}-totals`
      return(
        <div className='col s12 m6'>
          <div className='ballot-box'>
            <b>{ team }</b>
            <p>Front End: {this.state.totals[team].front_end}</p>
            <p>Back End: {this.state.totals[team].back_end}</p>
            <p>Creativity: {this.state.totals[team].creativity}</p>
            <p>Overall: {this.state.totals[team].overall}</p>
            <b>Final Score: {this.state.totals[team].result}%</b>
          </div>
      </div>
      )
    })
    return(
      <div className='row'>
        <div className='col s12 m8 offset-m2'>
          <h3 className='center'>Results</h3>
          { results }
          <div className='col s12'>
            <div className='ballot-box'>
              { voters }
            </div>
          </div>
        </div>
      </div>
    )
  }
}
