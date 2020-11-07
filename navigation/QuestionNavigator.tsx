import { Ionicons } from '@expo/vector-icons';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import QuestionOneScreen from '../screens/QuestionOneScreen';
import QuestionTwoScreen from '../screens/QuestionTwoScreen';
import QuestionThreeScreen from '../screens/QuestionThreeScreen';
import QuestionFourScreen from '../screens/QuestionFourScreen';
import {QuestionOneParamList, QuestionParamList, QuestionTwoParamList, QuestionThreeParamList, QuestionFourParamList} from '../types';

const QuestionTab = createStackNavigator<QuestionParamList>();

export default function QuestionNavigator() {
  const colorScheme = useColorScheme();

  return (
    <QuestionTab.Navigator
      initialRouteName="QuestionOne">
      <QuestionTab.Screen
        name="QuestionOne"
        component={QuestionOneNavigator}
      />
       <QuestionTab.Screen
        name="QuestionTwo"
        component={QuestionTwoNavigator}
      />
      <QuestionTab.Screen
        name="QuestionThree"
        component={QuestionThreeNavigator}
      />
      <QuestionTab.Screen
        name="QuestionFour"
        component={QuestionFourNavigator}
      />
     



    </QuestionTab.Navigator>
  );
}

const QuestionOneStack = createStackNavigator<QuestionOneParamList>();

function QuestionOneNavigator() {
  return (
    <QuestionOneStack.Navigator>
      <QuestionOneStack.Screen
        name="QuestionOneScreen"
        component={QuestionOneScreen}
        options={{ headerTitle: 'Question One' }}
      />
  </QuestionOneStack.Navigator>
  );
}

const QuestionTwoStack = createStackNavigator<QuestionTwoParamList>();

function QuestionTwoNavigator() {
  return (
    <QuestionTwoStack.Navigator>
      <QuestionTwoStack.Screen
        name="QuestionTwoScreen"
        component={QuestionTwoScreen}
        options={{ headerTitle: 'Question Two' }}
      />
  </QuestionTwoStack.Navigator>
  );
}

const QuestionThreeStack = createStackNavigator<QuestionThreeParamList>();

function QuestionThreeNavigator() {
  return (
    <QuestionThreeStack.Navigator>
      <QuestionThreeStack.Screen
        name="QuestionThreeScreen"
        component={QuestionThreeScreen}
        options={{ headerTitle: 'Question Three' }}
      />
  </QuestionThreeStack.Navigator>
  );
}

const QuestionFourStack = createStackNavigator<QuestionFourParamList>();

function QuestionFourNavigator() {
  return (
    <QuestionFourStack.Navigator>
      <QuestionFourStack.Screen
        name="QuestionFourScreen"
        component={QuestionFourScreen}
        options={{ headerTitle: 'Question Four' }}
      />
  </QuestionFourStack.Navigator>
  );
}

