import { View , Text , TouchableOpacity, StyleSheet, SafeAreaView, TextInput , ScrollView} from "react-native"

import COLORS from "../../constant/COLORS"

const styles = StyleSheet.create({

    head : {
        paddingTop : 5,
        fontSize : 20,
        textAlign : "center",
        borderBottomWidth : 2,
        borderBottomColor : "grey"
    },

    logcont : {
        display : "flex",
        alignItems : "center",
        justifyContent : "center",
        borderWidth : 2,
        borderRadius : 10,
        borderColor : "grey",
        height:'justifyContent',
        backgroundColor : COLORS.secondaryColor.s100
    },

    input_bar : {
        margin : 15,
        width : 300,
        paddingLeft : 15,
        borderBottomColor : "grey",
        borderBottomWidth : 2
    },

    logbtn : {
        padding :  10,
        marginTop : 5,
        marginBottom : 20,
        display : "flex",
        justifyContent : "center",
        alignItems : "center",
        borderWidth : 1,
        borderColor : "grey",
        width : "40%",
        borderRadius : 15

    }
})

const Signup = () => {
  return (

    <ScrollView
        style={{
            flex : 1,
            top : -100
        }}
    >
        <View style={styles.logcont}>
            <Text style={styles.head}>
                SignUp
            </Text>
            <View>
                <TextInput
                    style={styles.input_bar}
                    placeholder="Email"
                    placeholderTextColor="gray"
                    // onChangeText={changeUsername}
                    // value={username}
                />
                <TextInput
                    style={styles.input_bar}
                    placeholder="UserName"
                    placeholderTextColor="gray"
                    // onChangeText={changeUsername}
                    // value={username}
                />
                <TextInput
                    style={styles.input_bar}
                    placeholder="PassWord"
                    placeholderTextColor="gray"
                    // onChangeText={changeUsername}
                    // value={username}
                />
                <TextInput
                    style={styles.input_bar}
                    placeholder="Confirm PassWord"
                    placeholderTextColor="gray"
                    // onChangeText={changeUsername}
                    // value={username}
                />

            </View>
            <TouchableOpacity style={styles.logbtn}>
                <Text>SignUp</Text>
            </TouchableOpacity>
            
        </View>

    </ScrollView>
    
  )
}

export default Signup;