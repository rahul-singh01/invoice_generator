import {View , Text , SafeAreaView , ScrollView , Image ,TouchableOpacity , StyleSheet} from "react-native";
// import { Animated, Easing } from 'react-native';
// import { useRouter} from "expo-router"
import { useNavigation } from '@react-navigation/native';

// import {COLORS , icons } from "../constants";
// import Icon from 'react-native-vector-icons/MaterialIcons';


import { useState , useEffect , useRef } from "react";

import { Provider } from "react-redux";
// import store from "../store/store";


// trying navigation creation...
import { NavigationContainer } from '@react-navigation/native';;
import { createStackNavigator } from '@react-navigation/stack';


import Authentication from "../components/authentication/Authentication";
import Dashboard  from "../components/Dashboard";
import Invoice from "../components/Invoice";

// import * as Device from 'expo-device';

import COLORS from "../constant/COLORS"



const App = () => {
  const Stack = createStackNavigator();

  //------- By Jatin for authentication Check-------------




  const headerOptions = {
    headerStyle: {
      backgroundColor: COLORS.primary,
    },
    // headerLeft: renderLeftHeader,
    // headerRight: () => (
    //   <View style={styles.box}>
    //       <TouchableOpacity  style={styles.logobox} onPress={()=> navigation.navigate('SearchBar')}>
    //           <Icon style={styles.searchbox} name="search" size={30}/>
    //       </TouchableOpacity> 
    //       <TouchableOpacity style={styles.logobox} onPress={()=> setRightDrawer(!rightDrawer)}>
    //           <Icon name="account-circle" size={30} style={{
    //               color : "white",
    //           }}/>
    //       </TouchableOpacity> 
    //   </View>
    // ),
    headerTitle: () => (
      <View style={{ flex: 0, flexDirection: "row", alignItems: "center", padding: 1}}>
        {/* <Image source={icons.logo} style={{ height: 50, width: 50 }} /> */}
        <Text style={{ color: "white", marginLeft: 10, fontSize: 20 }}>Invoice Generator</Text>
      </View>
    ),
  };

  return (
    <SafeAreaView
      style={{
        flex: 1,
      }}
    >

    <Stack.Navigator initialRouteName="Invoice" screenOptions={{ headerShown: true}}>

      <Stack.Screen name="Authentication" component={Authentication} options={headerOptions}/>
      <Stack.Screen name="Dashboard" component={Dashboard} options={headerOptions}/>
      <Stack.Screen name="Invoice" component={Invoice} options={headerOptions}/>
      
    </Stack.Navigator>


    </SafeAreaView>
  )
}

export default App;
