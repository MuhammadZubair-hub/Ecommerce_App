import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Home from '../screen/Home';
import Cart from '../screen/Cart';
import Profile from '../screen/Profile';
import Reorder from '../screen/Reorder';
import Ionicons from 'react-native-vector-icons/Ionicons'

const BottomNavigation = () => {


    const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator screenOptions={{
        headerShown:false , 
        tabBarShowLabel:false,
        tabBarActiveTintColor:'#E96E6E',
        
         }} >
        <Tab.Screen name='Home' component={Home} options={{
            tabBarIcon:({size,color})=>
            { return <Ionicons name="home-outline" size={size}color={color} /> }}}  />
        <Tab.Screen name='Cart' component={Cart} options={{
            tabBarIcon:({size,color})=>{ return <Ionicons name="cart-outline" size={size}color={color} /> }}} />
        <Tab.Screen name='Profile' component={Profile} options={{
            tabBarIcon:({size,color})=>{ return <Ionicons name="reorder-three-outline" size={size} color={color} /> }}} />
        <Tab.Screen name='Reorder' component={Reorder} options={{
            tabBarIcon:({size,color})=>{ return <Ionicons name="person-outline" size={size}color={color} /> }}} />
    </Tab.Navigator>
  )
}

export default BottomNavigation

const styles = StyleSheet.create({})