import React, { Component } from 'react';
import { ListView, View, StyleSheet } from 'react-native';
import { Container, Header, Content, Button, Icon, List, ListItem, Text, Body, Title } from 'native-base';
const datas = [
  { qtd: 2, name: 'Água da Pedra' },
  { qtd: 15, name: 'Fruki Citrus (Lata)' },
  { qtd: 10, name: 'Fruki Cola (Lata)' },
  { qtd: 5, name: 'Frukito Laranja' },
];
export default class Home extends Component {
  constructor (props) {
    super(props);
    this.ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    this.state = {
      basic: true,
      listViewData: datas,
    };
  }
  deleteRow (secId, rowId, rowMap) {
    rowMap[`${secId}${rowId}`].props.closeRow();
    const newData = [...this.state.listViewData];
    newData.splice(rowId, 1);
    this.setState({ listViewData: newData });
  }
  render () {
    const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    return (
      <Container>
        <Header>
          <Body>
            <Title>O Que há na geladeira?</Title>
          </Body>
        </Header>
        <Content> 
          <List
            dataSource={this.ds.cloneWithRows(this.state.listViewData)}
            renderRow={data =>
              <ListItem>
                <Text style={styles.textQtd}> {data.qtd}</Text>
                <Text style={styles.textName}> {data.name} </Text>
              </ListItem>} 
            renderLeftHiddenRow={data =>
              <View style={{ flexDirection: 'row' }}>
                <Button full onPress={() => alert(data)}>
                  <Icon active name="remove-circle" />
                </Button>
                <Button full onPress={() => alert(data)}>
                  <Icon active name="add-circle" />
                </Button>
              </View>}
            renderRightHiddenRow={(data, secId, rowId, rowMap) =>
              <Button full danger onPress={_ => this.deleteRow(secId, rowId, rowMap)}>
                <Icon active name="trash" />
              </Button>}
            leftOpenValue={150}
            rightOpenValue={-75}
          />
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  textQtd: { width: 40, textAlign: 'center' },
  textName: { marginLeft: 2 },
})