import {OPEN_MODAL,CLOSE_MODAL, SEARCH_ENTITIES, SEARCH_ASYNC_ENTITIES} from '../actions-types/index'
import { setTimeout } from 'timers';
export function openModal(mediaId){
    return {
        type:OPEN_MODAL,
        payload:{
            mediaId:mediaId
        }
    }

}
export function closeModal(mediaId){
    return {
        type:CLOSE_MODAL
    }

}

export function searchEntities(query){
    return {
        type:SEARCH_ENTITIES,
        payload:{
            query:query
        }
    }

}

export function searchAsyncEntities(query){
    return (dispatch)=>{
        // llamar al api rest
        // fetch 
        setTimeout(()=>{
            dispatch(searchEntities(query))    

        },5000)
    }
    

}