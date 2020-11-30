import Menu from './MenuComponent';
import {DISHES} from '../shared/dishes';
import { Component } from 'react';
import DishDetail from './DishDetailComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';

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
        <Header/>
        <Menu dishes={this.state.dishes} getDishId={(dishId) => this.onDishSelect(dishId)} />
        <DishDetail dish={this.state.dishes.filter((dish) => this.state.selectedDish === dish.id)[0]}/>
        <Footer/>
      </div>
    );
  }
}

export default Main;
