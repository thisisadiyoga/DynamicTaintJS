/***************************************************
Test Helper Function
- to be used only by translated code during test
***************************************************/
/// Comparison
function __compare(a, b) {
	return ((IsTaintObj(a) && IsTaintObj(b)	&&					// Taint Object
				((a.val === b.val && a.tag === b.tag) ||		// -  Compare Value and Tag
				 (isNaN(a) && isNaN(b) && a.tag == b.tag))) ||	// OR Both are NaN
			(!IsTaintObj(a) && !IsTaintObj(b) &&				// Not Taint Object
				((a === b) ||									// -  Compare Directly
				 (isNaN(a) && isNaN(b)))));						// OR Both are NaN
}

function __test(num, actual, expect, pass, fail) {
	var result = false;
	console.log(num + '. ' + ((result = __compare(actual, expect)) ? pass : (fail + ' with: ' + (IsTaintObj(actual)?(actual.val + ', ' + actual.tag):actual.val))));
	return result;
}