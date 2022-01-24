import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import Ionicons from "@expo/vector-icons/Ionicons"

import { NavigationContainer } from '@react-navigation/native';
import { BottomTabNavigationOptions, createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';

// 탭별 컴포넌트
import Home from "./components/Home"
import List from "./components/List"
import Task from "./components/Task"


// 탭 네이게이터 생성
const Tab = createBottomTabNavigator();

// 탭 옵션
const screenOptions = ({ route }) => ({
  tabBarIcon: ({ focused, color, size }) => {
    let iconName;

    // 탭 경로에 따른 아이콘 결정
    if (route.name === "Home") {
      iconName = focused
        ? "ios-information-circle"
        : "ios-information-circle-outline";
    } else if (route.name === "List") {
      iconName = focused ? "ios-list-box" : "ios-list";
    } else if (route.name === "Task") {
      iconName = "checkmark-outline";
    }

    // You can return any component that you like here!
    return <Ionicons name={iconName} size={size} color={color} />;
  },
  // 탭 활성화/비활성화 상태 따른 컬러 다름
  tabBarActiveTintColor: "tomato",
  tabBarInactiveTintColor: "gray",
})

export default function App() {
  return (
   <NavigationContainer>
     <Tab.Navigator  screenOptions={screenOptions}>
       {/* 실제 탭 목록 */}
       <Tab.Screen name="Home" component={Home}/>
       <Tab.Screen name="List" component={List}/>
       <Tab.Screen name="Task" component={Task}/>
     </Tab.Navigator>
   </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

// sytlesheet 는 컴포넌트 밖에 만들어주는게 좋음, 컴포넌트가 생성될때 스타일도 함께 계속 생성되기 때문?
// 네비게이션에 라우팅을 넣어서 컴포넌트 불러오게함
