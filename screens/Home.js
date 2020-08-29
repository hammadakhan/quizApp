import React, {Component} from 'react';
import {View, StyleSheet, Dimensions, TextInput} from 'react-native';
import {
    Button,
    Text,
    Header,
    Left,
    Body,
    Right,
    Title,
    Icon,
    Content,
    Container,
  } from 'native-base';
import Constants from '../Constants';

const {width: WIDTH} = Dimensions.get('window');

class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
        };
    }

    handleProceed = () => {
        if(this.state.name != ''){
            Constants.userName = this.state.name;
            this.props.navigation.navigate('Q1');
        }
        else{
            alert('Please enter your name.')
        }
    }

  render() {

    return (
      <Container >
        <View style={{justifyContent: 'center', alignContent: 'center', flex: 1}}>
            <View >
                    <Icon name="ios-person" style={{top:48, left: 36, fontSize: 22}}/>
                
                <TextInput
                autoCorrect={false}
                onChangeText={(text) => this.setState({name: text.replace(/[- #*;,.<>\{\}\[\]\\\/]/gi, '')})}
                placeholder="Enter your Name"
                value={this.state.name}
                style={styles.input}
                placeholderTextColor={'rgba(255, 255, 255, 255)'}
                underlineColorAndroid='transparent'
                />
            </View>

            <View style= {{marginTop: 5}}>
                <Button rounded dark onPress={() => this.handleProceed()} style={styles.button}>
                    <Text>Proceed</Text>
                </Button>
            </View>
        </View>   
            
      </Container>
    )
  }
}

const styles = StyleSheet.create({
    input: {
        width: WIDTH - 55,
        height: 40,
        borderRadius: 25,
        fontSize: 16,
        paddingLeft: 45,
        backgroundColor: 'rgba(0, 0, 0, 0.25)',
        color: 'rgba(255, 255, 255, 0.7)',
        marginHorizontal: 25,
        paddingBottom: 10,
        marginTop: 15,
        borderColor: '#009688',
        borderWidth: 1
    },
    button:{
        width: WIDTH - 40, 
        height: 40, 
        justifyContent: 'center',
        alignSelf: 'center'
    },

})

export default Home;