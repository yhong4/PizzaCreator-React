import React, {Component} from 'react'

class Detail extends Component{
    render(){
        return(
            <section>
                <h2>Enter your details</h2>
                <div className="detailsContainer">
                    <div className="detail">
                        <label htmlFor="name">NAME</label>
                        <input id="name" type="text" />
                    </div>
                    <div className="detail">
                        <label htmlFor="email">EMAIL</label>
                        <input id="email" type="text" />
                    </div>
                    <div className="detail">
                        <label htmlFor="confirmEmail">CONFIRM EMAIL</label>
                        <input id="confirmEmail" type="text" />
                    </div>
                    <div className="detail">
                        <label htmlFor="address">ADDRESS</label>
                        <input id="address" type="text" />
                    </div>
                    <div className="detail">
                        <label htmlFor="postcode">POST CODE</label>
                        <input id="postcode" type="text" />
                    </div>
                    <div className="detail">
                        <label htmlFor="contact">CONTACT NUMBER</label>
                        <input id="contact" type="text" />
                    </div>
                </div>
            </section>
        );
    }
}

export default Detail;