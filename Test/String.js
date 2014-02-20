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
		var txt, reg, res, act;
		var testNum = 0;
		
		// Test Regex:
		console.log('- Test match (RegEx):');
		txt = 'For more information, see Chapter 3.4.5.1 by Adi Yoga Sidi Prabawa';
		reg = /(chapter \d+(\.\d)*)/i;
		
		// !Tag, !New, Local, !Tag1
		res = MakeTaintObj([
			MakeTaintObj('Chapter 3.4.5.1', false),
			MakeTaintObj('Chapter 3.4.5.1', false),
			MakeTaintObj('.1', false)], false
		);
		act = txt.match(false, false, reg, false);
		
		for(var i=0; i<act.val.length; i++) {
			__test(++testNum, act.val[i], res.val[i], 'PASS', 'FAIL');
		}
		__test(++testNum, act.tag, res.tag, 'PASS: Array Tag', 'FAIL: Array Tag');
		__test(++testNum, act.length, res.length, 'PASS: Array Length', 'FAIL: Array Length');
		
		
		// Tag, !New, Local, !Tag1
		res = MakeTaintObj([
			MakeTaintObj('Chapter 3.4.5.1', true),
			MakeTaintObj('Chapter 3.4.5.1', true),
			MakeTaintObj('.1', true)], true
		);
		act = txt.match(true, false, reg, false);
		
		for(var i=0; i<act.val.length; i++) {
			__test(++testNum, act.val[i], res.val[i], 'PASS', 'FAIL');
		}
		__test(++testNum, act.tag, res.tag, 'PASS: Array Tag', 'FAIL: Array Tag');
		__test(++testNum, act.length, res.length, 'PASS: Array Length', 'FAIL: Array Length');
		
		
		// !Tag, !New, Local, Tag1
		act = txt.match(false, false, reg, true);
		
		for(var i=0; i<act.val.length; i++) {
			__test(++testNum, act.val[i], res.val[i], 'PASS', 'FAIL');
		}
		__test(++testNum, act.tag, res.tag, 'PASS: Array Tag', 'FAIL: Array Tag');
		__test(++testNum, act.length, res.length, 'PASS: Array Length', 'FAIL: Array Length');
		
		
		// Tag, !New, Local, Tag1
		act = txt.match(true, false, reg, true);
		
		for(var i=0; i<act.val.length; i++) {
			__test(++testNum, act.val[i], res.val[i], 'PASS', 'FAIL');
		}
		__test(++testNum, act.tag, res.tag, 'PASS: Array Tag', 'FAIL: Array Tag');
		__test(++testNum, act.length, res.length, 'PASS: Array Length', 'FAIL: Array Length');
		
		
		// Test String
		console.log('- Test match(String):');
		txt = 'The rain in SPAIN stays mainly in the plain';
		reg = 'ain';
		
		// Tag, !New, Local, !Tag1
		res = MakeTaintObj(
			[MakeTaintObj('ain', false)], false
		);
		act = txt.match(false, false, reg, false);
		
		for(var i=0; i<act.val.length; i++) {
			__test(++testNum, act.val[i], res.val[i], 'PASS', 'FAIL');
		}
		__test(++testNum, act.tag, res.tag, 'PASS: Array Tag', 'FAIL: Array Tag');
		__test(++testNum, act.length, res.length, 'PASS: Array Length', 'FAIL: Array Length');
		
		
		// Tag, !New, Local, !Tag1
		res = MakeTaintObj(
			[MakeTaintObj('ain', true)], true
		);
		act = txt.match(true, false, reg, false);
		
		for(var i=0; i<act.val.length; i++) {
			__test(++testNum, act.val[i], res.val[i], 'PASS', 'FAIL');
		}
		__test(++testNum, act.tag, res.tag, 'PASS: Array Tag', 'FAIL: Array Tag');
		__test(++testNum, act.length, res.length, 'PASS: Array Length', 'FAIL: Array Length');
		
		
		// !Tag, !New, Local, Tag1
		act = txt.match(false, false, reg, true);
		
		for(var i=0; i<act.val.length; i++) {
			__test(++testNum, act.val[i], res.val[i], 'PASS', 'FAIL');
		}
		__test(++testNum, act.tag, res.tag, 'PASS: Array Tag', 'FAIL: Array Tag');
		__test(++testNum, act.length, res.length, 'PASS: Array Length', 'FAIL: Array Length');
		
		
		// Tag, !New, Local, Tag1
		act = txt.match(true, false, reg, true);
		
		for(var i=0; i<act.val.length; i++) {
			__test(++testNum, act.val[i], res.val[i], 'PASS', 'FAIL');
		}
		__test(++testNum, act.tag, res.tag, 'PASS: Array Tag', 'FAIL: Array Tag');
		__test(++testNum, act.length, res.length, 'PASS: Array Length', 'FAIL: Array Length');
		
		console.log('');
	}
	
	
	
	/// replace
    function testReplace() {
		var txt, arg1a, arg1b, arg2a, arg2b, res;
		var testNum = 0;
		
		// Test RegEx + Function
		console.log('- Test replace(RegEx, Function):');
		txt = 'abc12345#$*%';
		arg1a = /([^\d]*)(\d*)([^\w]*)/;
		arg2a = function ___a(_tag, _new, match, match_tag, p1, p1_tag, p2, p2_tag, p3, p3_tag, offset, offset_tag, string, string_tag) {
			if(_new === true) {
				if(IsGlobal(this)) {
					return new ___a(_tag, false, match, match_tag, p1, p1_tag, p2, p2_tag, p3, p3_tag, offset, offset_tag, string, string_tag);
				} else {
					return new this.___a(_tag, false, match, match_tag, p1, p1_tag, p2, p2_tag, p3, p3_tag, offset, offset_tag, string, string_tag);
				}
			} else {
				return MakeTaintObj(
					// Remove dependencies with Array.prototype.join
					// [p1, p2, p3].join(' - '),
					p1 + ' - ' + p2 + ' - ' + p3,
					LUB(_tag, p1_tag, p2_tag, p3_tag)
				);
			}
		};
		arg2b = function(match, p1, p2, p3, offset, string) {
			// Remove dependencies with Array.prototype.join
			// return [p1, p2, p3].join(' - ');
			return p1 + ' - ' + p2 + ' - ' + p3;
		};
		res = MakeTaintObj('abc - 12345 - #$*%', false);
		__test(++testNum, txt.replace(false, false, arg1a, false, arg2a, false), MakeTaintObj(txt._replace(arg1a, arg2b), false), 'PASS', 'FAIL');
		__test(++testNum, txt.replace(false, false, arg1a, false, arg2a, false), res, 'PASS', 'FAIL');
		
		res = MakeTaintObj('abc - 12345 - #$*%', true);
		__test(++testNum, txt.replace(true, false, arg1a, false, arg2a, false), MakeTaintObj(txt._replace(arg1a, arg2b), true), 'PASS', 'FAIL');
		__test(++testNum, txt.replace(true, false, arg1a, false, arg2a, false), res, 'PASS', 'FAIL');
		
		__test(++testNum, txt.replace(false, false, arg1a, false, arg2a, true), MakeTaintObj(txt._replace(arg1a, arg2b), true), 'PASS', 'FAIL');
		__test(++testNum, txt.replace(false, false, arg1a, false, arg2a, true), res, 'PASS', 'FAIL');
		
		__test(++testNum, txt.replace(false, false, arg1a, true, arg2a, false), MakeTaintObj(txt._replace(arg1a, arg2b), true), 'PASS', 'FAIL');
		__test(++testNum, txt.replace(false, false, arg1a, true, arg2a, false), res, 'PASS', 'FAIL');
		
		__test(++testNum, txt.replace(false, false, arg1a, true, arg2a, true), MakeTaintObj(txt._replace(arg1a, arg2b), true), 'PASS', 'FAIL');
		__test(++testNum, txt.replace(false, false, arg1a, true, arg2a, true), res, 'PASS', 'FAIL');
		
		__test(++testNum, txt.replace(true, false, arg1a, true, arg2a, false), MakeTaintObj(txt._replace(arg1a, arg2b), true), 'PASS', 'FAIL');
		__test(++testNum, txt.replace(true, false, arg1a, true, arg2a, false), res, 'PASS', 'FAIL');
		
		__test(++testNum, txt.replace(true, false, arg1a, false, arg2a, true), MakeTaintObj(txt._replace(arg1a, arg2b), true), 'PASS', 'FAIL');
		__test(++testNum, txt.replace(true, false, arg1a, false, arg2a, true), res, 'PASS', 'FAIL');
		
		__test(++testNum, txt.replace(true, false, arg1a, true, arg2a, true), MakeTaintObj(txt._replace(arg1a, arg2b), true), 'PASS', 'FAIL');
		__test(++testNum, txt.replace(true, false, arg1a, true, arg2a, true), res, 'PASS', 'FAIL');
		
		
		
		txt = 'For more information, see Chapter 3.4.5.1';
		arg1a = /(chapter \d+(\.\d)*)/i;
		arg2a = function ___a(_tag, _new, _val1, _tag1, _val2, _tag2, _val3, _tag3, _val4, _tag4, _val5, _tag5) {
			// Recombine Arguments:
			var match = MakeTaintObj(_val1, _tag1);
			var p1 = MakeTaintObj(_val2, _tag2);
			var p2 = MakeTaintObj(_val3, _tag3);
			var offset = MakeTaintObj(_val4, _tag4);
			var string = MakeTaintObj(_val5, _tag5);
			
			if(_new === true) {
				if(IsGlobal(this)) {
					return new ___a(_tag, _new, _val1, _tag1, _val2, _tag2, _val3, _tag3, _val4, _tag4, _val5, _tag5);
				} else {
					function constructor(args) {
						return ___a.apply(this, args);
					}
					constructor.prototype = ___a.prototype;
					return new constructor([_tag, false, _val1, _tag1, _val2, _tag2, _val3, _tag3, _val4, _tag4, _val5, _tag5]);
				}
			} else {
				return MakeTaintObj(
					match.val + ' +++ ' + p1.val + ' --- ' + p2.val,
					LUB(match.tag, p1.tag, p2.tag)
				);
			}
		};
		arg2b = function(match, p1, p2, offset, string) {
			return match + ' +++ ' + p1 + ' --- ' + p2;
		};
		res = MakeTaintObj('For more information, see Chapter 3.4.5.1 +++ Chapter 3.4.5.1 --- .1', false);
		__test(++testNum, txt.replace(false, false, arg1a, false, arg2a, false), MakeTaintObj(txt._replace(arg1a, arg2b), false), 'PASS', 'FAIL');
		__test(++testNum, txt.replace(false, false, arg1a, false, arg2a, false), res, 'PASS', 'FAIL');
		
		res = MakeTaintObj('For more information, see Chapter 3.4.5.1 +++ Chapter 3.4.5.1 --- .1', true);
		__test(++testNum, txt.replace(true, false, arg1a, false, arg2a, false), MakeTaintObj(txt._replace(arg1a, arg2b), true), 'PASS', 'FAIL');
		__test(++testNum, txt.replace(true, false, arg1a, false, arg2a, false), res, 'PASS', 'FAIL');
		
		__test(++testNum, txt.replace(false, false, arg1a, false, arg2a, true), MakeTaintObj(txt._replace(arg1a, arg2b), true), 'PASS', 'FAIL');
		__test(++testNum, txt.replace(false, false, arg1a, false, arg2a, true), res, 'PASS', 'FAIL');
		
		__test(++testNum, txt.replace(false, false, arg1a, true, arg2a, false), MakeTaintObj(txt._replace(arg1a, arg2b), true), 'PASS', 'FAIL');
		__test(++testNum, txt.replace(false, false, arg1a, true, arg2a, false), res, 'PASS', 'FAIL');
		
		__test(++testNum, txt.replace(false, false, arg1a, true, arg2a, true), MakeTaintObj(txt._replace(arg1a, arg2b), true), 'PASS', 'FAIL');
		__test(++testNum, txt.replace(false, false, arg1a, true, arg2a, true), res, 'PASS', 'FAIL');
		
		__test(++testNum, txt.replace(true, false, arg1a, true, arg2a, false), MakeTaintObj(txt._replace(arg1a, arg2b), true), 'PASS', 'FAIL');
		__test(++testNum, txt.replace(true, false, arg1a, true, arg2a, false), res, 'PASS', 'FAIL');
		
		__test(++testNum, txt.replace(true, false, arg1a, false, arg2a, true), MakeTaintObj(txt._replace(arg1a, arg2b), true), 'PASS', 'FAIL');
		__test(++testNum, txt.replace(true, false, arg1a, false, arg2a, true), res, 'PASS', 'FAIL');
		
		__test(++testNum, txt.replace(true, false, arg1a, true, arg2a, true), MakeTaintObj(txt._replace(arg1a, arg2b), true), 'PASS', 'FAIL');
		__test(++testNum, txt.replace(true, false, arg1a, true, arg2a, true), res, 'PASS', 'FAIL');
	}
    
    
    
    
    /// RETURN OBJECT
    var tests_obj = {
        charAt: 		testCharAt,
        charCodeAt: 	testCharCodeAt,
		concat: 		testConcat,
		fromCharCode:	testFromCharCode,
		indexOf:		testIndexOf,
		lastIndexOf:	testLastIndexOf,
		match:			testMatch,
		replace:		testReplace
    };
    var tests_arr = [
        testCharAt,
        testCharCodeAt,
		testConcat,
		testFromCharCode,
		testIndexOf,
		testLastIndexOf,
		testMatch,
		testReplace
    ];
    return {
        runAll: function() {
            for(var i=0; i<tests_arr.length; i++) {
                (tests_arr[i])();
            }
        },
        run: function(i) {
			if(typeof i === 'number') {
				(tests_arr[i])();
			} else {
				(tests_obj[i])();
			}
		}
    }
})();

// _StringLibraryTester.runAll();