import React, { useEffect, useState } from "react";
import { FlatList, StyleSheet, Text } from "react-native";
import CardProdutor from "./CardProdutor";
import useProdutores from "../hooks/useProdutores";

export default function Produtores({ topo: Topo }) {
  const [titulo, lista] = useProdutores();

  const topoLista = () => {
    return (
      <>
        <Topo />
        <Text style={styles.titulo}>{ titulo }</Text>
      </>
    )
  }

  return (
      <FlatList
        data={lista}
        ListHeaderComponent={topoLista}
        renderItem={({item}) => <CardProdutor {...item} />}
        keyExtractor={({nome}) => nome}
      />
  )
}

const styles = StyleSheet.create({
  titulo: {
    fontSize: 20,
    lineHeight: 32,
    marginHorizontal: 16,
    marginTop: 16,
    fontWeight: 'bold',
    color: '#464646'
  }
})
