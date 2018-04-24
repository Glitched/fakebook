import * as React from 'react';

interface InputProps {
    author: string
    userId: string
    children?: any
}

class Post extends React.Component<InputProps> {
    public viewProfile = () => {
        alert('You do not have permission to view user ' + this.props.userId + '.')
    }
    public like = () => {
        alert('Do you really want to like that?')
    }
    public createMarkup() {
        return { __html: this.props.children };
    }
    public render() {
        return (
            <section className="post">
                <span className="author" id={this.props.userId} onClick={this.viewProfile}>{this.props.author}</span>
                <p className="body" dangerouslySetInnerHTML={this.createMarkup()} />
                <div className="tag smallCaps" onClick={this.like}>Like</div>
                <a href="https://rt.com/" className="tag smallCaps" target="_blank">RT</a>
            </section>
        );
    }
}

export default Post;
