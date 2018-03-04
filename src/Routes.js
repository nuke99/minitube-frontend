import React,{Component} from 'react'
import {render} from 'react-dom'
import {BrowserRouter,Switch,Route} from 'react-router-dom'
import cookie from 'react-cookies'


import NavBar from './common/NavBar'
//Pages
import Home from './pages/home'
import Video from './pages/video'

export default class RouteClass extends Component {



    _registerGuestToken() {
        fetch(`${process.env.REACT_APP_API}/api/users/guest-token`,{
            method : 'POST',
        })
        .then(resp => resp.json())
        .then(respJson => {
            console.log('token',respJson);
            if(respJson.status == true) {
                cookie.save('gt',respJson.data)
            }

        }).catch(error => {
            alert('Failed to register Guest Token')
        })
    }

    componentWillMount() {
        const _guestToken = cookie.load('gt');
        console.log('gt',_guestToken)
        if(typeof _guestToken == 'undefined') {
            this._registerGuestToken();
        }
    }

    render() {
        return (
            <BrowserRouter>
                <div>
                    <Route component={NavBar} />
                    <Route 
                        render={({location}) => (
                            <div>
                                <Route exact path="/" component={Home} />
                                <Route path="/video" component={Video} />
                            </div>

                            
                        )}
                    />

                </div>
            </BrowserRouter>
        )
    }
}