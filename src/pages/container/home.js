import React, {Component} from 'react';
import HomeLayout from '../components/home_layout'
import Categories from '../../categories/components/categories'
import Related from '../components/related'
import ModalContainer from '../../widgets/containers/modal'
import Modal from '../../widgets/components/modal'
import HandleError from  '../../error/containers/handle-error';
import VideoPlayer from '../../player/container/video-player'
import {connect} from 'react-redux';
import {List as list} from 'immutable';
class Home extends Component{
    /*
    state = {
        modalVisible:false
    }*/
    handleOpenModal = (id)=>{
        /*this.setState({
            modalVisible:true,
            media
        })*/
        this.props.dispatch({
            type:'OPEN_MODAL',
            payload:{mediaId:id}
        })
    }
    handleCloseModal =(event)=>{
        /*
        this.setState({
            modalVisible:false
        })*/
        this.props.dispatch({
            type:'CLOSE_MODAL'
        })
    }
    componentDidCatch(error, info){
        this.setState({
            handleError:true
        })

    }
    render(){
        
        return (
        <HandleError>
            <HomeLayout>
                <Related/>
                
                <Categories 
                    categories={this.props.categories} 
                    handleOpenModal={this.handleOpenModal}
                    search={this.props.search}
                />
                {
                    this.props.modal.get('visibility') &&
                    <ModalContainer>
                        <Modal
                            handleClick={this.handleCloseModal}
                        >
                            <VideoPlayer 
                                autoPlay={true} 
                                id={this.props.modal.get('mediaId')}
                                //title={this.state.media.title}
                                //src={this.state.media.src}
                            />
                        </Modal>
                    </ModalContainer>
                }
            </HomeLayout>
        </HandleError>
        )
    }
}
function mapStateToProps(state, props){

    const categories = state.get('data').get('categories').map((categoryId)=>{
        return state.get('data').get('entities').get('categories').get(categoryId)
    })
    let searchResult =list();
    const search = state.get('data').get('search');
    if(search){
        const mediaList = state.get('data').get('entities').get('media');
        searchResult = mediaList.filter((item)=>{
            return item.get('author').toLowerCase().includes(search.toLowerCase())
        }).toList()
    }
    
    return {
        categories:categories,
        search:searchResult,
        modal:state.get('modal')
    }

}
export default connect(mapStateToProps)(Home);