import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';

class Botao extends Component {
  constructor(props) {
    super(props)
    this.state = {}
    this.styles = StyleSheet.create({
      botao : {
        width : 250,
        height : 50,
        borderWidth : 2,
        borderColor : '#ffffff',
        backgroundColor : '#00BFFF',
        borderRadius : 25
      },
      botaoArea : {
        flex : 1,
        flexDirection : 'row',
        justifyContent : 'center',
        alignItems : 'center'
      },

      textoBotao : {
        fontWeight  :'bold',
        fontSize : 15,
        color : '#ffffff'
      }
    });   
  }

  render() {
    return(
      <TouchableOpacity style={this.styles.botao} onPress={this.props.onPress}>
        <View style={this.styles.botaoArea}>
          <Text style={this.styles.textoBotao}>QUEBRAR BISCOITO</Text>
        </View>
      </TouchableOpacity>
    );
  }
}

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {text : 'Frase do dia...'}
    this.frases = ['Que o vento leve o necessário e me traga o suficiente.', 'Deixe pra trás o que não te leva pra frente.', 'Há momentos em que você precisa escolher entre virar a página ou fechar o livro.', 'Seja humilde, pois, até o Sol com toda sua grandeza se põe e deixa a Lua brilhar.']

    this.quebrarBiscoito = this.quebrarBiscoito.bind(this)
  }
 
  quebrarBiscoito() {
    let s = this.state
    let r = Math.floor(Math.random() * this.frases.length)
    
    s.text = this.frases[r]

    this.setState(s);
  }
  
  render() {
    return (
      <View style={styles.container}>
        <Image source={require('./images/cookie.png')} />
        <Text style={styles.text}>"{this.state.text}"</Text>
        <Botao onPress={this.quebrarBiscoito} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor : '#000000'
  },

  text : {
    fontSize : 17,
    margin : 30,
    fontStyle : 'italic',
    textAlign : 'center',
    color : '#ffffff'
  }
});
