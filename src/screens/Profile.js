import React from 'react'; 
import { Text , View , Image , TouchableOpacity , StatusBar } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AsyncStorage from '@react-native-community/async-storage';




const Profile = ({navigation}) =>{

    logout = async () => {
        try {
          await AsyncStorage.removeItem('token')
          navigation.navigate('Login')
        } catch (error) {
          console.log(error)
        }
      }


    return(
        <View style={styles.profilescreen}>
             <StatusBar backgroundColor={'#FFF'}  barStyle="dark-content"></StatusBar>
            <View style={styles.card}>
                <View style = {styles.imageview}>
                    <Image source={require("./../../assests/images/vendorimage.png")} style={styles.vendorimage} />
                </View>
                <View style = {styles.imageview}>
                    <Text style={styles.vendorname}>Vendor Name </Text>
                </View>
            </View>
            <View style={styles.detailscard}>
                <View style={styles.icons}>
                    <MaterialCommunityIcons name="email-outline" color={'#546585'} size={30} />
                </View>
                <View style={styles.detailsection}>
                    <Text style={styles.details}>hitesh@gmail.com</Text>
                </View>
            </View>
            <View style={styles.detailscard}>
                <View style={styles.icons}>
                    <MaterialCommunityIcons name="cellphone-android" color={'#546585'} size={30} />
                </View>
                <View style={styles.detailsection}>
                    <Text style={styles.details}>+91 8198765422</Text>
                </View>
            </View>
            <View style={styles.detailscard}>
                <View style={styles.icons}>
                    <MaterialCommunityIcons name="google-maps" color={'#546585'} size={30} />
                </View>
                <View style={styles.detailsection}>
                    <Text style={styles.details}>RT Nagar , Bangalore</Text>
                </View>
            </View>
            <View style={styles.detailscard}>
                <View style={styles.icons}>
                    <MaterialCommunityIcons name="information-outline" color={'#546585'} size={30} />
                </View>
                <View style={styles.detailsection}>
                    <Text style={styles.details}>Sample Supermarket is the best 5th generation supermarket in the vicinty of RT Nagar</Text>
                </View>
            </View>
            <View style={styles.logoutcard}>
                <TouchableOpacity style={styles.logout} onPress = {logout} >
                    <Text style={styles.buttonText}>Logout</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = {
    profilescreen:{
        backdgroundColor:'#FFF',
        flex:1
    },
    card:{
        padding:15,
        margin:2,
        marginTop:1,
        marginBottom:1,
        backgroundColor:'#FFF',
        flexDirection:'column',
        borderRadius:5,
    },
    detailscard:{
        padding:15,
        margin:2,
        marginTop:1,
        marginBottom:1,
        backgroundColor:'#FFF',
        flexDirection:'row',
        borderRadius:5
        
    },
    logoutcard:{
        padding:15,
        margin:2,
        marginTop:1,
        marginBottom:1,
        backgroundColor:'#FFF',
        flexDirection:'row',
        borderRadius:5
    },
    vendorimage:{
        width: 150, 
        height: 150, 
        borderRadius: 200/ 2,
        marginLeft:'30%',
        marginTop:'10%'

    },
    vendorname:{
        textAlign:'center',
        marginTop:'3%',
        fontFamily:'Montserrat-Medium',
        fontSize:20
    },
    details:{
        fontFamily:'Montserrat-Medium',
        fontSize:14,
        paddingTop:7
    },
    icons:{
        flex:0.5
    },
    detailsection:{
        flex:4
    },
    logout:{
        alignSelf: 'stretch',
        height:50,
        backgroundColor:'#589507',
        borderRadius:5,
        marginTop:10,
        flex:1
    },
    buttonText:{
        justifyContent:'center',
        textAlign:'center',
        marginTop:15,
        color:'#FFF',
        fontFamily:'Montserrat-Regular',
    },


}

export default Profile;