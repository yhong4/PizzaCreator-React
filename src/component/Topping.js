import React, {Component} from 'react';

class Topping extends Component{

    render() {
        return(           
            <section>
                <h2>Choose your toppings</h2>
                <div className="toppingContainer">  
                    {   this.props.toppings.map(topping => {
                            return (
                                <button 
                                    key={topping.name} 
                                    className={`topping ${this.props.selectedToppings.includes(topping) && 'active'}`} 
                                    type="button" 
                                    onClick={()=>{this.props.onToppingClick(topping)}}
                                    id={topping.name}>                
                                    <img  src={ require(`../assets/toppings/${topping.labelImage}`)} alt={topping.name} />
                                    <span>{topping.name}</span>                   
                                </button>
                            );
                        })
                    }                 
                </div>               
            </section>
       
        )
    }
}



export default Topping;
