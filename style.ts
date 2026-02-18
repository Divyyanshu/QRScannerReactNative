import {StyleSheet} from 'react-native';
import {COLORS} from '../../styles/colors';
import {FONTS} from '../../styles/fonts';
import {
  textScale,
  verticalModerateScale,
  verticalScale,
} from '../../styles/responsiveUnits';

export const styles = StyleSheet.create({
  noDataFound: {
    alignItems: 'center',
  },
  icon: {
    height: verticalScale(50),
    width: verticalScale(50),
    marginBottom: verticalModerateScale(15),
  },
  heading: {
    fontFamily: FONTS?.BOLD,
    fontSize: textScale(20),
    color: COLORS?.BLACK,
    textAlign: 'center',
    marginBottom: verticalModerateScale(3.5),
  },
  description: {
    fontFamily: FONTS?.REGULAR,
    fontSize: textScale(15),
    color: COLORS?.BLACK + '65',
    textAlign: 'center',
  },
});
