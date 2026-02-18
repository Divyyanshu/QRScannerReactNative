import {useIsFocused} from '@react-navigation/native';
import React, {useEffect, useRef, useState} from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {View} from 'react-native-animatable';
// import {
//   Camera,
//   CameraCaptureError,
//   CameraPosition,
//   useCameraDevice,
//   useCameraFormat,
//   useCameraPermission,
//   useMicrophonePermission,
// } from 'react-native-vision-camera';
import {
  Camera,
  useCameraDevice,
  useCameraPermission,
  useCodeScanner,
} from 'react-native-vision-camera';
import {COLORS} from '../../../styles/colors';
import {ICON_PATHS} from '../../../utilities/iconPaths';
import {overlay, styles} from './style';
import {customFlashMessage} from '../../../utilities/commonFunctions';

export const CameraModule = ({
  onCodeScanned,
  onTerminateCamera,
}: {
  onCodeScanned: (code: string) => void;
  onTerminateCamera: () => void;
}): React.JSX.Element => {
  // Hooks
  const isFocused = useIsFocused();

  // States
  const [flashStatus, setFlashStatus] = useState<'on' | 'off'>('off');

  // Permissions
  const {
    hasPermission: hasCameraPermission,
    requestPermission: requestCameraPermission,
  } = useCameraPermission();

  // Camera Configurations
  const camera = useRef<Camera>(null);
  const device = useCameraDevice('back', {
    physicalDevices: [
      'telephoto-camera',
      'ultra-wide-angle-camera',
      'wide-angle-camera',
    ],
  });

  const codeScanner = useCodeScanner({
    codeTypes: ['data-matrix'],
    onCodeScanned: codes => {
      if (codes.length > 0) {
        let value = codes[0].value;
        let valueSplit = value?.split(')');
        let finalValue = valueSplit ? valueSplit[valueSplit?.length - 1] : '';
        if (valueSplit?.length === 5) {
          onCodeScanned(finalValue);
        } else {
          customFlashMessage({
            type: 'danger',
            icon: 'danger',
            message: 'Wrong format. Please scan again.',
          });
        }
        onTerminateCamera();
      }
    },
  });

  // Functions
  const getRequiredPermissions = () => {
    requestCameraPermission();
  };

  const toggleFlash = async () => {
    if (flashStatus === 'off') {
      setFlashStatus('on');
    } else if (flashStatus === 'on') {
      setFlashStatus('off');
    }
  };

  // UseEffects
  useEffect(() => {
    getRequiredPermissions();
  });

  if (!hasCameraPermission) {
    return <></>;
  }
  if (device == null) {
    return <></>;
  }

  return (
    <View style={styles?.cameraModule}>
      <Camera
        ref={camera}
        style={[StyleSheet?.absoluteFill]}
        device={device}
        isActive={isFocused}
        enableZoomGesture
        codeScanner={codeScanner}
        outputOrientation="preview"
        resizeMode="cover"
      />

      <View style={overlay?.container} pointerEvents="box-none">
        {/* Header */}
        <View style={overlay?.topSection}>
          <View style={overlay?.leftSection}>
            {/* Back */}
            <TouchableOpacity
              style={overlay?.topSectionIconContainer}
              onPress={() => {
                onTerminateCamera();
              }}>
              <ICON_PATHS.CROSS
                height={overlay?.backIcon?.height}
                width={overlay?.backIcon?.width}
                stroke={COLORS?.WHITE}
                strokeWidth={2}
              />
            </TouchableOpacity>
          </View>

          <View style={overlay?.rightSection}>
            {/* Flash */}
            {device?.hasFlash ? (
              <TouchableOpacity
                style={overlay?.topSectionIconContainer}
                onPress={() => {
                  toggleFlash();
                }}>
                {flashStatus === 'on' && (
                  <ICON_PATHS.FLASH_ON
                    height={overlay?.topSectionIcon?.height}
                    width={overlay?.topSectionIcon?.width}
                  />
                )}

                {flashStatus === 'off' && (
                  <ICON_PATHS.FLASH_OFF
                    height={overlay?.topSectionIcon?.height}
                    width={overlay?.topSectionIcon?.width}
                  />
                )}
              </TouchableOpacity>
            ) : null}
          </View>
        </View>
      </View>
    </View>
  );
};
