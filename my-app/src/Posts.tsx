import gql from 'graphql-tag'
import * as React from 'react';
import { graphql } from 'react-apollo'
import { ChildProps } from 'react-apollo';

import Post from './Post'

const QUERY = gql`
    query allPosts {
        allPosts {
            author {
                name
                id
            }
            content
            time
        }
    }
`
const withData = graphql<InputProps, Response>(QUERY, {});

interface InputProps {
    data?: {
        allPosts?: [{
            author: {
                name: string,
                id: string
            },
            content: string
            time: string
        }]
    }
}

class Posts extends React.Component<ChildProps<InputProps, Response>>  {
    public viewProfile = () => {
        alert('You do not have permission to view user 246.')
    }
    public like = () => {
        alert('You do not have permission to view user 246.')
    }
    public render() {
        return (
            <div className="wrap">
                <div className="posts">
                    {this.props.data && this.props.data.allPosts && this.props.data.allPosts.map((post, i) => {
                        return (<Post author={post.author.name} key={i} userId={post.author.id}>{post.content}</Post>)
                    })}
                </div>
                <aside>
                    <p className="smallCaps sponsor">SPONSORED</p>
                    <img src="square.png" alt="" />
                    <p className="adTitle">
                        Cornell Hacking Club
                </p>
                    <p className="body">
                        We are a group dedicated to understanding, deconstructing, and ultimately breaking systems in order to advance computer and
                        network security. Our main purpose is to compete in global hacking competitions known as CTFs. We also work
                        on hacking related software projects.
                </p>
                </aside>
            </div>
        );
    }
}

export default withData(Posts);
