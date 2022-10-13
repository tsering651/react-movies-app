import React,{Component} from "react";
import Button from '@mui/material/Button';
import './Header.css'
import logo from '../../assets/logo.svg';


class Header extends Component{
    render(){
        return(
            <header className="app-header">
           <img src={logo} className="app-logo" alt="Movies App Logo" />
            <div className="login-button">
           
                <Button variant="contained" >
                    Login
                </Button>
            </div>
        </header>
        )
    }
}
export default Header;