var logger = require( '../tinlog' );

var logger_options = {
  facility: 'EMEXAM',
  messages: {
    D: {
      start: "This would normally be a debugging message."
    },
    S: {
      init: "Initialized",
      end: "Ended"
    },
    I: {
      test: "This is a test message %d"
    },
    W: {
      test: "This is a test warning %d"
    },
    E: {
      random: "Imagine a random error occuring about now",
      determ: "Imagine a deterministic error occuring about right now"
    },
    F: {
      ending: "Fatal error encountered. Should this throw an error? %s"
    }
  }
};

logger.createInstance( logger_options, function ( l, EMEXAM, log ) {
  l( EMEXAM.S_INIT );
  l( EMEXAM.D_START );
  l( EMEXAM.I_TEST, 17 );
  l( EMEXAM.W_TEST, 23 );
  l( EMEXAM.E_RANDOM );
  l( EMEXAM.E_DETERM );
  
  try {
    l( EMEXAM.F_ENDING, "testing" );
  } catch( e ) {
    console.error( "Caught exception: " + e.toString() );
  }

  l( EMEXAM.S_END );
} );

console.log( "Testing Custom Emitter" );

function emitter ( message ) {
  // Here we're just printing "Custom Emitter Says" in front
  // of a message. This functionality is really here in case
  // you want to do something like store log messages in a
  // file or something.
  console.log( "Custom Emitter Says: " + message );
}
logger_options.emitter = emitter;

logger.createInstance( logger_options, function ( l, EMEXAM, log ) {
  l( EMEXAM.S_INIT );
  l( EMEXAM.D_START );
  l( EMEXAM.I_TEST, 17 );
  l( EMEXAM.W_TEST, 23 );
  l( EMEXAM.E_RANDOM );
  l( EMEXAM.E_DETERM );
  
  try {
    l( EMEXAM.F_ENDING, "testing" );
  } catch( e ) {
    console.error( "Caught exception: " + e.toString() );
  }

  l( EMEXAM.S_END );
} );

console.log( "Testing Per Severity Emitter" );
function debug_emitter( message ) {
  console.log( "I am the debug emitter: " + message );
}
logger_options.emitters = { D:debug_emitter };

logger.createInstance( logger_options, function ( l, EMEXAM, log ) {
  l( EMEXAM.S_INIT );
  l( EMEXAM.D_START );
  l( EMEXAM.I_TEST, 17 );
  l( EMEXAM.W_TEST, 23 );
  l( EMEXAM.E_RANDOM );
  l( EMEXAM.E_DETERM );
  
  try {
    l( EMEXAM.F_ENDING, "testing" );
  } catch( e ) {
    console.error( "Caught exception: " + e.toString() );
  }

  l( EMEXAM.S_END );
} );
