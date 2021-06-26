import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

export default function Search() {
    return (
        <TouchableOpacity
            onPress = {() => navigation.Navigate("Search")} >
            <Text>Hello Search!!</Text>
            
        </TouchableOpacity>
    )
}
