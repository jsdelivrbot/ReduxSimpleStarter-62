import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import GooderList from './components/gooder_list';
import GooderDetail from "./components/gooder_detail";
import OptionBar from './components/option_bar';

const MG_API_URL = 'https://api.mygooder.com/api/v1/gooders';

const LOCATIONS = {
  'Partout' : '',
  'Nantes' : '47.218371%2C-1.553621000000021',
  'Rennes' : '48.117266%2C-1.6777925999999752',
  'Brest' : '48.390394%2C-4.4860760000000255',
  'Bordeaux' : '44.837789%2C-0.5791799999999512',
  'Angers' : '47.478419%2C-0.5631660000000238',
  'La Rochelle' : '46.160329%2C-1.1511390000000574'
};

class App extends Component{
  constructor(props) {
    super(props);

    this.state = {
      nbGooders: null,
      nbPages: null,
      currentPage: null,
      gooders: [],
      selectedGooder: null,
      options: {
        limit:3,
        page: 1,
        location: null // nantes -> 47.218371%2C-1.553621000000021
      }
    }
    this.callMyGooderApi(MG_API_URL, this.state.options);
  }

  callMyGooderApi(url, options){
    let optStr = '?';
    let c = 0;
    let o = '';
    for(const option in options) {
      if (c != 0) o = "&";
      if (options[option]) {
        optStr += `${o}${option}=${options[option]}`;
      }
      c++;
    }

    fetch(url + optStr)
      .then(result => {
        // Get the result, If we want text, call result.text()
        return result.json();
      }).then(jsonResult => {
      this.setState({
        nbGooders: jsonResult.gooders.total,
        nbPages: jsonResult.gooders.last_page,
        currentPage: jsonResult.gooders.current_page,
        gooders: jsonResult.gooders.data,
        selectedGooder: jsonResult.gooders.data[0]
      });
    })
  }

  render() {
    const tmpOptions = this.state.options;

    const nbGooderPerPageChange = (nb) => {
      tmpOptions.limit = nb;
      this.setState({tmpOptions}, () => {
        this.callMyGooderApi(MG_API_URL, this.state.options);
      });
    }
    const nbPageChange = (nb) => {
      tmpOptions.page = nb;
      this.setState({tmpOptions}, () => {
        this.callMyGooderApi(MG_API_URL, this.state.options);
      });
    }
    const locationChange = (location) => {
      tmpOptions.location = location;
      this.setState({tmpOptions}, () => {
        this.callMyGooderApi(MG_API_URL, this.state.options);
      });
    }
    return (
      <div>
        <OptionBar
          // option bar
          nbGooders={this.state.nbGooders}
          // option bar nb items
          nbGooderPerPageChange={nb => nbGooderPerPageChange(nb)}
          // option bar nb pages
          nbPages={this.state.nbPages}
          nbPageActive={nb => nbPageChange(nb)}
          // option bar location
          locationsTab={LOCATIONS}
          locationChange={location => locationChange(location)}
        />
        <GooderDetail gooder={this.state.selectedGooder} />
        <GooderList
          onGooderSelect={selectedGooder => this.setState({selectedGooder})}
          gooders={this.state.gooders}
        />
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.querySelector('.container')
);