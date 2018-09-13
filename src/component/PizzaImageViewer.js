import React, {Component} from 'react';


export default class PizzaViewer extends Component{
    render(){ 
       
        return(
            <section className="pizzaViewer">
                <div className="pizza">
                    <div className="pizzaBoard">
                        <img src={require('../assets/board.svg')} alt="board"/>
                    </div>
                    <div className="pizzaBase">
                        <img src={require('../assets/base.svg')} alt="board"/>
                    </div>
                    <div className="pizzaToppings">
                        {
                            this.props.selectedToppings.map(
                                topping=>{
                                    return(
                                        <img key={topping.name} src={require(`../assets/toppings/${topping.contentImage}`)} alt={topping.name}/>
                                    )
                                }
                            )
                        }
                    </div>
                </div>
            </section>
        )
    }
}

