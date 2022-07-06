import React, { useState, useEffect } from "react";
import { View, StyleSheet, Modal, Button, TouchableHighlight, Linking , Text, SafeAreaView, Image  } from 'react-native';
import ImagedCarouselCard from "react-native-imaged-carousel-card";

const Integrantes = () => {
   
    return (
        <View style={styles.container}>
            <View><Image
                style={styles.scanner}
                source={require('../../../assets/logo.png')}
            /></View>
            <View style={{ padding: 10 }}>
                <TouchableHighlight onPress={() => { Linking.openURL('https://github.com/viniciusofc') }}>
                    <ImagedCarouselCard style={{ padding: 10 }}
                        text={'VINICIUS REIS Full Stack'}
                        width={160}
                        height={160}
                        shadowColor="#051934"
                        source={require('../../../assets/logo.png')} />
                </TouchableHighlight>
            </View>
            <View style={{ padding: 10 }}>
                <TouchableHighlight onPress={() => { Linking.openURL('https://github.com/viniciusofc') }}>
                    <ImagedCarouselCard
                        text={'VINICIUS REIS Full Stack'}
                        width={160}
                        height={160}
                        shadowColor="#051934"
                        source={require('../../../assets/logo.png')} />
                </TouchableHighlight>
            </View>
            <View style={{ padding: 10 }}>
                <TouchableHighlight onPress={() => { Linking.openURL('https://github.com/viniciusofc') }}>
                    <ImagedCarouselCard
                        text={'VINICIUS REIS'}
                        width={160}
                        height={160}
                        shadowColor="#051934"
                        source={require('../../../assets/logo.png')} />
                </TouchableHighlight>
            </View>
            <View style={{ padding: 10 }}>
                <TouchableHighlight onPress={() => { Linking.openURL('https://github.com/viniciusofc') }}>
                    <ImagedCarouselCard
                        text={'VINICIUS REIS Full Stack'}
                        width={160}
                        height={160}
                        shadowColor="#051934"
                        source={require('../../../assets/logo.png')} />
                </TouchableHighlight>
            </View>
            <View style={{ padding: 10 }}>
                <TouchableHighlight onPress={() => { Linking.openURL('https://github.com/viniciusofc') }}>
                    <ImagedCarouselCard
                        text={'VINICIUS REIS Full Stack'}
                        width={160}
                        height={160}
                        shadowColor="#051934"
                        source={require('../../../assets/logo.png')} />
                </TouchableHighlight>
            </View>
            <View style={{ padding: 10 }}>
                <TouchableHighlight onPress={() => { Linking.openURL('https://github.com/viniciusofc') }}>
                    <ImagedCarouselCard
                        text={'VINICIUS REIS Full Stack'}
                        width={160}
                        height={160}
                        shadowColor="#051934"
                        source={require('../../../assets/logo.png')} />
                </TouchableHighlight>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        backgroundColor: "#fff",
        justifyContent: 'center'
    },
    container2: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        backgroundColor: "#ffff",
        justifyContent: 'center'
    },
      scanner: {
        width: 330,
        height: 55,
        resizeMode: 'center',
      },

});

export default Integrantes;