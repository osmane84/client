import React from 'react';
import { withFormik, Form, Field } from 'formik';
import * as Yup from 'yup';
import './Devis.css';
import Wilaya from './Wilaya';

const listWilaya =  Wilaya;

const FormikDevis = ({ values, errors, touched }) =>(
   
        <Form className="devis-form"> 
        <div className="row start">
            <span className="start-badge">Départ</span>
            <div className="col-md-6">
                <div className="devis-validator">
                    <label htmlFor="StartAdress">Adresse</label> 
                    <Field type="text" 
                        name="StartAdress" 
                        className={touched.StartAdress && errors.StartAdress ? "form-control is-invalid": "form-control" } 
                        placeholder="Adresse de départ"
                    />
                    {touched.StartAdress && errors.StartAdress &&
                        <span className="invalid-feedback">
                            { errors.StartAdress } 
                        </span>
                    }
                </div> 
            </div> 
            <div className="col-md-3">
                <div className="devis-validator">
                    <label htmlFor="StartZipCode">Code postal</label> 
                    <Field type="text" 
                        name="StartZipCode" 
                        className={touched.StartZipCode && errors.StartZipCode ? "form-control is-invalid": "form-control" } 
                        placeholder="Code postal"
                    />
                    {touched.StartZipCode && errors.StartZipCode &&
                        <span className="invalid-feedback">
                            { errors.StartZipCode } 
                        </span>
                    }
                </div> 
            </div> 
            <div className="col-md-3">
                <div className="devis-validator">
                    <label htmlFor="StartTown">Wilaya</label> 
                    <Field component="select"  name="StartTown"  className="form-control">
                          {listWilaya && listWilaya.map((elem, index)=>
                            <option key={index}>{elem.name}</option>
                        )} 
                    </Field>
                </div> 
            </div> 
            
            <div className="col-md-6">
                <div className="devis-validator">
                    <label htmlFor="StartLevel">Etage</label> 
                    <Field type="number" 
                        name="StartLevel" 
                        className={touched.StartLevel && errors.StartLevel ? "form-control is-invalid": "form-control" } 
                    />
                    {touched.StartLevel && errors.StartLevel &&
                        <span className="invalid-feedback">
                            { errors.StartLevel } 
                        </span>
                    }
                </div> 
            </div> 
            <div className="col-md-6">
                <div className="devis-validator">
                    <div className="custom-control custom-checkbox mr-sm-2">
                        <Field type="checkbox" name="StartElevator" className="custom-control-input" id="StartElevator" checked={values.StartElevator}/>
                        <label className="custom-control-label" htmlFor="StartElevator">Ascenseur</label>
                    </div>
                </div>
            </div>
        </div>
        <div className="row came">
            <span className="came-badge">Arrivée</span>
            <div className="col-md-6">
                <div className="devis-validator">
                    <label htmlFor="CameAdress">Adresse</label> 
                    <Field type="text" 
                        name="CameAdress" 
                        className={touched.CameAdress && errors.CameAdress ? "form-control is-invalid": "form-control" } 
                        placeholder="Adresse d'arrivée"
                    />
                    {touched.CameAdress && errors.CameAdress &&
                        <span className="invalid-feedback">
                            { errors.CameAdress } 
                        </span>
                    }
                </div> 
            </div> 
            <div className="col-md-3">
                <div className="devis-validator">
                    <label htmlFor="CameZipCode">Code postal</label> 
                    <Field type="text" 
                        name="CameZipCode" 
                        className={touched.CameZipCode && errors.CameZipCode ? "form-control is-invalid": "form-control" } 
                        placeholder="Code postal"
                    />
                    {touched.CameZipCode && errors.CameZipCode &&
                        <span className="invalid-feedback">
                            { errors.CameZipCode } 
                        </span>
                    }
                </div> 
            </div> 
            <div className="col-md-3">
                <div className="devis-validator">
                    <label htmlFor="CameTown">Wilaya</label> 
                    <Field component="select"  name="CameTown"  className="form-control">
                          {listWilaya && listWilaya.map((elem, index)=>
                            <option key={index}>{elem.name}</option>
                        )} 
                    </Field>
                </div> 
            </div> 
            
            <div className="col-md-6">
                <div className="devis-validator">
                    <label htmlFor="CameLevel">Etage</label> 
                    <Field type="number" 
                        name="CameLevel" 
                        className={touched.CameLevel && errors.CameLevel ? "form-control is-invalid": "form-control" } 
                    />
                    {touched.CameLevel && errors.CameLevel &&
                        <span className="invalid-feedback">
                            { errors.cametLevel } 
                        </span>
                    }
                </div> 
            </div> 
            <div className="col-md-6">
                <div className="devis-validator">
                    <div className="custom-control custom-checkbox mr-sm-2">
                        <Field type="checkbox" name="CameElevator" className="custom-control-input" id="CameElevator" checked={values.CameElevator}/>
                        <label className="custom-control-label" htmlFor="CameElevator">Ascenseur</label>
                    </div>
                </div>
            </div>
        </div>
        <div className="row value">
            <span className="value-badge">Estimer</span>
            <div className="col-md-4">
                <div className="devis-validator">
                    <label htmlFor="Volume">Volume (M³)</label> 
                    <Field type="text" 
                        name="Volume" 
                        className={touched.Volume && errors.Volume ? "form-control is-invalid": "form-control" } 
                        placeholder="Volume de votre déménagement"
                        
                    />
                    {touched.Volume && errors.Volume &&
                        <span className="invalid-feedback">
                            { errors.Volume } 
                        </span>
                    }
                </div> 
            </div> 
            <div className="col-md-8">
                <div className="devis-validator">
                    <Field component="textarea"
                        name="Description" 
                        className={touched.Description && errors.Description ? "form-control is-invalid": "form-control" } 
                        placeholder="Plus d'infos sur l'accessibilité, stationnement ..."
                        rows="3"
                    ></Field>
                    {touched.Description && errors.Description &&
                        <span className="invalid-feedback">
                            { errors.Description } 
                        </span>
                    }
                </div> 
            </div>
        </div>
        <div className="row contact">
            <span className="contact-badge">Contact</span>
            <div className="col-md-4">
                <div className="devis-validator">
                    <label htmlFor="Name">Nom</label> 
                    <Field type="text" 
                        name="Name" 
                        className={touched.Name && errors.Name ? "form-control is-invalid": "form-control" } 
                        placeholder="Nom complet"
                    />
                    {touched.Name && errors.Name &&
                        <span className="invalid-feedback">
                            { errors.Name } 
                        </span>
                    }
                </div> 
            </div> 
            <div className="col-md-4">
                <div className="devis-validator">
                    <label htmlFor="Email">Email</label> 
                    <Field type="text" 
                        name="Email" 
                        className={touched.Email && errors.Email ? "form-control is-invalid": "form-control" } 
                        placeholder="Adresse e-mail valide"
                    />
                    {touched.Email && errors.Email &&
                        <span className="invalid-feedback">
                            { errors.Email } 
                        </span>
                    }
                </div> 
            </div> 
            <div className="col-md-4">
                <div className="devis-validator">
                    <label htmlFor="Phone">Téléphone</label> 
                    <Field type="text" 
                        name="Phone" 
                        className={touched.Phone && errors.Phone ? "form-control is-invalid": "form-control" } 
                        placeholder="Nom complet"
                    />
                    {touched.Phone && errors.Phone &&
                        <span className="invalid-feedback">
                            { errors.Phone } 
                        </span>
                    }
                </div> 
            </div> 
        </div>
        <hr/>
        <div className="text-center">
        <button className="btn btn-md btn-info" type="submit">COMPARER</button> 
        </div>
        <hr/>  
        </Form>

);


const Devis = withFormik({
    
    mapPropsToValues() {
        return {
            StartAdress : 'test',
            StartTown : 'Tizi Ouzou',
            StartZipCode : '15000',
            StartLevel: 0,
            StartElevator : false,
            CameAdress : 'test',
            CameTown : 'Alger',
            CameZipCode : '16000',
            CameLevel: 0,
            CameElevator : true,
            Volume : '',
            Description : 'test',
            Name : 'test',
            Email: 'test@f.vom',
            Phone:'test'
        }
    },
    validationSchema: Yup.object().shape({
        StartAdress : Yup.string().required('Champ obligatoire'),
        StartZipCode: Yup.string().matches(/^[0-9]{5}$/,'Code postal a 5 numéros').required('Champ obligatoire'),
        StartLevel: Yup.number().required('Champ obligatoire'),
        CameAdress : Yup.string().required('Champ obligatoire'),
        CameZipCode: Yup.string().matches(/^[0-9]{5}$/,'Code postal a 5 numéros').required('Champ obligatoire'),
        CameLevel: Yup.number().required('Champ obligatoire'),
        Volume : Yup.string().matches(/^\d+(?:[,]\d+)?$/, 'Chiffre avec virgule uniquement').required('Champ obligatoire'),
        Description : Yup.string(),
        Name :Yup.string().required('Champ obligatoire'), 
        Email: Yup.string().email('Email non valide').required('Champ obligatoire'),
        Phone:Yup.string().required('Champ obligatoire'),


    }),
    handleSubmit(values) {
        console.log(JSON.stringify(values));
    }

})(FormikDevis);




export default Devis;