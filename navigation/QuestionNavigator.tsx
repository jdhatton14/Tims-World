import { Ionicons } from '@expo/vector-icons';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import QuestionOneScreen from '../screens/QuestionOneScreen';
import QuestionTwoScreen from '../screens/QuestionTwoScreen';
import {QuestionOneParamList, QuestionParamList, QuestionTwoParamList } from '../types';

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
