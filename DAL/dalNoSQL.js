const path = require('path');
const PouchDB = require('pouchdb-http');
PouchDB.plugin(require('pouchdb-mapreduce'));
const fetchConfig = require('zero-config');

var config = fetchConfig(path.join(__dirname, '..'), {
  dcValue: 'test'
});

const db = new PouchDB('http://localhost:5984/nba')

const dal = {
  createPlayer: createPlayer,
  deletePlayer: deletePlayer,
  updatePlayer: updatePlayer,
  getDocById: getDocById,
  createTeam: createTeam,
  getPlayer: getPlayer,
  listPlayers: listPlayers,
  getTeam: getTeam
}

var convertPlayers = function(queryRow) {
  queryRow.doc.sortToken = queryRow.key;
  return queryRow.doc;
};

function queryDB(sortBy, startKey, limit, callback) {
  if (typeof startKey == "undefined" || startKey === null) {
    return callback(new Error('Missing search parameter'));
  } else if (typeof limit == "undefined" || limit === null || limit === 0) {
    return callback(new Error('Missing limit parameter'));
  } else {
    limit = startKey === '' ? Number(limit) : Number(limit) + 1;

    console.log("sortBy:", sortBy, " startKey: ", startKey, " limit: ", limit)

    db.query(sortBy, {
      startkey: startKey,
      limit: limit,
      include_docs: true
    }, function(err, result) {
      if (err) return callback(err);
      if (result) {
        // Do we need to skip (remove/shift) the first item
        //  out of the array
        if (startKey !== '' && result.rows.length > 0) {
          // remove first item
          result.rows.shift();
        }
        return callback(null, result.rows.map(convertPlayers));
      }
    })
  }
};
/////////////////////////////////////
///////// Wrapper Functions //////////
/////////////////////////////////////

function deletePlayer(data, callback) {
  deleteDoc(data, callback)
}

function deleteTeam(data, callback) {
  deleteDoc(data, callback)
}

function updatePlayer(data, callback) {
  updateDoc(data, callback)
}

function updateTeam(data, callback) {
  updateDoc(data, callback)
}

function getPlayer(data, callback) {
  getDocById(data, callback)
}

function getTeam(data, callback) {
  getDocById(data, callback)
}

function listPlayers(sortBy, startKey, limit, callback) {
  queryDB(sortBy, startKey, limit, callback)
}

function listTeams(sortBy, startKey, limit, callback) {
  queryDB(sortBy, startKey, limit, callback)
}

function listPerGameStats(sortBy, startKey, limit, callback) {
  queryDB(sortBy, startKey, limit, callback)
};

/////////////////////////////////////
////////// Base Functions ///////////
/////////////////////////////////////

function createPlayer(data, callback) {
  if (data.hasOwnProperty('firstName') !== true) {
    return callback(new Error('400 Missing phase property within data'))
  }
  if (data.hasOwnProperty('lastName') !== true) {
    return callback(new Error('400 Missing name property within data'))
  }
  if (data.hasOwnProperty('_id') === true) {
    return callback(new Error('400 Missing _id property within data'))
  }
  if (data.hasOwnProperty('_rev') === true) {
    return callback(new Error('400 Missing _rev property within data'))
  }

  data._id = "player_" + data.lastName + "_" + data.firstName
  data.type = "player"

  db.put(data, function(err, response) {
    if (err) {
      console.log(err)
      return callback(err)
    }
    console.log(response)
    return callback(null, response)
  })
};

function createTeam(data, callback) {
  if (data.hasOwnProperty('name') !== true) {
    return callback(new Error('400 Missing phase property within data'))
  }
  if (data.hasOwnProperty('city') !== true) {
    return callback(new Error('400 Missing name property within data'))
  }
  if (data.hasOwnProperty('_id') === true) {
    return callback(new Error('400 Missing _id property within data'))
  }
  if (data.hasOwnProperty('_rev') === true) {
    return callback(new Error('400 Missing _rev property within data'))
  }

  data._id = "team_" + data.city + "_" + data.name
  data.type = "team"

  db.put(data, function(err, response) {
    if (err) {
      console.log(err)
      return callback(err)
    }
    console.log(response)
    return callback(null, response)
  })
};

function deletePlayer(data, cb) {
  if (data.hasOwnProperty('firstName') !== true) {
    return cb(newError('400Missing firstName property within data'))
  }
  if (data.hasOwnProperty('lastName') !== true) {
    return cb(newError('400Missing lastName property within data'))
  }

  db.remove(data, function(err, result) {
    if (err) return cb(err)
    if (result) return cb(null, result)
  })
};

function updatePlayer(data, cb) {
  if (data === undefined || data === null) {
    return cb(newError('400Missing data'))
  }
  if (data.hasOwnProperty('_id') !== true) {
    return cb(newError('400Missing _id property, withing data'))
  }
  if (data.hasOwnProperty('_rev') !== true) {
    return cb(newError('400Missing _rev property, withing data'))
  }

  db.put(data, function(err, response) {
    if (err) {
      console.log(err)
      return cb(err)
    }
    if (response) {
      console.log(repsonse)
      return cb(null, response)
    }
  })
};

function getDocById(data, cb) {
  db.get(data, function(err, response) {
    if (err) {
      console.log(err)
      return cb(err)
    }
    console.log(response)
    return cb(null, response)
  })
};

/////////////////////////////////////
////////////// Views ////////////////
/////////////////////////////////////

function createView(view) {
  db.put(view, function(err, response) {
    if (err) {
      return console.log(err)
    }
    if (response) {
      console.log("response: ", JSON.stringify(response, null, 4))
    }
  })
};

const perGameStats = {
    _id: "_design/perGameStats",
    views: {
      perGame: {
        map: function(doc) {
          if (doc.type === 'player') {
            emit(doc._id, doc.perGame)
          }
        }.toString()
      },
    }
  }


module.exports = dal;
