import { StatusBar } from 'expo-status-bar';
import MapView, { Marker } from 'react-native-maps';
import  { useState } from 'react';
import { TextInput } from 'react-native-gesture-handler';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';


export default function Screen2({navigation}) {
    const [title, setTitle] = useState(" ");
    const [description, setDescription] = useState();
    const [latitude, setLatitude] = useState(0);
    const [longitude, setLongitude] = useState(0);
    
    const setMarcador = (e) => {
        setLatitude(e.nativeEvent.coordinate.latitude);
        setLongitude(e.nativeEvent.coordinate.longitude);
      };
    
    function adicionar(){
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
      })}
        
      const [ponto, setPonto] = useState([]);
      async function fetchData() {
        const res = await fetch("https://mobile.ect.ufrn.br:3003/markers", {
          headers: {
            Authorization: 'Bearer vv7oTsHdw0X9g5e7QbniP58j3iJY4h6AoOSxMIw2X8xjokSHjF',
          },
        });
        const markers = await res.json();
        setPonto(markers);
      }
      fetchData();


    return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      <MapView style={styles.marcador} onPress={setMarcador}>
        <Marker
          coordinate={{ latitude: latitude, longitude: longitude }}
          title={title}
          description={description}
        />
      </MapView>
      
      
    
    <View style ={styles.adicionar}>
    <TextInput style = {styles.dados} 
               placeholder = "Título:" 
               onChangeText={(e) => setTitle(e)}/>
              
    <TextInput style = {styles.dados} 
               placeholder = "Descrição:" 
               onChangeText={(e) => setDescription(e)}/>

    <TouchableOpacity style = {styles.send} onPress = {() => adicionar()}>
                <Text >Adicionar</Text>
    </TouchableOpacity>

    </View>
     
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
      marcador:{
        height: 1100,
        width: 500,
        backgroundColor: '#fff',
        position: 'absolute'
      },
    adicionar:{
        height: 190,
        width: 550,
        backgroundColor: '#111',
       marginTop: 550,
        
       
        alignItems: 'center'
    },
    dados:{
        height: 48,
        width: 320,
        backgroundColor: '#fff',
        borderRadius: 8,
        
       marginTop: 10
    },
    send: {
        height: 48,
        width: 100,
        backgroundColor: '#888',
        borderRadius: 8,
        
       marginTop: 10,
       justifyContent: 'center',
       alignItems: 'center'
    }
});