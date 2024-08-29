// Write your JS code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'

import './index.css'
import CryptocurrencyItem from '../CryptocurrencyItem'

class CryptocurrenciesList extends Component {
  state = {currencyList: [], isLoading: true}

  componentDidMount() {
    this.getCryptocurrencyItem()
  }

  getCryptocurrencyItem = async () => {
    const response = await fetch(
      'https://apis.ccbp.in/crypto-currency-converter',
    )
    const data = await response.json()
    const updateCurrencyList = data.map(each => ({
      currencyLogo: each.currency_logo,
      currencyName: each.currency_name,
      euroValue: each.euro_value,
      id: each.id,
      usdValue: each.usd_value,
    }))

    this.setState({currencyList: updateCurrencyList, isLoading: false})
  }

  render() {
    const {currencyList, isLoading} = this.state
    console.log(currencyList)
    return (
      <>
        {isLoading ? (
          <div className="loader-container" data-testid="loader">
            <Loader type="Rings" color="#ffffff" height={80} width={80} />
          </div>
        ) : (
          <div className="home-page">
            <h1 className="heading">Cryptocurrency Tracker</h1>
            <img
              src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png"
              alt="cryptocurrency"
              className="img"
            />
            <div className="table-container">
              <div className="row-container">
                <h1 className="row-heading">Coin Type</h1>
                <h1 className="row-heading">USD</h1>
                <h1 className="row-heading">EURO</h1>
              </div>
              <ul>
                {currencyList.map(each => (
                  <CryptocurrencyItem currencyList={each} key={each.id} />
                ))}
              </ul>
            </div>
          </div>
        )}
      </>
    )
  }
}

export default CryptocurrenciesList
