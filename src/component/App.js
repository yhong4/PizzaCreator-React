import React, {Component} from 'react';
import toppings from '../toppings/toppings.json';

import PizzaViewer from './PizzaImageViewer';
import FormViewer from './FormViewer';

export default class App extends Component{
    constructor(props){
        super(props);
        this.state={
        pizzaPrice:9.99,
        selectedToppings:[],
        toppings:toppings,
        };
        this.onToppingClick = this.onToppingClick.bind(this);
    }


    onToppingClick(topping){   
        let selectedToppings = [...this.state.selectedToppings];
        if (selectedToppings.includes(topping)) {
            selectedToppings.splice(selectedToppings.indexOf(topping), 1);
            this.setState({selectedToppings});
            return
        }
        selectedToppings.push(topping);
        this.setState({selectedToppings});
    }

    render() {
        return(
            <div className="pizzaCreatorMainViewer">
                <h1>Pizza Creator</h1>
                <PizzaViewer selectedToppings={this.state.selectedToppings} />
                <FormViewer 
                    selectedToppings={this.state.selectedToppings} 
                    onToppingClick={this.onToppingClick}
                    pizzaPrice={this.state.pizzaPrice}
                    toppings={this.state.toppings}
                />
            </div>
       
        )
    }
}




