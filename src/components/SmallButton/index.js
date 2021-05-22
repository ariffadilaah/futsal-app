import React from 'react'
import { StyleSheet, Text, TouchableOpacity, Dimensions } from 'react-native'
import { WARNA_UTAMA } from '../../utils/constants'

const SmallButton = ({ text }) => {
    return (
        <TouchableOpacity style={styles.container}>
            <Text style={styles.text}>{text}</Text>
            </TouchableOpacity>
    )
}

export default SmallButton

const windowsHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
    container : {
        backgroundColor : WARNA_UTAMA,
        padding: 3,
        borderRadius: 5,
        height: windowsHeight*0.03
    },
    text : {
        color: '#FFFFFF',
        fontSize: 10,
        fontFamily: 'Poppins-Bold',
        textAlign: 'center',
    }
})
