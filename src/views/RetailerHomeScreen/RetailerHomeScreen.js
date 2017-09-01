import React from 'react';
import Nav from '../../components/Nav/Nav'
import {
    View,
    Text,
    Image,
    StyleSheet,
} from 'react-native';

export default class RetailerHomeScreen extends React.Component {

    static navigationOptions = {
        title: 'Välkommen',
        tabBarIcon: ({ tintColor }) => (
          <Image
            source={require('../../images/icons/prisforslag.png')}
            style={[iconStyle.icon]}
          />
      ),
    };
    render() {
        const iconStyle = require('../../styles/navStyles');
        const { navigate } = this.props.navigation;
        return (
        <View style={styles.container}>
            <Text>Reatiler Home Screen</Text>

        </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});
