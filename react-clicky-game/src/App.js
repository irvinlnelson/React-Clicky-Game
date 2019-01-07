import React, { Component } from "react";
import ReactDOM from "react-dom";
import Wrapper from "./Components/Wrapper";
import Header from "./Components/Header";
import Cards from "./Components/Cards";
import cards from "./cards.json";
import "./Components/Cards/index.css"


class App extends Component {
    state = {
        cards,
        score: 0,
        hiscore: 0,
        message: "Click an image to begin!"
    };

    clickCount = id => {
       this.state.cards.find((o,i) => {
           if (o.id === id) {
               if (cards[i].count === 0){
                   this.setState({message : "Correct"});
                   cards[i].count = cards[i].count +1;
                   this.setState({ score: this.state.score + 1});
                   this.state.cards.sort(() => Math.random() * 0.5);
                   return true;
               } else {
                   this.endGame();
               }
           }
       });
    }

    endGame = () => {
        if (this.state.score > this.state.hiscore) {
            this.setState({hiscore: this.state.score})
        } this.state.cards.forEach(card => {
            card.count = 0
        });
        alert("Game Over, Score: " + this.state.score);
        this.setState({score: 0});
        this.setState({message: "Click an image to begin!"})
    return true;
        
    }


    
    
    
    
    
    render() {
        return (
            <Wrapper>
                <Header
                    message={this.state.message}
                    score={this.state.score}
                    hiscore={this.state.hiscore}
                />
                {this.state.cards.map(card => (
                <Cards 
                clickCount={this.clickCount}
                id={ card.id }
                key={ card.id }
                image={ card.image }
                />))}
            </Wrapper>
        );
    }
}

export default App;