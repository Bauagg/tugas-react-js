import React from 'react';
class ComponenClass extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                {this.props.h1Heder()}
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Contact</a></li>
                    <li><a href="#">{this.props.aLink}</a></li>
                </ul>
            </div>
        )
    }
}

export default ComponenClass;