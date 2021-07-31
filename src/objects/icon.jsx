import React from 'react';
import PropTypes from 'prop-types';
const classNames = require('classnames');

import './../css/icon.scss';

const mouseTest = () => {
    console.log('hi')
}

export class WashIcon extends React.Component {
    constructor(props) {
        super(props);
        this.state = {enabled: false};
    }

    handleClick() {
        this.setState(prevState => ({
            enabled: !prevState.enabled
        }));
    }

    render () {
        return (
            <div className="icon-container">
                <div className="shadow">
                    <div className={this.props.id} onMouseDown={()=>this.handleClick()}/>
                </div>
                <div className={classNames('description', {'show': this.state.enabled })}>
                    {this.props.description}
                </div>
            </div>
        )
    }
}

WashIcon.propTypes = {
    id: PropTypes.string,
    imgName: PropTypes.string,
    description: PropTypes.string
};