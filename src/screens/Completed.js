import React from 'react';
import { Text , View , ScrollView , StatusBar } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { TouchableOpacity } from 'react-native-gesture-handler';

const Completed = () =>{
    return(
        
        <View>
        <StatusBar backgroundColor={'#FFF'}  barStyle="dark-content"></StatusBar>
        <ScrollView>
        <TouchableOpacity>
            <View style={styles.card}>
            
                <View style={styles.div1}>
                    <View style={styles.iconstyles}>
                        <MaterialCommunityIcons name="information-outline" color={'#546585'} size={30} />
                    </View>
                    <View style={styles.details}>
                        <Text style={styles.orderdetails}>OHD1234567</Text>
                        <Text style={styles.date}>08/09/2020</Text>
                        
                    </View>
                </View>
                <View style={styles.div2} >
                    <View style={styles.statuscard}>
                        <Text style={styles.statustext}>Completed</Text>
                    </View>
                    

                </View>

                <View style={styles.div3}>
                    
                    <Text style={styles.morestyles}><MaterialCommunityIcons style={styles.moreicon} name="chevron-right" color={'#000'} size={25} /></Text>
                    
                </View>
                
            </View>
            </TouchableOpacity>

            </ScrollView>

        </View>
    );
};

const styles = {

    card:{
        padding:15,
        margin:5,
        marginTop:1,
        marginBottom:1,
        backgroundColor:'#FFF',
        flexDirection:'row',
        borderRadius:5
    },
    statuscard:{
        padding:3,
        backgroundColor:'#4E84E8',
        borderRadius:10,
        marginTop:5
    },
    statustext:{
        color:'#FFF',
        textAlign:'center',
        fontFamily:'Montserrat-Medium',
    },
    div1:{
        flex:2,
        flexDirection:'row'
    },

    div2:{
        flex:1,
        justifyContent:'center'
    },

    div3:{
        flex:0.5,
        justifyContent:'center'
    },

    morestyles:{
        textAlign:'right',
        fontSize:14,
        marginBottom:5,
        fontFamily:'Montserrat-Medium',
    },
    details:{
        paddingLeft:10
    },
    iconstyles:{
        justifyContent:'center'
    },
    orderdetails:{
        fontSize:18,
        fontFamily:'Montserrat-Medium',
    },
    date:{
        fontFamily:'Montserrat-Medium',
    }


};

export default Completed;