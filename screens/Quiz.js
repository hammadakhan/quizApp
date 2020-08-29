import React, {Component} from 'react';
import {View, TouchableWithoutFeedback} from 'react-native';
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
import { ScrollView } from 'react-native-gesture-handler';
import { RadioButtons } from 'react-native-radio-buttons'

class Quiz extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            answers: [],
            isChecked1: true,
            isChecked2: false,
            isChecked3: false,
            selectedOption: ''
        };
        this.questions = [
            {'qId': 1, 'question': 'What is your name?', 'correctAnswer': 'Zain'},
            {'qId': 2, 'question': 'What is your age?', 'correctAnswer': '18'},
            {'qId': 3, 'question': 'Where do you live?', 'correctAnswer': 'Karachi'},
            {'qId': 4 ,'question': 'Where do you study?', 'correctAnswer': 'SZABIST'}
        ]
        this.answers = [
            {'qId': 1, 'content' : ["zksjbviul", "Zain","padssa"]},
            {'qId': 2, "content": ["asndasd", "plxs","18"]},
            {'qId': 3, "content": ["Karachi", "mxsaas","padssa"]},
            {'qId': 4, "content": ["asndasd", "asxas","SZABIST"]}
        ]
        this.an = //[
                {
                    'ans1':[
                        {
                            'qId': '1',
                            "content": ["zksjbviul", "Zain","padssa"],
                            
                        },
                        {
                            'qId': '2',
                            "content": ["asndasd", "plxs","18"],
                            
                        },
                        {
                            'qId': '3',
                            "content": ["Karachi", "mxsaas","padssa"],
                            
                        },
                        {
                            'qId': '4',
                            "content": ["asndasd", "asxas","SZABIST"],
                            
                        },
                    ],
                    

                }
        //]
    }

    componentDidMount(){
        //let ans = this.an.map((item, index) => item.ans2.content);
        let ansy = this.an.ans1;
        
        let ans = ansy.map(item => item.qId)

        let answers = this.answers.map((item) => item.content)
        this.setState({answers: ans})
        alert(JSON.stringify(answers))
    }

    onRadioPress = (val) => {
        let value= ''
        if(val == 'isChecked3'){
            this.setState({
                isChecked1: false,
                isChecked2: false,
                isChecked3: true
            })
        }
        else if(val == 'isChecked2'){
            this.setState({
                isChecked1: false,
                isChecked2: true,
                isChecked3: false
            })
        }
        else if(val == 'isChecked1'){
            this.setState({
                isChecked1: true,
                isChecked2: false,
                isChecked3: false
            })
        }

        alert(val);
    }

    renderOption = (option, selected, onSelect, index) => {
        const style = selected ? { fontWeight: 'bold'} : {};
     
        return (
          <TouchableWithoutFeedback onPress={onSelect} key={index}>
            <Text style={style}>{option}</Text>
          </TouchableWithoutFeedback>
        );
      }

    setSelectedOption = (selectedOption) => {
        this.setState({
          selectedOption
        });
      }
  

  render() {

    const options = [
        "Option 1",
        "Option 2"
      ];
    return (
      <Container >
        <ScrollView>
        <View style={{margin: 20}}>
            <RadioButtons
                options={ options.map(item => item.content) }
                onSelection={ this.setSelectedOption }
                //selectedOption={this.state.selectedOption }
                renderOption={ this.renderOption }
                extractText={ (option) => option.label }
            />
            <Text>Selected option: {this.state.selectedOption || 'none'}</Text>
        </View>
        <View style={{padding: 10}}>
            {this.questions.map((itemq, index) => (
                <Card>
                    <View style={{padding:10}}>
                        <Text style={{fontWeight: 'bold'}}>{itemq.question}</Text>
                    </View>
                    
                    {this.state.answers.map((itema, index) => (
                        itema.qId == itemq.qId &&
                            <View key={index}>
                                <ListItem>
                                    <Left>
                                        <Text>{itema.content[0]}</Text>
                                    </Left>
                                    <Right>
                                        <Radio selected={this.state.isChecked1} onPress={() => this.onRadioPress('isChecked1')}/>
                                    </Right>
                                </ListItem>
                                <ListItem>
                                    <Left>
                                        <Text>{itema.content[1]}</Text>
                                    </Left>
                                    <Right>
                                        <Radio selected={this.state.isChecked2} onPress={() => this.onRadioPress('isChecked2')}/>
                                    </Right>
                                </ListItem>
                                <ListItem>
                                    <Left>
                                        <Text>{itema.content[2]}</Text>
                                    </Left>
                                    <Right>
                                        <Radio selected={this.state.isChecked3} onPress={() => this.onRadioPress('isChecked3')}/>
                                    </Right>
                                </ListItem>
                                
                            </View>
                            
                    ))}
                    
                </Card>
            ))}
        </View>
        </ScrollView>
      </Container>
    );
  }
}

export default Quiz;