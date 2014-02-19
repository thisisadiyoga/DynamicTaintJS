/***************************************************
String Library Handler

- Format:
   Every function call has uniform access method by
   using the following function signature:
   function f_name (_tag, _new,
	   			    _param_1_val, _param_1_tag,
				    _param_2_val, _param_2_tag, ...)
   where _param_i_val is the i-th parameter of the
   original function.
   
   Additionally, there are two added parameters:
   - _tag: The TAG of the caller object, FALSE for
		   GLOBAL object
   - _new: A Parameter indicating if the original
		  call is a new object creation (i.e.
		  new f_name();)
	
   Lastly, every parameter has to have the
   corresponding tag which corresponds to the tag
   attached to the original parameter in the
   transformation

- Code:
   foo = function (_tag, _new, ...) {
     if(NEW Object Creation)
	   if(IsGlobal(this))
	     new foo(...);
		 // branch depending on param availability
	   else
	     new this.foo(...);
		 // branch depending on param availability
	 else
	   if(IsGlobal(this))
	     foo(...);
		 // branch depending on param availability
	   else
	     this.foo(...);
		 // branch depending on param availability
   }
***************************************************/
// prototype charAt
Object.defineProperty(String.prototype, '_charAt', {
	value: String.prototype.charAt
});
String.prototype.charAt = function(_tag, _new, _val1, _tag1) {
	var temp = String.prototype._charAt;
	if(_new === true) {
		if(IsGlobal(this)) {
			if(IsDefined(_val1)) {
				return new temp(_val1);
			} else {
				return new temp();
			}
		} else {
			if(IsDefined(_val1)) {
				return new this._charAt(_val1);
			} else {
				return new this._charAt();
			}
		}
	} else {
		if(IsGlobal(this)) {
			if(IsDefined(_val1)) {
				return MakeTaintObj(
					temp(_val1),
					_tag
				);
			} else {
				return MakeTaintObj(
					temp(),
					_tag
				);
			}
		} else {
			if(IsDefined(_val1)) {
				return MakeTaintObj(
					this._charAt(_val1),
					_tag
				);
			} else {
				return MakeTaintObj(
					this._charAt(),
					_tag
				);
			}
		}
	}
}
String.prototype.charAt.toString = function() {
	return String.prototype._charAt.toString();
};

// prototype charCodeAt
Object.defineProperty(String.prototype, '_charCodeAt', {
	value: String.prototype.charCodeAt
});
String.prototype.charCodeAt = function(_tag, _new, _val1, _tag1) {
	var temp = String.prototype._charCodeAt;
	if(_new === true) {
		if(IsGlobal(this)) {
			if(IsDefined(_val1)) {
				return new temp(_val1);
			} else {
				return new temp();
			}
		} else {
			if(IsDefined(_val1)) {
				return new this._charCodeAt(_val1);
			} else {
				return new this._charCodeAt();
			}
		}
	} else {
		if(IsGlobal(this)) {
			if(IsDefined(_val1)) {
				return MakeTaintObj(
					temp(_val1),
					_tag
				);
			} else {
				return MakeTaintObj(
					temp(),
					_tag
				);
			}
		} else {
			if(IsDefined(_val1)) {
				return MakeTaintObj(
					this._charCodeAt(_val1),
					_tag
				);
			} else {
				return MakeTaintObj(
					this._charCodeAt(),
					_tag
				);
			}
		}
	}
};
String.prototype.charCodeAt.toString = function() {
	return String.prototype._charCodeAt.toString();
};

// prototype concat
Object.defineProperty(String.prototype, '_concat', {
	value: String.prototype.concat
});
String.prototype.concat = function(_tag, _new, _val1, _tag1) {
	var temp = String.prototype._concat;
	if(_new === true) {
		if(IsGlobal(this)) {
			if(IsDefined(_val1)) {
				return new temp(_val1);
			} else {
				return new temp();
			}
		} else {
			if(IsDefined(_val)) {
				return new this._concat(_val1);
			} else {
				return new this._concat();
			}
		}
	} else {
		if(IsGlobal(this)) {
			if(IsDefined(_val1)) {
				return MakeTaintObj(
					temp(_val1),
					LUB(_tag, _tag1)
				);
			} else {
				return MakeTaintObj(
					temp(),
					LUB(_tag, _tag1)
				);
			}
		} else {
			if(IsDefined(_val1)) {
				return MakeTaintObj(
					this._concat(_val1),
					LUB(_tag, _tag1)
				);
			} else {
				return MakeTaintObj(
					this._concat(),
					LUB(_tag, _tag1)
				);
			}
		}
	}
};
String.prototype.concat.toString = function() {
	return String.prototype._concat.toString();
};

// fromCharCode
//! TODO: Check _tag1 Propagation
Object.defineProperty(String, '_fromCharCode', {
	value: String.fromCharCode
});
String.fromCharCode = function(_tag, _new, _val1, _tag1) {
	var temp = String._fromCharCode;
	if(_new === true) {
		if(IsGlobal(this)) {
			if(IsDefined(_val1)) {
				return new temp(_val1);
			} else {
				return new temp();
			}
		} else {
			if(IsDefined(_val1)) {
				return new this._fromCharCode(_val1);
			} else {
				return new this._fromCharCode();
			}
		}
	} else {
		if(IsGlobal(this)) {
			if(IsDefined(_val1)) {
				return MakeTaintObj(
					temp(_val1),
					_tag1
				);
			} else {
				return MakeTaintObj(
					temp(),
					_tag1
				);
			}
		} else {
			if(IsDefined(_val1)) {
				return MakeTaintObj(
					this._fromCharCode(_val1),
					_tag1
				);
			} else {
				return MakeTaintObj(
					this._fromCharCode(),
					_tag1
				);
			}
		}
	}
};
String.fromCharCode.toString = function() {
	return String._fromCharCode.toString();
};

// prototype indexOf
Object.defineProperty(String.prototype, '_indexOf', {
	value: String.prototype.indexOf
});
String.prototype.indexOf = function(_tag, _new, _val1, _tag1) {
	var temp = String.prototype._indexOf;
	if(_new === true) {
		if(IsGlobal(this)) {
			if(IsDefined(_val1)) {
				return new temp(_val1);
			} else {
				return new temp();
			}
		} else {
			if(IsDefined(_val1)) {
				return new this._indexOf(_val1);
			} else {
				return new this._indexOf();
			}
		}
	} else {
		if(IsGlobal(this)) {
			if(IsDefined(_val1)) {
				return MakeTaintObj(
					temp(_val1),
					false
				);
			} else {
				return MakeTaintObj(
					temp(),
					false
				);
			}
		} else {
			if(IsDefined(_val1)) {
				return MakeTaintObj(
					this._indexOf(_val1),
					false
				);
			} else {
				return MakeTaintObj(
					this._indexOf(),
					false
				);
			}
		}
	}
};
String.prototype.indexOf.toString = function() {
	return String.prototype._indexOf.toString();
};

// prototype lastIndexOf
Object.defineProperty(String.prototype, '_lastIndexOf', {
	value: String.prototype.lastIndexOf
});
String.prototype.lastIndexOf = function(_tag, _new, _val1, _tag1) {
	var temp = String.prototype._lastIndexOf;
	if(_new === true) {
		if(IsGlobal(this)) {
			if(IsDefined(_val1)) {
				return new temp(_val1);
			} else {
				return new temp();
			}
		} else {
			if(IsDefined(_val1)) {
				return new this._lastIndexOf(_val1);
			} else {
				return new this._lastIndexOf();
			}
		}
	} else {
		if(IsGlobal(this)) {
			if(IsDefined(_val1)) {
				return MakeTaintObj(
					temp(_val1),
					false
				);
			} else {
				return MakeTaintObj(
					temp(),
					false
				);
			}
		} else {
			if(IsDefined(_val1)) {
				return MakeTaintObj(
					this._lastIndexOf(_val1),
					false
				);
			} else {
				return MakeTaintObj(
					this._lastIndexOf(),
					false
				);
			}
		}
	}
};
String.prototype.lastIndexOf.toString = function() {
	return String.prototype._lastIndexOf.toString();
};

// prototype localeCompare
Object.defineProperty(String.prototype, '_localeCompare', {
	value: String.prototype.localeCompare
});
String.prototype.localeCompare = function(_tag, _new, _val1, _tag1) {
	var temp = String.prototype._localeCompare;
	if(_new === true) {
		if(IsGlobal(this)) {
			if(IsDefined(_val1)) {
				return new temp(_val1);
			} else {
				return new temp();
			}
		} else {
			if(IsDefined(_val1)) {
				return new this._localeCompare(_val1);
			} else {
				return new this._localeCompare();
			}
		}
	} else {
		if(IsGlobal(this)) {
			if(IsDefined(_val1)) {
				return MakeTaintObj(
					temp(_val1),
					false
				);
			} else {
				return MakeTaintObj(
					temp(),
					false
				);
			}
		} else {
			if(IsDefined(_val1)) {
				return MakeTaintObj(
					this._localeCompare(_val1),
					false
				);
			} else {
				return MakeTaintObj(
					this._localeCompare(),
					false
				);
			}
		}
	}
};
String.prototype.localeCompare.toString = function() {
	String.prototype._localeCompare.toString();
};

// prototype match
Object.defineProperty(String.prototype, '_match', {
	value: String.prototype.match
});
String.prototype.match = function(_tag, _new, _val1, _tag1) {
	var temp = String.prototype._match;
	if(_new === true) {
		if(IsGlobal(this)) {
			if(IsDefined(_val1)) {
				return new temp(_val1);
			} else {
				return new temp();
			}
		} else {
			if(IsDefined(_val1)) {
				return new this._match(_val1);
			} else {
				return new this._match();
			}
		}
	} else {
		var res;
		if(IsGlobal(this)) {
			if(IsDefined(_val1)) {
				res = temp(_val1);
			} else {
				res = temp();
			}
		} else {
			if(IsDefined(_val1)) {
				res = this._match(_val1);
			} else {
				res = this._match();
			}
		}
	}
	
	// Create Return Object (Array)
	// - Convert Every Element in res to TaintObject
	var arr = [];
	for(var i=0; i<res.length; i++) {
		arr[i] = MakeTaintObj(
			res[i],
			LUB(_tag, _tag1)
		);
	}
	
	return MakeTaintObj(
		arr,
		LUB(_tag, _tag1)	// Propagate _tag Outside
	);
};
String.prototype.match.toString = function() {
	return String.prototype._match.toString();
};

// prototype replace
Object.defineProperty(String.prototype, '_replace', {
	value: String.prototype.replace
});
String.prototype.replace = function(_tag, _new, _val1, _tag1, _val2, _tag2) {
	var temp = String.prototype._replace;
	if(_new == true) {
		if(IsGlobal(this)) {
			if(IsDefined(_val2)) {
				return new temp(_val1, _val2);
			} else if(IsDefined(_val1)) {
				return new temp(_val1);
			} else {
				return new temp();
			}
		} else {
			if(IsDefined(_val2)) {
				return new this._replace(_val1, _val2);
			} else if(IsDefined(_val1)) {
				return new this._replace(_val1);
			} else {
				return new this._replace();
			}
		}
	} else {
		if(IsGlobal(this)) {
			if(IsDefined(_val2)) {
				return MakeTaintObj(
					temp(_val1, _val2),
					LUB(_tag, _tag2)
				);
			} else if(IsDefined(_val1)) {
				return MakeTaintObj(
					temp(_val1),
					LUB(_tag, _tag2)
				);
			} else {
				return MakeTaintObj(
					temp(),
					LUB(_tag, _tag2)
				);
			}
		} else {
			if(IsDefined(_val2)) {
				return MakeTaintObj(
					this._replace(_val1, _val2),
					LUB(_tag, _tag2)
				);
			} else if(IsDefined(_val1)) {
				return MakeTaintObj(
					this._replace(_val1),
					LUB(_tag, _tag2)
				);
			} else {
				return MakeTaintObj(
					this._replace(),
					LUB(_tag, _tag2)
				);
			}
		}
	}
};
String.prototype.replace.toString = function() {
	return String.prototype._replace.toString();
};


// search
Object.defineProperty(String.prototype, '_search', {
	value: String.prototype.search
});
String.prototype.search = function(_tag, _new, _val1, _tag1) {
	var temp = String.prototype._search;
	if(_new === true) {
		if(IsGlobal(this)) {
			if(IsDefined(_val1)) {
				return new temp(_val1);
			} else {
				return new temp();
			}
		} else {
			if(IsDefined(_val1)) {
				return new this._search(_val1);
			} else {
				return new this._search();
			}
		}
	} else {
		if(IsGlobal(this)) {
			if(IsDefined(_val1)) {
				return MakeTaintObj(
					temp(_val1),
					false
				);
			} else {
				return MakeTaintObj(
					temp(),
					false
				);
			}
		} else {
			if(IsDefined(_val1)) {
				return MakeTaintObj(
					this._search(_val1),
					false
				);
			} else {
				return MakeTaintObj(
					this._search(),
					false
				);
			}
		}
	}
};
String.prototype.search.toString = function() {
	return String.prototype._search.toString();
};

// slice
Object.defineProperty(String.prototype, '_slice', {
	value: String.prototype.slice
});
String.prototype.slice = function(_tag, _new, _val1, _tag1, _val2, _tag2) {
	var temp = String.prototype._slice;
	if(_new == true) {
		if(IsGlobal(this)) {
			if(IsDefined(_val2)) {
				return new temp(_val1, _val2);
			} else if(IsDefined(_val1)) {
				return new temp(_val1);
			} else {
				return new temp();
			}
		} else {
			if(IsDefined(_val2)) {
				return new this._slice(_val1, _val2);
			} else if(IsDefined(_val1)) {
				return new this._slice(_val1);
			} else {
				return new this._slice();
			}
		}
	} else {
		if(IsGlobal(this)) {
			if(IsDefined(_val2)) {
				return MakeTaintObj(
					temp(_val1, _val2),
					_tag
				);
			} else if(IsDefined(_val1)) {
				return MakeTaintObj(
					temp(_val1),
					_tag
				);
			} else {
				return MakeTaintObj(
					temp(),
					_tag
				);
			}
		} else {
			if(IsDefined(_val2)) {
				return MakeTaintObj(
					this._slice(_val1, _val2),
					_tag
				);
			} else if(IsDefined(_val1)) {
				return MakeTaintObj(
					this._slice(_val1),
					_tag
				);
			} else {
				return MakeTaintObj(
					this._slice(),
					_tag
				);
			}
		}
	}
};
String.prototype.slice.toString = function() {
	return String.prototype._slice.toString();
};

// split
Object.defineProperty(String.prototype, '_split', {
	value: String.prototype.split
});
String.prototype.split = function(_tag, _new, _val1, _tag1) {
	var temp = String.prototype._split;
	if(_new === true) {
		if(IsGlobal(this)) {
			if(IsDefined(_val1)) {
				return new temp(_val1);
			} else {
				return new temp();
			}
		} else {
			if(IsDefined(_val1)) {
				return new this._split(_val1);
			} else {
				return new this._split();
			}
		}
	} else {
		var res;
		if(IsGlobal(this)) {
			if(IsDefined(_val1)) {
				res = temp(_val1);
			} else {
				res = temp();
			}
		} else {
			if(IsDefined(_val1)) {
				res = this._split(_val1);
			} else {
				res = this._split();
			}
		}
	}
	
	// Create Return Object (Array)
	// - Convert Every Element in res to TaintObject
	var arr = [];
	for(var i=0; i<res.length; i++) {
		arr[i] = MakeTaintObj(
			res[i],
			LUB(_tag, _tag1)
		);
	}
	
	return MakeTaintObj(
		arr,
		_tag	// Propagate _tag Outside
	);
};
String.prototype.split.toString = function() {
	return String.prototype._split.toString();
};

// substr
Object.defineProperty(String.prototype, '_substr', {
	value: String.prototype.substr
});
String.prototype.substr = function(_tag, _val1, _tag1, _val2, _tag2) {
	var temp = String.prototype._substr;
	if(_new == true) {
		if(IsGlobal(this)) {
			if(IsDefined(_val2)) {
				return new temp(_val1, _val2);
			} else if(IsDefined(_val1)) {
				return new temp(_val1);
			} else {
				return new temp();
			}
		} else {
			if(IsDefined(_val2)) {
				return new this._substr(_val1, _val2);
			} else if(IsDefined(_val1)) {
				return new this._substr(_val1);
			} else {
				return new this._substr();
			}
		}
	} else {
		if(IsGlobal(this)) {
			if(IsDefined(_val2)) {
				return MakeTaintObj(
					temp(_val1, _val2),
					_tag
				);
			} else if(IsDefined(_val1)) {
				return MakeTaintObj(
					temp(_val1),
					_tag
				);
			} else {
				return MakeTaintObj(
					temp(),
					_tag
				);
			}
		} else {
			if(IsDefined(_val2)) {
				return MakeTaintObj(
					this._substr(_val1, _val2),
					_tag
				);
			} else if(IsDefined(_val1)) {
				return MakeTaintObj(
					this._substr(_val1),
					_tag
				);
			} else {
				return MakeTaintObj(
					this._substr(),
					_tag
				);
			}
		}
	}
};
String.prototype.substr.toString = function() {
	return String.prototype._substr.toString();
};

// substring
Object.defineProperty(String.prototype, '_substring', {
	value: String.prototype.substring
});
String.prototype.substring = function(_tag, _new, _val1, _tag1, _val2, _tag2) {
	var temp = String.prototype._substring;
	if(_new == true) {
		if(IsGlobal(this)) {
			if(IsDefined(_val2)) {
				return new temp(_val1, _val2);
			} else if(IsDefined(_val1)) {
				return new temp(_val1);
			} else {
				return new temp();
			}
		} else {
			if(IsDefined(_val2)) {
				return new this._substring(_val1, _val2);
			} else if(IsDefined(_val1)) {
				return new this._substring(_val1);
			} else {
				return new this._substring();
			}
		}
	} else {
		if(IsGlobal(this)) {
			if(IsDefined(_val2)) {
				return MakeTaintObj(
					temp(_val1, _val2),
					_tag
				);
			} else if(IsDefined(_val1)) {
				return MakeTaintObj(
					temp(_val1),
					_tag
				);
			} else {
				return MakeTaintObj(
					temp(),
					_tag
				);
			}
		} else {
			if(IsDefined(_val2)) {
				return MakeTaintObj(
					this._substring(_val1, _val2),
					_tag
				);
			} else if(IsDefined(_val1)) {
				return MakeTaintObj(
					this._substring(_val1),
					_tag
				);
			} else {
				return MakeTaintObj(
					this._substring(),
					_tag
				);
			}
		}
	}
};
String.prototype.substring.toString = function() {
	return String.prototype._substring.toString();
};

// toLocaleLowerCase
Object.defineProperty(String.prototype, '_toLocaleLowerCase', {
	value: String.prototype.toLocaleLowerCase
});
String.prototype.toLocaleLowerCase = function(_tag, _new) {
	var temp = String.prototype._toLocaleLowerCase;
	if(_new == true) {
		if(IsGlobal(this)) {
			return new temp();
		} else {
			return new this._toLocaleLowerCase();
		}
	} else {
		if(IsGlobal(this)) {
			return MakeTaintObj(
				temp(),
				_tag
			);
		} else {
			return MakeTaintObj(
				this._toLocaleLowerCase(),
				_tag
			);
		}
	}
};
String.prototype.toLocaleLowerCase.toString = function() {
	return String.prototype._toLocaleLowerCase.toString();
};

// toLocaleUpperCase
Object.defineProperty(String.prototype, '_toLocaleUpperCase', {
	value: String.prototype.toLocaleUpperCase
});
String.prototype.toLocaleUpperCase = function(_tag, _new) {
	var temp = String.prototype._toLocaleUpperCase;
	if(_new == true) {
		if(IsGlobal(this)) {
			return new temp();
		} else {
			return new this._toLocaleUpperCase();
		}
	} else {
		if(IsGlobal(this)) {
			return MakeTaintObj(
				temp(),
				_tag
			);
		} else {
			return MakeTaintObj(
				this._toLocaleUpperCase(),
				_tag
			);
		}
	}
};
String.prototype.toLocaleUpperCase.toString = function() {
	return String.prototype._toLocaleUpperCase.toString();
};

// toLowerCase
Object.defineProperty(String.prototype, '_toLowerCase', {
	value: String.prototype.toLowerCase
});
String.prototype.toLowerCase = function(_tag, _new) {
	var temp = String.prototype._toLowerCase;
	if(_new == true) {
		if(IsGlobal(this)) {
			return new temp();
		} else {
			return new this._toLowerCase();
		}
	} else {
		if(IsGlobal(this)) {
			return MakeTaintObj(
				temp(),
				_tag
			);
		} else {
			return MakeTaintObj(
				this._toLowerCase(),
				_tag
			);
		}
	}
};
String.prototype.toLowerCase.toString = function() {
	return String.prototype._toLowerCase.toString();
};

// toUpperCase
Object.defineProperty(String.prototype, '_toUpperCase', {
	value: String.prototype.toUpperCase
});
String.prototype.toUpperCase = function(_tag, _new) {
	var temp = String.prototype._toUpperCase;
	if(_new == true) {
		if(IsGlobal(this)) {
			return new temp();
		} else {
			return new this._toUpperCase();
		}
	} else {
		if(IsGlobal(this)) {
			return MakeTaintObj(
				temp(),
				_tag
			);
		} else {
			return MakeTaintObj(
				this._toUpperCase(),
				_tag
			);
		}
	}
};
String.prototype.toUpperCase.toString = function() {
	return String.prototype._toUpperCase.toString();
};

// toString
Object.defineProperty(String.prototype, '_toString', {
	value: String.prototype.toString
});
String.prototype.toString = function(_tag, _new) {
	var temp = String.prototype._toString;
	if(_new == true) {
		if(IsGlobal(this)) {
			return new temp();
		} else {
			return new this._toString();
		}
	} else {
		if(IsGlobal(this)) {
			return MakeTaintObj(
				temp(),
				_tag
			);
		} else {
			return MakeTaintObj(
				this._toString(),
				_tag
			);
		}
	}
};
String.prototype.toString.toString = function() {
	return String.prototype._toString.toString();
};

// trim
Object.defineProperty(String.prototype, '_trim', {
	value: String.prototype.trim
});
String.prototype.trim = function(_tag, _new) {
	var temp = String.prototype._trim;
	if(_new == true) {
		if(IsGlobal(this)) {
			return new temp();
		} else {
			return new this._trim();
		}
	} else {
		if(IsGlobal(this)) {
			return MakeTaintObj(
				temp(),
				_tag
			);
		} else {
			return MakeTaintObj(
				this._trim(),
				_tag
			);
		}
	}
};
String.prototype.trim.toString = function() {
	return String.prototype._trim.toString();
};

// valueOf
Object.defineProperty(String.prototype, '_valueOf', {
	value: String.prototype.valueOf
});
String.prototype.valueOf = function(_tag, _new) {
	var temp = String.prototype._valueOf;
	if(_new == true) {
		if(IsGlobal(this)) {
			return new temp();
		} else {
			return new this._valueOf();
		}
	} else {
		if(IsGlobal(this)) {
			return MakeTaintObj(
				temp(),
				_tag
			);
		} else {
			return MakeTaintObj(
				this._valueOf(),
				_tag
			);
		}
	}
};
String.prototype.valueOf.toString = function() {
	return String.prototype._valueOf.toString();
};




// String Constructor
Object.defineProperty(window, '_String', {
	value: String
});
String = function(_tag, _new, _val1, _tag1) {
	if(_new === true) {
		if(IsDefined(_val1)) {
			return new _String(_val1);
		} else {
			return new _String();
		}
	} else {
		if(IsDefined(_val1)) {
			return _String(_val1);
		} else {
			return _String();
		}
	}
};
// Handle Direct Function Call:
String.fromCharCode = function(_tag, _new, _val1, _tag1) {
	return _String.fromCharCode(_tag, _new, _val1, _tag1);
};