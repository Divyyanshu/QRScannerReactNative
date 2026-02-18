import {StyleSheet} from 'react-native';
import {COLORS} from '../../../styles/colors';
import {COMMON_STYLES, SCREEN_DIMENSIONS} from '../../../styles/common';
import {FONTS} from '../../../styles/fonts';
import {
  horizontalModerateScale,
  textScale,
  verticalModerateScale,
  verticalScale,
} from '../../../styles/responsiveUnits';
import {TOP_SAFEAREA_SPACING} from '../../Wrappers/SafeAreaViewWrapper';

export const styles = StyleSheet.create({
  cameraModule: {
    flex: 1,
    backgroundColor: COLORS?.BLACK,
  },
  neckLineContainer: {
    top: SCREEN_DIMENSIONS.WINDOW_HEIGHT / 4,
    zIndex: 10,
    width: SCREEN_DIMENSIONS.WINDOW_WIDTH,
    height: SCREEN_DIMENSIONS.WINDOW_WIDTH,
    justifyContent: 'center',
    alignItems: 'center',
  },
  neckLine: {
    width: SCREEN_DIMENSIONS.WINDOW_WIDTH,
    height: SCREEN_DIMENSIONS.WINDOW_WIDTH,
  },
});

export const overlay = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: COMMON_STYLES.SCREEN_HORIZONTAL_SPACING,
    paddingVertical: TOP_SAFEAREA_SPACING,
    justifyContent: 'space-between',
  },
  topSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: verticalModerateScale(15),
  },
  leftSection: {},
  rightSection: {
    gap: verticalModerateScale(30),
  },
  topSectionIconContainer: {
    height: verticalScale(40),
    width: verticalScale(40),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS?.BLACK + 10,
    borderRadius: 100,
  },
  topSectionIcon: {
    height: verticalScale(25),
    width: verticalScale(25),
  },
  backIcon: {
    height: verticalScale(20),
    width: verticalScale(20),
  },
  bottomSection: {
    alignItems: 'center',
  },
  recordingDurationContainer: {
    paddingHorizontal: horizontalModerateScale(15),
    paddingVertical: verticalModerateScale(6),
    marginBottom: horizontalModerateScale(20),
    borderRadius: 1000,
    backgroundColor: COLORS?.ERROR,
  },
  recordingDurationText: {
    fontFamily: FONTS?.MEDIUM,
    fontSize: textScale(16),
    textTransform: 'capitalize',
    color: COLORS?.WHITE,
  },
  timerContainer: {alignItems: 'center', justifyContent: 'center'},
  timingLabelContainer: {
    paddingHorizontal: horizontalModerateScale(8),
  },
  timingLabelText: {
    fontFamily: FONTS?.MEDIUM,
    fontSize: textScale(16),
    textTransform: 'capitalize',
  },
  shutterSection: {
    columnGap: horizontalModerateScale(30),
    flexDirection: 'row',
    alignItems: 'center',
  },
  shutterSectionIconWithTextContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    rowGap: verticalModerateScale(5),
  },
  shutterSectionIcon: {
    height: verticalScale(50),
    width: verticalScale(50),
  },
  shutter: {
    height: verticalScale(80),
    width: verticalScale(80),
  },
  uploadModal: {
    rowGap: verticalModerateScale(25),
  },
  uploadModalRow: {
    flexDirection: 'row',
    columnGap: horizontalModerateScale(12.5),
    alignItems: 'center',
  },
  uploadModalRow_icon: {
    height: verticalScale(50),
    width: verticalScale(50),
  },
  uploadModalRow_text: {
    fontFamily: FONTS?.MEDIUM,
    fontSize: textScale(16),
    textTransform: 'capitalize',
    color: COLORS?.BLACK,
  },
});
