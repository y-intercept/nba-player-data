const dal = require('./DAL/dalNoSQl.js');

const teamData = [{
  name: "Hawks",
  city: "Atlanta",
  div: "Southeast",
  yearFounded: "1946",
  championships: {
    1: 1958
  }
}, {
  name: "Celtics",
  city: "Boston",
  div: "Atlantic",
  yearFounded: 1946,
  championships: {
    1: 1957,
    2: 1960,
    3: 1961,
    4: 1962,
    5: 1963,
    6: 1964,
    7: 1965,
    8: 1966,
    9: 1968,
    10: 1969,
    11: 1974,
    12: 1976,
    13: 1981,
    14: 1984,
    15: 1986,
    16: 2008
  }
}, {
  name: "Nets",
  city: "Brooklyn",
  div: "Atlantic",
  yearFounded: 1967,
  championships: 0
}, {
  name: "Hornets",
  city: "Charlotte",
  div: "Southeast",
  yearFounded: 1988,
  championships: 0
}, {
  name: "Bulls",
  city: "Chicago",
  div: "Central",
  yearFounded: 1966,
  championships: {
    1: 1991,
    2: 1992,
    3: 1993,
    4: 1996,
    5: 1997,
    6: 1998
  }
}, {
  name: "Cavaliers",
  city: "Cleveland",
  div: "Central",
  yearFounded: 1970,
  championships: {
    1: 2016
  }
}, {
  name: "Mavericks",
  city: "Dallas",
  div: "Southwest",
  yearFounded: 1980,
  championships: {
    1: 2011
  }
}, {
  name: "Nuggets",
  city: "Denver",
  div: "Northwest",
  yearFounded: 1967,
  championships: 0
}, {
  name: "Pistons",
  city: "Detroit",
  div: "Central",
  yearFounded: 1941,
  championships: {
    1: 1989,
    2: 1990,
    3: 2004
  }
}, {
  name: "Warriors",
  city: "Golden State",
  div: "Pacific",
  yearFounded: 1946,
  championships: {
    1: 1947,
    2: 1956,
    3: 1975,
    4: 2015
  }
}, {
  name: "Rockets",
  city: "Houston",
  div: "Southwest",
  yearFounded: 1967,
  championships: {
    1: 1994,
    2: 1995
  }
}, {
  name: "Pacers",
  city: "Indiana",
  div: "Central",
  yearFounded: 1967,
  championships: 0
}, {
  name: "Clippers",
  city: "Los Angeles",
  div: "Pacific",
  yearFounded: 1970,
  championships: 0
}, {
  name: "Lakers",
  city: "Los Angeles",
  div: "Pacific",
  yearFounded: 1947,
  championships: {
    1: 1949,
    2: 1950,
    3: 1952,
    4: 1953,
    5: 1954,
    6: 1972,
    7: 1980,
    8: 1982,
    9: 1985,
    10: 1987,
    11: 1988,
    12: 2000,
    13: 2001,
    14: 2002,
    15: 2009,
    16: 2010
  }
}, {
  name: "Grizzlies",
  city: "Memphis",
  div: "Southwest",
  yearFounded: 1995,
  championships: 0
}, {
  name: "Heat",
  city: "Miami",
  div: "Southeast",
  yearFounded: 1988,
  championships: {
    1: 2006,
    2: 2012,
    3: 2013
  }
}, {
  name: "Bucks",
  city: "Milwaukee",
  div: "Central",
  yearFounded: 1968,
  championships: {
    1: 1971
  }
}, {
  name: "Timberwolves",
  city: "Minnesota",
  div: "Northwest",
  yearFounded: 1989,
  championships: 0
}, {
  name: "Pelicans",
  city: "New Orleans",
  div: "Southwest",
  yearFounded: 2002,
  championships: 0
}, {
  name: "Knicks",
  city: "New York",
  div: "Atlantic",
  yearFounded: 1946,
  championships: {
    1: 1970,
    2: 1973
  }
}, {
  name: "Thunder",
  city: "Oklahoma City",
  div: "Northwest",
  yearFounded: 1967,
  championships: {
    1: 1979
  }
}, {
  name: "Magic",
  city: "Orlando",
  div: "Southeast",
  yearFounded: 1989,
  championships: 0
}, {
  name: "76ers",
  city: "Philadelphia",
  div: "Atlantic",
  yearFounded: 1946,
  championships: {
    1: 1955,
    2: 1967,
    3: 1983
  }
}, {
  name: "Suns",
  city: "Phoenix",
  div: "Pacific",
  yearFounded: 1968,
  championships: 0
}, {
  name: "Trail Blazers",
  city: "Portland",
  div: "Northwest",
  yearFounded: 1970,
  championships: {
    1: 1977
  }
}, {
  name: "Kings",
  city: "Sacramento",
  div: "Pacific",
  yearFounded: 1970,
  championships: {
    1: 1977
  }
}, {
  name: "Spurs",
  city: "San Antonio",
  div: "Southwest",
  yearFounded: 1967,
  championships: {
    1: 1999,
    2: 2003,
    3: 2005,
    4: 2007,
    5: 2014
  }
}, {
  name: "Raptors",
  city: "Toronto",
  div: "Atlantic",
  yearFounded: 1995,
  championships: 0
}, {
  name: "Jazz",
  city: "Utah",
  div: "Northwest",
  yearFounded: 1974,
  championships: 0
}]

function callback(msgHeader) {
  return function(err, response) {
    if (err) return console.log('ERROR:\n', err.message)
    return console.log(msgHeader, response)
  }
}
teamData.forEach(function(team) {
  dal.createTeam(team, callback('TEAM CREATED:\n'))
})
