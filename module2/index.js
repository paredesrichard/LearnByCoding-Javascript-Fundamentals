console.log('****************** ___ Number Game ____ *******************');
console.log('*************** ___ Find the highest scored team ____ ***********');

let team1 = {
  'name': 'TEAM 1',
  'players': [players[0], players[1], players[2]],
  'totalTeamScore': 0
};

let team2 = {
  'name': 'TEAM 2',
  'players': [players[3], players[4], players[5]],
  'totalTeamScore': 0
};

let team3 = {
  'name': 'TEAM 3',
  'players': [players[6], players[7], players[8]],
  'totalTeamScor3': 0
};

// Display teams summary and store in variable to find the winner
displayTeam(team1);
displayTeam(team2);
displayTeam(team3);

// Display winner team
displayWinner();