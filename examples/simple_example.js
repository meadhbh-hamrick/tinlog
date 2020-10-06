var logger = require( '../tinlog' );
var logger_options = {
  facility: 'PROXY',
  messages: {
    D: {
      start: "Starting example program"
    },
    S: {
      init: "Initialization Successful",
      new: "New Route Established"
    },
    I: {
      fast: "Can't Keep Up with Requests"
    },
    W: {
      authreq: "Authentication Required for Route \"%s\""
    },
    E: {
      unknown: "Unknown Route",
      authfail: "Authentication Failure"
    },
    F: {
      ending: "Fatal error encountered. Ending. %s"
    }
  }
};

logger.createInstance( logger_options, function ( l, PROXY, log ) {
  l( PROXY.D_START );
  l( PROXY.S_INIT );
  l( PROXY.S_NEW );
  l( PROXY.S_NEW );
  l( PROXY.I_FAST );
  l( PROXY.W_AUTHREQ, "default" );
  l( PROXY.E_UNKNOWN );
  l( PROXY.E_AUTHFAIL );
  l( PROXY.E_UNKNOWN );
  try {
    l( PROXY.F_ENDING, "testing" );
  } catch( e ) {
    console.error( "Caught exception " + e.toString() );
  }
} );
