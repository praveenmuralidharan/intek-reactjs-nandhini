import React, {Component} from 'react';
import { Header } from './common/Header';
import { Footer } from './common/Footer';

class Layout extends Component{
 render(){
    return (
        <div>
            <Header user_name="Jocky"/>
            {this.props.children}
            <Footer/>
        </div>
    );
    }
}
  
export { Layout };