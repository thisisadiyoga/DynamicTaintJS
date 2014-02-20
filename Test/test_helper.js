/***************************************************
Test Helper Function
- to be used only by translated code during test
***************************************************/
/// Comparison
function __equal(a, b) {
	return (a === b) || (typeof a === 'number' && typeof b === 'number' && isNaN(a) && isNaN(b));
}

function __compare(a, b) {
	return (IsTaintObj(a)  && IsTaintObj(b)  &&
				__compare(a.val, b.val) && __equal(a.tag, b.tag)) ||
		   (!IsTaintObj(a) && !IsTaintObj(b) && __equal(a, b));
}

function __test(num, actual, expect, pass, fail) {
	var result = __compare(actual, expect);
	console.log(num + '. ' + (result === true ? pass : (fail + ' with: ' + (IsTaintObj(actual)?(actual.val + ', ' + actual.tag):actual.val))));
	return result;
}