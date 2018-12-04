import React, { Component } from 'react';

import Header from './Header';
import Post from './Post';

import './index.scss';

export default class App extends Component {
  state = {
    posts: [
      {
        id: 1,
        avatar: 'images/male.jpg',
        name: 'Marcio Pereira Pinto',
        lastUpdate: 'há 10 min',
        content:
          "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      },
      {
        id: 2,
        avatar: 'images/female.png',
        name: 'Ana Carolina Dourado',
        lastUpdate: 'há 5 min',
        content:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      },
      {
        id: 3,
        avatar: 'images/male.jpg',
        name: 'Marcio Pereira Pinto',
        lastUpdate: 'há 2 min',
        content:
          "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      },
    ],
  };

  render() {
    const { posts } = this.state;

    return (
      <div>
        <Header />
        {posts && posts.map(post => <Post key={post.id} data={post} />)}
      </div>
    );
  }
}
