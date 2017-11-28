import React, { Component } from 'react';
import DataStore from 'flux/stores/DataStore.js'

export default class Home extends Component {
    render() {
        let allData = DataStore.getAll();
        console.log(allData);

        return (
            <div>
                <h2>Hello World!</h2>
            </div>
        )
    }
}

