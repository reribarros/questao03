
import React, { useState } from 'react';

import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet
} from 'react-native';

export default function App() {

  const [produto, setProduto] = useState('');
  const [quantidadeInicial, setQuantidadeInicial] = useState('');
  const [movimentacao, setMovimentacao] = useState('');

  const [estoque, setEstoque] = useState(null);
  const [erro, setErro] = useState('');

  // Cadastrar produto e quantidade inicial
  function cadastrarProduto() {

    const quantidade = Number(quantidadeInicial);

    if (
      !produto.trim() ||
      quantidadeInicial.trim() === '' ||
      !Number.isInteger(quantidade) ||
      quantidade < 0
    ) {
      setErro('Informe o produto e uma quantidade inicial válida.');
      return;
    }

    setEstoque(quantidade);
    setErro('');
    setMovimentacao('');
  }

  // Adicionar produtos ao estoque
  function adicionarEstoque() {

    const quantidade = Number(movimentacao);

    if (
      estoque === null ||
      !Number.isInteger(quantidade) ||
      quantidade <= 0 ||
      movimentacao.trim() === ''
    ) {
      setErro('Informe uma quantidade válida.');
      return;
    }

    setEstoque(atual => atual + quantidade);

    setMovimentacao('');
    setErro('');
  }

  // Retirar produtos do estoque
  function retirarEstoque() {

    const quantidade = Number(movimentacao);

    if (
      estoque === null ||
      !Number.isInteger(quantidade) ||
      quantidade <= 0 ||
      movimentacao.trim() === ''
    ) {
      setErro('Informe uma quantidade válida.');
      return;
    }

    if (quantidade > estoque) {
      setErro('Não há estoque suficiente para essa retirada.');
      return;
    }

    setEstoque(atual => atual - quantidade);

    setMovimentacao('');
    setErro('');
  }

  return (

    <View style={styles.container}>

      <Text style={styles.titulo}>
        Controle de Estoque
      </Text>

      <Text style={styles.label}>
        Nome do produto:
      </Text>

      <TextInput
        style={styles.input}
        placeholder="Exemplo: Arroz"
        value={produto}
        onChangeText={setProduto}
      />

      <Text style={styles.label}>
        Quantidade inicial:
      </Text>

      <TextInput
        style={styles.input}
        placeholder="Exemplo: 20"
        keyboardType="numeric"
        value={quantidadeInicial}
        onChangeText={setQuantidadeInicial}
      />

      <Button
        title="Cadastrar produto"
        onPress={cadastrarProduto}
        color="#287A44"
      />

      {estoque !== null && (

        <View style={styles.card}>

          <Text style={styles.produto}>
            {produto}
          </Text>

          <Text style={styles.estoque}>
            Estoque disponível: {estoque} unidades
          </Text>

          {estoque < 5 && (

            <Text style={styles.alerta}>
              Atenção! Estoque abaixo de 5 unidades!
            </Text>

          )}

          <Text style={styles.label}>
            Quantidade da movimentação:
          </Text>

          <TextInput
            style={styles.input}
            placeholder="Digite a quantidade"
            keyboardType="numeric"
            value={movimentacao}
            onChangeText={setMovimentacao}
          />

          <Button
            title="Adicionar estoque"
            onPress={adicionarEstoque}
            color="#287A44"
          />

          <View style={styles.espaco} />

          <Button
            title="Retirar estoque"
            onPress={retirarEstoque}
            color="#C0392B"
          />

        </View>

      )}

      {erro !== '' && (

        <Text style={styles.erro}>
          {erro}
        </Text>

      )}

    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 25,
    backgroundColor: '#F2F8F3',
  },

  titulo: {
    fontSize: 27,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 25,
    color: '#246B3C',
  },

  label: {
    fontSize: 16,
    marginBottom: 8,
    marginTop: 12,
  },

  input: {
    borderWidth: 1,
    borderColor: '#AAA',
    backgroundColor: '#FFFFFF',
    padding: 12,
    borderRadius: 8,
    marginBottom: 15,
  },

  card: {
    backgroundColor: '#FFFFFF',
    padding: 18,
    borderRadius: 12,
    marginTop: 25,
  },

  produto: {
    fontSize: 23,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#246B3C',
  },

  estoque: {
    fontSize: 19,
    textAlign: 'center',
    marginVertical: 15,
    fontWeight: 'bold',
  },

  alerta: {
    color: '#C0392B',
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 15,
  },

  erro: {
    color: '#C0392B',
    textAlign: 'center',
    fontWeight: 'bold',
    marginTop: 15,
  },

  espaco: {
    height: 12,
  },

});
