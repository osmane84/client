import React from 'react';
import './SalonCard.css';
import { connect } from 'react-redux';

const SalonCard  = props => { 
        return<div className="col-2" key={props.id}>
            <div className="card" >
                <img className="card-img-top" src={props.picture} alt={props.name}/>
                <div className="card-body">
                    <p>{props.name}</p>
                    <div className="card-info">
                        <span>Qte: {props.Qte }</span>
                        <span>Vol: {props.volume} M³</span>
                    </div>
                    <div className="card-button">
                        <button onClick="" className="btn btn-link">-</button>
                        <button onClick={()=> props.VolUp(props.id)} className="btn btn-link">+</button>
                    </div>
                </div>
                </div>
            </div>
 }



const mapStoreToProps = (store) => {
    return {
        VolumeStored : store.VolumeStored,
        Qte : store.Qte
    }
}



const mapDispatchToProps = (dispatch) => {
    return {
        VolUp : (id) => dispatch({ type:'VOL_UP', key : id }),
    }
}

export default connect(mapStoreToProps, mapDispatchToProps)(SalonCard);
