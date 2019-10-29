import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import friends from "./friends.json.js";

/*
1) Create a function that loops through the images and use Math.random to display randomly after each picture is clicked
2) Start with a count=0
3) Every time the image is clicked 
4) Need to remember which picture has been clicked for each round
5) If the clicked picture is different than any of the picture clicked, the score goes up
6) Create a nav bar 

4. The application should keep track of the user's score. The user's score should be incremented when clicking an image for the first time. The user's score should be reset to 0 if they click the same image more than once.

5. Every time an image is clicked, the images rendered to the page should shuffle themselves in a random order.

6. Once the user's score is reset after an incorrect guess, the game should restart.

*/

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    friends,
    count = 0
  };

  // create a function that uploads 
  componentDidMount() {
    this.loadImages();
  } 

  loadImages() {
    this.state.friends.map(friend =>
      Math.floor(Math.random()
      )
    )
  }

  selectPic = id => {
    // Filter this.state.friends for friends with an id not equal to the id being removed
    const friends = this.state.friends.filter(friend => friend.id !== id);
    // Set this.state.friends equal to the new friends array
    if (friends)
    this.loadImages({ friends });
  };





  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <Wrapper>
        <Title>Friends List</Title>
        {this.state.friends.map(friend => (
          <FriendCard
            id={friend.id}
            key={friend.id}
            image={friend.image}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;

render() {
  return (
    <div>
      <h1 className="text-center">Make New Friends</h1>
      <h3 className="text-center">
        Thumbs up on any pups you'd like to meet!
      </h3>
      <Card image={this.state.image} handleBtnClick={this.handleBtnClick} />
      <h1 className="text-center">
        Made friends with {this.state.matchCount} pups so far!
      </h1>
      <Alert style={{ opacity: this.state.match ? 1 : 0 }} type="success">
        Yay! That Pup Liked You Too!!!
      </Alert>
    </div>
  );
}
}

export default Discover;