import React from 'react';
import PropTypes from 'prop-types';
import {mapData} from "./data/map-data.jsx";
import {WashIcon} from "./objects/icon.jsx";

import './css/app.scss';

export default class App extends React.Component {
    constructor(props) {
        super(props);
    }

    _getIcon(data){
        return <WashIcon id={data.id} imgName={data.imgName} description={data.description}/>
    }

    render() {
        const iconList = mapData.map((washObj) => this._getIcon(washObj) );
        return (
            <div className="app">
                <h1>Wash Icons</h1>
                {iconList}
            </div>
        );
    }
}
