import React, {Component} from 'react';
import CheeseList from './cheese-list';
import AddCheese from './add-cheese';

class Cheese extends Component {

 render() {
   return (
     <div className="Cheese-App">
       <AddCheese />
       <CheeseList />
     </div>
   );
 }
}


export default Cheese;
