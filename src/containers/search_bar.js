import React,{ Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index';
class SearchBar extends Component {
	constructor(props){
		super(props);
		this.state = {term: ''};
		this.onInputChange = this.onInputChange.bind(this);
		this.onFormSubmit = this.onFormSubmit.bind(this);
	}

	onInputChange(event){
		//console.log(this);
		this.setState({term: event.target.value});
	}
	onFormSubmit(event){
		event.preventDefault();
		this.props.fetchWeather(this.state.term);
		this.setState({term: ''});
	}

	render() {
		return(
			<form onSubmit={this.onFormSubmit} className="input-group">
				<input 
				placeholder="Get a five days forecast in your favourite cities"
				className="form-control"
				value={this.state.term}
				onChange={this.onInputChange}
				/>
				<span className="input-group-btn">
					<button type="submit" className="btn btn-secondary">Submit</button>
				</span>
			</form>
			);
	}
}

function mapDispachToProps(dispach){
	return bindActionCreators({fetchWeather},dispach);
}

export default connect(null, mapDispachToProps)(SearchBar);