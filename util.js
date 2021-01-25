var Utility;
(function (Utility) {
    var Useful = /** @class */ (function () {
        function Useful() {
        }
        Useful.prototype.timesTwo = function (n) {
            return n * 2;
        };
        return Useful;
    }());
    Utility.Useful = Useful;
})(Utility || (Utility = {}));
//modules export classes, it can be accessed by any file witch requires that module
/// <reference path="modules.ts" />
var use = new Utility.Useful();
console.log(use.timesTwo(9));
