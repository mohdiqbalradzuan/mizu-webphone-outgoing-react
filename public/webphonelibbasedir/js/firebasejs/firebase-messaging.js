!(function (e, t) {
  "object" == typeof exports && "undefined" != typeof module
    ? t(require("@firebase/app"))
    : "function" == typeof define && define.amd
    ? define(["@firebase/app"], t)
    : t((e = e || self).firebase);
})(this, function (et) {
  "use strict";
  try {
    (function () {
      et = et && et.hasOwnProperty("default") ? et.default : et;
      var r = function (e, t) {
        return (r =
          Object.setPrototypeOf ||
          ({ __proto__: [] } instanceof Array &&
            function (e, t) {
              e.__proto__ = t;
            }) ||
          function (e, t) {
            for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
          })(e, t);
      };
      function e(e, t) {
        function n() {
          this.constructor = e;
        }
        r(e, t),
          (e.prototype =
            null === t
              ? Object.create(t)
              : ((n.prototype = t.prototype), new n()));
      }
      var s = function () {
        return (s =
          Object.assign ||
          function (e) {
            for (var t, n = 1, r = arguments.length; n < r; n++)
              for (var o in (t = arguments[n]))
                Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
            return e;
          }).apply(this, arguments);
      };
      function l(i, s, a, c) {
        return new (a = a || Promise)(function (e, t) {
          function n(e) {
            try {
              o(c.next(e));
            } catch (e) {
              t(e);
            }
          }
          function r(e) {
            try {
              o(c.throw(e));
            } catch (e) {
              t(e);
            }
          }
          function o(t) {
            t.done
              ? e(t.value)
              : new a(function (e) {
                  e(t.value);
                }).then(n, r);
          }
          o((c = c.apply(i, s || [])).next());
        });
      }
      function d(n, r) {
        var o,
          i,
          s,
          e,
          a = {
            label: 0,
            sent: function () {
              if (1 & s[0]) throw s[1];
              return s[1];
            },
            trys: [],
            ops: [],
          };
        return (
          (e = { next: t(0), throw: t(1), return: t(2) }),
          "function" == typeof Symbol &&
            (e[Symbol.iterator] = function () {
              return this;
            }),
          e
        );
        function t(t) {
          return function (e) {
            return (function (t) {
              if (o) throw new TypeError("Generator is already executing.");
              for (; a; )
                try {
                  if (
                    ((o = 1),
                    i &&
                      (s =
                        2 & t[0]
                          ? i.return
                          : t[0]
                          ? i.throw || ((s = i.return) && s.call(i), 0)
                          : i.next) &&
                      !(s = s.call(i, t[1])).done)
                  )
                    return s;
                  switch (((i = 0), s && (t = [2 & t[0], s.value]), t[0])) {
                    case 0:
                    case 1:
                      s = t;
                      break;
                    case 4:
                      return a.label++, { value: t[1], done: !1 };
                    case 5:
                      a.label++, (i = t[1]), (t = [0]);
                      continue;
                    case 7:
                      (t = a.ops.pop()), a.trys.pop();
                      continue;
                    default:
                      if (
                        !(s = 0 < (s = a.trys).length && s[s.length - 1]) &&
                        (6 === t[0] || 2 === t[0])
                      ) {
                        a = 0;
                        continue;
                      }
                      if (3 === t[0] && (!s || (t[1] > s[0] && t[1] < s[3]))) {
                        a.label = t[1];
                        break;
                      }
                      if (6 === t[0] && a.label < s[1]) {
                        (a.label = s[1]), (s = t);
                        break;
                      }
                      if (s && a.label < s[2]) {
                        (a.label = s[2]), a.ops.push(t);
                        break;
                      }
                      s[2] && a.ops.pop(), a.trys.pop();
                      continue;
                  }
                  t = r.call(n, a);
                } catch (e) {
                  (t = [6, e]), (i = 0);
                } finally {
                  o = s = 0;
                }
              if (5 & t[0]) throw t[1];
              return { value: t[0] ? t[1] : void 0, done: !0 };
            })([t, e]);
          };
        }
      }
      function n(e, t) {
        var n = "function" == typeof Symbol && e[Symbol.iterator];
        if (!n) return e;
        var r,
          o,
          i = n.call(e),
          s = [];
        try {
          for (; (void 0 === t || 0 < t--) && !(r = i.next()).done; )
            s.push(r.value);
        } catch (e) {
          o = { error: e };
        } finally {
          try {
            r && !r.done && (n = i.return) && n.call(i);
          } finally {
            if (o) throw o.error;
          }
        }
        return s;
      }
      function o() {
        for (var e = [], t = 0; t < arguments.length; t++)
          e = e.concat(n(arguments[t]));
        return e;
      }
      var i,
        h = (e(a, (i = Error)), a);
      function a(e, t) {
        var n = i.call(this, t) || this;
        return (
          (n.code = e),
          (n.name = "FirebaseError"),
          Object.setPrototypeOf(n, a.prototype),
          Error.captureStackTrace &&
            Error.captureStackTrace(n, c.prototype.create),
          n
        );
      }
      var c =
        ((t.prototype.create = function (e) {
          for (var t = [], n = 1; n < arguments.length; n++)
            t[n - 1] = arguments[n];
          for (
            var r = t[0] || {},
              o = this.service + "/" + e,
              i = this.errors[e],
              s = i
                ? (function (e, r) {
                    return e.replace(p, function (e, t) {
                      var n = r[t];
                      return null != n ? n.toString() : "<" + t + "?>";
                    });
                  })(i, r)
                : "Error",
              a = this.serviceName + ": " + s + " (" + o + ").",
              c = new h(o, a),
              u = 0,
              f = Object.keys(r);
            u < f.length;
            u++
          ) {
            var l = f[u];
            "_" !== l.slice(-1) &&
              (l in c &&
                console.warn(
                  'Overwriting FirebaseError base field "' +
                    l +
                    '" can cause unexpected behavior.',
                ),
              (c[l] = r[l]));
          }
          return c;
        }),
        t);
      function t(e, t, n) {
        (this.service = e), (this.serviceName = t), (this.errors = n);
      }
      var p = /\{\$([^}]+)}/g;
      function u(e, t) {
        var n = new f(e, t);
        return n.subscribe.bind(n);
      }
      var f =
        ((v.prototype.next = function (t) {
          this.forEachObserver(function (e) {
            e.next(t);
          });
        }),
        (v.prototype.error = function (t) {
          this.forEachObserver(function (e) {
            e.error(t);
          }),
            this.close(t);
        }),
        (v.prototype.complete = function () {
          this.forEachObserver(function (e) {
            e.complete();
          }),
            this.close();
        }),
        (v.prototype.subscribe = function (e, t, n) {
          var r,
            o = this;
          if (void 0 === e && void 0 === t && void 0 === n)
            throw new Error("Missing Observer.");
          void 0 ===
            (r = (function (e, t) {
              if ("object" != typeof e || null === e) return !1;
              for (var n = 0, r = t; n < r.length; n++) {
                var o = r[n];
                if (o in e && "function" == typeof e[o]) return !0;
              }
              return !1;
            })(e, ["next", "error", "complete"])
              ? e
              : { next: e, error: t, complete: n }).next && (r.next = b),
            void 0 === r.error && (r.error = b),
            void 0 === r.complete && (r.complete = b);
          var i = this.unsubscribeOne.bind(this, this.observers.length);
          return (
            this.finalized &&
              this.task.then(function () {
                try {
                  o.finalError ? r.error(o.finalError) : r.complete();
                } catch (e) {}
              }),
            this.observers.push(r),
            i
          );
        }),
        (v.prototype.unsubscribeOne = function (e) {
          void 0 !== this.observers &&
            void 0 !== this.observers[e] &&
            (delete this.observers[e],
            (this.observerCount -= 1),
            0 === this.observerCount &&
              void 0 !== this.onNoObservers &&
              this.onNoObservers(this));
        }),
        (v.prototype.forEachObserver = function (e) {
          if (!this.finalized)
            for (var t = 0; t < this.observers.length; t++) this.sendOne(t, e);
        }),
        (v.prototype.sendOne = function (e, t) {
          var n = this;
          this.task.then(function () {
            if (void 0 !== n.observers && void 0 !== n.observers[e])
              try {
                t(n.observers[e]);
              } catch (e) {
                "undefined" != typeof console &&
                  console.error &&
                  console.error(e);
              }
          });
        }),
        (v.prototype.close = function (e) {
          var t = this;
          this.finalized ||
            ((this.finalized = !0),
            void 0 !== e && (this.finalError = e),
            this.task.then(function () {
              (t.observers = void 0), (t.onNoObservers = void 0);
            }));
        }),
        v);
      function v(e, t) {
        var n = this;
        (this.observers = []),
          (this.unsubscribes = []),
          (this.observerCount = 0),
          (this.task = Promise.resolve()),
          (this.finalized = !1),
          (this.onNoObservers = t),
          this.task
            .then(function () {
              e(n);
            })
            .catch(function (e) {
              n.error(e);
            });
      }
      function b() {}
      function g(n) {
        return new Promise(function (e, t) {
          (n.onsuccess = function () {
            e(n.result);
          }),
            (n.onerror = function () {
              t(n.error);
            });
        });
      }
      function y(n, r, o) {
        var i,
          e = new Promise(function (e, t) {
            g((i = n[r].apply(n, o))).then(e, t);
          });
        return (e.request = i), e;
      }
      function w(e, n, t) {
        t.forEach(function (t) {
          Object.defineProperty(e.prototype, t, {
            get: function () {
              return this[n][t];
            },
            set: function (e) {
              this[n][t] = e;
            },
          });
        });
      }
      function m(t, n, r, e) {
        e.forEach(function (e) {
          e in r.prototype &&
            (t.prototype[e] = function () {
              return y(this[n], e, arguments);
            });
        });
      }
      function k(t, n, r, e) {
        e.forEach(function (e) {
          e in r.prototype &&
            (t.prototype[e] = function () {
              return this[n][e].apply(this[n], arguments);
            });
        });
      }
      function S(t, n, r, e) {
        e.forEach(function (e) {
          e in r.prototype &&
            (t.prototype[e] = function () {
              return (function (e, t, n) {
                var r = y(e, t, n);
                return r.then(function (e) {
                  if (e) return new _(e, r.request);
                });
              })(this[n], e, arguments);
            });
        });
      }
      function T(e) {
        this._index = e;
      }
      function _(e, t) {
        (this._cursor = e), (this._request = t);
      }
      function I(e) {
        this._store = e;
      }
      function P(n) {
        (this._tx = n),
          (this.complete = new Promise(function (e, t) {
            (n.oncomplete = function () {
              e();
            }),
              (n.onerror = function () {
                t(n.error);
              }),
              (n.onabort = function () {
                t(n.error);
              });
          }));
      }
      function D(e, t, n) {
        (this._db = e), (this.oldVersion = t), (this.transaction = new P(n));
      }
      function M(e) {
        this._db = e;
      }
      w(T, "_index", ["name", "keyPath", "multiEntry", "unique"]),
        m(T, "_index", IDBIndex, [
          "get",
          "getKey",
          "getAll",
          "getAllKeys",
          "count",
        ]),
        S(T, "_index", IDBIndex, ["openCursor", "openKeyCursor"]),
        w(_, "_cursor", ["direction", "key", "primaryKey", "value"]),
        m(_, "_cursor", IDBCursor, ["update", "delete"]),
        ["advance", "continue", "continuePrimaryKey"].forEach(function (n) {
          n in IDBCursor.prototype &&
            (_.prototype[n] = function () {
              var t = this,
                e = arguments;
              return Promise.resolve().then(function () {
                return (
                  t._cursor[n].apply(t._cursor, e),
                  g(t._request).then(function (e) {
                    if (e) return new _(e, t._request);
                  })
                );
              });
            });
        }),
        (I.prototype.createIndex = function () {
          return new T(this._store.createIndex.apply(this._store, arguments));
        }),
        (I.prototype.index = function () {
          return new T(this._store.index.apply(this._store, arguments));
        }),
        w(I, "_store", ["name", "keyPath", "indexNames", "autoIncrement"]),
        m(I, "_store", IDBObjectStore, [
          "put",
          "add",
          "delete",
          "clear",
          "get",
          "getAll",
          "getKey",
          "getAllKeys",
          "count",
        ]),
        S(I, "_store", IDBObjectStore, ["openCursor", "openKeyCursor"]),
        k(I, "_store", IDBObjectStore, ["deleteIndex"]),
        (P.prototype.objectStore = function () {
          return new I(this._tx.objectStore.apply(this._tx, arguments));
        }),
        w(P, "_tx", ["objectStoreNames", "mode"]),
        k(P, "_tx", IDBTransaction, ["abort"]),
        (D.prototype.createObjectStore = function () {
          return new I(this._db.createObjectStore.apply(this._db, arguments));
        }),
        w(D, "_db", ["name", "version", "objectStoreNames"]),
        k(D, "_db", IDBDatabase, ["deleteObjectStore", "close"]),
        (M.prototype.transaction = function () {
          return new P(this._db.transaction.apply(this._db, arguments));
        }),
        w(M, "_db", ["name", "version", "objectStoreNames"]),
        k(M, "_db", IDBDatabase, ["close"]),
        ["openCursor", "openKeyCursor"].forEach(function (o) {
          [I, T].forEach(function (e) {
            o in e.prototype &&
              (e.prototype[o.replace("open", "iterate")] = function () {
                var e = (function (e) {
                    return Array.prototype.slice.call(e);
                  })(arguments),
                  t = e[e.length - 1],
                  n = this._store || this._index,
                  r = n[o].apply(n, e.slice(0, -1));
                r.onsuccess = function () {
                  t(r.result);
                };
              });
          });
        }),
        [T, I].forEach(function (e) {
          e.prototype.getAll ||
            (e.prototype.getAll = function (e, n) {
              var r = this,
                o = [];
              return new Promise(function (t) {
                r.iterateCursor(e, function (e) {
                  e
                    ? (o.push(e.value),
                      void 0 === n || o.length != n ? e.continue() : t(o))
                    : t(o);
                });
              });
            });
        });
      var C,
        E = 1e4,
        N = "w:0.3.6",
        x = "FIS_v2",
        j = "https://firebaseinstallations.googleapis.com/v1",
        O = 36e5,
        K =
          (((C = {})["missing-app-config-values"] =
            'Missing App configuration value: "{$valueName}"'),
          (C["not-registered"] = "Firebase Installation is not registered."),
          (C["installation-not-found"] = "Firebase Installation not found."),
          (C["request-failed"] =
            '{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"'),
          (C["app-offline"] =
            "Could not process request. Application offline."),
          (C["delete-pending-registration"] =
            "Can't delete installation while there is a pending registration request."),
          C),
        A = new c("installations", "Installations", K);
      function V(e) {
        return e instanceof h && e.code.includes("request-failed");
      }
      function q(e) {
        var t, n;
        if (!e || !e.options) throw W("App Configuration");
        if (!e.name) throw W("App Name");
        try {
          for (
            var r = (function (e) {
                var t = "function" == typeof Symbol && e[Symbol.iterator],
                  n = 0;
                return t
                  ? t.call(e)
                  : {
                      next: function () {
                        return (
                          e && n >= e.length && (e = void 0),
                          { value: e && e[n++], done: !e }
                        );
                      },
                    };
              })(["projectId", "apiKey", "appId"]),
              o = r.next();
            !o.done;
            o = r.next()
          ) {
            var i = o.value;
            if (!e.options[i]) throw W(i);
          }
        } catch (e) {
          t = { error: e };
        } finally {
          try {
            o && !o.done && (n = r.return) && n.call(r);
          } finally {
            if (t) throw t.error;
          }
        }
        return {
          appName: e.name,
          projectId: e.options.projectId,
          apiKey: e.options.apiKey,
          appId: e.options.appId,
        };
      }
      function W(e) {
        return A.create("missing-app-config-values", { valueName: e });
      }
      function U(e) {
        var t = e.projectId;
        return j + "/projects/" + t + "/installations";
      }
      function F(e) {
        return {
          token: e.token,
          requestStatus: 2,
          expiresIn: (function (e) {
            return Number(e.replace("s", "000"));
          })(e.expiresIn),
          creationTime: Date.now(),
        };
      }
      function R(r, o) {
        return l(this, void 0, void 0, function () {
          var t, n;
          return d(this, function (e) {
            switch (e.label) {
              case 0:
                return [4, o.json()];
              case 1:
                return (
                  (t = e.sent()),
                  (n = t.error),
                  [
                    2,
                    A.create("request-failed", {
                      requestName: r,
                      serverCode: n.code,
                      serverMessage: n.message,
                      serverStatus: n.status,
                    }),
                  ]
                );
            }
          });
        });
      }
      function L(e) {
        var t = e.apiKey;
        return new Headers({
          "Content-Type": "application/json",
          Accept: "application/json",
          "x-goog-api-key": t,
        });
      }
      function B(e, t) {
        var n = t.refreshToken,
          r = L(e);
        return (
          r.append(
            "Authorization",
            (function (e) {
              return x + " " + e;
            })(n),
          ),
          r
        );
      }
      function H(n) {
        return l(this, void 0, void 0, function () {
          var t;
          return d(this, function (e) {
            switch (e.label) {
              case 0:
                return [4, n()];
              case 1:
                return 500 <= (t = e.sent()).status && t.status < 600
                  ? [2, n()]
                  : [2, t];
            }
          });
        });
      }
      function $(t) {
        return new Promise(function (e) {
          setTimeout(e, t);
        });
      }
      var G = /^[cdef][\w-]{21}$/,
        z = "";
      function J() {
        try {
          var e = new Uint8Array(17);
          (self.crypto || self.msCrypto).getRandomValues(e),
            (e[0] = 112 + (e[0] % 16));
          var t = (function (e) {
            return (function (e) {
              return btoa(String.fromCharCode.apply(String, o(e)))
                .replace(/\+/g, "-")
                .replace(/\//g, "_");
            })(e).substr(0, 22);
          })(e);
          return G.test(t) ? t : z;
        } catch (e) {
          return z;
        }
      }
      var Y,
        Q = "firebase-installations-database",
        X = 1,
        Z = "firebase-installations-store",
        ee = null;
      function te() {
        return (ee =
          ee ||
          (function (e, t, n) {
            var r = y(indexedDB, "open", [e, t]),
              o = r.request;
            return (
              o &&
                (o.onupgradeneeded = function (e) {
                  n && n(new D(o.result, e.oldVersion, o.transaction));
                }),
              r.then(function (e) {
                return new M(e);
              })
            );
          })(Q, X, function (e) {
            switch (e.oldVersion) {
              case 0:
                e.createObjectStore(Z);
            }
          }));
      }
      function ne(o, i) {
        return l(this, void 0, void 0, function () {
          var t, n, r;
          return d(this, function (e) {
            switch (e.label) {
              case 0:
                return (t = ie(o)), [4, te()];
              case 1:
                return (
                  (n = e.sent()),
                  [
                    4,
                    (r = n.transaction(Z, "readwrite"))
                      .objectStore(Z)
                      .put(i, t),
                  ]
                );
              case 2:
                return e.sent(), [4, r.complete];
              case 3:
                return e.sent(), [2, i];
            }
          });
        });
      }
      function re(o) {
        return l(this, void 0, void 0, function () {
          var t, n, r;
          return d(this, function (e) {
            switch (e.label) {
              case 0:
                return (t = ie(o)), [4, te()];
              case 1:
                return (
                  (n = e.sent()),
                  [
                    4,
                    (r = n.transaction(Z, "readwrite"))
                      .objectStore(Z)
                      .delete(t),
                  ]
                );
              case 2:
                return e.sent(), [4, r.complete];
              case 3:
                return e.sent(), [2];
            }
          });
        });
      }
      function oe(a, c) {
        return l(this, void 0, void 0, function () {
          var t, n, r, o, i, s;
          return d(this, function (e) {
            switch (e.label) {
              case 0:
                return (t = ie(a)), [4, te()];
              case 1:
                return (
                  (n = e.sent()),
                  (r = n.transaction(Z, "readwrite")),
                  [4, (o = r.objectStore(Z)).get(t)]
                );
              case 2:
                return (
                  (i = e.sent()),
                  void 0 !== (s = c(i)) ? [3, 4] : [4, o.delete(t)]
                );
              case 3:
                return e.sent(), [3, 6];
              case 4:
                return [4, o.put(s, t)];
              case 5:
                e.sent(), (e.label = 6);
              case 6:
                return [4, r.complete];
              case 7:
                return e.sent(), [2, s];
            }
          });
        });
      }
      function ie(e) {
        return e.appName + "!" + e.appId;
      }
      function se(o) {
        return l(this, void 0, void 0, function () {
          var r, t, n;
          return d(this, function (e) {
            switch (e.label) {
              case 0:
                return [
                  4,
                  oe(o, function (e) {
                    var t = (function (e) {
                        return ce(e || { fid: J(), registrationStatus: 0 });
                      })(e),
                      n = (function (e, t) {
                        {
                          if (0 !== t.registrationStatus)
                            return 1 === t.registrationStatus
                              ? {
                                  installationEntry: t,
                                  registrationPromise: (function (i) {
                                    return l(this, void 0, void 0, function () {
                                      var t, n, r, o;
                                      return d(this, function (e) {
                                        switch (e.label) {
                                          case 0:
                                            return [4, ae(i)];
                                          case 1:
                                            (t = e.sent()), (e.label = 2);
                                          case 2:
                                            return 1 !== t.registrationStatus
                                              ? [3, 5]
                                              : [4, $(100)];
                                          case 3:
                                            return e.sent(), [4, ae(i)];
                                          case 4:
                                            return (t = e.sent()), [3, 2];
                                          case 5:
                                            return 0 !== t.registrationStatus
                                              ? [3, 7]
                                              : [4, se(i)];
                                          case 6:
                                            return (
                                              (n = e.sent()),
                                              (r = n.installationEntry),
                                              (o = n.registrationPromise)
                                                ? [2, o]
                                                : [2, r]
                                            );
                                          case 7:
                                            return [2, t];
                                        }
                                      });
                                    });
                                  })(e),
                                }
                              : { installationEntry: t };
                          if (!navigator.onLine) {
                            var n = Promise.reject(A.create("app-offline"));
                            return {
                              installationEntry: t,
                              registrationPromise: n,
                            };
                          }
                          var r = {
                              fid: t.fid,
                              registrationStatus: 1,
                              registrationTime: Date.now(),
                            },
                            o = (function (r, o) {
                              return l(this, void 0, void 0, function () {
                                var t, n;
                                return d(this, function (e) {
                                  switch (e.label) {
                                    case 0:
                                      return (
                                        e.trys.push([0, 2, , 7]),
                                        [
                                          4,
                                          (function (a, e) {
                                            var c = e.fid;
                                            return l(
                                              this,
                                              void 0,
                                              void 0,
                                              function () {
                                                var t, n, r, o, i, s;
                                                return d(this, function (e) {
                                                  switch (e.label) {
                                                    case 0:
                                                      return (
                                                        (t = U(a)),
                                                        (n = L(a)),
                                                        (r = {
                                                          fid: c,
                                                          authVersion: x,
                                                          appId: a.appId,
                                                          sdkVersion: N,
                                                        }),
                                                        (o = {
                                                          method: "POST",
                                                          headers: n,
                                                          body: JSON.stringify(
                                                            r,
                                                          ),
                                                        }),
                                                        [
                                                          4,
                                                          H(function () {
                                                            return fetch(t, o);
                                                          }),
                                                        ]
                                                      );
                                                    case 1:
                                                      return (i = e.sent()).ok
                                                        ? [4, i.json()]
                                                        : [3, 3];
                                                    case 2:
                                                      return (
                                                        (s = e.sent()),
                                                        [
                                                          2,
                                                          {
                                                            fid: s.fid || c,
                                                            registrationStatus: 2,
                                                            refreshToken:
                                                              s.refreshToken,
                                                            authToken: F(
                                                              s.authToken,
                                                            ),
                                                          },
                                                        ]
                                                      );
                                                    case 3:
                                                      return [
                                                        4,
                                                        R(
                                                          "Create Installation",
                                                          i,
                                                        ),
                                                      ];
                                                    case 4:
                                                      throw e.sent();
                                                  }
                                                });
                                              },
                                            );
                                          })(r, o),
                                        ]
                                      );
                                    case 1:
                                      return (t = e.sent()), [2, ne(r, t)];
                                    case 2:
                                      return V((n = e.sent())) &&
                                        409 === n.serverCode
                                        ? [4, re(r)]
                                        : [3, 4];
                                    case 3:
                                      return e.sent(), [3, 6];
                                    case 4:
                                      return [
                                        4,
                                        ne(r, {
                                          fid: o.fid,
                                          registrationStatus: 0,
                                        }),
                                      ];
                                    case 5:
                                      e.sent(), (e.label = 6);
                                    case 6:
                                      throw n;
                                    case 7:
                                      return [2];
                                  }
                                });
                              });
                            })(e, r);
                          return {
                            installationEntry: r,
                            registrationPromise: o,
                          };
                        }
                      })(o, t);
                    return (r = n.registrationPromise), n.installationEntry;
                  }),
                ];
              case 1:
                return (t = e.sent()).fid !== z ? [3, 3] : ((n = {}), [4, r]);
              case 2:
                return [2, ((n.installationEntry = e.sent()), n)];
              case 3:
                return [2, { installationEntry: t, registrationPromise: r }];
            }
          });
        });
      }
      function ae(e) {
        return oe(e, function (e) {
          if (!e) throw A.create("installation-not-found");
          return ce(e);
        });
      }
      function ce(e) {
        return (function (e) {
          return (
            1 === e.registrationStatus && e.registrationTime + E < Date.now()
          );
        })(e)
          ? { fid: e.fid, registrationStatus: 0 }
          : e;
      }
      function ue(a, c) {
        return l(this, void 0, void 0, function () {
          var t, n, r, o, i, s;
          return d(this, function (e) {
            switch (e.label) {
              case 0:
                return (
                  (t = (function (e, t) {
                    var n = t.fid;
                    return U(e) + "/" + n + "/authTokens:generate";
                  })(a, c)),
                  (n = B(a, c)),
                  (r = { installation: { sdkVersion: N } }),
                  (o = { method: "POST", headers: n, body: JSON.stringify(r) }),
                  [
                    4,
                    H(function () {
                      return fetch(t, o);
                    }),
                  ]
                );
              case 1:
                return (i = e.sent()).ok ? [4, i.json()] : [3, 3];
              case 2:
                return (s = e.sent()), [2, F(s)];
              case 3:
                return [4, R("Generate Auth Token", i)];
              case 4:
                throw e.sent();
            }
          });
        });
      }
      function fe(o, i) {
        return (
          void 0 === i && (i = !1),
          l(this, void 0, void 0, function () {
            var r, t, n;
            return d(this, function (e) {
              switch (e.label) {
                case 0:
                  return [
                    4,
                    oe(o, function (e) {
                      if (!de(e)) throw A.create("not-registered");
                      var t = e.authToken;
                      if (
                        !i &&
                        (function (e) {
                          return (
                            2 === e.requestStatus &&
                            !(function (e) {
                              var t = Date.now();
                              return (
                                t < e.creationTime ||
                                e.creationTime + e.expiresIn < t + O
                              );
                            })(e)
                          );
                        })(t)
                      )
                        return e;
                      if (1 === t.requestStatus)
                        return (
                          (r = (function (r, o) {
                            return l(this, void 0, void 0, function () {
                              var t, n;
                              return d(this, function (e) {
                                switch (e.label) {
                                  case 0:
                                    return [4, le(r)];
                                  case 1:
                                    (t = e.sent()), (e.label = 2);
                                  case 2:
                                    return 1 !== t.authToken.requestStatus
                                      ? [3, 5]
                                      : [4, $(100)];
                                  case 3:
                                    return e.sent(), [4, le(r)];
                                  case 4:
                                    return (t = e.sent()), [3, 2];
                                  case 5:
                                    return 0 === (n = t.authToken).requestStatus
                                      ? [2, fe(r, o)]
                                      : [2, n];
                                }
                              });
                            });
                          })(o, i)),
                          e
                        );
                      if (!navigator.onLine) throw A.create("app-offline");
                      var n = (function (e) {
                        var t = { requestStatus: 1, requestTime: Date.now() };
                        return s(s({}, e), { authToken: t });
                      })(e);
                      return (
                        (r = (function (o, i) {
                          return l(this, void 0, void 0, function () {
                            var t, n, r;
                            return d(this, function (e) {
                              switch (e.label) {
                                case 0:
                                  return (
                                    e.trys.push([0, 3, , 8]), [4, ue(o, i)]
                                  );
                                case 1:
                                  return (
                                    (t = e.sent()),
                                    (r = s(s({}, i), { authToken: t })),
                                    [4, ne(o, r)]
                                  );
                                case 2:
                                  return e.sent(), [2, t];
                                case 3:
                                  return !V((n = e.sent())) ||
                                    (401 !== n.serverCode &&
                                      404 !== n.serverCode)
                                    ? [3, 5]
                                    : [4, re(o)];
                                case 4:
                                  return e.sent(), [3, 7];
                                case 5:
                                  return (
                                    (r = s(s({}, i), {
                                      authToken: { requestStatus: 0 },
                                    })),
                                    [4, ne(o, r)]
                                  );
                                case 6:
                                  e.sent(), (e.label = 7);
                                case 7:
                                  throw n;
                                case 8:
                                  return [2];
                              }
                            });
                          });
                        })(o, n)),
                        n
                      );
                    }),
                  ];
                case 1:
                  return (t = e.sent()), r ? [4, r] : [3, 3];
                case 2:
                  return (n = e.sent()), [3, 4];
                case 3:
                  (n = t.authToken), (e.label = 4);
                case 4:
                  return [2, n];
              }
            });
          })
        );
      }
      function le(e) {
        return oe(e, function (e) {
          if (!de(e)) throw A.create("not-registered");
          return (function (e) {
            return 1 === e.requestStatus && e.requestTime + E < Date.now();
          })(e.authToken)
            ? s(s({}, e), { authToken: { requestStatus: 0 } })
            : e;
        });
      }
      function de(e) {
        return void 0 !== e && 2 === e.registrationStatus;
      }
      function he(n, r) {
        return (
          void 0 === r && (r = !1),
          l(this, void 0, void 0, function () {
            var t;
            return d(this, function (e) {
              switch (e.label) {
                case 0:
                  return [
                    4,
                    (function (n) {
                      return l(this, void 0, void 0, function () {
                        var t;
                        return d(this, function (e) {
                          switch (e.label) {
                            case 0:
                              return [4, se(n)];
                            case 1:
                              return (t = e.sent().registrationPromise)
                                ? [4, t]
                                : [3, 3];
                            case 2:
                              e.sent(), (e.label = 3);
                            case 3:
                              return [2];
                          }
                        });
                      });
                    })((t = q(n))),
                  ];
                case 1:
                  return e.sent(), [4, fe(t, r)];
                case 2:
                  return [2, e.sent().token];
              }
            });
          })
        );
      }
      function pe(i, s) {
        return l(this, void 0, void 0, function () {
          var t, n, r, o;
          return d(this, function (e) {
            switch (e.label) {
              case 0:
                return (
                  (t = (function (e, t) {
                    var n = t.fid;
                    return U(e) + "/" + n;
                  })(i, s)),
                  (n = B(i, s)),
                  (r = { method: "DELETE", headers: n }),
                  [
                    4,
                    H(function () {
                      return fetch(t, r);
                    }),
                  ]
                );
              case 1:
                return (o = e.sent()).ok
                  ? [3, 3]
                  : [4, R("Delete Installation", o)];
              case 2:
                throw e.sent();
              case 3:
                return [2];
            }
          });
        });
      }
      et.INTERNAL.registerService("installations", function (t) {
        return (
          q(t),
          {
            app: t,
            getId: function () {
              return (function (i) {
                return l(this, void 0, void 0, function () {
                  var t, n, r, o;
                  return d(this, function (e) {
                    switch (e.label) {
                      case 0:
                        return [4, se((t = q(i)))];
                      case 1:
                        return (
                          (n = e.sent()),
                          (r = n.installationEntry),
                          (o = n.registrationPromise)
                            ? o.catch(console.error)
                            : fe(t).catch(console.error),
                          [2, r.fid]
                        );
                    }
                  });
                });
              })(t);
            },
            getToken: function (e) {
              return he(t, e);
            },
            delete: function () {
              return (function (r) {
                return l(this, void 0, void 0, function () {
                  var t, n;
                  return d(this, function (e) {
                    switch (e.label) {
                      case 0:
                        return [
                          4,
                          oe((t = q(r)), function (e) {
                            if (!e || 0 !== e.registrationStatus) return e;
                          }),
                        ];
                      case 1:
                        if (!(n = e.sent())) return [3, 6];
                        if (1 !== n.registrationStatus) return [3, 2];
                        throw A.create("delete-pending-registration");
                      case 2:
                        if (2 !== n.registrationStatus) return [3, 6];
                        if (navigator.onLine) return [3, 3];
                        throw A.create("app-offline");
                      case 3:
                        return [4, pe(t, n)];
                      case 4:
                        return e.sent(), [4, re(t)];
                      case 5:
                        e.sent(), (e.label = 6);
                      case 6:
                        return [2];
                    }
                  });
                });
              })(t);
            },
          }
        );
      });
      var ve,
        be,
        ge =
          (((Y = {})["only-available-in-window"] =
            "This method is available in a Window context."),
          (Y["only-available-in-sw"] =
            "This method is available in a service worker context."),
          (Y["should-be-overriden"] =
            "This method should be overriden by extended classes."),
          (Y["bad-sender-id"] =
            "Please ensure that 'messagingSenderId' is set correctly in the options passed into firebase.initializeApp()."),
          (Y["permission-default"] =
            "The required permissions were not granted and dismissed instead."),
          (Y["permission-blocked"] =
            "The required permissions were not granted and blocked instead."),
          (Y["unsupported-browser"] =
            "This browser doesn't support the API's required to use the firebase SDK."),
          (Y["notifications-blocked"] = "Notifications have been blocked."),
          (Y["failed-serviceworker-registration"] =
            "We are unable to register the default service worker. {$browserErrorMessage}"),
          (Y["sw-registration-expected"] =
            "A service worker registration was the expected input."),
          (Y["get-subscription-failed"] =
            "There was an error when trying to get any existing Push Subscriptions."),
          (Y["invalid-saved-token"] =
            "Unable to access details of the saved token."),
          (Y["sw-reg-redundant"] =
            "The service worker being used for push was made redundant."),
          (Y["token-subscribe-failed"] =
            "A problem occured while subscribing the user to FCM: {$errorInfo}"),
          (Y["token-subscribe-no-token"] =
            "FCM returned no token when subscribing the user to push."),
          (Y["token-unsubscribe-failed"] =
            "A problem occured while unsubscribing the user from FCM: {$errorInfo}"),
          (Y["token-update-failed"] =
            "A problem occured while updating the user from FCM: {$errorInfo}"),
          (Y["token-update-no-token"] =
            "FCM returned no token when updating the user to push."),
          (Y["use-sw-before-get-token"] =
            "The useServiceWorker() method may only be called once and must be called before calling getToken() to ensure your service worker is used."),
          (Y["invalid-delete-token"] =
            "You must pass a valid token into deleteToken(), i.e. the token from getToken()."),
          (Y["delete-token-not-found"] =
            "The deletion attempt for token could not be performed as the token was not found."),
          (Y["delete-scope-not-found"] =
            "The deletion attempt for service worker scope could not be performed as the scope was not found."),
          (Y["bg-handler-function-expected"] =
            "The input to setBackgroundMessageHandler() must be a function."),
          (Y["no-window-client-to-msg"] =
            "An attempt was made to message a non-existant window client."),
          (Y["unable-to-resubscribe"] =
            "There was an error while re-subscribing the FCM token for push messaging. Will have to resubscribe the user on next visit. {$errorInfo}"),
          (Y["no-fcm-token-for-resubscribe"] =
            "Could not find an FCM token and as a result, unable to resubscribe. Will have to resubscribe the user on next visit."),
          (Y["failed-to-delete-token"] =
            "Unable to delete the currently saved token."),
          (Y["no-sw-in-reg"] =
            "Even though the service worker registration was successful, there was a problem accessing the service worker itself."),
          (Y["bad-scope"] =
            "The service worker scope must be a string with at least one character."),
          (Y["bad-vapid-key"] =
            "The public VAPID key is not a Uint8Array with 65 bytes."),
          (Y["bad-subscription"] =
            "The subscription must be a valid PushSubscription."),
          (Y["bad-token"] =
            "The FCM Token used for storage / lookup was not a valid token string."),
          (Y["failed-delete-vapid-key"] =
            "The VAPID key could not be deleted."),
          (Y["invalid-public-vapid-key"] =
            "The public VAPID key must be a string."),
          (Y["use-public-key-before-get-token"] =
            "The usePublicVapidKey() method may only be called once and must be called before calling getToken() to ensure your VAPID key is used."),
          (Y["public-vapid-key-decryption-failed"] =
            "The public VAPID key did not equal 65 bytes when decrypted."),
          Y),
        ye = new c("messaging", "Messaging", ge),
        we = new Uint8Array([
          4, 51, 148, 247, 223, 161, 235, 177, 220, 3, 162, 94, 21, 113, 219,
          72, 211, 46, 237, 237, 178, 52, 219, 183, 71, 58, 12, 143, 196, 204,
          225, 111, 60, 140, 132, 223, 171, 182, 102, 62, 242, 12, 212, 139,
          254, 227, 249, 118, 47, 20, 28, 99, 8, 106, 111, 45, 177, 26, 149,
          176, 206, 55, 192, 156, 110,
        ]),
        me = "google.c.a.c_id";
      function ke(e, t) {
        if (null == e || null == t) return !1;
        if (e === t) return !0;
        if (e.byteLength !== t.byteLength) return !1;
        for (
          var n = new DataView(e), r = new DataView(t), o = 0;
          o < e.byteLength;
          o++
        )
          if (n.getUint8(o) !== r.getUint8(o)) return !1;
        return !0;
      }
      function Se(e) {
        return (function (e) {
          var t = new Uint8Array(e);
          return btoa(String.fromCharCode.apply(String, o(t)));
        })(e)
          .replace(/=/g, "")
          .replace(/\+/g, "-")
          .replace(/\//g, "_");
      }
      ((be = ve = ve || {}).PUSH_MSG_RECEIVED = "push-msg-received"),
        (be.NOTIFICATION_CLICKED = "notification-clicked");
      var Te =
        ((_e.prototype.getToken = function (a, c, u) {
          return l(this, void 0, void 0, function () {
            var t, n, r, o, i, s;
            return d(this, function (e) {
              switch (e.label) {
                case 0:
                  return [4, Pe(a)];
                case 1:
                  (t = e.sent()),
                    (n = De(c, u)),
                    (r = {
                      method: "POST",
                      headers: t,
                      body: JSON.stringify(n),
                    }),
                    (e.label = 2);
                case 2:
                  return e.trys.push([2, 5, , 6]), [4, fetch(Ie(a), r)];
                case 3:
                  return [4, e.sent().json()];
                case 4:
                  return (o = e.sent()), [3, 6];
                case 5:
                  throw (
                    ((i = e.sent()),
                    ye.create("token-subscribe-failed", { errorInfo: i }))
                  );
                case 6:
                  if (o.error)
                    throw (
                      ((s = o.error.message),
                      ye.create("token-subscribe-failed", { errorInfo: s }))
                    );
                  if (!o.token) throw ye.create("token-subscribe-no-token");
                  return [2, o.token];
              }
            });
          });
        }),
        (_e.prototype.updateToken = function (a, c, u, f) {
          return l(this, void 0, void 0, function () {
            var t, n, r, o, i, s;
            return d(this, function (e) {
              switch (e.label) {
                case 0:
                  return [4, Pe(c)];
                case 1:
                  (t = e.sent()),
                    (n = De(u, f)),
                    (r = {
                      method: "PATCH",
                      headers: t,
                      body: JSON.stringify(n),
                    }),
                    (e.label = 2);
                case 2:
                  return (
                    e.trys.push([2, 5, , 6]),
                    [4, fetch(Ie(c) + "/" + a.fcmToken, r)]
                  );
                case 3:
                  return [4, e.sent().json()];
                case 4:
                  return (o = e.sent()), [3, 6];
                case 5:
                  throw (
                    ((i = e.sent()),
                    ye.create("token-update-failed", { errorInfo: i }))
                  );
                case 6:
                  if (o.error)
                    throw (
                      ((s = o.error.message),
                      ye.create("token-update-failed", { errorInfo: s }))
                    );
                  if (!o.token) throw ye.create("token-update-no-token");
                  return [2, o.token];
              }
            });
          });
        }),
        (_e.prototype.deleteToken = function (s, a) {
          return l(this, void 0, void 0, function () {
            var t, n, r, o, i;
            return d(this, function (e) {
              switch (e.label) {
                case 0:
                  return [4, Pe(s)];
                case 1:
                  (t = e.sent()),
                    (n = { method: "DELETE", headers: t }),
                    (e.label = 2);
                case 2:
                  return (
                    e.trys.push([2, 5, , 6]),
                    [4, fetch(Ie(s) + "/" + a.fcmToken, n)]
                  );
                case 3:
                  return [4, e.sent().json()];
                case 4:
                  if ((r = e.sent()).error)
                    throw (
                      ((o = r.error.message),
                      ye.create("token-unsubscribe-failed", { errorInfo: o }))
                    );
                  return [3, 6];
                case 5:
                  throw (
                    ((i = e.sent()),
                    ye.create("token-unsubscribe-failed", { errorInfo: i }))
                  );
                case 6:
                  return [2];
              }
            });
          });
        }),
        _e);
      function _e() {}
      function Ie(e) {
        return (
          "https://fcmregistrations.googleapis.com/v1/projects/" +
          e.options.projectId +
          "/registrations"
        );
      }
      function Pe(n) {
        return l(this, void 0, void 0, function () {
          var t;
          return d(this, function (e) {
            switch (e.label) {
              case 0:
                return [4, n.installations().getToken()];
              case 1:
                return (
                  (t = e.sent()),
                  [
                    2,
                    new Headers({
                      "Content-Type": "application/json",
                      Accept: "application/json",
                      "x-goog-api-key": n.options.apiKey,
                      "x-goog-firebase-installations-auth": "FIS " + t,
                    }),
                  ]
                );
            }
          });
        });
      }
      function De(e, t) {
        var n = Se(e.getKey("p256dh")),
          r = Se(e.getKey("auth")),
          o = { web: { endpoint: e.endpoint, p256dh: n, auth: r } };
        return ke(t.buffer, we.buffer) || (o.web.applicationPubKey = Se(t)), o;
      }
      function Me(e) {
        for (
          var t = (e + "=".repeat((4 - (e.length % 4)) % 4))
              .replace(/\-/g, "+")
              .replace(/_/g, "/"),
            n = atob(t),
            r = new Uint8Array(n.length),
            o = 0;
          o < n.length;
          ++o
        )
          r[o] = n.charCodeAt(o);
        return r;
      }
      var Ce = "undefined",
        Ee = "fcm_token_object_Store";
      function Ne(t) {
        var n = indexedDB.open(Ce);
        (n.onerror = function (e) {}),
          (n.onsuccess = function (e) {
            !(function (n, r) {
              if (n.objectStoreNames.contains(Ee)) {
                var e = n.transaction(Ee).objectStore(Ee),
                  o = new Te(),
                  i = e.openCursor();
                (i.onerror = function (e) {
                  console.warn("Unable to cleanup old IDB.", e);
                }),
                  (i.onsuccess = function () {
                    var e = i.result;
                    if (e) {
                      var t = e.value;
                      o.deleteToken(r, t), e.continue();
                    } else n.close(), indexedDB.deleteDatabase(Ce);
                  });
              }
            })(n.result, t);
          });
      }
      var xe =
        ((je.prototype.get = function (t) {
          return this.createTransaction(function (e) {
            return e.get(t);
          });
        }),
        (je.prototype.getIndex = function (t, n) {
          return this.createTransaction(function (e) {
            return e.index(t).get(n);
          });
        }),
        (je.prototype.put = function (t) {
          return this.createTransaction(function (e) {
            return e.put(t);
          }, "readwrite");
        }),
        (je.prototype.delete = function (t) {
          return this.createTransaction(function (e) {
            return e.delete(t);
          }, "readwrite");
        }),
        (je.prototype.closeDatabase = function () {
          return l(this, void 0, void 0, function () {
            return d(this, function (e) {
              switch (e.label) {
                case 0:
                  return this.dbPromise ? [4, this.dbPromise] : [3, 2];
                case 1:
                  e.sent().close(), (this.dbPromise = null), (e.label = 2);
                case 2:
                  return [2];
              }
            });
          });
        }),
        (je.prototype.createTransaction = function (i, s) {
          return (
            void 0 === s && (s = "readonly"),
            l(this, void 0, void 0, function () {
              var t, n, r, o;
              return d(this, function (e) {
                switch (e.label) {
                  case 0:
                    return [4, this.getDb()];
                  case 1:
                    return (
                      (t = e.sent()),
                      (n = t.transaction(this.objectStoreName, s)),
                      (r = n.objectStore(this.objectStoreName)),
                      [
                        4,
                        (function (n) {
                          return new Promise(function (e, t) {
                            (n.onsuccess = function () {
                              e(n.result);
                            }),
                              (n.onerror = function () {
                                t(n.error);
                              });
                          });
                        })(i(r)),
                      ]
                    );
                  case 2:
                    return (
                      (o = e.sent()),
                      [
                        2,
                        new Promise(function (e, t) {
                          (n.oncomplete = function () {
                            e(o);
                          }),
                            (n.onerror = function () {
                              t(n.error);
                            });
                        }),
                      ]
                    );
                }
              });
            })
          );
        }),
        (je.prototype.getDb = function () {
          var r = this;
          return (
            this.dbPromise ||
              (this.dbPromise = new Promise(function (e, t) {
                var n = indexedDB.open(r.dbName, r.dbVersion);
                (n.onsuccess = function () {
                  e(n.result);
                }),
                  (n.onerror = function () {
                    (r.dbPromise = null), t(n.error);
                  }),
                  (n.onupgradeneeded = function (e) {
                    return r.onDbUpgrade(n, e);
                  });
              })),
            this.dbPromise
          );
        }),
        je);
      function je() {
        this.dbPromise = null;
      }
      var Oe,
        Ke =
          (e(Ae, (Oe = xe)),
          (Ae.prototype.onDbUpgrade = function (e, t) {
            var n = e.result;
            switch (t.oldVersion) {
              case 0:
                (o = n.createObjectStore(this.objectStoreName, {
                  keyPath: "swScope",
                })).createIndex("fcmSenderId", "fcmSenderId", { unique: !1 }),
                  o.createIndex("fcmToken", "fcmToken", { unique: !0 });
              case 1:
                Ne(this.app);
              case 2:
                var r = (o = e.transaction.objectStore(
                  this.objectStoreName,
                )).openCursor();
                r.onsuccess = function () {
                  var e = r.result;
                  if (e) {
                    var t = e.value,
                      n = s({}, t);
                    t.createTime || (n.createTime = Date.now()),
                      "string" == typeof t.vapidKey &&
                        (n.vapidKey = Me(t.vapidKey)),
                      "string" == typeof t.auth && (n.auth = Me(t.auth).buffer),
                      "string" == typeof t.auth &&
                        (n.p256dh = Me(t.p256dh).buffer),
                      "string" == typeof t.fcmPushSet && delete n.fcmPushSet,
                      e.update(n),
                      e.continue();
                  }
                };
                break;
              case 3:
                var o,
                  i = (o = e.transaction.objectStore(
                    this.objectStoreName,
                  )).openCursor();
                i.onsuccess = function () {
                  var e = i.result;
                  if (e) {
                    var t = e.value,
                      n = s({}, t);
                    "string" == typeof t.fcmPushSet && delete n.fcmPushSet,
                      e.update(n),
                      e.continue();
                  }
                };
            }
          }),
          (Ae.prototype.getTokenDetailsFromToken = function (t) {
            return l(this, void 0, void 0, function () {
              return d(this, function (e) {
                if (!t) throw ye.create("bad-token");
                return Ve({ fcmToken: t }), [2, this.getIndex("fcmToken", t)];
              });
            });
          }),
          (Ae.prototype.getTokenDetailsFromSWScope = function (t) {
            return l(this, void 0, void 0, function () {
              return d(this, function (e) {
                if (!t) throw ye.create("bad-scope");
                return Ve({ swScope: t }), [2, this.get(t)];
              });
            });
          }),
          (Ae.prototype.saveTokenDetails = function (t) {
            return l(this, void 0, void 0, function () {
              return d(this, function (e) {
                if (!t.swScope) throw ye.create("bad-scope");
                if (!t.vapidKey) throw ye.create("bad-vapid-key");
                if (!t.endpoint || !t.auth || !t.p256dh)
                  throw ye.create("bad-subscription");
                if (!t.fcmSenderId) throw ye.create("bad-sender-id");
                if (!t.fcmToken) throw ye.create("bad-token");
                return Ve(t), [2, this.put(t)];
              });
            });
          }),
          (Ae.prototype.deleteToken = function (n) {
            return l(this, void 0, void 0, function () {
              var t;
              return d(this, function (e) {
                switch (e.label) {
                  case 0:
                    return "string" != typeof n || 0 === n.length
                      ? [2, Promise.reject(ye.create("invalid-delete-token"))]
                      : [4, this.getTokenDetailsFromToken(n)];
                  case 1:
                    if (!(t = e.sent()))
                      throw ye.create("delete-token-not-found");
                    return [4, this.delete(t.swScope)];
                  case 2:
                    return e.sent(), [2, t];
                }
              });
            });
          }),
          Ae);
      function Ae(e) {
        var t = Oe.call(this) || this;
        return (
          (t.app = e),
          (t.dbName = "fcm_token_details_db"),
          (t.dbVersion = 4),
          (t.objectStoreName = "fcm_token_object_Store"),
          t
        );
      }
      function Ve(e) {
        if (
          e.fcmToken &&
          ("string" != typeof e.fcmToken || 0 === e.fcmToken.length)
        )
          throw ye.create("bad-token");
        if (
          e.swScope &&
          ("string" != typeof e.swScope || 0 === e.swScope.length)
        )
          throw ye.create("bad-scope");
        if (
          e.vapidKey &&
          (!(e.vapidKey instanceof Uint8Array) || 65 !== e.vapidKey.length)
        )
          throw ye.create("bad-vapid-key");
        if (
          e.endpoint &&
          ("string" != typeof e.endpoint || 0 === e.endpoint.length)
        )
          throw ye.create("bad-subscription");
        if (e.auth && !(e.auth instanceof ArrayBuffer))
          throw ye.create("bad-subscription");
        if (e.p256dh && !(e.p256dh instanceof ArrayBuffer))
          throw ye.create("bad-subscription");
        if (
          e.fcmSenderId &&
          ("string" != typeof e.fcmSenderId || 0 === e.fcmSenderId.length)
        )
          throw ye.create("bad-sender-id");
      }
      var qe,
        We =
          (e(Ue, (qe = xe)),
          (Ue.prototype.onDbUpgrade = function (e) {
            e.result.createObjectStore(this.objectStoreName, {
              keyPath: "swScope",
            });
          }),
          (Ue.prototype.getVapidFromSWScope = function (n) {
            return l(this, void 0, void 0, function () {
              var t;
              return d(this, function (e) {
                switch (e.label) {
                  case 0:
                    if ("string" != typeof n || 0 === n.length)
                      throw ye.create("bad-scope");
                    return [4, this.get(n)];
                  case 1:
                    return [2, (t = e.sent()) ? t.vapidKey : void 0];
                }
              });
            });
          }),
          (Ue.prototype.saveVapidDetails = function (n, r) {
            return l(this, void 0, void 0, function () {
              var t;
              return d(this, function (e) {
                if ("string" != typeof n || 0 === n.length)
                  throw ye.create("bad-scope");
                if (null === r || 65 !== r.length)
                  throw ye.create("bad-vapid-key");
                return (t = { swScope: n, vapidKey: r }), [2, this.put(t)];
              });
            });
          }),
          (Ue.prototype.deleteVapidDetails = function (n) {
            return l(this, void 0, void 0, function () {
              var t;
              return d(this, function (e) {
                switch (e.label) {
                  case 0:
                    return [4, this.getVapidFromSWScope(n)];
                  case 1:
                    if (!(t = e.sent()))
                      throw ye.create("delete-scope-not-found");
                    return [4, this.delete(n)];
                  case 2:
                    return e.sent(), [2, t];
                }
              });
            });
          }),
          Ue);
      function Ue() {
        var e = (null !== qe && qe.apply(this, arguments)) || this;
        return (
          (e.dbName = "fcm_vapid_details_db"),
          (e.dbVersion = 1),
          (e.objectStoreName = "fcm_vapid_object_Store"),
          e
        );
      }
      var Fe =
        ((Re.prototype.getToken = function () {
          return l(this, void 0, void 0, function () {
            var t, n, r, o, i;
            return d(this, function (e) {
              switch (e.label) {
                case 0:
                  if ("denied" === (t = this.getNotificationPermission_()))
                    throw ye.create("notifications-blocked");
                  return "granted" !== t
                    ? [2, null]
                    : [4, this.getSWRegistration_()];
                case 1:
                  return (n = e.sent()), [4, this.getPublicVapidKey_()];
                case 2:
                  return (r = e.sent()), [4, this.getPushSubscription(n, r)];
                case 3:
                  return (
                    (o = e.sent()),
                    [
                      4,
                      this.tokenDetailsModel.getTokenDetailsFromSWScope(
                        n.scope,
                      ),
                    ]
                  );
                case 4:
                  return (i = e.sent())
                    ? [2, this.manageExistingToken(n, o, r, i)]
                    : [2, this.getNewToken(n, o, r)];
              }
            });
          });
        }),
        (Re.prototype.manageExistingToken = function (t, n, r, o) {
          return l(this, void 0, void 0, function () {
            return d(this, function (e) {
              switch (e.label) {
                case 0:
                  return (function (e, t, n) {
                    if (!n.vapidKey || !ke(t.buffer, n.vapidKey.buffer))
                      return !1;
                    var r = e.endpoint === n.endpoint,
                      o = ke(e.getKey("auth"), n.auth),
                      i = ke(e.getKey("p256dh"), n.p256dh);
                    return r && o && i;
                  })(n, r, o)
                    ? Date.now() < o.createTime + 6048e5
                      ? [2, o.fcmToken]
                      : [2, this.updateToken(t, n, r, o)]
                    : [3, 1];
                case 1:
                  return [4, this.deleteTokenFromDB(o.fcmToken)];
                case 2:
                  return e.sent(), [2, this.getNewToken(t, n, r)];
                case 3:
                  return [2];
              }
            });
          });
        }),
        (Re.prototype.updateToken = function (o, i, s, a) {
          return l(this, void 0, void 0, function () {
            var t, n, r;
            return d(this, function (e) {
              switch (e.label) {
                case 0:
                  return (
                    e.trys.push([0, 4, , 6]),
                    [4, this.subscriptionManager.updateToken(a, this.app, i, s)]
                  );
                case 1:
                  return (
                    (t = e.sent()),
                    (n = {
                      swScope: o.scope,
                      vapidKey: s,
                      fcmSenderId: this.app.options.messagingSenderId,
                      fcmToken: t,
                      createTime: Date.now(),
                      endpoint: i.endpoint,
                      auth: i.getKey("auth"),
                      p256dh: i.getKey("p256dh"),
                    }),
                    [4, this.tokenDetailsModel.saveTokenDetails(n)]
                  );
                case 2:
                  return (
                    e.sent(),
                    [4, this.vapidDetailsModel.saveVapidDetails(o.scope, s)]
                  );
                case 3:
                  return e.sent(), [2, t];
                case 4:
                  return (r = e.sent()), [4, this.deleteToken(a.fcmToken)];
                case 5:
                  throw (e.sent(), r);
                case 6:
                  return [2];
              }
            });
          });
        }),
        (Re.prototype.getNewToken = function (r, o, i) {
          return l(this, void 0, void 0, function () {
            var t, n;
            return d(this, function (e) {
              switch (e.label) {
                case 0:
                  return [4, this.subscriptionManager.getToken(this.app, o, i)];
                case 1:
                  return (
                    (t = e.sent()),
                    (n = {
                      swScope: r.scope,
                      vapidKey: i,
                      fcmSenderId: this.app.options.messagingSenderId,
                      fcmToken: t,
                      createTime: Date.now(),
                      endpoint: o.endpoint,
                      auth: o.getKey("auth"),
                      p256dh: o.getKey("p256dh"),
                    }),
                    [4, this.tokenDetailsModel.saveTokenDetails(n)]
                  );
                case 2:
                  return (
                    e.sent(),
                    [4, this.vapidDetailsModel.saveVapidDetails(r.scope, i)]
                  );
                case 3:
                  return e.sent(), [2, t];
              }
            });
          });
        }),
        (Re.prototype.deleteToken = function (r) {
          return l(this, void 0, void 0, function () {
            var t, n;
            return d(this, function (e) {
              switch (e.label) {
                case 0:
                  return [4, this.deleteTokenFromDB(r)];
                case 1:
                  return e.sent(), [4, this.getSWRegistration_()];
                case 2:
                  return (t = e.sent())
                    ? [4, t.pushManager.getSubscription()]
                    : [3, 4];
                case 3:
                  if ((n = e.sent())) return [2, n.unsubscribe()];
                  e.label = 4;
                case 4:
                  return [2, !0];
              }
            });
          });
        }),
        (Re.prototype.deleteTokenFromDB = function (n) {
          return l(this, void 0, void 0, function () {
            var t;
            return d(this, function (e) {
              switch (e.label) {
                case 0:
                  return [4, this.tokenDetailsModel.deleteToken(n)];
                case 1:
                  return (
                    (t = e.sent()),
                    [4, this.subscriptionManager.deleteToken(this.app, t)]
                  );
                case 2:
                  return e.sent(), [2];
              }
            });
          });
        }),
        (Re.prototype.getPushSubscription = function (n, r) {
          return l(this, void 0, void 0, function () {
            var t;
            return d(this, function (e) {
              switch (e.label) {
                case 0:
                  return [4, n.pushManager.getSubscription()];
                case 1:
                  return (t = e.sent())
                    ? [2, t]
                    : [
                        2,
                        n.pushManager.subscribe({
                          userVisibleOnly: !0,
                          applicationServerKey: r,
                        }),
                      ];
              }
            });
          });
        }),
        (Re.prototype.requestPermission = function () {
          throw ye.create("only-available-in-window");
        }),
        (Re.prototype.useServiceWorker = function (e) {
          throw ye.create("only-available-in-window");
        }),
        (Re.prototype.usePublicVapidKey = function (e) {
          throw ye.create("only-available-in-window");
        }),
        (Re.prototype.onMessage = function (e, t, n) {
          throw ye.create("only-available-in-window");
        }),
        (Re.prototype.onTokenRefresh = function (e, t, n) {
          throw ye.create("only-available-in-window");
        }),
        (Re.prototype.setBackgroundMessageHandler = function (e) {
          throw ye.create("only-available-in-sw");
        }),
        (Re.prototype.delete = function () {
          return l(this, void 0, void 0, function () {
            return d(this, function (e) {
              switch (e.label) {
                case 0:
                  return [
                    4,
                    Promise.all([
                      this.tokenDetailsModel.closeDatabase(),
                      this.vapidDetailsModel.closeDatabase(),
                    ]),
                  ];
                case 1:
                  return e.sent(), [2];
              }
            });
          });
        }),
        (Re.prototype.getNotificationPermission_ = function () {
          return Notification.permission;
        }),
        (Re.prototype.getTokenDetailsModel = function () {
          return this.tokenDetailsModel;
        }),
        (Re.prototype.getVapidDetailsModel = function () {
          return this.vapidDetailsModel;
        }),
        (Re.prototype.getSubscriptionManager = function () {
          return this.subscriptionManager;
        }),
        Re);
      function Re(e) {
        var t = this;
        if (
          ((this.app = e),
          (this.vapidDetailsModel = new We()),
          (this.subscriptionManager = new Te()),
          !e.options.messagingSenderId ||
            "string" != typeof e.options.messagingSenderId)
        )
          throw ye.create("bad-sender-id");
        (this.INTERNAL = {
          delete: function () {
            return t.delete();
          },
        }),
          (this.tokenDetailsModel = new Ke(e));
      }
      var Le,
        Be = "FCM_MSG",
        He =
          (e($e, (Le = Fe)),
          ($e.prototype.onPush = function (e) {
            e.waitUntil(this.onPush_(e));
          }),
          ($e.prototype.onSubChange = function (e) {
            e.waitUntil(this.onSubChange_(e));
          }),
          ($e.prototype.onNotificationClick = function (e) {
            e.waitUntil(this.onNotificationClick_(e));
          }),
          ($e.prototype.onPush_ = function (a) {
            return l(this, void 0, void 0, function () {
              var t, n, r, o, i, s;
              return d(this, function (e) {
                switch (e.label) {
                  case 0:
                    if (!a.data) return [2];
                    try {
                      t = a.data.json();
                    } catch (e) {
                      return [2];
                    }
                    return [4, this.hasVisibleClients_()];
                  case 1:
                    return e.sent()
                      ? [2, this.sendMessageToWindowClients_(t)]
                      : (n = this.getNotificationData_(t))
                      ? ((r = n.title || ""), [4, this.getSWRegistration_()])
                      : [3, 3];
                  case 2:
                    return (
                      (o = e.sent()),
                      (i = n.actions),
                      (s = Notification.maxActions),
                      i &&
                        s &&
                        i.length > s &&
                        console.warn(
                          "This browser only supports " +
                            s +
                            " actions.The remaining actions will not be displayed.",
                        ),
                      [2, o.showNotification(r, n)]
                    );
                  case 3:
                    return this.bgMessageHandler
                      ? [4, this.bgMessageHandler(t)]
                      : [3, 5];
                  case 4:
                    return e.sent(), [2];
                  case 5:
                    return [2];
                }
              });
            });
          }),
          ($e.prototype.onSubChange_ = function (e) {
            return l(this, void 0, void 0, function () {
              var t, n, r, o;
              return d(this, function (e) {
                switch (e.label) {
                  case 0:
                    return (
                      e.trys.push([0, 2, , 3]), [4, this.getSWRegistration_()]
                    );
                  case 1:
                    return (t = e.sent()), [3, 3];
                  case 2:
                    throw (
                      ((n = e.sent()),
                      ye.create("unable-to-resubscribe", { errorInfo: n }))
                    );
                  case 3:
                    return (
                      e.trys.push([3, 5, , 8]),
                      [4, t.pushManager.getSubscription()]
                    );
                  case 4:
                    return e.sent(), [3, 8];
                  case 5:
                    return (
                      (r = e.sent()),
                      [
                        4,
                        this.getTokenDetailsModel().getTokenDetailsFromSWScope(
                          t.scope,
                        ),
                      ]
                    );
                  case 6:
                    if (!(o = e.sent())) throw r;
                    return [4, this.deleteToken(o.fcmToken)];
                  case 7:
                    throw (e.sent(), r);
                  case 8:
                    return [2];
                }
              });
            });
          }),
          ($e.prototype.onNotificationClick_ = function (i) {
            return l(this, void 0, void 0, function () {
              var t, n, r, o;
              return d(this, function (e) {
                switch (e.label) {
                  case 0:
                    if (
                      !(
                        i.notification &&
                        i.notification.data &&
                        i.notification.data[Be]
                      )
                    )
                      return [2];
                    if (i.action) return [2];
                    if (
                      (i.stopImmediatePropagation(),
                      i.notification.close(),
                      !(t = i.notification.data[Be]).notification)
                    )
                      return [2];
                    if (
                      !(n =
                        (t.fcmOptions && t.fcmOptions.link) ||
                        t.notification.click_action)
                    ) {
                      if (!(t.data && me in t.data)) return [2];
                      n = self.location.origin;
                    }
                    return [4, this.getWindowClient_(n)];
                  case 1:
                    return (r = e.sent())
                      ? [3, 4]
                      : [4, self.clients.openWindow(n)];
                  case 2:
                    return (
                      (r = e.sent()),
                      [
                        4,
                        (function (t) {
                          return new Promise(function (e) {
                            setTimeout(e, t);
                          });
                        })(3e3),
                      ]
                    );
                  case 3:
                    return e.sent(), [3, 6];
                  case 4:
                    return [4, r.focus()];
                  case 5:
                    (r = e.sent()), (e.label = 6);
                  case 6:
                    return r
                      ? (delete t.notification,
                        delete t.fcmOptions,
                        (o = ze(ve.NOTIFICATION_CLICKED, t)),
                        [2, this.attemptToMessageClient_(r, o)])
                      : [2];
                }
              });
            });
          }),
          ($e.prototype.getNotificationData_ = function (e) {
            var t;
            if (e && "object" == typeof e.notification) {
              var n = s({}, e.notification);
              return (
                (n.data = s(
                  s({}, e.notification.data),
                  (((t = {})[Be] = e), t),
                )),
                n
              );
            }
          }),
          ($e.prototype.setBackgroundMessageHandler = function (e) {
            if (!e || "function" != typeof e)
              throw ye.create("bg-handler-function-expected");
            this.bgMessageHandler = e;
          }),
          ($e.prototype.getWindowClient_ = function (i) {
            return l(this, void 0, void 0, function () {
              var t, n, r, o;
              return d(this, function (e) {
                switch (e.label) {
                  case 0:
                    return (t = new URL(i, self.location.href).href), [4, Ge()];
                  case 1:
                    for (n = e.sent(), r = null, o = 0; o < n.length; o++)
                      if (new URL(n[o].url, self.location.href).href === t) {
                        r = n[o];
                        break;
                      }
                    return [2, r];
                }
              });
            });
          }),
          ($e.prototype.attemptToMessageClient_ = function (t, n) {
            return l(this, void 0, void 0, function () {
              return d(this, function (e) {
                if (!t) throw ye.create("no-window-client-to-msg");
                return t.postMessage(n), [2];
              });
            });
          }),
          ($e.prototype.hasVisibleClients_ = function () {
            return l(this, void 0, void 0, function () {
              return d(this, function (e) {
                switch (e.label) {
                  case 0:
                    return [4, Ge()];
                  case 1:
                    return [
                      2,
                      e.sent().some(function (e) {
                        return (
                          "visible" === e.visibilityState &&
                          !e.url.startsWith("chrome-extension://")
                        );
                      }),
                    ];
                }
              });
            });
          }),
          ($e.prototype.sendMessageToWindowClients_ = function (o) {
            return l(this, void 0, void 0, function () {
              var t,
                n,
                r = this;
              return d(this, function (e) {
                switch (e.label) {
                  case 0:
                    return [4, Ge()];
                  case 1:
                    return (
                      (t = e.sent()),
                      (n = ze(ve.PUSH_MSG_RECEIVED, o)),
                      [
                        4,
                        Promise.all(
                          t.map(function (e) {
                            return r.attemptToMessageClient_(e, n);
                          }),
                        ),
                      ]
                    );
                  case 2:
                    return e.sent(), [2];
                }
              });
            });
          }),
          ($e.prototype.getSWRegistration_ = function () {
            return l(this, void 0, void 0, function () {
              return d(this, function (e) {
                return [2, self.registration];
              });
            });
          }),
          ($e.prototype.getPublicVapidKey_ = function () {
            return l(this, void 0, void 0, function () {
              var t, n;
              return d(this, function (e) {
                switch (e.label) {
                  case 0:
                    return [4, this.getSWRegistration_()];
                  case 1:
                    if (!(t = e.sent()))
                      throw ye.create("sw-registration-expected");
                    return [
                      4,
                      this.getVapidDetailsModel().getVapidFromSWScope(t.scope),
                    ];
                  case 2:
                    return null == (n = e.sent()) ? [2, we] : [2, n];
                }
              });
            });
          }),
          $e);
      function $e(e) {
        var t = Le.call(this, e) || this;
        return (
          (t.bgMessageHandler = null),
          self.addEventListener("push", function (e) {
            t.onPush(e);
          }),
          self.addEventListener("pushsubscriptionchange", function (e) {
            t.onSubChange(e);
          }),
          self.addEventListener("notificationclick", function (e) {
            t.onNotificationClick(e);
          }),
          t
        );
      }
      function Ge() {
        return self.clients.matchAll({
          type: "window",
          includeUncontrolled: !0,
        });
      }
      function ze(e, t) {
        return { firebaseMessagingType: e, firebaseMessagingData: t };
      }
      var Je,
        Ye,
        Qe =
          (e(Xe, (Je = Fe)),
          (Xe.prototype.requestPermission = function () {
            return l(this, void 0, void 0, function () {
              var t;
              return d(this, function (e) {
                switch (e.label) {
                  case 0:
                    return "granted" === this.getNotificationPermission_()
                      ? [2]
                      : [4, Notification.requestPermission()];
                  case 1:
                    if ("granted" === (t = e.sent())) return [2];
                    throw "denied" === t
                      ? ye.create("permission-blocked")
                      : ye.create("permission-default");
                }
              });
            });
          }),
          (Xe.prototype.useServiceWorker = function (e) {
            if (!(e instanceof ServiceWorkerRegistration))
              throw ye.create("sw-registration-expected");
            if (null != this.registrationToUse)
              throw ye.create("use-sw-before-get-token");
            this.registrationToUse = e;
          }),
          (Xe.prototype.usePublicVapidKey = function (e) {
            if ("string" != typeof e)
              throw ye.create("invalid-public-vapid-key");
            if (null != this.publicVapidKeyToUse)
              throw ye.create("use-public-key-before-get-token");
            var t = Me(e);
            if (65 !== t.length)
              throw ye.create("public-vapid-key-decryption-failed");
            this.publicVapidKeyToUse = t;
          }),
          (Xe.prototype.onMessage = function (e, t, n) {
            return "function" == typeof e
              ? this.onMessageInternal(e, t, n)
              : this.onMessageInternal(e);
          }),
          (Xe.prototype.onTokenRefresh = function (e, t, n) {
            return "function" == typeof e
              ? this.onTokenRefreshInternal(e, t, n)
              : this.onTokenRefreshInternal(e);
          }),
          (Xe.prototype.waitForRegistrationToActivate_ = function (r) {
            var o = r.installing || r.waiting || r.active;
            return new Promise(function (e, t) {
              if (o)
                if ("activated" !== o.state)
                  if ("redundant" !== o.state) {
                    var n = function () {
                      if ("activated" === o.state) e(r);
                      else {
                        if ("redundant" !== o.state) return;
                        t(ye.create("sw-reg-redundant"));
                      }
                      o.removeEventListener("statechange", n);
                    };
                    o.addEventListener("statechange", n);
                  } else t(ye.create("sw-reg-redundant"));
                else e(r);
              else t(ye.create("no-sw-in-reg"));
            });
          }),
          (Xe.prototype.getSWRegistration_ = function () {
            var t = this;
            return this.registrationToUse
              ? this.waitForRegistrationToActivate_(this.registrationToUse)
              : ((this.registrationToUse = null),
                navigator.serviceWorker
                  .register("/firebase-messaging-sw.js", {
                    scope: "/firebase-cloud-messaging-push-scope",
                  })
                  .catch(function (e) {
                    throw ye.create("failed-serviceworker-registration", {
                      browserErrorMessage: e.message,
                    });
                  })
                  .then(function (e) {
                    return t
                      .waitForRegistrationToActivate_(e)
                      .then(function () {
                        return (t.registrationToUse = e).update(), e;
                      });
                  }));
          }),
          (Xe.prototype.getPublicVapidKey_ = function () {
            return l(this, void 0, void 0, function () {
              return d(this, function (e) {
                return this.publicVapidKeyToUse
                  ? [2, this.publicVapidKeyToUse]
                  : [2, we];
              });
            });
          }),
          (Xe.prototype.setupSWMessageListener_ = function () {
            var s = this;
            navigator.serviceWorker.addEventListener(
              "message",
              function (e) {
                if (
                  e.data &&
                  e.data.firebaseMessagingType &&
                  e.data.firebaseMessagingData
                ) {
                  var t = e.data,
                    n = t.firebaseMessagingType,
                    r = t.firebaseMessagingData;
                  s.messageObserver && s.messageObserver.next(r);
                  var o = r.data;
                  if (o && me in o && "1" === o["google.c.a.e"]) {
                    var i = (function (e) {
                      switch (e) {
                        case ve.NOTIFICATION_CLICKED:
                          return "notification_open";
                        case ve.PUSH_MSG_RECEIVED:
                          return "notification_foreground";
                        default:
                          throw new Error();
                      }
                    })(n);
                    s.app.INTERNAL.analytics.logEvent(i, {
                      message_name: o["google.c.a.c_l"],
                      message_id: o[me],
                      message_time: o["google.c.a.ts"],
                      message_device_time: Math.floor(Date.now() / 1e3),
                    });
                  }
                }
              },
              !1,
            );
          }),
          Xe);
      function Xe(e) {
        var t = Je.call(this, e) || this;
        return (
          (t.registrationToUse = null),
          (t.publicVapidKeyToUse = null),
          (t.messageObserver = null),
          (t.tokenRefreshObserver = null),
          (t.onMessageInternal = u(function (e) {
            t.messageObserver = e;
          })),
          (t.onTokenRefreshInternal = u(function (e) {
            t.tokenRefreshObserver = e;
          })),
          t.setupSWMessageListener_(),
          t
        );
      }
      function Ze() {
        return self && "ServiceWorkerGlobalScope" in self
          ? "PushManager" in self &&
              "Notification" in self &&
              ServiceWorkerRegistration.prototype.hasOwnProperty(
                "showNotification",
              ) &&
              PushSubscription.prototype.hasOwnProperty("getKey")
          : navigator.cookieEnabled &&
              "serviceWorker" in navigator &&
              "PushManager" in window &&
              "Notification" in window &&
              "fetch" in window &&
              ServiceWorkerRegistration.prototype.hasOwnProperty(
                "showNotification",
              ) &&
              PushSubscription.prototype.hasOwnProperty("getKey");
      }
      (Ye = { isSupported: Ze }),
        et.INTERNAL.registerService(
          "messaging",
          function (e) {
            if (!Ze()) throw ye.create("unsupported-browser");
            return self && "ServiceWorkerGlobalScope" in self
              ? new He(e)
              : new Qe(e);
          },
          Ye,
        );
    }).apply(this, arguments);
  } catch (e) {
    throw (
      (console.error(e),
      new Error(
        "Cannot instantiate firebase-messaging - be sure to load firebase-app.js first.",
      ))
    );
  }
});
