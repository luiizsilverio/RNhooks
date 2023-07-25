import React, { useEffect, useState } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import logoPng from '../assets/logo.png';
import { getHeader } from '../services/getDados';

function Header () {
    const [topo, setTopo] = useState({
        title: '',
        subtitle: ''
    })

    useEffect(() => {
        setTopo(getHeader);
    }, [])

    return (
        <View style={styles.container}>
            <Image source={logoPng} style={styles.imagem} />
            <Text style={styles.title}>{ topo.title }</Text>
            <Text style={styles.subtitle}>{ topo.subtitle }</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#F1F1F1',
        padding: 16,
    },
    imagem: {
        width: 70,
        height: 28
    },
    title: {
        marginTop: 24,
        fontSize: 26,
        lineHeight: 42,
        fontWeight: 'bold',
        color: '#464646'
    },
    subtitle: {
        fontSize: 16,
        lineHeight: 26,
        color: '#a3a3a3'
    }
})

export default Header;
