import React from 'react';
import {TouchableOpacity, ActivityIndicator} from 'react-native';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {BoldText} from './CommonText';

export const CurveButton = props => {
  return (
    <TouchableOpacity
      onPress={props.onPress}
      style={[
        props.style,
        {
          flexDirection: 'row',
          borderRadius: 30,
          backgroundColor: '#6C5BDC',
          justifyContent: 'center',
          alignItems: 'center',
          paddingVertical: hp('2%'),
        },
      ]}>
      {props.plus ? (
        <BoldText style={{color: 'white', fontSize: hp('3%')}} title={'+ '} />
      ) : null}
      {props.loading ? <ActivityIndicator size="small" color={'#FFF'} /> : null}
      {!props.loading && (
        <BoldText
          style={{color: 'white', fontSize: hp('2%')}}
          title={props.title}
        />
      )}
    </TouchableOpacity>
  );
};