import React, { useEffect, useState } from "react";
import { FlatList, StyleSheet, Text } from "react-native";
import { getProdutores } from "../services/getDados";
import CardProdutor from "./CardProdutor";

export default function Produtores({ topo: Topo }) {
  const [titulo, setTitulo] = useState('');
  const [lista, setLista] = useState([]);

  useEffect(() => {
    const retorno = getProdutores();
    setTitulo(retorno.title);
    setLista(retorno.lista)
  }, [])

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
