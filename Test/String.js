/***************************************************
String Library Tester

- Purpose:
   To easily test the correctness of the
   String Library Handler by having a standardized
   test

- How To:
   Add the String Library Tester before the current
   file (or copy paste on top of the file)
   1. _StringLibraryTester.runAll()
      to test all the tests
   2. _StringLibraryTester.run(i)
      where i is the index of the test to run
	  to test for a specific test case
	  if i is the name of the function, it will
	  run all the relevant tests for the function
	  (e.g. 'concat' will run test for 'concat'
***************************************************/
// Imported Variable
var _StringLibraryTester = (function() {
	/// charAt
	function testCharAt() {
		var testString = 'Adi Yoga Sidi Prabawa';
		var testNum = 0;
		console.log('- Test charAt:');
		
		// !Tag, !New, Local, !Tag1
		for(var i=-1; i<testString.length+2; i++) {
			__test(++testNum, testString.charAt(false, false, i, false), MakeTaintObj(testString._charAt(i), false), 'PASS', 'FAIL');
		}
		
		// Tag, !New, Local, !Tag1
		for(var i=-1; i<testString.length+2; i++) {
			__test(++testNum, testString.charAt(true, false, i, false), MakeTaintObj(testString._charAt(i), true), 'PASS', 'FAIL');
		}
		
		console.log('');
	}
	
	
	/// charCodeAt
	function testCharCodeAt() {
		var testString = 'Adi Yoga Sidi Prabawa';
		var testNum = 0;
		console.log('- Test charCodeAt:');
		
		// !Tag, !New, Local, !Tag1
		for(var i=-1; i<testString.length+2; i++) {
			__test(++testNum, testString.charCodeAt(false, false, i, false), MakeTaintObj(testString._charCodeAt(i), false), 'PASS', 'FAIL');
		}
		
		// Tag, !New, Local, !Tag1
		for(var i=-1; i<testString.length+2; i++) {
			__test(++testNum, testString.charCodeAt(true, false, i, false), MakeTaintObj(testString._charCodeAt(i), true), 'PASS', 'FAIL');
		}
		
		console.log('');
	}
	
	
	/// concat
	function testConcat() {
		var testStrings = ['', 'Adi', ' ', 'Yo', 'ga', ' Sidi ', 'Prabawa'];
		var testNum = 0;
		console.log('- Test concat:');
		
		// !Tag, !New, Local, !Tag1
		for(var i=0; i<testStrings.length-1; i++) {
			__test(++testNum, testStrings[i].concat(false, false, testStrings[i+1], false), MakeTaintObj(testStrings[i]._concat(testStrings[i+1]), false), 'PASS', 'FAIL');
		}
		
		// Tag, !New, Local, !Tag1
		for(var i=0; i<testStrings.length-1; i++) {
			__test(++testNum, testStrings[i].concat(true, false, testStrings[i+1], false), MakeTaintObj(testStrings[i]._concat(testStrings[i+1]), true), 'PASS', 'FAIL');
		}
		
		// !Tag, !New, Local, Tag1
		for(var i=0; i<testStrings.length-1; i++) {
			__test(++testNum, testStrings[i].concat(false, false, testStrings[i+1], true), MakeTaintObj(testStrings[i]._concat(testStrings[i+1]), true), 'PASS', 'FAIL');
		}
		
		// Tag, !New, Local, Tag1
		for(var i=0; i<testStrings.length-1; i++) {
			__test(++testNum, testStrings[i].concat(true, false, testStrings[i+1], true), MakeTaintObj(testStrings[i]._concat(testStrings[i+1]), true), 'PASS', 'FAIL');
		}
		
		console.log('');
	}
	
	
	/// fromCharCode
	function testFromCharCode() {
		var test = 'Adi Yoga Sidi Prabawa';
		var arr = [];
		var art = [];
		
		console.log('- Test fromCharCode:');
		
		// Create Char Code
		for(var i=0; i<test.length; i++) {
			arr[i] = test._charCodeAt(i);
			art[i] = false;
		}
		
		// One Random Taint
		art[7] = true;
		
		// Generate String from Char Code
		var res = "";
		var tag = false;
		for(var i=0; i<arr.length; i++) {
			res += String.fromCharCode(false, false, arr[i], false).val;
			tag =  tag || String.fromCharCode(false, false, arr[i], false).tag
		}
		
		// Compare
		__test(1, MakeTaintObj(res, tag), MakeTaintObj(test, false), 'PASS', 'FAIL');
		
		
		// Generate String from Char Code
		var res = "";
		var tag = false;
		for(var i=0; i<arr.length; i++) {
			res += String.fromCharCode(false, false, arr[i], true).val;
			tag =  tag || String.fromCharCode(false, false, arr[i], true).tag
		}
		
		// Compare
		__test(2, MakeTaintObj(res, tag), MakeTaintObj(test, true), 'PASS', 'FAIL');
		
		
		// Generate String from Char Code
		var res = "";
		var tag = false;
		for(var i=0; i<arr.length; i++) {
			res += String.fromCharCode(false, false, arr[i], art[i]).val;
			tag =  tag || String.fromCharCode(false, false, arr[i], art[i]).tag
		}
		
		// Compare
		__test(3, MakeTaintObj(res, tag), MakeTaintObj(test, true), 'PASS', 'FAIL');
		
		console.log('');
	}
	
	
	/// indexOf
	function testIndexOf() {
		var testString = 'Adi Yoga Sidi Prabawa';
		var testNum = 0;
		console.log('- Test indexOf:');
		
		__test(++testNum, testString.indexOf(false, false, 'Sidi', false), MakeTaintObj(testString._indexOf('Sidi'), false), 'PASS', 'FAIL');
		__test(++testNum, testString.indexOf(false, false, ' P', false), MakeTaintObj(testString._indexOf(' P'), false), 'PASS', 'FAIL');
		__test(++testNum, testString.indexOf(false, false, 'A', false), MakeTaintObj(testString._indexOf('A'), false), 'PASS', 'FAIL');
		
		__test(++testNum, testString.indexOf(true, false, 'ga ', false), MakeTaintObj(testString._indexOf('ga '), false), 'PASS', 'FAIL');
		__test(++testNum, testString.indexOf(true, false, ' S', false), MakeTaintObj(testString._indexOf(' S'), false), 'PASS', 'FAIL');
		__test(++testNum, testString.indexOf(true, false, 'Y', false), MakeTaintObj(testString._indexOf('Y'), false), 'PASS', 'FAIL');
		
		__test(++testNum, testString.indexOf(false, false, 'ga S', true), MakeTaintObj(testString._indexOf('ga S'), false), 'PASS', 'FAIL');
		__test(++testNum, testString.indexOf(false, false, 'Ad', true), MakeTaintObj(testString._indexOf('Ad'), false), 'PASS', 'FAIL');
		__test(++testNum, testString.indexOf(false, false, 'di', true), MakeTaintObj(testString._indexOf('di'), false), 'PASS', 'FAIL');
		
		console.log('');
	}
	
	
	/// lastIndexOf
	function testLastIndexOf() {
		var testString = 'Adi Yoga Sidi Prabawa';
		var testNum = 0;
		console.log('- Test lastIndexOf:');
		
		__test(++testNum, testString.lastIndexOf(false, false, 'Sidi', false), MakeTaintObj(testString._lastIndexOf('Sidi'), false), 'PASS', 'FAIL');
		__test(++testNum, testString.lastIndexOf(false, false, ' P', false), MakeTaintObj(testString._lastIndexOf(' P'), false), 'PASS', 'FAIL');
		__test(++testNum, testString.lastIndexOf(false, false, 'A', false), MakeTaintObj(testString._lastIndexOf('A'), false), 'PASS', 'FAIL');
		
		__test(++testNum, testString.lastIndexOf(true, false, 'ga ', false), MakeTaintObj(testString._lastIndexOf('ga '), false), 'PASS', 'FAIL');
		__test(++testNum, testString.lastIndexOf(true, false, ' S', false), MakeTaintObj(testString._lastIndexOf(' S'), false), 'PASS', 'FAIL');
		__test(++testNum, testString.lastIndexOf(true, false, 'Y', false), MakeTaintObj(testString._lastIndexOf('Y'), false), 'PASS', 'FAIL');
		
		__test(++testNum, testString.lastIndexOf(false, false, 'ga S', true), MakeTaintObj(testString._lastIndexOf('ga S'), false), 'PASS', 'FAIL');
		__test(++testNum, testString.lastIndexOf(false, false, 'Ad', true), MakeTaintObj(testString._lastIndexOf('Ad'), false), 'PASS', 'FAIL');
		__test(++testNum, testString.lastIndexOf(false, false, 'di', true), MakeTaintObj(testString._lastIndexOf('di'), false), 'PASS', 'FAIL');
		
		console.log('');
	}
	
	
	
	/// localeCompare
	function testLocaleCompare() {
		var testStrings = ['ab', 'cd', 'aa', 'bb', 'abcd', 'aaa', 'AA', 'aA', 'Aa'];
		var testNum = 0;
		console.log('- Test localeCompare:');
		
		// Comparison with i+1
		for(var i=0; i<testStrings.length-1; i++) {
			__test(++testNum, testStrings[i].localeCompare(false, false, testStrings[i+1], false), MakeTaintObj(testStrings[i]._localeCompare(testStrings[i+1]), false), 'PASS', 'FAIL');
		}
		
		for(var i=0; i<testStrings.length-1; i++) {
			__test(++testNum, testStrings[i].localeCompare(true, false, testStrings[i+1], false), MakeTaintObj(testStrings[i]._localeCompare(testStrings[i+1]), false), 'PASS', 'FAIL');
		}
		
		for(var i=0; i<testStrings.length-1; i++) {
			__test(++testNum, testStrings[i].localeCompare(false, false, testStrings[i+1], true), MakeTaintObj(testStrings[i]._localeCompare(testStrings[i+1]), false), 'PASS', 'FAIL');
		}
		
		for(var i=0; i<testStrings.length-1; i++) {
			__test(++testNum, testStrings[i].localeCompare(true, false, testStrings[i+1], true), MakeTaintObj(testStrings[i]._localeCompare(testStrings[i+1]), false), 'PASS', 'FAIL');
		}
		
		// Self Comparison
		for(var i=0; i<testStrings.length; i++) {
			__test(++testNum, testStrings[i].localeCompare(false, false, testStrings[i], false), MakeTaintObj(testStrings[i]._localeCompare(testStrings[i]), false), 'PASS', 'FAIL');
		}
		
		for(var i=0; i<testStrings.length; i++) {
			__test(++testNum, testStrings[i].localeCompare(true, false, testStrings[i], false), MakeTaintObj(testStrings[i]._localeCompare(testStrings[i]), false), 'PASS', 'FAIL');
		}
		
		for(var i=0; i<testStrings.length; i++) {
			__test(++testNum, testStrings[i].localeCompare(false, false, testStrings[i], true), MakeTaintObj(testStrings[i]._localeCompare(testStrings[i]), false), 'PASS', 'FAIL');
		}
		
		for(var i=0; i<testStrings.length; i++) {
			__test(++testNum, testStrings[i].localeCompare(true, false, testStrings[i], true), MakeTaintObj(testStrings[i]._localeCompare(testStrings[i]), false), 'PASS', 'FAIL');
		}
		
		console.log('');
	}
	
	
	/// match
	function testMatch() {
	
	}
	
	
	
	/// replace
    
    
    
    
    
    /// RETURN OBJECT
    var tests_obj = {
        charAt: 		testCharAt,
        charCodeAt: 	testCharCodeAt,
		concat: 		testConcat,
		fromCharCode:	testFromCharCode,
		indexOf:		testIndexOf,
		lastIndexOf:	testLastIndexOf
    };
    var tests_arr = [
        testCharAt,
        testCharCodeAt,
		testConcat,
		testFromCharCode,
		testIndexOf,
		testLastIndexOf
    ];
    return {
        runAll: function() {
            for(var i=0; i<tests_arr.length; i++) {
                (tests_arr[i])();
            }
        },
        run: function(i) {
			if(typeof i === 'number') {
				(test_arr[i])();
			} else {
				(test_obj[i])();
			}
		}
    }
})();