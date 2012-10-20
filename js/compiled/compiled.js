(function(){function h(a) {
  throw a;
}
var i = void 0, j = true, k = null, m = false, n, ba = ba || {}, q = this;
function ca(a) {
  for(var a = a.split("."), b = q, c;c = a.shift();) {
    if(b[c] != k) {
      b = b[c]
    }else {
      return k
    }
  }
  return b
}
function da() {
}
function s(a) {
  var b = typeof a;
  if(b == "object") {
    if(a) {
      if(a instanceof Array) {
        return"array"
      }else {
        if(a instanceof Object) {
          return b
        }
      }
      var c = Object.prototype.toString.call(a);
      if(c == "[object Window]") {
        return"object"
      }
      if(c == "[object Array]" || typeof a.length == "number" && typeof a.splice != "undefined" && typeof a.propertyIsEnumerable != "undefined" && !a.propertyIsEnumerable("splice")) {
        return"array"
      }
      if(c == "[object Function]" || typeof a.call != "undefined" && typeof a.propertyIsEnumerable != "undefined" && !a.propertyIsEnumerable("call")) {
        return"function"
      }
    }else {
      return"null"
    }
  }else {
    if(b == "function" && typeof a.call == "undefined") {
      return"object"
    }
  }
  return b
}
function t(a) {
  var b = s(a);
  return b == "array" || b == "object" && typeof a.length == "number"
}
function v(a) {
  return typeof a == "string"
}
function w(a) {
  return a[ea] || (a[ea] = ++fa)
}
var ea = "closure_uid_" + Math.floor(Math.random() * 2147483648).toString(36), fa = 0;
function ga(a, b, c) {
  return a.call.apply(a.bind, arguments)
}
function ha(a, b, c) {
  a || h(Error());
  if(arguments.length > 2) {
    var d = Array.prototype.slice.call(arguments, 2);
    return function() {
      var c = Array.prototype.slice.call(arguments);
      Array.prototype.unshift.apply(c, d);
      return a.apply(b, c)
    }
  }else {
    return function() {
      return a.apply(b, arguments)
    }
  }
}
function y(a, b, c) {
  y = Function.prototype.bind && Function.prototype.bind.toString().indexOf("native code") != -1 ? ga : ha;
  return y.apply(k, arguments)
}
function ia(a, b) {
  var c = Array.prototype.slice.call(arguments, 1);
  return function() {
    var b = Array.prototype.slice.call(arguments);
    b.unshift.apply(b, c);
    return a.apply(this, b)
  }
}
var ja = Date.now || function() {
  return+new Date
};
function z(a, b) {
  function c() {
  }
  c.prototype = b.prototype;
  a.z = b.prototype;
  a.prototype = new c
}
;function ka(a, b) {
  for(var c = 1;c < arguments.length;c++) {
    var d = String(arguments[c]).replace(/\$/g, "$$$$"), a = a.replace(/\%s/, d)
  }
  return a
}
function la(a) {
  if(!ma.test(a)) {
    return a
  }
  a.indexOf("&") != -1 && (a = a.replace(na, "&amp;"));
  a.indexOf("<") != -1 && (a = a.replace(oa, "&lt;"));
  a.indexOf(">") != -1 && (a = a.replace(pa, "&gt;"));
  a.indexOf('"') != -1 && (a = a.replace(qa, "&quot;"));
  return a
}
var na = /&/g, oa = /</g, pa = />/g, qa = /\"/g, ma = /[&<>\"]/;
function ra(a, b) {
  if(a < b) {
    return-1
  }else {
    if(a > b) {
      return 1
    }
  }
  return 0
}
;var A, sa, ta, ua;
function va() {
  return q.navigator ? q.navigator.userAgent : k
}
ua = ta = sa = A = m;
var wa;
if(wa = va()) {
  var xa = q.navigator;
  A = wa.indexOf("Opera") == 0;
  sa = !A && wa.indexOf("MSIE") != -1;
  ta = !A && wa.indexOf("WebKit") != -1;
  ua = !A && !ta && xa.product == "Gecko"
}
var ya = A, B = sa, C = ua, D = ta, za = q.navigator, Aa = (za && za.platform || "").indexOf("Mac") != -1, Ba;
a: {
  var Ca = "", E;
  if(ya && q.opera) {
    var Da = q.opera.version, Ca = typeof Da == "function" ? Da() : Da
  }else {
    if(C ? E = /rv\:([^\);]+)(\)|;)/ : B ? E = /MSIE\s+([^\);]+)(\)|;)/ : D && (E = /WebKit\/(\S+)/), E) {
      var Ea = E.exec(va()), Ca = Ea ? Ea[1] : ""
    }
  }
  if(B) {
    var Fa, Ga = q.document;
    Fa = Ga ? Ga.documentMode : i;
    if(Fa > parseFloat(Ca)) {
      Ba = String(Fa);
      break a
    }
  }
  Ba = Ca
}
var Ha = {};
function F(a) {
  var b;
  if(!(b = Ha[a])) {
    b = 0;
    for(var c = String(Ba).replace(/^[\s\xa0]+|[\s\xa0]+$/g, "").split("."), d = String(a).replace(/^[\s\xa0]+|[\s\xa0]+$/g, "").split("."), f = Math.max(c.length, d.length), e = 0;b == 0 && e < f;e++) {
      var g = c[e] || "", l = d[e] || "", o = RegExp("(\\d*)(\\D*)", "g"), p = RegExp("(\\d*)(\\D*)", "g");
      do {
        var x = o.exec(g) || ["", "", ""], r = p.exec(l) || ["", "", ""];
        if(x[0].length == 0 && r[0].length == 0) {
          break
        }
        b = ra(x[1].length == 0 ? 0 : parseInt(x[1], 10), r[1].length == 0 ? 0 : parseInt(r[1], 10)) || ra(x[2].length == 0, r[2].length == 0) || ra(x[2], r[2])
      }while(b == 0)
    }
    b = Ha[a] = b >= 0
  }
  return b
}
var Ia = {};
function Ja() {
  return Ia[9] || (Ia[9] = B && !!document.documentMode && document.documentMode >= 9)
}
;function G(a) {
  Error.captureStackTrace ? Error.captureStackTrace(this, G) : this.stack = Error().stack || "";
  if(a) {
    this.message = String(a)
  }
}
z(G, Error);
G.prototype.name = "CustomError";
function Ka(a, b) {
  b.unshift(a);
  G.call(this, ka.apply(k, b));
  b.shift();
  this.Ra = a
}
z(Ka, G);
Ka.prototype.name = "AssertionError";
function La(a, b) {
  h(new Ka("Failure" + (a ? ": " + a : ""), Array.prototype.slice.call(arguments, 1)))
}
;var Ma = RegExp("^(?:([^:/?#.]+):)?(?://(?:([^/?#]*)@)?([\\w\\d\\-\\u0100-\\uffff.%]*)(?::([0-9]+))?)?([^?#]+)?(?:\\?([^#]*))?(?:#(.*))?$");
function Na(a) {
  var b = H, c;
  for(c in b) {
    a.call(i, b[c], c, b)
  }
}
function Oa(a) {
  var b = [], c = 0, d;
  for(d in a) {
    b[c++] = a[d]
  }
  return b
}
function Pa(a) {
  var b = [], c = 0, d;
  for(d in a) {
    b[c++] = d
  }
  return b
}
var Qa = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",");
function Ra(a, b) {
  for(var c, d, f = 1;f < arguments.length;f++) {
    d = arguments[f];
    for(c in d) {
      a[c] = d[c]
    }
    for(var e = 0;e < Qa.length;e++) {
      c = Qa[e], Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c])
    }
  }
}
;var I = Array.prototype, Sa = I.indexOf ? function(a, b, c) {
  return I.indexOf.call(a, b, c)
} : function(a, b, c) {
  c = c == k ? 0 : c < 0 ? Math.max(0, a.length + c) : c;
  if(v(a)) {
    return!v(b) || b.length != 1 ? -1 : a.indexOf(b, c)
  }
  for(;c < a.length;c++) {
    if(c in a && a[c] === b) {
      return c
    }
  }
  return-1
}, Ta = I.forEach ? function(a, b, c) {
  I.forEach.call(a, b, c)
} : function(a, b, c) {
  for(var d = a.length, f = v(a) ? a.split("") : a, e = 0;e < d;e++) {
    e in f && b.call(c, f[e], e, a)
  }
};
var J = "StopIteration" in q ? q.StopIteration : Error("StopIteration");
function K() {
}
K.prototype.next = function() {
  h(J)
};
K.prototype.M = function() {
  return this
};
function Ua(a) {
  if(a instanceof K) {
    return a
  }
  if(typeof a.M == "function") {
    return a.M(m)
  }
  if(t(a)) {
    var b = 0, c = new K;
    c.next = function() {
      for(;;) {
        if(b >= a.length && h(J), b in a) {
          return a[b++]
        }else {
          b++
        }
      }
    };
    return c
  }
  h(Error("Not implemented"))
}
function Va(a, b) {
  if(t(a)) {
    try {
      Ta(a, b, i)
    }catch(c) {
      c !== J && h(c)
    }
  }else {
    a = Ua(a);
    try {
      for(;;) {
        b.call(i, a.next(), i, a)
      }
    }catch(d) {
      d !== J && h(d)
    }
  }
}
;function Wa(a) {
  if(typeof a.C == "function") {
    return a.C()
  }
  if(v(a)) {
    return a.split("")
  }
  if(t(a)) {
    for(var b = [], c = a.length, d = 0;d < c;d++) {
      b.push(a[d])
    }
    return b
  }
  return Oa(a)
}
function Xa(a, b, c) {
  if(typeof a.forEach == "function") {
    a.forEach(b, c)
  }else {
    if(t(a) || v(a)) {
      Ta(a, b, c)
    }else {
      var d;
      if(typeof a.r == "function") {
        d = a.r()
      }else {
        if(typeof a.C != "function") {
          if(t(a) || v(a)) {
            d = [];
            for(var f = a.length, e = 0;e < f;e++) {
              d.push(e)
            }
          }else {
            d = Pa(a)
          }
        }else {
          d = i
        }
      }
      for(var f = Wa(a), e = f.length, g = 0;g < e;g++) {
        b.call(c, f[g], d && d[g], a)
      }
    }
  }
}
;function L(a, b) {
  this.g = {};
  this.c = [];
  var c = arguments.length;
  if(c > 1) {
    c % 2 && h(Error("Uneven number of arguments"));
    for(var d = 0;d < c;d += 2) {
      this.set(arguments[d], arguments[d + 1])
    }
  }else {
    if(a) {
      a instanceof L ? (c = a.r(), d = a.C()) : (c = Pa(a), d = Oa(a));
      for(var f = 0;f < c.length;f++) {
        this.set(c[f], d[f])
      }
    }
  }
}
n = L.prototype;
n.b = 0;
n.K = 0;
n.C = function() {
  Ya(this);
  for(var a = [], b = 0;b < this.c.length;b++) {
    a.push(this.g[this.c[b]])
  }
  return a
};
n.r = function() {
  Ya(this);
  return this.c.concat()
};
n.clear = function() {
  this.g = {};
  this.K = this.b = this.c.length = 0
};
function Ya(a) {
  if(a.b != a.c.length) {
    for(var b = 0, c = 0;b < a.c.length;) {
      var d = a.c[b];
      Object.prototype.hasOwnProperty.call(a.g, d) && (a.c[c++] = d);
      b++
    }
    a.c.length = c
  }
  if(a.b != a.c.length) {
    for(var f = {}, c = b = 0;b < a.c.length;) {
      d = a.c[b], Object.prototype.hasOwnProperty.call(f, d) || (a.c[c++] = d, f[d] = 1), b++
    }
    a.c.length = c
  }
}
n.get = function(a, b) {
  return Object.prototype.hasOwnProperty.call(this.g, a) ? this.g[a] : b
};
n.set = function(a, b) {
  Object.prototype.hasOwnProperty.call(this.g, a) || (this.b++, this.c.push(a), this.K++);
  this.g[a] = b
};
n.clone = function() {
  return new L(this)
};
n.M = function(a) {
  Ya(this);
  var b = 0, c = this.c, d = this.g, f = this.K, e = this, g = new K;
  g.next = function() {
    for(;;) {
      f != e.K && h(Error("The map has changed since the iterator was created"));
      b >= c.length && h(J);
      var g = c[b++];
      return a ? g : d[g]
    }
  };
  return g
};
function Za(a) {
  return $a(a || arguments.callee.caller, [])
}
function $a(a, b) {
  var c = [];
  if(Sa(b, a) >= 0) {
    c.push("[...circular reference...]")
  }else {
    if(a && b.length < 50) {
      c.push(ab(a) + "(");
      for(var d = a.arguments, f = 0;f < d.length;f++) {
        f > 0 && c.push(", ");
        var e;
        e = d[f];
        switch(typeof e) {
          case "object":
            e = e ? "object" : "null";
            break;
          case "string":
            break;
          case "number":
            e = String(e);
            break;
          case "boolean":
            e = e ? "true" : "false";
            break;
          case "function":
            e = (e = ab(e)) ? e : "[fn]";
            break;
          default:
            e = typeof e
        }
        e.length > 40 && (e = e.substr(0, 40) + "...");
        c.push(e)
      }
      b.push(a);
      c.push(")\n");
      try {
        c.push($a(a.caller, b))
      }catch(g) {
        c.push("[exception trying to get caller]\n")
      }
    }else {
      a ? c.push("[...long stack...]") : c.push("[end]")
    }
  }
  return c.join("")
}
function ab(a) {
  if(M[a]) {
    return M[a]
  }
  a = String(a);
  if(!M[a]) {
    var b = /function ([^\(]+)/.exec(a);
    M[a] = b ? b[1] : "[Anonymous]"
  }
  return M[a]
}
var M = {};
function N() {
}
N.prototype.ja = m;
N.prototype.i = function() {
  if(!this.ja) {
    this.ja = j, this.f()
  }
};
N.prototype.f = function() {
  this.Ea && bb.apply(k, this.Ea)
};
function bb(a) {
  for(var b = 0, c = arguments.length;b < c;++b) {
    var d = arguments[b];
    t(d) ? bb.apply(k, d) : d && typeof d.i == "function" && d.i()
  }
}
;function O(a, b) {
  this.qa = b;
  this.q = [];
  a > this.qa && h(Error("[goog.structs.SimplePool] Initial cannot be greater than max"));
  for(var c = 0;c < a;c++) {
    this.q.push(this.B())
  }
}
z(O, N);
n = O.prototype;
n.fa = k;
n.ia = k;
function cb(a, b) {
  a.q.length < a.qa ? a.q.push(b) : a.P(b)
}
n.B = function() {
  return this.fa ? this.fa() : {}
};
n.P = function(a) {
  if(this.ia) {
    this.ia(a)
  }else {
    var b = typeof a;
    if(b == "object" && a != k || b == "function") {
      if(s(a.i) == "function") {
        a.i()
      }else {
        for(var c in a) {
          delete a[c]
        }
      }
    }
  }
};
n.f = function() {
  O.z.f.call(this);
  for(var a = this.q;a.length;) {
    this.P(a.pop())
  }
  delete this.q
};
function P(a, b, c, d, f) {
  this.reset(a, b, c, d, f)
}
P.prototype.La = 0;
P.prototype.ma = k;
P.prototype.la = k;
var db = 0;
P.prototype.reset = function(a, b, c, d, f) {
  this.La = typeof f == "number" ? f : db++;
  this.Ta = d || ja();
  this.u = a;
  this.Ga = b;
  this.Qa = c;
  delete this.ma;
  delete this.la
};
P.prototype.ua = function(a) {
  this.u = a
};
function Q(a) {
  this.Ha = a
}
Q.prototype.H = k;
Q.prototype.u = k;
Q.prototype.N = k;
Q.prototype.na = k;
function R(a, b) {
  this.name = a;
  this.value = b
}
R.prototype.toString = function() {
  return this.name
};
var eb = new R("SEVERE", 1E3), fb = new R("WARNING", 900), gb = new R("CONFIG", 700), hb = new R("FINE", 500);
Q.prototype.getParent = function() {
  return this.H
};
Q.prototype.ua = function(a) {
  this.u = a
};
function ib(a) {
  if(a.u) {
    return a.u
  }
  if(a.H) {
    return ib(a.H)
  }
  La("Root logger has no level set.");
  return k
}
Q.prototype.log = function(a, b, c) {
  if(a.value >= ib(this).value) {
    a = this.Fa(a, b, c);
    b = "log:" + a.Ga;
    q.console && (q.console.timeStamp ? q.console.timeStamp(b) : q.console.markTimeline && q.console.markTimeline(b));
    q.msWriteProfilerMark && q.msWriteProfilerMark(b);
    for(b = this;b;) {
      var c = b, d = a;
      if(c.na) {
        for(var f = 0, e = i;e = c.na[f];f++) {
          e(d)
        }
      }
      b = b.getParent()
    }
  }
};
Q.prototype.Fa = function(a, b, c) {
  var d = new P(a, String(b), this.Ha);
  if(c) {
    d.ma = c;
    var f;
    var e = arguments.callee.caller;
    try {
      var g;
      var l = ca("window.location.href");
      if(v(c)) {
        g = {message:c, name:"Unknown error", lineNumber:"Not available", fileName:l, stack:"Not available"}
      }else {
        var o, p, x = m;
        try {
          o = c.lineNumber || c.Pa || "Not available"
        }catch(r) {
          o = "Not available", x = j
        }
        try {
          p = c.fileName || c.filename || c.sourceURL || l
        }catch(aa) {
          p = "Not available", x = j
        }
        g = x || !c.lineNumber || !c.fileName || !c.stack ? {message:c.message, name:c.name, lineNumber:o, fileName:p, stack:c.stack || "Not available"} : c
      }
      f = "Message: " + la(g.message) + '\nUrl: <a href="view-source:' + g.fileName + '" target="_new">' + g.fileName + "</a>\nLine: " + g.lineNumber + "\n\nBrowser stack:\n" + la(g.stack + "-> ") + "[end]\n\nJS stack traversal:\n" + la(Za(e) + "-> ")
    }catch(u) {
      f = "Exception trying to expose exception! You win, we lose. " + u
    }
    d.la = f
  }
  return d
};
function S(a, b) {
  a.log(hb, b, i)
}
var jb = {}, kb = k;
function lb(a) {
  kb || (kb = new Q(""), jb[""] = kb, kb.ua(gb));
  var b;
  if(!(b = jb[a])) {
    b = new Q(a);
    var c = a.lastIndexOf("."), d = a.substr(c + 1), c = lb(a.substr(0, c));
    if(!c.N) {
      c.N = {}
    }
    c.N[d] = b;
    b.H = c;
    jb[a] = b
  }
  return b
}
;function mb() {
  this.p = [];
  this.aa = new L;
  this.za = this.Aa = this.Ba = this.va = 0;
  this.w = new L;
  this.ea = this.ya = 0;
  this.Ia = 1;
  this.S = new O(0, 4E3);
  this.S.B = function() {
    return new nb
  };
  this.wa = new O(0, 50);
  this.wa.B = function() {
    return new ob
  };
  var a = this;
  this.W = new O(0, 2E3);
  this.W.B = function() {
    return String(a.Ia++)
  };
  this.W.P = function() {
  };
  this.Da = 3
}
mb.prototype.d = lb("goog.debug.Trace");
function ob() {
  this.ca = this.xa = this.O = 0
}
ob.prototype.toString = function() {
  var a = [];
  a.push(this.type, " ", this.O, " (", Math.round(this.xa * 10) / 10, " ms)");
  this.ca && a.push(" [VarAlloc = ", this.ca, "]");
  return a.join("")
};
function nb() {
}
function pb(a, b, c, d) {
  var f = [];
  c == -1 ? f.push("    ") : f.push(qb(a.ka - c));
  f.push(" ", rb(a.ka - b));
  a.T == 0 ? f.push(" Start        ") : a.T == 1 ? (f.push(" Done "), f.push(qb(a.Sa - a.startTime), " ms ")) : f.push(" Comment      ");
  f.push(d, a);
  a.Na > 0 && f.push("[VarAlloc ", a.Na, "] ");
  return f.join("")
}
nb.prototype.toString = function() {
  return this.type == k ? this.Ca : "[" + this.type + "] " + this.Ca
};
mb.prototype.reset = function(a) {
  this.Da = a;
  for(a = 0;a < this.p.length;a++) {
    var b = this.S.id;
    b && cb(this.W, b);
    cb(this.S, this.p[a])
  }
  this.p.length = 0;
  this.aa.clear();
  this.va = ja();
  this.ea = this.ya = this.za = this.Aa = this.Ba = 0;
  b = this.w.r();
  for(a = 0;a < b.length;a++) {
    var c = this.w.get(b[a]);
    c.O = 0;
    c.xa = 0;
    c.ca = 0;
    cb(this.wa, c)
  }
  this.w.clear()
};
mb.prototype.toString = function() {
  for(var a = [], b = -1, c = [], d = 0;d < this.p.length;d++) {
    var f = this.p[d];
    f.T == 1 && c.pop();
    a.push(" ", pb(f, this.va, b, c.join("")));
    b = f.ka;
    a.push("\n");
    f.T == 0 && c.push("|  ")
  }
  if(this.aa.b != 0) {
    var e = ja();
    a.push(" Unstopped timers:\n");
    Va(this.aa, function(b) {
      a.push("  ", b, " (", e - b.startTime, " ms, started at ", rb(b.startTime), ")\n")
    })
  }
  b = this.w.r();
  for(d = 0;d < b.length;d++) {
    c = this.w.get(b[d]), c.O > 1 && a.push(" TOTAL ", c, "\n")
  }
  a.push("Total tracers created ", this.ya, "\n", "Total comments created ", this.ea, "\n", "Overhead start: ", this.Ba, " ms\n", "Overhead end: ", this.Aa, " ms\n", "Overhead comment: ", this.za, " ms\n");
  return a.join("")
};
function qb(a) {
  var a = Math.round(a), b = "";
  a < 1E3 && (b = " ");
  a < 100 && (b = "  ");
  a < 10 && (b = "   ");
  return b + a
}
function rb(a) {
  a = Math.round(a);
  return String(100 + a / 1E3 % 60).substring(1, 3) + "." + String(1E3 + a % 1E3).substring(1, 4)
}
new mb;
function sb() {
}
var tb = 0;
n = sb.prototype;
n.key = 0;
n.m = m;
n.da = m;
n.F = function(a, b, c, d, f, e) {
  s(a) == "function" ? this.oa = j : a && a.handleEvent && s(a.handleEvent) == "function" ? this.oa = m : h(Error("Invalid listener argument"));
  this.v = a;
  this.proxy = b;
  this.src = c;
  this.type = d;
  this.capture = !!f;
  this.V = e;
  this.da = m;
  this.key = ++tb;
  this.m = m
};
n.handleEvent = function(a) {
  return this.oa ? this.v.call(this.V || this.src, a) : this.v.handleEvent.call(this.v, a)
};
!B || Ja();
var ub = !B || Ja(), vb = B && !F("8");
!D || F("528");
C && F("1.9b") || B && F("8") || ya && F("9.5") || D && F("528");
C && !F("8") || B && F("9");
function T(a, b) {
  this.type = a;
  this.currentTarget = this.target = b
}
z(T, N);
n = T.prototype;
n.f = function() {
  delete this.type;
  delete this.target;
  delete this.currentTarget
};
n.l = m;
n.ha = m;
n.I = j;
n.preventDefault = function() {
  this.ha = j;
  this.I = m
};
function wb(a) {
  wb[" "](a);
  return a
}
wb[" "] = da;
function U(a, b) {
  a && this.F(a, b)
}
z(U, T);
n = U.prototype;
n.target = k;
n.relatedTarget = k;
n.offsetX = 0;
n.offsetY = 0;
n.clientX = 0;
n.clientY = 0;
n.screenX = 0;
n.screenY = 0;
n.button = 0;
n.keyCode = 0;
n.charCode = 0;
n.ctrlKey = m;
n.altKey = m;
n.shiftKey = m;
n.metaKey = m;
n.Ka = m;
n.U = k;
n.F = function(a, b) {
  var c = this.type = a.type;
  T.call(this, c);
  this.target = a.target || a.srcElement;
  this.currentTarget = b;
  var d = a.relatedTarget;
  if(d) {
    if(C) {
      var f;
      a: {
        try {
          wb(d.nodeName);
          f = j;
          break a
        }catch(e) {
        }
        f = m
      }
      f || (d = k)
    }
  }else {
    if(c == "mouseover") {
      d = a.fromElement
    }else {
      if(c == "mouseout") {
        d = a.toElement
      }
    }
  }
  this.relatedTarget = d;
  this.offsetX = D || a.offsetX !== i ? a.offsetX : a.layerX;
  this.offsetY = D || a.offsetY !== i ? a.offsetY : a.layerY;
  this.clientX = a.clientX !== i ? a.clientX : a.pageX;
  this.clientY = a.clientY !== i ? a.clientY : a.pageY;
  this.screenX = a.screenX || 0;
  this.screenY = a.screenY || 0;
  this.button = a.button;
  this.keyCode = a.keyCode || 0;
  this.charCode = a.charCode || (c == "keypress" ? a.keyCode : 0);
  this.ctrlKey = a.ctrlKey;
  this.altKey = a.altKey;
  this.shiftKey = a.shiftKey;
  this.metaKey = a.metaKey;
  this.Ka = Aa ? a.metaKey : a.ctrlKey;
  this.state = a.state;
  this.U = a;
  a.ha && this.preventDefault();
  delete this.l
};
n.preventDefault = function() {
  U.z.preventDefault.call(this);
  var a = this.U;
  if(a.preventDefault) {
    a.preventDefault()
  }else {
    if(a.returnValue = m, vb) {
      try {
        if(a.ctrlKey || a.keyCode >= 112 && a.keyCode <= 123) {
          a.keyCode = -1
        }
      }catch(b) {
      }
    }
  }
};
n.f = function() {
  U.z.f.call(this);
  this.relatedTarget = this.currentTarget = this.target = this.U = k
};
var V = {}, W = {}, H = {}, X = {};
function Y(a, b, c, d, f) {
  if(b) {
    if(s(b) == "array") {
      for(var e = 0;e < b.length;e++) {
        Y(a, b[e], c, d, f)
      }
    }else {
      var d = !!d, g = W;
      b in g || (g[b] = {b:0, e:0});
      g = g[b];
      d in g || (g[d] = {b:0, e:0}, g.b++);
      var g = g[d], l = w(a), o;
      g.e++;
      if(g[l]) {
        o = g[l];
        for(e = 0;e < o.length;e++) {
          if(g = o[e], g.v == c && g.V == f) {
            if(g.m) {
              break
            }
            return
          }
        }
      }else {
        o = g[l] = [], g.b++
      }
      e = xb();
      e.src = a;
      g = new sb;
      g.F(c, e, a, b, d, f);
      c = g.key;
      e.key = c;
      o.push(g);
      V[c] = g;
      H[l] || (H[l] = []);
      H[l].push(g);
      a.addEventListener ? (a == q || !a.ga) && a.addEventListener(b, e, d) : a.attachEvent(b in X ? X[b] : X[b] = "on" + b, e)
    }
  }else {
    h(Error("Invalid event type"))
  }
}
function xb() {
  var a = yb, b = ub ? function(c) {
    return a.call(b.src, b.key, c)
  } : function(c) {
    c = a.call(b.src, b.key, c);
    if(!c) {
      return c
    }
  };
  return b
}
function zb(a, b, c, d, f) {
  if(s(b) == "array") {
    for(var e = 0;e < b.length;e++) {
      zb(a, b[e], c, d, f)
    }
  }else {
    d = !!d;
    a: {
      e = W;
      if(b in e && (e = e[b], d in e && (e = e[d], a = w(a), e[a]))) {
        a = e[a];
        break a
      }
      a = k
    }
    if(a) {
      for(e = 0;e < a.length;e++) {
        if(a[e].v == c && a[e].capture == d && a[e].V == f) {
          Ab(a[e].key);
          break
        }
      }
    }
  }
}
function Ab(a) {
  if(V[a]) {
    var b = V[a];
    if(!b.m) {
      var c = b.src, d = b.type, f = b.proxy, e = b.capture;
      c.removeEventListener ? (c == q || !c.ga) && c.removeEventListener(d, f, e) : c.detachEvent && c.detachEvent(d in X ? X[d] : X[d] = "on" + d, f);
      c = w(c);
      f = W[d][e][c];
      if(H[c]) {
        var g = H[c], l = Sa(g, b);
        l >= 0 && I.splice.call(g, l, 1);
        g.length == 0 && delete H[c]
      }
      b.m = j;
      f.ra = j;
      Bb(d, e, c, f);
      delete V[a]
    }
  }
}
function Bb(a, b, c, d) {
  if(!d.G && d.ra) {
    for(var f = 0, e = 0;f < d.length;f++) {
      d[f].m ? d[f].proxy.src = k : (f != e && (d[e] = d[f]), e++)
    }
    d.length = e;
    d.ra = m;
    e == 0 && (delete W[a][b][c], W[a][b].b--, W[a][b].b == 0 && (delete W[a][b], W[a].b--), W[a].b == 0 && delete W[a])
  }
}
function Cb(a) {
  var b, c = 0, d = b == k;
  b = !!b;
  if(a == k) {
    Na(function(a) {
      for(var e = a.length - 1;e >= 0;e--) {
        var f = a[e];
        if(d || b == f.capture) {
          Ab(f.key), c++
        }
      }
    })
  }else {
    if(a = w(a), H[a]) {
      for(var a = H[a], f = a.length - 1;f >= 0;f--) {
        var e = a[f];
        if(d || b == e.capture) {
          Ab(e.key), c++
        }
      }
    }
  }
}
function Db(a, b, c, d, f) {
  var e = 1, b = w(b);
  if(a[b]) {
    a.e--;
    a = a[b];
    a.G ? a.G++ : a.G = 1;
    try {
      for(var g = a.length, l = 0;l < g;l++) {
        var o = a[l];
        o && !o.m && (e &= Eb(o, f) !== m)
      }
    }finally {
      a.G--, Bb(c, d, b, a)
    }
  }
  return Boolean(e)
}
function Eb(a, b) {
  var c = a.handleEvent(b);
  a.da && Ab(a.key);
  return c
}
function yb(a, b) {
  if(!V[a]) {
    return j
  }
  var c = V[a], d = c.type, f = W;
  if(!(d in f)) {
    return j
  }
  var f = f[d], e, g;
  if(!ub) {
    e = b || ca("window.event");
    var l = j in f, o = m in f;
    if(l) {
      if(e.keyCode < 0 || e.returnValue != i) {
        return j
      }
      a: {
        var p = m;
        if(e.keyCode == 0) {
          try {
            e.keyCode = -1;
            break a
          }catch(x) {
            p = j
          }
        }
        if(p || e.returnValue == i) {
          e.returnValue = j
        }
      }
    }
    p = new U;
    p.F(e, this);
    e = j;
    try {
      if(l) {
        for(var r = [], aa = p.currentTarget;aa;aa = aa.parentNode) {
          r.push(aa)
        }
        g = f[j];
        g.e = g.b;
        for(var u = r.length - 1;!p.l && u >= 0 && g.e;u--) {
          p.currentTarget = r[u], e &= Db(g, r[u], d, j, p)
        }
        if(o) {
          g = f[m];
          g.e = g.b;
          for(u = 0;!p.l && u < r.length && g.e;u++) {
            p.currentTarget = r[u], e &= Db(g, r[u], d, m, p)
          }
        }
      }else {
        e = Eb(c, p)
      }
    }finally {
      if(r) {
        r.length = 0
      }
      p.i()
    }
    return e
  }
  d = new U(b, this);
  try {
    e = Eb(c, d)
  }finally {
    d.i()
  }
  return e
}
;function Fb(a, b) {
  this.data = a;
  this.o = b;
  this.Q()
}
Fb.prototype.Q = function() {
  this.o.appendChild(Gb('<div class="item"><input type="checkbox" /> <span  class="label">' + this.data.label + '</span><span class="severity ' + Hb[this.data.severity] + '">' + Ib[this.data.severity] + "</span></div>"))
};
function Jb() {
}
z(Jb, N);
n = Jb.prototype;
n.ga = j;
n.ba = k;
n.addEventListener = function(a, b, c, d) {
  Y(this, a, b, c, d)
};
n.removeEventListener = function(a, b, c, d) {
  zb(this, a, b, c, d)
};
n.dispatchEvent = function(a) {
  var b = a.type || a, c = W;
  if(b in c) {
    if(v(a)) {
      a = new T(a, this)
    }else {
      if(a instanceof T) {
        a.target = a.target || this
      }else {
        var d = a, a = new T(b, this);
        Ra(a, d)
      }
    }
    var d = 1, f, c = c[b], b = j in c, e;
    if(b) {
      f = [];
      for(e = this;e;e = e.ba) {
        f.push(e)
      }
      e = c[j];
      e.e = e.b;
      for(var g = f.length - 1;!a.l && g >= 0 && e.e;g--) {
        a.currentTarget = f[g], d &= Db(e, f[g], a.type, j, a) && a.I != m
      }
    }
    if(m in c) {
      if(e = c[m], e.e = e.b, b) {
        for(g = 0;!a.l && g < f.length && e.e;g++) {
          a.currentTarget = f[g], d &= Db(e, f[g], a.type, m, a) && a.I != m
        }
      }else {
        for(f = this;!a.l && f && e.e;f = f.ba) {
          a.currentTarget = f, d &= Db(e, f, a.type, m, a) && a.I != m
        }
      }
    }
    a = Boolean(d)
  }else {
    a = j
  }
  return a
};
n.f = function() {
  Jb.z.f.call(this);
  Cb(this);
  this.ba = k
};
var Kb = q.window;
function Lb(a) {
  a = String(a);
  if(/^\s*$/.test(a) ? 0 : /^[\],:{}\s\u2028\u2029]*$/.test(a.replace(/\\["\\\/bfnrtu]/g, "@").replace(/"[^"\\\n\r\u2028\u2029\x00-\x08\x10-\x1f\x80-\x9f]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]").replace(/(?:^|:|,)(?:[\s\u2028\u2029]*\[)+/g, ""))) {
    try {
      return eval("(" + a + ")")
    }catch(b) {
    }
  }
  h(Error("Invalid JSON string: " + a))
}
;function Mb() {
}
Mb.prototype.A = k;
var Nb;
function Ob() {
}
z(Ob, Mb);
function Pb(a) {
  return(a = Qb(a)) ? new ActiveXObject(a) : new XMLHttpRequest
}
function Rb(a) {
  var b = {};
  Qb(a) && (b[0] = j, b[1] = j);
  return b
}
Ob.prototype.X = k;
function Qb(a) {
  if(!a.X && typeof XMLHttpRequest == "undefined" && typeof ActiveXObject != "undefined") {
    for(var b = ["MSXML2.XMLHTTP.6.0", "MSXML2.XMLHTTP.3.0", "MSXML2.XMLHTTP", "Microsoft.XMLHTTP"], c = 0;c < b.length;c++) {
      var d = b[c];
      try {
        return new ActiveXObject(d), a.X = d
      }catch(f) {
      }
    }
    h(Error("Could not create ActiveXObject. ActiveX might be disabled, or MSXML might not be installed"))
  }
  return a.X
}
Nb = new Ob;
function Sb(a) {
  this.headers = new L;
  this.n = a || k
}
z(Sb, Jb);
Sb.prototype.d = lb("goog.net.XhrIo");
var Tb = /^https?$/i, Ub = [];
function Vb(a) {
  var b = new Sb;
  Ub.push(b);
  a && Y(b, "complete", a);
  Y(b, "ready", ia(Wb, b));
  b.send("js/data/todo-list", i, i, i)
}
function Wb(a) {
  a.i();
  a = Sa(Ub, a);
  a >= 0 && I.splice.call(Ub, a, 1)
}
n = Sb.prototype;
n.h = m;
n.a = k;
n.L = k;
n.$ = "";
n.pa = "";
n.s = 0;
n.t = "";
n.R = m;
n.D = m;
n.Y = m;
n.j = m;
n.J = 0;
n.k = k;
n.ta = "";
n.Oa = m;
n.send = function(a, b, c, d) {
  this.a && h(Error("[goog.net.XhrIo] Object is active with another request"));
  b = b ? b.toUpperCase() : "GET";
  this.$ = a;
  this.t = "";
  this.s = 0;
  this.pa = b;
  this.R = m;
  this.h = j;
  this.a = this.n ? Pb(this.n) : Pb(Nb);
  this.L = this.n ? this.n.A || (this.n.A = Rb(this.n)) : Nb.A || (Nb.A = Rb(Nb));
  this.a.onreadystatechange = y(this.sa, this);
  try {
    S(this.d, Z(this, "Opening Xhr")), this.Y = j, this.a.open(b, a, j), this.Y = m
  }catch(f) {
    S(this.d, Z(this, "Error opening Xhr: " + f.message));
    Xb(this, f);
    return
  }
  var a = c || "", e = this.headers.clone();
  d && Xa(d, function(a, b) {
    e.set(b, a)
  });
  b == "POST" && !Object.prototype.hasOwnProperty.call(e.g, "Content-Type") && e.set("Content-Type", "application/x-www-form-urlencoded;charset=utf-8");
  Xa(e, function(a, b) {
    this.a.setRequestHeader(b, a)
  }, this);
  if(this.ta) {
    this.a.responseType = this.ta
  }
  if("withCredentials" in this.a) {
    this.a.withCredentials = this.Oa
  }
  try {
    if(this.k) {
      Kb.clearTimeout(this.k), this.k = k
    }
    if(this.J > 0) {
      S(this.d, Z(this, "Will abort after " + this.J + "ms if incomplete")), this.k = Kb.setTimeout(y(this.Ma, this), this.J)
    }
    S(this.d, Z(this, "Sending request"));
    this.D = j;
    this.a.send(a);
    this.D = m
  }catch(g) {
    S(this.d, Z(this, "Send error: " + g.message)), Xb(this, g)
  }
};
n.Ma = function() {
  if(typeof ba != "undefined" && this.a) {
    this.t = "Timed out after " + this.J + "ms, aborting", this.s = 8, S(this.d, Z(this, this.t)), this.dispatchEvent("timeout"), this.abort(8)
  }
};
function Xb(a, b) {
  a.h = m;
  if(a.a) {
    a.j = j, a.a.abort(), a.j = m
  }
  a.t = b;
  a.s = 5;
  Yb(a);
  Zb(a)
}
function Yb(a) {
  if(!a.R) {
    a.R = j, a.dispatchEvent("complete"), a.dispatchEvent("error")
  }
}
n.abort = function(a) {
  if(this.a && this.h) {
    S(this.d, Z(this, "Aborting")), this.h = m, this.j = j, this.a.abort(), this.j = m, this.s = a || 7, this.dispatchEvent("complete"), this.dispatchEvent("abort"), Zb(this)
  }
};
n.f = function() {
  if(this.a) {
    if(this.h) {
      this.h = m, this.j = j, this.a.abort(), this.j = m
    }
    Zb(this, j)
  }
  Sb.z.f.call(this)
};
n.sa = function() {
  !this.Y && !this.D && !this.j ? this.Ja() : $b(this)
};
n.Ja = function() {
  $b(this)
};
function $b(a) {
  if(a.h && typeof ba != "undefined") {
    if(a.L[1] && ac(a) == 4 && bc(a) == 2) {
      S(a.d, Z(a, "Local request error detected and ignored"))
    }else {
      if(a.D && ac(a) == 4) {
        Kb.setTimeout(y(a.sa, a), 0)
      }else {
        if(a.dispatchEvent("readystatechange"), ac(a) == 4) {
          S(a.d, Z(a, "Request complete"));
          a.h = m;
          try {
            var b = bc(a), c, d;
            a: {
              switch(b) {
                case 200:
                ;
                case 201:
                ;
                case 202:
                ;
                case 204:
                ;
                case 304:
                ;
                case 1223:
                  d = j;
                  break a;
                default:
                  d = m
              }
            }
            if(!(c = d)) {
              var f;
              if(f = b === 0) {
                var e = String(a.$).match(Ma)[1] || k;
                if(!e && self.location) {
                  var g = self.location.protocol, e = g.substr(0, g.length - 1)
                }
                f = !Tb.test(e ? e.toLowerCase() : "")
              }
              c = f
            }
            if(c) {
              a.dispatchEvent("complete"), a.dispatchEvent("success")
            }else {
              a.s = 6;
              var l;
              try {
                l = ac(a) > 2 ? a.a.statusText : ""
              }catch(o) {
                S(a.d, "Can not get status: " + o.message), l = ""
              }
              a.t = l + " [" + bc(a) + "]";
              Yb(a)
            }
          }finally {
            Zb(a)
          }
        }
      }
    }
  }
}
function Zb(a, b) {
  if(a.a) {
    var c = a.a, d = a.L[0] ? da : k;
    a.a = k;
    a.L = k;
    if(a.k) {
      Kb.clearTimeout(a.k), a.k = k
    }
    b || a.dispatchEvent("ready");
    try {
      c.onreadystatechange = d
    }catch(f) {
      a.d.log(eb, "Problem encountered resetting onreadystatechange: " + f.message, i)
    }
  }
}
function ac(a) {
  return a.a ? a.a.readyState : 0
}
function bc(a) {
  try {
    return ac(a) > 2 ? a.a.status : -1
  }catch(b) {
    return a.d.log(fb, "Can not get status: " + b.message, i), -1
  }
}
function Z(a, b) {
  return b + " [" + a.pa + " " + a.$ + " " + bc(a) + "]"
}
;!B || Ja();
!C && !B || B && Ja() || C && F("1.9.1");
B && F("9");
function Gb(a) {
  var b = document, c = b.createElement("div");
  B ? (c.innerHTML = "<br>" + a, c.removeChild(c.firstChild)) : c.innerHTML = a;
  if(c.childNodes.length == 1) {
    return c.removeChild(c.firstChild)
  }else {
    for(a = b.createDocumentFragment();c.firstChild;) {
      a.appendChild(c.firstChild)
    }
    return a
  }
}
;function cc() {
  this.getData()
}
cc.prototype.getData = function() {
  var a = this;
  Vb(function(b) {
    var c;
    b = b.target;
    b.a && (c = Lb(b.a.responseText));
    a.data = c;
    a.Q();
    dc(a)
  })
};
cc.prototype.Q = function() {
  this.o = Gb('<div class="mainContainer"></div>');
  this.toolbar = Gb('<div class="toolbar"><span class="title">Hat\u0131rlat\u0131c\u0131lar</span><a id="add" href="#"></a></div>');
  this.o.appendChild(this.toolbar);
  var a = this.Z = Gb('<div class="itemsContainer"></div>');
  Ta(this.data, function(b) {
    new Fb(b, a)
  });
  this.o.appendChild(this.Z);
  document.body.appendChild(this.o)
};
function dc(a) {
  Y(v("add") ? document.getElementById("add") : "add", "click", function() {
    ec(a)
  })
}
function ec(a) {
  var b = Gb('<div class="item"><input type="checkbox" /> <input type="text" id="newReminderText" /> </div>');
  a.Z.appendChild(b);
  Y(v("newReminderText") ? document.getElementById("newReminderText") : "newReminderText", "keypress", function(c) {
    if(c.keyCode == 13) {
      c = this.value, b && b.parentNode && b.parentNode.removeChild(b), new Fb({id:12, label:c, severity:2}, a.Z)
    }
  })
}
var Ib = {1:"D\u00dc\u015e\u00dcK", 2:"ORTA", 3:"Y\u00dcKSEK"}, Hb = {1:"low", 2:"medium", 3:"high"};
function fc() {
  new cc
}
window.addEventListener("load", function() {
  new fc
}, m);
})()
