var assert = require("assert")
var should = require('should');

describe('Array', function(){
    describe('#indexOf()', function(){
        it('should return -1 when the value is not present', function(){
            assert.equal(-1, [1,2,3].indexOf(5));
            assert.equal(-1, [1,2,3].indexOf(0));
            (5).should.be.exactly(5).and.be.a.Number;
        })
    })
})




//Mock
/*
var sinon = require('sinon')
    , userService = require('./userService')
    , getUsers = require('./getUsers')

describe('getUsers', function () {

    it('should return a list of users in alphabetical order', function (done) {

        var getUserStub = sinon.stub(userService, 'get')
        getUserStub.withArgs(0).returns({ name: 'Fred' })
        getUserStub.withArgs(1).returns({ name: 'Barney' })
        getUserStub.withArgs(2).returns({ name: 'Dave' })

        var users = getUsers(userService)
        users[0].name.should.equal('Barney')
        users[1].name.should.equal('Dave')
        users[2].name.should.equal('Fred')

    })

})*/

//Fake HTTP server
/*
var nock=require("nock");
var makeRequest = require('./makeRequest')

describe('makeRequest', function () {

    it('should return the correct response', function (done) {

        nock('http://www.google.com')
            .get('/')
            .reply(200, 'Hello from Google!')

        makeRequest(function (error, response) {
            response.should.equal('Hello from Google!')
            done()
        })

    })

})*/

//Test your API
/*
var request = require('supertest')

describe('MyApi', function () {

    it('should return 200 on /', function (done) {

        request('http://localhost:3000')
            .get('/')
            .expect(200)
            .end(function(err, res){
                if (err) return done(err)
                done()
            })

    })

})*/

//Dependency injector
/*
var rewire = require('rewire')
    , doesFileExist = rewire('./doesFileExist')

describe('doesFileExist', function () {

    it('should return true when file exists', function () {

        doesFileExist.__set__(
            { fs:
            { exists: function (path, callback) {
                callback(null, true)
            }
            }
            }
        )

        doesFileExist(function (error, exists) {
            exists.should.equal(true, 'file does not exist')
        })

    })

    it('should return false when the file does not exist', function () {

        doesFileExist.__set__(
            { fs:
            { exists: function (path, callback) {
                callback(null, false)
            }
            }
            }
        )

        doesFileExist(function (error, exists) {
            exists.should.equal(false, 'files exists')
        })

    })

})*/





//Code analysis
//sudo jshint routes/index.js

//run tests
//mocha

