/**
 * SHARP Common Utilities
 */

exports.getDataDirectory = function() { 
	var os = require('os');
	
	if ( process.env.SHARP_DATA_DIRECTORY ) {
		return process.env.SHARP_DATA_DIRECTORY;
	} else {
		if ( os.type === "Windows_NT" ) {
			return(process.env.SystemDrive + "\ProgramData\SHARP\SharpServer" );
		} else if ( os.type === "Darwin" ) {
			// Don't know if this is correct.
			return( "/usr/local/share/sharp" );
		} else { // Unix variants 
			return( "/usr/local/share/sharp" );
		}	
	}
}