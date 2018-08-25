import React, {Component} from 'react';
import './SalonCard.css';

class SalonCard extends Component{
    constructor(props){ 
        super(props);
        this.state = {
            Qte : 0,
            volume : 0
        }
    }

    QteDown = () => {
        if(this.state.Qte <= 1 ){
            this.setState({
                Qte : 1,
                volume : this.props.volume
            })   
        }
        this.setState((prevState, props) => ({
            Qte : prevState.Qte - 1,
            volume : (prevState.Qte - 1) * props.volume
        }))
    }

    QteUp = () => {
       this.setState((prevState, props) => ({
           Qte : prevState.Qte + 1,
           volume : (prevState.Qte + 1) * props.volume
       }))
    }

    render(){
        return<div className="col-2" key={this.props.id}>
            <div className="card" >
                <img className="card-img-top" src={this.props.picture} alt={this.props.name}/>
                <div className="card-body">
                    <p>{this.props.name}</p>
                    <div className="card-info">
                        <span>Qte: {this.state.Qte }</span>
                        <span>Vol: {this.state.volume} M³</span>
                    </div>
                    <div className="card-button">
                        <button onClick={ this.QteDown } className="btn btn-link">-</button>
                        <button onClick={ this.QteUp } className="btn btn-link">+</button>
                    </div>
                </div>
                </div>
            </div>
        }
}

export default SalonCard;
