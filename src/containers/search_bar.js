import React, { Component } from 'react'; 
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'; 
import { fetchWeather } from '../actions/index'; 


export default class SearchBar extends Component {
    constructor(props){
        super(props); 

        this.state = {term: ''}; 

        //bind onInputChange to this
        this.onInputChange = this.onInputChange.bind(this); 
    }

    onInputChange(event) {
        this.setState({term: event.target.value}); 
    }

    //prevents user from submmiting the form
    onFormSubmit(event) {
        event.preventDefault(); 

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