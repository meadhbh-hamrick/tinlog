var logger = require( '../tinlog' );
var logger_options = {
  facility: 'TEST',
  messages_path: 'pathtest.msg'
};

logger.createInstance( logger_options, function ( l, TEST, log ) {
  l( TEST.D_WOOT );
  setTimeout( function () { l( TEST.I_WOOT ); }, 250 );
  setTimeout( function () { l( TEST.S_WOOT ); }, 500 );
  setTimeout( function () { l( TEST.W_WOOT ); }, 750 );
  setTimeout( function () { l( TEST.E_WOOT ); }, 1000 );
  setTimeout( function () { try { l( TEST.F_WOOT, 23 ); } catch( e ) { l( TEST.S_EXCEPT ); } }, 1200 );
  setTimeout( function () { l( TEST.F_FATALE ); }, 1400 );

} );
