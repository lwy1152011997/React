import React, {Component} from 'react';
import PropTypes from 'prop-types';
class Search extends Component {
  // 规定search组件接收数据的类型
  static propTypes = {
    updateSearchName: PropTypes.func.isRequired
  }
  state = {
    searchName: ''
  }
  // 使用受控组件的方式收集input中的数据
  updateSearchName = (ev) => {
    this.setState({
      searchName: ev.target.value
    })
  }
  // 点击提交搜索的信息
  search = () => {
    const {searchName} = this.state;
    this.props.updateSearchName(searchName);
  }
  render() {
    return (
      <section className="jumbotron">
        <h3 className="jumbotron-heading">Search Github Users</h3>
        <div>
          <input type="text"
                 placeholder="enter the name you search"
                 onChange={this.updateSearchName}/>
          <button onClick={this.search}>Search</button>
        </div>
      </section>
    )
  }
}
export default Search;
