// Unofficial World Championship

// The unofficial world champion is a concept in association football that states that the team who beats
// the winner of the World Cup becomes the "unofficial world champion", until they themselves are beaten 
// in a regular match, at which point the title is transferred again to the winning team. Thus, the "belt" can be held
// by many teams in sequence as the season progresses, with no relation to the actual standings of the league.
//
// Note: in the event of a title match being a draw, the current holders of the title remain champions.
//
// Given a dataset containing results of matches, starting with the World Cup finals,
// calculate the current "unofficial world champion".
// Assume the first match in the dataset is the World Cup finals.

/* 
sample data:

[
    [
        {
            name: "argentina",
            score: 1
        },
        {
            name: "uruguay",
            score: 2
        }
    ],
    [
        {
            name: "paraguay",
            score: 2
        },
        {
            name: "uruguay",
            score: 0
        }
    ],
    [
        {
            name: "mexico",
            score: 3
        },
        {
            name: "paraguay",
            score: 2
        }
    ]
];

sample answer: mexico

*/
const fs = require('fs');

const newDataStr = fs.readFileSync('dataset.json');
const matchData = JSON.parse(newDataStr);

let currWorldChampion = "";

matchData.forEach((md) => {
    // account for draws
    if (md[0].score === md[1].score) {
        return;
    }

    let winner, loser;
    if (md[0].score > md[1].score) {
        winner = md[0];
        loser = md[1];
    } else {
        loser = md[0];
        winner = md[1];
    }

    // account for first match
    if (currWorldChampion === "") {
        currWorldChampion = winner.name;
        return;
    }

    if (loser.name === currWorldChampion) {
        currWorldChampion = winner.name;
    }    
});

console.log(currWorldChampion);