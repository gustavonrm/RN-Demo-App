import React from 'react';
import { View } from 'react-native';

class FontAwesomeIcon extends React.Component {
    render() {
        return <View testID={ this.props.testID } />;
    }

    loadFont() {
        return Promise.resolve({});
    }
}

export { FontAwesomeIcon };
