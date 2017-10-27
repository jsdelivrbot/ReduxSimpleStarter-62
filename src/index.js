import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import GooderList from './components/gooder_list';
import GooderDetail from "./components/gooder_detail";
import OptionBar from './components/option_bar';

const MG_API_URL = 'https://api.mygooder.com/api/v1/gooders';

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
    return (
      <div>
        <OptionBar
          nbGooders={this.state.nbGooders}
          nbGooderPerPageChange={nb => nbGooderPerPageChange(nb)}
          nbPages={this.state.nbPages}
          nbPageActive={nb => nbPageChange(nb)}
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