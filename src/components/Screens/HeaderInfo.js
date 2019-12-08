import React, { Component } from 'react';
import { View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import FontText from '../FontText';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import NavigationService from '../../services/navigate';

export default class HeaderInfo extends Component {
   render() {
      return (
         <View style={styles.detailsContainerHeader}>
            <TouchableOpacity
               style={styles.detailsHeader}
               onPress={() => NavigationService.navigate('ProfileDetails')}>
               <View style={{ flex: 1, justifyContent: 'center' }}>
                  <FontText style={{ fontSize: 19 }}>
                     Hi, Thắng Lương Thành
                  </FontText>
                  <FontText style={{ fontSize: 13 }}>
                     <Icon name="map-marker" />
                     Quận 9, HCM
                  </FontText>
               </View>
               <View
                  style={{
                     width: 70,
                     height: 70,
                     paddingTop: 10,
                     borderRadius: 35,
                     overflow: 'hidden',
                     backgroundColor: '#3ddc84'
                  }}>
                  <Image
                     style={{ width: 70, height: 70 }}
                     source={{
                        uri: 'https://www.pngrepo.com/png/17468/170/avatar.png'
                     }}
                  />
               </View>
            </TouchableOpacity>
         </View>
      );
   }
}

const styles = StyleSheet.create({
   detailsContainerHeader: {
      width: '100%',
      height: 90,
      paddingHorizontal: '5%',
      justifyContent: 'center',

      backgroundColor: 'white',
      borderBottomWidth: 0.5,
      borderBottomColor: '#c9c9c9',

      shadowColor: '#000',
      shadowOffset: {
         width: 0,
         height: 11
      },
      shadowOpacity: 0.57,
      shadowRadius: 15.19,

      elevation: 23
   },
   detailsHeader: {
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center'
   }
});