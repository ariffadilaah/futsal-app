import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { IconDefaultUser, IconJadwal, IconStadium } from '../../assets'

const HeaderInformation = () => {
    return (
        <View style={styles.container}>
            <View style={styles.userInfo}>
                  <IconDefaultUser />
                  <View style={styles.textWrapper}>
                    <Text style={styles.hello}>Hello Guys, </Text>
                    <Text style={styles.username}>Arif Fadilah</Text>
                  </View>
            </View>
            <View style={styles.jadwalInfo}>
                <View>
                    <Text style={styles.jam}>19.00 WIB</Text>
                    <Text style={styles.tanggal}>Sun,09-05-2021</Text>
                  </View>
                  <View style={styles.iconJadwal}>
                      <IconStadium />
                      <Text style={styles.labelNext}>Next Jadwal</Text>
                  </View>
            </View>
        </View>
    )
}

export default HeaderInformation

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    userInfo: {
        flexDirection: 'row'
    },
    textWrapper: {
        marginLeft: 6,
    },
    hello: {
        fontSize: 13,
        fontFamily: 'Poppins-Light'
    },
    username: {
        fontSize: 13,
        fontFamily: 'Poppins-Bold'
    },
    jam: {
        textAlign: 'right',
        fontSize: 11,
        fontFamily: 'Poppins-Bold'
    },
    tanggal: {
        textAlign: 'right',
        fontSize: 11,
        fontFamily: 'Poppins-Light'
    },
    jadwalInfo: {
        flexDirection: 'row',
    },
    iconJadwal: {
        alignItems: 'center'
    },
    labelNext: {
        fontSize: 11,
        fontFamily: 'Poppins-Light', 
    }
});
