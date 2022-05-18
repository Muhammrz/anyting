import { View, Text, FlatList, Pressable, StyleSheet, Dimensions, Image } from 'react-native'
import React, { useState } from 'react'
import Ionicons from "react-native-vector-icons/Ionicons"
import FontAwesome5 from "react-native-vector-icons/FontAwesome5"
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"
import { Navigation } from 'react-native-navigation'
const width = Dimensions.get('window').width

interface item {
    title: string;
    cover: JSX.Element;
    color: string;
    componentId: string;
}
 

const Data: item[] = [
    {
        title: "rain",
        cover: <Ionicons size={50} color="#8FBDD3" name="rainy"/>,
        color:"#A97155",
        componentId: 'com.rain'
        
    },
    {
        title: "animal",
        cover: <FontAwesome5 size={50} color="#8FBDD3" name="cat"/>,
        color:"#A97155",
        componentId:'com.animal'
    },
    {
        title: "piano",
        cover: <MaterialCommunityIcons size={50} color="#8FBDD3" name="piano"/>,
        color:"#A97155",
        componentId:'com.piano'
    },
    {
        title: "Instrument",
        cover: <Ionicons size={50} color="#8FBDD3" name="md-musical-note"/>,
        color:"#A97155",
        componentId:'com.instrument'
    },
    {
        title: "Game",
        cover: <MaterialCommunityIcons size={50} color="#8FBDD3" name="gamepad-variant-outline"/>,
        color:"#A97155",
        componentId:'com.game'
    },  
    {
        title: "camp fire",
        cover: <MaterialCommunityIcons size={50} color="#8FBDD3" name="campfire"/>,
        color:"#A97155",
        componentId:'com.campfire'
    },
    {
        title: "farm",
        cover: <MaterialCommunityIcons size={50} color="#8FBDD3" name="cow"/>,
        color:"#A97155",
        componentId:'com.farm'
    },
    {
        title: "engine",
        cover: <MaterialCommunityIcons size={50} color="#8FBDD3" name="engine"/>,
        color:"#A97155",
        componentId:'com.engine'
    },
    {
        title: "sea",
        cover: <FontAwesome5 size={50} color="#8FBDD3" name="water"/>,
        color:"#A97155",
        componentId: 'com.sea'
    },
    {
        title: "car",
        cover: <FontAwesome5 size={50} color="#8FBDD3" name="car"/>,
        color:"#A97155",
        componentId:'com.car'
    },
    {
        title: "Human",
        cover: <MaterialCommunityIcons size={50} color="#8FBDD3" name="human-male-female-child"/>,
        color:"#A97155",
        componentId:'com.human'
    },
    {
        title: "train",
        cover: <Ionicons size={50} color="#8FBDD3" name="train-outline"/>,
        color:"#A97155",
        componentId:'com.train'
    },
    {
        title: "shower",
        cover: <MaterialCommunityIcons size={50} color="#8FBDD3" name="shower"/>,
        color:"#A97155",
        componentId:'com.shower'
    },
    {
        title: "lullaby",
        cover: <Image style={{height:50,width:50,tintColor: "#8FBDD3",}} source={{uri:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAABmJLR0QA/wD/AP+gvaeTAAADZklEQVR4nO2a20sVURSHP7tZgfoQncr0hPUQ+JBoEBgUvVQQhQ/R5bn/QIKi6KoQBP0BQdFDBb4YSDfBt6heMig1iJDogmQoRWTQxVsPaw0zHmef5uDZex9zPhhmmL1m7d9eM7Nm7z0bUlJSUtyTBe4AY8Aw0AHUeVXkkCzwBZjO2UaADR51OaMTafB9YD1QAzzUc7c96nLGd6SxNZFztXpu1LWYJa4rBPqQxg7FlE061lIS1ALdSFBuetbinKeESXAY2ORXjnuCxt9iATYewgB4Y5HPykuBuABE30vbW4Cr+h7nNrYsJgBeH0kHzGhzvn5AXHDmM7E3dsHngHxPwP/+KgDxT8AT5yrcMSsJFoKNb7Z3nws+B6QB8C3AN2kAfAvwTRoA3wJ8kwbAtwDfpAHwLcA3SQOQMRyXGlZ0rgb6CQcZr4F1RfJdzMGQFZ0ZYEAdDuQcFxLhzcA55B/gB+CrboHYk8zt73CxdOZ1mjGcy8c24BHJJiyngB6gwYPORE6TlEVpRRoVNHAQOIz8Ai8HViK/xVqAq4RPxARwBVjsSGdBTguxucjsuzwKtAOVMfYVes0vte3Wc7Z1zuJ5wguiznsNNtXAbuAM8JKZiyEOGK5pBN6p3QPMT0IxdbpxDGwnzAlTwFmDXZYwCJdd67T2aCllwHFgnPALEEcT8jqMA/WudVpJLjkcQRZETAA7DTZtWs89HzqtfF5yuKC+XhHfK60AviFBqvah00oHI0I58FZ9thhsrmt5qy+dcV3MtXN1GuG0+r1hKD+o5R3/8GNVZwbJoL0UfzDUgAh+YyjfqOV9CXzZ1GmNKqSBY4bySi0ftlH5fJgPmNL9HxvOSyEAwSjwk6F8je5/2Ki8FAKwX/emv9JNun9ho3LfAVgOHNPjLoPNXt0/sy/HPe1IgusnfklOBbK2eJyZa4v/C44iXeFJYJfB5hISoE5XolxQhgyAgsHQCYPdVuAnkv23uJFmnx1IsguGw6cMdlngvdq1uZFmh2pgD3CesH8+DXwG9hmuaQQ+qt1dYKl9mXYIhrLRbQQZAcZNdVXpNb/VtgdY4USpJeImRQ8hfftlSBDqkFHgNWTYO40kxTaSTYqWPM0UNi3ehbwCznC1HLYeufvNerwKafQQkux6kFmfQUd6UlJSUgD4C9OTf3+6DG4DAAAAAElFTkSuQmCC'}}/>,
        color:"#A97155",
        componentId:'com.lullaby'
    },
    {
        title: "Forest",
        cover: <MaterialCommunityIcons size={50} color="#8FBDD3" name="forest"/>,
        color:"#A97155",
        componentId:'com.forest'
    },
]

interface props {
    componentId: string
}


const Home: React.FC<props> = (props) => { 

    const onPress = (item:item) => {
        Navigation.push(props.componentId, {
            component:{
                name: item.componentId,
                options:{
                    topBar:{
                        title: {
                            text: item.title.toUpperCase()
                        }
                    }
                }
            }
        })
    }


    const renderItem = ({item}:{ item:any }) => {
        return (
            <Pressable onPress={() => onPress(item)} style={[style.containerItem]}>
                {item.cover}
                <Text style={style.title}>{item.title}</Text>
            </Pressable>
        )
    }
  

  return (
    <View style={{flex:1}}>
        <FlatList data={Data} renderItem={renderItem} numColumns={3} 
            showsVerticalScrollIndicator={false} />
    </View>
  )
}

const style = StyleSheet.create({
    containerItem:{
        width: (width / 3) - 10,
        height: width / 3,
        justifyContent: 'center',
        alignItems:'center',
        margin: 5,
        borderRadius: 8,
        backgroundColor: '#000',
    },
    title: {
        fontSize:16,
        textTransform:'uppercase',
        fontWeight: 'bold',
        color: '#fff',
        paddingTop:5,
    }
})


export default Home