import { StyleSheet } from 'react-native'
import { scale, isIphoneX } from '../../utilities'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0a0a0a',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#fff'
  },
  leaderboard: {
    fontSize: scale(38),
    fontFamily: 'dogbyte',
    color: '#ecf0f1',
    marginTop: 5,
  },
  leaderboardContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 80,
  },
  play: {
    fontSize: scale(42),
    fontFamily: 'dogbyte',
    color: '#ecf0f1',
    marginTop: 5,
  },
  playContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 80,
  },
  hiscore: {
    fontSize: scale(28),
    fontFamily: 'dogbyte',
    color: '#ecf0f1',
    marginTop: 5,
  },
  hiscoreContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
  },
  bottomContainer: {
    marginBottom: isIphoneX() ? 0 : '5%',
    marginHorizontal: '5%',
    flexDirection: 'row',
  },
});

export default styles