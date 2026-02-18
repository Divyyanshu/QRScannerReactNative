import {useFocusEffect} from '@react-navigation/native';
import {JSX, useCallback} from 'react';
import {Modal} from 'react-native';
import {STATUS_BAR_CONFIG} from '../../utilities/statusBarConfigs';
import {changeStatusBarColor} from '../Wrappers/SafeAreaViewWrapper';
import {CameraModule} from './CameraModule';

interface QRScannerProps {
  visible?: boolean;
  onClose: () => void;
  onCodeScanned: (codes: string) => void;
}

export const QRScanner = ({
  visible,
  onClose,
  onCodeScanned,
}: QRScannerProps): JSX.Element => {
  useFocusEffect(
    useCallback(() => {
      changeStatusBarColor(STATUS_BAR_CONFIG.DEFAULT);
    }, []),
  );

  return (
    <Modal visible={visible} style={{flex: 1}} onRequestClose={onClose}>
      <CameraModule onTerminateCamera={onClose} onCodeScanned={onCodeScanned} />
    </Modal>
  );
};
