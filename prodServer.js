var path = require( 'path' );
var express = require( 'express' );
var webpack = require( 'webpack' );

process.env.NODE_ENV = 'production';

var app = express();

app.use( '/dist', express.static( 'dist' ) );
app.use( '/public', express.static( 'public' ) );

app.get( '*', function ( req, res ) {
    res.sendFile( path.join( __dirname, 'index.html' ) );
} );

app.listen( 3000, '0.0.0.0', function ( err ) {
    if ( err ) {
        console.error( err );
        return;
    }

    console.info( '[ Meta | Server  ] http://%s:%s', '0.0.0.0', 3000 );
} );


// https://github.com/pgte/pouch-websocket-sync

const http = require( 'http' );
const PouchDB = require( 'pouchdb' );
const PouchSync = require( 'pouch-websocket-sync' );

const server = http.createServer();
const wss = PouchSync.createServer( server, onRequest );

wss.on( 'error', function ( err ) {
    console.error( err.stack );
} );

const db = new PouchDB( 'var/nodes-server' );

server.listen( 3010, '0.0.0.0', function () {
    console.info( '[ Meta | PouchDB ] ws://' + server.address().address + ':' + server.address().port );
} );

function onRequest( credentials, dbName, callback ) {
    if ( dbName == 'nodes-server' ) {
        callback( null, db );
    } else {
        callback( new Error( 'database not allowed' ) );
    }
}
