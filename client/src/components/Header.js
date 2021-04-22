import React, {Component} from 'react';
import { connect } from 'react-redux';

class Header extends Component{
    renderContent(){
        switch (this.props.auth){
            case null:
                return 'Still Deciding';
            case false:
                return 'Logged Out';
            default:
                return 'Logged In';
        }
    }

    render() {
        return (
            <nav>
                <div className ="nav-wrapper">
                <a href="#" className="brand-logo">Mailer-App</a>
                <ul className="right">
                    {this.renderContent()}
                </ul>
                </div>
            </nav>
        );
    }
}

function mapStateToProps({ auth }){
    return { auth };
}

export default connect(mapStateToProps)(Header);