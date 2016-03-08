class Vote extends React.Component{
  constructor(props){
    super(props);
    this.state = { voter: '', displayDirection: true, teams: this.props.teams };
    this.submitBallot = this.submitBallot.bind(this);
    this.setFrontEndVote = this.setFrontEndVote.bind(this);
    this.setBackEndVote = this.setBackEndVote.bind(this);
    this.setCreativityVote = this.setCreativityVote.bind(this);
    this.setOverallVote = this.setOverallVote.bind(this);
  }
  setFrontEndVote(e){
    let value = e.target.innerHTML;
    this.setState({ frontEnd: value });
  }
  setBackEndVote(e){
    let value = e.target.innerHTML;
    this.setState({ backEnd: value });
  }
  setCreativityVote(e){
    let value = e.target.innerHTML;
    this.setState({ creativity: value });
  }
  setOverallVote(e){
    let value = e.target.innerHTML;
    this.setState({ overall: value });
  }
  deselect(){
    var inputs = document.getElementsByTagName("input");
      for(var i = 0; i < inputs.length; i++){
        if(inputs[i].getAttribute("type")==="radio"){
            inputs[i].checked=false;
          }
        }
  }
  goAway(){
    this.setState({ displayDirection: !this.state.displayDirection });
  }
  submitBallot(e){
    e.preventDefault();
    $.ajax({
      url: '/ballots',
      type: 'POST',
      data: { ballot: {
                team_id: this.refs.team.value,
                voter: this.refs.name.value,
                front_end: this.state.frontEnd,
                back_end: this.state.backEnd,
                creativity: this.state.creativity,
                overall: this.state.overall,
                front_end_comment: this.refs.front_end_comment.value,
                back_end_comment: this.refs.back_end_comment.value,
                creativity_comment: this.refs.creativity_comment.value,
                overall_comment: this.refs.overall_comment.value
      }}
    }).success( data => {
      this.refs.team.value = '';
      this.refs.front_end_comment.value = '';
      this.refs.back_end_comment.value = '';
      this.refs.creativity_comment.value = '';
      this.refs.overall_comment.value = '';
      this.deselect();
    }
    )
  }
  directions(){
    if(this.state.displayDirection){
      return(
        <div ref='directions'>
          <div className='ballot-box'>
            <p>Enter your name and select the current team that you are voting for.</p>
            <p>Rate the team's application from 1-5 (5 being the best), and leave any comments that you may have in the field below.</p>
            <p>Students will not have access to the names of the people who left comments, so feel free to be as critical as you think is helpful.</p>
            <b>Grading criteria are as follows:</b>
            <p>&nbsp;&nbsp;&nbsp; <b>Front End</b> - Use of CSS/styling as well as React/AJAX</p>
            <p>&nbsp;&nbsp;&nbsp; <b>Back End</b> - Database structure, back-end architecture</p>
            <p>&nbsp;&nbsp;&nbsp; <b>Creativity/Concept</b> - Implementation of gems, thoughfulness of idea, originality</p>
            <p>&nbsp;&nbsp;&nbsp; <b>Overall</b> - Your overall valuation of the application</p>
            <div className='center'>
              <a className='btn waves-effect waves-light' onClick={this.goAway.bind(this)}>I already knew that, make this go away.</a>
            </div>
          </div>
        </div>
      )
    } else {
      return(
        <div className='center'>
          <a className='btn waves-effect waves-light' onClick={this.goAway.bind(this)}>I forgot how to do the thing. Help.</a>
        </div>
      )
    }
  }
  render(){
    let options = this.state.teams.map( team => {
      let key = `${team.name}-option`;
      return(
        <option value={team.id}>{team.name}</option>
      );
    });
    return(
      <div className='row'>
        <div className='col s12 m6 offset-m3'>
          <h3 className='center'>Hackathon Ballot</h3>
          { this.directions() }
          <form  onSubmit={this.submitBallot}>
            <div className='ballot-box'>
              <div className='row'>
                <div className='col s12 m6'>
                  <input name='name' type='text' ref ='name' required={true}/>
                  <label htmlFor='name'>Your Name</label>
                </div>
                <div className='col s12 m6 input-field'>
                  <select className='browser-default' ref='team' defaultValue=''>
                    <option value="" disabled>Select Team</option>
                    { options }
                  </select>
                </div>
              </div>
            </div>
            <div className='ballot-box'>
              <b className='col s3'>Front End</b>
              <div className='radios col s9'>
                <input name="front_end" type="radio" id="fe_1" />
                <label htmlFor="fe_1" onClick={this.setFrontEndVote}>1</label>
                <input name="front_end" type="radio" id="fe_2" />
                <label htmlFor="fe_2" onClick={this.setFrontEndVote}>2</label>
                <input name="front_end" type="radio" id="fe_3" />
                <label htmlFor="fe_3" onClick={this.setFrontEndVote}>3</label>
                <input name="front_end" type="radio" id="fe_4" />
                <label htmlFor="fe_4" onClick={this.setFrontEndVote}>4</label>
                <input name="front_end" type="radio" id="fe_5" />
                <label htmlFor="fe_5" onClick={this.setFrontEndVote}>5</label>
              </div>
              <br />
              <div className=''>
                <div className='input-field'>
                  <textarea className='materialize-textarea' id='front_end_comment' ref='front_end_comment'/>
                  <label htmlFor='front_end_comment'>Comments</label>
                </div>
              </div>
            </div>
            <div className='ballot-box'>
              <b className='col s3'>Back End</b>
              <div className='radios col s9'>
                <input name="back_end" type="radio" id="be_1" />
                <label htmlFor="be_1" onClick={this.setBackEndVote}>1</label>
                <input name="back_end" type="radio" id="be_2" />
                <label htmlFor="be_2" onClick={this.setBackEndVote}>2</label>
                <input name="back_end" type="radio" id="be_3" />
                <label htmlFor="be_3" onClick={this.setBackEndVote}>3</label>
                <input name="back_end" type="radio" id="be_4" />
                <label htmlFor="be_4" onClick={this.setBackEndVote}>4</label>
                <input name="back_end" type="radio" id="be_5" />
                <label htmlFor="be_5" onClick={this.setBackEndVote}>5</label>
              </div>
              <br />
              <div className=''>
                <div className='input-field'>
                  <textarea className='materialize-textarea' id='back_end_comment' ref='back_end_comment'/>
                  <label htmlFor='back_end_comment'>Comments</label>
                </div>
              </div>
            </div>
            <div className='ballot-box'>
              <b className='col s3'>Creativity / Concept</b>
              <div className='radios col s9'>
                <input name="creativity" type="radio" id="cr_1" />
                <label htmlFor="cr_1" onClick={this.setCreativityVote}>1</label>
                <input name="creativity" type="radio" id="cr_2" />
                <label htmlFor="cr_2" onClick={this.setCreativityVote}>2</label>
                <input name="creativity" type="radio" id="cr_3" />
                <label htmlFor="cr_3" onClick={this.setCreativityVote}>3</label>
                <input name="creativity" type="radio" id="cr_4" />
                <label htmlFor="cr_4" onClick={this.setCreativityVote}>4</label>
                <input name="creativity" type="radio" id="cr_5" />
                <label htmlFor="cr_5" onClick={this.setCreativityVote}>5</label>
              </div>
              <br />
              <div className=''>
                <div className='input-field'>
                  <textarea className='materialize-textarea' id='creativity_comment' ref='creativity_comment'/>
                  <label htmlFor='creativity_comment'>Comments</label>
                </div>
              </div>
            </div>
            <div className='ballot-box'>
              <b className='col s3'>Overall</b>
              <div className='radios col s9'>
                <input name="overall" type="radio" id="ov_1" />
                <label htmlFor="ov_1" onClick={this.setOverallVote}>1</label>
                <input name="overall" type="radio" id="ov_2" />
                <label htmlFor="ov_2" onClick={this.setOverallVote}>2</label>
                <input name="overall" type="radio" id="ov_3" />
                <label htmlFor="ov_3" onClick={this.setOverallVote}>3</label>
                <input name="overall" type="radio" id="ov_4" />
                <label htmlFor="ov_4" onClick={this.setOverallVote}>4</label>
                <input name="overall" type="radio" id="ov_5" />
                <label htmlFor="ov_5" onClick={this.setOverallVote}>5</label>
              </div>
              <br />
              <div className=''>
                <div className='input-field'>
                  <textarea className='materialize-textarea' id='overall_comment' ref='overall_comment'/>
                  <label htmlFor='overall_comment'>Comments</label>
                </div>
              </div>
            </div>
            <br />
            <div className='center'>
              <button type='submit' className='btn waves-effect waves-light'>Submit Ballot</button>
            </div>
          </form>
        </div>
      </div>
    )
  }
}
