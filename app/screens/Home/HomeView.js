import React, { Component } from 'react'
import { View, Text } from 'react-native'
import styles from './styles'
// images
import { Images } from '../../theme'

class HomeView extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>Home</Text>
                <Image style={styles.logo} source={Images.logo}/>
            </View>
        )
    }
}

export default HomeView
