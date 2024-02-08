import { View, Text, StyleSheet, Image, TextInput, ScrollView, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';

const menu = require("./assets/icons/menu.png");
const face = require("./assets/face.png");
const magnifying_glass = require("../src/assets/icons/magnifying-glass.png");

const image_v_1 = require("../src/assets/vehicles/v-1.png");
const image_v_2 = require("../src/assets/vehicles/v-2.png");
const image_v_3 = require("../src/assets/vehicles/v-3.png");
const image_v_4 = require("../src/assets/vehicles/v-4.png");

import data from "./dataset/vehicles.json";

const HomeScreen = ({navigation}) => {

    const [vehicles, setvehicles] = useState(data.vehicles);
    const [FilterVehicles, setFilterVehicles] = useState(data.vehicles);

    const getImage = (id) => {
        if (id == 1) return image_v_1;
        if (id == 2) return image_v_2;
        if (id == 3) return image_v_3;
        if (id == 4) return image_v_4;
    }

    const searchVehicles =(keyword)=>{
        const lowercasekeyword = keyword.toLowerCase();
        const results = vehicles.filter(vehicle=>{
            return vehicle.make.toLowerCase().includes(lowercasekeyword);
        })
        setFilterVehicles(results);
    }
    
    return (
        <SafeAreaView style={styles.SafeArea}>
            <View style={styles.container}>

                <View style={styles.headerSection}>
                    <Image source={menu} resizeMode="center" style={styles.menuIconStyle} />
                    <Image source={face} resizeMode="center" style={styles.faceIconStyle} />
                </View>

                <View style={styles.titleSection}>
                    <Text style={styles.title}>Rent a car</Text>
                </View>

                <View style={styles.searchSection}>
                    <View style={styles.searchPallet}>
                        <TextInput style={styles.searchInput} placeholder='Search a car..' onChangeText={(text)=> searchVehicles(text)}/>
                        <View style={styles.searchIconArea}>
                            <Image source={magnifying_glass} resizeMode="contain" style={styles.magnifyingIcon} />
                        </View>
                    </View>
                </View>

                <View style={styles.typesSection}>
                    <Text style={styles.typesTextActive}>All</Text>
                    <Text style={styles.typesText}>Suv</Text>
                    <Text style={styles.typesText}>Sedan</Text>
                    <Text style={styles.typesText}>Mpv</Text>
                    <Text style={styles.typesText}>Hatchback</Text>
                </View>

                <View style={styles.listSection}>
                    <Text style={styles.headText}>Most Rented</Text>

                    <ScrollView style={styles.elementPallet}>

                        {
                            FilterVehicles.map((vehicle) => {
                                return (
                                    <TouchableOpacity style={styles.element} key={vehicle.id} activeOpacity={0.8} onPress={()=> navigation.navigate('Info',{id: vehicle.id})}>
                                        <View style={styles.infoArea}>
                                            <Text style={styles.infoTitle}>{vehicle.make}{vehicle.model}</Text>
                                            <Text style={styles.infoSub}>{vehicle.type}-{vehicle.transmission}</Text>
                                            <Text style={styles.infoPrice}>
                                                <Text style={styles.infoAmount}>${vehicle.price_per_day}</Text>/day
                                            </Text>
                                        </View>
                                        <View style={styles.imageArea}>
                                            <Image source={getImage(vehicle.id)} resizeMode='contain' style={styles.vehicleImage} />
                                        </View>
                                    </TouchableOpacity>
                                );
                            })
                        }
                    </ScrollView>

                </View>

            </View>
        </SafeAreaView>
    )
}

export default HomeScreen

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
    titleSection: {
        marginTop: 20,
    },
    title: {
        fontSize: 32,
        fontWeight: '600'
    },
    searchSection: {
        //backgroundColor: 'red',
        marginTop: 15,
        paddingLeft: 15,
        paddingRight: 15,
        justifyContent: "center",
    },
    searchPallet: {
        paddingLeft: 10,
        paddingRight: 10,
        flexDirection: "row",
        borderRadius: 8,
        width: "100%",
        height: 30,
        backgroundColor: "white",
    },
    searchInput: {
        width: 245,
        height: 30,
    },
    searchIconArea: {
        width: 30,
        height: 30,
        justifyContent: "center",
        alignItems: "center",
    },
    magnifyingIcon: {
        width: 24,
        height: 24,
        marginRight: -40,
    },
    typesSection: {
        marginTop: 15,
        flexDirection: 'row',
    },
    typesTextActive: {
        fontSize: 15,
        fontWeight: 'bold',
        marginRight: 34,
        color: 'black',
    },
    typesText: {
        fontSize: 15,
        fontWeight: '500',
        marginRight: 33,
        color: '#696969',
    },
    listSection: {
        marginTop: 25,
    },
    headText: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    elementPallet: {
        width: '100%',
        height: 480,
        // backgroundColor: 'red',
    },
    element: {
        height: 100,
        padding: 15,
        borderRadius: 20,
        backgroundColor: 'white',
        flexDirection: 'row',
        marginBottom: 13,
    },
    infoArea: {
        flex: 1,
    },
    infoTitle: {
        fontSize: 15,
        fontWeight: 'bold',
    },
    infoSub: {
        fontSize: 11,
        fontWeight: '600',
        color: '#696969'
    },
    infoPrice: {
        position: 'absolute',
        bottom: 0,
        fontSize: 10,
        color: '#696969',
        fontWeight: 'bold',
    },
    infoAmount: {
        fontSize: 12,
        color: 'black',
        fontWeight: '600',
    },
    imageArea: {
        flex: 1,
    },
    vehicleImage: {
        position: 'absolute',
        top: -15,
        left: -15,
        width: '140%',
        height: '140%',
    }
});