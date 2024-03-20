import { View, TextInput, Button, FlatList, Text, StatusBar, StyleSheet } from "react-native"; 
import { useState } from "react";



const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    button: {              
      paddingVertical: 10,  
      position: 'absolute',
      right: 10,
      width: 71
    
    }
  });



const Tasks = () => {
    const [task, setTask] = useState<string>("");
    const [tasks, setTasks] = useState<string[]>([])
    

    const add = () => {        
        if(task != ""){
            setTasks([...tasks, task]);
        }        
        setTask("");
    }

    const remove = (index: number) =>{  
        const updatedTasks = [...tasks];   
        updatedTasks.splice(index, 1);
        setTasks(updatedTasks);        
    }

    return(
        <View>                                    
            <StatusBar backgroundColor="#FF5733"/>
            
                <View style={{ flexDirection: 'row', marginLeft: 5, paddingVertical: 10}}>
                    <Text style={{fontSize:25, fontWeight:"bold", verticalAlign: 'middle' }}>Tarefa:</Text>
                    <TextInput style={{marginLeft:5, backgroundColor: '#E9E9E9', fontSize:20}} onChangeText={setTask} value={task}/>
                    <View style={styles.button}>
                        <Button title="+" onPress={add} />
                    </View>
                </View>                
                <FlatList
                    data={tasks}
                    renderItem={({ item, index }) => (
                        
                        <View style={{ flexDirection: 'row', alignItems: 'center',
                                       flexWrap: 'wrap', 
                                       justifyContent: 'space-between', 
                                       marginHorizontal: 10,
                                       marginVertical: 5}}>

                            <Text style={{ fontSize: 20}}>{index + 1}</Text>            
                            <Text style={{ fontSize: 20}}>{item}</Text>
                            <Button title="Excluir" onPress={() => remove(index)} />
                        </View>
                    )}
        keyExtractor={(item, index) => index.toString()}
      />     
        </View>
    )
};



export default Tasks;