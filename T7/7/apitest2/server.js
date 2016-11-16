var Http = require( 'http' ),
    Router = require( 'router' ),
    server,
    router;
router = new Router();

server = Http.createServer( function( request, response ) {
  router( request, response, function( error ) {
    if ( !error ) {
      response.writeHead( 404 );
    } else {
      // Handle errors
      console.log( error.message, error.stack );
      response.writeHead( 400 );
    }
    response.end( 'RESTful API Server is running!' );
  });
});

server.listen( 3000, function() {
  console.log( 'Listening on port 3000' );
});

var counter = 0,
    todoList = {};
var textR = '' ;
//var execNode = require('child_process').exec;
var execNode = require('child_process');
var id
var flag = false;
function createItem( request, response ) {
   id = counter += 1;
     console.log( 'Create item', id );
    response.writeHead( 201, {
     'Content-Type' : 'text/plain'
    });
}



function getversion( request, response ) {
    response.writeHead( 201, {
     'Content-Type' : 'text/plain'
    });
  

	child = execNode.spawn('node', ['-v']);
	child.stdout.setEncoding('utf8');
	child.stdout.on('data', function(data) {
	console.log(data);
		
	
		var json = JSON.stringify({ 
			"Auth": "Test", 
			"version": data, 
		});
		
		response.end(json);
	});
  
	/*
	execNode('node -v', function(error, stdout, stderr) {
	  console.log('stdout: ' + stdout);
	  textR = stdout;
	 
	  if (error !== null) {
	  console.log('exec error: ' + error);
	  }
	});
	*/	

}






router.get( '/getversion', getversion );
router.post( '/createItem', createItem );