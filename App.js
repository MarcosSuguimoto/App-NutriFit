import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity} from 'react-native';
import Carousel from 'react-native-snap-carousel';

export default function MainScreen() {
  const carouselItems = [
    {title: 'Interação entre o Nutricionista e o Paciente'},
    {title: 'Custo Acessível'},
    {title: 'Orientações Alimentares Individuais'}
  ];

  function renderItem ({item}) {
    return (
      <View style={styles.carouselItemContainer}>
        <Text style={styles.carouselItemtitle}>{item.title}</Text>
      </View>
    );
  }

  return (
    <ScrollView>
      <View style={styles.container}>
          <View style={styles.greenStrip} />
          <Image source={require('./images/logo.png')} style={styles.logo} />
          <View style={styles.header}>
            <Text style={styles.welcome}>Seja bem-vindo(a) à NUTRIFIT</Text>
            <Text style={styles.headerText}>Conectamos Nutricionistas e Pacientes!</Text>
            <Image source={require('./images/paginaInicial.png')} style={styles.home} />
          </View>
          <View style={styles.formContainer}>
            <Text style={styles.carouselText}>Vantagens de utilizar nossa plataforma:</Text>
          </View>
          <Carousel
            data={carouselItems}
            sliderWidth={400}
            itemWidth={300}
            renderItem={renderItem}
            autoplay={true}
            autoplayInterval={3000}
            loop={true}
            swipeVelocityImpact={0.2}
          />
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Agendamento</Text>
          </TouchableOpacity>
          <View style={styles.footer} />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  greenStrip: {
    backgroundColor: '#18b87a',
    width: '100%',
    height: 40, // altura da faixa
  },
  logo: {
    position: 'absolute',
    top: 50,
    left: 10,
    width: 100, // Largura da imagem
    height: 15, // Altura da imagem
  },
  welcome: {
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: 15,
    marginBottom: 10,
  },
  header: {
    height: 305,
    width: '100%',
    marginBottom: 60,
    marginTop:40,
    backgroundColor: '#eef6f8',
  },
  headerText: {
    fontSize: 15,
    marginTop: 20,
    color: 'black',
    fontStyle: 'italic',
    textAlign: 'center',
  },
  home: {
    width: 300,
    height: 200,
    resizeMode: 'contain',
    alignSelf: 'center',
    justifyContent: 'center',
  },
  formContainer: {
    paddingHorizontal: 20,
  },
  carouselText: {
    color: 'orange',
    textAlign: 'center',
    fontSize: 15,
    marginTop: -45,
  },
  carouselItemContainer: {
    marginLeft: 40,
    backgroundColor: '#87CEFA',
    borderRadius: 4,
    height: 60,
    justifyContent: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  carouselItemtitle: {
    textAlign: 'center',
    fontSize: 20,
    fontStyle: 'italic',
    color: 'black',
  },
  button: {
    backgroundColor: '#18b87a',
    width: 200,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    marginBottom: 190,
    marginTop: 50,
  },
  buttonText: {
    color: 'white',
    fontSize: 20,
  },
  footer: {
    backgroundColor: 'orange',
    width: '100%',
    height: 40,
  },
});