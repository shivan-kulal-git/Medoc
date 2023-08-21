import {StyleSheet} from 'react-native';

export const CELL_SIZE = 55;
export const CELL_BORDER_RADIUS = 8;
export const DEFAULT_CELL_BG_COLOR = '#fff';
export const NOT_EMPTY_CELL_BG_COLOR = '#3557b7';
export const ACTIVE_CELL_BG_COLOR = '#f7fafe';

const styles = StyleSheet.create({
  codeFiledRoot: {
    height: CELL_SIZE,
    marginTop: 30,
    paddingHorizontal: 20,
    justifyContent: 'center',
  },
  cell: {
    marginHorizontal: 8,
    height: CELL_SIZE,
    width: CELL_SIZE,
    lineHeight: CELL_SIZE - 5,
    fontSize: 30,
    textAlign: 'center',
    borderRadius: CELL_BORDER_RADIUS,
    color: '#3759b8',
    backgroundColor: '#fff',


    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    
    elevation: 3,
  },


  root: {
    minHeight: 800,
    padding: 30,
    backgroundColor: '#FFFFFF',
  },
  title: {
    paddingTop: 80,
    color: '#000',
    fontSize: 25,
    fontWeight: '700',
    textAlign: 'center',
    paddingBottom: 40,
  },
  icon: {
    width: 217 / 1.8,
    height: 158 / 1.8,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  subTitle: {
    paddingTop: 30,
    color: '#000',
    textAlign: 'center',
  },
  nextButton: {
    marginTop: 30,
    borderRadius: 60,
    height: 60,
    backgroundColor: '#3557b7',
    justifyContent: 'center',
    minWidth: 300,
    marginBottom: 100,
  },
  nextButtonText: {
    textAlign: 'center',
    fontSize: 20,
    color: '#fff',
    fontWeight: '700',
  },
  nextButton1: {
    marginTop: '5%',
    borderRadius: 60,
    height: '5%',
    left: '35%',
    justifyContent: 'center',
    width: '30%',
    bottom: '15%',
  },
  nextButtonText1: {
    textAlign: 'center',
    fontSize: 20,
    color: '#3557b7',
    fontWeight: '700',
  },
});

export default styles;
