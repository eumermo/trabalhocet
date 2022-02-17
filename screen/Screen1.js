import { StatusBar } from 'expo-status-bar';
import MapView, { Marker } from 'react-native-maps';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import  { useState } from 'react';

export default function Screen1({navigation}) {
  const [title, setTitle] = useState(0);
  const [description, setDescription] = useState(0);
  const [latitude, setLatitude] = useState(0);
  const [longitude, setLongitude] = useState(0);
  
  
  fetch("https://mobile.ect.ufrn.br:3003/markers", {
      method: "POST",
      headers: { "Content-Type": "application/json",
        Authorization: "Bearer vv7oTsHdw0X9g5e7QbniP58j3iJY4h6AoOSxMIw2X8xjokSHjF",
      },
      body: JSON.stringify({
        latitude: latitude,
        longitude: longitude,
        title: title,
        description: description,
      }),
    })
      
    const [ponto, setPonto] = useState([]);
    async function fetchData() {
      const res = await fetch("https://mobile.ect.ufrn.br:3003/markers", {
      headers: { Authorization: 'Bearer vv7oTsHdw0X9g5e7QbniP58j3iJY4h6AoOSxMIw2X8xjokSHjF',
        },
      });
      const markers = await res.json();
      setPonto(markers);
    }
    fetchData();
 

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
     
      <MapView style={styles.mapa}>
      
      {ponto.map((marcador) => (
          <Marker
            key={marcador.id}
            title={marcador.title}
            description={marcador.description}
            coordinate={{
              latitude: marcador.latitude,
              longitude: marcador.longitude,
            }}
         >
           
          </Marker>
    ))}
      </MapView>
      
      <TouchableOpacity style={styles.add} onPress ={() => navigation.navigate('Screen2')}>
        <Text style = {styles.adicionar}>Adicionar</Text>
       </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
  mapa:{
    height: 1100,
    width: 500,
    backgroundColor: '#fff',
    position: 'absolute'
  },
  add:{
    height: 70,
    width: 220,
    borderRadius: 40,
   backgroundColor: '#111',
   alignContent: 'center',
   justifyContent: 'center',
   marginTop: 600,
  
   
  },
  adicionar:{
   color: '#888',
   marginLeft: 70,
   fontSize: 20,
   
  },
  
});