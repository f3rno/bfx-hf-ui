import React from 'react'
import ClassNames from 'classnames'
import Select from '../../ui/Select'

import { propTypes, defaultProps } from './MarketSelect.props'
import './style.css'

export default class MarketSelect extends React.PureComponent {
  static propTypes = propTypes
  static defaultProps = defaultProps

  render() {
    const {
      value, onChange, markets, className, ...otherProps
    } = this.props

    return (
      <Select
        className={ClassNames('hfui-marketselect', className)}
        onChange={(selection) => {
          onChange(markets.find(m => m.u === selection.value))
        }}

        value={{
          label: value.u || `${value.b}/${value.q}`,
          value: value.u,
        }}

        options={markets.map(m => ({
          label: m.u || `${m.b}/${m.q}`,
          value: m.u,
        }))}

        {...otherProps}
      />
    )
  }
}
