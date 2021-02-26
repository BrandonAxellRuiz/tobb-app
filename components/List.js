import React from 'react';
import { StyleSheet, Text, SectionList, SafeAreaView } from 'react-native';
import { useSelector } from 'react-redux'; 

export default function List() {

  const {name, email} = useSelector((state) => state?.auth);  

  return (
    <SafeAreaView style={styles.container}> 
      <Text style={styles.titleText}></Text> 
        <SectionList
          sections={[ 
            {
              title: 'DATOS PERSONALES', 
              data: [name, email]
            },
            {
              title: 'LISTA DE GASTOS 2020-12-31', 
              data: [
                'Comida $1,600',  
                'Cine $200',  
                'Lavado de automovil $75', 
                'Mensualidad de escuela $1,150',  
                'Anualidad de la cas de escuela $1,150',  
                'Anualida de carro $21,189',  
                'Viaje a paris $72,030',  
              ]
            },
            {
              title: 'LISTA DE GASTOS 2021-01-31', 
              data: [
                'Comida $1,800',  
                'Lavado de automovil $75', 
                'Mensualidad de escuela $1,150',  
              ]
            },
            {
              title: 'LISTA DE GASTOS 2021-02-28', 
              data: [
                'Comida $1,500', 
                'Corte de pelo $80', 
                'Lavado de automovil $75', 
                'Mensualidad de escuela $1,150',  
              ]
            }, 
          ]}
          renderItem={({item}) => <Text style={styles.item}>{item}</Text>}
          renderSectionHeader={({section}) => <Text style={styles.sectionHeader}>{section.title}</Text>}
          keyExtractor={(item, index) => index}
        /> 
    </SafeAreaView>
  );

}

const styles = StyleSheet.create({
  container: {
   flex: 1,
   paddingTop: 20, 
  },
  sectionHeader: {
    paddingTop: 2,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 2,
    fontSize: 14,
    fontWeight: 'bold',
    backgroundColor: 'rgba(247,247,247,1.0)',
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  }, 
})
