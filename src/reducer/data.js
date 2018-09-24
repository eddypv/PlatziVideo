
import schema from '../schemas/index.js';

const initialState={
    entities:schema.entities,
    categories: schema.result.categories,
    search:[]
}
function data(state= initialState, action){
    switch(action.type){
        case 'SEARCH_VIDEO':{
            let result = [];
            
            if(action.payload.query){
                const list = state.data.categories[2].playlist;
                result = list.filter((item)=>{
                    return item.author.includes(action.payload.query)
                })
            }
            
            return {
                ...state,
                search:result
            }
        }
        default: 
            return state

    }

}
export default data;