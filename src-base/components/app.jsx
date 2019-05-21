
import React, {Component} from 'react'
import logo from '../logo.svg'


    class App extends Component{

        render(){
            return(
                <div>
                    <img className="myLogo" alt="logo" src={logo}/>
                    <p className="title"> React App 脚手架</p>
                </div>
            )
        }
    }


export default App
