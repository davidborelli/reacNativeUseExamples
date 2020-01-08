import React from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import {RNCamera} from 'react-native-camera';

import * as S from './styles';

export default function App() {
  takePicture = async () => {
    if (this.camera) {
      const options = {quality: 0.5, base64: true};
      const data = await this.camera.takePictureAsync(options);
      alert(data.uri);
    }
  };

  return (
    <S.Container>
      <RNCamera
        ref={camera => {
          this.camera = camera;
        }}
        // style={styles.preview}
        type={RNCamera.Constants.Type.back}
        autoFocus={RNCamera.Constants.AutoFocus.on}
        flashMode={RNCamera.Constants.FlashMode.off}
        permissionDialogTitle={'Permission to use camera'}
        permissionDialogMessage={
          'We need your permission to use your camera phone'
        }
      />
      <View>
        <TouchableOpacity onPress={this.takePicture}>
          <Text> SNAP </Text>
        </TouchableOpacity>
      </View>
    </S.Container>
  );
}
