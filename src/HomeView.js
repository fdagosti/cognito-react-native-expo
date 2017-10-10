import React from "react";
import {ListView, StyleSheet, Text, TouchableHighlight, View} from "react-native";
import {FontAwesome} from "@expo/vector-icons";

class HomeView extends React.Component {

    static navigationOptions = ({ navigation }) => {
        const {state} = navigation;

        return ({
                title: 'Home',
                headerLeft: (
                    <TouchableHighlight style={{paddingLeft: 10, width: 60, height: 30}} underlayColor='transparent'
                                        onPress={() => {
                                            navigation.state.params.burger()
                                        }}>
                        <FontAwesome name={'bars'} size={20}/>
                    </TouchableHighlight>
                ),
                drawerIcon: ({tintColor, focused}) => (
                    <FontAwesome name={'list'} size={20} color={tintColor}/>
                )
            }
        )
    };

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.navigation.setParams({burger: this.onBurger.bind(this)});
    }


    render() {
        return (
            <View style={{alignItems: 'center'}}>
                <Text style={{paddingTop:50}}>
                    Welcome to your amazing app.
                </Text>

            </View>
        );
    }

    onBurger() {
        this.props.navigation.navigate('DrawerOpen')
    }



}

export default HomeView;