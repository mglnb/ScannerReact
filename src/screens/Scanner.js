import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View, Alert, Dimensions} from 'react-native';
import BarcodeScanner, { FocusMode, CameraFillMode } from 'react-native-barcode-scanner-google';
 
let items = [
  {
    id: '7896436100666',
    name: "Água da Pedra",
    qtdFardo: 12
  },
  {
    id: '7896436101380',
    name: "Fruki Citrus (Lata)",
    qtdFardo: 6
  },
  {
    id: '7896436100260',
    name: "Fruki Cola (Lata)",
    qtdFardo: 12
  },
  {
    id: '7896436100741',
    name: "Frukito Laranja",
    qtdFardo: 12
  }, 
  
]

export default class Scanner extends Component {

  render () {
    let {width, height} = Dimensions.get('window')
    return (
      <View style={{ flex: 1 }}>
        <BarcodeScanner
          style={{ flex: 1 }}              
          cameraFillMode={CameraFillMode.FIT}
          focusMode={FocusMode.TAP}
          onBarcodeRead={(e) => this._handleRead(e)}
        />

      </View>
    );
  }  
  _handleRead ({ data, type }) {
    items.forEach((value, index) => {
      if (data == value.id) {
        alert(`${value.name}, quantidade de peças no fardo: ${value.qtdFardo}`)
      }
    })
  }
}