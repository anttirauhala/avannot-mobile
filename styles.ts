import {StyleSheet} from 'react-native';

const colors = {
  appBackground: '#F9F9F9',
  bodyText: '#221123',
  tabActive: '#095095',
  tabInactive: '#2980b5',
  link: '#2980b9',
  separatorLine: '#a2a2a2',
  errorColor: '#f53030',
  inputBorder: '#a1a1a1',
};

const fonts = {
  quicksandRegular: (fontSize: number, color: string = colors.bodyText) => ({
    fontFamily: 'Quicksand-Regular',
    fontSize,
    color,
    backgroundColor: 'transparent',
  }),
  quicksandBold: (fontSize: number, color: string = colors.bodyText) => ({
    fontFamily: 'Quicksand-Bold',
    fontSize,
    color,
    backgroundColor: 'transparent',
  }),
  quicksandLight: (fontSize: number, color: string = colors.bodyText) => ({
    fontFamily: 'Quicksand-Light',
    fontSize,
    color,
    backgroundColor: 'transparent',
  }),
};

const styles = StyleSheet.create({
  tabs: {
    flex: 1,
    backgroundColor: colors.appBackground,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bodyText: {
    ...fonts.quicksandRegular(18),
  },
  headerText: {
    ...fonts.quicksandBold(18),
  },
});

export {fonts, colors, styles};
