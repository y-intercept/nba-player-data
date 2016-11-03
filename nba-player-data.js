const dal = require('./DAL/dalNoSQL.js');


const player = [{
    firstName: "Kareem",
    lastName: "Abdul-Jabbar",
    retired: true,
    gamesPlayed: 1560,
    perGame: {
      minutes: 36.8,
      points: 24.6,
      rebounds: 11.2,
      assists: 3.6,
      steals: 0.9,
      blocks: 2.6,
    },
    shooting: {
      fgPercent: .559,
      ftPercent: .721,
      threePercent: .056
    },
    championships: " ",
    allstar: " ",
    mvp: " ",
    scoringTitle: " "
  },
  {
    firstName: "Tiny",
    lastName: "Archibald",
    retired: true,
    gamesPlayed: 876,
    perGame: {
      minutes: 35.6,
      points: 18.8,
      rebounds: 2.3,
      assists: 7.4,
      steals: 1.1,
      blocks: 0.1,
    },
    shooting: {
      fgPercent: .467,
      ftPercent: .810,
      threePercent: .224
    },
    championships: " ",
    allstar: " ",
    mvp: " ",
    scoringTitle: " "
  },
  {
    firstName: "Paul",
    lastName: "Arizin",
    retired: true,
    gamesPlayed: 713,
    perGame: {
      minutes: 38.4,
      points: 22.8,
      rebounds: 8.6,
      assists: 2.3,
      steals: null,
      blocks: 0.1,
    },
    shooting: {
      fgPercent: .467,
      ftPercent: .810,
      threePercent: .224
    },
    championships: " ",
    allstar: " ",
    mvp: " ",
    scoringTitle: " "
  },
  {
    firstName: "Charles",
    lastName: "Barkely",
    retired: true,
    gamesPlayed: 1073,
    perGame: {
      minutes: 36.7,
      points: 22.1,
      rebounds: 11.7,
      assists: 3.9,
      steals: 1.5,
      blocks: 0.8,
    },
    shooting: {
      fgPercent: .541,
      ftPercent: .735,
      threePercent: .266
    },
    championships: 0,
    allstar: " ",
    mvp: " ",
    scoringTitle: " "
  },
  {
    firstName: "Rick",
    lastName: "Barry",
    retired: true,
    gamesPlayed: 794,
    perGame: {
      minutes: 36.3,
      points: 23.2,
      rebounds: 6.5,
      assists: 5.1,
      steals: 2.0,
      blocks: 0.5,
    },
    shooting: {
      fgPercent: .449,
      ftPercent: .900,
      threePercent: .330
    },
    championships: " ",
    allstar: " ",
    mvp: " ",
    scoringTitle: " "
  },
  {
    firstName: "Elgin",
    lastName: "Baylor",
    retired: true,
    gamesPlayed: 846,
    perGame: {
      minutes: 40.0,
      points: 27.4,
      rebounds: 13.5,
      assists: 4.3,
      steals: null,
      blocks: null,
    },
    shooting: {
      fgPercent: .431,
      ftPercent: .780,
      threePercent: null
    },
    championships: " ",
    allstar: " ",
    mvp: " ",
    scoringTitle: " "
  },
  {
    firstName: "Dave",
    lastName: "Bing",
    retired: true,
    gamesPlayed: 901,
    perGame: {
      minutes: 36.4,
      points: 20.3,
      rebounds: 3.8,
      assists: 6.0,
      steals: 1.3,
      blocks: 0.2,
    },
    shooting: {
      fgPercent: .441,
      ftPercent: .775,
      threePercent: null
    },
    championships: " ",
    allstar: " ",
    mvp: " ",
    scoringTitle: " "
  },
  {
    firstName: "Larry",
    lastName: "Bird",
    retired: true,
    gamesPlayed: 897,
    perGame: {
      minutes: 38.4,
      points: 24.3,
      rebounds: 10.0,
      assists: 7.4,
      steals: 1.1,
      blocks: 0.1,
    },
    shooting: {
      fgPercent: .467,
      ftPercent: .810,
      threePercent: .224
    },
    championships: " ",
    allstar: " ",
    mvp: " ",
    scoringTitle: " "
  },
  {
    firstName: "Wilt",
    lastName: "chamberlain",
    retired: true,
    gamesPlayed: 1045,
    perGame: {
      minutes: 45.8,
      points: 30.1,
      rebounds: 22.9,
      assists: 4.4,
      steals: null,
      blocks: null,
    },
    shooting: {
      fgPercent: 540,
      ftPercent: .511,
      threePercent: null
    },
    championships: " ",
    allstar: " ",
    mvp: " ",
    scoringTitle: " "
  },
  {
    firstName: "Bob",
    lastName: "Cousy",
    retired: true,
    gamesPlayed: 924,
    perGame: {
      minutes: 35.3,
      points: 18.4,
      rebounds: 5.2,
      assists: 7.5,
      steals: null,
      blocks: null,
    },
    shooting: {
      fgPercent: .375,
      ftPercent: .803,
      threePercent: null
    },
    championships: " ",
    allstar: " ",
    mvp: " ",
    scoringTitle: " "
  },
  {
    firstName: "Dave",
    lastName: "Cowens",
    retired: true,
    gamesPlayed: 766,
    perGame: {
      minutes: 38.6,
      points: 17.6,
      rebounds: 13.6,
      assists: 3.8,
      steals: 1.1,
      blocks: 0.9,
    },
    shooting: {
      fgPercent: .460,
      ftPercent: .783,
      threePercent: .071
    },
    championships: " ",
    allstar: " ",
    mvp: " ",
    scoringTitle: " "
  },
  {
    firstName: "Billy",
    lastName: "Cunningham",
    retired: true,
    gamesPlayed: 654,
    perGame: {
      minutes: 34.3,
      points: 20.8,
      rebounds: 10.1,
      assists: 4.0,
      steals: 1.2,
      blocks: 0.5,
    },
    shooting: {
      fgPercent: .446,
      ftPercent: .720,
      threePercent: null
    },
    championships: " ",
    allstar: " ",
    mvp: " ",
    scoringTitle: " "
  },
  {
    firstName: "Dave",
    lastName: "DeBusschere",
    retired: true,
    gamesPlayed: 875,
    perGame: {
      minutes: 35.7,
      points: 16.1,
      rebounds: 11.0,
      assists: 2.9,
      steals: 0.9,
      blocks: 0.5,
    },
    shooting: {
      fgPercent: .432,
      ftPercent: .699,
      threePercent: null
    },
    championships: " ",
    allstar: " ",
    mvp: " ",
    scoringTitle: " "
  },
  {
    firstName: "Clyde",
    lastName: "Drexler",
    retired: true,
    gamesPlayed: 1086,
    perGame: {
      minutes: 34.6,
      points: 20.4,
      rebounds: 6.1,
      assists: 5.6,
      steals: 2.0,
      blocks: 0.7,
    },
    shooting: {
      fgPercent: .472,
      ftPercent: .788,
      threePercent: .318
    },
    championships: " ",
    allstar: " ",
    mvp: " ",
    scoringTitle: " "
  },
  {
    firstName: "Julius",
    lastName: "Erving",
    retired: true,
    gamesPlayed: 876,
    perGame: {
      minutes: 34.3,
      points: 22.0,
      rebounds: 6.7,
      assists: 3.9,
      steals: 1.8,
      blocks: 1.5,
    },
    shooting: {
      fgPercent: .507,
      ftPercent: .777,
      threePercent: .261
    },
    championships: " ",
    allstar: " ",
    mvp: " ",
    scoringTitle: " "
  },
  {
    firstName: "Patrick",
    lastName: "Ewing",
    retired: true,
    gamesPlayed: 1183,
    perGame: {
      minutes: 34.3,
      points: 21.0,
      rebounds: 9.8,
      assists: 1.9,
      steals: 1.0,
      blocks: 2.4,
    },
    shooting: {
      fgPercent: .504,
      ftPercent: .740,
      threePercent: .152
    },
    championships: " ",
    allstar: " ",
    mvp: " ",
    scoringTitle: " "
  },
  {


    firstName: "Walt",
    lastName: "Frazier",
    retired: true,
    gamesPlayed: 876,
    perGame: {
      minutes: 37.5,
      points: 18.9,
      rebounds: 5.9,
      assists: 6.1,
      steals: 1.9,
      blocks: 0.2,
    },
    shooting: {
      fgPercent: .490,
      ftPercent: .786,
      threePercent: .000
    },
    championships: " ",
    allstar: " ",
    mvp: " ",
    scoringTitle: " "
  },
  {
    firstName: "George",
    lastName: "Gervin",
    retired: true,
    gamesPlayed: 791,
    perGame: {
      minutes: 33.5,
      points: 26.2,
      rebounds: 4.6,
      assists: 2.8,
      steals: 1.2,
      blocks: 0.8,
    },
    shooting: {
      fgPercent: .511,
      ftPercent: .844,
      threePercent: .297
    },
    championships: " ",
    allstar: " ",
    mvp: " ",
    scoringTitle: " "
  },
  {
    firstName: "Hal",
    lastName: "Greer",
    retired: true,
    gamesPlayed: 791,
    perGame: {
      minutes: 33.5,
      points: 26.2,
      rebounds: 4.6,
      assists: 2.8,
      steals: 1.2,
      blocks: 0.8,
    },
    shooting: {
      fgPercent: .511,
      ftPercent: .844,
      threePercent: .297
    },
    championships: " ",
    allstar: " ",
    mvp: " ",
    scoringTitle: " "
  },
  {
    firstName: "John",
    lastName: "Havlicek",
    retired: true,
    gamesPlayed: 1270,
    perGame: {
      minutes: 36.6,
      points: 20.8,
      rebounds: 6.3,
      assists: 4.8,
      steals: 1.2,
      blocks: 0.3,
    },
    shooting: {
      fgPercent: .439,
      ftPercent: .815,
      threePercent: null
    },
    championships: " ",
    allstar: " ",
    mvp: " ",
    scoringTitle: " "
  },
  {
    firstName: "Elvin",
    lastName: "Hayes",
    retired: true,
    gamesPlayed: 1303,
    perGame: {
      minutes: 38.4,
      points: 21.0,
      rebounds: 12.5,
      assists: 1.8,
      steals: 1.0,
      blocks: 0.3,
    },
    shooting: {
      fgPercent: .439,
      ftPercent: .815,
      threePercent: null
    },
    championships: " ",
    allstar: " ",
    mvp: " ",
    scoringTitle: " "
  },
  {
    firstName: "Magic",
    lastName: "Johnson",
    retired: true,
    gamesPlayed: 906,
    perGame: {
      minutes: 36.7,
      points: 19.5,
      rebounds: 7.2,
      assists: 11.2,
      steals: 1.9,
      blocks: 0.4,
    },
    shooting: {
      fgPercent: .520,
      ftPercent: .848,
      threePercent: .303
    },
    championships: " ",
    allstar: " ",
    mvp: " ",
    scoringTitle: " "
  },
  {
    firstName: "Sam",
    lastName: "Jones",
    retired: true,
    gamesPlayed: 871,
    perGame: {
      minutes: 27.9,
      points: 17.7,
      rebounds: 4.9,
      assists: 2.5,
      steals: null,
      blocks: null,
    },
    shooting: {
      fgPercent: .456,
      ftPercent: .803,
      threePercent: null
    },
    championships: " ",
    allstar: " ",
    mvp: " ",
    scoringTitle: " "
  },
  {
    firstName: "Michael",
    lastName: "Jordan",
    retired: true,
    gamesPlayed: 1072,
    perGame: {
      minutes: 38.3,
      points: 30.1,
      rebounds: 6.2,
      assists: 5.3,
      steals: 2.3,
      blocks: 0.8,
    },
    shooting: {
      fgPercent: .497,
      ftPercent: .835,
      threePercent: .327
    },
    championships: " ",
    allstar: " ",
    mvp: " ",
    scoringTitle: " "
  },
  {
    firstName: "Bob",
    lastName: "Petit",
    retired: true,
    gamesPlayed: 792,
    perGame: {
      minutes: 38.8,
      points: 26.4,
      rebounds: 16.2,
      assists: 3.0,
      steals: null,
      blocks: null,
    },
    shooting: {
      fgPercent: .436,
      ftPercent: .761,
      threePercent: null
    },
    championships: " ",
    allstar: " ",
    mvp: " ",
    scoringTitle: " "
  },
  {
    firstName: "Bill",
    lastName: "Russell",
    retired: true,
    gamesPlayed: 963,
    perGame: {
      minutes: 42.3,
      points: 15.1,
      rebounds: 22.5,
      assists: 4.3,
      steals: null,
      blocks: null,
    },
    shooting: {
      fgPercent: .440,
      ftPercent: .761,
      threePercent: null
    },
    championships: " ",
    allstar: " ",
    mvp: " ",
    scoringTitle: " "
  },
  {
    firstName: "Lenny",
    lastName: "Wilkens",
    retired: true,
    gamesPlayed: 1077,
    perGame: {
      minutes: 35.3,
      points: 16.5,
      rebounds: 4.7,
      assists: 6.7,
      steals: 1.3,
      blocks: 0.2,
    },
    shooting: {
      fgPercent: .432,
      ftPercent: .774,
      threePercent: null
    },
    championships: " ",
    allstar: " ",
    mvp: " ",
    scoringTitle: " "
  },
  {
    firstName: "Jerry",
    lastName: "West",
    retired: true,
    gamesPlayed: 932,
    perGame: {
      minutes: 39.2,
      points: 27.0,
      rebounds: 5.8,
      assists: 6.7,
      steals: 2.6,
      blocks: 0.7,
    },
    shooting: {
      fgPercent: .474,
      ftPercent: .814,
      threePercent: null
    },
    championships: " ",
    allstar: " ",
    mvp: " ",
    scoringTitle: " "
  },
  {
    firstName: "Oscar",
    lastName: "Robertson",
    retired: true,
    gamesPlayed: 1040,
    perGame: {
      minutes: 42.2,
      points: 25.7,
      rebounds: 7.5,
      assists: 9.5,
      steals: 1.1,
      blocks: 0.1,
    },
    shooting: {
      fgPercent: .485,
      ftPercent: .838,
      threePercent: null
    },
    championships: " ",
    allstar: " ",
    mvp: " ",
    scoringTitle: " "
  },
  {
    firstName: "Nate",
    lastName: "Thurmond",
    retired: true,
    gamesPlayed: 964,
    perGame: {
      minutes: 37.2,
      points: 15.0,
      rebounds: 15.0,
      assists: 2.7,
      steals: 0.5,
      blocks: 2.1,
    },
    shooting: {
      fgPercent: .421,
      ftPercent: .667,
      threePercent: null
    },
    championships: " ",
    allstar: " ",
    mvp: " ",
    scoringTitle: " "
  },
  {
    firstName: "Wills",
    lastName: "Reed",
    retired: true,
    gamesPlayed: 650,
    perGame: {
      minutes: 35.5,
      points: 18.7,
      rebounds: 12.9,
      assists: 1.8,
      steals: 0.6,
      blocks: 1.1,
    },
    shooting: {
      fgPercent: .476,
      ftPercent: .747,
      threePercent: null
    },
    championships: " ",
    allstar: " ",
    mvp: " ",
    scoringTitle: " "
  },
  {
    firstName: "Pete",
    lastName: "Maravich",
    retired: true,
    gamesPlayed: 658,
    perGame: {
      minutes: 37.0,
      points: 24.2,
      rebounds: 4.2,
      assists: 5.4,
      steals: 1.4,
      blocks: 0.3,
    },
    shooting: {
      fgPercent: .441,
      ftPercent: .820,
      threePercent: .667
    },
    championships: " ",
    allstar: " ",
    mvp: " ",
    scoringTitle: " "
  },
  {
    firstName: "Bill",
    lastName: "Walton",
    retired: true,
    gamesPlayed: 468,
    perGame: {
      minutes: 28.3,
      points: 13.3,
      rebounds: 10.5,
      assists: 3.4,
      steals: 0.8,
      blocks: 2.2,
    },
    shooting: {
      fgPercent: .521,
      ftPercent: .660,
      threePercent: .000
    },
    championships: {
      1: 1977
    },
    allstar: " ",
    mvp: " ",
    scoringTitle: " "
  },
  {
    firstName: "Robert",
    lastName: "Parish",
    retired: true,
    gamesPlayed: 1611,
    perGame: {
      minutes: 28.4,
      points: 14.5,
      rebounds: 9.1,
      assists: 1.4,
      steals: 0.8,
      blocks: 1.5,
    },
    shooting: {
      fgPercent: .537,
      ftPercent: .721,
      threePercent: .000
    },
    championships: " ",
    allstar: " ",
    mvp: " ",
    scoringTitle: " "
  },
  {
    firstName: "Moses",
    lastName: "Malone",
    retired: true,
    gamesPlayed: 1329,
    perGame: {
      minutes: 33.9,
      points: 20.6,
      rebounds: 12.2,
      assists: 1.4,
      steals: 0.8,
      blocks: 1.5,
    },
    shooting: {
      fgPercent: .491,
      ftPercent: .769,
      threePercent: .100
    },
    championships: " ",
    allstar: " ",
    mvp: " ",
    scoringTitle: " "
  },
  {
    firstName: "Kevin",
    lastName: "McHale",
    retired: true,
    gamesPlayed: 971,
    perGame: {
      minutes: 31.0,
      points: 17.9,
      rebounds: 7.3,
      assists: 1.7,
      steals: 0.4,
      blocks: 1.7,
    },
    shooting: {
      fgPercent: .554,
      ftPercent: .798,
      threePercent: .261
    },
    championships: " ",
    allstar: " ",
    mvp: " ",
    scoringTitle: " "
  },
  {
    firstName: "Isiah",
    lastName: "Thomas",
    retired: true,
    gamesPlayed: 979,
    perGame: {
      minutes: 36.3,
      points: 19.2,
      rebounds: 3.6,
      assists: 9.3,
      steals: 1.9,
      blocks: 0.3,
    },
    shooting: {
      fgPercent: .452,
      ftPercent: .759,
      threePercent: .290
    },
    championships: " ",
    allstar: " ",
    mvp: " ",
    scoringTitle: " "
  },
  {
    firstName: "James",
    lastName: "Worthy",
    retired: true,
    gamesPlayed: 926,
    perGame: {
      minutes: 32.4,
      points: 17.6,
      rebounds: 5.1,
      assists: 3.0,
      steals: 1.1,
      blocks: 0.7,
    },
    shooting: {
      fgPercent: .521,
      ftPercent: .769,
      threePercent: .241
    },
    championships: " ",
    allstar: " ",
    mvp: " ",
    scoringTitle: " "
  },
  {
    firstName: "John",
    lastName: "Stockton",
    retired: true,
    gamesPlayed: 1504,
    perGame: {
      minutes: 31.8,
      points: 13.1,
      rebounds: 2.7,
      assists: 10.5,
      steals: 2.2,
      blocks: 0.2,
    },
    shooting: {
      fgPercent: .515,
      ftPercent: .826,
      threePercent: .384
    },
    championships: " ",
    allstar: " ",
    mvp: " ",
    scoringTitle: " "
  },
  {
    firstName: "Hakeem",
    lastName: "Olajuwon",
    retired: true,
    gamesPlayed: 1238,
    perGame: {
      minutes: 31.8,
      points: 21.8,
      rebounds: 11.1,
      assists: 2.5,
      steals: 1.7,
      blocks: 3.1,
    },
    shooting: {
      fgPercent: .512,
      ftPercent: .712,
      threePercent: .202
    },
    championships: " ",
    allstar: " ",
    mvp: " ",
    scoringTitle: " "
  },
  {
    firstName: "Karl",
    lastName: "Malone",
    retired: true,
    gamesPlayed: 1476,
    perGame: {
      minutes: 37.2,
      points: 25.0,
      rebounds: 10.1,
      assists: 3.6,
      steals: 1.4,
      blocks: 0.8,
    },
    shooting: {
      fgPercent: .516,
      ftPercent: .742,
      threePercent: .274
    },
    championships: " ",
    allstar: " ",
    mvp: " ",
    scoringTitle: " "
  },
  {
    firstName: "Scottie",
    lastName: "Pippen",
    retired: true,
    gamesPlayed: 1178,
    perGame: {
      minutes: 34.9,
      points: 16.1,
      rebounds: 6.4,
      assists: 5.2,
      steals: 2.0,
      blocks: 0.8,
    },
    shooting: {
      fgPercent: .473,
      ftPercent: .704,
      threePercent: .326
    },
    championships: " ",
    allstar: " ",
    mvp: " ",
    scoringTitle: " "
  },
  {
    firstName: "David",
    lastName: "Robinson",
    retired: true,
    gamesPlayed: 987,
    perGame: {
      minutes: 34.7,
      points: 21.1,
      rebounds: 10.6,
      assists: 2.5,
      steals: 1.4,
      blocks: 3.0,
    },
    shooting: {
      fgPercent: .518,
      ftPercent: .736,
      threePercent: .250
    },
    championships: " ",
    allstar: " ",
    mvp: " ",
    scoringTitle: " "
  },
  {
    firstName: "Shaquille",
    lastName: "Oneal",
    retired: true,
    gamesPlayed: 1207,
    perGame: {
      minutes: 34.7,
      points: 23.7,
      rebounds: 10.9,
      assists: 2.5,
      steals: 0.6,
      blocks: 2.3,
    },
    shooting: {
      fgPercent: .582,
      ftPercent: .527,
      threePercent: .045
    },
    championships: " ",
    allstar: " ",
    mvp: " ",
    scoringTitle: " "
}]

function callback(msgHeader) {
  return function(err, response) {
    if (err) return console.log('ERROR:\n', err.message)
    return console.log(msgHeader, response)
  }
}

player.forEach(function(person) {
  dal.createPlayer(person, callback('PLAYER CREATED:\n'))
})
