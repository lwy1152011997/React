import React, {Component} from 'react';

class News extends Component {
  state = {
    news: ['NBA', 'CBA', 'CUBA']
  }
  render() {
    const {news} = this.state;
    return (
      <ul>
        {
          news.map((item,index) => {
            return (
              <li key={index}>{item}</li>
            )
          })
        }
      </ul>
    )
  }
}

export default News;
