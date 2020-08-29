import React, {Component} from 'react';
import {View, StyleSheet, Dimensions, TextInput, Picker, TouchableWithoutFeedback} from 'react-native';
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
    Item,
    Radio,
    ListItem,
    Card,
  } from 'native-base';
  import { RadioButtons } from 'react-native-radio-buttons'

  import Constants from '../Constants';

const {width: WIDTH} = Dimensions.get('window');

class Q1 extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            selectedAns: '',
            selectedOption: ''
        };
        
    }

    handleProceed = () => {
            //alert(Constants.questions[0].correctAnswer)
            let correct = Constants.questions[0].correctAnswer;
            if(this.state.selectedOption == correct){
                Constants.score += 1
            }
            this.props.navigation.navigate('Q2')

    }

    setSelectedOption = (selectedOption) => {
        this.setState({
          selectedOption
        });
      }

      renderOption = (option, selected, onSelect, index) => {
        const style = selected ? { fontWeight: 'bold'} : {};
     
        return (
          <TouchableWithoutFeedback onPress={onSelect} key={index}>
            <Text style={style}>{option}</Text>
          </TouchableWithoutFeedback>
        );
      }
  render() {



    const options = [
        "A transpiler.",
        "A Compiler.",
        "Both."
    ];
    return (
      <Container >
        <View style={{justifyContent: 'center', alignContent: 'center', flex: 1, padding: 10}}>
            <Card style={{padding: 15}}>
                <Text style={{fontWeight: 'bold'}}>{Constants.questions[0].question}</Text>
                <ListItem>
                    <Left>
                    <RadioButtons
                        options={ options }
                        onSelection={ this.setSelectedOption }
                        //selectedOption={this.state.selectedOption }
                        renderOption={ this.renderOption}
                    />
                    </Left>
                    {/* <Right>
                        <Radio selected={this.state.isChecked3} onPress={() => this.onRadioPress('isChecked3')}/>
                    </Right> */}
                </ListItem>
                <Text>Selected option: {this.state.selectedOption || 'none'}</Text>
                <View style= {{marginTop: 10 }}>
                    <Button success onPress={() => this.handleProceed()} style={styles.button}>
                        <Text>Next</Text>
                    </Button>
                </View>
            </Card>

            
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
        width: 80, 
        height: 40, 
        justifyContent: 'center',
        alignSelf: 'flex-end'
    },

})

export default Q1;