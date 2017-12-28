"use strict";

Object.prototype.usedIn = function(func) {
  func(this);
  return this;
};
