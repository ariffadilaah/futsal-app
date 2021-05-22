import React, { Component } from 'react'
import { StyleSheet, Text, View, Image, Dimensions, ScrollView } from 'react-native'
import { BoxKlub, HeaderInformation, Layanan, SmallButton, UpdateScore } from '../../components';
import { ImageBanner } from '../../assets';

class Home extends Component {
    constructor(props) {
        super(props);
            this.state= {
                layanan: 'booking'
        } 
    }

    clickLayananan(value){
        this.setState({
            layanan: value
        })
    }
    render() {
        return (
            <View style={styles.page}>
                <ScrollView vertical showsVerticalScrollIndicator={false}>
                <View style={styles.wrapperHeader}>
                <HeaderInformation />
                <Image source={ImageBanner} style={styles.banner} />
            </View>
            <View style={styles.wrapperLabel}>
            <Text style={styles.label}>Ayo 
                <Text style={styles.textBold}> Berbakar lemak dengan futsal </Text> 
            </Text>
            </View>
            <View style={styles.layanan}>
                <Layanan title="Paket Langganan" onPress={() => this.clickLayananan('paket')}
                active={this.state.layanan === 'paket' ? true : false}
                />
                <Layanan title="Booking Lapangan" onPress={() => this.clickLayananan('booking')}
                active={this.state.layanan === 'booking' ? true : false}
                />
                <Layanan title="Join Team" onPress={() => this.clickLayananan('join')}
                active={this.state.layanan === 'join' ? true : false}
                />
            </View>
            <View style={styles.labelSparing}>
            <Text style={styles.label}>Pilih Team
                <Text style={styles.textBold}> Sparing </Text> Kamu 
            </Text>
                <SmallButton text="Lihat Semua"/>
            </View>
            <View style={styles.wrapperScroll}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View style={styles.klub}>
                <BoxKlub klub="Vamos FC" statistik="WWDWDWL"/>
                <BoxKlub klub="VE FC" statistik="WLDWLD"/>
                <BoxKlub klub="An-Nahl FA" statistik="WLWWLW"/>
                <BoxKlub klub="Awang Long FA" statistik="WWWWDDD"/>
                <BoxKlub klub="Arsyil FC" statistik="WWDWDW"/>
                <BoxKlub klub="Bogor FC" statistik="WWDWLW"/>
            </View>
            </ScrollView>
            </View>
            <View style={styles.labelSparing}>
            <Text style={styles.label}>Update Score 
            </Text>
                <SmallButton text="Lihat Semua"/>
            </View>
            <View style={styles.wrapperScroll}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View style={styles.score}>
                <UpdateScore 
                klub1="Vamos FC"
                klub2="Bogor FC"
                score1="6"
                score2="3"
                date="Jumat, 14 Mei 2021"
                />
                <UpdateScore 
                klub1="Awang Long FA"
                klub2="VE FC"
                score1="4"
                score2="5"
                date="Sabtu, 15 Mei 2021"
                />
            </View>
                <UpdateScore 
                klub1="An-Nahl FA"
                klub2="Arsyil"
                score1="4"
                score2="6"
                date="Minggu, 16 Mei 2021"
                />
            </ScrollView>
            </View>
                </ScrollView>
        </View>
        )
    }
}

export default Home;

const windowsHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
    page : {
        flex : 1,
        backgroundColor: '#ffffff'
    },
    wrapperHeader: {
        paddingHorizontal: 30,
        paddingTop: 30,
    },
    banner: {
        marginTop: windowsHeight*0.016,
        width: '100%',
        height: windowsHeight*0.16
    },
    label: {
        fontSize: 18,
        fontFamily: 'Poppins-Light'
    },
    textBold: {
        fontSize: 18,
        fontFamily: 'Poppins-Bold'
    },
    wrapperLabel: {
        paddingHorizontal: 30,
        marginTop: 14,

    },
    layanan: {
        marginTop: windowsHeight*0.035,
        flexDirection: 'row',
        paddingHorizontal: 30,
        justifyContent: 'space-between'
    },
    labelSparing: {
        flexDirection: 'row',
        paddingHorizontal: 30,
        marginTop: 15,
        justifyContent : 'space-between',
        alignItems: 'center'
    },
    klub: {
        marginTop: 10,
        flexDirection: 'row',
    },
    score : {
        marginTop: 10,
        flexDirection: 'row',
    },
    wrapperScroll: {
        paddingHorizontal: 30,
    }
});
    