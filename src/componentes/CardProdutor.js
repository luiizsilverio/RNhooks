import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import Stars from "./Stars";

export default function CardProdutor({ nome, imagem, distancia, estrelas }) {
  return (
    <View style={styles.container}>
      <Image source={imagem} accessibilityLabel={nome} style={styles.imagem} />
      <View style={styles.content}>
        <View style={styles.leftView}>
          <Text style={styles.title}>{ nome }</Text>
          <Stars quantidade={estrelas} />
        </View>
        <Text style={styles.distancia}>{ distancia }</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F1F1F1',
    marginVertical: 8,
    marginHorizontal: 16,
    flexDirection: 'row',
    // alignItems: 'center',
    borderRadius: 6,
    paddingHorizontal: 16,
    paddingVertical: 16,
    gap: 8,

    // Android
    elevation: 4,

    // iOS
    shadowColor: '#000',
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    shadowOffset: {
      width: 0,
      height: 2
    }
  },
  imagem: {
    width: 48,
    height: 48,
    borderRadius: 6,
  },
  content: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 14,
    lineHeight: 22,
    fontWeight: "bold"
  },
  distancia: {
    fontSize: 12,
    lineHeight: 19
  },
  leftView: {
    gap: 4
  }
})
