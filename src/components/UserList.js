import React, { Component } from 'react';
import './UserList.css';

class UserList extends Component {

    state = {
        users: []
    }

    componentDidMount() {
        fetch('https://randomuser.me/api/?results=10')
            .then(response => response.json())
            .then(data => {
                const users = [];
                data.results.forEach(element => {
                    const user = {
                        photo: element.picture.large,
                        firstName: element.name.first,
                        lastName: element.name.last,
                        email: element.email,
                        id: element.id.value
                    }
                    users.push(user);
                })
                this.setState({ users });
            })
    }

    render() {
        return (
            <div className="container">
                {this.state.users.map(user => (
                    <div key={user.id} className="person">
                        <div className="photo">
                            <img src={user.photo} alt="" />
                        </div>
                        <div className="data">
                            <div>Imie: {user.firstName}</div>
                            <div>Nazwisko: {user.lastName}</div>
                            <div>Email: {user.email}</div>
                        </div>
                    </div>
                ))}
            </div>
        )
    }
}

export default UserList;