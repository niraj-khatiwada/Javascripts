//Golden State Vs Houston
const warriorGames = [
    {
        awayteam: {
            team: 'Golden State',
            points: 119,
            isWinner: true
        },
        hometeam: {
            team: 'Houston',
            points: 106,
            isWinner: false
        }
    },
    {
        awayteam: {
            team: 'Golden State',
            points: 105,
            isWinner: false

        },
        hometeam: {
            team: 'Housten',
            points: 127,
            isWinner: true
        },
    },
    {
        awayteam: {
            team: 'Houston',
            points: 85,
            isWinner: false
        },
        hometeam: {
            team: 'Golden State',
            points: 126,
            isWinner: true
        }
    },
    {
        hometeam: {
            team: 'Golden State',
            points: 115,
            isWinner: true
        },
        awayteam: {
            team: 'Houston',
            points: 86,
            isWinner: false
        }
    },
    {
        awayteam: {
            team: 'Golden State',
            points: 101,
            isWinner: true
        },
        hometeam: {
            team: 'Houston',
            points: 92,
            isWinner: false
        }
    },
    {
        hometeam:{
            team: "Houston",
            points: 100,
            isWinner: false
        },
        awayteam:{
            team: "Golden State",
            points: 120,
            isWinner: true  
        }
    }
];

//Los Angeles Lakers Vs Toronto Raptors
const lakersGame = [
    {
        hometeam:{
            team: "LOS Angeles Lakers",
            points: 120,
            isWinner:true
        },
        awayteam: {
            team:"Toronto Raptors",
            points: 102,
            isWinner:false
        }

    },

];

const game = (gameData) => {
    const div_container = document.createElement("div")
    document.body.appendChild(div_container)
    const new_ul = document.createElement("ul");
    const parent_ul = div_container.appendChild(new_ul)
    const gameTitle = `${gameData[0].hometeam['team']} Vs ${gameData[0].awayteam['team']}`
    div_container.insertAdjacentHTML("afterbegin", `<h1>${gameTitle}</h1`)

    for (let item of gameData) {
    const new_li = document.createElement("li");
    const {hometeam, awayteam} = item;
    parent_ul.appendChild(new_li);
    //Every li is set to loser first
    new_li.classList.add("loser");
    //Toggle Class List based on score
    let score;
    if (hometeam.isWinner) {
        new_li.classList.toggle("winner");
        const strong = `<strong>${hometeam.points}</strong> - ${awayteam.points}`;
        new_li.innerHTML = `${hometeam.team} VS ${awayteam.team} ${strong} `;
    }
    else {
        const strong = `${hometeam.points} - <strong>${awayteam.points}</strong>`;
        new_li.innerHTML = `${hometeam.team} VS ${awayteam.team} ${strong} `;
    }

    }
}

//Golden State Vs Houston
game(warriorGames);
//LOS ANgeles Lakers VS Toronto Raptors
game(lakersGame);
game(lakersGame)


