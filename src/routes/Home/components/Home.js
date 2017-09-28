import React ,{Component} from 'react';
import {View,Text} from 'react-native';

class Home extends Component{
 componentDidMount(){
     this.props.setName();
 }
     render(){
         return(
            <View style={{
                flex:1,
                justifyContent:'center',
                alignItems:'center'
            }}>
            <Text> Hello {this.props.name}</Text>
            </View>
         )
     }
}
export default Home;