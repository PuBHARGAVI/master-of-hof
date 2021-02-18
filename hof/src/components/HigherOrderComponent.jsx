import React, { Component } from 'react';

class HigherOrderComponent extends Component {
    constructor(){
        super();
        this.state = {
            userData: [
                { id: '1', name: 'Joe', user_type: 'Developer', age:31, years:11 },
                { id: '2', name: 'Hill', user_type: 'Designer', age:26, years:4 },
                { id: '3', name: 'John', user_type: 'Teacher', age:24,years: 2},
                { id: '4', name: 'Sam', user_type: 'Entreprenuer', age:58,years:25},
                { id: '5', name: 'Jack', user_type: 'Designer', age:43, years: 18}

            ]
        }
    }
  
// display all users
renderItems = () => {
    const data = this.state.userData;
    const mapRows = data.map((item) => (
        <React.Fragment key={item.id}>
            <li className="list-elements">
                <span>Id: {item.id}</span>
                <span>Name : {item.name}</span>
                <span>User Type: {item.user_type}</span>
           </li>
        </React.Fragment>
    ));
    return mapRows;
};


renderUsersBasedOnUserType = () => {
    const maprows = this.state.userData.filter(user => {
        if (user.user_type === "Designer")
            return true;
    }).map(user => {
        return (
            <div key={user.id} className="list-elements">
                <span>ID: {user.id}</span>
                <span>Name: {user.name}</span>
                <span>User Type: {user.user_type}</span>
            </div>
        );
    }
    );

    return maprows;
}

renderUsersBasedOnFirstCharacter = () => {
    const maprows = this.state.userData.filter(user => {
        if (user.name[0] === "J")
            return true;
    }).map(user => {
        return (
            <div key={user.id} className="list-elements">
                <span>ID: {user.id}</span>
                <span>Name: {user.name}</span>
                <span>User Type: {user.user_type}</span>
            </div>
        );
    });
    return maprows;
}
renderUsersBasedOnAge = () => {
    const maprows = this.state.userData.filter(user => {
        if (user.age > 28 && user.age < 50)
            return true;
    }).map(user => {
        return (
            <div key={user.id} className="list-elements">
                <span>ID: {user.id}</span>
                <span>Name: {user.name}</span>
                <span>User Type: {user.user_type}</span>
            </div>
        );
    });

    return maprows;
}
renderDesignersBasedOnYears = () => {
    const sum = this.state.userData.filter(user => {
        if (user.user_type === "Designer")
            return true;
    }).reduce((total, user) => total += user.years, 0);

    return sum;
}
render() {
        //React.Fragment is used to combine multiple elements
    return(
    <React.Fragment>
        <h1>Display all users</h1>
        <div class="displaybox">
        <p>{this.renderItems()} </p>
        </div>
        <h1>Display based on usertype</h1>
        <div class="displaybox">
            <p>{this.renderUsersBasedOnUserType()} </p>
        </div>
        <h1>Filter all data starting with J</h1>
        <div class="displaybox">
            <p>{this.renderUsersBasedOnFirstCharacter()} </p>
        </div>
        <h1>Filter all data based on age greaterthan 28 and age lessthan or equal to 50  </h1>
        <div class="displaybox">
            <p>{this.renderUsersBasedOnAge()} </p>
        </div>
        <h1>Find the total years of designers </h1>
        <div class="displaybox">
            <p>{this.renderDesignersBasedOnYears()} </p>
        </div>
    </React.Fragment>);
    }
}



export default HigherOrderComponent;