import React from 'react'
import { View , Text , SafeAreaView , TouchableOpacity , StyleSheet , TextInput , ScrollView} from "react-native"
import COLORS from '../constant/COLORS'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon2 from 'react-native-vector-icons/AntDesign';

const styles = StyleSheet.create({
    wrapper : {
       display : 'flex',
       justifyContent : 'center',
       alignItems : 'center',
    },
    input_bar : {
        borderRadius : 10,
        borderColor : "grey",
        borderWidth : 1,
        paddingLeft : 5,
        width : 500,
        marginTop : 5,
        height : 40,
        fontSize : 18,
        backgroundColor : COLORS.secondaryColor.s800
    },

    inputheadcont : {
        display : "flex",
        flexDirection : "column",
        marginTop : 25
    },

    inputCont : {
        padding : 10,
        display : "flex",
        flexDirection : "column",
        justifyContent : "center",
        alignItems : "center",
    },

    txthead : {
        marginLeft : 5,
    },
    txthead_s : {
        marginLeft : 40,
    },

    flexInput : {
        display : "flex",
        flexDirection : "row"
    },

    input_bar_small : {
        borderRadius : 10,
        borderColor : "grey",
        borderWidth : 1,
        paddingLeft : 5,
        width : 200,
        marginTop : 5,
        height : 40,
        fontSize : 18,
        marginLeft : 30,
        marginRight : 30,
        backgroundColor : COLORS.secondaryColor.s800
    },

    itemCont : {
        top : 10,
        width : 500,
    },
    item : {
        borderRadius : 10,
        borderColor : "grey",
        borderWidth : 1,
        backgroundColor : COLORS.secondaryColor.s100,
        top : 10,
        width : 500,
        paddingBottom : 10,
        height : 310
    },

    totalpricecont : {
        display : "flex",
        flexDirection : "row",
        paddingLeft : 20,
        paddingRight : 20,
        paddingTop : 10,
        paddingBottom : 10,
        justifyContent : "space-between"
    },

    txt_price_head : {
        fontSize : 14
        
    },
    txt_price : {
        fontSize : 16,
        fontWeight : "bold",
    },
    txt_price_quantity : {
        top : -5,
        marginLeft : 25
    },

    line : {
        borderBottomColor : "grey",
        borderBottomWidth : 1
    },

    addfeature : {
        display : "flex",
        flexDirection : "row",
        padding : 15
    },
    
    totalCont : {
        padding : 20,
        backgroundColor : COLORS.primaryColor.s800
    },

    totalView : {
        margin : 10,
        display : "flex",
        flexDirection : "row",
        justifyContent : "space-between"
    },
    btn : {
        justifyContent : "center",
        textAlign : "center",
        borderRadius : 10,
        backgroundColor : COLORS.primaryColor.s300,
        height : 40,
    },
    btn_text : {
        textAlign : "center",
        fontSize : 17,
        color : COLORS.secondaryColor.s800
    }
})

const Invoice = () => {
  return (
    <ScrollView
        style={{
            flex : 1,
            backgroundColor : COLORS.secondaryColor.s100,
        }}
    >
        <View style={styles.wrapper}>
            <View style={styles.inputCont}>
                <View style={styles.inputheadcont}>
                    <Text style={styles.txthead}>
                        Customer Name <Text style={{color : "red"}}>*</Text>
                    </Text>
                    <TextInput
                        style={styles.input_bar}
                        placeholder="Customer Name"
                        placeholderTextColor="gray"
                        // onChangeText={changeUsername}
                        // value={username}
                    />
                </View>
                <View style={styles.inputheadcont}>
                    <Text style={styles.txthead}>
                        Invoice Number <Text style={{color : "red"}}>*</Text>
                    </Text>
                    <TextInput
                        style={styles.input_bar}
                        placeholder="Invoice Number"
                        placeholderTextColor="gray"
                        // onChangeText={changeUsername}
                        // value={username}
                    />
                </View>
                <View style={styles.inputheadcont}>
                    <View style= {styles.flexInput}>
                        <View>
                            <Text style={styles.txthead_s}>
                                Invoice Date <Text style={{color : "red"}}>*</Text>
                            </Text>
                            <TextInput
                                style={styles.input_bar_small}
                                placeholder="Invoice Date"
                                placeholderTextColor="gray"
                                // onChangeText={changeUsername}
                                // value={username}
                            />
                        </View>
                        <View>
                            <Text style={styles.txthead_s}>
                                Due Date <Text style={{color : "red"}}>*</Text>
                            </Text>
                            <TextInput
                                style={styles.input_bar_small}
                                placeholder="Due Date"
                                placeholderTextColor="gray"
                                // onChangeText={changeUsername}
                                // value={username}
                            />
                        </View>

                    </View>
                    
                </View>
            </View>

            <View style={styles.itemCont}>
                <Text>
                    Items <Text style={{color : "red"}}>*</Text>
                </Text>
                <View style={styles.item}>
                    <View style={styles.totalpricecont}>
                        <Text style={styles.txt_price_head}>ksaddtgyd8</Text>
                        <Text style={styles.txt_price}> ₹ 5000.00</Text>
                    </View>
                    <Text style={styles.txt_price_quantity}>5000.00*1</Text>
                    <View style={styles.line}></View>
                    <TouchableOpacity style={styles.addfeature}>
                        <Icon2 name="pluscircle" size={20} style={{color : "blue" , margin : 1}}/>
                        <Text style={{color : "blue" , fontSize : 16}}> Add Another Item</Text>
                    </TouchableOpacity>
                    <View style={styles.line}></View>

                    <View style={styles.totalCont}>
                        <View style={styles.totalView}>
                            <Text>SubTotal</Text>
                            <Text>₹ 5000.00</Text>
                        </View>
                        <View style={styles.totalView}>
                            <Text>Discount</Text>
                            <Text>₹ 0.00</Text>
                        </View>

                    </View>
                    <TouchableOpacity style={styles.btn}>
                        <Text style={styles.btn_text}>
                            Generate Invoice
                        </Text>
                    </TouchableOpacity>

                </View>
                

            </View>
        </View>

    </ScrollView>
  )
}

export default Invoice