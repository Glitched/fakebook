import gql from 'graphql-tag'
import * as React from 'react';
import { graphql } from 'react-apollo'
import { ChildProps } from 'react-apollo';

interface InputProps {
    match: {
        params: {
            profileId: string
        }
    }
    data?: {
        Member?: {
            name: string,
            age: number,
            birthday: string,
            company: string,
            favoriteColor: string,
            occupation: string,
            email: string
        }
    }
}

const QUERY = gql`
    query profileInfo($userId: ID) {
        Member(id: $userId) {
        name
        age
        birthday
        company
        favoriteColor
        occupation
        email
    }
}
`

const withData = graphql<InputProps, Response>(QUERY, {
    options: ({ match }) => ({
        variables: { userId: match.params.profileId }
    })
});

class Post extends React.Component<ChildProps<InputProps, Response>> {
    public render() {
        return (
            <React.Fragment>
                <div className="cover" />
                <div className="wrap">
                    <div className="posts">
                        <span className="profileHeader author" id={this.props.match.params.profileId}> {this.props.data && this.props.data.Member && this.props.data.Member.name}</span>

                        <section className="post">
                            <span className="author" id="246">Profile</span>
                            <ul>
                                <li>
                                    <b>Name:</b> {this.props.data && this.props.data.Member && this.props.data.Member.name}
                                </li>
                                <li>
                                    <b>Age:</b> {this.props.data && this.props.data.Member && this.props.data.Member.age}
                                </li>
                                <li>
                                    <b>Birthday:</b> {this.props.data && this.props.data.Member && new Date(this.props.data.Member.birthday).toDateString()}
                                </li>
                                <li>
                                    <b>Email:</b> {this.props.data && this.props.data.Member && this.props.data.Member.email}
                                </li>
                                <li>
                                    <b>Occupation:</b> {this.props.data && this.props.data.Member && this.props.data.Member.occupation}
                                </li>
                                <li>
                                    <b>Company:</b> {this.props.data && this.props.data.Member && this.props.data.Member.company}
                                </li>
                                <li>
                                    <b>Favorite Color:</b> {this.props.data && this.props.data.Member && this.props.data.Member.favoriteColor}
                                </li>
                            </ul>
                        </section>
                    </div>
                    <aside>
                        <p className="smallCaps sponsor">SPONSORED</p>
                        <img src="square.png" alt="" />
                        <p className="adTitle"> Cornell Hacking Club </p>
                        <p className="body"> We are a group dedicated to understanding, deconstructing, and ultimately breaking systems in order to advance computer and network security. Our main purpose is to compete in global hacking competitions known as CTFs. We also work on hacking related software projects. </p>
                    </aside>
                </div>
            </React.Fragment>

        );
    }
}


export default withData(Post);
