import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Landing extends Component{
    renderContent(){
        switch (this.props.auth){
            case null:
                return;
            case false:
                return ;
            default:
                return <Link to="/surveys" className="waves-effect waves-light btn-large red lighten-1">
                    Proceed to Dashboard
                    </Link>;
        }
    }


    render() {
        return (
            <div style={{ textAlign: 'center' }}>
            <br/><br/><br/><br/>
            <h1>Collect feedback from Users</h1>
            <div className="center">
            {this.renderContent()}
            </div>
            </div>
        );
    }
}

function mapStateToProps({ auth }){
    return { auth };
}


export default connect(mapStateToProps)(Landing);