import React from 'react'
import { Text, View, StyleSheet } from 'react-native'
import PropTypes from 'prop-types'
import styles from './header.style'
import { scale, colors } from '../../utilities'

const { red, orange, yellow, green, blue } = colors;

export const Header = ({ fontSize }) => (
  <View style={{ flexDirection: 'row' }}>
    <Text style={[styles.header, red, { fontSize: scale(fontSize) }]}>c</Text>
    <Text style={[styles.header, orange, { fontSize: scale(fontSize) }]}>o</Text>
    <Text style={[styles.header, yellow, { fontSize: scale(fontSize) }]}>l</Text>
    <Text style={[styles.header, green, { fontSize: scale(fontSize) }]}>o</Text>
    <Text style={[styles.header, blue, { fontSize: scale(fontSize) }]}>r</Text>
    <Text style={[styles.header, { fontSize: scale(fontSize) }]}>blinder</Text>
  </View>
)

Header.propTypes = {
  fontSize: PropTypes.number,
};

Header.defaultProps = {
  fontSize: 45,
};