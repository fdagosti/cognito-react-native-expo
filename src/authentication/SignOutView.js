import React from 'react';
import SignInView from './SignInView';
import {FontAwesome} from "@expo/vector-icons";
import * as utils from "../utils";

class SignOutView extends SignInView {

    static navigationOptions = ({ navigation }) => {
        return ({
            drawerIcon: ({ tintColor, focused }) => (
                <FontAwesome name={'sign-out'} size={20} color={tintColor}/>
            )
        })
    };

    constructor(props) {
        super(props)
        utils.removeEmailUserID(() => {
            console.log('user credentials cleared');
        });
    }
}

export default SignOutView