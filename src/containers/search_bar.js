//imports 
import React, { Component } from 'react'; 
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'; 
import { fetchWeather } from '../actions/index'; 


class SearchBar extends Component {
    constructor(props){
        super(props); 

        this.state = {term: ''}; 

        //bind context
        this.onInputChange = this.onInputChange.bind(this); 
        this.onFormSubmit = this.onFormSubmit.bind(this); 
    }

    onInputChange(event) {
        this.setState({term: event.target.value}); 
    }

    //prevents user from submmiting the form
    onFormSubmit(event) {
        event.preventDefault(); 

        //call action  
        this.props.fetchWeather(this.state.term);
        this.setState({ term: '' });  

    }
    render() {
        return (
            <form onSubmit={this.onFormSubmit} className="input-group">
                <input 
                    placeholder="search 5 day forcast"
                    className="form-control"
                    value={this.state.term}
                    onChange={this.onInputChange}/>
                <span className="input-group-btn">
                    <button type="submit" className="btn btn-secondary">Search</button>
                </span>
            </form>
        ); 
    }
}


function mapDispatchToProps(dispatch) {
    return bindActionCreators({ fetchWeather }, dispatch); 
}

export default connect(null, mapDispatchToProps)(SearchBar); 