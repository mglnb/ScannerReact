import React, { Component } from 'react';
import { Container, Header, Content, List, ListItem, Text, Icon, Left, Body, Right, Switch, Title } from 'native-base';
import { StyleSheet } from 'react-native';
export default class ListIconExample extends Component {
  render () {
    return (
      <Container>
        <Header>
          <Body>
            <Title>O que você anda fazendo?</Title>
          </Body>
        </Header>
        <Content>
          <List>
            <ListItem icon >
              <Left>
                <Icon name="add" style={{ color: 'green' }} />
              </Left>
              <Body style={styles.bodyList}>
                <Text style={[styles.textQtd, { color: 'green' }]} >5</Text>
                <Text style={{ color: 'green' }}>Água da Pedra</Text>
              </Body>
              <Right>
                <Text style={[styles.textTime, { color: 'green' }]}> 04/01/2018 23:44</Text>

              </Right>
            </ListItem>
            <ListItem icon >
              <Left>
                <Icon name="remove" style={{ color: 'red' }} />
              </Left>
              <Body style={styles.bodyList}>
                <Text style={[styles.textQtd, { color: 'red' }]} >10</Text>
                <Text style={{ color: 'red' }}>Fruki Cola (Lata)</Text>
              </Body>
              <Right>
                <Text style={[styles.textTime, { color: 'red' }]}> 04/01/2018 22:44</Text>

              </Right>
            </ListItem>
            <ListItem icon >
              <Left>
                <Icon name="add" style={{ color: 'green' }} />
              </Left>
              <Body style={styles.bodyList}>
                <Text style={[styles.textQtd, { color: 'green' }]} >15</Text>
                <Text style={{ color: 'green' }}>Água da Pedra</Text>
              </Body>
              <Right>
                <Text style={[styles.textTime, { color: 'green' }]}> 04/01/2018 21:44</Text>

              </Right>
            </ListItem>
          </List>
        </Content>
      </Container>
    );
  }
}


const styles = StyleSheet.create({
  textTime: { fontSize: 14 },
  bodyList: { flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start' },
  textQtd: { width: 20, textAlign: 'center' },

})