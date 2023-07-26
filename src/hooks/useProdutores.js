import { useState, useEffect } from "react";
import { getProdutores } from "../services/getDados";

export default function useProdutores() {
  const [titulo, setTitulo] = useState('');
  const [lista, setLista] = useState([]);

  useEffect(() => {
    const retorno = getProdutores();
    setTitulo(retorno.title);
    setLista(retorno.lista)
  }, [])

  return [titulo, lista];
}
