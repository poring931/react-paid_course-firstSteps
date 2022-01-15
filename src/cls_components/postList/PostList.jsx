import React from 'react'
import PostItem from './PostItem';

export default class PostList extends React.Component {
     state = {
        posts: this.props.posts,
    };
    render() {
        return (
            <div className="commentsList">
            {
                this.props.posts.map(post =>(
                  <PostItem   key={post.id} post={post}  delFcn={this.props.delFcn}/>
                ))
            }

            </div>
        )
    }
}
