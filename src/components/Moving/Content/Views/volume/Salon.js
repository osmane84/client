import React, { Component } from 'react';
import SalonElements from './elements/SalonElements';
import SalonCard from './SalonCard';


class Salon extends Component {
    
    state ={ List : SalonElements }


    render() {

        return <div className="row">
                    { this.state.List && this.state.List.map(elem =>
                       <SalonCard key={elem.id} id={elem.id} name={elem.name} picture={elem.picture} volume={elem.volume} />
                    )}
                </div>
                   
               
                
    }    
}

export default Salon;