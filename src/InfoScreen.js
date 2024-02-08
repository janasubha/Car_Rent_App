import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import data from "./dataset/vehicles.json";

const back = require("./assets/icons/left-arrow.png");
const dots = require("./assets/icons/dots.png");
const image_v_1 = require("../src/assets/vehicles/v-1.png");
const image_v_2 = require("../src/assets/vehicles/v-2.png");
const image_v_3 = require("../src/assets/vehicles/v-3.png");
const image_v_4 = require("../src/assets/vehicles/v-4.png");

const InfoScreen = ({ route, navigation }) => {

  const vehicle = data.vehicles.filter(element => element.id == route.params.id)[0];

  const getImage = (id) => {
    if (id == 1) return image_v_1;
    if (id == 2) return image_v_2;
    if (id == 3) return image_v_3;
    if (id == 4) return image_v_4;
  }
  return (
    <SafeAreaView style={styles.SafeArea}>
      <View style={styles.container}>
        <View style={styles.headerSection}>
          
         <TouchableOpacity onPress={() => navigation.goBack()} activeOpacity={0.9}>
         <Image source={back} resizeMode="center" style={styles.menuIconStyle} />
         </TouchableOpacity>

         <Text style={styles.headerText}>Detail</Text>
         <Image source={dots} resizeMode="center" style={styles.faceIconStyle} />
        </View>

        <View style={styles.imageSecton}>
          <Image source={getImage(vehicle.id)} resizeMode='contain' style={styles.vehicleImage} />
        </View>

        <View style={styles.headSecton}>
          <View style={styles.topTextArea}>
            <Text style={styles.makemodelText}>{vehicle.make} {vehicle.model}</Text>
            <Text style={styles.price}>${vehicle.price_per_day}<Text style={styles.amount}>/day</Text></Text>
          </View>
          <Text style={styles.typetranText}>{vehicle.type}-{vehicle.transmission}</Text>
        </View>
        <Text style={styles.descriptionText}>{vehicle.description}</Text>
        <Text style={styles.PropertiesText}>Properties</Text>

        <View style={styles.PropertiesArea}>
          <View style={styles.level}>
            <Text style={styles.PropertyText}>Motor power:
              <Text style={styles.ValueText}>{vehicle.properties.motor_power_hp} hp</Text></Text>
            <Text style={styles.PropertyText}>Fule:
              <Text style={styles.ValueText}>{vehicle.properties.fuel_type} cc</Text></Text>
          </View>

          <View style={styles.level}>
            <Text style={styles.PropertyText}>Engine capacity:
              <Text style={styles.ValueText}>{vehicle.properties.engine_capacity_cc}</Text></Text>
            <Text style={styles.PropertyText}>Traction:
              <Text style={styles.ValueText}>{vehicle.properties.traction}</Text></Text>
          </View>
        </View>

        <TouchableOpacity style={styles.rentButton}>
          <Text style={styles.rentButtonText}> Rent a car</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

export default InfoScreen

const styles = StyleSheet.create({
  SafeArea: {
    flex: 1,
    backgroundColor: '#e7e7e7',
  },
  container: {
    flex: 1,
    paddingLeft: 35,
    paddingRight: 35,
  },
  headerSection: {
    height: 100,
    //backgroundColor: 'red',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  menuIconStyle: {
    width: 30,
  },
  faceIconStyle: {
    width: 30,

  },
  headerText: {
    fontSize: 30,
    color: 'black',
    fontWeight: '500',
    marginLeft: 5
  },
  imageSecton: {
    width: "100%",
    height: 250,
    //backgroundColor:'red'
    justifyContent: 'center',
    alignItems: "center",
  },
  vehicleImage: {
    width: 300,
    height: 300,
  },
  headSecton: {

  },
  topTextArea: {
    flexDirection: 'row',
    justifyContent: "space-between",
  },
  makemodelText: {
    fontSize: 20,
    fontWeight: "500"
  },
  amount: {
    fontWeight: "400"
  },
  price: {
    fontWeight: "bold"
  },
  typetranText: {
    marginTop: 1,
    color: '#696969',
    fontSize: 12,
    fontWeight: '600',
  },
  descriptionText: {
    marginTop: 30,
    fontSize: 14,
    letterSpacing: 2,
    lineHeight: 18,
    color: '#696969',
    fontWeight: '500',
  },
  PropertiesText: {
    marginTop: 15,
    fontSize: 20,
    fontWeight: "500"
  },
  PropertiesArea: {
    marginTop: 15,
    flexDirection: "row",
    justifyContent: 'flex-start',
  },
  level: {
    marginRight: 30,
  },
  PropertyText: {
    fontSize: 12,
    color: '#696969'
  },
  ValueText: {
    fontSize: 12,
    color: "black",
  },
  rentButton: {
    marginTop: 30,
    height: 40,
    width: 300,
    backgroundColor: 'black',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  rentButtonText: {
    color: 'white',
    fontWeight:"500"
  },
})