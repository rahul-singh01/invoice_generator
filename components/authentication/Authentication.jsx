import { View , Text , SafeAreaView , StyleSheet , TouchableOpacity} from "react-native"
import COLORS from "../../constant/COLORS"
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon2 from 'react-native-vector-icons/AntDesign';

import { useState } from "react";

import Login from "../../components/authentication/Login"
import Signup from "../../components/authentication/Signup";

const styles = StyleSheet.create({

    cont : {
        top : 60,
        flex : 1,
        display : "flex",
        alignItems : "center",
        
    },

    head : {
        display : "flex",
        fontSize : 10,
        justifyContent : "center",
    },

    btncont : {
        display : "flex",
        flexDirection : "row",
        padding : 10,
        margin : 5,
    },

    btnview : {
        display : "flex",
        marginLeft : 20,
        marginRight : 20,
        flexDirection : "row",
        borderColor : "grey",
        borderWidth : 2,
        padding : 10,
        borderRadius : 10 
    },

    secondarycont : {
        flex : 1,
        padding : 20,
    }

})

const Authentication = () => {

    const [displayCont , setDisplayCont] = useState(true)

    const handleCont = (x)=>{
        setDisplayCont(x);
    }

  return (
    <SafeAreaView style={{
        flex: 1,
        backgroundColor : COLORS.secondary,
    }}>
        <View style={styles.cont}> 
            <Text style={styles.head}>
                Authentication
            </Text>
            <View style={styles.btncont}>
                <TouchableOpacity style={styles.btnview} onPress={()=>{handleCont(true)}}>
                    <Icon name="login" size={20} style={{color : "grey" , margin : 1}}/>
                    <Text>Login</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btnview} onPress={()=>{handleCont(false)}}>
                    <Icon2 name="adduser" size={20} style={{color : "grey" , margin : 1}}/>
                    <Text>SignUp</Text>
                </TouchableOpacity>
            </View>
            <Icon name="account" size={30} style={{color : "grey" , margin : 1}}/>

        </View> 
        <View style={styles.secondarycont}>
            {
                displayCont ? (
                    <Login/>
                ) : (
                    <Signup/>
                )
            }
        </View>

    </SafeAreaView>
    
  )
}

export default Authentication
 