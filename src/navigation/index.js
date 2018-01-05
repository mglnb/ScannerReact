import React, { Component } from "react";
import { TabNavigator } from "react-navigation";
import { Button, Text, Icon, Footer, FooterTab } from "native-base";
import Home from '../screens/Home'
import Scanner from '../screens/Scanner'
import History from '../screens/History'
export default (MainScreenNavigator = TabNavigator(
  {
    Home: { screen: Home },
    Scanner: { screen: Scanner },
    History: { screen: History },
    Create: { screen: Home }
  },
  {
    swipeEnabled: false, 
    tabBarPosition: "bottom",
    tabBarComponent: props => {
      return (
        <Footer>
          <FooterTab>
            <Button
              vertical
              active={props.navigationState.index === 0}
              onPress={() => props.navigation.navigate("Home")}>
              <Icon name="list" />
              <Text>Listagem</Text>
            </Button>
            <Button
              vertical
              active={props.navigationState.index === 1}
              onPress={() => props.navigation.navigate("Scanner")}>
              <Icon name="qr-scanner" />
              <Text>Leitor</Text>
            </Button>
            <Button
              vertical
              active={props.navigationState.index === 2}
              onPress={() => props.navigation.navigate("History")}>
              <Icon name="timer" />
              <Text>Histórico</Text>
            </Button>
            <Button 
              vertical
              active={props.navigationState.index === 3}
              onPress={() => props.navigation.navigate("Create")}>
              <Icon name="create" />
              <Text>Cadastro</Text>  
            </Button>
          </FooterTab>
        </Footer>
      );
    }
  }
));
