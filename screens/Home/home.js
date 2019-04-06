import React, { Component } from 'react'
import { SafeAreaView, View, Text, TouchableOpacity } from 'react-native'
import styles from './home.style'
import { colors } from '../../utilities'
import { Header, Icon } from '../../components'
import playArrowIcon from '../../assets/icons/play_arrow.png'
import trophyIcon from '../../assets/icons/trophy.png'
import leaderboardIcon from '../../assets/icons/leaderboard.png'

class Home extends Component {

  constructor(props) {
    super(props);
    
    this.state = ({
      isSoundOn: false,
      hiScore: 0,
    })

    this.onToggleSound = this.onToggleSound.bind(this);
  }

  onPlayPress() {
    console.log('Play pressed')
  }

  onLeaderboardPress() {
    console.log('Leaderboard pressed')
  }

  onToggleSound() {
    this.setState(prevState => ({
      isSoundOn: !prevState.isSoundOn
    }))
  }

  render() {
    const { isSoundOn, hiScore } = this.state
    const soundIconSource = isSoundOn
      ? require('../../assets/icons/speaker-on.png')
      : require('../../assets/icons/speaker-off.png')

    const PlayContainer = ({ onClick }) => (
      <TouchableOpacity onPress={onClick} style={styles.playContainer}>
        <Icon src={playArrowIcon} width={60} height={60} />
        <Text style={styles.play}>PLAY!</Text>
      </TouchableOpacity>
    )
    
    const HiScoreContainer = ({ hiScore }) => (
      <View style={styles.hiscoreContainer}>
        <Icon src={trophyIcon} width={45} height={45} margin={12.5} />
        <Text style={styles.hiscore}>{`Hi-score: ${hiScore}`}</Text>
      </View>
    )
    
    const LeaderBoardContainer = ({ onClick }) => (
      <TouchableOpacity onPress={onClick} style={styles.leaderboardContainer}>
        <Icon src={leaderboardIcon} width={50} height={50} />
        <Text style={styles.leaderboard}>Leaderboard</Text>
      </TouchableOpacity>
    )

    const ViewSpacing = () => (
      <View style={{ flex: 1 }} />
    )
    
    const BottomContainer = ({ onToggleSound }) => (
      <View style={styles.bottomContainer}>
        <View>
          <Text style={[styles.copyrightText, colors.red]}>
            Music: Komiku
          </Text>
          <Text style={[styles.copyrightText, colors.yellow]}>
            SFX: SubspaceAudio
          </Text>
          <Text style={[styles.copyrightText, colors.blue]}>
            Development: RisingStack
          </Text>
        </View>
        <ViewSpacing />
        <TouchableOpacity onPress={onToggleSound}>
          <Icon src={soundIconSource} height={35} width={35} />
        </TouchableOpacity>
      </View>
    )

    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.container}>
          <ViewSpacing />
          <Header />
          <PlayContainer onClick={this.onPlayPress} />
          <HiScoreContainer hiScore={hiScore} />
          <LeaderBoardContainer onClick={this.onLeaderboardPress} />
          <ViewSpacing />
          <BottomContainer onToggleSound={this.onToggleSound} />
        </View>
      </SafeAreaView>
    );
  }
}

export default Home