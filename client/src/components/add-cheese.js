import React, {Component} from 'react';
import {connect} from 'react-redux';
import {postCheese} from '../actions/cheese';

class AddCheese extends Component {
    
    addCheese(event) {
        event.preventDefault();
        const cheese = this.input.value;
        this.props.dispatch(postCheese(cheese));
    }

    render () {
        return (
            <form onSubmit={e => this.addCheese(e)} >
                <input type='text' placeholder='Enter your cheese' ref={input=>this.input=input} />
            </form>
        )
    }
}

export default connect()(AddCheese);