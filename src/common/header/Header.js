import React,{Component} from "react";
import Button from '@mui/material/Button';
import './Header.css'
import logo from '../../assets/logo.svg';
import Modal  from "react-modal";


class Header extends Component{

    constructor(){
        super();
        this.state={
            modalIsOpen:false
        }
    }
    openModalHandler=()=>
    {
        this.setState({modalIsOpen:true})
    }
    closeModalHandler=()=>{
        this.setState({modalIsOpen:false})
    }
    render(){
        return(
            <div>
            <header className="app-header">
            <img src={logo} className="app-logo" alt="Movies App Logo" />
            <div className="login-button">
           
                <Button variant="contained" onClick={this.openModalHandler} >
                    Login
                </Button>
            </div>
        </header>

        <Modal ariaHideApp={false} isOpen={this.state.modalIsOpen} contentLabel="Login" onRequestClose={this.closeModalHandler}>

        </Modal>
        </div>



        )
    }
}
export default Header;