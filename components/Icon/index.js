import React from 'react'
import { Image } from 'react-native'
import PropTypes from 'prop-types'
import { scale } from '../../utilities'

export const Icon = ({ src, height, width, margin, style }) => (
  <Image
    source={src}
    style={{ height: scale(height), width: scale(width), marginRight: margin, ...style }}
  />
)

Icon.propTypes = {
  src: PropTypes.string.isRequired,
  height: PropTypes.number,
  width: PropTypes.number,
  margin: PropTypes.number,
};

Icon.defaultProps = {
  height: 50,
  width: 50,
  margin: 15,
};