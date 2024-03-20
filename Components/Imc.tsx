import { View, TextInput, Text, StatusBar, StyleSheet, Button } from "react-native"; 
import {useState} from 'react';

const Imc = () =>{

  const [peso, setPeso] = useState<string>("");
  const [altura, setAltura] = useState<string>("");

  const [imc, setImc] = useState<number>(0);

 const calculo = (peso : string, altura: string) => {
   let a = 0;
   let b = 0;
   a = parseFloat(peso)
   b = parseFloat(altura)
    setImc( a / (b * b))
  
 }

  return(
    <View>
        <View style={{ flexDirection: 'row', marginLeft: 5, paddingVertical: 10}}>
        <Text style={{fontSize:15,      verticalAlign: 'middle' }}>Digite seu peso:</Text>

      <TextInput style={{marginLeft:5, 
                     
                       
                backgroundColor:'#E9E9E9',                 
              fontSize:15} } 
              onChangeText={setPeso}
              value = {peso}   
                      
              keyboardType="numeric"/>
              
        </View>

  <View style={{ flexDirection: 'row', marginLeft: 5, paddingVertical: 10}}>
        <Text style={{fontSize:15,      verticalAlign: 'middle' }}>Digite sua altura:</Text>

      <TextInput style={{marginLeft:5, 
                                         
                backgroundColor:'#E9E9E9',                 
              fontSize:15} }  
              onChangeText={setAltura}
              value = {altura}              
              keyboardType="numeric"/>
        </View>
        <Text style={{ fontSize: 20}}>{imc}</Text>
      <Button 
      title="calcular" 
      onPress={() => calculo(peso, altura)}/>
    </View>

  )

}

export default Imc;
