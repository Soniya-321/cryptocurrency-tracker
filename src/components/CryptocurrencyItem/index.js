// Write your JS code here
import {Component} from 'react'
import './index.css'

class CryptocurrencyItem extends Component {
  render() {
    const {currencyList} = this.props
    const {currencyLogo, currencyName, euroValue, usdValue, id} = currencyList

    return (
      <li className="row-container-1">
        <div className="coin-type">
          <img src={currencyLogo} alt={currencyName} className="logo-img" />
          <p className="value">{currencyName}</p>
        </div>
        <p className="value">{usdValue}</p>
        <p className="value">{euroValue}</p>
      </li>
    )
  }
}

export default CryptocurrencyItem
