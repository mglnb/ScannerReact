import React, { Component } from "react";
import { TabNavigator } from "react-navigation";
import { Button, Text, Icon, Footer, FooterTab } from "native-base";
import Home from '../screens/Home'
import Scanner from '../screens/Scanner'
export default (MainScreenNavigator = TabNavigator(
  {
    Home: { screen: Home },
    Scanner: { screen: Scanner },
    Navigate: { screen: Home },
    Contact: { screen: Home }
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
              <Icon name="apps" />
              <Text>Listagem</Text>
            </Button>
            <Button
              vertical
              active={props.navigationState.index === 1}
              onPress={() => props.navigation.navigate("Scanner")}>
              <Icon name="camera" />
              <Text>Leitor</Text>
            </Button>
            <Button
              vertical
              active={props.navigationState.index === 2}
              onPress={() => props.navigation.navigate("Navigate")}>
              <Icon name="navigate" />
              <Text>Histórico</Text>
            </Button>
            <Button
              vertical
              active={props.navigationState.index === 3}
              onPress={() => props.navigation.navigate("Contact")}>
              <Icon name="person" />
              <Text>Cadastro</Text>
            </Button>
          </FooterTab>
        </Footer>
      );
    }
  }
));
