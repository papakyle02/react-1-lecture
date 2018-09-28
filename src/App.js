import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'input name',
      url: 'input url',
      friends: [{name: 'T$', url: 'http://http.cat/404'}]
    };
    this.updateURL = this.updateURL.bind(this);
    this.addFriend = this.addFriend.bind(this);
  }

  updateURL(event){
    this.setState({
      url: event.target.value
    })
  }

  addFriend(event) {
    const newFriend = {name: this.state.name, url: this.state.url};
    const friendsCopy = this.state.friends.slice();
    friendsCopy.push(newFriend);
    this.setState({friends: friendsCopy});
    this.clearNames();
  }

  clearNames(event) {
    this.setState({name: '', url: ''})
  }
  render() {
    // const name = this.state.name;
    // const url = this.state.url;
    const {name, url, friends } = this.state;
    console.log('this state',this.state);
    return (
      <div>
        <div>
          Name:  <input value = {name}  onChange={e => this.setState({name: e.target.value})} />
          {name}
          
        </div>
        <div>
        Picture URL: <input value = {url} onChange={this.updateURL} />
        {url}
        <div>
          <button onClick={this.addFriend}>Add friend</button>
          <div>Friends: {friends.map(friend => {
            return <div>
              Name: {friend.name}{' '}&nbsp;
              Picture: <img src={friend.url} />
              </div>
          })}</div>
        </div>
        </div>
      </div>
    );
  }
}

export default App;
