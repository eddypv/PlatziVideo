import React, {Component} from 'react';
import HomeLayout from '../components/home_layout'
import Categories from '../../categories/components/categories'
import Related from '../components/related'
import ModalContainer from '../../widgets/containers/modal'
import Modal from '../../widgets/components/modal'
import HandleError from  '../../error/containers/handle-error';
import VideoPlayer from '../../player/container/video-player'
class Home extends Component{
    
    state = {
        modalVisible:false
    }
    handleOpenModal = (event)=>{
        this.setState({
            modalVisible:true
        })
    }
    handleCloseModal =(event)=>{
        this.setState({
            modalVisible:false
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
                <VideoPlayer />
                <Categories 
                    categories={this.props.data.categories} 
                    handleOpenModal={this.handleOpenModal}
                />
                {
                    this.state.modalVisible &&
                    <ModalContainer>
                        <Modal
                            handleClick={this.handleCloseModal}
                        >
                        </Modal>
                    </ModalContainer>
                }
            </HomeLayout>
        </HandleError>
        )
    }
}
export default Home;