import React from "react";
import "react-native-gesture-handler";

import { StyleSheet } from "react-native";

//https://ionic.io/ionicons
import Ionicons from "@expo/vector-icons/Ionicons";

import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

// 노치 및 펀치홀 영역 제어
import { SafeAreaProvider } from "react-native-safe-area-context";

// 탭별 컴포넌트
import Home from "./components/Home";
import List from "./components/List";
import Task from "./components/Task";

//스택 컴포넌트
import Detail from "./components/Detail";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// 탭 네이게이터 생성
const Tab = createBottomTabNavigator();
// 스택 네비게이션 생성
const ListStack = createNativeStackNavigator();

// 리스트 스택 스크린
const ListStackScreen = () => {
  return (
    <ListStack.Navigator>
      <ListStack.Screen
        name="List"
        component={List}
        options={{ title: "List", headerTitleAlign: "center" }}
      />
      <ListStack.Screen
        name="Detail"
        component={Detail}
        options={{ title: "Detail", headerTitleAlign: "center" }}
      />
    </ListStack.Navigator>
  );
};

// 탭 옵션
const screenOptions = ({ route }) => ({
  tabBarIcon: ({ focused, color, size }) => {
    let iconName;

    // 탭 경로에 따른 아이콘 결정
    if (route.name === "Home") {
      iconName = focused ? "home" : "home-outline";
    } else if (route.name === "List") {
      iconName = focused ? "list" : "list-outline";
    } else if (route.name === "Task") {
      iconName = focused ? "checkmark" : "checkmark-outline";
    }

    // You can return any component that you like here!
    return <Ionicons name={iconName} size={size} color={color} />;
  },
  // 탭 활성화/비활성화 상태 따른 컬러 다름
  tabBarActiveTintColor: "tomato",
  tabBarInactiveTintColor: "gray",
});

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Tab.Navigator screenOptions={screenOptions}>
          {/* 실제 탭 목록 */}
          <Tab.Screen name="Home" component={Home} />
          <Tab.Screen name="List" component={ListStackScreen} />
          <Tab.Screen name="Task" component={Task} />
        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center",
//   },
// });

// sytlesheet 는 컴포넌트 밖에 만들어주는게 좋음, 컴포넌트가 생성될때 스타일도 함께 계속 생성되기 때문?
// 네비게이션에 라우팅을 넣어서 컴포넌트 불러오게함
