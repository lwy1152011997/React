import React, {Component} from 'react';
import Search from './components/search';
import Lists from './components/lists';

/*
需求: 默认是请输入搜索内容
     输入之后效果是 loading...
     请求成功之后展示请求的内容
*/

class App extends Component {
  state = {
    searchName: ''
  }

  // 更新数据的方法
  updateSearchName = (searchName) => {
    this.setState({
      searchName: searchName
    })
  }
  render() {
    const {searchName} = this.state;
    return (
      <div className="container">
        <Search updateSearchName={this.updateSearchName}/>
        <Lists searchName={searchName}/>
      </div>
    )
  }
}
export default App;
