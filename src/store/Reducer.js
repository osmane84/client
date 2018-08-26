const initialState = {
    VolumeStored: 5,
    Qte: 1
}

const Reducer = (state = initialState, action ) =>{
    if(action.type === 'VOL_UP'){
        return {
            ...state,
             

            }
     }
     
    return state

}

export default Reducer;