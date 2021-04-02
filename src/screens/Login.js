import React from 'react';
import { Button, View, Text , Image , Dimensions , StatusBar} from 'react-native';
import { TouchableOpacity, TextInput } from 'react-native-gesture-handler';
import * as Animatable from 'react-native-animatable';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AsyncStorage from '@react-native-community/async-storage';

class Login extends React.Component 
{
    state = { email:'' , password:'' , token:''};

    constructor(props){
        super(props);
      }

    login = () => 
    {
        const {email,password} = this.state;
        fetch('http://15.206.58.202/Api/Authenticate/',{
            method:'POST',
            header:{
                'Accept':'application/json',
                'content-type' :'application/json',
            },
            body:JSON.stringify({
                email:email,
                password:password
            })
        }).then((response) => response.json())
        .then((responseJson) =>
        {
            if(responseJson.is_error == 1)
            {
                    alert(responseJson.is_error);
                    console.log(responseJson.msg);
            }
            else
            {
                this.storeToken(email);
               this.props.navigation.navigate('Home');
            }

        })
            .catch((error) => {
                alert(error);
            });

    }

    async storeToken(email) 
    {
        try 
        {
           await AsyncStorage.setItem("token", email);
           const value = await AsyncStorage.getItem('token')
           console.log(value);
        } 
        catch (error) 
        {
          console.log("Something went wrong", error);
        }
    }

    


    render()
    {
        return (
            <View style={styles.container}>
                <StatusBar backgroundColor={'#589507'}  barStyle="dark-content"></StatusBar>
                <View style={styles.header}>
                    <Animatable.Text style={styles.welcometext} animation="slideInLeft">Welcome !</Animatable.Text>
                    <Animatable.Text style={styles.text} animation="slideInLeft">Please Sign In with your credentials</Animatable.Text>
                </View>
                <Animatable.View 
                    style={styles.footer}
                    animation="fadeInUpBig"
                >
                    <Text style={styles.labels}>Email</Text>
                    <View style = {styles.action}>
                        <MaterialCommunityIcons name="email-outline" color={'#546585'} size={30} />
                        <TextInput onChangeText={ email => this.setState({email}) } placeholder="Your Email" style={styles.textInput}></TextInput>

                    </View>

                    <Text style={[styles.labels,{marginTop:20}]}>Password</Text>
                    <View style = {styles.action}>
                        <MaterialCommunityIcons name="lock-outline" color={'#546585'} size={30} />
                        <TextInput onChangeText={ password => this.setState({password}) } placeholder="Your Password" style={styles.textInput} secureTextEntry={true}></TextInput>

                    </View>
                    
                    
                    <View style={styles.button}>
                        <TouchableOpacity onPress = {this.login} style={styles.getstarted} >
                            <Text style={styles.buttonText}>Login</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.notesection}>
                    <Text>Note :</Text>
                    <Text style={styles.notetext}>Contact Administrator for activating your vendor credentials.</Text>
                    </View>
                </Animatable.View>
            </View>
        );
    }
}

const styles = 
{
    container:{
        flex:1,
        backgroundColor: '#589507',
    },
    header: {
        flex: 1,
        justifyContent: 'center'   
    },
    footer: {
        flex: 2,
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingVertical: 50,
        paddingHorizontal: 30
    },
    text:{
        color:'#FFF',
        marginTop:5,
        fontFamily:'Montserrat-Regular',
        fontSize:14
    },

    headerstyles:{
        flex:1,
        margin:10
    },
    imagestyles:{
        flex:5,
        width:300
    },
    footerstyles:{
        flex:1,
        margin:10
    },
    getstarted:{
        alignSelf: 'stretch',
        height:50,
        backgroundColor:'#589507',
        borderRadius:5,
        marginTop:10
       
    },
    buttonText:{
        justifyContent:'center',
        textAlign:'center',
        marginTop:15,
        color:'#FFF',
        fontFamily:'Montserrat-Regular',
    },
    headerText:{
        color:'#7BC01E',
        fontSize:18,
        textAlign:'center'
    },

    action: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#f2f2f2',
        paddingBottom: 5
    },
    textInput: {
        flex: 1,
        marginTop: Platform.OS === 'ios' ? 0 : -10,
        paddingLeft: 10,
        color: '#05375a',
        fontFamily:'Montserrat-Regular',
    },
    labels:{
        fontFamily:'Montserrat-Medium',
    },
    welcometext:{
        fontFamily:'Montserrat-Medium',
        color:'#FFF',
        textAlign:'left',
        fontSize:38,
        paddingLeft:15
    },
    text:{
        fontFamily:'Montserrat-Medium',
        color:'#FFF',
        textAlign:'left',
        fontSize:14,
        paddingLeft:15
    },
    notesection:{
        flex:1,
        flexDirection:'row',
        marginTop:10
    },
    notetext:{
        fontFamily:'Montserrat-Medium',
        paddingLeft:5
        
    }
};
export default Login;