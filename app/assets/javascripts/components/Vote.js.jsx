class Vote extends React.Component{
  constructor(props){
    super(props);
    this.state = { voter: '' };
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
  submitBallot(e){
    e.preventDefault();
    $.ajax({
      url: '/ballots',
      type: 'POST',
      data: { ballot: {
                team: this.refs.team.value,
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
  render(){
    return(
      <div className='row'>
        <div className='col s12 m6 offset-m3'>
          <h3 className='center'>Hackathon Ballot</h3>
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
                    <option value="1">Choose My Restaurant</option>
                    <option value="2">Github Ratings</option>
                    <option value="3">Growler GPS</option>
                    <option value="4">SLC Activity Meetup</option>
                    <option value="5">Drink & Thrive</option>
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
