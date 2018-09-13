import React, {Component} from 'react'
import Detail from './Detail'
import Topping from './Topping'
import Summary from './Summary'

class Container extends Component{
    render(){
        return(
            <section className="form">
                <form>
                    <Detail />
                    <Topping 
                    selectedToppings={this.props.selectedToppings}
                    onToppingClick={this.props.onToppingClick}
                    toppings={this.props.toppings}
                    />
                    <Summary 
                    selectedToppings={this.props.selectedToppings}
                    pizzaPrice={this.props.pizzaPrice}
                    />
                    
                </form>
            </section>
        )
    }
}

export default Container;