import React, {Component} from 'react';


export default class Summary extends Component{

    totalPrice(selectedToppings, pizzaPrice){
        let totalPrice=pizzaPrice;
        selectedToppings.forEach(selectedTopping => {
            totalPrice += selectedTopping.price;          
        });
  
        return totalPrice.toFixed(2);
    }

    render(){               
        return(
            <section>
                <h2>Summary</h2>
                <div>
                    <ul className="items"> 
                        <li>
                            <span>$9.90</span>
                            <span>Pizza</span>
                        </li>                             
                        {this.props.selectedToppings.map(selectedTopping => {                                                  
                            return(                          
                                <li key={selectedTopping.name}>
                                    <span>$0.99</span>
                                    <span>{selectedTopping.name}</span>                                  
                                </li>
                            )
                        })
                    }                   
                    </ul>
                </div>
                <hr/>
                <p className='totalPrice'>{'Total: $'+
                    this.totalPrice(this.props.selectedToppings,this.props.pizzaPrice)}
                </p>
                <button type="submit">Place order</button>
            </section>
        )
    }
        
    }

