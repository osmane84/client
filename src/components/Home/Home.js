import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './Home.css'
class Home extends Component {
       
    render() {
        return (
        <div className="home">
            <div className="row app-title justify-content-center">
                <div className="col text-center">
                     <h1>comparateur des tarifs</h1>
                </div>
            </div>
            <div className="row app-header">
                 <div className="col-md-4">
                    <div className="app-header-transport">
                        <img src="/assets/media/app_header_transport.png" alt="transport et logistique court et long trajet" />
                        <hr className="my-4"/>
                        <h1>transport</h1>
                        <hr className="my-4"/>
                        <h5>Comparez les prix compétitifs sur le marché de transport, ainsi que les délais d'expédition de vos colis.</h5>
                        <NavLink className="btn btn-md btn-danger" to="/demenagement" >Demandez un Devis gratuit</NavLink>
                    </div>
                </div>

                <div className="col-md-4">
                    <div className="app-header-transit">
                        <img src="/assets/media/app_header_transit.png" alt="devis transitaire" />
                        <hr className="my-4"/>
                        <h1>transit</h1>
                        <hr className="my-4"/>
                        <h5>Obtenez plusieurs propositions de devis facilement, pour dédouaner vos conteneurs arrivants sur la rade.</h5>
                        <NavLink className="btn btn-md btn-danger" to="/demenagement" >Demandez un Devis gratuit</NavLink>
                    </div>
                </div>    

                <div className="col-md-4">
                    <div className="app-header-demenager">
                        <img src="/assets/media/app_header_demenager.png" alt="devis déménagement" />
                        <hr className="my-4"/>
                        <h1>demenager</h1>
                        <hr className="my-4"/>
                        <h5>Comparez les meilleures offres de déménageurs et bénéficiez de meilleur rapport qualité de service et prix.</h5>
                        <NavLink className="btn btn-md btn-danger" to="/demenagement" >Demandez un Devis gratuit</NavLink>
                    </div>
                </div>    
            </div>
            <div className="row app-feature justify-content-center">
                 <div className="col-8 text-center">
                     <h1>Comment ça marche ?</h1>
                     <p>Une fois votre demande est envoyée, tous les professionnels inscris sur notre plateforme et  qui exercent dans votre région seront notifiés,  
                     ils vont vous  envoyer des propositions de devis. à ce moment vous choisirez l’offre qui vous convient plus.</p>  
                </div>
             </div>
        </div>
        )
    }
}
   
export default Home;