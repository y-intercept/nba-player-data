const http = require('http')
const express = require('express')
const app = express()
const port = process.env.PORT || 4000
const HTTPError = require('node-http-error')
const dal = require('../DAL/dalNoSQL.js')
const bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

var server = http.createServer(app)
server.listen(port, () => console.log('opened server on ', server.address(), ' port: ', port))

/////////////////////////////
////////// Routes ///////////
/////////////////////////////

//////////// GET Team by ID /////////////

app.get('/teams/:id', function(req, res, next) {
  const teamId = req.params.id
  dal.getTeam(teamId, function(err, data) {
    if (err) {
      var responseError = BuildResponseError(err);
      return next(new HTTPError(responseError.status, responseError.message, responseError));
    }
    if (data) {
      res.append('Content-type', 'application/json')
      res.status(200).send(data)
    }
  })
});

//////////// GET Player by ID //////////////

app.get('/player/:id', function(req, res, next) {
  const playerId = req.params.id
  dal.getPlayer(playerId, function(err, data) {
    if (err) {
      var responseError = BuildResponseError(err);
      return next(new HTTPError(responseError.status, responseError.message, responseError));
    }
    if (data) {
      res.append('Content-type', 'application/json')
      res.status(200).send(data)
    }
  })
});

////////// POST to Players ///////////

app.post('/players', function(req, res, next) {
  dal.createPlayer(req.body, function(err, data) {
    if (err) {
      var responseError = BuildResponseError(err)
      return next(new HTTPError(responseError.status, responseError.message, responseError))
    }
    if (data) {
      res.append('Content-type', 'application/json')
      res.status(201).send(data)
    }
  })
});

////////// POST to teams ///////////

app.post('/teams', function(req, res, next) {
  dal.createTeam(req.body, function(err, data) {
    if (err) {
      var responseError = BuildResponseError(err)
      return next(new HTTPError(responseError.status, responseError.message, responseError))
    }
    if (data) {
      res.append('Content-type', 'application/json')
      res.status(201).send(data)
    }
  })
});

//////////// PUT to Players ////////////

app.put('/players/:id', function(req, res, next) {
  dal.updatePlayer(req.body, function(err, data) {
    if (err) {
      var responseError = BuildResponseError(err)
      return next(new HTTPError(responseError.status, responseError.message, responseError))
    }
    if (data) {
      res.append('Content-type', 'application/json')
      res.status(202).send(data)
    }
  })
});

////////// PUT to Teams //////////

app.put('/teams/:id', function(req, res, next) {
  dal.updateTeam(req.body, function(err, data) {
    if (err) {
      var responseError = BuildResponseError(err)
      return next(new HTTPError(responseError.status, responseError.message, responseError))
    }
    if (data) {
      res.append('Content-type', 'application/json')
      res.status(202).send(data)
    }
  })
});

////////// DELETE from Players //////////

app.delete('/players/:id', function(req, res, next) {
  console.log('app.delete')
  const playerId = req.params.id
  dal.getPlayer(playerId, function(err, data) {
    console.log('dal.getPlayer')
    if (err) {
      var responseError = BuildResponseError(err);
        return next(new HTTPError(responseError.status, responseError.message, responseError));
    }
    if (data) {
      dal.deletePlayer(data, function(deleteErr, deleteData) {
        if (deleteErr) {
          var responseError = BuildResponseError(deleteErr);
          return next(new HTTPError(responseError.status, responseError.message, responseError));
        }
        if (deleteData) {
          res.append('Content-type', 'application/json')
          res.status(202).send(deleteData)
        }
      })
    }
  })
});

////////// DELETE from Teams //////////

app.delete('/teams/:id', function(req, res, next) {
  const teamId = req.params.id
  dal.getTeam(teamId, function(err, data) {
    if (err) {
      var responseError = BuildResponseError(err);
      return next(new HTTPError(responseError.status, responseError.message, responseError));
    }
    if (data) {
      dal.deleteTeam(data, function(deleteErr, deleteData) {
        if (deleteErr) {
          var responseError = BuildResponseError(deleteErr);
          return next(new HTTPError(responseError.status, responseError.message, responseError));
        }
        if (deleteData) {
          res.append('Content-type', 'application/json')
          res.status(202).send(deleteData)
        }
      })
    }
  })
});

////////// List (GET) Teams //////////

app.get('/teams', function(req, res, next) {
  const startKey = req.query.sorttoken || " "
  const limit = req.query.limit || 5
  const sortBy = req.query.sortby || "relief"
  dal.listTeams(sortBy, startKey, limit, function(err, data) {
    if (err) {
      var responseError = BuildResponseError(err);
      return next(new HTTPError(responseError.status, responseError.message, responseError));
    }
    if (data) {
      res.append('Content-type', 'application/json')
      res.status(200).send(data)
    }
  })
});

////////// List (GET) Players //////////

app.get('/players', function(req, res, next) {
  const startKey = req.query.sorttoken || " "
  const limit = req.query.limit || 5
  const sortBy = req.query.sortby || "_id"
  dal.listPlayers(sortBy, startKey, limit, function(err, data) {
    if (err) {
      var responseError = BuildResponseError(err);
      return next(new HTTPError(responseError.status, responseError.message, responseError));
    }
    if (data) {
      res.append('Content-type', 'application/json')
      res.status(200).send(data)
    }
  })
});

app.get('/perGame', function(req, res, next) {
  const startKey = req.query.sorttoken || " "
  const limit = req.query.limit || 5
  const sortBy = req.query.sortby || "_id"
  dal.listPlayers(sortBy, startKey, limit, function(err, data) {
    if (err) {
      var responseError = BuildResponseError(err);
      return next(new HTTPError(responseError.status, responseError.message, responseError));
    }
    if (data) {
      res.append('Content-type', 'application/json')
      res.status(200).send(data)
    }
  })
});


////////////////////////////
//// BuildResponseError ////
////////////////////////////

function BuildResponseError(err) {

  const statuscheck = isNaN(err.message.substring(0, 3)) === true ? "400" : err.message.substring(0, 3)
  const status = err.status ? Number(err.status) : Number(statuscheck)
  const message = err.status ? err.message : err.message.substring(3)
  const reason = ""
  const error = status === 400 ? "Bad Request" : err.name
  const name = error

  var errormsg = {}
  errormsg.error = error
  errormsg.reason = reason
  errormsg.name = name
  errormsg.status = status
  errormsg.message = message
  return errormsg
};

//////////////////////////////
//// Route Error Handling ////
//////////////////////////////

app.get('*', function(req, res, next) {
  console.log('in get *')
  next(new HTTPError(404, 'Invalid path'));
})

app.put('*', function(req, res, next) {
  console.log('in put *')
  next(new HTTPError(404, 'Invalid path'));
})

app.post('*', function(req, res, next) {
  console.log('in post *')
  next(new HTTPError(404, 'Invalid path'));
})

app.delete('*', function(req, res, next) {
  console.log('in delete *')
  next(new HTTPError(404, 'Invalid path'));
})

app.use(function(err, req, res, next) {
  console.log("API error handler")
  console.log(req.method, " ", req.path, " ", err)
  res.status(err.status || 500)
  res.send(err)
})
