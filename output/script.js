"use strict";
var responseOne = {
    status: 200,
    type: 1,
    data: {},
};
// enums
var Rtype;
(function (Rtype) {
    Rtype[Rtype["SUCCES"] = 0] = "SUCCES";
    Rtype[Rtype["FAIL"] = 1] = "FAIL";
})(Rtype || (Rtype = {}));
var responseTwo = {
    status: 200,
    type: Rtype.SUCCES,
    data: {},
};
console.log(responseTwo);
