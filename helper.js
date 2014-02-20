/***************************************************
Helper Function
- to be used only by translated code
***************************************************/
/// Check Function ///
// Checking Defined Object
function IsDefined(obj) {
	return !(typeof obj === 'undefined');
}

// Checking Strong Defined Object
function IsStrongDefined(obj) {
	return !(typeof obj === 'undefined' || obj == null);
}

// Checking Function Object
function IsFunction(obj) {
	return typeof obj === 'function';
}

// Checking Object.Field (Object['Field']) Accessibility
function IsAccessible(obj, fld) {
	try {
		obj[fld] = obj[fld]; // try accessing the function
	} catch(e) {
		return false;
	}
	
	return true;
}

// Checking Global Execution Context
function IsGlobal(obj) {
	return !IsStrongDefined(obj) || obj === window;
}


/// Source-Sink Checking ///
// Source Check
//! TODO
function IsSource(obj) {
	return true;
}

// Sink Check
//! TODO
function IsSink(obj) {
	return true;
}

// Declassifier Check
//! TODO
function IsDeclassifier(obj) {
	return false;
}


/// Taint Object Helper ///
// Check Taint Object
function IsTaintObj(obj) {
	return (IsStrongDefined(obj)		// Strongly Defined,
		 && IsAccessible(obj, 'type')	// Accessible,
		 && IsDefined(obj.type)			// Contains type, and
		 && obj.type === 'TaintObject');// Type is TaintObject
}

// Make Taint Object
function MakeTaintObj(val, tag) {
	var obj = {}; // Base Object
	
	if(IsDefined(tag)) {	// Known Tag
		Object.defineProperties(obj, {
			'val': {
				value:    val,
				writable: true
			},
			'tag': {
				value:    tag,
				writable: true
			},
			'type': {
				value: 'TaintObject'
			}
		});
	} else {				// Computed Tag
		Object.defineProperties(obj, {
			'val': {
				value:    val,
				writable: true
			},
			'tag': {
				value:    IsSource(val),
				writable: true
			},
			'type': {
				value: 'TaintObject'
			}
		});
	}
	
	return obj;
}


/// TAG Function ///
// Check Is Less Than Equal (a <= b)
function LTE(a, b) {
	// For Simple Case of Boolean
	if(a === true && b === false) return false;
	else return true; // (a && b) || (!a && b) || (!a && !b)
}

// Least Upper Bound (Least Upper Bound between a set of Partial Order
function LUB() {
	// Still for Boolean, Generalize for Multi-Argument
	
	/* All Operation
	var lub = false;
	for(var i=0; i<arguments.length; i++) {
		lub = lub || arguments[i];
	}
	return lub; */
	
	// (Possibly) Optimized Operation
	for(var i=0; i<arguments.length; i++) {
		if(arguments[i] === true) {
			return true;
		}
	}
	return false;
}