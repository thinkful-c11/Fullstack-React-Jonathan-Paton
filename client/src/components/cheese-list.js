import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchCheeses} from '../actions/cheese';

class CheeseList extends Component {

  componentDidMount() {
    this.props.dispatch(fetchCheeses());
  };


 render() {
   console.log(this.props);
   const cheeses = this.props.cheeses.map((cheese, index) =>
       <li key={index}>
           {cheese}
       </li>
   );
    return (
        <ul className='cheese-list'>
            {cheeses}
        </ul>
    )
  }
}

const mapStateToProps = state => ({
  cheeses: state.cheeses
});

export default connect(mapStateToProps)(CheeseList);
