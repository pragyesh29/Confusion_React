import {Navbar, NavbarBrand} from 'reactstrap';
import Menu from './MenuComponent';
import {DISHES} from '../shared/dishes';
import { Component } from 'react';
import DishDetail from './DishDetailComponent';


class Main extends Component{

    constructor(props){
    super(props);
    this.state  = {
      dishes: DISHES,
      selectedDish: null
    };
  }

  onDishSelect(dishId){    
    this.setState({selectedDish: dishId});
    console.log("MenuComponent onDishSelect");
  }

  render(){
    return (
      <div>
        <Navbar dark color="primary">
          <div className="container">
            <NavbarBrand href="/">Restorante con Fusion</NavbarBrand>
          </div>
        </Navbar>
        <Menu dishes={this.state.dishes} getDishId={(dishId) => this.onDishSelect(dishId)} />
        <DishDetail dish={this.state.dishes.filter((dish) => this.state.selectedDish === dish.id)[0]}/>
      </div>
    );
  }
}

export default Main;
