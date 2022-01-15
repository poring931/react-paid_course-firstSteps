import React, { Component } from 'react'

export default class PostItem extends Component {
    state = {
        post: this.props.post
    };
    render() {
        return (
            <div title="УДАЛИТЬ" onClick={()=>(this.props.delFcn(this.props.post.id))}>
                <h3>{this.props.post.title}</h3>
                <div>{this.props.post.body}</div>
            </div>
        )
    }
}
