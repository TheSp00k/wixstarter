import React, { Component } from 'react';
import './ParserForm.css';

class ParserForm extends Component {
    constructor(props) {
        super(props);
        this.state = {csvText: null, csvError: null};
        this.validateForm = this.validateForm.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    
    validateForm() {
        let formValid = true;
        if (!this.state.csvText || this.state.csvText === '') {
            this.setState({csvError: 'This field is required'});
            formValid = false;
        }
        return formValid;
    }

    handleChange(e) {
        this.setState({csvText: e.target.value})
    };
    handleSubmit(event) {
        event.preventDefault();
        let formValid = this.validateForm();
        if (!formValid) {
            return;
        }
        let result = {headers: [], lines: []};
        const lines = this.state.csvText.split('\n');
        result.headers = lines[0].split(',');
        
        for (let l = 1; l < lines.length; l++) {
            let currentLine = lines[l].split(',');
            result.lines.push(currentLine);
        }
        console.log(this.props);
        
        this.props.handleSubmit(result);
    }

    render() {
        return (
            <div className="form-container">
                <form onSubmit={this.handleSubmit}>
                    <textarea name="csvText" onChange={(e) => this.handleChange(e)} id="csvText" placeholder="Enter CSV here"/>
                    <span className="error-text">{this.state.csvError}</span>
                    <div className="submit-container">
                        <button className="btn-success" type="submit">Submit</button>
                    </div>
                </form>
            </div>
        );
    }
}

export default ParserForm;