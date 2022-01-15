import logo from './logo.svg';
import './App.css';
import React from 'react';
import Times from './components/Timer/TimerLocalStorage';
import PostList from './components/postList/PostList';
import Form from './components/Form/Form';
import TickTackToe from './components/ticTacToe/TickTackToe';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      someKey: false,
      posts:[],
      loading: true,
      comments:[],
   
    }
    this.handleClickMinus = this.handleClickMinus.bind(this)
  }


  handleClickMinus() {
    this.setState({count: this.state.count - 1})
  }

  componentDidMount() {
    
    console.log('componentDidMount')
      fetch('https://jsonplaceholder.cypress.io/posts')
        .then(response => response.json())
        .then(data => this.setState({posts: data.slice(1, 10), loading:false}))

    this.timerId = setInterval(() => {
        fetch('https://jsonplaceholder.cypress.io/comments')
          .then(response => response.json())
          .then(data => this.setState({comments: data, }))
    }, 20000)

  }

  componentDidUpdate() {
    console.log('componentDidUpdate')

  }

  componentWillUnmount(){
    clearInterval(this.timerId)
  }


  removePost = (id) => {
    // console.log('setState updated');
    // console.log(id);
    let newPosts = this.state.posts.filter(post=> post.id !== id)
    this.setState({posts: newPosts})

  }


  render(){
    return (
      <div className="App">
        <Form/>
        <TickTackToe/>
        <button onClick={this.handleClickMinus}>-</button>
        <span>{this.state.count}</span>
        <button onClick={()=>this.setState({count: this.state.count + 1})}>+</button>
        <Times/>
                <h3>Подгруженные посты с возможностью удаления</h3>

        
          {
            this.state.loading ? (<h3>Loading ....</h3>) 
              : 
            (
             <PostList posts={this.state.posts} delFcn={this.removePost}/>
            )
          }
      </div>
    )
  }

}

export default App;
