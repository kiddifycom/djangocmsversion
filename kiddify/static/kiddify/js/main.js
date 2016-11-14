function draw(e, t) {
    var n, i, s = [],
        o = e.parentNode.querySelector("svg");
    switch (t) {
        case "cross":
            n = pathDefs.cross, i = animDefs.cross;
            break;
        case "fill":
            n = pathDefs.fill, i = animDefs.fill;
            break;
        case "checkmark":
            n = pathDefs.checkmark, i = animDefs.checkmark;
            break;
        case "circle":
            n = pathDefs.circle, i = animDefs.circle;
            break;
        case "boxfill":
            n = pathDefs.boxfill, i = animDefs.boxfill;
            break;
        case "swirl":
            n = pathDefs.swirl, i = animDefs.swirl;
            break;
        case "diagonal":
            n = pathDefs.diagonal, i = animDefs.diagonal;
            break;
        case "list":
            n = pathDefs.list, i = animDefs.list
    }
    s.push(document.createElementNS("http://www.w3.org/2000/svg", "path")), ("cross" === t || "list" === t) && s.push(document.createElementNS("http://www.w3.org/2000/svg", "path"));
    for (var r = 0, a = s.length; a > r; ++r) {
        var l = s[r];
        o.appendChild(l), l.setAttributeNS(null, "d", n[r]);
        var u = l.getTotalLength();
        l.style.strokeDasharray = u + " " + u, l.style.strokeDashoffset = 0 === r ? Math.floor(u) - 1 : u, l.getBoundingClientRect(), l.style.transition = l.style.WebkitTransition = l.style.MozTransition = "stroke-dashoffset " + i.speed + "s " + i.easing + " " + r * i.speed + "s", l.style.strokeDashoffset = "0"
    }
}

function createSVGEl(e) {
    var t = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    return e ? (t.setAttributeNS(null, "viewBox", e.viewBox), t.setAttributeNS(null, "preserveAspectRatio", e.preserveAspectRatio)) : t.setAttributeNS(null, "viewBox", "0 0 100 100"), t.setAttribute("xmlns", "http://www.w3.org/2000/svg"), t
}

function controlCheckbox(e, t, n) {
    var i = createSVGEl(n);
    e.parentNode.appendChild(i), e.checked && draw(e, t), e.addEventListener("change", function() {
        e.checked ? draw(e, t) : reset(e)
    })
}

function controlRadiobox(e, t) {
    var n = createSVGEl();
    e.parentNode.appendChild(n), e.addEventListener("change", function() {
        resetRadio(e), draw(e, t)
    })
}

function reset(e) {
    Array.prototype.slice.call(e.parentNode.querySelectorAll("svg > path")).forEach(function(e) {
        e.parentNode.removeChild(e)
    })
}

function resetRadio(e) {
    Array.prototype.slice.call(document.querySelectorAll('input[type="radio"][name="' + e.getAttribute("name") + '"]')).forEach(function(e) {
        var t = e.parentNode.querySelector("svg > path");
        t && t.parentNode.removeChild(t)
    })
}

function setPagination() {
    var e = $(".passport-box .pagination-wrapper li").size(),
        t = $(".passport-box .pagination-wrapper li.active").index();
    $(".passport-box .pagination-wrapper li.active").css("z-index", e + 1), $(".passport-box .pagination-wrapper li").each(function(n) {
        t > n ? $(this).css("z-index", n) : n > t && $(this).css("z-index", e - n)
    })
}

function onlyForDevelopment() {
    $(".passport-box .pagination-wrapper li").size() && ($(".passport-box .pagination-wrapper li a").click(function() {}), $(".passport-box .pagination-wrapper li").click(function() {
        $("li", $(this).parents(".pagination-wrapper")).removeClass("active"), $(this).addClass("active"), setPagination()
    }))
}

function onYouTubePlayerAPIReady() {
    mejs.YouTubeApi.iFrameReady()
}

function onYouTubePlayerReady(e) {
    mejs.YouTubeApi.flashReady(e)
}
if (function(e, t) {
        function n(e) {
            var t = e.length,
                n = ct.type(e);
            return ct.isWindow(e) ? !1 : 1 === e.nodeType && t ? !0 : "array" === n || "function" !== n && (0 === t || "number" == typeof t && t > 0 && t - 1 in e)
        }

        function i(e) {
            var t = St[e] = {};
            return ct.each(e.match(ht) || [], function(e, n) {
                t[n] = !0
            }), t
        }

        function s(e, n, i, s) {
            if (ct.acceptData(e)) {
                var o, r, a = ct.expando,
                    l = e.nodeType,
                    u = l ? ct.cache : e,
                    c = l ? e[a] : e[a] && a;
                if (c && u[c] && (s || u[c].data) || i !== t || "string" != typeof n) return c || (c = l ? e[a] = tt.pop() || ct.guid++ : a), u[c] || (u[c] = l ? {} : {
                    toJSON: ct.noop
                }), ("object" == typeof n || "function" == typeof n) && (s ? u[c] = ct.extend(u[c], n) : u[c].data = ct.extend(u[c].data, n)), r = u[c], s || (r.data || (r.data = {}), r = r.data), i !== t && (r[ct.camelCase(n)] = i), "string" == typeof n ? (o = r[n], null == o && (o = r[ct.camelCase(n)])) : o = r, o
            }
        }

        function o(e, t, n) {
            if (ct.acceptData(e)) {
                var i, s, o = e.nodeType,
                    r = o ? ct.cache : e,
                    l = o ? e[ct.expando] : ct.expando;
                if (r[l]) {
                    if (t && (i = n ? r[l] : r[l].data)) {
                        ct.isArray(t) ? t = t.concat(ct.map(t, ct.camelCase)) : t in i ? t = [t] : (t = ct.camelCase(t), t = t in i ? [t] : t.split(" ")), s = t.length;
                        for (; s--;) delete i[t[s]];
                        if (n ? !a(i) : !ct.isEmptyObject(i)) return
                    }(n || (delete r[l].data, a(r[l]))) && (o ? ct.cleanData([e], !0) : ct.support.deleteExpando || r != r.window ? delete r[l] : r[l] = null)
                }
            }
        }

        function r(e, n, i) {
            if (i === t && 1 === e.nodeType) {
                var s = "data-" + n.replace(Ft, "-$1").toLowerCase();
                if (i = e.getAttribute(s), "string" == typeof i) {
                    try {
                        i = "true" === i ? !0 : "false" === i ? !1 : "null" === i ? null : +i + "" === i ? +i : jt.test(i) ? ct.parseJSON(i) : i
                    } catch (o) {}
                    ct.data(e, n, i)
                } else i = t
            }
            return i
        }

        function a(e) {
            var t;
            for (t in e)
                if (("data" !== t || !ct.isEmptyObject(e[t])) && "toJSON" !== t) return !1;
            return !0
        }

        function l() {
            return !0
        }

        function u() {
            return !1
        }

        function c() {
            try {
                return K.activeElement
            } catch (e) {}
        }

        function d(e, t) {
            do e = e[t]; while (e && 1 !== e.nodeType);
            return e
        }

        function h(e, t, n) {
            if (ct.isFunction(t)) return ct.grep(e, function(e, i) {
                return !!t.call(e, i, e) !== n
            });
            if (t.nodeType) return ct.grep(e, function(e) {
                return e === t !== n
            });
            if ("string" == typeof t) {
                if (qt.test(t)) return ct.filter(t, e, n);
                t = ct.filter(t, e)
            }
            return ct.grep(e, function(e) {
                return ct.inArray(e, t) >= 0 !== n
            })
        }

        function p(e) {
            var t = Ut.split("|"),
                n = e.createDocumentFragment();
            if (n.createElement)
                for (; t.length;) n.createElement(t.pop());
            return n
        }

        function f(e, t) {
            return ct.nodeName(e, "table") && ct.nodeName(1 === t.nodeType ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e
        }

        function m(e) {
            return e.type = (null !== ct.find.attr(e, "type")) + "/" + e.type, e
        }

        function g(e) {
            var t = on.exec(e.type);
            return t ? e.type = t[1] : e.removeAttribute("type"), e
        }

        function v(e, t) {
            for (var n, i = 0; null != (n = e[i]); i++) ct._data(n, "globalEval", !t || ct._data(t[i], "globalEval"))
        }

        function y(e, t) {
            if (1 === t.nodeType && ct.hasData(e)) {
                var n, i, s, o = ct._data(e),
                    r = ct._data(t, o),
                    a = o.events;
                if (a) {
                    delete r.handle, r.events = {};
                    for (n in a)
                        for (i = 0, s = a[n].length; s > i; i++) ct.event.add(t, n, a[n][i])
                }
                r.data && (r.data = ct.extend({}, r.data))
            }
        }

        function b(e, t) {
            var n, i, s;
            if (1 === t.nodeType) {
                if (n = t.nodeName.toLowerCase(), !ct.support.noCloneEvent && t[ct.expando]) {
                    s = ct._data(t);
                    for (i in s.events) ct.removeEvent(t, i, s.handle);
                    t.removeAttribute(ct.expando)
                }
                "script" === n && t.text !== e.text ? (m(t).text = e.text, g(t)) : "object" === n ? (t.parentNode && (t.outerHTML = e.outerHTML), ct.support.html5Clone && e.innerHTML && !ct.trim(t.innerHTML) && (t.innerHTML = e.innerHTML)) : "input" === n && tn.test(e.type) ? (t.defaultChecked = t.checked = e.checked, t.value !== e.value && (t.value = e.value)) : "option" === n ? t.defaultSelected = t.selected = e.defaultSelected : ("input" === n || "textarea" === n) && (t.defaultValue = e.defaultValue)
            }
        }

        function x(e, n) {
            var i, s, o = 0,
                r = typeof e.getElementsByTagName !== Y ? e.getElementsByTagName(n || "*") : typeof e.querySelectorAll !== Y ? e.querySelectorAll(n || "*") : t;
            if (!r)
                for (r = [], i = e.childNodes || e; null != (s = i[o]); o++) !n || ct.nodeName(s, n) ? r.push(s) : ct.merge(r, x(s, n));
            return n === t || n && ct.nodeName(e, n) ? ct.merge([e], r) : r
        }

        function w(e) {
            tn.test(e.type) && (e.defaultChecked = e.checked)
        }

        function C(e, t) {
            if (t in e) return t;
            for (var n = t.charAt(0).toUpperCase() + t.slice(1), i = t, s = Sn.length; s--;)
                if (t = Sn[s] + n, t in e) return t;
            return i
        }

        function T(e, t) {
            return e = t || e, "none" === ct.css(e, "display") || !ct.contains(e.ownerDocument, e)
        }

        function k(e, t) {
            for (var n, i, s, o = [], r = 0, a = e.length; a > r; r++) i = e[r], i.style && (o[r] = ct._data(i, "olddisplay"), n = i.style.display, t ? (o[r] || "none" !== n || (i.style.display = ""), "" === i.style.display && T(i) && (o[r] = ct._data(i, "olddisplay", E(i.nodeName)))) : o[r] || (s = T(i), (n && "none" !== n || !s) && ct._data(i, "olddisplay", s ? n : ct.css(i, "display"))));
            for (r = 0; a > r; r++) i = e[r], i.style && (t && "none" !== i.style.display && "" !== i.style.display || (i.style.display = t ? o[r] || "" : "none"));
            return e
        }

        function S(e, t, n) {
            var i = yn.exec(t);
            return i ? Math.max(0, i[1] - (n || 0)) + (i[2] || "px") : t
        }

        function j(e, t, n, i, s) {
            for (var o = n === (i ? "border" : "content") ? 4 : "width" === t ? 1 : 0, r = 0; 4 > o; o += 2) "margin" === n && (r += ct.css(e, n + kn[o], !0, s)), i ? ("content" === n && (r -= ct.css(e, "padding" + kn[o], !0, s)), "margin" !== n && (r -= ct.css(e, "border" + kn[o] + "Width", !0, s))) : (r += ct.css(e, "padding" + kn[o], !0, s), "padding" !== n && (r += ct.css(e, "border" + kn[o] + "Width", !0, s)));
            return r
        }

        function F(e, t, n) {
            var i = !0,
                s = "width" === t ? e.offsetWidth : e.offsetHeight,
                o = dn(e),
                r = ct.support.boxSizing && "border-box" === ct.css(e, "boxSizing", !1, o);
            if (0 >= s || null == s) {
                if (s = hn(e, t, o), (0 > s || null == s) && (s = e.style[t]), bn.test(s)) return s;
                i = r && (ct.support.boxSizingReliable || s === e.style[t]), s = parseFloat(s) || 0
            }
            return s + j(e, t, n || (r ? "border" : "content"), i, o) + "px"
        }

        function E(e) {
            var t = K,
                n = wn[e];
            return n || (n = $(e, t), "none" !== n && n || (cn = (cn || ct("<iframe frameborder='0' width='0' height='0'/>").css("cssText", "display:block !important")).appendTo(t.documentElement), t = (cn[0].contentWindow || cn[0].contentDocument).document, t.write("<!doctype html><html><body>"), t.close(), n = $(e, t), cn.detach()), wn[e] = n), n
        }

        function $(e, t) {
            var n = ct(t.createElement(e)).appendTo(t.body),
                i = ct.css(n[0], "display");
            return n.remove(), i
        }

        function A(e, t, n, i) {
            var s;
            if (ct.isArray(t)) ct.each(t, function(t, s) {
                n || Fn.test(e) ? i(e, s) : A(e + "[" + ("object" == typeof s ? t : "") + "]", s, n, i)
            });
            else if (n || "object" !== ct.type(t)) i(e, t);
            else
                for (s in t) A(e + "[" + s + "]", t[s], n, i)
        }

        function N(e) {
            return function(t, n) {
                "string" != typeof t && (n = t, t = "*");
                var i, s = 0,
                    o = t.toLowerCase().match(ht) || [];
                if (ct.isFunction(n))
                    for (; i = o[s++];) "+" === i[0] ? (i = i.slice(1) || "*", (e[i] = e[i] || []).unshift(n)) : (e[i] = e[i] || []).push(n)
            }
        }

        function L(e, n, i, s) {
            function o(l) {
                var u;
                return r[l] = !0, ct.each(e[l] || [], function(e, l) {
                    var c = l(n, i, s);
                    return "string" != typeof c || a || r[c] ? a ? !(u = c) : t : (n.dataTypes.unshift(c), o(c), !1)
                }), u
            }
            var r = {},
                a = e === Wn;
            return o(n.dataTypes[0]) || !r["*"] && o("*")
        }

        function D(e, n) {
            var i, s, o = ct.ajaxSettings.flatOptions || {};
            for (s in n) n[s] !== t && ((o[s] ? e : i || (i = {}))[s] = n[s]);
            return i && ct.extend(!0, e, i), e
        }

        function M(e, n, i) {
            for (var s, o, r, a, l = e.contents, u = e.dataTypes;
                "*" === u[0];) u.shift(), o === t && (o = e.mimeType || n.getResponseHeader("Content-Type"));
            if (o)
                for (a in l)
                    if (l[a] && l[a].test(o)) {
                        u.unshift(a);
                        break
                    }
            if (u[0] in i) r = u[0];
            else {
                for (a in i) {
                    if (!u[0] || e.converters[a + " " + u[0]]) {
                        r = a;
                        break
                    }
                    s || (s = a)
                }
                r = r || s
            }
            return r ? (r !== u[0] && u.unshift(r), i[r]) : t
        }

        function B(e, t, n, i) {
            var s, o, r, a, l, u = {},
                c = e.dataTypes.slice();
            if (c[1])
                for (r in e.converters) u[r.toLowerCase()] = e.converters[r];
            for (o = c.shift(); o;)
                if (e.responseFields[o] && (n[e.responseFields[o]] = t), !l && i && e.dataFilter && (t = e.dataFilter(t, e.dataType)), l = o, o = c.shift())
                    if ("*" === o) o = l;
                    else if ("*" !== l && l !== o) {
                if (r = u[l + " " + o] || u["* " + o], !r)
                    for (s in u)
                        if (a = s.split(" "), a[1] === o && (r = u[l + " " + a[0]] || u["* " + a[0]])) {
                            r === !0 ? r = u[s] : u[s] !== !0 && (o = a[0], c.unshift(a[1]));
                            break
                        }
                if (r !== !0)
                    if (r && e["throws"]) t = r(t);
                    else try {
                        t = r(t)
                    } catch (d) {
                        return {
                            state: "parsererror",
                            error: r ? d : "No conversion from " + l + " to " + o
                        }
                    }
            }
            return {
                state: "success",
                data: t
            }
        }

        function P() {
            try {
                return new e.XMLHttpRequest
            } catch (t) {}
        }

        function I() {
            try {
                return new e.ActiveXObject("Microsoft.XMLHTTP")
            } catch (t) {}
        }

        function _() {
            return setTimeout(function() {
                Zn = t
            }), Zn = ct.now()
        }

        function H(e, t, n) {
            for (var i, s = (oi[t] || []).concat(oi["*"]), o = 0, r = s.length; r > o; o++)
                if (i = s[o].call(n, t, e)) return i
        }

        function z(e, t, n) {
            var i, s, o = 0,
                r = si.length,
                a = ct.Deferred().always(function() {
                    delete l.elem
                }),
                l = function() {
                    if (s) return !1;
                    for (var t = Zn || _(), n = Math.max(0, u.startTime + u.duration - t), i = n / u.duration || 0, o = 1 - i, r = 0, l = u.tweens.length; l > r; r++) u.tweens[r].run(o);
                    return a.notifyWith(e, [u, o, n]), 1 > o && l ? n : (a.resolveWith(e, [u]), !1)
                },
                u = a.promise({
                    elem: e,
                    props: ct.extend({}, t),
                    opts: ct.extend(!0, {
                        specialEasing: {}
                    }, n),
                    originalProperties: t,
                    originalOptions: n,
                    startTime: Zn || _(),
                    duration: n.duration,
                    tweens: [],
                    createTween: function(t, n) {
                        var i = ct.Tween(e, u.opts, t, n, u.opts.specialEasing[t] || u.opts.easing);
                        return u.tweens.push(i), i
                    },
                    stop: function(t) {
                        var n = 0,
                            i = t ? u.tweens.length : 0;
                        if (s) return this;
                        for (s = !0; i > n; n++) u.tweens[n].run(1);
                        return t ? a.resolveWith(e, [u, t]) : a.rejectWith(e, [u, t]), this
                    }
                }),
                c = u.props;
            for (O(c, u.opts.specialEasing); r > o; o++)
                if (i = si[o].call(u, e, c, u.opts)) return i;
            return ct.map(c, H, u), ct.isFunction(u.opts.start) && u.opts.start.call(e, u), ct.fx.timer(ct.extend(l, {
                elem: e,
                anim: u,
                queue: u.opts.queue
            })), u.progress(u.opts.progress).done(u.opts.done, u.opts.complete).fail(u.opts.fail).always(u.opts.always)
        }

        function O(e, t) {
            var n, i, s, o, r;
            for (n in e)
                if (i = ct.camelCase(n), s = t[i], o = e[n], ct.isArray(o) && (s = o[1], o = e[n] = o[0]), n !== i && (e[i] = o, delete e[n]), r = ct.cssHooks[i], r && "expand" in r) {
                    o = r.expand(o), delete e[i];
                    for (n in o) n in e || (e[n] = o[n], t[n] = s)
                } else t[i] = s
        }

        function q(e, t, n) {
            var i, s, o, r, a, l, u = this,
                c = {},
                d = e.style,
                h = e.nodeType && T(e),
                p = ct._data(e, "fxshow");
            n.queue || (a = ct._queueHooks(e, "fx"), null == a.unqueued && (a.unqueued = 0, l = a.empty.fire, a.empty.fire = function() {
                a.unqueued || l()
            }), a.unqueued++, u.always(function() {
                u.always(function() {
                    a.unqueued--, ct.queue(e, "fx").length || a.empty.fire()
                })
            })), 1 === e.nodeType && ("height" in t || "width" in t) && (n.overflow = [d.overflow, d.overflowX, d.overflowY], "inline" === ct.css(e, "display") && "none" === ct.css(e, "float") && (ct.support.inlineBlockNeedsLayout && "inline" !== E(e.nodeName) ? d.zoom = 1 : d.display = "inline-block")), n.overflow && (d.overflow = "hidden", ct.support.shrinkWrapBlocks || u.always(function() {
                d.overflow = n.overflow[0], d.overflowX = n.overflow[1], d.overflowY = n.overflow[2]
            }));
            for (i in t)
                if (s = t[i], ti.exec(s)) {
                    if (delete t[i], o = o || "toggle" === s, s === (h ? "hide" : "show")) continue;
                    c[i] = p && p[i] || ct.style(e, i)
                }
            if (!ct.isEmptyObject(c)) {
                p ? "hidden" in p && (h = p.hidden) : p = ct._data(e, "fxshow", {}), o && (p.hidden = !h), h ? ct(e).show() : u.done(function() {
                    ct(e).hide()
                }), u.done(function() {
                    var t;
                    ct._removeData(e, "fxshow");
                    for (t in c) ct.style(e, t, c[t])
                });
                for (i in c) r = H(h ? p[i] : 0, i, u), i in p || (p[i] = r.start, h && (r.end = r.start, r.start = "width" === i || "height" === i ? 1 : 0))
            }
        }

        function R(e, t, n, i, s) {
            return new R.prototype.init(e, t, n, i, s)
        }

        function W(e, t) {
            var n, i = {
                    height: e
                },
                s = 0;
            for (t = t ? 1 : 0; 4 > s; s += 2 - t) n = kn[s], i["margin" + n] = i["padding" + n] = e;
            return t && (i.opacity = i.width = e), i
        }

        function V(e) {
            return ct.isWindow(e) ? e : 9 === e.nodeType ? e.defaultView || e.parentWindow : !1
        }
        var U, Q, Y = typeof t,
            X = e.location,
            K = e.document,
            G = K.documentElement,
            J = e.jQuery,
            Z = e.$,
            et = {},
            tt = [],
            nt = "1.10.2",
            it = tt.concat,
            st = tt.push,
            ot = tt.slice,
            rt = tt.indexOf,
            at = et.toString,
            lt = et.hasOwnProperty,
            ut = nt.trim,
            ct = function(e, t) {
                return new ct.fn.init(e, t, Q)
            },
            dt = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
            ht = /\S+/g,
            pt = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
            ft = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
            mt = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
            gt = /^[\],:{}\s]*$/,
            vt = /(?:^|:|,)(?:\s*\[)+/g,
            yt = /\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,
            bt = /"[^"\\\r\n]*"|true|false|null|-?(?:\d+\.|)\d+(?:[eE][+-]?\d+|)/g,
            xt = /^-ms-/,
            wt = /-([\da-z])/gi,
            Ct = function(e, t) {
                return t.toUpperCase()
            },
            Tt = function(e) {
                (K.addEventListener || "load" === e.type || "complete" === K.readyState) && (kt(), ct.ready())
            },
            kt = function() {
                K.addEventListener ? (K.removeEventListener("DOMContentLoaded", Tt, !1), e.removeEventListener("load", Tt, !1)) : (K.detachEvent("onreadystatechange", Tt), e.detachEvent("onload", Tt))
            };
        ct.fn = ct.prototype = {
                jquery: nt,
                constructor: ct,
                init: function(e, n, i) {
                    var s, o;
                    if (!e) return this;
                    if ("string" == typeof e) {
                        if (s = "<" === e.charAt(0) && ">" === e.charAt(e.length - 1) && e.length >= 3 ? [null, e, null] : ft.exec(e), !s || !s[1] && n) return !n || n.jquery ? (n || i).find(e) : this.constructor(n).find(e);
                        if (s[1]) {
                            if (n = n instanceof ct ? n[0] : n, ct.merge(this, ct.parseHTML(s[1], n && n.nodeType ? n.ownerDocument || n : K, !0)), mt.test(s[1]) && ct.isPlainObject(n))
                                for (s in n) ct.isFunction(this[s]) ? this[s](n[s]) : this.attr(s, n[s]);
                            return this
                        }
                        if (o = K.getElementById(s[2]), o && o.parentNode) {
                            if (o.id !== s[2]) return i.find(e);
                            this.length = 1, this[0] = o
                        }
                        return this.context = K, this.selector = e, this
                    }
                    return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : ct.isFunction(e) ? i.ready(e) : (e.selector !== t && (this.selector = e.selector, this.context = e.context), ct.makeArray(e, this))
                },
                selector: "",
                length: 0,
                toArray: function() {
                    return ot.call(this)
                },
                get: function(e) {
                    return null == e ? this.toArray() : 0 > e ? this[this.length + e] : this[e]
                },
                pushStack: function(e) {
                    var t = ct.merge(this.constructor(), e);
                    return t.prevObject = this, t.context = this.context, t
                },
                each: function(e, t) {
                    return ct.each(this, e, t)
                },
                ready: function(e) {
                    return ct.ready.promise().done(e), this
                },
                slice: function() {
                    return this.pushStack(ot.apply(this, arguments))
                },
                first: function() {
                    return this.eq(0)
                },
                last: function() {
                    return this.eq(-1)
                },
                eq: function(e) {
                    var t = this.length,
                        n = +e + (0 > e ? t : 0);
                    return this.pushStack(n >= 0 && t > n ? [this[n]] : [])
                },
                map: function(e) {
                    return this.pushStack(ct.map(this, function(t, n) {
                        return e.call(t, n, t)
                    }))
                },
                end: function() {
                    return this.prevObject || this.constructor(null)
                },
                push: st,
                sort: [].sort,
                splice: [].splice
            }, ct.fn.init.prototype = ct.fn, ct.extend = ct.fn.extend = function() {
                var e, n, i, s, o, r, a = arguments[0] || {},
                    l = 1,
                    u = arguments.length,
                    c = !1;
                for ("boolean" == typeof a && (c = a, a = arguments[1] || {}, l = 2), "object" == typeof a || ct.isFunction(a) || (a = {}), u === l && (a = this, --l); u > l; l++)
                    if (null != (o = arguments[l]))
                        for (s in o) e = a[s], i = o[s], a !== i && (c && i && (ct.isPlainObject(i) || (n = ct.isArray(i))) ? (n ? (n = !1, r = e && ct.isArray(e) ? e : []) : r = e && ct.isPlainObject(e) ? e : {}, a[s] = ct.extend(c, r, i)) : i !== t && (a[s] = i));
                return a
            }, ct.extend({
                expando: "jQuery" + (nt + Math.random()).replace(/\D/g, ""),
                noConflict: function(t) {
                    return e.$ === ct && (e.$ = Z), t && e.jQuery === ct && (e.jQuery = J), ct
                },
                isReady: !1,
                readyWait: 1,
                holdReady: function(e) {
                    e ? ct.readyWait++ : ct.ready(!0)
                },
                ready: function(e) {
                    if (e === !0 ? !--ct.readyWait : !ct.isReady) {
                        if (!K.body) return setTimeout(ct.ready);
                        ct.isReady = !0, e !== !0 && --ct.readyWait > 0 || (U.resolveWith(K, [ct]), ct.fn.trigger && ct(K).trigger("ready").off("ready"))
                    }
                },
                isFunction: function(e) {
                    return "function" === ct.type(e)
                },
                isArray: Array.isArray || function(e) {
                    return "array" === ct.type(e)
                },
                isWindow: function(e) {
                    return null != e && e == e.window
                },
                isNumeric: function(e) {
                    return !isNaN(parseFloat(e)) && isFinite(e)
                },
                type: function(e) {
                    return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? et[at.call(e)] || "object" : typeof e
                },
                isPlainObject: function(e) {
                    var n;
                    if (!e || "object" !== ct.type(e) || e.nodeType || ct.isWindow(e)) return !1;
                    try {
                        if (e.constructor && !lt.call(e, "constructor") && !lt.call(e.constructor.prototype, "isPrototypeOf")) return !1
                    } catch (i) {
                        return !1
                    }
                    if (ct.support.ownLast)
                        for (n in e) return lt.call(e, n);
                    for (n in e);
                    return n === t || lt.call(e, n)
                },
                isEmptyObject: function(e) {
                    var t;
                    for (t in e) return !1;
                    return !0
                },
                error: function(e) {
                    throw Error(e)
                },
                parseHTML: function(e, t, n) {
                    if (!e || "string" != typeof e) return null;
                    "boolean" == typeof t && (n = t, t = !1), t = t || K;
                    var i = mt.exec(e),
                        s = !n && [];
                    return i ? [t.createElement(i[1])] : (i = ct.buildFragment([e], t, s), s && ct(s).remove(), ct.merge([], i.childNodes))
                },
                parseJSON: function(n) {
                    return e.JSON && e.JSON.parse ? e.JSON.parse(n) : null === n ? n : "string" == typeof n && (n = ct.trim(n), n && gt.test(n.replace(yt, "@").replace(bt, "]").replace(vt, ""))) ? Function("return " + n)() : (ct.error("Invalid JSON: " + n), t)
                },
                parseXML: function(n) {
                    var i, s;
                    if (!n || "string" != typeof n) return null;
                    try {
                        e.DOMParser ? (s = new DOMParser, i = s.parseFromString(n, "text/xml")) : (i = new ActiveXObject("Microsoft.XMLDOM"), i.async = "false", i.loadXML(n))
                    } catch (o) {
                        i = t
                    }
                    return i && i.documentElement && !i.getElementsByTagName("parsererror").length || ct.error("Invalid XML: " + n), i
                },
                noop: function() {},
                globalEval: function(t) {
                    t && ct.trim(t) && (e.execScript || function(t) {
                        e.eval.call(e, t)
                    })(t)
                },
                camelCase: function(e) {
                    return e.replace(xt, "ms-").replace(wt, Ct)
                },
                nodeName: function(e, t) {
                    return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
                },
                each: function(e, t, i) {
                    var s, o = 0,
                        r = e.length,
                        a = n(e);
                    if (i) {
                        if (a)
                            for (; r > o && (s = t.apply(e[o], i), s !== !1); o++);
                        else
                            for (o in e)
                                if (s = t.apply(e[o], i), s === !1) break
                    } else if (a)
                        for (; r > o && (s = t.call(e[o], o, e[o]), s !== !1); o++);
                    else
                        for (o in e)
                            if (s = t.call(e[o], o, e[o]), s === !1) break; return e
                },
                trim: ut && !ut.call("﻿ ") ? function(e) {
                    return null == e ? "" : ut.call(e)
                } : function(e) {
                    return null == e ? "" : (e + "").replace(pt, "")
                },
                makeArray: function(e, t) {
                    var i = t || [];
                    return null != e && (n(Object(e)) ? ct.merge(i, "string" == typeof e ? [e] : e) : st.call(i, e)), i
                },
                inArray: function(e, t, n) {
                    var i;
                    if (t) {
                        if (rt) return rt.call(t, e, n);
                        for (i = t.length, n = n ? 0 > n ? Math.max(0, i + n) : n : 0; i > n; n++)
                            if (n in t && t[n] === e) return n
                    }
                    return -1
                },
                merge: function(e, n) {
                    var i = n.length,
                        s = e.length,
                        o = 0;
                    if ("number" == typeof i)
                        for (; i > o; o++) e[s++] = n[o];
                    else
                        for (; n[o] !== t;) e[s++] = n[o++];
                    return e.length = s, e
                },
                grep: function(e, t, n) {
                    var i, s = [],
                        o = 0,
                        r = e.length;
                    for (n = !!n; r > o; o++) i = !!t(e[o], o), n !== i && s.push(e[o]);
                    return s
                },
                map: function(e, t, i) {
                    var s, o = 0,
                        r = e.length,
                        a = n(e),
                        l = [];
                    if (a)
                        for (; r > o; o++) s = t(e[o], o, i), null != s && (l[l.length] = s);
                    else
                        for (o in e) s = t(e[o], o, i), null != s && (l[l.length] = s);
                    return it.apply([], l)
                },
                guid: 1,
                proxy: function(e, n) {
                    var i, s, o;
                    return "string" == typeof n && (o = e[n], n = e, e = o), ct.isFunction(e) ? (i = ot.call(arguments, 2), s = function() {
                        return e.apply(n || this, i.concat(ot.call(arguments)))
                    }, s.guid = e.guid = e.guid || ct.guid++, s) : t
                },
                access: function(e, n, i, s, o, r, a) {
                    var l = 0,
                        u = e.length,
                        c = null == i;
                    if ("object" === ct.type(i)) {
                        o = !0;
                        for (l in i) ct.access(e, n, l, i[l], !0, r, a)
                    } else if (s !== t && (o = !0, ct.isFunction(s) || (a = !0), c && (a ? (n.call(e, s), n = null) : (c = n, n = function(e, t, n) {
                            return c.call(ct(e), n)
                        })), n))
                        for (; u > l; l++) n(e[l], i, a ? s : s.call(e[l], l, n(e[l], i)));
                    return o ? e : c ? n.call(e) : u ? n(e[0], i) : r
                },
                now: function() {
                    return (new Date).getTime()
                },
                swap: function(e, t, n, i) {
                    var s, o, r = {};
                    for (o in t) r[o] = e.style[o], e.style[o] = t[o];
                    s = n.apply(e, i || []);
                    for (o in t) e.style[o] = r[o];
                    return s
                }
            }), ct.ready.promise = function(t) {
                if (!U)
                    if (U = ct.Deferred(), "complete" === K.readyState) setTimeout(ct.ready);
                    else if (K.addEventListener) K.addEventListener("DOMContentLoaded", Tt, !1), e.addEventListener("load", Tt, !1);
                else {
                    K.attachEvent("onreadystatechange", Tt), e.attachEvent("onload", Tt);
                    var n = !1;
                    try {
                        n = null == e.frameElement && K.documentElement
                    } catch (i) {}
                    n && n.doScroll && function s() {
                        if (!ct.isReady) {
                            try {
                                n.doScroll("left")
                            } catch (e) {
                                return setTimeout(s, 50)
                            }
                            kt(), ct.ready()
                        }
                    }()
                }
                return U.promise(t)
            }, ct.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(e, t) {
                et["[object " + t + "]"] = t.toLowerCase()
            }), Q = ct(K),
            function(e, t) {
                function n(e, t, n, i) {
                    var s, o, r, a, l, u, c, d, f, m;
                    if ((t ? t.ownerDocument || t : z) !== L && N(t), t = t || L, n = n || [], !e || "string" != typeof e) return n;
                    if (1 !== (a = t.nodeType) && 9 !== a) return [];
                    if (M && !i) {
                        if (s = bt.exec(e))
                            if (r = s[1]) {
                                if (9 === a) {
                                    if (o = t.getElementById(r), !o || !o.parentNode) return n;
                                    if (o.id === r) return n.push(o), n
                                } else if (t.ownerDocument && (o = t.ownerDocument.getElementById(r)) && _(t, o) && o.id === r) return n.push(o), n
                            } else {
                                if (s[2]) return et.apply(n, t.getElementsByTagName(e)), n;
                                if ((r = s[3]) && T.getElementsByClassName && t.getElementsByClassName) return et.apply(n, t.getElementsByClassName(r)), n
                            }
                        if (T.qsa && (!B || !B.test(e))) {
                            if (d = c = H, f = t, m = 9 === a && e, 1 === a && "object" !== t.nodeName.toLowerCase()) {
                                for (u = h(e), (c = t.getAttribute("id")) ? d = c.replace(Ct, "\\$&") : t.setAttribute("id", d), d = "[id='" + d + "'] ", l = u.length; l--;) u[l] = d + p(u[l]);
                                f = pt.test(e) && t.parentNode || t, m = u.join(",")
                            }
                            if (m) try {
                                return et.apply(n, f.querySelectorAll(m)), n
                            } catch (g) {} finally {
                                c || t.removeAttribute("id")
                            }
                        }
                    }
                    return w(e.replace(ut, "$1"), t, n, i)
                }

                function i() {
                    function e(n, i) {
                        return t.push(n += " ") > S.cacheLength && delete e[t.shift()], e[n] = i
                    }
                    var t = [];
                    return e
                }

                function s(e) {
                    return e[H] = !0, e
                }

                function o(e) {
                    var t = L.createElement("div");
                    try {
                        return !!e(t)
                    } catch (n) {
                        return !1
                    } finally {
                        t.parentNode && t.parentNode.removeChild(t), t = null
                    }
                }

                function r(e, t) {
                    for (var n = e.split("|"), i = e.length; i--;) S.attrHandle[n[i]] = t
                }

                function a(e, t) {
                    var n = t && e,
                        i = n && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || X) - (~e.sourceIndex || X);
                    if (i) return i;
                    if (n)
                        for (; n = n.nextSibling;)
                            if (n === t) return -1;
                    return e ? 1 : -1
                }

                function l(e) {
                    return function(t) {
                        var n = t.nodeName.toLowerCase();
                        return "input" === n && t.type === e
                    }
                }

                function u(e) {
                    return function(t) {
                        var n = t.nodeName.toLowerCase();
                        return ("input" === n || "button" === n) && t.type === e
                    }
                }

                function c(e) {
                    return s(function(t) {
                        return t = +t, s(function(n, i) {
                            for (var s, o = e([], n.length, t), r = o.length; r--;) n[s = o[r]] && (n[s] = !(i[s] = n[s]))
                        })
                    })
                }

                function d() {}

                function h(e, t) {
                    var i, s, o, r, a, l, u, c = W[e + " "];
                    if (c) return t ? 0 : c.slice(0);
                    for (a = e, l = [], u = S.preFilter; a;) {
                        (!i || (s = dt.exec(a))) && (s && (a = a.slice(s[0].length) || a), l.push(o = [])), i = !1, (s = ht.exec(a)) && (i = s.shift(), o.push({
                            value: i,
                            type: s[0].replace(ut, " ")
                        }), a = a.slice(i.length));
                        for (r in S.filter) !(s = vt[r].exec(a)) || u[r] && !(s = u[r](s)) || (i = s.shift(), o.push({
                            value: i,
                            type: r,
                            matches: s
                        }), a = a.slice(i.length));
                        if (!i) break
                    }
                    return t ? a.length : a ? n.error(e) : W(e, l).slice(0)
                }

                function p(e) {
                    for (var t = 0, n = e.length, i = ""; n > t; t++) i += e[t].value;
                    return i
                }

                function f(e, t, n) {
                    var i = t.dir,
                        s = n && "parentNode" === i,
                        o = q++;
                    return t.first ? function(t, n, o) {
                        for (; t = t[i];)
                            if (1 === t.nodeType || s) return e(t, n, o)
                    } : function(t, n, r) {
                        var a, l, u, c = O + " " + o;
                        if (r) {
                            for (; t = t[i];)
                                if ((1 === t.nodeType || s) && e(t, n, r)) return !0
                        } else
                            for (; t = t[i];)
                                if (1 === t.nodeType || s)
                                    if (u = t[H] || (t[H] = {}), (l = u[i]) && l[0] === c) {
                                        if ((a = l[1]) === !0 || a === k) return a === !0
                                    } else if (l = u[i] = [c], l[1] = e(t, n, r) || k, l[1] === !0) return !0
                    }
                }

                function m(e) {
                    return e.length > 1 ? function(t, n, i) {
                        for (var s = e.length; s--;)
                            if (!e[s](t, n, i)) return !1;
                        return !0
                    } : e[0]
                }

                function g(e, t, n, i, s) {
                    for (var o, r = [], a = 0, l = e.length, u = null != t; l > a; a++)(o = e[a]) && (!n || n(o, i, s)) && (r.push(o), u && t.push(a));
                    return r
                }

                function v(e, t, n, i, o, r) {
                    return i && !i[H] && (i = v(i)), o && !o[H] && (o = v(o, r)), s(function(s, r, a, l) {
                        var u, c, d, h = [],
                            p = [],
                            f = r.length,
                            m = s || x(t || "*", a.nodeType ? [a] : a, []),
                            v = !e || !s && t ? m : g(m, h, e, a, l),
                            y = n ? o || (s ? e : f || i) ? [] : r : v;
                        if (n && n(v, y, a, l), i)
                            for (u = g(y, p), i(u, [], a, l), c = u.length; c--;)(d = u[c]) && (y[p[c]] = !(v[p[c]] = d));
                        if (s) {
                            if (o || e) {
                                if (o) {
                                    for (u = [], c = y.length; c--;)(d = y[c]) && u.push(v[c] = d);
                                    o(null, y = [], u, l)
                                }
                                for (c = y.length; c--;)(d = y[c]) && (u = o ? nt.call(s, d) : h[c]) > -1 && (s[u] = !(r[u] = d))
                            }
                        } else y = g(y === r ? y.splice(f, y.length) : y), o ? o(null, r, y, l) : et.apply(r, y)
                    })
                }

                function y(e) {
                    for (var t, n, i, s = e.length, o = S.relative[e[0].type], r = o || S.relative[" "], a = o ? 1 : 0, l = f(function(e) {
                            return e === t
                        }, r, !0), u = f(function(e) {
                            return nt.call(t, e) > -1
                        }, r, !0), c = [function(e, n, i) {
                            return !o && (i || n !== $) || ((t = n).nodeType ? l(e, n, i) : u(e, n, i))
                        }]; s > a; a++)
                        if (n = S.relative[e[a].type]) c = [f(m(c), n)];
                        else {
                            if (n = S.filter[e[a].type].apply(null, e[a].matches), n[H]) {
                                for (i = ++a; s > i && !S.relative[e[i].type]; i++);
                                return v(a > 1 && m(c), a > 1 && p(e.slice(0, a - 1).concat({
                                    value: " " === e[a - 2].type ? "*" : ""
                                })).replace(ut, "$1"), n, i > a && y(e.slice(a, i)), s > i && y(e = e.slice(i)), s > i && p(e))
                            }
                            c.push(n)
                        }
                    return m(c)
                }

                function b(e, t) {
                    var i = 0,
                        o = t.length > 0,
                        r = e.length > 0,
                        a = function(s, a, l, u, c) {
                            var d, h, p, f = [],
                                m = 0,
                                v = "0",
                                y = s && [],
                                b = null != c,
                                x = $,
                                w = s || r && S.find.TAG("*", c && a.parentNode || a),
                                C = O += null == x ? 1 : Math.random() || .1;
                            for (b && ($ = a !== L && a, k = i); null != (d = w[v]); v++) {
                                if (r && d) {
                                    for (h = 0; p = e[h++];)
                                        if (p(d, a, l)) {
                                            u.push(d);
                                            break
                                        }
                                    b && (O = C, k = ++i)
                                }
                                o && ((d = !p && d) && m--, s && y.push(d))
                            }
                            if (m += v, o && v !== m) {
                                for (h = 0; p = t[h++];) p(y, f, a, l);
                                if (s) {
                                    if (m > 0)
                                        for (; v--;) y[v] || f[v] || (f[v] = J.call(u));
                                    f = g(f)
                                }
                                et.apply(u, f), b && !s && f.length > 0 && m + t.length > 1 && n.uniqueSort(u)
                            }
                            return b && (O = C, $ = x), y
                        };
                    return o ? s(a) : a
                }

                function x(e, t, i) {
                    for (var s = 0, o = t.length; o > s; s++) n(e, t[s], i);
                    return i
                }

                function w(e, t, n, i) {
                    var s, o, r, a, l, u = h(e);
                    if (!i && 1 === u.length) {
                        if (o = u[0] = u[0].slice(0), o.length > 2 && "ID" === (r = o[0]).type && T.getById && 9 === t.nodeType && M && S.relative[o[1].type]) {
                            if (t = (S.find.ID(r.matches[0].replace(Tt, kt), t) || [])[0], !t) return n;
                            e = e.slice(o.shift().value.length)
                        }
                        for (s = vt.needsContext.test(e) ? 0 : o.length; s-- && (r = o[s], !S.relative[a = r.type]);)
                            if ((l = S.find[a]) && (i = l(r.matches[0].replace(Tt, kt), pt.test(o[0].type) && t.parentNode || t))) {
                                if (o.splice(s, 1), e = i.length && p(o), !e) return et.apply(n, i), n;
                                break
                            }
                    }
                    return E(e, u)(i, t, !M, n, pt.test(e)), n
                }
                var C, T, k, S, j, F, E, $, A, N, L, D, M, B, P, I, _, H = "sizzle" + -new Date,
                    z = e.document,
                    O = 0,
                    q = 0,
                    R = i(),
                    W = i(),
                    V = i(),
                    U = !1,
                    Q = function(e, t) {
                        return e === t ? (U = !0, 0) : 0
                    },
                    Y = typeof t,
                    X = 1 << 31,
                    K = {}.hasOwnProperty,
                    G = [],
                    J = G.pop,
                    Z = G.push,
                    et = G.push,
                    tt = G.slice,
                    nt = G.indexOf || function(e) {
                        for (var t = 0, n = this.length; n > t; t++)
                            if (this[t] === e) return t;
                        return -1
                    },
                    it = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
                    st = "[\\x20\\t\\r\\n\\f]",
                    ot = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
                    rt = ot.replace("w", "w#"),
                    at = "\\[" + st + "*(" + ot + ")" + st + "*(?:([*^$|!~]?=)" + st + "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + rt + ")|)|)" + st + "*\\]",
                    lt = ":(" + ot + ")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|" + at.replace(3, 8) + ")*)|.*)\\)|)",
                    ut = RegExp("^" + st + "+|((?:^|[^\\\\])(?:\\\\.)*)" + st + "+$", "g"),
                    dt = RegExp("^" + st + "*," + st + "*"),
                    ht = RegExp("^" + st + "*([>+~]|" + st + ")" + st + "*"),
                    pt = RegExp(st + "*[+~]"),
                    ft = RegExp("=" + st + "*([^\\]'\"]*)" + st + "*\\]", "g"),
                    mt = RegExp(lt),
                    gt = RegExp("^" + rt + "$"),
                    vt = {
                        ID: RegExp("^#(" + ot + ")"),
                        CLASS: RegExp("^\\.(" + ot + ")"),
                        TAG: RegExp("^(" + ot.replace("w", "w*") + ")"),
                        ATTR: RegExp("^" + at),
                        PSEUDO: RegExp("^" + lt),
                        CHILD: RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + st + "*(even|odd|(([+-]|)(\\d*)n|)" + st + "*(?:([+-]|)" + st + "*(\\d+)|))" + st + "*\\)|)", "i"),
                        bool: RegExp("^(?:" + it + ")$", "i"),
                        needsContext: RegExp("^" + st + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + st + "*((?:-\\d)?\\d*)" + st + "*\\)|)(?=[^-]|$)", "i")
                    },
                    yt = /^[^{]+\{\s*\[native \w/,
                    bt = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
                    xt = /^(?:input|select|textarea|button)$/i,
                    wt = /^h\d$/i,
                    Ct = /'|\\/g,
                    Tt = RegExp("\\\\([\\da-f]{1,6}" + st + "?|(" + st + ")|.)", "ig"),
                    kt = function(e, t, n) {
                        var i = "0x" + t - 65536;
                        return i !== i || n ? t : 0 > i ? String.fromCharCode(i + 65536) : String.fromCharCode(55296 | i >> 10, 56320 | 1023 & i)
                    };
                try {
                    et.apply(G = tt.call(z.childNodes), z.childNodes), G[z.childNodes.length].nodeType
                } catch (St) {
                    et = {
                        apply: G.length ? function(e, t) {
                            Z.apply(e, tt.call(t))
                        } : function(e, t) {
                            for (var n = e.length, i = 0; e[n++] = t[i++];);
                            e.length = n - 1
                        }
                    }
                }
                F = n.isXML = function(e) {
                    var t = e && (e.ownerDocument || e).documentElement;
                    return t ? "HTML" !== t.nodeName : !1
                }, T = n.support = {}, N = n.setDocument = function(e) {
                    var n = e ? e.ownerDocument || e : z,
                        i = n.defaultView;
                    return n !== L && 9 === n.nodeType && n.documentElement ? (L = n, D = n.documentElement, M = !F(n), i && i.attachEvent && i !== i.top && i.attachEvent("onbeforeunload", function() {
                        N()
                    }), T.attributes = o(function(e) {
                        return e.className = "i", !e.getAttribute("className")
                    }), T.getElementsByTagName = o(function(e) {
                        return e.appendChild(n.createComment("")), !e.getElementsByTagName("*").length
                    }), T.getElementsByClassName = o(function(e) {
                        return e.innerHTML = "<div class='a'></div><div class='a i'></div>", e.firstChild.className = "i", 2 === e.getElementsByClassName("i").length
                    }), T.getById = o(function(e) {
                        return D.appendChild(e).id = H, !n.getElementsByName || !n.getElementsByName(H).length
                    }), T.getById ? (S.find.ID = function(e, t) {
                        if (typeof t.getElementById !== Y && M) {
                            var n = t.getElementById(e);
                            return n && n.parentNode ? [n] : []
                        }
                    }, S.filter.ID = function(e) {
                        var t = e.replace(Tt, kt);
                        return function(e) {
                            return e.getAttribute("id") === t
                        }
                    }) : (delete S.find.ID, S.filter.ID = function(e) {
                        var t = e.replace(Tt, kt);
                        return function(e) {
                            var n = typeof e.getAttributeNode !== Y && e.getAttributeNode("id");
                            return n && n.value === t
                        }
                    }), S.find.TAG = T.getElementsByTagName ? function(e, n) {
                        return typeof n.getElementsByTagName !== Y ? n.getElementsByTagName(e) : t
                    } : function(e, t) {
                        var n, i = [],
                            s = 0,
                            o = t.getElementsByTagName(e);
                        if ("*" === e) {
                            for (; n = o[s++];) 1 === n.nodeType && i.push(n);
                            return i
                        }
                        return o
                    }, S.find.CLASS = T.getElementsByClassName && function(e, n) {
                        return typeof n.getElementsByClassName !== Y && M ? n.getElementsByClassName(e) : t
                    }, P = [], B = [], (T.qsa = yt.test(n.querySelectorAll)) && (o(function(e) {
                        e.innerHTML = "<select><option selected=''></option></select>", e.querySelectorAll("[selected]").length || B.push("\\[" + st + "*(?:value|" + it + ")"), e.querySelectorAll(":checked").length || B.push(":checked")
                    }), o(function(e) {
                        var t = n.createElement("input");
                        t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("t", ""), e.querySelectorAll("[t^='']").length && B.push("[*^$]=" + st + "*(?:''|\"\")"), e.querySelectorAll(":enabled").length || B.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), B.push(",.*:")
                    })), (T.matchesSelector = yt.test(I = D.webkitMatchesSelector || D.mozMatchesSelector || D.oMatchesSelector || D.msMatchesSelector)) && o(function(e) {
                        T.disconnectedMatch = I.call(e, "div"), I.call(e, "[s!='']:x"), P.push("!=", lt)
                    }), B = B.length && RegExp(B.join("|")), P = P.length && RegExp(P.join("|")), _ = yt.test(D.contains) || D.compareDocumentPosition ? function(e, t) {
                        var n = 9 === e.nodeType ? e.documentElement : e,
                            i = t && t.parentNode;
                        return e === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(i)))
                    } : function(e, t) {
                        if (t)
                            for (; t = t.parentNode;)
                                if (t === e) return !0;
                        return !1
                    }, Q = D.compareDocumentPosition ? function(e, t) {
                        if (e === t) return U = !0, 0;
                        var i = t.compareDocumentPosition && e.compareDocumentPosition && e.compareDocumentPosition(t);
                        return i ? 1 & i || !T.sortDetached && t.compareDocumentPosition(e) === i ? e === n || _(z, e) ? -1 : t === n || _(z, t) ? 1 : A ? nt.call(A, e) - nt.call(A, t) : 0 : 4 & i ? -1 : 1 : e.compareDocumentPosition ? -1 : 1
                    } : function(e, t) {
                        var i, s = 0,
                            o = e.parentNode,
                            r = t.parentNode,
                            l = [e],
                            u = [t];
                        if (e === t) return U = !0, 0;
                        if (!o || !r) return e === n ? -1 : t === n ? 1 : o ? -1 : r ? 1 : A ? nt.call(A, e) - nt.call(A, t) : 0;
                        if (o === r) return a(e, t);
                        for (i = e; i = i.parentNode;) l.unshift(i);
                        for (i = t; i = i.parentNode;) u.unshift(i);
                        for (; l[s] === u[s];) s++;
                        return s ? a(l[s], u[s]) : l[s] === z ? -1 : u[s] === z ? 1 : 0
                    }, n) : L
                }, n.matches = function(e, t) {
                    return n(e, null, null, t)
                }, n.matchesSelector = function(e, t) {
                    if ((e.ownerDocument || e) !== L && N(e), t = t.replace(ft, "='$1']"), !(!T.matchesSelector || !M || P && P.test(t) || B && B.test(t))) try {
                        var i = I.call(e, t);
                        if (i || T.disconnectedMatch || e.document && 11 !== e.document.nodeType) return i
                    } catch (s) {}
                    return n(t, L, null, [e]).length > 0
                }, n.contains = function(e, t) {
                    return (e.ownerDocument || e) !== L && N(e), _(e, t)
                }, n.attr = function(e, n) {
                    (e.ownerDocument || e) !== L && N(e);
                    var i = S.attrHandle[n.toLowerCase()],
                        s = i && K.call(S.attrHandle, n.toLowerCase()) ? i(e, n, !M) : t;
                    return s === t ? T.attributes || !M ? e.getAttribute(n) : (s = e.getAttributeNode(n)) && s.specified ? s.value : null : s
                }, n.error = function(e) {
                    throw Error("Syntax error, unrecognized expression: " + e)
                }, n.uniqueSort = function(e) {
                    var t, n = [],
                        i = 0,
                        s = 0;
                    if (U = !T.detectDuplicates, A = !T.sortStable && e.slice(0), e.sort(Q), U) {
                        for (; t = e[s++];) t === e[s] && (i = n.push(s));
                        for (; i--;) e.splice(n[i], 1)
                    }
                    return e
                }, j = n.getText = function(e) {
                    var t, n = "",
                        i = 0,
                        s = e.nodeType;
                    if (s) {
                        if (1 === s || 9 === s || 11 === s) {
                            if ("string" == typeof e.textContent) return e.textContent;
                            for (e = e.firstChild; e; e = e.nextSibling) n += j(e)
                        } else if (3 === s || 4 === s) return e.nodeValue
                    } else
                        for (; t = e[i]; i++) n += j(t);
                    return n
                }, S = n.selectors = {
                    cacheLength: 50,
                    createPseudo: s,
                    match: vt,
                    attrHandle: {},
                    find: {},
                    relative: {
                        ">": {
                            dir: "parentNode",
                            first: !0
                        },
                        " ": {
                            dir: "parentNode"
                        },
                        "+": {
                            dir: "previousSibling",
                            first: !0
                        },
                        "~": {
                            dir: "previousSibling"
                        }
                    },
                    preFilter: {
                        ATTR: function(e) {
                            return e[1] = e[1].replace(Tt, kt), e[3] = (e[4] || e[5] || "").replace(Tt, kt), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                        },
                        CHILD: function(e) {
                            return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || n.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && n.error(e[0]), e
                        },
                        PSEUDO: function(e) {
                            var n, i = !e[5] && e[2];
                            return vt.CHILD.test(e[0]) ? null : (e[3] && e[4] !== t ? e[2] = e[4] : i && mt.test(i) && (n = h(i, !0)) && (n = i.indexOf(")", i.length - n) - i.length) && (e[0] = e[0].slice(0, n), e[2] = i.slice(0, n)), e.slice(0, 3))
                        }
                    },
                    filter: {
                        TAG: function(e) {
                            var t = e.replace(Tt, kt).toLowerCase();
                            return "*" === e ? function() {
                                return !0
                            } : function(e) {
                                return e.nodeName && e.nodeName.toLowerCase() === t
                            }
                        },
                        CLASS: function(e) {
                            var t = R[e + " "];
                            return t || (t = RegExp("(^|" + st + ")" + e + "(" + st + "|$)")) && R(e, function(e) {
                                return t.test("string" == typeof e.className && e.className || typeof e.getAttribute !== Y && e.getAttribute("class") || "")
                            })
                        },
                        ATTR: function(e, t, i) {
                            return function(s) {
                                var o = n.attr(s, e);
                                return null == o ? "!=" === t : t ? (o += "", "=" === t ? o === i : "!=" === t ? o !== i : "^=" === t ? i && 0 === o.indexOf(i) : "*=" === t ? i && o.indexOf(i) > -1 : "$=" === t ? i && o.slice(-i.length) === i : "~=" === t ? (" " + o + " ").indexOf(i) > -1 : "|=" === t ? o === i || o.slice(0, i.length + 1) === i + "-" : !1) : !0
                            }
                        },
                        CHILD: function(e, t, n, i, s) {
                            var o = "nth" !== e.slice(0, 3),
                                r = "last" !== e.slice(-4),
                                a = "of-type" === t;
                            return 1 === i && 0 === s ? function(e) {
                                return !!e.parentNode
                            } : function(t, n, l) {
                                var u, c, d, h, p, f, m = o !== r ? "nextSibling" : "previousSibling",
                                    g = t.parentNode,
                                    v = a && t.nodeName.toLowerCase(),
                                    y = !l && !a;
                                if (g) {
                                    if (o) {
                                        for (; m;) {
                                            for (d = t; d = d[m];)
                                                if (a ? d.nodeName.toLowerCase() === v : 1 === d.nodeType) return !1;
                                            f = m = "only" === e && !f && "nextSibling"
                                        }
                                        return !0
                                    }
                                    if (f = [r ? g.firstChild : g.lastChild], r && y) {
                                        for (c = g[H] || (g[H] = {}), u = c[e] || [], p = u[0] === O && u[1], h = u[0] === O && u[2], d = p && g.childNodes[p]; d = ++p && d && d[m] || (h = p = 0) || f.pop();)
                                            if (1 === d.nodeType && ++h && d === t) {
                                                c[e] = [O, p, h];
                                                break
                                            }
                                    } else if (y && (u = (t[H] || (t[H] = {}))[e]) && u[0] === O) h = u[1];
                                    else
                                        for (;
                                            (d = ++p && d && d[m] || (h = p = 0) || f.pop()) && ((a ? d.nodeName.toLowerCase() !== v : 1 !== d.nodeType) || !++h || (y && ((d[H] || (d[H] = {}))[e] = [O, h]), d !== t)););
                                    return h -= s, h === i || 0 === h % i && h / i >= 0
                                }
                            }
                        },
                        PSEUDO: function(e, t) {
                            var i, o = S.pseudos[e] || S.setFilters[e.toLowerCase()] || n.error("unsupported pseudo: " + e);
                            return o[H] ? o(t) : o.length > 1 ? (i = [e, e, "", t], S.setFilters.hasOwnProperty(e.toLowerCase()) ? s(function(e, n) {
                                for (var i, s = o(e, t), r = s.length; r--;) i = nt.call(e, s[r]), e[i] = !(n[i] = s[r])
                            }) : function(e) {
                                return o(e, 0, i)
                            }) : o
                        }
                    },
                    pseudos: {
                        not: s(function(e) {
                            var t = [],
                                n = [],
                                i = E(e.replace(ut, "$1"));
                            return i[H] ? s(function(e, t, n, s) {
                                for (var o, r = i(e, null, s, []), a = e.length; a--;)(o = r[a]) && (e[a] = !(t[a] = o))
                            }) : function(e, s, o) {
                                return t[0] = e, i(t, null, o, n), !n.pop()
                            }
                        }),
                        has: s(function(e) {
                            return function(t) {
                                return n(e, t).length > 0
                            }
                        }),
                        contains: s(function(e) {
                            return function(t) {
                                return (t.textContent || t.innerText || j(t)).indexOf(e) > -1
                            }
                        }),
                        lang: s(function(e) {
                            return gt.test(e || "") || n.error("unsupported lang: " + e), e = e.replace(Tt, kt).toLowerCase(),
                                function(t) {
                                    var n;
                                    do
                                        if (n = M ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return n = n.toLowerCase(), n === e || 0 === n.indexOf(e + "-");
                                    while ((t = t.parentNode) && 1 === t.nodeType);
                                    return !1
                                }
                        }),
                        target: function(t) {
                            var n = e.location && e.location.hash;
                            return n && n.slice(1) === t.id
                        },
                        root: function(e) {
                            return e === D
                        },
                        focus: function(e) {
                            return e === L.activeElement && (!L.hasFocus || L.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                        },
                        enabled: function(e) {
                            return e.disabled === !1
                        },
                        disabled: function(e) {
                            return e.disabled === !0
                        },
                        checked: function(e) {
                            var t = e.nodeName.toLowerCase();
                            return "input" === t && !!e.checked || "option" === t && !!e.selected
                        },
                        selected: function(e) {
                            return e.parentNode && e.parentNode.selectedIndex, e.selected === !0
                        },
                        empty: function(e) {
                            for (e = e.firstChild; e; e = e.nextSibling)
                                if (e.nodeName > "@" || 3 === e.nodeType || 4 === e.nodeType) return !1;
                            return !0
                        },
                        parent: function(e) {
                            return !S.pseudos.empty(e)
                        },
                        header: function(e) {
                            return wt.test(e.nodeName)
                        },
                        input: function(e) {
                            return xt.test(e.nodeName)
                        },
                        button: function(e) {
                            var t = e.nodeName.toLowerCase();
                            return "input" === t && "button" === e.type || "button" === t
                        },
                        text: function(e) {
                            var t;
                            return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || t.toLowerCase() === e.type)
                        },
                        first: c(function() {
                            return [0]
                        }),
                        last: c(function(e, t) {
                            return [t - 1]
                        }),
                        eq: c(function(e, t, n) {
                            return [0 > n ? n + t : n]
                        }),
                        even: c(function(e, t) {
                            for (var n = 0; t > n; n += 2) e.push(n);
                            return e
                        }),
                        odd: c(function(e, t) {
                            for (var n = 1; t > n; n += 2) e.push(n);
                            return e
                        }),
                        lt: c(function(e, t, n) {
                            for (var i = 0 > n ? n + t : n; --i >= 0;) e.push(i);
                            return e
                        }),
                        gt: c(function(e, t, n) {
                            for (var i = 0 > n ? n + t : n; t > ++i;) e.push(i);
                            return e
                        })
                    }
                }, S.pseudos.nth = S.pseudos.eq;
                for (C in {
                        radio: !0,
                        checkbox: !0,
                        file: !0,
                        password: !0,
                        image: !0
                    }) S.pseudos[C] = l(C);
                for (C in {
                        submit: !0,
                        reset: !0
                    }) S.pseudos[C] = u(C);
                d.prototype = S.filters = S.pseudos, S.setFilters = new d, E = n.compile = function(e, t) {
                    var n, i = [],
                        s = [],
                        o = V[e + " "];
                    if (!o) {
                        for (t || (t = h(e)), n = t.length; n--;) o = y(t[n]), o[H] ? i.push(o) : s.push(o);
                        o = V(e, b(s, i))
                    }
                    return o
                }, T.sortStable = H.split("").sort(Q).join("") === H, T.detectDuplicates = U, N(), T.sortDetached = o(function(e) {
                    return 1 & e.compareDocumentPosition(L.createElement("div"))
                }), o(function(e) {
                    return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
                }) || r("type|href|height|width", function(e, n, i) {
                    return i ? t : e.getAttribute(n, "type" === n.toLowerCase() ? 1 : 2)
                }), T.attributes && o(function(e) {
                    return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
                }) || r("value", function(e, n, i) {
                    return i || "input" !== e.nodeName.toLowerCase() ? t : e.defaultValue
                }), o(function(e) {
                    return null == e.getAttribute("disabled")
                }) || r(it, function(e, n, i) {
                    var s;
                    return i ? t : (s = e.getAttributeNode(n)) && s.specified ? s.value : e[n] === !0 ? n.toLowerCase() : null
                }), ct.find = n, ct.expr = n.selectors, ct.expr[":"] = ct.expr.pseudos, ct.unique = n.uniqueSort, ct.text = n.getText, ct.isXMLDoc = n.isXML, ct.contains = n.contains
            }(e);
        var St = {};
        ct.Callbacks = function(e) {
            e = "string" == typeof e ? St[e] || i(e) : ct.extend({}, e);
            var n, s, o, r, a, l, u = [],
                c = !e.once && [],
                d = function(t) {
                    for (s = e.memory && t, o = !0, a = l || 0, l = 0, r = u.length, n = !0; u && r > a; a++)
                        if (u[a].apply(t[0], t[1]) === !1 && e.stopOnFalse) {
                            s = !1;
                            break
                        }
                    n = !1, u && (c ? c.length && d(c.shift()) : s ? u = [] : h.disable())
                },
                h = {
                    add: function() {
                        if (u) {
                            var t = u.length;
                            ! function i(t) {
                                ct.each(t, function(t, n) {
                                    var s = ct.type(n);
                                    "function" === s ? e.unique && h.has(n) || u.push(n) : n && n.length && "string" !== s && i(n)
                                })
                            }(arguments), n ? r = u.length : s && (l = t, d(s))
                        }
                        return this
                    },
                    remove: function() {
                        return u && ct.each(arguments, function(e, t) {
                            for (var i;
                                (i = ct.inArray(t, u, i)) > -1;) u.splice(i, 1), n && (r >= i && r--, a >= i && a--)
                        }), this
                    },
                    has: function(e) {
                        return e ? ct.inArray(e, u) > -1 : !(!u || !u.length)
                    },
                    empty: function() {
                        return u = [], r = 0, this
                    },
                    disable: function() {
                        return u = c = s = t, this
                    },
                    disabled: function() {
                        return !u
                    },
                    lock: function() {
                        return c = t, s || h.disable(), this
                    },
                    locked: function() {
                        return !c
                    },
                    fireWith: function(e, t) {
                        return !u || o && !c || (t = t || [], t = [e, t.slice ? t.slice() : t], n ? c.push(t) : d(t)), this
                    },
                    fire: function() {
                        return h.fireWith(this, arguments), this
                    },
                    fired: function() {
                        return !!o
                    }
                };
            return h
        }, ct.extend({
            Deferred: function(e) {
                var t = [
                        ["resolve", "done", ct.Callbacks("once memory"), "resolved"],
                        ["reject", "fail", ct.Callbacks("once memory"), "rejected"],
                        ["notify", "progress", ct.Callbacks("memory")]
                    ],
                    n = "pending",
                    i = {
                        state: function() {
                            return n
                        },
                        always: function() {
                            return s.done(arguments).fail(arguments), this
                        },
                        then: function() {
                            var e = arguments;
                            return ct.Deferred(function(n) {
                                ct.each(t, function(t, o) {
                                    var r = o[0],
                                        a = ct.isFunction(e[t]) && e[t];
                                    s[o[1]](function() {
                                        var e = a && a.apply(this, arguments);
                                        e && ct.isFunction(e.promise) ? e.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[r + "With"](this === i ? n.promise() : this, a ? [e] : arguments)
                                    })
                                }), e = null
                            }).promise()
                        },
                        promise: function(e) {
                            return null != e ? ct.extend(e, i) : i
                        }
                    },
                    s = {};
                return i.pipe = i.then, ct.each(t, function(e, o) {
                    var r = o[2],
                        a = o[3];
                    i[o[1]] = r.add, a && r.add(function() {
                        n = a
                    }, t[1 ^ e][2].disable, t[2][2].lock), s[o[0]] = function() {
                        return s[o[0] + "With"](this === s ? i : this, arguments), this
                    }, s[o[0] + "With"] = r.fireWith
                }), i.promise(s), e && e.call(s, s), s
            },
            when: function(e) {
                var t, n, i, s = 0,
                    o = ot.call(arguments),
                    r = o.length,
                    a = 1 !== r || e && ct.isFunction(e.promise) ? r : 0,
                    l = 1 === a ? e : ct.Deferred(),
                    u = function(e, n, i) {
                        return function(s) {
                            n[e] = this, i[e] = arguments.length > 1 ? ot.call(arguments) : s, i === t ? l.notifyWith(n, i) : --a || l.resolveWith(n, i)
                        }
                    };
                if (r > 1)
                    for (t = Array(r), n = Array(r), i = Array(r); r > s; s++) o[s] && ct.isFunction(o[s].promise) ? o[s].promise().done(u(s, i, o)).fail(l.reject).progress(u(s, n, t)) : --a;
                return a || l.resolveWith(i, o), l.promise()
            }
        }), ct.support = function(t) {
            var n, i, s, o, r, a, l, u, c, d = K.createElement("div");
            if (d.setAttribute("className", "t"), d.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", n = d.getElementsByTagName("*") || [], i = d.getElementsByTagName("a")[0], !i || !i.style || !n.length) return t;
            o = K.createElement("select"), a = o.appendChild(K.createElement("option")), s = d.getElementsByTagName("input")[0], i.style.cssText = "top:1px;float:left;opacity:.5", t.getSetAttribute = "t" !== d.className, t.leadingWhitespace = 3 === d.firstChild.nodeType, t.tbody = !d.getElementsByTagName("tbody").length, t.htmlSerialize = !!d.getElementsByTagName("link").length, t.style = /top/.test(i.getAttribute("style")), t.hrefNormalized = "/a" === i.getAttribute("href"), t.opacity = /^0.5/.test(i.style.opacity), t.cssFloat = !!i.style.cssFloat, t.checkOn = !!s.value, t.optSelected = a.selected, t.enctype = !!K.createElement("form").enctype, t.html5Clone = "<:nav></:nav>" !== K.createElement("nav").cloneNode(!0).outerHTML, t.inlineBlockNeedsLayout = !1, t.shrinkWrapBlocks = !1, t.pixelPosition = !1, t.deleteExpando = !0, t.noCloneEvent = !0, t.reliableMarginRight = !0, t.boxSizingReliable = !0, s.checked = !0, t.noCloneChecked = s.cloneNode(!0).checked, o.disabled = !0, t.optDisabled = !a.disabled;
            try {
                delete d.test
            } catch (h) {
                t.deleteExpando = !1
            }
            s = K.createElement("input"), s.setAttribute("value", ""), t.input = "" === s.getAttribute("value"), s.value = "t", s.setAttribute("type", "radio"), t.radioValue = "t" === s.value, s.setAttribute("checked", "t"), s.setAttribute("name", "t"), r = K.createDocumentFragment(), r.appendChild(s), t.appendChecked = s.checked, t.checkClone = r.cloneNode(!0).cloneNode(!0).lastChild.checked, d.attachEvent && (d.attachEvent("onclick", function() {
                t.noCloneEvent = !1
            }), d.cloneNode(!0).click());
            for (c in {
                    submit: !0,
                    change: !0,
                    focusin: !0
                }) d.setAttribute(l = "on" + c, "t"), t[c + "Bubbles"] = l in e || d.attributes[l].expando === !1;
            d.style.backgroundClip = "content-box", d.cloneNode(!0).style.backgroundClip = "", t.clearCloneStyle = "content-box" === d.style.backgroundClip;
            for (c in ct(t)) break;
            return t.ownLast = "0" !== c, ct(function() {
                var n, i, s, o = "padding:0;margin:0;border:0;display:block;box-sizing:content-box;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;",
                    r = K.getElementsByTagName("body")[0];
                r && (n = K.createElement("div"), n.style.cssText = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px", r.appendChild(n).appendChild(d), d.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", s = d.getElementsByTagName("td"), s[0].style.cssText = "padding:0;margin:0;border:0;display:none", u = 0 === s[0].offsetHeight, s[0].style.display = "", s[1].style.display = "none", t.reliableHiddenOffsets = u && 0 === s[0].offsetHeight, d.innerHTML = "", d.style.cssText = "box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;", ct.swap(r, null != r.style.zoom ? {
                    zoom: 1
                } : {}, function() {
                    t.boxSizing = 4 === d.offsetWidth
                }), e.getComputedStyle && (t.pixelPosition = "1%" !== (e.getComputedStyle(d, null) || {}).top, t.boxSizingReliable = "4px" === (e.getComputedStyle(d, null) || {
                    width: "4px"
                }).width, i = d.appendChild(K.createElement("div")), i.style.cssText = d.style.cssText = o, i.style.marginRight = i.style.width = "0", d.style.width = "1px", t.reliableMarginRight = !parseFloat((e.getComputedStyle(i, null) || {}).marginRight)), typeof d.style.zoom !== Y && (d.innerHTML = "", d.style.cssText = o + "width:1px;padding:1px;display:inline;zoom:1", t.inlineBlockNeedsLayout = 3 === d.offsetWidth, d.style.display = "block", d.innerHTML = "<div></div>", d.firstChild.style.width = "5px", t.shrinkWrapBlocks = 3 !== d.offsetWidth, t.inlineBlockNeedsLayout && (r.style.zoom = 1)), r.removeChild(n), n = d = s = i = null)
            }), n = o = r = a = i = s = null, t
        }({});
        var jt = /(?:\{[\s\S]*\}|\[[\s\S]*\])$/,
            Ft = /([A-Z])/g;
        ct.extend({
            cache: {},
            noData: {
                applet: !0,
                embed: !0,
                object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
            },
            hasData: function(e) {
                return e = e.nodeType ? ct.cache[e[ct.expando]] : e[ct.expando], !!e && !a(e)
            },
            data: function(e, t, n) {
                return s(e, t, n)
            },
            removeData: function(e, t) {
                return o(e, t)
            },
            _data: function(e, t, n) {
                return s(e, t, n, !0)
            },
            _removeData: function(e, t) {
                return o(e, t, !0)
            },
            acceptData: function(e) {
                if (e.nodeType && 1 !== e.nodeType && 9 !== e.nodeType) return !1;
                var t = e.nodeName && ct.noData[e.nodeName.toLowerCase()];
                return !t || t !== !0 && e.getAttribute("classid") === t
            }
        }), ct.fn.extend({
            data: function(e, n) {
                var i, s, o = null,
                    a = 0,
                    l = this[0];
                if (e === t) {
                    if (this.length && (o = ct.data(l), 1 === l.nodeType && !ct._data(l, "parsedAttrs"))) {
                        for (i = l.attributes; i.length > a; a++) s = i[a].name, 0 === s.indexOf("data-") && (s = ct.camelCase(s.slice(5)), r(l, s, o[s]));
                        ct._data(l, "parsedAttrs", !0)
                    }
                    return o
                }
                return "object" == typeof e ? this.each(function() {
                    ct.data(this, e)
                }) : arguments.length > 1 ? this.each(function() {
                    ct.data(this, e, n)
                }) : l ? r(l, e, ct.data(l, e)) : null
            },
            removeData: function(e) {
                return this.each(function() {
                    ct.removeData(this, e)
                })
            }
        }), ct.extend({
            queue: function(e, n, i) {
                var s;
                return e ? (n = (n || "fx") + "queue", s = ct._data(e, n), i && (!s || ct.isArray(i) ? s = ct._data(e, n, ct.makeArray(i)) : s.push(i)), s || []) : t
            },
            dequeue: function(e, t) {
                t = t || "fx";
                var n = ct.queue(e, t),
                    i = n.length,
                    s = n.shift(),
                    o = ct._queueHooks(e, t),
                    r = function() {
                        ct.dequeue(e, t)
                    };
                "inprogress" === s && (s = n.shift(), i--), s && ("fx" === t && n.unshift("inprogress"), delete o.stop, s.call(e, r, o)), !i && o && o.empty.fire()
            },
            _queueHooks: function(e, t) {
                var n = t + "queueHooks";
                return ct._data(e, n) || ct._data(e, n, {
                    empty: ct.Callbacks("once memory").add(function() {
                        ct._removeData(e, t + "queue"), ct._removeData(e, n)
                    })
                })
            }
        }), ct.fn.extend({
            queue: function(e, n) {
                var i = 2;
                return "string" != typeof e && (n = e, e = "fx", i--), i > arguments.length ? ct.queue(this[0], e) : n === t ? this : this.each(function() {
                    var t = ct.queue(this, e, n);
                    ct._queueHooks(this, e), "fx" === e && "inprogress" !== t[0] && ct.dequeue(this, e)
                })
            },
            dequeue: function(e) {
                return this.each(function() {
                    ct.dequeue(this, e)
                })
            },
            delay: function(e, t) {
                return e = ct.fx ? ct.fx.speeds[e] || e : e, t = t || "fx", this.queue(t, function(t, n) {
                    var i = setTimeout(t, e);
                    n.stop = function() {
                        clearTimeout(i)
                    }
                })
            },
            clearQueue: function(e) {
                return this.queue(e || "fx", [])
            },
            promise: function(e, n) {
                var i, s = 1,
                    o = ct.Deferred(),
                    r = this,
                    a = this.length,
                    l = function() {
                        --s || o.resolveWith(r, [r])
                    };
                for ("string" != typeof e && (n = e, e = t), e = e || "fx"; a--;) i = ct._data(r[a], e + "queueHooks"), i && i.empty && (s++, i.empty.add(l));
                return l(), o.promise(n)
            }
        });
        var Et, $t, At = /[\t\r\n\f]/g,
            Nt = /\r/g,
            Lt = /^(?:input|select|textarea|button|object)$/i,
            Dt = /^(?:a|area)$/i,
            Mt = /^(?:checked|selected)$/i,
            Bt = ct.support.getSetAttribute,
            Pt = ct.support.input;
        ct.fn.extend({
            attr: function(e, t) {
                return ct.access(this, ct.attr, e, t, arguments.length > 1)
            },
            removeAttr: function(e) {
                return this.each(function() {
                    ct.removeAttr(this, e)
                })
            },
            prop: function(e, t) {
                return ct.access(this, ct.prop, e, t, arguments.length > 1)
            },
            removeProp: function(e) {
                return e = ct.propFix[e] || e, this.each(function() {
                    try {
                        this[e] = t, delete this[e]
                    } catch (n) {}
                })
            },
            addClass: function(e) {
                var t, n, i, s, o, r = 0,
                    a = this.length,
                    l = "string" == typeof e && e;
                if (ct.isFunction(e)) return this.each(function(t) {
                    ct(this).addClass(e.call(this, t, this.className))
                });
                if (l)
                    for (t = (e || "").match(ht) || []; a > r; r++)
                        if (n = this[r], i = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(At, " ") : " ")) {
                            for (o = 0; s = t[o++];) 0 > i.indexOf(" " + s + " ") && (i += s + " ");
                            n.className = ct.trim(i)
                        }
                return this
            },
            removeClass: function(e) {
                var t, n, i, s, o, r = 0,
                    a = this.length,
                    l = 0 === arguments.length || "string" == typeof e && e;
                if (ct.isFunction(e)) return this.each(function(t) {
                    ct(this).removeClass(e.call(this, t, this.className))
                });
                if (l)
                    for (t = (e || "").match(ht) || []; a > r; r++)
                        if (n = this[r], i = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(At, " ") : "")) {
                            for (o = 0; s = t[o++];)
                                for (; i.indexOf(" " + s + " ") >= 0;) i = i.replace(" " + s + " ", " ");
                            n.className = e ? ct.trim(i) : ""
                        }
                return this
            },
            toggleClass: function(e, t) {
                var n = typeof e;
                return "boolean" == typeof t && "string" === n ? t ? this.addClass(e) : this.removeClass(e) : ct.isFunction(e) ? this.each(function(n) {
                    ct(this).toggleClass(e.call(this, n, this.className, t), t)
                }) : this.each(function() {
                    if ("string" === n)
                        for (var t, i = 0, s = ct(this), o = e.match(ht) || []; t = o[i++];) s.hasClass(t) ? s.removeClass(t) : s.addClass(t);
                    else(n === Y || "boolean" === n) && (this.className && ct._data(this, "__className__", this.className), this.className = this.className || e === !1 ? "" : ct._data(this, "__className__") || "")
                })
            },
            hasClass: function(e) {
                for (var t = " " + e + " ", n = 0, i = this.length; i > n; n++)
                    if (1 === this[n].nodeType && (" " + this[n].className + " ").replace(At, " ").indexOf(t) >= 0) return !0;
                return !1
            },
            val: function(e) {
                var n, i, s, o = this[0];
                return arguments.length ? (s = ct.isFunction(e), this.each(function(n) {
                    var o;
                    1 === this.nodeType && (o = s ? e.call(this, n, ct(this).val()) : e, null == o ? o = "" : "number" == typeof o ? o += "" : ct.isArray(o) && (o = ct.map(o, function(e) {
                        return null == e ? "" : e + ""
                    })), i = ct.valHooks[this.type] || ct.valHooks[this.nodeName.toLowerCase()], i && "set" in i && i.set(this, o, "value") !== t || (this.value = o))
                })) : o ? (i = ct.valHooks[o.type] || ct.valHooks[o.nodeName.toLowerCase()], i && "get" in i && (n = i.get(o, "value")) !== t ? n : (n = o.value, "string" == typeof n ? n.replace(Nt, "") : null == n ? "" : n)) : void 0
            }
        }), ct.extend({
            valHooks: {
                option: {
                    get: function(e) {
                        var t = ct.find.attr(e, "value");
                        return null != t ? t : e.text
                    }
                },
                select: {
                    get: function(e) {
                        for (var t, n, i = e.options, s = e.selectedIndex, o = "select-one" === e.type || 0 > s, r = o ? null : [], a = o ? s + 1 : i.length, l = 0 > s ? a : o ? s : 0; a > l; l++)
                            if (n = i[l], !(!n.selected && l !== s || (ct.support.optDisabled ? n.disabled : null !== n.getAttribute("disabled")) || n.parentNode.disabled && ct.nodeName(n.parentNode, "optgroup"))) {
                                if (t = ct(n).val(), o) return t;
                                r.push(t)
                            }
                        return r
                    },
                    set: function(e, t) {
                        for (var n, i, s = e.options, o = ct.makeArray(t), r = s.length; r--;) i = s[r], (i.selected = ct.inArray(ct(i).val(), o) >= 0) && (n = !0);
                        return n || (e.selectedIndex = -1), o
                    }
                }
            },
            attr: function(e, n, i) {
                var s, o, r = e.nodeType;
                return e && 3 !== r && 8 !== r && 2 !== r ? typeof e.getAttribute === Y ? ct.prop(e, n, i) : (1 === r && ct.isXMLDoc(e) || (n = n.toLowerCase(), s = ct.attrHooks[n] || (ct.expr.match.bool.test(n) ? $t : Et)), i === t ? s && "get" in s && null !== (o = s.get(e, n)) ? o : (o = ct.find.attr(e, n), null == o ? t : o) : null !== i ? s && "set" in s && (o = s.set(e, i, n)) !== t ? o : (e.setAttribute(n, i + ""), i) : (ct.removeAttr(e, n), t)) : void 0
            },
            removeAttr: function(e, t) {
                var n, i, s = 0,
                    o = t && t.match(ht);
                if (o && 1 === e.nodeType)
                    for (; n = o[s++];) i = ct.propFix[n] || n, ct.expr.match.bool.test(n) ? Pt && Bt || !Mt.test(n) ? e[i] = !1 : e[ct.camelCase("default-" + n)] = e[i] = !1 : ct.attr(e, n, ""), e.removeAttribute(Bt ? n : i)
            },
            attrHooks: {
                type: {
                    set: function(e, t) {
                        if (!ct.support.radioValue && "radio" === t && ct.nodeName(e, "input")) {
                            var n = e.value;
                            return e.setAttribute("type", t), n && (e.value = n), t
                        }
                    }
                }
            },
            propFix: {
                "for": "htmlFor",
                "class": "className"
            },
            prop: function(e, n, i) {
                var s, o, r, a = e.nodeType;
                return e && 3 !== a && 8 !== a && 2 !== a ? (r = 1 !== a || !ct.isXMLDoc(e), r && (n = ct.propFix[n] || n, o = ct.propHooks[n]), i !== t ? o && "set" in o && (s = o.set(e, i, n)) !== t ? s : e[n] = i : o && "get" in o && null !== (s = o.get(e, n)) ? s : e[n]) : void 0
            },
            propHooks: {
                tabIndex: {
                    get: function(e) {
                        var t = ct.find.attr(e, "tabindex");
                        return t ? parseInt(t, 10) : Lt.test(e.nodeName) || Dt.test(e.nodeName) && e.href ? 0 : -1
                    }
                }
            }
        }), $t = {
            set: function(e, t, n) {
                return t === !1 ? ct.removeAttr(e, n) : Pt && Bt || !Mt.test(n) ? e.setAttribute(!Bt && ct.propFix[n] || n, n) : e[ct.camelCase("default-" + n)] = e[n] = !0, n
            }
        }, ct.each(ct.expr.match.bool.source.match(/\w+/g), function(e, n) {
            var i = ct.expr.attrHandle[n] || ct.find.attr;
            ct.expr.attrHandle[n] = Pt && Bt || !Mt.test(n) ? function(e, n, s) {
                var o = ct.expr.attrHandle[n],
                    r = s ? t : (ct.expr.attrHandle[n] = t) != i(e, n, s) ? n.toLowerCase() : null;
                return ct.expr.attrHandle[n] = o, r
            } : function(e, n, i) {
                return i ? t : e[ct.camelCase("default-" + n)] ? n.toLowerCase() : null
            }
        }), Pt && Bt || (ct.attrHooks.value = {
            set: function(e, n, i) {
                return ct.nodeName(e, "input") ? (e.defaultValue = n, t) : Et && Et.set(e, n, i)
            }
        }), Bt || (Et = {
            set: function(e, n, i) {
                var s = e.getAttributeNode(i);
                return s || e.setAttributeNode(s = e.ownerDocument.createAttribute(i)), s.value = n += "", "value" === i || n === e.getAttribute(i) ? n : t
            }
        }, ct.expr.attrHandle.id = ct.expr.attrHandle.name = ct.expr.attrHandle.coords = function(e, n, i) {
            var s;
            return i ? t : (s = e.getAttributeNode(n)) && "" !== s.value ? s.value : null
        }, ct.valHooks.button = {
            get: function(e, n) {
                var i = e.getAttributeNode(n);
                return i && i.specified ? i.value : t
            },
            set: Et.set
        }, ct.attrHooks.contenteditable = {
            set: function(e, t, n) {
                Et.set(e, "" === t ? !1 : t, n)
            }
        }, ct.each(["width", "height"], function(e, n) {
            ct.attrHooks[n] = {
                set: function(e, i) {
                    return "" === i ? (e.setAttribute(n, "auto"), i) : t
                }
            }
        })), ct.support.hrefNormalized || ct.each(["href", "src"], function(e, t) {
            ct.propHooks[t] = {
                get: function(e) {
                    return e.getAttribute(t, 4)
                }
            }
        }), ct.support.style || (ct.attrHooks.style = {
            get: function(e) {
                return e.style.cssText || t
            },
            set: function(e, t) {
                return e.style.cssText = t + ""
            }
        }), ct.support.optSelected || (ct.propHooks.selected = {
            get: function(e) {
                var t = e.parentNode;
                return t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex), null
            }
        }), ct.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
            ct.propFix[this.toLowerCase()] = this
        }), ct.support.enctype || (ct.propFix.enctype = "encoding"), ct.each(["radio", "checkbox"], function() {
            ct.valHooks[this] = {
                set: function(e, n) {
                    return ct.isArray(n) ? e.checked = ct.inArray(ct(e).val(), n) >= 0 : t
                }
            }, ct.support.checkOn || (ct.valHooks[this].get = function(e) {
                return null === e.getAttribute("value") ? "on" : e.value
            })
        });
        var It = /^(?:input|select|textarea)$/i,
            _t = /^key/,
            Ht = /^(?:mouse|contextmenu)|click/,
            zt = /^(?:focusinfocus|focusoutblur)$/,
            Ot = /^([^.]*)(?:\.(.+)|)$/;
        ct.event = {
            global: {},
            add: function(e, n, i, s, o) {
                var r, a, l, u, c, d, h, p, f, m, g, v = ct._data(e);
                if (v) {
                    for (i.handler && (u = i, i = u.handler, o = u.selector), i.guid || (i.guid = ct.guid++), (a = v.events) || (a = v.events = {}), (d = v.handle) || (d = v.handle = function(e) {
                            return typeof ct === Y || e && ct.event.triggered === e.type ? t : ct.event.dispatch.apply(d.elem, arguments)
                        }, d.elem = e), n = (n || "").match(ht) || [""], l = n.length; l--;) r = Ot.exec(n[l]) || [], f = g = r[1], m = (r[2] || "").split(".").sort(), f && (c = ct.event.special[f] || {}, f = (o ? c.delegateType : c.bindType) || f, c = ct.event.special[f] || {}, h = ct.extend({
                        type: f,
                        origType: g,
                        data: s,
                        handler: i,
                        guid: i.guid,
                        selector: o,
                        needsContext: o && ct.expr.match.needsContext.test(o),
                        namespace: m.join(".")
                    }, u), (p = a[f]) || (p = a[f] = [], p.delegateCount = 0, c.setup && c.setup.call(e, s, m, d) !== !1 || (e.addEventListener ? e.addEventListener(f, d, !1) : e.attachEvent && e.attachEvent("on" + f, d))), c.add && (c.add.call(e, h), h.handler.guid || (h.handler.guid = i.guid)), o ? p.splice(p.delegateCount++, 0, h) : p.push(h), ct.event.global[f] = !0);
                    e = null
                }
            },
            remove: function(e, t, n, i, s) {
                var o, r, a, l, u, c, d, h, p, f, m, g = ct.hasData(e) && ct._data(e);
                if (g && (c = g.events)) {
                    for (t = (t || "").match(ht) || [""], u = t.length; u--;)
                        if (a = Ot.exec(t[u]) || [], p = m = a[1], f = (a[2] || "").split(".").sort(), p) {
                            for (d = ct.event.special[p] || {}, p = (i ? d.delegateType : d.bindType) || p, h = c[p] || [], a = a[2] && RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)"), l = o = h.length; o--;) r = h[o], !s && m !== r.origType || n && n.guid !== r.guid || a && !a.test(r.namespace) || i && i !== r.selector && ("**" !== i || !r.selector) || (h.splice(o, 1), r.selector && h.delegateCount--, d.remove && d.remove.call(e, r));
                            l && !h.length && (d.teardown && d.teardown.call(e, f, g.handle) !== !1 || ct.removeEvent(e, p, g.handle), delete c[p])
                        } else
                            for (p in c) ct.event.remove(e, p + t[u], n, i, !0);
                    ct.isEmptyObject(c) && (delete g.handle, ct._removeData(e, "events"))
                }
            },
            trigger: function(n, i, s, o) {
                var r, a, l, u, c, d, h, p = [s || K],
                    f = lt.call(n, "type") ? n.type : n,
                    m = lt.call(n, "namespace") ? n.namespace.split(".") : [];
                if (l = d = s = s || K, 3 !== s.nodeType && 8 !== s.nodeType && !zt.test(f + ct.event.triggered) && (f.indexOf(".") >= 0 && (m = f.split("."), f = m.shift(), m.sort()), a = 0 > f.indexOf(":") && "on" + f, n = n[ct.expando] ? n : new ct.Event(f, "object" == typeof n && n), n.isTrigger = o ? 2 : 3, n.namespace = m.join("."), n.namespace_re = n.namespace ? RegExp("(^|\\.)" + m.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, n.result = t, n.target || (n.target = s), i = null == i ? [n] : ct.makeArray(i, [n]), c = ct.event.special[f] || {}, o || !c.trigger || c.trigger.apply(s, i) !== !1)) {
                    if (!o && !c.noBubble && !ct.isWindow(s)) {
                        for (u = c.delegateType || f, zt.test(u + f) || (l = l.parentNode); l; l = l.parentNode) p.push(l), d = l;
                        d === (s.ownerDocument || K) && p.push(d.defaultView || d.parentWindow || e)
                    }
                    for (h = 0;
                        (l = p[h++]) && !n.isPropagationStopped();) n.type = h > 1 ? u : c.bindType || f, r = (ct._data(l, "events") || {})[n.type] && ct._data(l, "handle"), r && r.apply(l, i), r = a && l[a], r && ct.acceptData(l) && r.apply && r.apply(l, i) === !1 && n.preventDefault();
                    if (n.type = f, !o && !n.isDefaultPrevented() && (!c._default || c._default.apply(p.pop(), i) === !1) && ct.acceptData(s) && a && s[f] && !ct.isWindow(s)) {
                        d = s[a], d && (s[a] = null), ct.event.triggered = f;
                        try {
                            s[f]()
                        } catch (g) {}
                        ct.event.triggered = t, d && (s[a] = d)
                    }
                    return n.result
                }
            },
            dispatch: function(e) {
                e = ct.event.fix(e);
                var n, i, s, o, r, a = [],
                    l = ot.call(arguments),
                    u = (ct._data(this, "events") || {})[e.type] || [],
                    c = ct.event.special[e.type] || {};
                if (l[0] = e, e.delegateTarget = this, !c.preDispatch || c.preDispatch.call(this, e) !== !1) {
                    for (a = ct.event.handlers.call(this, e, u), n = 0;
                        (o = a[n++]) && !e.isPropagationStopped();)
                        for (e.currentTarget = o.elem, r = 0;
                            (s = o.handlers[r++]) && !e.isImmediatePropagationStopped();)(!e.namespace_re || e.namespace_re.test(s.namespace)) && (e.handleObj = s, e.data = s.data, i = ((ct.event.special[s.origType] || {}).handle || s.handler).apply(o.elem, l), i !== t && (e.result = i) === !1 && (e.preventDefault(), e.stopPropagation()));
                    return c.postDispatch && c.postDispatch.call(this, e), e.result
                }
            },
            handlers: function(e, n) {
                var i, s, o, r, a = [],
                    l = n.delegateCount,
                    u = e.target;
                if (l && u.nodeType && (!e.button || "click" !== e.type))
                    for (; u != this; u = u.parentNode || this)
                        if (1 === u.nodeType && (u.disabled !== !0 || "click" !== e.type)) {
                            for (o = [], r = 0; l > r; r++) s = n[r], i = s.selector + " ", o[i] === t && (o[i] = s.needsContext ? ct(i, this).index(u) >= 0 : ct.find(i, this, null, [u]).length), o[i] && o.push(s);
                            o.length && a.push({
                                elem: u,
                                handlers: o
                            })
                        }
                return n.length > l && a.push({
                    elem: this,
                    handlers: n.slice(l)
                }), a
            },
            fix: function(e) {
                if (e[ct.expando]) return e;
                var t, n, i, s = e.type,
                    o = e,
                    r = this.fixHooks[s];
                for (r || (this.fixHooks[s] = r = Ht.test(s) ? this.mouseHooks : _t.test(s) ? this.keyHooks : {}), i = r.props ? this.props.concat(r.props) : this.props, e = new ct.Event(o), t = i.length; t--;) n = i[t], e[n] = o[n];
                return e.target || (e.target = o.srcElement || K), 3 === e.target.nodeType && (e.target = e.target.parentNode), e.metaKey = !!e.metaKey, r.filter ? r.filter(e, o) : e
            },
            props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
            fixHooks: {},
            keyHooks: {
                props: "char charCode key keyCode".split(" "),
                filter: function(e, t) {
                    return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode), e
                }
            },
            mouseHooks: {
                props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
                filter: function(e, n) {
                    var i, s, o, r = n.button,
                        a = n.fromElement;
                    return null == e.pageX && null != n.clientX && (s = e.target.ownerDocument || K, o = s.documentElement, i = s.body, e.pageX = n.clientX + (o && o.scrollLeft || i && i.scrollLeft || 0) - (o && o.clientLeft || i && i.clientLeft || 0), e.pageY = n.clientY + (o && o.scrollTop || i && i.scrollTop || 0) - (o && o.clientTop || i && i.clientTop || 0)), !e.relatedTarget && a && (e.relatedTarget = a === e.target ? n.toElement : a), e.which || r === t || (e.which = 1 & r ? 1 : 2 & r ? 3 : 4 & r ? 2 : 0), e
                }
            },
            special: {
                load: {
                    noBubble: !0
                },
                focus: {
                    trigger: function() {
                        if (this !== c() && this.focus) try {
                            return this.focus(), !1
                        } catch (e) {}
                    },
                    delegateType: "focusin"
                },
                blur: {
                    trigger: function() {
                        return this === c() && this.blur ? (this.blur(), !1) : t
                    },
                    delegateType: "focusout"
                },
                click: {
                    trigger: function() {
                        return ct.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(), !1) : t
                    },
                    _default: function(e) {
                        return ct.nodeName(e.target, "a")
                    }
                },
                beforeunload: {
                    postDispatch: function(e) {
                        e.result !== t && (e.originalEvent.returnValue = e.result)
                    }
                }
            },
            simulate: function(e, t, n, i) {
                var s = ct.extend(new ct.Event, n, {
                    type: e,
                    isSimulated: !0,
                    originalEvent: {}
                });
                i ? ct.event.trigger(s, null, t) : ct.event.dispatch.call(t, s), s.isDefaultPrevented() && n.preventDefault()
            }
        }, ct.removeEvent = K.removeEventListener ? function(e, t, n) {
            e.removeEventListener && e.removeEventListener(t, n, !1)
        } : function(e, t, n) {
            var i = "on" + t;
            e.detachEvent && (typeof e[i] === Y && (e[i] = null), e.detachEvent(i, n))
        }, ct.Event = function(e, n) {
            return this instanceof ct.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || e.returnValue === !1 || e.getPreventDefault && e.getPreventDefault() ? l : u) : this.type = e, n && ct.extend(this, n), this.timeStamp = e && e.timeStamp || ct.now(), this[ct.expando] = !0, t) : new ct.Event(e, n)
        }, ct.Event.prototype = {
            isDefaultPrevented: u,
            isPropagationStopped: u,
            isImmediatePropagationStopped: u,
            preventDefault: function() {
                var e = this.originalEvent;
                this.isDefaultPrevented = l, e && (e.preventDefault ? e.preventDefault() : e.returnValue = !1)
            },
            stopPropagation: function() {
                var e = this.originalEvent;
                this.isPropagationStopped = l, e && (e.stopPropagation && e.stopPropagation(), e.cancelBubble = !0)
            },
            stopImmediatePropagation: function() {
                this.isImmediatePropagationStopped = l, this.stopPropagation()
            }
        }, ct.each({
            mouseenter: "mouseover",
            mouseleave: "mouseout"
        }, function(e, t) {
            ct.event.special[e] = {
                delegateType: t,
                bindType: t,
                handle: function(e) {
                    var n, i = this,
                        s = e.relatedTarget,
                        o = e.handleObj;
                    return (!s || s !== i && !ct.contains(i, s)) && (e.type = o.origType, n = o.handler.apply(this, arguments), e.type = t), n
                }
            }
        }), ct.support.submitBubbles || (ct.event.special.submit = {
            setup: function() {
                return ct.nodeName(this, "form") ? !1 : (ct.event.add(this, "click._submit keypress._submit", function(e) {
                    var n = e.target,
                        i = ct.nodeName(n, "input") || ct.nodeName(n, "button") ? n.form : t;
                    i && !ct._data(i, "submitBubbles") && (ct.event.add(i, "submit._submit", function(e) {
                        e._submit_bubble = !0
                    }), ct._data(i, "submitBubbles", !0))
                }), t)
            },
            postDispatch: function(e) {
                e._submit_bubble && (delete e._submit_bubble, this.parentNode && !e.isTrigger && ct.event.simulate("submit", this.parentNode, e, !0))
            },
            teardown: function() {
                return ct.nodeName(this, "form") ? !1 : (ct.event.remove(this, "._submit"), t)
            }
        }), ct.support.changeBubbles || (ct.event.special.change = {
            setup: function() {
                return It.test(this.nodeName) ? (("checkbox" === this.type || "radio" === this.type) && (ct.event.add(this, "propertychange._change", function(e) {
                    "checked" === e.originalEvent.propertyName && (this._just_changed = !0)
                }), ct.event.add(this, "click._change", function(e) {
                    this._just_changed && !e.isTrigger && (this._just_changed = !1), ct.event.simulate("change", this, e, !0)
                })), !1) : (ct.event.add(this, "beforeactivate._change", function(e) {
                    var t = e.target;
                    It.test(t.nodeName) && !ct._data(t, "changeBubbles") && (ct.event.add(t, "change._change", function(e) {
                        !this.parentNode || e.isSimulated || e.isTrigger || ct.event.simulate("change", this.parentNode, e, !0)
                    }), ct._data(t, "changeBubbles", !0))
                }), t)
            },
            handle: function(e) {
                var n = e.target;
                return this !== n || e.isSimulated || e.isTrigger || "radio" !== n.type && "checkbox" !== n.type ? e.handleObj.handler.apply(this, arguments) : t
            },
            teardown: function() {
                return ct.event.remove(this, "._change"), !It.test(this.nodeName)
            }
        }), ct.support.focusinBubbles || ct.each({
            focus: "focusin",
            blur: "focusout"
        }, function(e, t) {
            var n = 0,
                i = function(e) {
                    ct.event.simulate(t, e.target, ct.event.fix(e), !0)
                };
            ct.event.special[t] = {
                setup: function() {
                    0 === n++ && K.addEventListener(e, i, !0)
                },
                teardown: function() {
                    0 === --n && K.removeEventListener(e, i, !0)
                }
            }
        }), ct.fn.extend({
            on: function(e, n, i, s, o) {
                var r, a;
                if ("object" == typeof e) {
                    "string" != typeof n && (i = i || n, n = t);
                    for (r in e) this.on(r, n, i, e[r], o);
                    return this
                }
                if (null == i && null == s ? (s = n, i = n = t) : null == s && ("string" == typeof n ? (s = i, i = t) : (s = i, i = n, n = t)), s === !1) s = u;
                else if (!s) return this;
                return 1 === o && (a = s, s = function(e) {
                    return ct().off(e), a.apply(this, arguments)
                }, s.guid = a.guid || (a.guid = ct.guid++)), this.each(function() {
                    ct.event.add(this, e, s, i, n)
                })
            },
            one: function(e, t, n, i) {
                return this.on(e, t, n, i, 1)
            },
            off: function(e, n, i) {
                var s, o;
                if (e && e.preventDefault && e.handleObj) return s = e.handleObj, ct(e.delegateTarget).off(s.namespace ? s.origType + "." + s.namespace : s.origType, s.selector, s.handler), this;
                if ("object" == typeof e) {
                    for (o in e) this.off(o, n, e[o]);
                    return this
                }
                return (n === !1 || "function" == typeof n) && (i = n, n = t), i === !1 && (i = u), this.each(function() {
                    ct.event.remove(this, e, i, n)
                })
            },
            trigger: function(e, t) {
                return this.each(function() {
                    ct.event.trigger(e, t, this)
                })
            },
            triggerHandler: function(e, n) {
                var i = this[0];
                return i ? ct.event.trigger(e, n, i, !0) : t
            }
        });
        var qt = /^.[^:#\[\.,]*$/,
            Rt = /^(?:parents|prev(?:Until|All))/,
            Wt = ct.expr.match.needsContext,
            Vt = {
                children: !0,
                contents: !0,
                next: !0,
                prev: !0
            };
        ct.fn.extend({
            find: function(e) {
                var t, n = [],
                    i = this,
                    s = i.length;
                if ("string" != typeof e) return this.pushStack(ct(e).filter(function() {
                    for (t = 0; s > t; t++)
                        if (ct.contains(i[t], this)) return !0
                }));
                for (t = 0; s > t; t++) ct.find(e, i[t], n);
                return n = this.pushStack(s > 1 ? ct.unique(n) : n), n.selector = this.selector ? this.selector + " " + e : e, n
            },
            has: function(e) {
                var t, n = ct(e, this),
                    i = n.length;
                return this.filter(function() {
                    for (t = 0; i > t; t++)
                        if (ct.contains(this, n[t])) return !0
                })
            },
            not: function(e) {
                return this.pushStack(h(this, e || [], !0))
            },
            filter: function(e) {
                return this.pushStack(h(this, e || [], !1))
            },
            is: function(e) {
                return !!h(this, "string" == typeof e && Wt.test(e) ? ct(e) : e || [], !1).length
            },
            closest: function(e, t) {
                for (var n, i = 0, s = this.length, o = [], r = Wt.test(e) || "string" != typeof e ? ct(e, t || this.context) : 0; s > i; i++)
                    for (n = this[i]; n && n !== t; n = n.parentNode)
                        if (11 > n.nodeType && (r ? r.index(n) > -1 : 1 === n.nodeType && ct.find.matchesSelector(n, e))) {
                            n = o.push(n);
                            break
                        }
                return this.pushStack(o.length > 1 ? ct.unique(o) : o)
            },
            index: function(e) {
                return e ? "string" == typeof e ? ct.inArray(this[0], ct(e)) : ct.inArray(e.jquery ? e[0] : e, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
            },
            add: function(e, t) {
                var n = "string" == typeof e ? ct(e, t) : ct.makeArray(e && e.nodeType ? [e] : e),
                    i = ct.merge(this.get(), n);
                return this.pushStack(ct.unique(i))
            },
            addBack: function(e) {
                return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
            }
        }), ct.each({
            parent: function(e) {
                var t = e.parentNode;
                return t && 11 !== t.nodeType ? t : null
            },
            parents: function(e) {
                return ct.dir(e, "parentNode")
            },
            parentsUntil: function(e, t, n) {
                return ct.dir(e, "parentNode", n)
            },
            next: function(e) {
                return d(e, "nextSibling")
            },
            prev: function(e) {
                return d(e, "previousSibling")
            },
            nextAll: function(e) {
                return ct.dir(e, "nextSibling")
            },
            prevAll: function(e) {
                return ct.dir(e, "previousSibling")
            },
            nextUntil: function(e, t, n) {
                return ct.dir(e, "nextSibling", n)
            },
            prevUntil: function(e, t, n) {
                return ct.dir(e, "previousSibling", n)
            },
            siblings: function(e) {
                return ct.sibling((e.parentNode || {}).firstChild, e)
            },
            children: function(e) {
                return ct.sibling(e.firstChild)
            },
            contents: function(e) {
                return ct.nodeName(e, "iframe") ? e.contentDocument || e.contentWindow.document : ct.merge([], e.childNodes)
            }
        }, function(e, t) {
            ct.fn[e] = function(n, i) {
                var s = ct.map(this, t, n);
                return "Until" !== e.slice(-5) && (i = n), i && "string" == typeof i && (s = ct.filter(i, s)), this.length > 1 && (Vt[e] || (s = ct.unique(s)), Rt.test(e) && (s = s.reverse())), this.pushStack(s)
            }
        }), ct.extend({
            filter: function(e, t, n) {
                var i = t[0];
                return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === i.nodeType ? ct.find.matchesSelector(i, e) ? [i] : [] : ct.find.matches(e, ct.grep(t, function(e) {
                    return 1 === e.nodeType
                }))
            },
            dir: function(e, n, i) {
                for (var s = [], o = e[n]; o && 9 !== o.nodeType && (i === t || 1 !== o.nodeType || !ct(o).is(i));) 1 === o.nodeType && s.push(o), o = o[n];
                return s
            },
            sibling: function(e, t) {
                for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
                return n
            }
        });
        var Ut = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
            Qt = / jQuery\d+="(?:null|\d+)"/g,
            Yt = RegExp("<(?:" + Ut + ")[\\s/>]", "i"),
            Xt = /^\s+/,
            Kt = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
            Gt = /<([\w:]+)/,
            Jt = /<tbody/i,
            Zt = /<|&#?\w+;/,
            en = /<(?:script|style|link)/i,
            tn = /^(?:checkbox|radio)$/i,
            nn = /checked\s*(?:[^=]|=\s*.checked.)/i,
            sn = /^$|\/(?:java|ecma)script/i,
            on = /^true\/(.*)/,
            rn = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
            an = {
                option: [1, "<select multiple='multiple'>", "</select>"],
                legend: [1, "<fieldset>", "</fieldset>"],
                area: [1, "<map>", "</map>"],
                param: [1, "<object>", "</object>"],
                thead: [1, "<table>", "</table>"],
                tr: [2, "<table><tbody>", "</tbody></table>"],
                col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
                td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
                _default: ct.support.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
            },
            ln = p(K),
            un = ln.appendChild(K.createElement("div"));
        an.optgroup = an.option, an.tbody = an.tfoot = an.colgroup = an.caption = an.thead, an.th = an.td, ct.fn.extend({
            text: function(e) {
                return ct.access(this, function(e) {
                    return e === t ? ct.text(this) : this.empty().append((this[0] && this[0].ownerDocument || K).createTextNode(e))
                }, null, e, arguments.length)
            },
            append: function() {
                return this.domManip(arguments, function(e) {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                        var t = f(this, e);
                        t.appendChild(e)
                    }
                })
            },
            prepend: function() {
                return this.domManip(arguments, function(e) {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                        var t = f(this, e);
                        t.insertBefore(e, t.firstChild)
                    }
                })
            },
            before: function() {
                return this.domManip(arguments, function(e) {
                    this.parentNode && this.parentNode.insertBefore(e, this)
                })
            },
            after: function() {
                return this.domManip(arguments, function(e) {
                    this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
                })
            },
            remove: function(e, t) {
                for (var n, i = e ? ct.filter(e, this) : this, s = 0; null != (n = i[s]); s++) t || 1 !== n.nodeType || ct.cleanData(x(n)), n.parentNode && (t && ct.contains(n.ownerDocument, n) && v(x(n, "script")), n.parentNode.removeChild(n));
                return this
            },
            empty: function() {
                for (var e, t = 0; null != (e = this[t]); t++) {
                    for (1 === e.nodeType && ct.cleanData(x(e, !1)); e.firstChild;) e.removeChild(e.firstChild);
                    e.options && ct.nodeName(e, "select") && (e.options.length = 0)
                }
                return this
            },
            clone: function(e, t) {
                return e = null == e ? !1 : e, t = null == t ? e : t, this.map(function() {
                    return ct.clone(this, e, t)
                })
            },
            html: function(e) {
                return ct.access(this, function(e) {
                    var n = this[0] || {},
                        i = 0,
                        s = this.length;
                    if (e === t) return 1 === n.nodeType ? n.innerHTML.replace(Qt, "") : t;
                    if (!("string" != typeof e || en.test(e) || !ct.support.htmlSerialize && Yt.test(e) || !ct.support.leadingWhitespace && Xt.test(e) || an[(Gt.exec(e) || ["", ""])[1].toLowerCase()])) {
                        e = e.replace(Kt, "<$1></$2>");
                        try {
                            for (; s > i; i++) n = this[i] || {}, 1 === n.nodeType && (ct.cleanData(x(n, !1)), n.innerHTML = e);
                            n = 0
                        } catch (o) {}
                    }
                    n && this.empty().append(e)
                }, null, e, arguments.length)
            },
            replaceWith: function() {
                var e = ct.map(this, function(e) {
                        return [e.nextSibling, e.parentNode]
                    }),
                    t = 0;
                return this.domManip(arguments, function(n) {
                    var i = e[t++],
                        s = e[t++];
                    s && (i && i.parentNode !== s && (i = this.nextSibling), ct(this).remove(), s.insertBefore(n, i))
                }, !0), t ? this : this.remove()
            },
            detach: function(e) {
                return this.remove(e, !0)
            },
            domManip: function(e, t, n) {
                e = it.apply([], e);
                var i, s, o, r, a, l, u = 0,
                    c = this.length,
                    d = this,
                    h = c - 1,
                    p = e[0],
                    f = ct.isFunction(p);
                if (f || !(1 >= c || "string" != typeof p || ct.support.checkClone) && nn.test(p)) return this.each(function(i) {
                    var s = d.eq(i);
                    f && (e[0] = p.call(this, i, s.html())), s.domManip(e, t, n)
                });
                if (c && (l = ct.buildFragment(e, this[0].ownerDocument, !1, !n && this), i = l.firstChild, 1 === l.childNodes.length && (l = i), i)) {
                    for (r = ct.map(x(l, "script"), m), o = r.length; c > u; u++) s = l, u !== h && (s = ct.clone(s, !0, !0), o && ct.merge(r, x(s, "script"))), t.call(this[u], s, u);
                    if (o)
                        for (a = r[r.length - 1].ownerDocument, ct.map(r, g), u = 0; o > u; u++) s = r[u], sn.test(s.type || "") && !ct._data(s, "globalEval") && ct.contains(a, s) && (s.src ? ct._evalUrl(s.src) : ct.globalEval((s.text || s.textContent || s.innerHTML || "").replace(rn, "")));
                    l = i = null
                }
                return this
            }
        }), ct.each({
            appendTo: "append",
            prependTo: "prepend",
            insertBefore: "before",
            insertAfter: "after",
            replaceAll: "replaceWith"
        }, function(e, t) {
            ct.fn[e] = function(e) {
                for (var n, i = 0, s = [], o = ct(e), r = o.length - 1; r >= i; i++) n = i === r ? this : this.clone(!0), ct(o[i])[t](n), st.apply(s, n.get());
                return this.pushStack(s)
            }
        }), ct.extend({
            clone: function(e, t, n) {
                var i, s, o, r, a, l = ct.contains(e.ownerDocument, e);
                if (ct.support.html5Clone || ct.isXMLDoc(e) || !Yt.test("<" + e.nodeName + ">") ? o = e.cloneNode(!0) : (un.innerHTML = e.outerHTML, un.removeChild(o = un.firstChild)), !(ct.support.noCloneEvent && ct.support.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || ct.isXMLDoc(e)))
                    for (i = x(o), a = x(e), r = 0; null != (s = a[r]); ++r) i[r] && b(s, i[r]);
                if (t)
                    if (n)
                        for (a = a || x(e), i = i || x(o), r = 0; null != (s = a[r]); r++) y(s, i[r]);
                    else y(e, o);
                return i = x(o, "script"), i.length > 0 && v(i, !l && x(e, "script")), i = a = s = null, o
            },
            buildFragment: function(e, t, n, i) {
                for (var s, o, r, a, l, u, c, d = e.length, h = p(t), f = [], m = 0; d > m; m++)
                    if (o = e[m], o || 0 === o)
                        if ("object" === ct.type(o)) ct.merge(f, o.nodeType ? [o] : o);
                        else if (Zt.test(o)) {
                    for (a = a || h.appendChild(t.createElement("div")), l = (Gt.exec(o) || ["", ""])[1].toLowerCase(), c = an[l] || an._default, a.innerHTML = c[1] + o.replace(Kt, "<$1></$2>") + c[2], s = c[0]; s--;) a = a.lastChild;
                    if (!ct.support.leadingWhitespace && Xt.test(o) && f.push(t.createTextNode(Xt.exec(o)[0])), !ct.support.tbody)
                        for (o = "table" !== l || Jt.test(o) ? "<table>" !== c[1] || Jt.test(o) ? 0 : a : a.firstChild, s = o && o.childNodes.length; s--;) ct.nodeName(u = o.childNodes[s], "tbody") && !u.childNodes.length && o.removeChild(u);
                    for (ct.merge(f, a.childNodes), a.textContent = ""; a.firstChild;) a.removeChild(a.firstChild);
                    a = h.lastChild
                } else f.push(t.createTextNode(o));
                for (a && h.removeChild(a), ct.support.appendChecked || ct.grep(x(f, "input"), w), m = 0; o = f[m++];)
                    if ((!i || -1 === ct.inArray(o, i)) && (r = ct.contains(o.ownerDocument, o), a = x(h.appendChild(o), "script"), r && v(a), n))
                        for (s = 0; o = a[s++];) sn.test(o.type || "") && n.push(o);
                return a = null, h
            },
            cleanData: function(e, t) {
                for (var n, i, s, o, r = 0, a = ct.expando, l = ct.cache, u = ct.support.deleteExpando, c = ct.event.special; null != (n = e[r]); r++)
                    if ((t || ct.acceptData(n)) && (s = n[a], o = s && l[s])) {
                        if (o.events)
                            for (i in o.events) c[i] ? ct.event.remove(n, i) : ct.removeEvent(n, i, o.handle);
                        l[s] && (delete l[s], u ? delete n[a] : typeof n.removeAttribute !== Y ? n.removeAttribute(a) : n[a] = null, tt.push(s))
                    }
            },
            _evalUrl: function(e) {
                return ct.ajax({
                    url: e,
                    type: "GET",
                    dataType: "script",
                    async: !1,
                    global: !1,
                    "throws": !0
                })
            }
        }), ct.fn.extend({
            wrapAll: function(e) {
                if (ct.isFunction(e)) return this.each(function(t) {
                    ct(this).wrapAll(e.call(this, t))
                });
                if (this[0]) {
                    var t = ct(e, this[0].ownerDocument).eq(0).clone(!0);
                    this[0].parentNode && t.insertBefore(this[0]), t.map(function() {
                        for (var e = this; e.firstChild && 1 === e.firstChild.nodeType;) e = e.firstChild;
                        return e
                    }).append(this)
                }
                return this
            },
            wrapInner: function(e) {
                return ct.isFunction(e) ? this.each(function(t) {
                    ct(this).wrapInner(e.call(this, t))
                }) : this.each(function() {
                    var t = ct(this),
                        n = t.contents();
                    n.length ? n.wrapAll(e) : t.append(e)
                })
            },
            wrap: function(e) {
                var t = ct.isFunction(e);
                return this.each(function(n) {
                    ct(this).wrapAll(t ? e.call(this, n) : e)
                })
            },
            unwrap: function() {
                return this.parent().each(function() {
                    ct.nodeName(this, "body") || ct(this).replaceWith(this.childNodes)
                }).end()
            }
        });
        var cn, dn, hn, pn = /alpha\([^)]*\)/i,
            fn = /opacity\s*=\s*([^)]*)/,
            mn = /^(top|right|bottom|left)$/,
            gn = /^(none|table(?!-c[ea]).+)/,
            vn = /^margin/,
            yn = RegExp("^(" + dt + ")(.*)$", "i"),
            bn = RegExp("^(" + dt + ")(?!px)[a-z%]+$", "i"),
            xn = RegExp("^([+-])=(" + dt + ")", "i"),
            wn = {
                BODY: "block"
            },
            Cn = {
                position: "absolute",
                visibility: "hidden",
                display: "block"
            },
            Tn = {
                letterSpacing: 0,
                fontWeight: 400
            },
            kn = ["Top", "Right", "Bottom", "Left"],
            Sn = ["Webkit", "O", "Moz", "ms"];
        ct.fn.extend({
            css: function(e, n) {
                return ct.access(this, function(e, n, i) {
                    var s, o, r = {},
                        a = 0;
                    if (ct.isArray(n)) {
                        for (o = dn(e), s = n.length; s > a; a++) r[n[a]] = ct.css(e, n[a], !1, o);
                        return r
                    }
                    return i !== t ? ct.style(e, n, i) : ct.css(e, n)
                }, e, n, arguments.length > 1)
            },
            show: function() {
                return k(this, !0)
            },
            hide: function() {
                return k(this)
            },
            toggle: function(e) {
                return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
                    T(this) ? ct(this).show() : ct(this).hide()
                })
            }
        }), ct.extend({
            cssHooks: {
                opacity: {
                    get: function(e, t) {
                        if (t) {
                            var n = hn(e, "opacity");
                            return "" === n ? "1" : n
                        }
                    }
                }
            },
            cssNumber: {
                columnCount: !0,
                fillOpacity: !0,
                fontWeight: !0,
                lineHeight: !0,
                opacity: !0,
                order: !0,
                orphans: !0,
                widows: !0,
                zIndex: !0,
                zoom: !0
            },
            cssProps: {
                "float": ct.support.cssFloat ? "cssFloat" : "styleFloat"
            },
            style: function(e, n, i, s) {
                if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                    var o, r, a, l = ct.camelCase(n),
                        u = e.style;
                    if (n = ct.cssProps[l] || (ct.cssProps[l] = C(u, l)), a = ct.cssHooks[n] || ct.cssHooks[l], i === t) return a && "get" in a && (o = a.get(e, !1, s)) !== t ? o : u[n];
                    if (r = typeof i, "string" === r && (o = xn.exec(i)) && (i = (o[1] + 1) * o[2] + parseFloat(ct.css(e, n)), r = "number"), !(null == i || "number" === r && isNaN(i) || ("number" !== r || ct.cssNumber[l] || (i += "px"), ct.support.clearCloneStyle || "" !== i || 0 !== n.indexOf("background") || (u[n] = "inherit"), a && "set" in a && (i = a.set(e, i, s)) === t))) try {
                        u[n] = i
                    } catch (c) {}
                }
            },
            css: function(e, n, i, s) {
                var o, r, a, l = ct.camelCase(n);
                return n = ct.cssProps[l] || (ct.cssProps[l] = C(e.style, l)), a = ct.cssHooks[n] || ct.cssHooks[l], a && "get" in a && (r = a.get(e, !0, i)), r === t && (r = hn(e, n, s)), "normal" === r && n in Tn && (r = Tn[n]), "" === i || i ? (o = parseFloat(r), i === !0 || ct.isNumeric(o) ? o || 0 : r) : r
            }
        }), e.getComputedStyle ? (dn = function(t) {
            return e.getComputedStyle(t, null)
        }, hn = function(e, n, i) {
            var s, o, r, a = i || dn(e),
                l = a ? a.getPropertyValue(n) || a[n] : t,
                u = e.style;
            return a && ("" !== l || ct.contains(e.ownerDocument, e) || (l = ct.style(e, n)), bn.test(l) && vn.test(n) && (s = u.width, o = u.minWidth, r = u.maxWidth, u.minWidth = u.maxWidth = u.width = l, l = a.width, u.width = s, u.minWidth = o, u.maxWidth = r)), l
        }) : K.documentElement.currentStyle && (dn = function(e) {
            return e.currentStyle
        }, hn = function(e, n, i) {
            var s, o, r, a = i || dn(e),
                l = a ? a[n] : t,
                u = e.style;
            return null == l && u && u[n] && (l = u[n]), bn.test(l) && !mn.test(n) && (s = u.left, o = e.runtimeStyle, r = o && o.left, r && (o.left = e.currentStyle.left), u.left = "fontSize" === n ? "1em" : l, l = u.pixelLeft + "px", u.left = s, r && (o.left = r)), "" === l ? "auto" : l
        }), ct.each(["height", "width"], function(e, n) {
            ct.cssHooks[n] = {
                get: function(e, i, s) {
                    return i ? 0 === e.offsetWidth && gn.test(ct.css(e, "display")) ? ct.swap(e, Cn, function() {
                        return F(e, n, s)
                    }) : F(e, n, s) : t
                },
                set: function(e, t, i) {
                    var s = i && dn(e);
                    return S(e, t, i ? j(e, n, i, ct.support.boxSizing && "border-box" === ct.css(e, "boxSizing", !1, s), s) : 0)
                }
            }
        }), ct.support.opacity || (ct.cssHooks.opacity = {
            get: function(e, t) {
                return fn.test((t && e.currentStyle ? e.currentStyle.filter : e.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : t ? "1" : ""
            },
            set: function(e, t) {
                var n = e.style,
                    i = e.currentStyle,
                    s = ct.isNumeric(t) ? "alpha(opacity=" + 100 * t + ")" : "",
                    o = i && i.filter || n.filter || "";
                n.zoom = 1, (t >= 1 || "" === t) && "" === ct.trim(o.replace(pn, "")) && n.removeAttribute && (n.removeAttribute("filter"), "" === t || i && !i.filter) || (n.filter = pn.test(o) ? o.replace(pn, s) : o + " " + s)
            }
        }), ct(function() {
            ct.support.reliableMarginRight || (ct.cssHooks.marginRight = {
                get: function(e, n) {
                    return n ? ct.swap(e, {
                        display: "inline-block"
                    }, hn, [e, "marginRight"]) : t
                }
            }), !ct.support.pixelPosition && ct.fn.position && ct.each(["top", "left"], function(e, n) {
                ct.cssHooks[n] = {
                    get: function(e, i) {
                        return i ? (i = hn(e, n), bn.test(i) ? ct(e).position()[n] + "px" : i) : t
                    }
                }
            })
        }), ct.expr && ct.expr.filters && (ct.expr.filters.hidden = function(e) {
            return 0 >= e.offsetWidth && 0 >= e.offsetHeight || !ct.support.reliableHiddenOffsets && "none" === (e.style && e.style.display || ct.css(e, "display"))
        }, ct.expr.filters.visible = function(e) {
            return !ct.expr.filters.hidden(e)
        }), ct.each({
            margin: "",
            padding: "",
            border: "Width"
        }, function(e, t) {
            ct.cssHooks[e + t] = {
                expand: function(n) {
                    for (var i = 0, s = {}, o = "string" == typeof n ? n.split(" ") : [n]; 4 > i; i++) s[e + kn[i] + t] = o[i] || o[i - 2] || o[0];
                    return s
                }
            }, vn.test(e) || (ct.cssHooks[e + t].set = S)
        });
        var jn = /%20/g,
            Fn = /\[\]$/,
            En = /\r?\n/g,
            $n = /^(?:submit|button|image|reset|file)$/i,
            An = /^(?:input|select|textarea|keygen)/i;
        ct.fn.extend({
            serialize: function() {
                return ct.param(this.serializeArray())
            },
            serializeArray: function() {
                return this.map(function() {
                    var e = ct.prop(this, "elements");
                    return e ? ct.makeArray(e) : this
                }).filter(function() {
                    var e = this.type;
                    return this.name && !ct(this).is(":disabled") && An.test(this.nodeName) && !$n.test(e) && (this.checked || !tn.test(e))
                }).map(function(e, t) {
                    var n = ct(this).val();
                    return null == n ? null : ct.isArray(n) ? ct.map(n, function(e) {
                        return {
                            name: t.name,
                            value: e.replace(En, "\r\n")
                        }
                    }) : {
                        name: t.name,
                        value: n.replace(En, "\r\n")
                    }
                }).get()
            }
        }), ct.param = function(e, n) {
            var i, s = [],
                o = function(e, t) {
                    t = ct.isFunction(t) ? t() : null == t ? "" : t, s[s.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
                };
            if (n === t && (n = ct.ajaxSettings && ct.ajaxSettings.traditional), ct.isArray(e) || e.jquery && !ct.isPlainObject(e)) ct.each(e, function() {
                o(this.name, this.value)
            });
            else
                for (i in e) A(i, e[i], n, o);
            return s.join("&").replace(jn, "+")
        }, ct.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(e, t) {
            ct.fn[t] = function(e, n) {
                return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
            }
        }), ct.fn.extend({
            hover: function(e, t) {
                return this.mouseenter(e).mouseleave(t || e)
            },
            bind: function(e, t, n) {
                return this.on(e, null, t, n)
            },
            unbind: function(e, t) {
                return this.off(e, null, t)
            },
            delegate: function(e, t, n, i) {
                return this.on(t, e, n, i)
            },
            undelegate: function(e, t, n) {
                return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
            }
        });
        var Nn, Ln, Dn = ct.now(),
            Mn = /\?/,
            Bn = /#.*$/,
            Pn = /([?&])_=[^&]*/,
            In = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
            _n = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
            Hn = /^(?:GET|HEAD)$/,
            zn = /^\/\//,
            On = /^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,
            qn = ct.fn.load,
            Rn = {},
            Wn = {},
            Vn = "*/".concat("*");
        try {
            Ln = X.href
        } catch (Un) {
            Ln = K.createElement("a"), Ln.href = "", Ln = Ln.href
        }
        Nn = On.exec(Ln.toLowerCase()) || [], ct.fn.load = function(e, n, i) {
            if ("string" != typeof e && qn) return qn.apply(this, arguments);
            var s, o, r, a = this,
                l = e.indexOf(" ");
            return l >= 0 && (s = e.slice(l, e.length), e = e.slice(0, l)), ct.isFunction(n) ? (i = n, n = t) : n && "object" == typeof n && (r = "POST"), a.length > 0 && ct.ajax({
                url: e,
                type: r,
                dataType: "html",
                data: n
            }).done(function(e) {
                o = arguments, a.html(s ? ct("<div>").append(ct.parseHTML(e)).find(s) : e)
            }).complete(i && function(e, t) {
                a.each(i, o || [e.responseText, t, e])
            }), this
        }, ct.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
            ct.fn[t] = function(e) {
                return this.on(t, e)
            }
        }), ct.extend({
            active: 0,
            lastModified: {},
            etag: {},
            ajaxSettings: {
                url: Ln,
                type: "GET",
                isLocal: _n.test(Nn[1]),
                global: !0,
                processData: !0,
                async: !0,
                contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                accepts: {
                    "*": Vn,
                    text: "text/plain",
                    html: "text/html",
                    xml: "application/xml, text/xml",
                    json: "application/json, text/javascript"
                },
                contents: {
                    xml: /xml/,
                    html: /html/,
                    json: /json/
                },
                responseFields: {
                    xml: "responseXML",
                    text: "responseText",
                    json: "responseJSON"
                },
                converters: {
                    "* text": String,
                    "text html": !0,
                    "text json": ct.parseJSON,
                    "text xml": ct.parseXML
                },
                flatOptions: {
                    url: !0,
                    context: !0
                }
            },
            ajaxSetup: function(e, t) {
                return t ? D(D(e, ct.ajaxSettings), t) : D(ct.ajaxSettings, e)
            },
            ajaxPrefilter: N(Rn),
            ajaxTransport: N(Wn),
            ajax: function(e, n) {
                function i(e, n, i, s) {
                    var o, d, y, b, w, T = n;
                    2 !== x && (x = 2, l && clearTimeout(l), c = t, a = s || "", C.readyState = e > 0 ? 4 : 0, o = e >= 200 && 300 > e || 304 === e, i && (b = M(h, C, i)), b = B(h, b, C, o), o ? (h.ifModified && (w = C.getResponseHeader("Last-Modified"), w && (ct.lastModified[r] = w), w = C.getResponseHeader("etag"), w && (ct.etag[r] = w)), 204 === e || "HEAD" === h.type ? T = "nocontent" : 304 === e ? T = "notmodified" : (T = b.state, d = b.data, y = b.error, o = !y)) : (y = T, (e || !T) && (T = "error", 0 > e && (e = 0))), C.status = e, C.statusText = (n || T) + "", o ? m.resolveWith(p, [d, T, C]) : m.rejectWith(p, [C, T, y]), C.statusCode(v), v = t, u && f.trigger(o ? "ajaxSuccess" : "ajaxError", [C, h, o ? d : y]), g.fireWith(p, [C, T]), u && (f.trigger("ajaxComplete", [C, h]), --ct.active || ct.event.trigger("ajaxStop")))
                }
                "object" == typeof e && (n = e, e = t), n = n || {};
                var s, o, r, a, l, u, c, d, h = ct.ajaxSetup({}, n),
                    p = h.context || h,
                    f = h.context && (p.nodeType || p.jquery) ? ct(p) : ct.event,
                    m = ct.Deferred(),
                    g = ct.Callbacks("once memory"),
                    v = h.statusCode || {},
                    y = {},
                    b = {},
                    x = 0,
                    w = "canceled",
                    C = {
                        readyState: 0,
                        getResponseHeader: function(e) {
                            var t;
                            if (2 === x) {
                                if (!d)
                                    for (d = {}; t = In.exec(a);) d[t[1].toLowerCase()] = t[2];
                                t = d[e.toLowerCase()]
                            }
                            return null == t ? null : t
                        },
                        getAllResponseHeaders: function() {
                            return 2 === x ? a : null
                        },
                        setRequestHeader: function(e, t) {
                            var n = e.toLowerCase();
                            return x || (e = b[n] = b[n] || e, y[e] = t), this
                        },
                        overrideMimeType: function(e) {
                            return x || (h.mimeType = e), this
                        },
                        statusCode: function(e) {
                            var t;
                            if (e)
                                if (2 > x)
                                    for (t in e) v[t] = [v[t], e[t]];
                                else C.always(e[C.status]);
                            return this
                        },
                        abort: function(e) {
                            var t = e || w;
                            return c && c.abort(t), i(0, t), this
                        }
                    };
                if (m.promise(C).complete = g.add, C.success = C.done, C.error = C.fail, h.url = ((e || h.url || Ln) + "").replace(Bn, "").replace(zn, Nn[1] + "//"), h.type = n.method || n.type || h.method || h.type, h.dataTypes = ct.trim(h.dataType || "*").toLowerCase().match(ht) || [""], null == h.crossDomain && (s = On.exec(h.url.toLowerCase()), h.crossDomain = !(!s || s[1] === Nn[1] && s[2] === Nn[2] && (s[3] || ("http:" === s[1] ? "80" : "443")) === (Nn[3] || ("http:" === Nn[1] ? "80" : "443")))), h.data && h.processData && "string" != typeof h.data && (h.data = ct.param(h.data, h.traditional)), L(Rn, h, n, C), 2 === x) return C;
                u = h.global, u && 0 === ct.active++ && ct.event.trigger("ajaxStart"), h.type = h.type.toUpperCase(), h.hasContent = !Hn.test(h.type), r = h.url, h.hasContent || (h.data && (r = h.url += (Mn.test(r) ? "&" : "?") + h.data, delete h.data), h.cache === !1 && (h.url = Pn.test(r) ? r.replace(Pn, "$1_=" + Dn++) : r + (Mn.test(r) ? "&" : "?") + "_=" + Dn++)), h.ifModified && (ct.lastModified[r] && C.setRequestHeader("If-Modified-Since", ct.lastModified[r]), ct.etag[r] && C.setRequestHeader("If-None-Match", ct.etag[r])), (h.data && h.hasContent && h.contentType !== !1 || n.contentType) && C.setRequestHeader("Content-Type", h.contentType), C.setRequestHeader("Accept", h.dataTypes[0] && h.accepts[h.dataTypes[0]] ? h.accepts[h.dataTypes[0]] + ("*" !== h.dataTypes[0] ? ", " + Vn + "; q=0.01" : "") : h.accepts["*"]);
                for (o in h.headers) C.setRequestHeader(o, h.headers[o]);
                if (h.beforeSend && (h.beforeSend.call(p, C, h) === !1 || 2 === x)) return C.abort();
                w = "abort";
                for (o in {
                        success: 1,
                        error: 1,
                        complete: 1
                    }) C[o](h[o]);
                if (c = L(Wn, h, n, C)) {
                    C.readyState = 1, u && f.trigger("ajaxSend", [C, h]), h.async && h.timeout > 0 && (l = setTimeout(function() {
                        C.abort("timeout")
                    }, h.timeout));
                    try {
                        x = 1, c.send(y, i)
                    } catch (T) {
                        if (!(2 > x)) throw T;
                        i(-1, T)
                    }
                } else i(-1, "No Transport");
                return C
            },
            getJSON: function(e, t, n) {
                return ct.get(e, t, n, "json")
            },
            getScript: function(e, n) {
                return ct.get(e, t, n, "script")
            }
        }), ct.each(["get", "post"], function(e, n) {
            ct[n] = function(e, i, s, o) {
                return ct.isFunction(i) && (o = o || s, s = i, i = t), ct.ajax({
                    url: e,
                    type: n,
                    dataType: o,
                    data: i,
                    success: s
                })
            }
        }), ct.ajaxSetup({
            accepts: {
                script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
            },
            contents: {
                script: /(?:java|ecma)script/
            },
            converters: {
                "text script": function(e) {
                    return ct.globalEval(e), e
                }
            }
        }), ct.ajaxPrefilter("script", function(e) {
            e.cache === t && (e.cache = !1), e.crossDomain && (e.type = "GET", e.global = !1)
        }), ct.ajaxTransport("script", function(e) {
            if (e.crossDomain) {
                var n, i = K.head || ct("head")[0] || K.documentElement;
                return {
                    send: function(t, s) {
                        n = K.createElement("script"), n.async = !0, e.scriptCharset && (n.charset = e.scriptCharset), n.src = e.url, n.onload = n.onreadystatechange = function(e, t) {
                            (t || !n.readyState || /loaded|complete/.test(n.readyState)) && (n.onload = n.onreadystatechange = null, n.parentNode && n.parentNode.removeChild(n), n = null, t || s(200, "success"))
                        }, i.insertBefore(n, i.firstChild)
                    },
                    abort: function() {
                        n && n.onload(t, !0)
                    }
                }
            }
        });
        var Qn = [],
            Yn = /(=)\?(?=&|$)|\?\?/;
        ct.ajaxSetup({
            jsonp: "callback",
            jsonpCallback: function() {
                var e = Qn.pop() || ct.expando + "_" + Dn++;
                return this[e] = !0, e
            }
        }), ct.ajaxPrefilter("json jsonp", function(n, i, s) {
            var o, r, a, l = n.jsonp !== !1 && (Yn.test(n.url) ? "url" : "string" == typeof n.data && !(n.contentType || "").indexOf("application/x-www-form-urlencoded") && Yn.test(n.data) && "data");
            return l || "jsonp" === n.dataTypes[0] ? (o = n.jsonpCallback = ct.isFunction(n.jsonpCallback) ? n.jsonpCallback() : n.jsonpCallback, l ? n[l] = n[l].replace(Yn, "$1" + o) : n.jsonp !== !1 && (n.url += (Mn.test(n.url) ? "&" : "?") + n.jsonp + "=" + o), n.converters["script json"] = function() {
                return a || ct.error(o + " was not called"), a[0]
            }, n.dataTypes[0] = "json", r = e[o], e[o] = function() {
                a = arguments
            }, s.always(function() {
                e[o] = r, n[o] && (n.jsonpCallback = i.jsonpCallback, Qn.push(o)), a && ct.isFunction(r) && r(a[0]), a = r = t
            }), "script") : t
        });
        var Xn, Kn, Gn = 0,
            Jn = e.ActiveXObject && function() {
                var e;
                for (e in Xn) Xn[e](t, !0)
            };
        ct.ajaxSettings.xhr = e.ActiveXObject ? function() {
            return !this.isLocal && P() || I()
        } : P, Kn = ct.ajaxSettings.xhr(), ct.support.cors = !!Kn && "withCredentials" in Kn, Kn = ct.support.ajax = !!Kn, Kn && ct.ajaxTransport(function(n) {
            if (!n.crossDomain || ct.support.cors) {
                var i;
                return {
                    send: function(s, o) {
                        var r, a, l = n.xhr();
                        if (n.username ? l.open(n.type, n.url, n.async, n.username, n.password) : l.open(n.type, n.url, n.async), n.xhrFields)
                            for (a in n.xhrFields) l[a] = n.xhrFields[a];
                        n.mimeType && l.overrideMimeType && l.overrideMimeType(n.mimeType), n.crossDomain || s["X-Requested-With"] || (s["X-Requested-With"] = "XMLHttpRequest");
                        try {
                            for (a in s) l.setRequestHeader(a, s[a])
                        } catch (u) {}
                        l.send(n.hasContent && n.data || null), i = function(e, s) {
                            var a, u, c, d;
                            try {
                                if (i && (s || 4 === l.readyState))
                                    if (i = t, r && (l.onreadystatechange = ct.noop, Jn && delete Xn[r]), s) 4 !== l.readyState && l.abort();
                                    else {
                                        d = {}, a = l.status, u = l.getAllResponseHeaders(), "string" == typeof l.responseText && (d.text = l.responseText);
                                        try {
                                            c = l.statusText
                                        } catch (h) {
                                            c = ""
                                        }
                                        a || !n.isLocal || n.crossDomain ? 1223 === a && (a = 204) : a = d.text ? 200 : 404
                                    }
                            } catch (p) {
                                s || o(-1, p)
                            }
                            d && o(a, c, d, u)
                        }, n.async ? 4 === l.readyState ? setTimeout(i) : (r = ++Gn, Jn && (Xn || (Xn = {}, ct(e).unload(Jn)), Xn[r] = i), l.onreadystatechange = i) : i()
                    },
                    abort: function() {
                        i && i(t, !0)
                    }
                }
            }
        });
        var Zn, ei, ti = /^(?:toggle|show|hide)$/,
            ni = RegExp("^(?:([+-])=|)(" + dt + ")([a-z%]*)$", "i"),
            ii = /queueHooks$/,
            si = [q],
            oi = {
                "*": [function(e, t) {
                    var n = this.createTween(e, t),
                        i = n.cur(),
                        s = ni.exec(t),
                        o = s && s[3] || (ct.cssNumber[e] ? "" : "px"),
                        r = (ct.cssNumber[e] || "px" !== o && +i) && ni.exec(ct.css(n.elem, e)),
                        a = 1,
                        l = 20;
                    if (r && r[3] !== o) {
                        o = o || r[3], s = s || [], r = +i || 1;
                        do a = a || ".5", r /= a, ct.style(n.elem, e, r + o); while (a !== (a = n.cur() / i) && 1 !== a && --l)
                    }
                    return s && (r = n.start = +r || +i || 0, n.unit = o, n.end = s[1] ? r + (s[1] + 1) * s[2] : +s[2]), n
                }]
            };
        ct.Animation = ct.extend(z, {
            tweener: function(e, t) {
                ct.isFunction(e) ? (t = e, e = ["*"]) : e = e.split(" ");
                for (var n, i = 0, s = e.length; s > i; i++) n = e[i], oi[n] = oi[n] || [], oi[n].unshift(t)
            },
            prefilter: function(e, t) {
                t ? si.unshift(e) : si.push(e)
            }
        }), ct.Tween = R, R.prototype = {
            constructor: R,
            init: function(e, t, n, i, s, o) {
                this.elem = e, this.prop = n, this.easing = s || "swing", this.options = t, this.start = this.now = this.cur(), this.end = i, this.unit = o || (ct.cssNumber[n] ? "" : "px")
            },
            cur: function() {
                var e = R.propHooks[this.prop];
                return e && e.get ? e.get(this) : R.propHooks._default.get(this)
            },
            run: function(e) {
                var t, n = R.propHooks[this.prop];
                return this.pos = t = this.options.duration ? ct.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : R.propHooks._default.set(this), this
            }
        }, R.prototype.init.prototype = R.prototype, R.propHooks = {
            _default: {
                get: function(e) {
                    var t;
                    return null == e.elem[e.prop] || e.elem.style && null != e.elem.style[e.prop] ? (t = ct.css(e.elem, e.prop, ""), t && "auto" !== t ? t : 0) : e.elem[e.prop]
                },
                set: function(e) {
                    ct.fx.step[e.prop] ? ct.fx.step[e.prop](e) : e.elem.style && (null != e.elem.style[ct.cssProps[e.prop]] || ct.cssHooks[e.prop]) ? ct.style(e.elem, e.prop, e.now + e.unit) : e.elem[e.prop] = e.now
                }
            }
        }, R.propHooks.scrollTop = R.propHooks.scrollLeft = {
            set: function(e) {
                e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
            }
        }, ct.each(["toggle", "show", "hide"], function(e, t) {
            var n = ct.fn[t];
            ct.fn[t] = function(e, i, s) {
                return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(W(t, !0), e, i, s)
            }
        }), ct.fn.extend({
            fadeTo: function(e, t, n, i) {
                return this.filter(T).css("opacity", 0).show().end().animate({
                    opacity: t
                }, e, n, i)
            },
            animate: function(e, t, n, i) {
                var s = ct.isEmptyObject(e),
                    o = ct.speed(t, n, i),
                    r = function() {
                        var t = z(this, ct.extend({}, e), o);
                        (s || ct._data(this, "finish")) && t.stop(!0)
                    };
                return r.finish = r, s || o.queue === !1 ? this.each(r) : this.queue(o.queue, r)
            },
            stop: function(e, n, i) {
                var s = function(e) {
                    var t = e.stop;
                    delete e.stop, t(i)
                };
                return "string" != typeof e && (i = n, n = e, e = t), n && e !== !1 && this.queue(e || "fx", []), this.each(function() {
                    var t = !0,
                        n = null != e && e + "queueHooks",
                        o = ct.timers,
                        r = ct._data(this);
                    if (n) r[n] && r[n].stop && s(r[n]);
                    else
                        for (n in r) r[n] && r[n].stop && ii.test(n) && s(r[n]);
                    for (n = o.length; n--;) o[n].elem !== this || null != e && o[n].queue !== e || (o[n].anim.stop(i), t = !1, o.splice(n, 1));
                    (t || !i) && ct.dequeue(this, e)
                })
            },
            finish: function(e) {
                return e !== !1 && (e = e || "fx"), this.each(function() {
                    var t, n = ct._data(this),
                        i = n[e + "queue"],
                        s = n[e + "queueHooks"],
                        o = ct.timers,
                        r = i ? i.length : 0;
                    for (n.finish = !0, ct.queue(this, e, []), s && s.stop && s.stop.call(this, !0), t = o.length; t--;) o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0), o.splice(t, 1));
                    for (t = 0; r > t; t++) i[t] && i[t].finish && i[t].finish.call(this);
                    delete n.finish
                })
            }
        }), ct.each({
            slideDown: W("show"),
            slideUp: W("hide"),
            slideToggle: W("toggle"),
            fadeIn: {
                opacity: "show"
            },
            fadeOut: {
                opacity: "hide"
            },
            fadeToggle: {
                opacity: "toggle"
            }
        }, function(e, t) {
            ct.fn[e] = function(e, n, i) {
                return this.animate(t, e, n, i)
            }
        }), ct.speed = function(e, t, n) {
            var i = e && "object" == typeof e ? ct.extend({}, e) : {
                complete: n || !n && t || ct.isFunction(e) && e,
                duration: e,
                easing: n && t || t && !ct.isFunction(t) && t
            };
            return i.duration = ct.fx.off ? 0 : "number" == typeof i.duration ? i.duration : i.duration in ct.fx.speeds ? ct.fx.speeds[i.duration] : ct.fx.speeds._default, (null == i.queue || i.queue === !0) && (i.queue = "fx"), i.old = i.complete, i.complete = function() {
                ct.isFunction(i.old) && i.old.call(this), i.queue && ct.dequeue(this, i.queue)
            }, i
        }, ct.easing = {
            linear: function(e) {
                return e
            },
            swing: function(e) {
                return .5 - Math.cos(e * Math.PI) / 2
            }
        }, ct.timers = [], ct.fx = R.prototype.init, ct.fx.tick = function() {
            var e, n = ct.timers,
                i = 0;
            for (Zn = ct.now(); n.length > i; i++) e = n[i], e() || n[i] !== e || n.splice(i--, 1);
            n.length || ct.fx.stop(), Zn = t
        }, ct.fx.timer = function(e) {
            e() && ct.timers.push(e) && ct.fx.start()
        }, ct.fx.interval = 13, ct.fx.start = function() {
            ei || (ei = setInterval(ct.fx.tick, ct.fx.interval))
        }, ct.fx.stop = function() {
            clearInterval(ei), ei = null
        }, ct.fx.speeds = {
            slow: 600,
            fast: 200,
            _default: 400
        }, ct.fx.step = {}, ct.expr && ct.expr.filters && (ct.expr.filters.animated = function(e) {
            return ct.grep(ct.timers, function(t) {
                return e === t.elem
            }).length
        }), ct.fn.offset = function(e) {
            if (arguments.length) return e === t ? this : this.each(function(t) {
                ct.offset.setOffset(this, e, t)
            });
            var n, i, s = {
                    top: 0,
                    left: 0
                },
                o = this[0],
                r = o && o.ownerDocument;
            return r ? (n = r.documentElement, ct.contains(n, o) ? (typeof o.getBoundingClientRect !== Y && (s = o.getBoundingClientRect()), i = V(r), {
                top: s.top + (i.pageYOffset || n.scrollTop) - (n.clientTop || 0),
                left: s.left + (i.pageXOffset || n.scrollLeft) - (n.clientLeft || 0)
            }) : s) : void 0
        }, ct.offset = {
            setOffset: function(e, t, n) {
                var i = ct.css(e, "position");
                "static" === i && (e.style.position = "relative");
                var s, o, r = ct(e),
                    a = r.offset(),
                    l = ct.css(e, "top"),
                    u = ct.css(e, "left"),
                    c = ("absolute" === i || "fixed" === i) && ct.inArray("auto", [l, u]) > -1,
                    d = {},
                    h = {};
                c ? (h = r.position(), s = h.top, o = h.left) : (s = parseFloat(l) || 0, o = parseFloat(u) || 0), ct.isFunction(t) && (t = t.call(e, n, a)), null != t.top && (d.top = t.top - a.top + s), null != t.left && (d.left = t.left - a.left + o), "using" in t ? t.using.call(e, d) : r.css(d)
            }
        }, ct.fn.extend({
            position: function() {
                if (this[0]) {
                    var e, t, n = {
                            top: 0,
                            left: 0
                        },
                        i = this[0];
                    return "fixed" === ct.css(i, "position") ? t = i.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), ct.nodeName(e[0], "html") || (n = e.offset()), n.top += ct.css(e[0], "borderTopWidth", !0), n.left += ct.css(e[0], "borderLeftWidth", !0)), {
                        top: t.top - n.top - ct.css(i, "marginTop", !0),
                        left: t.left - n.left - ct.css(i, "marginLeft", !0)
                    }
                }
            },
            offsetParent: function() {
                return this.map(function() {
                    for (var e = this.offsetParent || G; e && !ct.nodeName(e, "html") && "static" === ct.css(e, "position");) e = e.offsetParent;
                    return e || G
                })
            }
        }), ct.each({
            scrollLeft: "pageXOffset",
            scrollTop: "pageYOffset"
        }, function(e, n) {
            var i = /Y/.test(n);
            ct.fn[e] = function(s) {
                return ct.access(this, function(e, s, o) {
                    var r = V(e);
                    return o === t ? r ? n in r ? r[n] : r.document.documentElement[s] : e[s] : (r ? r.scrollTo(i ? ct(r).scrollLeft() : o, i ? o : ct(r).scrollTop()) : e[s] = o, t)
                }, e, s, arguments.length, null)
            }
        }), ct.each({
            Height: "height",
            Width: "width"
        }, function(e, n) {
            ct.each({
                padding: "inner" + e,
                content: n,
                "": "outer" + e
            }, function(i, s) {
                ct.fn[s] = function(s, o) {
                    var r = arguments.length && (i || "boolean" != typeof s),
                        a = i || (s === !0 || o === !0 ? "margin" : "border");
                    return ct.access(this, function(n, i, s) {
                        var o;
                        return ct.isWindow(n) ? n.document.documentElement["client" + e] : 9 === n.nodeType ? (o = n.documentElement, Math.max(n.body["scroll" + e], o["scroll" + e], n.body["offset" + e], o["offset" + e], o["client" + e])) : s === t ? ct.css(n, i, a) : ct.style(n, i, s, a)
                    }, n, r ? s : t, r, null)
                }
            })
        }), ct.fn.size = function() {
            return this.length
        }, ct.fn.andSelf = ct.fn.addBack, "object" == typeof module && module && "object" == typeof module.exports ? module.exports = ct : (e.jQuery = e.$ = ct, "function" == typeof define && define.amd && define("jquery", [], function() {
            return ct
        }))
    }(window), "undefined" == typeof jQuery) throw new Error("Bootstrap's JavaScript requires jQuery"); + function(e) {
    "use strict";

    function t() {
        var e = document.createElement("bootstrap"),
            t = {
                WebkitTransition: "webkitTransitionEnd",
                MozTransition: "transitionend",
                OTransition: "oTransitionEnd otransitionend",
                transition: "transitionend"
            };
        for (var n in t)
            if (void 0 !== e.style[n]) return {
                end: t[n]
            };
        return !1
    }
    e.fn.emulateTransitionEnd = function(t) {
        var n = !1,
            i = this;
        e(this).one(e.support.transition.end, function() {
            n = !0
        });
        var s = function() {
            n || e(i).trigger(e.support.transition.end)
        };
        return setTimeout(s, t), this
    }, e(function() {
        e.support.transition = t()
    })
}(jQuery), + function(e) {
    "use strict";
    var t = '[data-dismiss="alert"]',
        n = function(n) {
            e(n).on("click", t, this.close)
        };
    n.prototype.close = function(t) {
        function n() {
            o.trigger("closed.bs.alert").remove()
        }
        var i = e(this),
            s = i.attr("data-target");
        s || (s = i.attr("href"), s = s && s.replace(/.*(?=#[^\s]*$)/, ""));
        var o = e(s);
        t && t.preventDefault(), o.length || (o = i.hasClass("alert") ? i : i.parent()), o.trigger(t = e.Event("close.bs.alert")), t.isDefaultPrevented() || (o.removeClass("in"), e.support.transition && o.hasClass("fade") ? o.one(e.support.transition.end, n).emulateTransitionEnd(150) : n())
    };
    var i = e.fn.alert;
    e.fn.alert = function(t) {
        return this.each(function() {
            var i = e(this),
                s = i.data("bs.alert");
            s || i.data("bs.alert", s = new n(this)), "string" == typeof t && s[t].call(i)
        })
    }, e.fn.alert.Constructor = n, e.fn.alert.noConflict = function() {
        return e.fn.alert = i, this
    }, e(document).on("click.bs.alert.data-api", t, n.prototype.close)
}(jQuery), + function(e) {
    "use strict";
    var t = function(n, i) {
        this.$element = e(n), this.options = e.extend({}, t.DEFAULTS, i), this.isLoading = !1
    };
    t.DEFAULTS = {
        loadingText: "loading..."
    }, t.prototype.setState = function(t) {
        var n = "disabled",
            i = this.$element,
            s = i.is("input") ? "val" : "html",
            o = i.data();
        t += "Text", o.resetText || i.data("resetText", i[s]()), i[s](o[t] || this.options[t]), setTimeout(e.proxy(function() {
            "loadingText" == t ? (this.isLoading = !0, i.addClass(n).attr(n, n)) : this.isLoading && (this.isLoading = !1, i.removeClass(n).removeAttr(n))
        }, this), 0)
    }, t.prototype.toggle = function() {
        var e = !0,
            t = this.$element.closest('[data-toggle="buttons"]');
        if (t.length) {
            var n = this.$element.find("input");
            "radio" == n.prop("type") && (n.prop("checked") && this.$element.hasClass("active") ? e = !1 : t.find(".active").removeClass("active")), e && n.prop("checked", !this.$element.hasClass("active")).trigger("change")
        }
        e && this.$element.toggleClass("active")
    };
    var n = e.fn.button;
    e.fn.button = function(n) {
        return this.each(function() {
            var i = e(this),
                s = i.data("bs.button"),
                o = "object" == typeof n && n;
            s || i.data("bs.button", s = new t(this, o)), "toggle" == n ? s.toggle() : n && s.setState(n)
        })
    }, e.fn.button.Constructor = t, e.fn.button.noConflict = function() {
        return e.fn.button = n, this
    }, e(document).on("click.bs.button.data-api", "[data-toggle^=button]", function(t) {
        var n = e(t.target);
        n.hasClass("btn") || (n = n.closest(".btn")), n.button("toggle"), t.preventDefault()
    })
}(jQuery), + function(e) {
    "use strict";
    var t = function(t, n) {
        this.$element = e(t), this.$indicators = this.$element.find(".carousel-indicators"), this.options = n, this.paused = this.sliding = this.interval = this.$active = this.$items = null, "hover" == this.options.pause && this.$element.on("mouseenter", e.proxy(this.pause, this)).on("mouseleave", e.proxy(this.cycle, this))
    };
    t.DEFAULTS = {
        interval: 5e3,
        pause: "hover",
        wrap: !0
    }, t.prototype.cycle = function(t) {
        return t || (this.paused = !1), this.interval && clearInterval(this.interval), this.options.interval && !this.paused && (this.interval = setInterval(e.proxy(this.next, this), this.options.interval)), this
    }, t.prototype.getActiveIndex = function() {
        return this.$active = this.$element.find(".item.active"), this.$items = this.$active.parent().children(), this.$items.index(this.$active)
    }, t.prototype.to = function(t) {
        var n = this,
            i = this.getActiveIndex();
        return t > this.$items.length - 1 || 0 > t ? void 0 : this.sliding ? this.$element.one("slid.bs.carousel", function() {
            n.to(t)
        }) : i == t ? this.pause().cycle() : this.slide(t > i ? "next" : "prev", e(this.$items[t]))
    }, t.prototype.pause = function(t) {
        return t || (this.paused = !0), this.$element.find(".next, .prev").length && e.support.transition && (this.$element.trigger(e.support.transition.end), this.cycle(!0)), this.interval = clearInterval(this.interval), this
    }, t.prototype.next = function() {
        return this.sliding ? void 0 : this.slide("next")
    }, t.prototype.prev = function() {
        return this.sliding ? void 0 : this.slide("prev")
    }, t.prototype.slide = function(t, n) {
        var i = this.$element.find(".item.active"),
            s = n || i[t](),
            o = this.interval,
            r = "next" == t ? "left" : "right",
            a = "next" == t ? "first" : "last",
            l = this;
        if (!s.length) {
            if (!this.options.wrap) return;
            s = this.$element.find(".item")[a]()
        }
        if (s.hasClass("active")) return this.sliding = !1;
        var u = e.Event("slide.bs.carousel", {
            relatedTarget: s[0],
            direction: r
        });
        return this.$element.trigger(u), u.isDefaultPrevented() ? void 0 : (this.sliding = !0, o && this.pause(), this.$indicators.length && (this.$indicators.find(".active").removeClass("active"), this.$element.one("slid.bs.carousel", function() {
            var t = e(l.$indicators.children()[l.getActiveIndex()]);
            t && t.addClass("active")
        })), e.support.transition && this.$element.hasClass("slide") ? (s.addClass(t), s[0].offsetWidth, i.addClass(r), s.addClass(r), i.one(e.support.transition.end, function() {
            s.removeClass([t, r].join(" ")).addClass("active"), i.removeClass(["active", r].join(" ")), l.sliding = !1, setTimeout(function() {
                l.$element.trigger("slid.bs.carousel")
            }, 0)
        }).emulateTransitionEnd(1e3 * i.css("transition-duration").slice(0, -1))) : (i.removeClass("active"), s.addClass("active"), this.sliding = !1, this.$element.trigger("slid.bs.carousel")), o && this.cycle(), this)
    };
    var n = e.fn.carousel;
    e.fn.carousel = function(n) {
        return this.each(function() {
            var i = e(this),
                s = i.data("bs.carousel"),
                o = e.extend({}, t.DEFAULTS, i.data(), "object" == typeof n && n),
                r = "string" == typeof n ? n : o.slide;
            s || i.data("bs.carousel", s = new t(this, o)), "number" == typeof n ? s.to(n) : r ? s[r]() : o.interval && s.pause().cycle()
        })
    }, e.fn.carousel.Constructor = t, e.fn.carousel.noConflict = function() {
        return e.fn.carousel = n, this
    }, e(document).on("click.bs.carousel.data-api", "[data-slide], [data-slide-to]", function(t) {
        var n, i = e(this),
            s = e(i.attr("data-target") || (n = i.attr("href")) && n.replace(/.*(?=#[^\s]+$)/, "")),
            o = e.extend({}, s.data(), i.data()),
            r = i.attr("data-slide-to");
        r && (o.interval = !1), s.carousel(o), (r = i.attr("data-slide-to")) && s.data("bs.carousel").to(r), t.preventDefault()
    }), e(window).on("load", function() {
        e('[data-ride="carousel"]').each(function() {
            var t = e(this);
            t.carousel(t.data())
        })
    })
}(jQuery), + function(e) {
    "use strict";
    var t = function(n, i) {
        this.$element = e(n), this.options = e.extend({}, t.DEFAULTS, i), this.transitioning = null, this.options.parent && (this.$parent = e(this.options.parent)), this.options.toggle && this.toggle()
    };
    t.DEFAULTS = {
        toggle: !0
    }, t.prototype.dimension = function() {
        var e = this.$element.hasClass("width");
        return e ? "width" : "height"
    }, t.prototype.show = function() {
        if (!this.transitioning && !this.$element.hasClass("in")) {
            var t = e.Event("show.bs.collapse");
            if (this.$element.trigger(t), !t.isDefaultPrevented()) {
                var n = this.$parent && this.$parent.find("> .panel > .in");
                if (n && n.length) {
                    var i = n.data("bs.collapse");
                    if (i && i.transitioning) return;
                    n.collapse("hide"), i || n.data("bs.collapse", null)
                }
                var s = this.dimension();
                this.$element.removeClass("collapse").addClass("collapsing")[s](0), this.transitioning = 1;
                var o = function() {
                    this.$element.removeClass("collapsing").addClass("collapse in")[s]("auto"), this.transitioning = 0, this.$element.trigger("shown.bs.collapse")
                };
                if (!e.support.transition) return o.call(this);
                var r = e.camelCase(["scroll", s].join("-"));
                this.$element.one(e.support.transition.end, e.proxy(o, this)).emulateTransitionEnd(350)[s](this.$element[0][r])
            }
        }
    }, t.prototype.hide = function() {
        if (!this.transitioning && this.$element.hasClass("in")) {
            var t = e.Event("hide.bs.collapse");
            if (this.$element.trigger(t), !t.isDefaultPrevented()) {
                var n = this.dimension();
                this.$element[n](this.$element[n]())[0].offsetHeight, this.$element.addClass("collapsing").removeClass("collapse").removeClass("in"), this.transitioning = 1;
                var i = function() {
                    this.transitioning = 0, this.$element.trigger("hidden.bs.collapse").removeClass("collapsing").addClass("collapse")
                };
                return e.support.transition ? void this.$element[n](0).one(e.support.transition.end, e.proxy(i, this)).emulateTransitionEnd(350) : i.call(this)
            }
        }
    }, t.prototype.toggle = function() {
        this[this.$element.hasClass("in") ? "hide" : "show"]()
    };
    var n = e.fn.collapse;
    e.fn.collapse = function(n) {
        return this.each(function() {
            var i = e(this),
                s = i.data("bs.collapse"),
                o = e.extend({}, t.DEFAULTS, i.data(), "object" == typeof n && n);
            !s && o.toggle && "show" == n && (n = !n), s || i.data("bs.collapse", s = new t(this, o)), "string" == typeof n && s[n]()
        })
    }, e.fn.collapse.Constructor = t, e.fn.collapse.noConflict = function() {
        return e.fn.collapse = n, this
    }, e(document).on("click.bs.collapse.data-api", "[data-toggle=collapse]", function(t) {
        var n, i = e(this),
            s = i.attr("data-target") || t.preventDefault() || (n = i.attr("href")) && n.replace(/.*(?=#[^\s]+$)/, ""),
            o = e(s),
            r = o.data("bs.collapse"),
            a = r ? "toggle" : i.data(),
            l = i.attr("data-parent"),
            u = l && e(l);
        r && r.transitioning || (u && u.find('[data-toggle=collapse][data-parent="' + l + '"]').not(i).addClass("collapsed"), i[o.hasClass("in") ? "addClass" : "removeClass"]("collapsed")), o.collapse(a)
    })
}(jQuery), + function(e) {
    "use strict";

    function t(t) {
        e(i).remove(), e(s).each(function() {
            var i = n(e(this)),
                s = {
                    relatedTarget: this
                };
            i.hasClass("open") && (i.trigger(t = e.Event("hide.bs.dropdown", s)), t.isDefaultPrevented() || i.removeClass("open").trigger("hidden.bs.dropdown", s))
        })
    }

    function n(t) {
        var n = t.attr("data-target");
        n || (n = t.attr("href"), n = n && /#[A-Za-z]/.test(n) && n.replace(/.*(?=#[^\s]*$)/, ""));
        var i = n && e(n);
        return i && i.length ? i : t.parent()
    }
    var i = ".dropdown-backdrop",
        s = "[data-toggle=dropdown]",
        o = function(t) {
            e(t).on("click.bs.dropdown", this.toggle)
        };
    o.prototype.toggle = function(i) {
        var s = e(this);
        if (!s.is(".disabled, :disabled")) {
            var o = n(s),
                r = o.hasClass("open");
            if (t(), !r) {
                "ontouchstart" in document.documentElement && !o.closest(".navbar-nav").length && e('<div class="dropdown-backdrop"/>').insertAfter(e(this)).on("click", t);
                var a = {
                    relatedTarget: this
                };
                if (o.trigger(i = e.Event("show.bs.dropdown", a)), i.isDefaultPrevented()) return;
                o.toggleClass("open").trigger("shown.bs.dropdown", a), s.focus()
            }
            return !1
        }
    }, o.prototype.keydown = function(t) {
        if (/(38|40|27)/.test(t.keyCode)) {
            var i = e(this);
            if (t.preventDefault(), t.stopPropagation(), !i.is(".disabled, :disabled")) {
                var o = n(i),
                    r = o.hasClass("open");
                if (!r || r && 27 == t.keyCode) return 27 == t.which && o.find(s).focus(), i.click();
                var a = " li:not(.divider):visible a",
                    l = o.find("[role=menu]" + a + ", [role=listbox]" + a);
                if (l.length) {
                    var u = l.index(l.filter(":focus"));
                    38 == t.keyCode && u > 0 && u--, 40 == t.keyCode && u < l.length - 1 && u++, ~u || (u = 0), l.eq(u).focus()
                }
            }
        }
    };
    var r = e.fn.dropdown;
    e.fn.dropdown = function(t) {
        return this.each(function() {
            var n = e(this),
                i = n.data("bs.dropdown");
            i || n.data("bs.dropdown", i = new o(this)), "string" == typeof t && i[t].call(n)
        })
    }, e.fn.dropdown.Constructor = o, e.fn.dropdown.noConflict = function() {
        return e.fn.dropdown = r, this
    }, e(document).on("click.bs.dropdown.data-api", t).on("click.bs.dropdown.data-api", ".dropdown form", function(e) {
        e.stopPropagation()
    }).on("click.bs.dropdown.data-api", s, o.prototype.toggle).on("keydown.bs.dropdown.data-api", s + ", [role=menu], [role=listbox]", o.prototype.keydown)
}(jQuery), + function(e) {
    "use strict";
    var t = function(t, n) {
        this.options = n, this.$element = e(t), this.$backdrop = this.isShown = null, this.options.remote && this.$element.find(".modal-content").load(this.options.remote, e.proxy(function() {
            this.$element.trigger("loaded.bs.modal")
        }, this))
    };
    t.DEFAULTS = {
        backdrop: !0,
        keyboard: !0,
        show: !0
    }, t.prototype.toggle = function(e) {
        return this[this.isShown ? "hide" : "show"](e)
    }, t.prototype.show = function(t) {
        var n = this,
            i = e.Event("show.bs.modal", {
                relatedTarget: t
            });
        this.$element.trigger(i), this.isShown || i.isDefaultPrevented() || (this.isShown = !0, this.escape(), this.$element.on("click.dismiss.bs.modal", '[data-dismiss="modal"]', e.proxy(this.hide, this)), this.backdrop(function() {
            var i = e.support.transition && n.$element.hasClass("fade");
            n.$element.parent().length || n.$element.appendTo(document.body), n.$element.show().scrollTop(0), i && n.$element[0].offsetWidth, n.$element.addClass("in").attr("aria-hidden", !1), n.enforceFocus();
            var s = e.Event("shown.bs.modal", {
                relatedTarget: t
            });
            i ? n.$element.find(".modal-dialog").one(e.support.transition.end, function() {
                n.$element.focus().trigger(s)
            }).emulateTransitionEnd(300) : n.$element.focus().trigger(s)
        }))
    }, t.prototype.hide = function(t) {
        t && t.preventDefault(), t = e.Event("hide.bs.modal"), this.$element.trigger(t), this.isShown && !t.isDefaultPrevented() && (this.isShown = !1, this.escape(), e(document).off("focusin.bs.modal"), this.$element.removeClass("in").attr("aria-hidden", !0).off("click.dismiss.bs.modal"), e.support.transition && this.$element.hasClass("fade") ? this.$element.one(e.support.transition.end, e.proxy(this.hideModal, this)).emulateTransitionEnd(300) : this.hideModal())
    }, t.prototype.enforceFocus = function() {
        e(document).off("focusin.bs.modal").on("focusin.bs.modal", e.proxy(function(e) {
            this.$element[0] === e.target || this.$element.has(e.target).length || this.$element.focus()
        }, this))
    }, t.prototype.escape = function() {
        this.isShown && this.options.keyboard ? this.$element.on("keyup.dismiss.bs.modal", e.proxy(function(e) {
            27 == e.which && this.hide()
        }, this)) : this.isShown || this.$element.off("keyup.dismiss.bs.modal")
    }, t.prototype.hideModal = function() {
        var e = this;
        this.$element.hide(), this.backdrop(function() {
            e.removeBackdrop(), e.$element.trigger("hidden.bs.modal")
        })
    }, t.prototype.removeBackdrop = function() {
        this.$backdrop && this.$backdrop.remove(), this.$backdrop = null
    }, t.prototype.backdrop = function(t) {
        var n = this.$element.hasClass("fade") ? "fade" : "";
        if (this.isShown && this.options.backdrop) {
            var i = e.support.transition && n;
            if (this.$backdrop = e('<div class="modal-backdrop ' + n + '" />').appendTo(document.body), this.$element.on("click.dismiss.bs.modal", e.proxy(function(e) {
                    e.target === e.currentTarget && ("static" == this.options.backdrop ? this.$element[0].focus.call(this.$element[0]) : this.hide.call(this))
                }, this)), i && this.$backdrop[0].offsetWidth, this.$backdrop.addClass("in"), !t) return;
            i ? this.$backdrop.one(e.support.transition.end, t).emulateTransitionEnd(150) : t()
        } else !this.isShown && this.$backdrop ? (this.$backdrop.removeClass("in"), e.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one(e.support.transition.end, t).emulateTransitionEnd(150) : t()) : t && t()
    };
    var n = e.fn.modal;
    e.fn.modal = function(n, i) {
        return this.each(function() {
            var s = e(this),
                o = s.data("bs.modal"),
                r = e.extend({}, t.DEFAULTS, s.data(), "object" == typeof n && n);
            o || s.data("bs.modal", o = new t(this, r)), "string" == typeof n ? o[n](i) : r.show && o.show(i)
        })
    }, e.fn.modal.Constructor = t, e.fn.modal.noConflict = function() {
        return e.fn.modal = n, this
    }, e(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', function(t) {
        var n = e(this),
            i = n.attr("href"),
            s = e(n.attr("data-target") || i && i.replace(/.*(?=#[^\s]+$)/, "")),
            o = s.data("bs.modal") ? "toggle" : e.extend({
                remote: !/#/.test(i) && i
            }, s.data(), n.data());
        n.is("a") && t.preventDefault(), s.modal(o, this).one("hide", function() {
            n.is(":visible") && n.focus()
        })
    }), e(document).on("show.bs.modal", ".modal", function() {
        e(document.body).addClass("modal-open")
    }).on("hidden.bs.modal", ".modal", function() {
        e(document.body).removeClass("modal-open")
    })
}(jQuery), + function(e) {
    "use strict";
    var t = function(e, t) {
        this.type = this.options = this.enabled = this.timeout = this.hoverState = this.$element = null, this.init("tooltip", e, t)
    };
    t.DEFAULTS = {
        animation: !0,
        placement: "top",
        selector: !1,
        template: '<div class="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
        trigger: "hover focus",
        title: "",
        delay: 0,
        html: !1,
        container: !1
    }, t.prototype.init = function(t, n, i) {
        this.enabled = !0, this.type = t, this.$element = e(n), this.options = this.getOptions(i);
        for (var s = this.options.trigger.split(" "), o = s.length; o--;) {
            var r = s[o];
            if ("click" == r) this.$element.on("click." + this.type, this.options.selector, e.proxy(this.toggle, this));
            else if ("manual" != r) {
                var a = "hover" == r ? "mouseenter" : "focusin",
                    l = "hover" == r ? "mouseleave" : "focusout";
                this.$element.on(a + "." + this.type, this.options.selector, e.proxy(this.enter, this)), this.$element.on(l + "." + this.type, this.options.selector, e.proxy(this.leave, this))
            }
        }
        this.options.selector ? this._options = e.extend({}, this.options, {
            trigger: "manual",
            selector: ""
        }) : this.fixTitle()
    }, t.prototype.getDefaults = function() {
        return t.DEFAULTS
    }, t.prototype.getOptions = function(t) {
        return t = e.extend({}, this.getDefaults(), this.$element.data(), t), t.delay && "number" == typeof t.delay && (t.delay = {
            show: t.delay,
            hide: t.delay
        }), t
    }, t.prototype.getDelegateOptions = function() {
        var t = {},
            n = this.getDefaults();
        return this._options && e.each(this._options, function(e, i) {
            n[e] != i && (t[e] = i)
        }), t
    }, t.prototype.enter = function(t) {
        var n = t instanceof this.constructor ? t : e(t.currentTarget)[this.type](this.getDelegateOptions()).data("bs." + this.type);
        return clearTimeout(n.timeout), n.hoverState = "in", n.options.delay && n.options.delay.show ? void(n.timeout = setTimeout(function() {
            "in" == n.hoverState && n.show()
        }, n.options.delay.show)) : n.show()
    }, t.prototype.leave = function(t) {
        var n = t instanceof this.constructor ? t : e(t.currentTarget)[this.type](this.getDelegateOptions()).data("bs." + this.type);
        return clearTimeout(n.timeout), n.hoverState = "out", n.options.delay && n.options.delay.hide ? void(n.timeout = setTimeout(function() {
            "out" == n.hoverState && n.hide()
        }, n.options.delay.hide)) : n.hide()
    }, t.prototype.show = function() {
        var t = e.Event("show.bs." + this.type);
        if (this.hasContent() && this.enabled) {
            if (this.$element.trigger(t), t.isDefaultPrevented()) return;
            var n = this,
                i = this.tip();
            this.setContent(), this.options.animation && i.addClass("fade");
            var s = "function" == typeof this.options.placement ? this.options.placement.call(this, i[0], this.$element[0]) : this.options.placement,
                o = /\s?auto?\s?/i,
                r = o.test(s);
            r && (s = s.replace(o, "") || "top"), i.detach().css({
                top: 0,
                left: 0,
                display: "block"
            }).addClass(s), this.options.container ? i.appendTo(this.options.container) : i.insertAfter(this.$element);
            var a = this.getPosition(),
                l = i[0].offsetWidth,
                u = i[0].offsetHeight;
            if (r) {
                var c = this.$element.parent(),
                    d = s,
                    h = document.documentElement.scrollTop || document.body.scrollTop,
                    p = "body" == this.options.container ? window.innerWidth : c.outerWidth(),
                    f = "body" == this.options.container ? window.innerHeight : c.outerHeight(),
                    m = "body" == this.options.container ? 0 : c.offset().left;
                s = "bottom" == s && a.top + a.height + u - h > f ? "top" : "top" == s && a.top - h - u < 0 ? "bottom" : "right" == s && a.right + l > p ? "left" : "left" == s && a.left - l < m ? "right" : s, i.removeClass(d).addClass(s)
            }
            var g = this.getCalculatedOffset(s, a, l, u);
            this.applyPlacement(g, s), this.hoverState = null;
            var v = function() {
                n.$element.trigger("shown.bs." + n.type)
            };
            e.support.transition && this.$tip.hasClass("fade") ? i.one(e.support.transition.end, v).emulateTransitionEnd(150) : v()
        }
    }, t.prototype.applyPlacement = function(t, n) {
        var i, s = this.tip(),
            o = s[0].offsetWidth,
            r = s[0].offsetHeight,
            a = parseInt(s.css("margin-top"), 10),
            l = parseInt(s.css("margin-left"), 10);
        isNaN(a) && (a = 0), isNaN(l) && (l = 0), t.top = t.top + a, t.left = t.left + l, e.offset.setOffset(s[0], e.extend({
            using: function(e) {
                s.css({
                    top: Math.round(e.top),
                    left: Math.round(e.left)
                })
            }
        }, t), 0), s.addClass("in");
        var u = s[0].offsetWidth,
            c = s[0].offsetHeight;
        if ("top" == n && c != r && (i = !0, t.top = t.top + r - c), /bottom|top/.test(n)) {
            var d = 0;
            t.left < 0 && (d = -2 * t.left, t.left = 0, s.offset(t), u = s[0].offsetWidth, c = s[0].offsetHeight), this.replaceArrow(d - o + u, u, "left")
        } else this.replaceArrow(c - r, c, "top");
        i && s.offset(t)
    }, t.prototype.replaceArrow = function(e, t, n) {
        this.arrow().css(n, e ? 50 * (1 - e / t) + "%" : "")
    }, t.prototype.setContent = function() {
        var e = this.tip(),
            t = this.getTitle();
        e.find(".tooltip-inner")[this.options.html ? "html" : "text"](t), e.removeClass("fade in top bottom left right")
    }, t.prototype.hide = function() {
        function t() {
            "in" != n.hoverState && i.detach(), n.$element.trigger("hidden.bs." + n.type)
        }
        var n = this,
            i = this.tip(),
            s = e.Event("hide.bs." + this.type);
        return this.$element.trigger(s), s.isDefaultPrevented() ? void 0 : (i.removeClass("in"), e.support.transition && this.$tip.hasClass("fade") ? i.one(e.support.transition.end, t).emulateTransitionEnd(150) : t(), this.hoverState = null, this)
    }, t.prototype.fixTitle = function() {
        var e = this.$element;
        (e.attr("title") || "string" != typeof e.attr("data-original-title")) && e.attr("data-original-title", e.attr("title") || "").attr("title", "")
    }, t.prototype.hasContent = function() {
        return this.getTitle()
    }, t.prototype.getPosition = function() {
        var t = this.$element[0];
        return e.extend({}, "function" == typeof t.getBoundingClientRect ? t.getBoundingClientRect() : {
            width: t.offsetWidth,
            height: t.offsetHeight
        }, this.$element.offset())
    }, t.prototype.getCalculatedOffset = function(e, t, n, i) {
        return "bottom" == e ? {
            top: t.top + t.height,
            left: t.left + t.width / 2 - n / 2
        } : "top" == e ? {
            top: t.top - i,
            left: t.left + t.width / 2 - n / 2
        } : "left" == e ? {
            top: t.top + t.height / 2 - i / 2,
            left: t.left - n
        } : {
            top: t.top + t.height / 2 - i / 2,
            left: t.left + t.width
        }
    }, t.prototype.getTitle = function() {
        var e, t = this.$element,
            n = this.options;
        return e = t.attr("data-original-title") || ("function" == typeof n.title ? n.title.call(t[0]) : n.title)
    }, t.prototype.tip = function() {
        return this.$tip = this.$tip || e(this.options.template)
    }, t.prototype.arrow = function() {
        return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow")
    }, t.prototype.validate = function() {
        this.$element[0].parentNode || (this.hide(), this.$element = null, this.options = null)
    }, t.prototype.enable = function() {
        this.enabled = !0
    }, t.prototype.disable = function() {
        this.enabled = !1
    }, t.prototype.toggleEnabled = function() {
        this.enabled = !this.enabled
    }, t.prototype.toggle = function(t) {
        var n = t ? e(t.currentTarget)[this.type](this.getDelegateOptions()).data("bs." + this.type) : this;
        n.tip().hasClass("in") ? n.leave(n) : n.enter(n)
    }, t.prototype.destroy = function() {
        clearTimeout(this.timeout), this.hide().$element.off("." + this.type).removeData("bs." + this.type)
    };
    var n = e.fn.tooltip;
    e.fn.tooltip = function(n) {
        return this.each(function() {
            var i = e(this),
                s = i.data("bs.tooltip"),
                o = "object" == typeof n && n;
            (s || "destroy" != n) && (s || i.data("bs.tooltip", s = new t(this, o)), "string" == typeof n && s[n]())
        })
    }, e.fn.tooltip.Constructor = t, e.fn.tooltip.noConflict = function() {
        return e.fn.tooltip = n, this
    }
}(jQuery), + function(e) {
    "use strict";
    var t = function(e, t) {
        this.init("popover", e, t)
    };
    if (!e.fn.tooltip) throw new Error("Popover requires tooltip.js");
    t.DEFAULTS = e.extend({}, e.fn.tooltip.Constructor.DEFAULTS, {
        placement: "right",
        trigger: "click",
        content: "",
        template: '<div class="popover"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
    }), t.prototype = e.extend({}, e.fn.tooltip.Constructor.prototype), t.prototype.constructor = t, t.prototype.getDefaults = function() {
        return t.DEFAULTS
    }, t.prototype.setContent = function() {
        var e = this.tip(),
            t = this.getTitle(),
            n = this.getContent();
        e.find(".popover-title")[this.options.html ? "html" : "text"](t), e.find(".popover-content")[this.options.html ? "string" == typeof n ? "html" : "append" : "text"](n), e.removeClass("fade top bottom left right in"), e.find(".popover-title").html() || e.find(".popover-title").hide()
    }, t.prototype.hasContent = function() {
        return this.getTitle() || this.getContent()
    }, t.prototype.getContent = function() {
        var e = this.$element,
            t = this.options;
        return e.attr("data-content") || ("function" == typeof t.content ? t.content.call(e[0]) : t.content)
    }, t.prototype.arrow = function() {
        return this.$arrow = this.$arrow || this.tip().find(".arrow")
    }, t.prototype.tip = function() {
        return this.$tip || (this.$tip = e(this.options.template)), this.$tip
    };
    var n = e.fn.popover;
    e.fn.popover = function(n) {
        return this.each(function() {
            var i = e(this),
                s = i.data("bs.popover"),
                o = "object" == typeof n && n;
            (s || "destroy" != n) && (s || i.data("bs.popover", s = new t(this, o)), "string" == typeof n && s[n]())
        })
    }, e.fn.popover.Constructor = t, e.fn.popover.noConflict = function() {
        return e.fn.popover = n, this
    }
}(jQuery), + function(e) {
    "use strict";

    function t(n, i) {
        var s, o = e.proxy(this.process, this);
        this.$element = e(e(n).is("body") ? window : n), this.$body = e("body"), this.$scrollElement = this.$element.on("scroll.bs.scroll-spy.data-api", o), this.options = e.extend({}, t.DEFAULTS, i), this.selector = (this.options.target || (s = e(n).attr("href")) && s.replace(/.*(?=#[^\s]+$)/, "") || "") + " .nav li > a", this.offsets = e([]), this.targets = e([]), this.activeTarget = null, this.refresh(), this.process()
    }
    t.DEFAULTS = {
        offset: 10
    }, t.prototype.refresh = function() {
        var t = this.$element[0] == window ? "offset" : "position";
        this.offsets = e([]), this.targets = e([]);
        var n = this;
        this.$body.find(this.selector).map(function() {
            var i = e(this),
                s = i.data("target") || i.attr("href"),
                o = /^#./.test(s) && e(s);
            return o && o.length && o.is(":visible") && [
                [o[t]().top + (!e.isWindow(n.$scrollElement.get(0)) && n.$scrollElement.scrollTop()), s]
            ] || null
        }).sort(function(e, t) {
            return e[0] - t[0]
        }).each(function() {
            n.offsets.push(this[0]), n.targets.push(this[1])
        })
    }, t.prototype.process = function() {
        var e, t = this.$scrollElement.scrollTop() + this.options.offset,
            n = this.$scrollElement[0].scrollHeight || this.$body[0].scrollHeight,
            i = n - this.$scrollElement.height(),
            s = this.offsets,
            o = this.targets,
            r = this.activeTarget;
        if (t >= i) return r != (e = o.last()[0]) && this.activate(e);
        if (r && t <= s[0]) return r != (e = o[0]) && this.activate(e);
        for (e = s.length; e--;) r != o[e] && t >= s[e] && (!s[e + 1] || t <= s[e + 1]) && this.activate(o[e])
    }, t.prototype.activate = function(t) {
        this.activeTarget = t, e(this.selector).parentsUntil(this.options.target, ".active").removeClass("active");
        var n = this.selector + '[data-target="' + t + '"],' + this.selector + '[href="' + t + '"]',
            i = e(n).parents("li").addClass("active");
        i.parent(".dropdown-menu").length && (i = i.closest("li.dropdown").addClass("active")), i.trigger("activate.bs.scrollspy")
    };
    var n = e.fn.scrollspy;
    e.fn.scrollspy = function(n) {
        return this.each(function() {
            var i = e(this),
                s = i.data("bs.scrollspy"),
                o = "object" == typeof n && n;
            s || i.data("bs.scrollspy", s = new t(this, o)), "string" == typeof n && s[n]()
        })
    }, e.fn.scrollspy.Constructor = t, e.fn.scrollspy.noConflict = function() {
        return e.fn.scrollspy = n, this
    }, e(window).on("load", function() {
        e('[data-spy="scroll"]').each(function() {
            var t = e(this);
            t.scrollspy(t.data())
        })
    })
}(jQuery), + function(e) {
    "use strict";
    var t = function(t) {
        this.element = e(t)
    };
    t.prototype.show = function() {
        var t = this.element,
            n = t.closest("ul:not(.dropdown-menu)"),
            i = t.data("target");
        if (i || (i = t.attr("href"), i = i && i.replace(/.*(?=#[^\s]*$)/, "")), !t.parent("li").hasClass("active")) {
            var s = n.find(".active:last a")[0],
                o = e.Event("show.bs.tab", {
                    relatedTarget: s
                });
            if (t.trigger(o), !o.isDefaultPrevented()) {
                var r = e(i);
                this.activate(t.parent("li"), n), this.activate(r, r.parent(), function() {
                    t.trigger({
                        type: "shown.bs.tab",
                        relatedTarget: s
                    })
                })
            }
        }
    }, t.prototype.activate = function(t, n, i) {
        function s() {
            o.removeClass("active").find("> .dropdown-menu > .active").removeClass("active"), t.addClass("active"), r ? (t[0].offsetWidth, t.addClass("in")) : t.removeClass("fade"), t.parent(".dropdown-menu") && t.closest("li.dropdown").addClass("active"), i && i()
        }
        var o = n.find("> .active"),
            r = i && e.support.transition && o.hasClass("fade");
        r ? o.one(e.support.transition.end, s).emulateTransitionEnd(150) : s(), o.removeClass("in")
    };
    var n = e.fn.tab;
    e.fn.tab = function(n) {
        return this.each(function() {
            var i = e(this),
                s = i.data("bs.tab");
            s || i.data("bs.tab", s = new t(this)), "string" == typeof n && s[n]()
        })
    }, e.fn.tab.Constructor = t, e.fn.tab.noConflict = function() {
        return e.fn.tab = n, this
    }, e(document).on("click.bs.tab.data-api", '[data-toggle="tab"], [data-toggle="pill"]', function(t) {
        t.preventDefault(), e(this).tab("show")
    })
}(jQuery), + function(e) {
    "use strict";
    var t = function(n, i) {
        this.options = e.extend({}, t.DEFAULTS, i), this.$window = e(window).on("scroll.bs.affix.data-api", e.proxy(this.checkPosition, this)).on("click.bs.affix.data-api", e.proxy(this.checkPositionWithEventLoop, this)), this.$element = e(n), this.affixed = this.unpin = this.pinnedOffset = null, this.checkPosition()
    };
    t.RESET = "affix affix-top affix-bottom", t.DEFAULTS = {
        offset: 0
    }, t.prototype.getPinnedOffset = function() {
        if (this.pinnedOffset) return this.pinnedOffset;
        this.$element.removeClass(t.RESET).addClass("affix");
        var e = this.$window.scrollTop(),
            n = this.$element.offset();
        return this.pinnedOffset = n.top - e
    }, t.prototype.checkPositionWithEventLoop = function() {
        setTimeout(e.proxy(this.checkPosition, this), 1)
    }, t.prototype.checkPosition = function() {
        if (this.$element.is(":visible")) {
            var n = e(document).height(),
                i = this.$window.scrollTop(),
                s = this.$element.offset(),
                o = this.options.offset,
                r = o.top,
                a = o.bottom;
            "top" == this.affixed && (s.top += i), "object" != typeof o && (a = r = o), "function" == typeof r && (r = o.top(this.$element)), "function" == typeof a && (a = o.bottom(this.$element));
            var l = null != this.unpin && i + this.unpin <= s.top ? !1 : null != a && s.top + this.$element.height() >= n - a ? "bottom" : null != r && r >= i ? "top" : !1;
            if (this.affixed !== l) {
                this.unpin && this.$element.css("top", "");
                var u = "affix" + (l ? "-" + l : ""),
                    c = e.Event(u + ".bs.affix");
                this.$element.trigger(c), c.isDefaultPrevented() || (this.affixed = l, this.unpin = "bottom" == l ? this.getPinnedOffset() : null, this.$element.removeClass(t.RESET).addClass(u).trigger(e.Event(u.replace("affix", "affixed"))), "bottom" == l && this.$element.offset({
                    top: n - a - this.$element.height()
                }))
            }
        }
    };
    var n = e.fn.affix;
    e.fn.affix = function(n) {
        return this.each(function() {
            var i = e(this),
                s = i.data("bs.affix"),
                o = "object" == typeof n && n;
            s || i.data("bs.affix", s = new t(this, o)), "string" == typeof n && s[n]()
        })
    }, e.fn.affix.Constructor = t, e.fn.affix.noConflict = function() {
        return e.fn.affix = n, this
    }, e(window).on("load", function() {
        e('[data-spy="affix"]').each(function() {
            var t = e(this),
                n = t.data();
            n.offset = n.offset || {}, n.offsetBottom && (n.offset.bottom = n.offsetBottom), n.offsetTop && (n.offset.top = n.offsetTop), t.affix(n)
        })
    })
}(jQuery),
function(e) {
    var t = function(t, n) {
        var t = e(t),
            i = this,
            s = 'li:has([data-toggle="tab"])',
            o = e.extend({}, e.fn.bootstrapWizard.defaults, n),
            r = null,
            a = null;
        this.rebindClick = function(e, t) {
            e.unbind("click", t).bind("click", t)
        }, this.fixNavigationButtons = function() {
            return r.length || (a.find("a:first").tab("show"), r = a.find(s + ":first")), e(o.previousSelector, t).toggleClass("disabled", i.firstIndex() >= i.currentIndex()), e(o.nextSelector, t).toggleClass("disabled", i.currentIndex() >= i.navigationLength()), i.rebindClick(e(o.nextSelector, t), i.next), i.rebindClick(e(o.previousSelector, t), i.previous), i.rebindClick(e(o.lastSelector, t), i.last), i.rebindClick(e(o.firstSelector, t), i.first), o.onTabShow && "function" == typeof o.onTabShow && o.onTabShow(r, a, i.currentIndex()) === !1 ? !1 : void 0
        }, this.next = function() {
            return t.hasClass("last") ? !1 : o.onNext && "function" == typeof o.onNext && o.onNext(r, a, i.nextIndex()) === !1 ? !1 : ($index = i.nextIndex(), $index > i.navigationLength() || a.find(s + ":eq(" + $index + ") a").tab("show"), void 0)
        }, this.previous = function() {
            return t.hasClass("first") ? !1 : o.onPrevious && "function" == typeof o.onPrevious && o.onPrevious(r, a, i.previousIndex()) === !1 ? !1 : ($index = i.previousIndex(), 0 > $index || a.find(s + ":eq(" + $index + ") a").tab("show"), void 0)
        }, this.first = function() {
            return o.onFirst && "function" == typeof o.onFirst && o.onFirst(r, a, i.firstIndex()) === !1 ? !1 : t.hasClass("disabled") ? !1 : (a.find(s + ":eq(0) a").tab("show"), void 0)
        }, this.last = function() {
            return o.onLast && "function" == typeof o.onLast && o.onLast(r, a, i.lastIndex()) === !1 ? !1 : t.hasClass("disabled") ? !1 : (a.find(s + ":eq(" + i.navigationLength() + ") a").tab("show"), void 0)
        }, this.currentIndex = function() {
            return a.find(s).index(r)
        }, this.firstIndex = function() {
            return 0
        }, this.lastIndex = function() {
            return i.navigationLength()
        }, this.getIndex = function(e) {
            return a.find(s).index(e)
        }, this.nextIndex = function() {
            return a.find(s).index(r) + 1
        }, this.previousIndex = function() {
            return a.find(s).index(r) - 1
        }, this.navigationLength = function() {
            return a.find(s).length - 1
        }, this.activeTab = function() {
            return r
        }, this.nextTab = function() {
            return a.find(s + ":eq(" + (i.currentIndex() + 1) + ")").length ? a.find(s + ":eq(" + (i.currentIndex() + 1) + ")") : null
        }, this.previousTab = function() {
            return i.currentIndex() <= 0 ? null : a.find(s + ":eq(" + parseInt(i.currentIndex() - 1) + ")")
        }, this.show = function(e) {
            return t.find(s + ":eq(" + e + ") a").tab("show")
        }, this.disable = function(e) {
            a.find(s + ":eq(" + e + ")").addClass("disabled")
        }, this.enable = function(e) {
            a.find(s + ":eq(" + e + ")").removeClass("disabled")
        }, this.hide = function(e) {
            a.find(s + ":eq(" + e + ")").hide()
        }, this.display = function(e) {
            a.find(s + ":eq(" + e + ")").show()
        }, this.remove = function(t) {
            var n = t[0],
                i = "undefined" != typeof t[1] ? t[1] : !1,
                o = a.find(s + ":eq(" + n + ")");
            if (i) {
                var r = o.find("a").attr("href");
                e(r).remove()
            }
            o.remove()
        };
        var l = function(t) {
                var n = a.find(s).index(e(t.currentTarget).parent(s));
                return o.onTabClick && "function" == typeof o.onTabClick && o.onTabClick(r, a, i.currentIndex(), n) === !1 ? !1 : void 0
            },
            u = function(t) {
                $element = e(t.target).parent();
                var n = a.find(s).index($element);
                return $element.hasClass("disabled") ? !1 : o.onTabChange && "function" == typeof o.onTabChange && o.onTabChange(r, a, i.currentIndex(), n) === !1 ? !1 : (r = $element, i.fixNavigationButtons(), void 0)
            };
        this.resetWizard = function() {
            e('a[data-toggle="tab"]', a).off("click", l), e('a[data-toggle="tab"]', a).off("shown shown.bs.tab", u), a = t.find("ul:first", t), r = a.find(s + ".active", t), e('a[data-toggle="tab"]', a).on("click", l), e('a[data-toggle="tab"]', a).on("shown shown.bs.tab", u), i.fixNavigationButtons()
        }, a = t.find("ul:first", t), r = a.find(s + ".active", t), a.hasClass(o.tabClass) || a.addClass(o.tabClass), o.onInit && "function" == typeof o.onInit && o.onInit(r, a, 0), o.onShow && "function" == typeof o.onShow && o.onShow(r, a, i.nextIndex()), e('a[data-toggle="tab"]', a).on("click", l), e('a[data-toggle="tab"]', a).on("shown shown.bs.tab", u), this.fixNavigationButtons()
    };
    e.fn.bootstrapWizard = function(n) {
        if ("string" == typeof n) {
            var i = Array.prototype.slice.call(arguments, 1);
            return 1 === i.length && i.toString(), this.data("bootstrapWizard")[n](i)
        }
        return this.each(function() {
            var i = e(this);
            if (!i.data("bootstrapWizard")) {
                var s = new t(i, n);
                i.data("bootstrapWizard", s)
            }
        })
    }, e.fn.bootstrapWizard.defaults = {
        tabClass: "nav nav-pills",
        nextSelector: ".wizard li.next",
        previousSelector: ".wizard li.previous",
        firstSelector: ".wizard li.first",
        lastSelector: ".wizard li.last",
        onShow: null,
        onInit: null,
        onNext: null,
        onPrevious: null,
        onLast: null,
        onFirst: null,
        onTabChange: null,
        onTabClick: null,
        onTabShow: null
    }
}(jQuery),
function(e) {
    var t = function(t, n) {
        t = e(t);
        var i = this,
            s = e.extend({}, e.fn.bootstrapWizard.defaults, n),
            o = null,
            r = null;
        this.rebindClick = function(e, t) {
            e.unbind("click", t).bind("click", t)
        }, this.fixNavigationButtons = function() {
            return o.length || (r.find("a:first").tab("show"), o = r.find('li:has([data-toggle="tab"]):first')), e(s.previousSelector, t).toggleClass("disabled", i.firstIndex() >= i.currentIndex()), e(s.nextSelector, t).toggleClass("disabled", i.currentIndex() >= i.navigationLength()), i.rebindClick(e(s.nextSelector, t), i.next), i.rebindClick(e(s.previousSelector, t), i.previous), i.rebindClick(e(s.lastSelector, t), i.last), i.rebindClick(e(s.firstSelector, t), i.first), s.onTabShow && "function" == typeof s.onTabShow && !1 === s.onTabShow(o, r, i.currentIndex()) ? !1 : void 0
        }, this.next = function() {
            return t.hasClass("last") || s.onNext && "function" == typeof s.onNext && !1 === s.onNext(o, r, i.nextIndex()) ? !1 : ($index = i.nextIndex(), $index > i.navigationLength() || r.find('li:has([data-toggle="tab"]):eq(' + $index + ") a").tab("show"), void 0)
        }, this.previous = function() {
            return t.hasClass("first") || s.onPrevious && "function" == typeof s.onPrevious && !1 === s.onPrevious(o, r, i.previousIndex()) ? !1 : ($index = i.previousIndex(), 0 > $index || r.find('li:has([data-toggle="tab"]):eq(' + $index + ") a").tab("show"), void 0)
        }, this.first = function() {
            return s.onFirst && "function" == typeof s.onFirst && !1 === s.onFirst(o, r, i.firstIndex()) || t.hasClass("disabled") ? !1 : (r.find('li:has([data-toggle="tab"]):eq(0) a').tab("show"), void 0)
        }, this.last = function() {
            return s.onLast && "function" == typeof s.onLast && !1 === s.onLast(o, r, i.lastIndex()) || t.hasClass("disabled") ? !1 : (r.find('li:has([data-toggle="tab"]):eq(' + i.navigationLength() + ") a").tab("show"), void 0)
        }, this.currentIndex = function() {
            return r.find('li:has([data-toggle="tab"])').index(o)
        }, this.firstIndex = function() {
            return 0
        }, this.lastIndex = function() {
            return i.navigationLength()
        }, this.getIndex = function(e) {
            return r.find('li:has([data-toggle="tab"])').index(e)
        }, this.nextIndex = function() {
            return r.find('li:has([data-toggle="tab"])').index(o) + 1
        }, this.previousIndex = function() {
            return r.find('li:has([data-toggle="tab"])').index(o) - 1
        }, this.navigationLength = function() {
            return r.find('li:has([data-toggle="tab"])').length - 1
        }, this.activeTab = function() {
            return o
        }, this.nextTab = function() {
            return r.find('li:has([data-toggle="tab"]):eq(' + (i.currentIndex() + 1) + ")").length ? r.find('li:has([data-toggle="tab"]):eq(' + (i.currentIndex() + 1) + ")") : null
        }, this.previousTab = function() {
            return 0 >= i.currentIndex() ? null : r.find('li:has([data-toggle="tab"]):eq(' + parseInt(i.currentIndex() - 1) + ")")
        }, this.show = function(e) {
            return t.find('li:has([data-toggle="tab"]):eq(' + e + ") a").tab("show")
        }, this.disable = function(e) {
            r.find('li:has([data-toggle="tab"]):eq(' + e + ")").addClass("disabled")
        }, this.enable = function(e) {
            r.find('li:has([data-toggle="tab"]):eq(' + e + ")").removeClass("disabled")
        }, this.hide = function(e) {
            r.find('li:has([data-toggle="tab"]):eq(' + e + ")").hide()
        }, this.display = function(e) {
            r.find('li:has([data-toggle="tab"]):eq(' + e + ")").show()
        }, this.remove = function(t) {
            var n = "undefined" != typeof t[1] ? t[1] : !1;
            t = r.find('li:has([data-toggle="tab"]):eq(' + t[0] + ")"), n && (n = t.find("a").attr("href"), e(n).remove()), t.remove()
        }, r = t.find("ul:first", t), o = r.find('li:has([data-toggle="tab"]).active', t), r.hasClass(s.tabClass) || r.addClass(s.tabClass), s.onInit && "function" == typeof s.onInit && s.onInit(o, r, 0), s.onShow && "function" == typeof s.onShow && s.onShow(o, r, i.nextIndex()), i.fixNavigationButtons(), e('a[data-toggle="tab"]', r).on("click", function(t) {
            return t = r.find('li:has([data-toggle="tab"])').index(e(t.currentTarget).parent('li:has([data-toggle="tab"])')), s.onTabClick && "function" == typeof s.onTabClick && !1 === s.onTabClick(o, r, i.currentIndex(), t) ? !1 : void 0
        }), e('a[data-toggle="tab"]', r).on("shown shown.bs.tab", function(t) {
            return $element = e(t.target).parent(), t = r.find('li:has([data-toggle="tab"])').index($element), $element.hasClass("disabled") || s.onTabChange && "function" == typeof s.onTabChange && !1 === s.onTabChange(o, r, i.currentIndex(), t) ? !1 : (o = $element, i.fixNavigationButtons(), void 0)
        })
    };
    e.fn.bootstrapWizard = function(n) {
        if ("string" == typeof n) {
            var i = Array.prototype.slice.call(arguments, 1);
            return 1 === i.length && i.toString(), this.data("bootstrapWizard")[n](i)
        }
        return this.each(function(i) {
            if (i = e(this), !i.data("bootstrapWizard")) {
                var s = new t(i, n);
                i.data("bootstrapWizard", s)
            }
        })
    }, e.fn.bootstrapWizard.defaults = {
        tabClass: "nav nav-pills",
        nextSelector: ".wizard li.next",
        previousSelector: ".wizard li.previous",
        firstSelector: ".wizard li.first",
        lastSelector: ".wizard li.last",
        onShow: null,
        onInit: null,
        onNext: null,
        onPrevious: null,
        onLast: null,
        onFirst: null,
        onTabChange: null,
        onTabClick: null,
        onTabShow: null
    }
}(jQuery), jQuery.easing.jswing = jQuery.easing.swing, jQuery.extend(jQuery.easing, {
        def: "easeOutQuad",
        swing: function(e, t, n, i, s) {
            return jQuery.easing[jQuery.easing.def](e, t, n, i, s)
        },
        easeInQuad: function(e, t, n, i, s) {
            return i * (t /= s) * t + n
        },
        easeOutQuad: function(e, t, n, i, s) {
            return -i * (t /= s) * (t - 2) + n
        },
        easeInOutQuad: function(e, t, n, i, s) {
            return (t /= s / 2) < 1 ? i / 2 * t * t + n : -i / 2 * (--t * (t - 2) - 1) + n
        },
        easeInCubic: function(e, t, n, i, s) {
            return i * (t /= s) * t * t + n
        },
        easeOutCubic: function(e, t, n, i, s) {
            return i * ((t = t / s - 1) * t * t + 1) + n
        },
        easeInOutCubic: function(e, t, n, i, s) {
            return (t /= s / 2) < 1 ? i / 2 * t * t * t + n : i / 2 * ((t -= 2) * t * t + 2) + n
        },
        easeInQuart: function(e, t, n, i, s) {
            return i * (t /= s) * t * t * t + n
        },
        easeOutQuart: function(e, t, n, i, s) {
            return -i * ((t = t / s - 1) * t * t * t - 1) + n
        },
        easeInOutQuart: function(e, t, n, i, s) {
            return (t /= s / 2) < 1 ? i / 2 * t * t * t * t + n : -i / 2 * ((t -= 2) * t * t * t - 2) + n
        },
        easeInQuint: function(e, t, n, i, s) {
            return i * (t /= s) * t * t * t * t + n
        },
        easeOutQuint: function(e, t, n, i, s) {
            return i * ((t = t / s - 1) * t * t * t * t + 1) + n
        },
        easeInOutQuint: function(e, t, n, i, s) {
            return (t /= s / 2) < 1 ? i / 2 * t * t * t * t * t + n : i / 2 * ((t -= 2) * t * t * t * t + 2) + n
        },
        easeInSine: function(e, t, n, i, s) {
            return -i * Math.cos(t / s * (Math.PI / 2)) + i + n
        },
        easeOutSine: function(e, t, n, i, s) {
            return i * Math.sin(t / s * (Math.PI / 2)) + n
        },
        easeInOutSine: function(e, t, n, i, s) {
            return -i / 2 * (Math.cos(Math.PI * t / s) - 1) + n
        },
        easeInExpo: function(e, t, n, i, s) {
            return 0 == t ? n : i * Math.pow(2, 10 * (t / s - 1)) + n
        },
        easeOutExpo: function(e, t, n, i, s) {
            return t == s ? n + i : i * (-Math.pow(2, -10 * t / s) + 1) + n
        },
        easeInOutExpo: function(e, t, n, i, s) {
            return 0 == t ? n : t == s ? n + i : (t /= s / 2) < 1 ? i / 2 * Math.pow(2, 10 * (t - 1)) + n : i / 2 * (-Math.pow(2, -10 * --t) + 2) + n
        },
        easeInCirc: function(e, t, n, i, s) {
            return -i * (Math.sqrt(1 - (t /= s) * t) - 1) + n
        },
        easeOutCirc: function(e, t, n, i, s) {
            return i * Math.sqrt(1 - (t = t / s - 1) * t) + n
        },
        easeInOutCirc: function(e, t, n, i, s) {
            return (t /= s / 2) < 1 ? -i / 2 * (Math.sqrt(1 - t * t) - 1) + n : i / 2 * (Math.sqrt(1 - (t -= 2) * t) + 1) + n
        },
        easeInElastic: function(e, t, n, i, s) {
            var o = 1.70158,
                r = 0,
                a = i;
            if (0 == t) return n;
            if (1 == (t /= s)) return n + i;
            if (r || (r = .3 * s), a < Math.abs(i)) {
                a = i;
                var o = r / 4
            } else var o = r / (2 * Math.PI) * Math.asin(i / a);
            return -(a * Math.pow(2, 10 * (t -= 1)) * Math.sin(2 * (t * s - o) * Math.PI / r)) + n
        },
        easeOutElastic: function(e, t, n, i, s) {
            var o = 1.70158,
                r = 0,
                a = i;
            if (0 == t) return n;
            if (1 == (t /= s)) return n + i;
            if (r || (r = .3 * s), a < Math.abs(i)) {
                a = i;
                var o = r / 4
            } else var o = r / (2 * Math.PI) * Math.asin(i / a);
            return a * Math.pow(2, -10 * t) * Math.sin(2 * (t * s - o) * Math.PI / r) + i + n
        },
        easeInOutElastic: function(e, t, n, i, s) {
            var o = 1.70158,
                r = 0,
                a = i;
            if (0 == t) return n;
            if (2 == (t /= s / 2)) return n + i;
            if (r || (r = .3 * s * 1.5), a < Math.abs(i)) {
                a = i;
                var o = r / 4
            } else var o = r / (2 * Math.PI) * Math.asin(i / a);
            return 1 > t ? -.5 * a * Math.pow(2, 10 * (t -= 1)) * Math.sin(2 * (t * s - o) * Math.PI / r) + n : a * Math.pow(2, -10 * (t -= 1)) * Math.sin(2 * (t * s - o) * Math.PI / r) * .5 + i + n
        },
        easeInBack: function(e, t, n, i, s, o) {
            return void 0 == o && (o = 1.70158), i * (t /= s) * t * ((o + 1) * t - o) + n
        },
        easeOutBack: function(e, t, n, i, s, o) {
            return void 0 == o && (o = 1.70158), i * ((t = t / s - 1) * t * ((o + 1) * t + o) + 1) + n
        },
        easeInOutBack: function(e, t, n, i, s, o) {
            return void 0 == o && (o = 1.70158), (t /= s / 2) < 1 ? i / 2 * t * t * (((o *= 1.525) + 1) * t - o) + n : i / 2 * ((t -= 2) * t * (((o *= 1.525) + 1) * t + o) + 2) + n
        },
        easeInBounce: function(e, t, n, i, s) {
            return i - jQuery.easing.easeOutBounce(e, s - t, 0, i, s) + n
        },
        easeOutBounce: function(e, t, n, i, s) {
            return (t /= s) < 1 / 2.75 ? 7.5625 * i * t * t + n : 2 / 2.75 > t ? i * (7.5625 * (t -= 1.5 / 2.75) * t + .75) + n : 2.5 / 2.75 > t ? i * (7.5625 * (t -= 2.25 / 2.75) * t + .9375) + n : i * (7.5625 * (t -= 2.625 / 2.75) * t + .984375) + n
        },
        easeInOutBounce: function(e, t, n, i, s) {
            return s / 2 > t ? .5 * jQuery.easing.easeInBounce(e, 2 * t, 0, i, s) + n : .5 * jQuery.easing.easeOutBounce(e, 2 * t - s, 0, i, s) + .5 * i + n
        }
    }),
    function(e) {
        e.fn.ezMark = function(t) {
            t = t || {};
            var n = {
                checkboxCls: t.checkboxCls || "ez-checkbox",
                radioCls: t.radioCls || "ez-radio",
                checkedCls: t.checkedCls || "ez-checked",
                selectedCls: t.selectedCls || "ez-selected",
                hideCls: "ez-hide"
            };
            return this.each(function() {
                var t = e(this),
                    i = "checkbox" == t.attr("type") ? '<div class="' + n.checkboxCls + '">' : '<div class="' + n.radioCls + '">';
                "checkbox" == t.attr("type") ? (t.addClass(n.hideCls).wrap(i).change(function() {
                    e(this).is(":checked") ? e(this).parent().addClass(n.checkedCls) : e(this).parent().removeClass(n.checkedCls)
                }), t.is(":checked") && t.parent().addClass(n.checkedCls)) : "radio" == t.attr("type") && (t.addClass(n.hideCls).wrap(i).change(function() {
                    e('input[name="' + e(this).attr("name") + '"]').each(function() {
                        e(this).is(":checked") ? e(this).parent().addClass(n.selectedCls) : e(this).parent().removeClass(n.selectedCls)
                    })
                }), t.is(":checked") && t.parent().addClass(n.selectedCls))
            })
        }
    }(jQuery), ! function(e, t, n) {
        e.fn.jScrollPane = function(i) {
            function s(i, s) {
                function o(t) {
                    var s, a, u, d, h, p, g = !1,
                        v = !1;
                    if (O = t, q === n) h = i.scrollTop(), p = i.scrollLeft(), i.css({
                        overflow: "hidden",
                        padding: 0
                    }), R = i.innerWidth() + bt, W = i.innerHeight(), i.width(R), q = e('<div class="jspPane" />').css("padding", yt).append(i.children()), V = e('<div class="jspContainer" />').css({
                        width: R + "px",
                        height: W + "px"
                    }).append(q).appendTo(i);
                    else {
                        if (i.css("width", ""), g = O.stickToBottom && E(), v = O.stickToRight && $(), d = i.innerWidth() + bt != R || i.outerHeight() != W, d && (R = i.innerWidth() + bt, W = i.innerHeight(), V.css({
                                width: R + "px",
                                height: W + "px"
                            })), !d && xt == U && q.outerHeight() == Q) return i.width(R), void 0;
                        xt = U, q.css("width", ""), i.width(R), V.find(">.jspVerticalBar,>.jspHorizontalBar").remove().end()
                    }
                    q.css("overflow", "auto"), U = t.contentWidth ? t.contentWidth : q[0].scrollWidth, Q = q[0].scrollHeight, q.css("overflow", ""), Y = U / R, X = Q / W, K = X > 1, G = Y > 1, G || K ? (i.addClass("jspScrollable"), s = O.maintainPosition && (et || it), s && (a = j(), u = F()), r(), l(), c(), s && (k(v ? U - R : a, !1), T(g ? Q - W : u, !1)), D(), A(), H(), O.enableKeyboardNavigation && B(), O.clickOnTrack && f(), I(), O.hijackInternalLinks && _()) : (i.removeClass("jspScrollable"), q.css({
                        top: 0,
                        left: 0,
                        width: V.width() - bt
                    }), N(), M(), P(), m()), O.autoReinitialise && !vt ? vt = setInterval(function() {
                        o(O)
                    }, O.autoReinitialiseDelay) : !O.autoReinitialise && vt && clearInterval(vt), h && i.scrollTop(0) && T(h, !1), p && i.scrollLeft(0) && k(p, !1), i.trigger("jsp-initialised", [G || K])
                }

                function r() {
                    K && (V.append(e('<div class="jspVerticalBar" />').append(e('<div class="jspCap jspCapTop" />'), e('<div class="jspTrack" />').append(e('<div class="jspDrag" />').append(e('<div class="jspDragTop" />'), e('<div class="jspDragBottom" />'))), e('<div class="jspCap jspCapBottom" />'))), st = V.find(">.jspVerticalBar"), ot = st.find(">.jspTrack"), J = ot.find(">.jspDrag"), O.showArrows && (ut = e('<a class="jspArrow jspArrowUp" />').bind("mousedown.jsp", h(0, -1)).bind("click.jsp", L), ct = e('<a class="jspArrow jspArrowDown" />').bind("mousedown.jsp", h(0, 1)).bind("click.jsp", L), O.arrowScrollOnHover && (ut.bind("mouseover.jsp", h(0, -1, ut)), ct.bind("mouseover.jsp", h(0, 1, ct))), d(ot, O.verticalArrowPositions, ut, ct)), at = W, V.find(">.jspVerticalBar>.jspCap:visible,>.jspVerticalBar>.jspArrow").each(function() {
                        at -= e(this).outerHeight()
                    }), J.hover(function() {
                        J.addClass("jspHover")
                    }, function() {
                        J.removeClass("jspHover")
                    }).bind("mousedown.jsp", function(t) {
                        e("html").bind("dragstart.jsp selectstart.jsp", L), J.addClass("jspActive");
                        var n = t.pageY - J.position().top;
                        return e("html").bind("mousemove.jsp", function(e) {
                            v(e.pageY - n, !1)
                        }).bind("mouseup.jsp mouseleave.jsp", g), !1
                    }), a())
                }

                function a() {
                    ot.height(at + "px"), et = 0, rt = O.verticalGutter + ot.outerWidth(), q.width(R - rt - bt);
                    try {
                        0 === st.position().left && q.css("margin-left", rt + "px")
                    } catch (e) {}
                }

                function l() {
                    G && (V.append(e('<div class="jspHorizontalBar" />').append(e('<div class="jspCap jspCapLeft" />'), e('<div class="jspTrack" />').append(e('<div class="jspDrag" />').append(e('<div class="jspDragLeft" />'), e('<div class="jspDragRight" />'))), e('<div class="jspCap jspCapRight" />'))), dt = V.find(">.jspHorizontalBar"), ht = dt.find(">.jspTrack"), tt = ht.find(">.jspDrag"), O.showArrows && (mt = e('<a class="jspArrow jspArrowLeft" />').bind("mousedown.jsp", h(-1, 0)).bind("click.jsp", L), gt = e('<a class="jspArrow jspArrowRight" />').bind("mousedown.jsp", h(1, 0)).bind("click.jsp", L), O.arrowScrollOnHover && (mt.bind("mouseover.jsp", h(-1, 0, mt)), gt.bind("mouseover.jsp", h(1, 0, gt))), d(ht, O.horizontalArrowPositions, mt, gt)), tt.hover(function() {
                        tt.addClass("jspHover")
                    }, function() {
                        tt.removeClass("jspHover")
                    }).bind("mousedown.jsp", function(t) {
                        e("html").bind("dragstart.jsp selectstart.jsp", L), tt.addClass("jspActive");
                        var n = t.pageX - tt.position().left;
                        return e("html").bind("mousemove.jsp", function(e) {
                            b(e.pageX - n, !1)
                        }).bind("mouseup.jsp mouseleave.jsp", g), !1
                    }), pt = V.innerWidth(), u())
                }

                function u() {
                    V.find(">.jspHorizontalBar>.jspCap:visible,>.jspHorizontalBar>.jspArrow").each(function() {
                        pt -= e(this).outerWidth()
                    }), ht.width(pt + "px"), it = 0
                }

                function c() {
                    if (G && K) {
                        var t = ht.outerHeight(),
                            n = ot.outerWidth();
                        at -= t, e(dt).find(">.jspCap:visible,>.jspArrow").each(function() {
                            pt += e(this).outerWidth()
                        }), pt -= n, W -= n, R -= t, ht.parent().append(e('<div class="jspCorner" />').css("width", t + "px")), a(), u()
                    }
                    G && q.width(V.outerWidth() - bt + "px"), Q = q.outerHeight(), X = Q / W, G && (ft = Math.ceil(1 / Y * pt), ft > O.horizontalDragMaxWidth ? ft = O.horizontalDragMaxWidth : ft < O.horizontalDragMinWidth && (ft = O.horizontalDragMinWidth), tt.width(ft + "px"), nt = pt - ft, x(it)), K && (lt = Math.ceil(1 / X * at), lt > O.verticalDragMaxHeight ? lt = O.verticalDragMaxHeight : lt < O.verticalDragMinHeight && (lt = O.verticalDragMinHeight), J.height(lt + "px"), Z = at - lt, y(et))
                }

                function d(e, t, n, i) {
                    var s, o = "before",
                        r = "after";
                    "os" == t && (t = /Mac/.test(navigator.platform) ? "after" : "split"), t == o ? r = t : t == r && (o = t, s = n, n = i, i = s), e[o](n)[r](i)
                }

                function h(e, t, n) {
                    return function() {
                        return p(e, t, this, n), this.blur(), !1
                    }
                }

                function p(t, n, i, s) {
                    i = e(i).addClass("jspActive");
                    var o, r, a = !0,
                        l = function() {
                            0 !== t && wt.scrollByX(t * O.arrowButtonSpeed), 0 !== n && wt.scrollByY(n * O.arrowButtonSpeed), r = setTimeout(l, a ? O.initialDelay : O.arrowRepeatFreq), a = !1
                        };
                    l(), o = s ? "mouseout.jsp" : "mouseup.jsp", s = s || e("html"), s.bind(o, function() {
                        i.removeClass("jspActive"), r && clearTimeout(r), r = null, s.unbind(o)
                    })
                }

                function f() {
                    m(), K && ot.bind("mousedown.jsp", function(t) {
                        if (t.originalTarget === n || t.originalTarget == t.currentTarget) {
                            var i, s = e(this),
                                o = s.offset(),
                                r = t.pageY - o.top - et,
                                a = !0,
                                l = function() {
                                    var e = s.offset(),
                                        n = t.pageY - e.top - lt / 2,
                                        o = W * O.scrollPagePercent,
                                        c = Z * o / (Q - W);
                                    if (0 > r) et - c > n ? wt.scrollByY(-o) : v(n);
                                    else {
                                        if (!(r > 0)) return u(), void 0;
                                        n > et + c ? wt.scrollByY(o) : v(n)
                                    }
                                    i = setTimeout(l, a ? O.initialDelay : O.trackClickRepeatFreq), a = !1
                                },
                                u = function() {
                                    i && clearTimeout(i), i = null, e(document).unbind("mouseup.jsp", u)
                                };
                            return l(), e(document).bind("mouseup.jsp", u), !1
                        }
                    }), G && ht.bind("mousedown.jsp", function(t) {
                        if (t.originalTarget === n || t.originalTarget == t.currentTarget) {
                            var i, s = e(this),
                                o = s.offset(),
                                r = t.pageX - o.left - it,
                                a = !0,
                                l = function() {
                                    var e = s.offset(),
                                        n = t.pageX - e.left - ft / 2,
                                        o = R * O.scrollPagePercent,
                                        c = nt * o / (U - R);
                                    if (0 > r) it - c > n ? wt.scrollByX(-o) : b(n);
                                    else {
                                        if (!(r > 0)) return u(), void 0;
                                        n > it + c ? wt.scrollByX(o) : b(n)
                                    }
                                    i = setTimeout(l, a ? O.initialDelay : O.trackClickRepeatFreq), a = !1
                                },
                                u = function() {
                                    i && clearTimeout(i), i = null, e(document).unbind("mouseup.jsp", u)
                                };
                            return l(), e(document).bind("mouseup.jsp", u), !1
                        }
                    })
                }

                function m() {
                    ht && ht.unbind("mousedown.jsp"), ot && ot.unbind("mousedown.jsp")
                }

                function g() {
                    e("html").unbind("dragstart.jsp selectstart.jsp mousemove.jsp mouseup.jsp mouseleave.jsp"), J && J.removeClass("jspActive"), tt && tt.removeClass("jspActive")
                }

                function v(e, t) {
                    K && (0 > e ? e = 0 : e > Z && (e = Z), t === n && (t = O.animateScroll), t ? wt.animate(J, "top", e, y) : (J.css("top", e), y(e)))
                }

                function y(e) {
                    e === n && (e = J.position().top), V.scrollTop(0), et = e;
                    var t = 0 === et,
                        s = et == Z,
                        o = e / Z,
                        r = -o * (Q - W);
                    (Ct != t || kt != s) && (Ct = t, kt = s, i.trigger("jsp-arrow-change", [Ct, kt, Tt, St])), w(t, s), q.css("top", r), i.trigger("jsp-scroll-y", [-r, t, s]).trigger("scroll")
                }

                function b(e, t) {
                    G && (0 > e ? e = 0 : e > nt && (e = nt), t === n && (t = O.animateScroll), t ? wt.animate(tt, "left", e, x) : (tt.css("left", e), x(e)))
                }

                function x(e) {
                    e === n && (e = tt.position().left), V.scrollTop(0), it = e;
                    var t = 0 === it,
                        s = it == nt,
                        o = e / nt,
                        r = -o * (U - R);
                    (Tt != t || St != s) && (Tt = t, St = s, i.trigger("jsp-arrow-change", [Ct, kt, Tt, St])), C(t, s), q.css("left", r), i.trigger("jsp-scroll-x", [-r, t, s]).trigger("scroll")
                }

                function w(e, t) {
                    O.showArrows && (ut[e ? "addClass" : "removeClass"]("jspDisabled"), ct[t ? "addClass" : "removeClass"]("jspDisabled"))
                }

                function C(e, t) {
                    O.showArrows && (mt[e ? "addClass" : "removeClass"]("jspDisabled"), gt[t ? "addClass" : "removeClass"]("jspDisabled"))
                }

                function T(e, t) {
                    var n = e / (Q - W);
                    v(n * Z, t)
                }

                function k(e, t) {
                    var n = e / (U - R);
                    b(n * nt, t)
                }

                function S(t, n, i) {
                    var s, o, r, a, l, u, c, d, h, p = 0,
                        f = 0;
                    try {
                        s = e(t)
                    } catch (m) {
                        return
                    }
                    for (o = s.outerHeight(), r = s.outerWidth(), V.scrollTop(0), V.scrollLeft(0); !s.is(".jspPane");)
                        if (p += s.position().top, f += s.position().left, s = s.offsetParent(), /^body|html$/i.test(s[0].nodeName)) return;
                    a = F(), u = a + W, a > p || n ? d = p - O.horizontalGutter : p + o > u && (d = p - W + o + O.horizontalGutter), isNaN(d) || T(d, i), l = j(), c = l + R, l > f || n ? h = f - O.horizontalGutter : f + r > c && (h = f - R + r + O.horizontalGutter), isNaN(h) || k(h, i)
                }

                function j() {
                    return -q.position().left
                }

                function F() {
                    return -q.position().top
                }

                function E() {
                    var e = Q - W;
                    return e > 20 && e - F() < 10
                }

                function $() {
                    var e = U - R;
                    return e > 20 && e - j() < 10
                }

                function A() {
                    V.unbind(Ft).bind(Ft, function(e, t, n, i) {
                        var s = it,
                            o = et;
                        return wt.scrollBy(n * O.mouseWheelSpeed, -i * O.mouseWheelSpeed, !1), s == it && o == et
                    })
                }

                function N() {
                    V.unbind(Ft)
                }

                function L() {
                    return !1
                }

                function D() {
                    q.find(":input,a").unbind("focus.jsp").bind("focus.jsp", function(e) {
                        S(e.target, !1)
                    })
                }

                function M() {
                    q.find(":input,a").unbind("focus.jsp")
                }

                function B() {
                    function t() {
                        var e = it,
                            t = et;
                        switch (n) {
                            case 40:
                                wt.scrollByY(O.keyboardSpeed, !1);
                                break;
                            case 38:
                                wt.scrollByY(-O.keyboardSpeed, !1);
                                break;
                            case 34:
                            case 32:
                                wt.scrollByY(W * O.scrollPagePercent, !1);
                                break;
                            case 33:
                                wt.scrollByY(-W * O.scrollPagePercent, !1);
                                break;
                            case 39:
                                wt.scrollByX(O.keyboardSpeed, !1);
                                break;
                            case 37:
                                wt.scrollByX(-O.keyboardSpeed, !1)
                        }
                        return s = e != it || t != et
                    }
                    var n, s, o = [];
                    G && o.push(dt[0]), K && o.push(st[0]), q.focus(function() {
                        i.focus()
                    }), i.attr("tabindex", 0).unbind("keydown.jsp keypress.jsp").bind("keydown.jsp", function(i) {
                        if (i.target === this || o.length && e(i.target).closest(o).length) {
                            var r = it,
                                a = et;
                            switch (i.keyCode) {
                                case 40:
                                case 38:
                                case 34:
                                case 32:
                                case 33:
                                case 39:
                                case 37:
                                    n = i.keyCode, t();
                                    break;
                                case 35:
                                    T(Q - W), n = null;
                                    break;
                                case 36:
                                    T(0), n = null
                            }
                            return s = i.keyCode == n && r != it || a != et, !s
                        }
                    }).bind("keypress.jsp", function(e) {
                        return e.keyCode == n && t(), !s
                    }), O.hideFocus ? (i.css("outline", "none"), "hideFocus" in V[0] && i.attr("hideFocus", !0)) : (i.css("outline", ""), "hideFocus" in V[0] && i.attr("hideFocus", !1))
                }

                function P() {
                    i.attr("tabindex", "-1").removeAttr("tabindex").unbind("keydown.jsp keypress.jsp")
                }

                function I() {
                    if (location.hash && location.hash.length > 1) {
                        var t, n, i = escape(location.hash.substr(1));
                        try {
                            t = e("#" + i + ', a[name="' + i + '"]')
                        } catch (s) {
                            return
                        }
                        t.length && q.find(i) && (0 === V.scrollTop() ? n = setInterval(function() {
                            V.scrollTop() > 0 && (S(t, !0), e(document).scrollTop(V.position().top), clearInterval(n))
                        }, 50) : (S(t, !0), e(document).scrollTop(V.position().top)))
                    }
                }

                function _() {
                    e(document.body).data("jspHijack") || (e(document.body).data("jspHijack", !0), e(document.body).delegate("a[href*=#]", "click", function(n) {
                        var i, s, o, r, a, l, u = this.href.substr(0, this.href.indexOf("#")),
                            c = location.href;
                        if (-1 !== location.href.indexOf("#") && (c = location.href.substr(0, location.href.indexOf("#"))), u === c) {
                            i = escape(this.href.substr(this.href.indexOf("#") + 1));
                            try {
                                s = e("#" + i + ', a[name="' + i + '"]')
                            } catch (d) {
                                return
                            }
                            s.length && (o = s.closest(".jspScrollable"), r = o.data("jsp"), r.scrollToElement(s, !0), o[0].scrollIntoView && (a = e(t).scrollTop(), l = s.offset().top, (a > l || l > a + e(t).height()) && o[0].scrollIntoView()), n.preventDefault())
                        }
                    }))
                }

                function H() {
                    var e, t, n, i, s, o = !1;
                    V.unbind("touchstart.jsp touchmove.jsp touchend.jsp click.jsp-touchclick").bind("touchstart.jsp", function(r) {
                        var a = r.originalEvent.touches[0];
                        e = j(), t = F(), n = a.pageX, i = a.pageY, s = !1, o = !0
                    }).bind("touchmove.jsp", function(r) {
                        if (o) {
                            var a = r.originalEvent.touches[0],
                                l = it,
                                u = et;
                            return wt.scrollTo(e + n - a.pageX, t + i - a.pageY), s = s || Math.abs(n - a.pageX) > 5 || Math.abs(i - a.pageY) > 5, l == it && u == et
                        }
                    }).bind("touchend.jsp", function() {
                        o = !1
                    }).bind("click.jsp-touchclick", function() {
                        return s ? (s = !1, !1) : void 0
                    })
                }

                function z() {
                    var e = F(),
                        t = j();
                    i.removeClass("jspScrollable").unbind(".jsp"), i.replaceWith(jt.append(q.children())), jt.scrollTop(e), jt.scrollLeft(t), vt && clearInterval(vt)
                }
                var O, q, R, W, V, U, Q, Y, X, K, G, J, Z, et, tt, nt, it, st, ot, rt, at, lt, ut, ct, dt, ht, pt, ft, mt, gt, vt, yt, bt, xt, wt = this,
                    Ct = !0,
                    Tt = !0,
                    kt = !1,
                    St = !1,
                    jt = i.clone(!1, !1).empty(),
                    Ft = e.fn.mwheelIntent ? "mwheelIntent.jsp" : "mousewheel.jsp";
                "border-box" === i.css("box-sizing") ? (yt = 0, bt = 0) : (yt = i.css("paddingTop") + " " + i.css("paddingRight") + " " + i.css("paddingBottom") + " " + i.css("paddingLeft"), bt = (parseInt(i.css("paddingLeft"), 10) || 0) + (parseInt(i.css("paddingRight"), 10) || 0)), e.extend(wt, {
                    reinitialise: function(t) {
                        t = e.extend({}, O, t), o(t)
                    },
                    scrollToElement: function(e, t, n) {
                        S(e, t, n)
                    },
                    scrollTo: function(e, t, n) {
                        k(e, n), T(t, n)
                    },
                    scrollToX: function(e, t) {
                        k(e, t)
                    },
                    scrollToY: function(e, t) {
                        T(e, t)
                    },
                    scrollToPercentX: function(e, t) {
                        k(e * (U - R), t)
                    },
                    scrollToPercentY: function(e, t) {
                        T(e * (Q - W), t)
                    },
                    scrollBy: function(e, t, n) {
                        wt.scrollByX(e, n), wt.scrollByY(t, n)
                    },
                    scrollByX: function(e, t) {
                        var n = j() + Math[0 > e ? "floor" : "ceil"](e),
                            i = n / (U - R);
                        b(i * nt, t)
                    },
                    scrollByY: function(e, t) {
                        var n = F() + Math[0 > e ? "floor" : "ceil"](e),
                            i = n / (Q - W);
                        v(i * Z, t)
                    },
                    positionDragX: function(e, t) {
                        b(e, t)
                    },
                    positionDragY: function(e, t) {
                        v(e, t)
                    },
                    animate: function(e, t, n, i) {
                        var s = {};
                        s[t] = n, e.animate(s, {
                            duration: O.animateDuration,
                            easing: O.animateEase,
                            queue: !1,
                            step: i
                        })
                    },
                    getContentPositionX: function() {
                        return j()
                    },
                    getContentPositionY: function() {
                        return F()
                    },
                    getContentWidth: function() {
                        return U
                    },
                    getContentHeight: function() {
                        return Q
                    },
                    getPercentScrolledX: function() {
                        return j() / (U - R)
                    },
                    getPercentScrolledY: function() {
                        return F() / (Q - W)
                    },
                    getIsScrollableH: function() {
                        return G
                    },
                    getIsScrollableV: function() {
                        return K
                    },
                    getContentPane: function() {
                        return q
                    },
                    scrollToBottom: function(e) {
                        v(Z, e)
                    },
                    hijackInternalLinks: e.noop,
                    destroy: function() {
                        z()
                    }
                }), o(s)
            }
            return i = e.extend({}, e.fn.jScrollPane.defaults, i), e.each(["arrowButtonSpeed", "trackClickSpeed", "keyboardSpeed"], function() {
                i[this] = i[this] || i.speed
            }), this.each(function() {
                var t = e(this),
                    n = t.data("jsp");
                n ? n.reinitialise(i) : (e("script", t).filter('[type="text/javascript"],:not([type])').remove(), n = new s(t, i), t.data("jsp", n))
            })
        }, e.fn.jScrollPane.defaults = {
            showArrows: !1,
            maintainPosition: !0,
            stickToBottom: !1,
            stickToRight: !1,
            clickOnTrack: !0,
            autoReinitialise: !1,
            autoReinitialiseDelay: 500,
            verticalDragMinHeight: 0,
            verticalDragMaxHeight: 99999,
            horizontalDragMinWidth: 0,
            horizontalDragMaxWidth: 99999,
            contentWidth: n,
            animateScroll: !1,
            animateDuration: 300,
            animateEase: "linear",
            hijackInternalLinks: !1,
            verticalGutter: 4,
            horizontalGutter: 4,
            mouseWheelSpeed: 3,
            arrowButtonSpeed: 0,
            arrowRepeatFreq: 50,
            arrowScrollOnHover: !1,
            trackClickSpeed: 0,
            trackClickRepeatFreq: 70,
            verticalArrowPositions: "split",
            horizontalArrowPositions: "split",
            enableKeyboardNavigation: !0,
            hideFocus: !1,
            keyboardSpeed: 0,
            initialDelay: 300,
            speed: 30,
            scrollPagePercent: .8
        }
    }(jQuery, this),
    function(e) {
        "function" == typeof define && define.amd ? define(["jquery"], e) : "object" == typeof exports ? module.exports = e : e(jQuery)
    }(function(e) {
        function t(t) {
            var s, o = t || window.event,
                r = [].slice.call(arguments, 1),
                a = 0,
                l = 0,
                u = 0,
                c = 0,
                d = 0;
            return t = e.event.fix(o), t.type = "mousewheel", o.wheelDelta && (a = o.wheelDelta), o.detail && (a = -1 * o.detail), o.deltaY && (u = -1 * o.deltaY, a = u), o.deltaX && (l = o.deltaX, a = -1 * l), void 0 !== o.wheelDeltaY && (u = o.wheelDeltaY), void 0 !== o.wheelDeltaX && (l = -1 * o.wheelDeltaX), c = Math.abs(a), (!n || n > c) && (n = c), d = Math.max(Math.abs(u), Math.abs(l)), (!i || i > d) && (i = d), s = a > 0 ? "floor" : "ceil", a = Math[s](a / n), l = Math[s](l / i), u = Math[s](u / i), r.unshift(t, a, l, u), (e.event.dispatch || e.event.handle).apply(this, r)
        }
        var n, i, s = ["wheel", "mousewheel", "DOMMouseScroll", "MozMousePixelScroll"],
            o = "onwheel" in document || document.documentMode >= 9 ? ["wheel"] : ["mousewheel", "DomMouseScroll", "MozMousePixelScroll"];
        if (e.event.fixHooks)
            for (var r = s.length; r;) e.event.fixHooks[s[--r]] = e.event.mouseHooks;
        e.event.special.mousewheel = {
            setup: function() {
                if (this.addEventListener)
                    for (var e = o.length; e;) this.addEventListener(o[--e], t, !1);
                else this.onmousewheel = t
            },
            teardown: function() {
                if (this.removeEventListener)
                    for (var e = o.length; e;) this.removeEventListener(o[--e], t, !1);
                else this.onmousewheel = null
            }
        }, e.fn.extend({
            mousewheel: function(e) {
                return e ? this.bind("mousewheel", e) : this.trigger("mousewheel")
            },
            unmousewheel: function(e) {
                return this.unbind("mousewheel", e)
            }
        })
    }),
    function(e, t, n) {
        function i(e) {
            var t = {},
                i = /^jQuery\d+$/;
            return n.each(e.attributes, function(e, n) {
                n.specified && !i.test(n.name) && (t[n.name] = n.value)
            }), t
        }

        function s(e, t) {
            var i = this,
                s = n(i);
            if (i.value == s.attr("placeholder") && s.hasClass("placeholder"))
                if (s.data("placeholder-password")) {
                    if (s = s.hide().next().show().attr("id", s.removeAttr("id").data("placeholder-id")), e === !0) return s[0].value = t;
                    s.focus()
                } else i.value = "", s.removeClass("placeholder"), i == r() && i.select()
        }

        function o() {
            var e, t = this,
                o = n(t),
                r = this.id;
            if ("" == t.value) {
                if ("password" == t.type) {
                    if (!o.data("placeholder-textinput")) {
                        try {
                            e = o.clone().attr({
                                type: "text"
                            })
                        } catch (a) {
                            e = n("<input>").attr(n.extend(i(this), {
                                type: "text"
                            }))
                        }
                        e.removeAttr("name").data({
                            "placeholder-password": o,
                            "placeholder-id": r
                        }).bind("focus.placeholder", s), o.data({
                            "placeholder-textinput": e,
                            "placeholder-id": r
                        }).before(e)
                    }
                    o = o.removeAttr("id").hide().prev().attr("id", r).show()
                }
                o.addClass("placeholder"), o[0].value = o.attr("placeholder")
            } else o.removeClass("placeholder")
        }

        function r() {
            try {
                return t.activeElement
            } catch (e) {}
        }
        var a, l, u = "[object OperaMini]" == Object.prototype.toString.call(e.operamini),
            c = "placeholder" in t.createElement("input") && !u,
            d = "placeholder" in t.createElement("textarea") && !u,
            h = n.fn,
            p = n.valHooks,
            f = n.propHooks;
        c && d ? (l = h.placeholder = function() {
            return this
        }, l.input = l.textarea = !0) : (l = h.placeholder = function() {
            var e = this;
            return e.filter((c ? "textarea" : ":input") + "[placeholder]").not(".placeholder").bind({
                "focus.placeholder": s,
                "blur.placeholder": o
            }).data("placeholder-enabled", !0).trigger("blur.placeholder"), e
        }, l.input = c, l.textarea = d, a = {
            get: function(e) {
                var t = n(e),
                    i = t.data("placeholder-password");
                return i ? i[0].value : t.data("placeholder-enabled") && t.hasClass("placeholder") ? "" : e.value
            },
            set: function(e, t) {
                var i = n(e),
                    a = i.data("placeholder-password");
                return a ? a[0].value = t : i.data("placeholder-enabled") ? ("" == t ? (e.value = t, e != r() && o.call(e)) : i.hasClass("placeholder") ? s.call(e, !0, t) || (e.value = t) : e.value = t, i) : e.value = t
            }
        }, c || (p.input = a, f.value = a), d || (p.textarea = a, f.value = a), n(function() {
            n(t).delegate("form", "submit.placeholder", function() {
                var e = n(".placeholder", this).each(s);
                setTimeout(function() {
                    e.each(o)
                }, 10)
            })
        }), n(e).bind("beforeunload.placeholder", function() {
            n(".placeholder").each(function() {
                this.value = ""
            })
        }))
    }(this, document, jQuery),
    function(e) {
        var t = this.SelectBox = function(e, t) {
            if (e instanceof jQuery) {
                if (!(e.length > 0)) return;
                e = e[0]
            }
            return this.typeTimer = null, this.typeSearch = "", this.isMac = navigator.platform.match(/mac/i), t = "object" == typeof t ? t : {}, this.selectElement = e, !t.mobile && navigator.userAgent.match(/iPad|iPhone|Android|IEMobile|BlackBerry/i) ? !1 : "select" !== e.tagName.toLowerCase() ? !1 : (this.init(t), void 0)
        };
        t.prototype.version = "1.2.0", t.prototype.init = function(t) {
            var n = e(this.selectElement);
            if (n.data("selectBox-control")) return !1;
            var i = e('<a class="selectBox" />'),
                s = n.attr("multiple") || parseInt(n.attr("size")) > 1,
                o = t || {},
                r = parseInt(n.prop("tabindex")) || 0,
                a = this;
            if (i.width(n.outerWidth()).addClass(n.attr("class")).attr("title", n.attr("title") || "").attr("tabindex", r).css("display", "inline-block").bind("focus.selectBox", function() {
                    this !== document.activeElement && document.body !== document.activeElement && e(document.activeElement).blur(), i.hasClass("selectBox-active") || (i.addClass("selectBox-active"), n.trigger("focus"))
                }).bind("blur.selectBox", function() {
                    i.hasClass("selectBox-active") && (i.removeClass("selectBox-active"), n.trigger("blur"))
                }), e(window).data("selectBox-bindings") || e(window).data("selectBox-bindings", !0).bind("scroll.selectBox", o.hideOnWindowScroll ? this.hideMenus : e.noop).bind("resize.selectBox", this.hideMenus), n.attr("disabled") && i.addClass("selectBox-disabled"), n.bind("click.selectBox", function(e) {
                    i.focus(), e.preventDefault()
                }), s) {
                if (t = this.getOptions("inline"), i.append(t).data("selectBox-options", t).addClass("selectBox-inline selectBox-menuShowing").bind("keydown.selectBox", function(e) {
                        a.handleKeyDown(e)
                    }).bind("keypress.selectBox", function(e) {
                        a.handleKeyPress(e)
                    }).bind("mousedown.selectBox", function(t) {
                        1 === t.which && (e(t.target).is("A.selectBox-inline") && t.preventDefault(), i.hasClass("selectBox-focus") || i.focus())
                    }).insertAfter(n), !n[0].style.height) {
                    var l = n.attr("size") ? parseInt(n.attr("size")) : 5,
                        u = i.clone().removeAttr("id").css({
                            position: "absolute",
                            top: "-9999em"
                        }).show().appendTo("body");
                    u.find(".selectBox-options").html("<li><a> </a></li>");
                    var c = parseInt(u.find(".selectBox-options A:first").html("&nbsp;").outerHeight());
                    u.remove(), i.height(c * l)
                }
                this.disableSelection(i)
            } else {
                var d = e('<span class="selectBox-label" />'),
                    h = e('<span class="selectBox-arrow" />');
                d.attr("class", this.getLabelClass()).text(this.getLabelText()), t = this.getOptions("dropdown"), t.appendTo("BODY"), i.data("selectBox-options", t).addClass("selectBox-dropdown").append(d).append(h).bind("mousedown.selectBox", function(e) {
                    1 === e.which && (i.hasClass("selectBox-menuShowing") ? a.hideMenus() : (e.stopPropagation(), t.data("selectBox-down-at-x", e.screenX).data("selectBox-down-at-y", e.screenY), a.showMenu()))
                }).bind("keydown.selectBox", function(e) {
                    a.handleKeyDown(e)
                }).bind("keypress.selectBox", function(e) {
                    a.handleKeyPress(e)
                }).bind("open.selectBox", function(e, t) {
                    t && t._selectBox === !0 || a.showMenu()
                }).bind("close.selectBox", function(e, t) {
                    t && t._selectBox === !0 || a.hideMenus()
                }).insertAfter(n);
                var p = i.width() - h.outerWidth() - (parseInt(d.css("paddingLeft")) || 0) - (parseInt(d.css("paddingRight")) || 0);
                d.width(p), this.disableSelection(i)
            }
            n.addClass("selectBox").data("selectBox-control", i).data("selectBox-settings", o).hide()
        }, t.prototype.getOptions = function(t) {
            var n, i = e(this.selectElement),
                s = this,
                o = function(t, n) {
                    return t.children("OPTION, OPTGROUP").each(function() {
                        if (e(this).is("OPTION")) e(this).length > 0 ? s.generateOptions(e(this), n) : n.append("<li> </li>");
                        else {
                            var t = e('<li class="selectBox-optgroup" />');
                            t.text(e(this).attr("label")), n.append(t), n = o(e(this), n)
                        }
                    }), n
                };
            switch (t) {
                case "inline":
                    return n = e('<ul class="selectBox-options" />'), n = o(i, n), n.find("A").bind("mouseover.selectBox", function() {
                        s.addHover(e(this).parent())
                    }).bind("mouseout.selectBox", function() {
                        s.removeHover(e(this).parent())
                    }).bind("mousedown.selectBox", function(e) {
                        1 === e.which && (e.preventDefault(), i.selectBox("control").hasClass("selectBox-active") || i.selectBox("control").focus())
                    }).bind("mouseup.selectBox", function(t) {
                        1 === t.which && (s.hideMenus(), s.selectOption(e(this).parent(), t))
                    }), this.disableSelection(n), n;
                case "dropdown":
                    n = e('<ul class="selectBox-dropdown-menu selectBox-options" />'), n = o(i, n), n.data("selectBox-select", i).css("display", "none").appendTo("BODY").find("A").bind("mousedown.selectBox", function(t) {
                        1 === t.which && (t.preventDefault(), t.screenX === n.data("selectBox-down-at-x") && t.screenY === n.data("selectBox-down-at-y") && (n.removeData("selectBox-down-at-x").removeData("selectBox-down-at-y"), /android/i.test(navigator.userAgent.toLowerCase()) && /chrome/i.test(navigator.userAgent.toLowerCase()) && s.selectOption(e(this).parent()), s.hideMenus()))
                    }).bind("mouseup.selectBox", function(t) {
                        1 === t.which && (t.screenX !== n.data("selectBox-down-at-x") || t.screenY !== n.data("selectBox-down-at-y")) && (n.removeData("selectBox-down-at-x").removeData("selectBox-down-at-y"), s.selectOption(e(this).parent()), s.hideMenus())
                    }).bind("mouseover.selectBox", function() {
                        s.addHover(e(this).parent())
                    }).bind("mouseout.selectBox", function() {
                        s.removeHover(e(this).parent())
                    });
                    var r = i.attr("class") || "";
                    if ("" !== r) {
                        r = r.split(" ");
                        for (var a = 0; a < r.length; a++) n.addClass(r[a] + "-selectBox-dropdown-menu")
                    }
                    return this.disableSelection(n), n
            }
        }, t.prototype.getLabelClass = function() {
            var t = e(this.selectElement).find("OPTION:selected");
            return ("selectBox-label " + (t.attr("class") || "")).replace(/\s+$/, "")
        }, t.prototype.getLabelText = function() {
            var t = e(this.selectElement).find("OPTION:selected");
            return t.text() || " "
        }, t.prototype.setLabel = function() {
            var t = e(this.selectElement),
                n = t.data("selectBox-control");
            n && n.find(".selectBox-label").attr("class", this.getLabelClass()).text(this.getLabelText())
        }, t.prototype.destroy = function() {
            var t = e(this.selectElement),
                n = t.data("selectBox-control");
            if (n) {
                var i = n.data("selectBox-options");
                i.remove(), n.remove(), t.removeClass("selectBox").removeData("selectBox-control").data("selectBox-control", null).removeData("selectBox-settings").data("selectBox-settings", null).show()
            }
        }, t.prototype.refresh = function() {
            var t, n = e(this.selectElement),
                i = n.data("selectBox-control"),
                s = i.hasClass("selectBox-dropdown") ? "dropdown" : "inline";
            switch (i.data("selectBox-options").remove(), t = this.getOptions(s), i.data("selectBox-options", t), s) {
                case "inline":
                    i.append(t);
                    break;
                case "dropdown":
                    this.setLabel(), e("BODY").append(t)
            }
            "dropdown" === s && i.hasClass("selectBox-menuShowing") && this.showMenu()
        }, t.prototype.showMenu = function() {
            var t = this,
                n = e(this.selectElement),
                i = n.data("selectBox-control"),
                s = n.data("selectBox-settings"),
                o = i.data("selectBox-options");
            if (i.hasClass("selectBox-disabled")) return !1;
            this.hideMenus();
            var r = parseInt(i.css("borderBottomWidth")) || 0,
                a = parseInt(i.css("borderTopWidth")) || 0,
                l = i.offset(),
                u = s.topPositionCorrelation ? s.topPositionCorrelation : 0,
                c = s.bottomPositionCorrelation ? s.bottomPositionCorrelation : 0,
                d = o.outerHeight(),
                h = i.outerHeight(),
                p = parseInt(o.css("max-height")),
                f = e(window).scrollTop(),
                m = l.top - f,
                g = e(window).height() - (m + h),
                v = m > g && (null == s.keepInViewport ? !0 : s.keepInViewport),
                y = v ? l.top - d + a + u : l.top + h - r - c;
            if (p > m && p > g)
                if (v) {
                    var b = p - (m - 5);
                    o.css({
                        "max-height": p - b + "px"
                    }), y += b
                } else {
                    var b = p - (g - 5);
                    o.css({
                        "max-height": p - b + "px"
                    })
                }
            if (o.data("posTop", v), o.width(i.innerWidth()).css({
                    top: y,
                    left: i.offset().left
                }).addClass("selectBox-options selectBox-options-" + (v ? "top" : "bottom")), n.triggerHandler("beforeopen")) return !1;
            var x = function() {
                n.triggerHandler("open", {
                    _selectBox: !0
                })
            };
            switch (s.menuTransition) {
                case "fade":
                    o.fadeIn(s.menuSpeed, x);
                    break;
                case "slide":
                    o.slideDown(s.menuSpeed, x);
                    break;
                default:
                    o.show(s.menuSpeed, x)
            }
            s.menuSpeed || x();
            var w = o.find(".selectBox-selected:first");
            this.keepOptionInView(w, !0), this.addHover(w), i.addClass("selectBox-menuShowing selectBox-menuShowing-" + (v ? "top" : "bottom")), e(document).bind("mousedown.selectBox", function(n) {
                if (1 === n.which) {
                    if (e(n.target).parents().andSelf().hasClass("selectBox-options")) return;
                    t.hideMenus()
                }
            })
        }, t.prototype.hideMenus = function() {
            0 !== e(".selectBox-dropdown-menu:visible").length && (e(document).unbind("mousedown.selectBox"), e(".selectBox-dropdown-menu").each(function() {
                var t = e(this),
                    n = t.data("selectBox-select"),
                    i = n.data("selectBox-control"),
                    s = n.data("selectBox-settings"),
                    o = t.data("posTop");
                if (n.triggerHandler("beforeclose")) return !1;
                var r = function() {
                    n.triggerHandler("close", {
                        _selectBox: !0
                    })
                };
                if (s) {
                    switch (s.menuTransition) {
                        case "fade":
                            t.fadeOut(s.menuSpeed, r);
                            break;
                        case "slide":
                            t.slideUp(s.menuSpeed, r);
                            break;
                        default:
                            t.hide(s.menuSpeed, r)
                    }
                    s.menuSpeed || r(), i.removeClass("selectBox-menuShowing selectBox-menuShowing-" + (o ? "top" : "bottom"))
                } else e(this).hide(), e(this).triggerHandler("close", {
                    _selectBox: !0
                }), e(this).removeClass("selectBox-menuShowing selectBox-menuShowing-" + (o ? "top" : "bottom"));
                t.css("max-height", ""), t.removeClass("selectBox-options-" + (o ? "top" : "bottom")), t.data("posTop", !1)
            }))
        }, t.prototype.selectOption = function(t, n) {
            var i = e(this.selectElement);
            t = e(t); {
                var s = i.data("selectBox-control");
                i.data("selectBox-settings")
            }
            if (s.hasClass("selectBox-disabled")) return !1;
            if (0 === t.length || t.hasClass("selectBox-disabled")) return !1;
            if (i.attr("multiple"))
                if (n.shiftKey && s.data("selectBox-last-selected")) {
                    t.toggleClass("selectBox-selected");
                    var o;
                    o = t.index() > s.data("selectBox-last-selected").index() ? t.siblings().slice(s.data("selectBox-last-selected").index(), t.index()) : t.siblings().slice(t.index(), s.data("selectBox-last-selected").index()), o = o.not(".selectBox-optgroup, .selectBox-disabled"), t.hasClass("selectBox-selected") ? o.addClass("selectBox-selected") : o.removeClass("selectBox-selected")
                } else this.isMac && n.metaKey || !this.isMac && n.ctrlKey ? t.toggleClass("selectBox-selected") : (t.siblings().removeClass("selectBox-selected"), t.addClass("selectBox-selected"));
            else t.siblings().removeClass("selectBox-selected"), t.addClass("selectBox-selected");
            s.hasClass("selectBox-dropdown") && s.find(".selectBox-label").text(t.text());
            var r = 0,
                a = [];
            return i.attr("multiple") ? s.find(".selectBox-selected A").each(function() {
                a[r++] = e(this).attr("rel")
            }) : a = t.find("A").attr("rel"), s.data("selectBox-last-selected", t), i.val() !== a && (i.val(a), this.setLabel(), i.trigger("change")), !0
        }, t.prototype.addHover = function(t) {
            t = e(t);
            var n = e(this.selectElement),
                i = n.data("selectBox-control"),
                s = i.data("selectBox-options");
            s.find(".selectBox-hover").removeClass("selectBox-hover"), t.addClass("selectBox-hover")
        }, t.prototype.getSelectElement = function() {
            return this.selectElement
        }, t.prototype.removeHover = function(t) {
            t = e(t);
            var n = e(this.selectElement),
                i = n.data("selectBox-control"),
                s = i.data("selectBox-options");
            s.find(".selectBox-hover").removeClass("selectBox-hover")
        }, t.prototype.keepOptionInView = function(t, n) {
            if (t && 0 !== t.length) {
                var i = e(this.selectElement),
                    s = i.data("selectBox-control"),
                    o = s.data("selectBox-options"),
                    r = s.hasClass("selectBox-dropdown") ? o : o.parent(),
                    a = parseInt(t.offset().top - r.position().top),
                    l = parseInt(a + t.outerHeight());
                n ? r.scrollTop(t.offset().top - r.offset().top + r.scrollTop() - r.height() / 2) : (0 > a && r.scrollTop(t.offset().top - r.offset().top + r.scrollTop()), l > r.height() && r.scrollTop(t.offset().top + t.outerHeight() - r.offset().top + r.scrollTop() - r.height()))
            }
        }, t.prototype.handleKeyDown = function(t) {
            var n = e(this.selectElement),
                i = n.data("selectBox-control"),
                s = i.data("selectBox-options"),
                o = n.data("selectBox-settings"),
                r = 0,
                a = 0;
            if (!i.hasClass("selectBox-disabled")) switch (t.keyCode) {
                case 8:
                    t.preventDefault(), this.typeSearch = "";
                    break;
                case 9:
                case 27:
                    this.hideMenus(), this.removeHover();
                    break;
                case 13:
                    i.hasClass("selectBox-menuShowing") ? (this.selectOption(s.find("LI.selectBox-hover:first"), t), i.hasClass("selectBox-dropdown") && this.hideMenus()) : this.showMenu();
                    break;
                case 38:
                case 37:
                    if (t.preventDefault(), i.hasClass("selectBox-menuShowing")) {
                        var l = s.find(".selectBox-hover").prev("LI");
                        for (r = s.find("LI:not(.selectBox-optgroup)").length, a = 0;
                            (0 === l.length || l.hasClass("selectBox-disabled") || l.hasClass("selectBox-optgroup")) && (l = l.prev("LI"), 0 === l.length && (l = o.loopOptions ? s.find("LI:last") : s.find("LI:first")), !(++a >= r)););
                        this.addHover(l), this.selectOption(l, t), this.keepOptionInView(l)
                    } else this.showMenu();
                    break;
                case 40:
                case 39:
                    if (t.preventDefault(), i.hasClass("selectBox-menuShowing")) {
                        var u = s.find(".selectBox-hover").next("LI");
                        for (r = s.find("LI:not(.selectBox-optgroup)").length, a = 0;
                            (0 === u.length || u.hasClass("selectBox-disabled") || u.hasClass("selectBox-optgroup")) && (u = u.next("LI"), 0 === u.length && (u = o.loopOptions ? s.find("LI:first") : s.find("LI:last")), !(++a >= r)););
                        this.addHover(u), this.selectOption(u, t), this.keepOptionInView(u)
                    } else this.showMenu()
            }
        }, t.prototype.handleKeyPress = function(t) {
            var n = e(this.selectElement),
                i = n.data("selectBox-control"),
                s = i.data("selectBox-options"),
                o = this;
            if (!i.hasClass("selectBox-disabled")) switch (t.keyCode) {
                case 9:
                case 27:
                case 13:
                case 38:
                case 37:
                case 40:
                case 39:
                    break;
                default:
                    i.hasClass("selectBox-menuShowing") || this.showMenu(), t.preventDefault(), clearTimeout(this.typeTimer), this.typeSearch += String.fromCharCode(t.charCode || t.keyCode), s.find("A").each(function() {
                        return e(this).text().substr(0, o.typeSearch.length).toLowerCase() === o.typeSearch.toLowerCase() ? (o.addHover(e(this).parent()), o.selectOption(e(this).parent(), t), o.keepOptionInView(e(this).parent()), !1) : void 0
                    }), this.typeTimer = setTimeout(function() {
                        o.typeSearch = ""
                    }, 1e3)
            }
        }, t.prototype.enable = function() {
            var t = e(this.selectElement);
            t.prop("disabled", !1);
            var n = t.data("selectBox-control");
            n && n.removeClass("selectBox-disabled")
        }, t.prototype.disable = function() {
            var t = e(this.selectElement);
            t.prop("disabled", !0);
            var n = t.data("selectBox-control");
            n && n.addClass("selectBox-disabled")
        }, t.prototype.setValue = function(t) {
            var n = e(this.selectElement);
            n.val(t), t = n.val(), null === t && (t = n.children().first().val(), n.val(t));
            var i = n.data("selectBox-control");
            if (i) {
                var s = n.data("selectBox-settings"),
                    o = i.data("selectBox-options");
                this.setLabel(), o.find(".selectBox-selected").removeClass("selectBox-selected"), o.find("A").each(function() {
                    if ("object" == typeof t)
                        for (var n = 0; n < t.length; n++) e(this).attr("rel") == t[n] && e(this).parent().addClass("selectBox-selected");
                    else e(this).attr("rel") == t && e(this).parent().addClass("selectBox-selected")
                }), s.change && s.change.call(n)
            }
        }, t.prototype.setOptions = function(t) {
            var n = e(this.selectElement),
                i = n.data("selectBox-control");
            switch (typeof t) {
                case "string":
                    n.html(t);
                    break;
                case "object":
                    n.html("");
                    for (var s in t)
                        if (null !== t[s])
                            if ("object" == typeof t[s]) {
                                var o = e('<optgroup label="' + s + '" />');
                                for (var r in t[s]) o.append('<option value="' + r + '">' + t[s][r] + "</option>");
                                n.append(o)
                            } else {
                                var a = e('<option value="' + s + '">' + t[s] + "</option>");
                                n.append(a)
                            }
            }
            i && this.refresh()
        }, t.prototype.disableSelection = function(t) {
            e(t).css("MozUserSelect", "none").bind("selectstart", function(e) {
                e.preventDefault()
            })
        }, t.prototype.generateOptions = function(t, n) {
            var i = e("<li />"),
                s = e("<a />");
            i.addClass(t.attr("class")), i.data(t.data()), s.attr("rel", t.val()).text(t.text()), i.append(s), t.attr("disabled") && i.addClass("selectBox-disabled"), t.attr("selected") && i.addClass("selectBox-selected"), n.append(i)
        }, e.extend(e.fn, {
            selectBox: function(n, i) {
                var s;
                switch (n) {
                    case "control":
                        return e(this).data("selectBox-control");
                    case "settings":
                        if (!i) return e(this).data("selectBox-settings");
                        e(this).each(function() {
                            e(this).data("selectBox-settings", e.extend(!0, e(this).data("selectBox-settings"), i))
                        });
                        break;
                    case "options":
                        if (void 0 === i) return e(this).data("selectBox-control").data("selectBox-options");
                        e(this).each(function() {
                            (s = e(this).data("selectBox")) && s.setOptions(i)
                        });
                        break;
                    case "value":
                        if (void 0 === i) return e(this).val();
                        e(this).each(function() {
                            (s = e(this).data("selectBox")) && s.setValue(i)
                        });
                        break;
                    case "refresh":
                        e(this).each(function() {
                            (s = e(this).data("selectBox")) && s.refresh()
                        });
                        break;
                    case "enable":
                        e(this).each(function() {
                            (s = e(this).data("selectBox")) && s.enable(this)
                        });
                        break;
                    case "disable":
                        e(this).each(function() {
                            (s = e(this).data("selectBox")) && s.disable()
                        });
                        break;
                    case "destroy":
                        e(this).each(function() {
                            (s = e(this).data("selectBox")) && (s.destroy(), e(this).data("selectBox", null))
                        });
                        break;
                    case "instance":
                        return e(this).data("selectBox");
                    default:
                        e(this).each(function(i, s) {
                            e(s).data("selectBox") || e(s).data("selectBox", new t(s, n))
                        })
                }
                return e(this)
            }
        })
    }(jQuery),
    function(e) {
        e.extend(e.fn, {
            validate: function(t) {
                if (!this.length) return t && t.debug && window.console && console.warn("Nothing selected, can't validate, returning nothing."), void 0;
                var n = e.data(this[0], "validator");
                return n ? n : (this.attr("novalidate", "novalidate"), n = new e.validator(t, this[0]), e.data(this[0], "validator", n), n.settings.onsubmit && (this.validateDelegate(":submit", "click", function(t) {
                    n.settings.submitHandler && (n.submitButton = t.target), e(t.target).hasClass("cancel") && (n.cancelSubmit = !0), void 0 !== e(t.target).attr("formnovalidate") && (n.cancelSubmit = !0)
                }), this.submit(function(t) {
                    function i() {
                        var i;
                        return n.settings.submitHandler ? (n.submitButton && (i = e("<input type='hidden'/>").attr("name", n.submitButton.name).val(e(n.submitButton).val()).appendTo(n.currentForm)), n.settings.submitHandler.call(n, n.currentForm, t), n.submitButton && i.remove(), !1) : !0
                    }
                    return n.settings.debug && t.preventDefault(), n.cancelSubmit ? (n.cancelSubmit = !1, i()) : n.form() ? n.pendingRequest ? (n.formSubmitted = !0, !1) : i() : (n.focusInvalid(), !1)
                })), n)
            },
            valid: function() {
                if (e(this[0]).is("form")) return this.validate().form();
                var t = !0,
                    n = e(this[0].form).validate();
                return this.each(function() {
                    t = t && n.element(this)
                }), t
            },
            removeAttrs: function(t) {
                var n = {},
                    i = this;
                return e.each(t.split(/\s/), function(e, t) {
                    n[t] = i.attr(t), i.removeAttr(t)
                }), n
            },
            rules: function(t, n) {
                var i = this[0];
                if (t) {
                    var s = e.data(i.form, "validator").settings,
                        o = s.rules,
                        r = e.validator.staticRules(i);
                    switch (t) {
                        case "add":
                            e.extend(r, e.validator.normalizeRule(n)), delete r.messages, o[i.name] = r, n.messages && (s.messages[i.name] = e.extend(s.messages[i.name], n.messages));
                            break;
                        case "remove":
                            if (!n) return delete o[i.name], r;
                            var a = {};
                            return e.each(n.split(/\s/), function(e, t) {
                                a[t] = r[t], delete r[t]
                            }), a
                    }
                }
                var l = e.validator.normalizeRules(e.extend({}, e.validator.classRules(i), e.validator.attributeRules(i), e.validator.dataRules(i), e.validator.staticRules(i)), i);
                if (l.required) {
                    var u = l.required;
                    delete l.required, l = e.extend({
                        required: u
                    }, l)
                }
                return l
            }
        }), e.extend(e.expr[":"], {
            blank: function(t) {
                return !e.trim("" + e(t).val())
            },
            filled: function(t) {
                return !!e.trim("" + e(t).val())
            },
            unchecked: function(t) {
                return !e(t).prop("checked")
            }
        }), e.validator = function(t, n) {
            this.settings = e.extend(!0, {}, e.validator.defaults, t), this.currentForm = n, this.init()
        }, e.validator.format = function(t, n) {
            return 1 === arguments.length ? function() {
                var n = e.makeArray(arguments);
                return n.unshift(t), e.validator.format.apply(this, n)
            } : (arguments.length > 2 && n.constructor !== Array && (n = e.makeArray(arguments).slice(1)), n.constructor !== Array && (n = [n]), e.each(n, function(e, n) {
                t = t.replace(RegExp("\\{" + e + "\\}", "g"), function() {
                    return n
                })
            }), t)
        }, e.extend(e.validator, {
            defaults: {
                messages: {},
                groups: {},
                rules: {},
                errorClass: "error",
                validClass: "valid",
                errorElement: "label",
                focusInvalid: !0,
                errorContainer: e([]),
                errorLabelContainer: e([]),
                onsubmit: !0,
                ignore: ":hidden",
                ignoreTitle: !1,
                onfocusin: function(e) {
                    this.lastActive = e, this.settings.focusCleanup && !this.blockFocusCleanup && (this.settings.unhighlight && this.settings.unhighlight.call(this, e, this.settings.errorClass, this.settings.validClass), this.addWrapper(this.errorsFor(e)).hide())
                },
                onfocusout: function(e) {
                    this.checkable(e) || !(e.name in this.submitted) && this.optional(e) || this.element(e)
                },
                onkeyup: function(e, t) {
                    (9 !== t.which || "" !== this.elementValue(e)) && (e.name in this.submitted || e === this.lastElement) && this.element(e)
                },
                onclick: function(e) {
                    e.name in this.submitted ? this.element(e) : e.parentNode.name in this.submitted && this.element(e.parentNode)
                },
                highlight: function(t, n, i) {
                    "radio" === t.type ? this.findByName(t.name).addClass(n).removeClass(i) : e(t).addClass(n).removeClass(i)
                },
                unhighlight: function(t, n, i) {
                    "radio" === t.type ? this.findByName(t.name).removeClass(n).addClass(i) : e(t).removeClass(n).addClass(i)
                }
            },
            setDefaults: function(t) {
                e.extend(e.validator.defaults, t)
            },
            messages: {
                required: "This field is required.",
                remote: "Please fix this field.",
                email: "Please enter a valid email address.",
                url: "Please enter a valid URL.",
                date: "Please enter a valid date.",
                dateISO: "Please enter a valid date (ISO).",
                number: "Please enter a valid number.",
                digits: "Please enter only digits.",
                creditcard: "Please enter a valid credit card number.",
                equalTo: "Please enter the same value again.",
                maxlength: e.validator.format("Please enter no more than {0} characters."),
                minlength: e.validator.format("Please enter at least {0} characters."),
                rangelength: e.validator.format("Please enter a value between {0} and {1} characters long."),
                range: e.validator.format("Please enter a value between {0} and {1}."),
                max: e.validator.format("Please enter a value less than or equal to {0}."),
                min: e.validator.format("Please enter a value greater than or equal to {0}.")
            },
            autoCreateRanges: !1,
            prototype: {
                init: function() {
                    function t(t) {
                        var n = e.data(this[0].form, "validator"),
                            i = "on" + t.type.replace(/^validate/, "");
                        n.settings[i] && n.settings[i].call(n, this[0], t)
                    }
                    this.labelContainer = e(this.settings.errorLabelContainer), this.errorContext = this.labelContainer.length && this.labelContainer || e(this.currentForm), this.containers = e(this.settings.errorContainer).add(this.settings.errorLabelContainer), this.submitted = {}, this.valueCache = {}, this.pendingRequest = 0, this.pending = {}, this.invalid = {}, this.reset();
                    var n = this.groups = {};
                    e.each(this.settings.groups, function(t, i) {
                        "string" == typeof i && (i = i.split(/\s/)), e.each(i, function(e, i) {
                            n[i] = t
                        })
                    });
                    var i = this.settings.rules;
                    e.each(i, function(t, n) {
                        i[t] = e.validator.normalizeRule(n)
                    }), e(this.currentForm).validateDelegate(":text, [type='password'], [type='file'], select, textarea, [type='number'], [type='search'] ,[type='tel'], [type='url'], [type='email'], [type='datetime'], [type='date'], [type='month'], [type='week'], [type='time'], [type='datetime-local'], [type='range'], [type='color'] ", "focusin focusout keyup", t).validateDelegate("[type='radio'], [type='checkbox'], select, option", "click", t), this.settings.invalidHandler && e(this.currentForm).bind("invalid-form.validate", this.settings.invalidHandler)
                },
                form: function() {
                    return this.checkForm(), e.extend(this.submitted, this.errorMap), this.invalid = e.extend({}, this.errorMap), this.valid() || e(this.currentForm).triggerHandler("invalid-form", [this]), this.showErrors(), this.valid()
                },
                checkForm: function() {
                    this.prepareForm();
                    for (var e = 0, t = this.currentElements = this.elements(); t[e]; e++) this.check(t[e]);
                    return this.valid()
                },
                element: function(t) {
                    t = this.validationTargetFor(this.clean(t)), this.lastElement = t, this.prepareElement(t), this.currentElements = e(t);
                    var n = this.check(t) !== !1;
                    return n ? delete this.invalid[t.name] : this.invalid[t.name] = !0, this.numberOfInvalids() || (this.toHide = this.toHide.add(this.containers)), this.showErrors(), n
                },
                showErrors: function(t) {
                    if (t) {
                        e.extend(this.errorMap, t), this.errorList = [];
                        for (var n in t) this.errorList.push({
                            message: t[n],
                            element: this.findByName(n)[0]
                        });
                        this.successList = e.grep(this.successList, function(e) {
                            return !(e.name in t)
                        })
                    }
                    this.settings.showErrors ? this.settings.showErrors.call(this, this.errorMap, this.errorList) : this.defaultShowErrors()
                },
                resetForm: function() {
                    e.fn.resetForm && e(this.currentForm).resetForm(), this.submitted = {}, this.lastElement = null, this.prepareForm(), this.hideErrors(), this.elements().removeClass(this.settings.errorClass).removeData("previousValue")
                },
                numberOfInvalids: function() {
                    return this.objectLength(this.invalid)
                },
                objectLength: function(e) {
                    var t = 0;
                    for (var n in e) t++;
                    return t
                },
                hideErrors: function() {
                    this.addWrapper(this.toHide).hide()
                },
                valid: function() {
                    return 0 === this.size()
                },
                size: function() {
                    return this.errorList.length
                },
                focusInvalid: function() {
                    if (this.settings.focusInvalid) try {
                        e(this.findLastActive() || this.errorList.length && this.errorList[0].element || []).filter(":visible").focus().trigger("focusin")
                    } catch (t) {}
                },
                findLastActive: function() {
                    var t = this.lastActive;
                    return t && 1 === e.grep(this.errorList, function(e) {
                        return e.element.name === t.name
                    }).length && t
                },
                elements: function() {
                    var t = this,
                        n = {};
                    return e(this.currentForm).find("input, select, textarea").not(":submit, :reset, :image, [disabled]").not(this.settings.ignore).filter(function() {
                        return !this.name && t.settings.debug && window.console && console.error("%o has no name assigned", this), this.name in n || !t.objectLength(e(this).rules()) ? !1 : (n[this.name] = !0, !0)
                    })
                },
                clean: function(t) {
                    return e(t)[0]
                },
                errors: function() {
                    var t = this.settings.errorClass.replace(" ", ".");
                    return e(this.settings.errorElement + "." + t, this.errorContext)
                },
                reset: function() {
                    this.successList = [], this.errorList = [], this.errorMap = {}, this.toShow = e([]), this.toHide = e([]), this.currentElements = e([])
                },
                prepareForm: function() {
                    this.reset(), this.toHide = this.errors().add(this.containers)
                },
                prepareElement: function(e) {
                    this.reset(), this.toHide = this.errorsFor(e)
                },
                elementValue: function(t) {
                    var n = e(t).attr("type"),
                        i = e(t).val();
                    return "radio" === n || "checkbox" === n ? e("input[name='" + e(t).attr("name") + "']:checked").val() : "string" == typeof i ? i.replace(/\r/g, "") : i
                },
                check: function(t) {
                    t = this.validationTargetFor(this.clean(t));
                    var n, i = e(t).rules(),
                        s = !1,
                        o = this.elementValue(t);
                    for (var r in i) {
                        var a = {
                            method: r,
                            parameters: i[r]
                        };
                        try {
                            if (n = e.validator.methods[r].call(this, o, t, a.parameters), "dependency-mismatch" === n) {
                                s = !0;
                                continue
                            }
                            if (s = !1, "pending" === n) return this.toHide = this.toHide.not(this.errorsFor(t)), void 0;
                            if (!n) return this.formatAndAdd(t, a), !1
                        } catch (l) {
                            throw this.settings.debug && window.console && console.log("Exception occurred when checking element " + t.id + ", check the '" + a.method + "' method.", l), l
                        }
                    }
                    return s ? void 0 : (this.objectLength(i) && this.successList.push(t), !0)
                },
                customDataMessage: function(t, n) {
                    return e(t).data("msg-" + n.toLowerCase()) || t.attributes && e(t).attr("data-msg-" + n.toLowerCase())
                },
                customMessage: function(e, t) {
                    var n = this.settings.messages[e];
                    return n && (n.constructor === String ? n : n[t])
                },
                findDefined: function() {
                    for (var e = 0; arguments.length > e; e++)
                        if (void 0 !== arguments[e]) return arguments[e];
                    return void 0
                },
                defaultMessage: function(t, n) {
                    return this.findDefined(this.customMessage(t.name, n), this.customDataMessage(t, n), !this.settings.ignoreTitle && t.title || void 0, e.validator.messages[n], "<strong>Warning: No message defined for " + t.name + "</strong>")
                },
                formatAndAdd: function(t, n) {
                    var i = this.defaultMessage(t, n.method),
                        s = /\$?\{(\d+)\}/g;
                    "function" == typeof i ? i = i.call(this, n.parameters, t) : s.test(i) && (i = e.validator.format(i.replace(s, "{$1}"), n.parameters)), this.errorList.push({
                        message: i,
                        element: t
                    }), this.errorMap[t.name] = i, this.submitted[t.name] = i
                },
                addWrapper: function(e) {
                    return this.settings.wrapper && (e = e.add(e.parent(this.settings.wrapper))), e
                },
                defaultShowErrors: function() {
                    var e, t;
                    for (e = 0; this.errorList[e]; e++) {
                        var n = this.errorList[e];
                        this.settings.highlight && this.settings.highlight.call(this, n.element, this.settings.errorClass, this.settings.validClass), this.showLabel(n.element, n.message)
                    }
                    if (this.errorList.length && (this.toShow = this.toShow.add(this.containers)), this.settings.success)
                        for (e = 0; this.successList[e]; e++) this.showLabel(this.successList[e]);
                    if (this.settings.unhighlight)
                        for (e = 0, t = this.validElements(); t[e]; e++) this.settings.unhighlight.call(this, t[e], this.settings.errorClass, this.settings.validClass);
                    this.toHide = this.toHide.not(this.toShow), this.hideErrors(), this.addWrapper(this.toShow).show()
                },
                validElements: function() {
                    return this.currentElements.not(this.invalidElements())
                },
                invalidElements: function() {
                    return e(this.errorList).map(function() {
                        return this.element
                    })
                },
                showLabel: function(t, n) {
                    var i = this.errorsFor(t);
                    i.length ? (i.removeClass(this.settings.validClass).addClass(this.settings.errorClass), i.html(n)) : (i = e("<" + this.settings.errorElement + ">").attr("for", this.idOrName(t)).addClass(this.settings.errorClass).html(n || ""), this.settings.wrapper && (i = i.hide().show().wrap("<" + this.settings.wrapper + "/>").parent()), this.labelContainer.append(i).length || (this.settings.errorPlacement ? this.settings.errorPlacement(i, e(t)) : i.insertAfter(t))), !n && this.settings.success && (i.text(""), "string" == typeof this.settings.success ? i.addClass(this.settings.success) : this.settings.success(i, t)), this.toShow = this.toShow.add(i)
                },
                errorsFor: function(t) {
                    var n = this.idOrName(t);
                    return this.errors().filter(function() {
                        return e(this).attr("for") === n
                    })
                },
                idOrName: function(e) {
                    return this.groups[e.name] || (this.checkable(e) ? e.name : e.id || e.name)
                },
                validationTargetFor: function(e) {
                    return this.checkable(e) && (e = this.findByName(e.name).not(this.settings.ignore)[0]), e
                },
                checkable: function(e) {
                    return /radio|checkbox/i.test(e.type)
                },
                findByName: function(t) {
                    return e(this.currentForm).find("[name='" + t + "']")
                },
                getLength: function(t, n) {
                    switch (n.nodeName.toLowerCase()) {
                        case "select":
                            return e("option:selected", n).length;
                        case "input":
                            if (this.checkable(n)) return this.findByName(n.name).filter(":checked").length
                    }
                    return t.length
                },
                depend: function(e, t) {
                    return this.dependTypes[typeof e] ? this.dependTypes[typeof e](e, t) : !0
                },
                dependTypes: {
                    "boolean": function(e) {
                        return e
                    },
                    string: function(t, n) {
                        return !!e(t, n.form).length
                    },
                    "function": function(e, t) {
                        return e(t)
                    }
                },
                optional: function(t) {
                    var n = this.elementValue(t);
                    return !e.validator.methods.required.call(this, n, t) && "dependency-mismatch"
                },
                startRequest: function(e) {
                    this.pending[e.name] || (this.pendingRequest++, this.pending[e.name] = !0)
                },
                stopRequest: function(t, n) {
                    this.pendingRequest--, 0 > this.pendingRequest && (this.pendingRequest = 0), delete this.pending[t.name], n && 0 === this.pendingRequest && this.formSubmitted && this.form() ? (e(this.currentForm).submit(), this.formSubmitted = !1) : !n && 0 === this.pendingRequest && this.formSubmitted && (e(this.currentForm).triggerHandler("invalid-form", [this]), this.formSubmitted = !1)
                },
                previousValue: function(t) {
                    return e.data(t, "previousValue") || e.data(t, "previousValue", {
                        old: null,
                        valid: !0,
                        message: this.defaultMessage(t, "remote")
                    })
                }
            },
            classRuleSettings: {
                required: {
                    required: !0
                },
                email: {
                    email: !0
                },
                url: {
                    url: !0
                },
                date: {
                    date: !0
                },
                dateISO: {
                    dateISO: !0
                },
                number: {
                    number: !0
                },
                digits: {
                    digits: !0
                },
                creditcard: {
                    creditcard: !0
                }
            },
            addClassRules: function(t, n) {
                t.constructor === String ? this.classRuleSettings[t] = n : e.extend(this.classRuleSettings, t)
            },
            classRules: function(t) {
                var n = {},
                    i = e(t).attr("class");
                return i && e.each(i.split(" "), function() {
                    this in e.validator.classRuleSettings && e.extend(n, e.validator.classRuleSettings[this])
                }), n
            },
            attributeRules: function(t) {
                var n = {},
                    i = e(t),
                    s = i[0].getAttribute("type");
                for (var o in e.validator.methods) {
                    var r;
                    "required" === o ? (r = i.get(0).getAttribute(o), "" === r && (r = !0), r = !!r) : r = i.attr(o), /min|max/.test(o) && (null === s || /number|range|text/.test(s)) && (r = Number(r)), r ? n[o] = r : s === o && "range" !== s && (n[o] = !0)
                }
                return n.maxlength && /-1|2147483647|524288/.test(n.maxlength) && delete n.maxlength, n
            },
            dataRules: function(t) {
                var n, i, s = {},
                    o = e(t);
                for (n in e.validator.methods) i = o.data("rule-" + n.toLowerCase()), void 0 !== i && (s[n] = i);
                return s
            },
            staticRules: function(t) {
                var n = {},
                    i = e.data(t.form, "validator");
                return i.settings.rules && (n = e.validator.normalizeRule(i.settings.rules[t.name]) || {}), n
            },
            normalizeRules: function(t, n) {
                return e.each(t, function(i, s) {
                    if (s === !1) return delete t[i], void 0;
                    if (s.param || s.depends) {
                        var o = !0;
                        switch (typeof s.depends) {
                            case "string":
                                o = !!e(s.depends, n.form).length;
                                break;
                            case "function":
                                o = s.depends.call(n, n)
                        }
                        o ? t[i] = void 0 !== s.param ? s.param : !0 : delete t[i]
                    }
                }), e.each(t, function(i, s) {
                    t[i] = e.isFunction(s) ? s(n) : s
                }), e.each(["minlength", "maxlength"], function() {
                    t[this] && (t[this] = Number(t[this]))
                }), e.each(["rangelength", "range"], function() {
                    var n;
                    t[this] && (e.isArray(t[this]) ? t[this] = [Number(t[this][0]), Number(t[this][1])] : "string" == typeof t[this] && (n = t[this].split(/[\s,]+/), t[this] = [Number(n[0]), Number(n[1])]))
                }), e.validator.autoCreateRanges && (t.min && t.max && (t.range = [t.min, t.max], delete t.min, delete t.max), t.minlength && t.maxlength && (t.rangelength = [t.minlength, t.maxlength], delete t.minlength, delete t.maxlength)), t
            },
            normalizeRule: function(t) {
                if ("string" == typeof t) {
                    var n = {};
                    e.each(t.split(/\s/), function() {
                        n[this] = !0
                    }), t = n
                }
                return t
            },
            addMethod: function(t, n, i) {
                e.validator.methods[t] = n, e.validator.messages[t] = void 0 !== i ? i : e.validator.messages[t], 3 > n.length && e.validator.addClassRules(t, e.validator.normalizeRule(t))
            },
            methods: {
                required: function(t, n, i) {
                    if (!this.depend(i, n)) return "dependency-mismatch";
                    if ("select" === n.nodeName.toLowerCase()) {
                        var s = e(n).val();
                        return s && s.length > 0
                    }
                    return this.checkable(n) ? this.getLength(t, n) > 0 : e.trim(t).length > 0
                },
                email: function(e, t) {
                    return this.optional(t) || /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/i.test(e)
                },
                url: function(e, t) {
                    return this.optional(t) || /^(https?|s?ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i.test(e)
                },
                date: function(e, t) {
                    return this.optional(t) || !/Invalid|NaN/.test("" + new Date(e))
                },
                dateISO: function(e, t) {
                    return this.optional(t) || /^\d{4}[\/\-]\d{1,2}[\/\-]\d{1,2}$/.test(e)
                },
                number: function(e, t) {
                    return this.optional(t) || /^-?(?:\d+|\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(e)
                },
                digits: function(e, t) {
                    return this.optional(t) || /^\d+$/.test(e)
                },
                creditcard: function(e, t) {
                    if (this.optional(t)) return "dependency-mismatch";
                    if (/[^0-9 \-]+/.test(e)) return !1;
                    var n = 0,
                        i = 0,
                        s = !1;
                    e = e.replace(/\D/g, "");
                    for (var o = e.length - 1; o >= 0; o--) {
                        var r = e.charAt(o);
                        i = parseInt(r, 10), s && (i *= 2) > 9 && (i -= 9), n += i, s = !s
                    }
                    return 0 === n % 10
                },
                minlength: function(t, n, i) {
                    var s = e.isArray(t) ? t.length : this.getLength(e.trim(t), n);
                    return this.optional(n) || s >= i
                },
                maxlength: function(t, n, i) {
                    var s = e.isArray(t) ? t.length : this.getLength(e.trim(t), n);
                    return this.optional(n) || i >= s
                },
                rangelength: function(t, n, i) {
                    var s = e.isArray(t) ? t.length : this.getLength(e.trim(t), n);
                    return this.optional(n) || s >= i[0] && i[1] >= s
                },
                min: function(e, t, n) {
                    return this.optional(t) || e >= n
                },
                max: function(e, t, n) {
                    return this.optional(t) || n >= e
                },
                range: function(e, t, n) {
                    return this.optional(t) || e >= n[0] && n[1] >= e
                },
                equalTo: function(t, n, i) {
                    var s = e(i);
                    return this.settings.onfocusout && s.unbind(".validate-equalTo").bind("blur.validate-equalTo", function() {
                        e(n).valid()
                    }), t === s.val()
                },
                remote: function(t, n, i) {
                    if (this.optional(n)) return "dependency-mismatch";
                    var s = this.previousValue(n);
                    if (this.settings.messages[n.name] || (this.settings.messages[n.name] = {}), s.originalMessage = this.settings.messages[n.name].remote, this.settings.messages[n.name].remote = s.message, i = "string" == typeof i && {
                            url: i
                        } || i, s.old === t) return s.valid;
                    s.old = t;
                    var o = this;
                    this.startRequest(n);
                    var r = {};
                    return r[n.name] = t, e.ajax(e.extend(!0, {
                        url: i,
                        mode: "abort",
                        port: "validate" + n.name,
                        dataType: "json",
                        data: r,
                        success: function(i) {
                            o.settings.messages[n.name].remote = s.originalMessage;
                            var r = i === !0 || "true" === i;
                            if (r) {
                                var a = o.formSubmitted;
                                o.prepareElement(n), o.formSubmitted = a, o.successList.push(n), delete o.invalid[n.name], o.showErrors()
                            } else {
                                var l = {},
                                    u = i || o.defaultMessage(n, "remote");
                                l[n.name] = s.message = e.isFunction(u) ? u(t) : u, o.invalid[n.name] = !0, o.showErrors(l)
                            }
                            s.valid = r, o.stopRequest(n, r)
                        }
                    }, i)), "pending"
                }
            }
        }), e.format = e.validator.format
    }(jQuery),
    function(e) {
        var t = {};
        if (e.ajaxPrefilter) e.ajaxPrefilter(function(e, n, i) {
            var s = e.port;
            "abort" === e.mode && (t[s] && t[s].abort(), t[s] = i)
        });
        else {
            var n = e.ajax;
            e.ajax = function(i) {
                var s = ("mode" in i ? i : e.ajaxSettings).mode,
                    o = ("port" in i ? i : e.ajaxSettings).port;
                return "abort" === s ? (t[o] && t[o].abort(), t[o] = n.apply(this, arguments), t[o]) : n.apply(this, arguments)
            }
        }
    }(jQuery),
    function(e) {
        e.extend(e.fn, {
            validateDelegate: function(t, n, i) {
                return this.bind(n, function(n) {
                    var s = e(n.target);
                    return s.is(t) ? i.apply(s, arguments) : void 0
                })
            }
        })
    }(jQuery);
var q = null;
if (window.PR_SHOULD_USE_CONTINUATION = !0, function() {
        function e(e) {
            function t(e) {
                var t = e.charCodeAt(0);
                if (92 !== t) return t;
                var n = e.charAt(1);
                return (t = d[n]) ? t : n >= "0" && "7" >= n ? parseInt(e.substring(1), 8) : "u" === n || "x" === n ? parseInt(e.substring(2), 16) : e.charCodeAt(1)
            }

            function n(e) {
                return 32 > e ? (16 > e ? "\\x0" : "\\x") + e.toString(16) : (e = String.fromCharCode(e), ("\\" === e || "-" === e || "[" === e || "]" === e) && (e = "\\" + e), e)
            }

            function i(e) {
                for (var i = e.substring(1, e.length - 1).match(/\\u[\dA-Fa-f]{4}|\\x[\dA-Fa-f]{2}|\\[0-3][0-7]{0,2}|\\[0-7]{1,2}|\\[\S\s]|[^\\]/g), e = [], s = [], o = "^" === i[0], r = o ? 1 : 0, a = i.length; a > r; ++r) {
                    var l = i[r];
                    if (/\\[bdsw]/i.test(l)) e.push(l);
                    else {
                        var u, l = t(l);
                        a > r + 2 && "-" === i[r + 1] ? (u = t(i[r + 2]), r += 2) : u = l, s.push([l, u]), 65 > u || l > 122 || (65 > u || l > 90 || s.push([32 | Math.max(65, l), 32 | Math.min(u, 90)]), 97 > u || l > 122 || s.push([-33 & Math.max(97, l), -33 & Math.min(u, 122)]))
                    }
                }
                for (s.sort(function(e, t) {
                        return e[0] - t[0] || t[1] - e[1]
                    }), i = [], l = [0 / 0, 0 / 0], r = 0; r < s.length; ++r) a = s[r], a[0] <= l[1] + 1 ? l[1] = Math.max(l[1], a[1]) : i.push(l = a);
                for (s = ["["], o && s.push("^"), s.push.apply(s, e), r = 0; r < i.length; ++r) a = i[r], s.push(n(a[0])), a[1] > a[0] && (a[1] + 1 > a[0] && s.push("-"), s.push(n(a[1])));
                return s.push("]"), s.join("")
            }

            function s(e) {
                for (var t = e.source.match(/\[(?:[^\\\]]|\\[\S\s])*]|\\u[\dA-Fa-f]{4}|\\x[\dA-Fa-f]{2}|\\\d+|\\[^\dux]|\(\?[!:=]|[()^]|[^()[\\^]+/g), n = t.length, s = [], a = 0, l = 0; n > a; ++a) {
                    var u = t[a];
                    "(" === u ? ++l : "\\" === u.charAt(0) && (u = +u.substring(1)) && l >= u && (s[u] = -1)
                }
                for (a = 1; a < s.length; ++a) - 1 === s[a] && (s[a] = ++o);
                for (l = a = 0; n > a; ++a) u = t[a], "(" === u ? (++l, void 0 === s[l] && (t[a] = "(?:")) : "\\" === u.charAt(0) && (u = +u.substring(1)) && l >= u && (t[a] = "\\" + s[l]);
                for (l = a = 0; n > a; ++a) "^" === t[a] && "^" !== t[a + 1] && (t[a] = "");
                if (e.ignoreCase && r)
                    for (a = 0; n > a; ++a) u = t[a], e = u.charAt(0), u.length >= 2 && "[" === e ? t[a] = i(u) : "\\" !== e && (t[a] = u.replace(/[A-Za-z]/g, function(e) {
                        return e = e.charCodeAt(0), "[" + String.fromCharCode(-33 & e, 32 | e) + "]"
                    }));
                return t.join("")
            }
            for (var o = 0, r = !1, a = !1, l = 0, u = e.length; u > l; ++l) {
                var c = e[l];
                if (c.ignoreCase) a = !0;
                else if (/[a-z]/i.test(c.source.replace(/\\u[\da-f]{4}|\\x[\da-f]{2}|\\[^UXux]/gi, ""))) {
                    r = !0, a = !1;
                    break
                }
            }
            for (var d = {
                    b: 8,
                    t: 9,
                    n: 10,
                    v: 11,
                    f: 12,
                    r: 13
                }, h = [], l = 0, u = e.length; u > l; ++l) {
                if (c = e[l], c.global || c.multiline) throw Error("" + c);
                h.push("(?:" + s(c) + ")")
            }
            return RegExp(h.join("|"), a ? "gi" : "g")
        }

        function t(e) {
            function t(e) {
                switch (e.nodeType) {
                    case 1:
                        if (i.test(e.className)) break;
                        for (var n = e.firstChild; n; n = n.nextSibling) t(n);
                        n = e.nodeName, ("BR" === n || "LI" === n) && (s[a] = "\n", r[a << 1] = o++, r[a++ << 1 | 1] = e);
                        break;
                    case 3:
                    case 4:
                        n = e.nodeValue, n.length && (n = l ? n.replace(/\r\n?/g, "\n") : n.replace(/[\t\n\r ]+/g, " "), s[a] = n, r[a << 1] = o, o += n.length, r[a++ << 1 | 1] = e)
                }
            }
            var n, i = /(?:^|\s)nocode(?:\s|$)/,
                s = [],
                o = 0,
                r = [],
                a = 0;
            e.currentStyle ? n = e.currentStyle.whiteSpace : window.getComputedStyle && (n = document.defaultView.getComputedStyle(e, q).getPropertyValue("white-space"));
            var l = n && "pre" === n.substring(0, 3);
            return t(e), {
                a: s.join("").replace(/\n$/, ""),
                c: r
            }
        }

        function n(e, t, n, i) {
            t && (e = {
                a: t,
                d: e
            }, n(e), i.push.apply(i, e.e))
        }

        function i(t, i) {
            function s(e) {
                for (var t = e.d, u = [t, "pln"], c = 0, d = e.a.match(o) || [], h = {}, p = 0, f = d.length; f > p; ++p) {
                    var m, g = d[p],
                        v = h[g],
                        y = void 0;
                    if ("string" == typeof v) m = !1;
                    else {
                        var b = r[g.charAt(0)];
                        if (b) y = g.match(b[1]), v = b[0];
                        else {
                            for (m = 0; l > m; ++m)
                                if (b = i[m], y = g.match(b[1])) {
                                    v = b[0];
                                    break
                                }
                            y || (v = "pln")
                        }!(m = v.length >= 5 && "lang-" === v.substring(0, 5)) || y && "string" == typeof y[1] || (m = !1, v = "src"), m || (h[g] = v)
                    }
                    if (b = c, c += g.length, m) {
                        m = y[1];
                        var x = g.indexOf(m),
                            w = x + m.length;
                        y[2] && (w = g.length - y[2].length, x = w - m.length), v = v.substring(5), n(t + b, g.substring(0, x), s, u), n(t + b + x, m, a(v, m), u), n(t + b + w, g.substring(w), s, u)
                    } else u.push(t + b, v)
                }
                e.e = u
            }
            var o, r = {};
            ! function() {
                for (var n = t.concat(i), s = [], a = {}, l = 0, u = n.length; u > l; ++l) {
                    var c = n[l],
                        d = c[3];
                    if (d)
                        for (var h = d.length; --h >= 0;) r[d.charAt(h)] = c;
                    c = c[1], d = "" + c, a.hasOwnProperty(d) || (s.push(c), a[d] = q)
                }
                s.push(/[\S\s]/), o = e(s)
            }();
            var l = i.length;
            return s
        }

        function s(e) {
            var t = [],
                n = [];
            e.tripleQuotedStrings ? t.push(["str", /^(?:'''(?:[^'\\]|\\[\S\s]|''?(?=[^']))*(?:'''|$)|"""(?:[^"\\]|\\[\S\s]|""?(?=[^"]))*(?:"""|$)|'(?:[^'\\]|\\[\S\s])*(?:'|$)|"(?:[^"\\]|\\[\S\s])*(?:"|$))/, q, "'\""]) : e.multiLineStrings ? t.push(["str", /^(?:'(?:[^'\\]|\\[\S\s])*(?:'|$)|"(?:[^"\\]|\\[\S\s])*(?:"|$)|`(?:[^\\`]|\\[\S\s])*(?:`|$))/, q, "'\"`"]) : t.push(["str", /^(?:'(?:[^\n\r'\\]|\\.)*(?:'|$)|"(?:[^\n\r"\\]|\\.)*(?:"|$))/, q, "\"'"]), e.verbatimStrings && n.push(["str", /^@"(?:[^"]|"")*(?:"|$)/, q]);
            var s = e.hashComments;
            return s && (e.cStyleComments ? (s > 1 ? t.push(["com", /^#(?:##(?:[^#]|#(?!##))*(?:###|$)|.*)/, q, "#"]) : t.push(["com", /^#(?:(?:define|elif|else|endif|error|ifdef|include|ifndef|line|pragma|undef|warning)\b|[^\n\r]*)/, q, "#"]), n.push(["str", /^<(?:(?:(?:\.\.\/)*|\/?)(?:[\w-]+(?:\/[\w-]+)+)?[\w-]+\.h|[a-z]\w*)>/, q])) : t.push(["com", /^#[^\n\r]*/, q, "#"])), e.cStyleComments && (n.push(["com", /^\/\/[^\n\r]*/, q]), n.push(["com", /^\/\*[\S\s]*?(?:\*\/|$)/, q])), e.regexLiterals && n.push(["lang-regex", /^(?:^^\.?|[!+-]|!=|!==|#|%|%=|&|&&|&&=|&=|\(|\*|\*=|\+=|,|-=|->|\/|\/=|:|::|;|<|<<|<<=|<=|=|==|===|>|>=|>>|>>=|>>>|>>>=|[?@[^]|\^=|\^\^|\^\^=|{|\||\|=|\|\||\|\|=|~|break|case|continue|delete|do|else|finally|instanceof|return|throw|try|typeof)\s*(\/(?=[^*/])(?:[^/[\\]|\\[\S\s]|\[(?:[^\\\]]|\\[\S\s])*(?:]|$))+\/)/]), (s = e.types) && n.push(["typ", s]), e = ("" + e.keywords).replace(/^ | $/g, ""), e.length && n.push(["kwd", RegExp("^(?:" + e.replace(/[\s,]+/g, "|") + ")\\b"), q]), t.push(["pln", /^\s+/, q, " \r\n	 "]), n.push(["lit", /^@[$_a-z][\w$@]*/i, q], ["typ", /^(?:[@_]?[A-Z]+[a-z][\w$@]*|\w+_t\b)/, q], ["pln", /^[$_a-z][\w$@]*/i, q], ["lit", /^(?:0x[\da-f]+|(?:\d(?:_\d+)*\d*(?:\.\d*)?|\.\d\+)(?:e[+-]?\d+)?)[a-z]*/i, q, "0123456789"], ["pln", /^\\[\S\s]?/, q], ["pun", /^.[^\s\w"-$'./@\\`]*/, q]), i(t, n)
        }

        function o(e, t) {
            function n(e) {
                switch (e.nodeType) {
                    case 1:
                        if (o.test(e.className)) break;
                        if ("BR" === e.nodeName) i(e), e.parentNode && e.parentNode.removeChild(e);
                        else
                            for (e = e.firstChild; e; e = e.nextSibling) n(e);
                        break;
                    case 3:
                    case 4:
                        if (l) {
                            var t = e.nodeValue,
                                s = t.match(r);
                            if (s) {
                                var u = t.substring(0, s.index);
                                e.nodeValue = u, (t = t.substring(s.index + s[0].length)) && e.parentNode.insertBefore(a.createTextNode(t), e.nextSibling), i(e), u || e.parentNode.removeChild(e)
                            }
                        }
                }
            }

            function i(e) {
                function t(e, n) {
                    var i = n ? e.cloneNode(!1) : e,
                        s = e.parentNode;
                    if (s) {
                        var s = t(s, 1),
                            o = e.nextSibling;
                        s.appendChild(i);
                        for (var r = o; r; r = o) o = r.nextSibling, s.appendChild(r)
                    }
                    return i
                }
                for (; !e.nextSibling;)
                    if (e = e.parentNode, !e) return;
                for (var n, e = t(e.nextSibling, 0);
                    (n = e.parentNode) && 1 === n.nodeType;) e = n;
                u.push(e)
            }
            var s, o = /(?:^|\s)nocode(?:\s|$)/,
                r = /\r\n?|\n/,
                a = e.ownerDocument;
            e.currentStyle ? s = e.currentStyle.whiteSpace : window.getComputedStyle && (s = a.defaultView.getComputedStyle(e, q).getPropertyValue("white-space"));
            var l = s && "pre" === s.substring(0, 3);
            for (s = a.createElement("LI"); e.firstChild;) s.appendChild(e.firstChild);
            for (var u = [s], c = 0; c < u.length; ++c) n(u[c]);
            t === (0 | t) && u[0].setAttribute("value", t);
            var d = a.createElement("OL");
            d.className = "linenums";
            for (var h = Math.max(0, t - 1 | 0) || 0, c = 0, p = u.length; p > c; ++c) s = u[c], s.className = "L" + (c + h) % 10, s.firstChild || s.appendChild(a.createTextNode(" ")), d.appendChild(s);
            e.appendChild(d)
        }

        function r(e, t) {
            for (var n = t.length; --n >= 0;) {
                var i = t[n];
                b.hasOwnProperty(i) ? window.console && console.warn("cannot override language handler %s", i) : b[i] = e
            }
        }

        function a(e, t) {
            return e && b.hasOwnProperty(e) || (e = /^\s*</.test(t) ? "default-markup" : "default-code"), b[e]
        }

        function l(e) {
            var n = e.g;
            try {
                var i = t(e.h),
                    s = i.a;
                e.a = s, e.c = i.c, e.d = 0, a(n, s)(e);
                var o = /\bMSIE\b/.test(navigator.userAgent),
                    n = /\n/g,
                    r = e.a,
                    l = r.length,
                    i = 0,
                    u = e.c,
                    c = u.length,
                    s = 0,
                    d = e.e,
                    h = d.length,
                    e = 0;
                d[h] = l;
                var p, f;
                for (f = p = 0; h > f;) d[f] !== d[f + 2] ? (d[p++] = d[f++], d[p++] = d[f++]) : f += 2;
                for (h = p, f = p = 0; h > f;) {
                    for (var m = d[f], g = d[f + 1], v = f + 2; h >= v + 2 && d[v + 1] === g;) v += 2;
                    d[p++] = m, d[p++] = g, f = v
                }
                for (d.length = p; c > s;) {
                    var y, b = u[s + 2] || l,
                        x = d[e + 2] || l,
                        v = Math.min(b, x),
                        w = u[s + 1];
                    if (1 !== w.nodeType && (y = r.substring(i, v))) {
                        o && (y = y.replace(n, "\r")), w.nodeValue = y;
                        var C = w.ownerDocument,
                            T = C.createElement("SPAN");
                        T.className = d[e + 1];
                        var k = w.parentNode;
                        k.replaceChild(T, w), T.appendChild(w), b > i && (u[s + 1] = w = C.createTextNode(r.substring(v, b)), k.insertBefore(w, T.nextSibling))
                    }
                    i = v, i >= b && (s += 2), i >= x && (e += 2)
                }
            } catch (S) {
                "console" in window && console.log(S && S.stack ? S.stack : S)
            }
        }
        var u = ["break,continue,do,else,for,if,return,while"],
            c = [
                [u, "auto,case,char,const,default,double,enum,extern,float,goto,int,long,register,short,signed,sizeof,static,struct,switch,typedef,union,unsigned,void,volatile"], "catch,class,delete,false,import,new,operator,private,protected,public,this,throw,true,try,typeof"
            ],
            d = [c, "alignof,align_union,asm,axiom,bool,concept,concept_map,const_cast,constexpr,decltype,dynamic_cast,explicit,export,friend,inline,late_check,mutable,namespace,nullptr,reinterpret_cast,static_assert,static_cast,template,typeid,typename,using,virtual,where"],
            h = [c, "abstract,boolean,byte,extends,final,finally,implements,import,instanceof,null,native,package,strictfp,super,synchronized,throws,transient"],
            p = [h, "as,base,by,checked,decimal,delegate,descending,dynamic,event,fixed,foreach,from,group,implicit,in,interface,internal,into,is,lock,object,out,override,orderby,params,partial,readonly,ref,sbyte,sealed,stackalloc,string,select,uint,ulong,unchecked,unsafe,ushort,var"],
            c = [c, "debugger,eval,export,function,get,null,set,undefined,var,with,Infinity,NaN"],
            f = [u, "and,as,assert,class,def,del,elif,except,exec,finally,from,global,import,in,is,lambda,nonlocal,not,or,pass,print,raise,try,with,yield,False,True,None"],
            m = [u, "alias,and,begin,case,class,def,defined,elsif,end,ensure,false,in,module,next,nil,not,or,redo,rescue,retry,self,super,then,true,undef,unless,until,when,yield,BEGIN,END"],
            u = [u, "case,done,elif,esac,eval,fi,function,in,local,set,then,until"],
            g = /^(DIR|FILE|vector|(de|priority_)?queue|list|stack|(const_)?iterator|(multi)?(set|map)|bitset|u?(int|float)\d*)/,
            v = /\S/,
            y = s({
                keywords: [d, p, c, "caller,delete,die,do,dump,elsif,eval,exit,foreach,for,goto,if,import,last,local,my,next,no,our,print,package,redo,require,sub,undef,unless,until,use,wantarray,while,BEGIN,END" + f, m, u],
                hashComments: !0,
                cStyleComments: !0,
                multiLineStrings: !0,
                regexLiterals: !0
            }),
            b = {};
        r(y, ["default-code"]), r(i([], [
            ["pln", /^[^<?]+/],
            ["dec", /^<!\w[^>]*(?:>|$)/],
            ["com", /^<\!--[\S\s]*?(?:--\>|$)/],
            ["lang-", /^<\?([\S\s]+?)(?:\?>|$)/],
            ["lang-", /^<%([\S\s]+?)(?:%>|$)/],
            ["pun", /^(?:<[%?]|[%?]>)/],
            ["lang-", /^<xmp\b[^>]*>([\S\s]+?)<\/xmp\b[^>]*>/i],
            ["lang-js", /^<script\b[^>]*>([\S\s]*?)(<\/script\b[^>]*>)/i],
            ["lang-css", /^<style\b[^>]*>([\S\s]*?)(<\/style\b[^>]*>)/i],
            ["lang-in.tag", /^(<\/?[a-z][^<>]*>)/i]
        ]), ["default-markup", "htm", "html", "mxml", "xhtml", "xml", "xsl"]), r(i([
            ["pln", /^\s+/, q, " 	\r\n"],
            ["atv", /^(?:"[^"]*"?|'[^']*'?)/, q, "\"'"]
        ], [
            ["tag", /^^<\/?[a-z](?:[\w-.:]*\w)?|\/?>$/i],
            ["atn", /^(?!style[\s=]|on)[a-z](?:[\w:-]*\w)?/i],
            ["lang-uq.val", /^=\s*([^\s"'>]*(?:[^\s"'/>]|\/(?=\s)))/],
            ["pun", /^[/<->]+/],
            ["lang-js", /^on\w+\s*=\s*"([^"]+)"/i],
            ["lang-js", /^on\w+\s*=\s*'([^']+)'/i],
            ["lang-js", /^on\w+\s*=\s*([^\s"'>]+)/i],
            ["lang-css", /^style\s*=\s*"([^"]+)"/i],
            ["lang-css", /^style\s*=\s*'([^']+)'/i],
            ["lang-css", /^style\s*=\s*([^\s"'>]+)/i]
        ]), ["in.tag"]), r(i([], [
            ["atv", /^[\S\s]+/]
        ]), ["uq.val"]), r(s({
            keywords: d,
            hashComments: !0,
            cStyleComments: !0,
            types: g
        }), ["c", "cc", "cpp", "cxx", "cyc", "m"]), r(s({
            keywords: "null,true,false"
        }), ["json"]), r(s({
            keywords: p,
            hashComments: !0,
            cStyleComments: !0,
            verbatimStrings: !0,
            types: g
        }), ["cs"]), r(s({
            keywords: h,
            cStyleComments: !0
        }), ["java"]), r(s({
            keywords: u,
            hashComments: !0,
            multiLineStrings: !0
        }), ["bsh", "csh", "sh"]), r(s({
            keywords: f,
            hashComments: !0,
            multiLineStrings: !0,
            tripleQuotedStrings: !0
        }), ["cv", "py"]), r(s({
            keywords: "caller,delete,die,do,dump,elsif,eval,exit,foreach,for,goto,if,import,last,local,my,next,no,our,print,package,redo,require,sub,undef,unless,until,use,wantarray,while,BEGIN,END",
            hashComments: !0,
            multiLineStrings: !0,
            regexLiterals: !0
        }), ["perl", "pl", "pm"]), r(s({
            keywords: m,
            hashComments: !0,
            multiLineStrings: !0,
            regexLiterals: !0
        }), ["rb"]), r(s({
            keywords: c,
            cStyleComments: !0,
            regexLiterals: !0
        }), ["js"]), r(s({
            keywords: "all,and,by,catch,class,else,extends,false,finally,for,if,in,is,isnt,loop,new,no,not,null,of,off,on,or,return,super,then,true,try,unless,until,when,while,yes",
            hashComments: 3,
            cStyleComments: !0,
            multilineStrings: !0,
            tripleQuotedStrings: !0,
            regexLiterals: !0
        }), ["coffee"]), r(i([], [
            ["str", /^[\S\s]+/]
        ]), ["regex"]), window.prettyPrintOne = function(e, t, n) {
            var i = document.createElement("PRE");
            return i.innerHTML = e, n && o(i, n), l({
                g: t,
                i: n,
                h: i
            }), i.innerHTML
        }, window.prettyPrint = function(e) {
            function t() {
                for (var n = window.PR_SHOULD_USE_CONTINUATION ? u.now() + 250 : 1 / 0; d < i.length && u.now() < n; d++) {
                    var s = i[d],
                        r = s.className;
                    if (r.indexOf("prettyprint") >= 0) {
                        var a, p, r = r.match(h);
                        if (p = !r) {
                            p = s;
                            for (var f = void 0, m = p.firstChild; m; m = m.nextSibling) var g = m.nodeType,
                                f = 1 === g ? f ? p : m : 3 === g ? v.test(m.nodeValue) ? p : f : f;
                            p = (a = f === p ? void 0 : f) && "CODE" === a.tagName
                        }
                        for (p && (r = a.className.match(h)), r && (r = r[1]), p = !1, f = s.parentNode; f; f = f.parentNode)
                            if (("pre" === f.tagName || "code" === f.tagName || "xmp" === f.tagName) && f.className && f.className.indexOf("prettyprint") >= 0) {
                                p = !0;
                                break
                            }
                        p || ((p = (p = s.className.match(/\blinenums\b(?::(\d+))?/)) ? p[1] && p[1].length ? +p[1] : !0 : !1) && o(s, p), c = {
                            g: r,
                            h: s,
                            i: p
                        }, l(c))
                    }
                }
                d < i.length ? setTimeout(t, 250) : e && e()
            }
            for (var n = [document.getElementsByTagName("pre"), document.getElementsByTagName("code"), document.getElementsByTagName("xmp")], i = [], s = 0; s < n.length; ++s)
                for (var r = 0, a = n[s].length; a > r; ++r) i.push(n[s][r]);
            var n = q,
                u = Date;
            u.now || (u = {
                now: function() {
                    return +new Date
                }
            });
            var c, d = 0,
                h = /\blang(?:uage)?-([\w.]+)(?!\S)/;
            t()
        }, window.PR = {
            createSimpleLexer: i,
            registerLangHandler: r,
            sourceDecorator: s,
            PR_ATTRIB_NAME: "atn",
            PR_ATTRIB_VALUE: "atv",
            PR_COMMENT: "com",
            PR_DECLARATION: "dec",
            PR_KEYWORD: "kwd",
            PR_LITERAL: "lit",
            PR_NOCODE: "nocode",
            PR_PLAIN: "pln",
            PR_PUNCTUATION: "pun",
            PR_SOURCE: "src",
            PR_STRING: "str",
            PR_TAG: "tag",
            PR_TYPE: "typ"
        }
    }(), ! function(e, t) {
        var n = function(e) {
                var t, n;
                if (t = n = 0, e.offsetParent)
                    do t += e.offsetLeft, n += e.offsetTop; while (e = e.offsetParent);
                return [t, n]
            },
            i = function(e) {
                this.canvas = e.canvas, this.minRadius = e.minRadius || 15, this.arcWidth = e.arcWidth || 5, this.gapWidth = e.gapWidth || 3, this.centerX = e.centerX || this.canvas.width / 2, this.centerY = e.centerY || this.canvas.height / 2, this.infoLineLength = e.infoLineLength || 60, this.horizLineLength = e.horizLineLength || 10, this.infoLineAngleInterval = e.infoLineAngleInterval || Math.PI / 8, this.infoLineBaseAngle = e.infoLineBaseAngle || Math.PI / 6, this.context = this.canvas.getContext("2d"), this.width = this.canvas.width, this.height = this.canvas.height, this.circles = [], this.runningCount = 0
            };
        i.prototype = {
            constructor: i,
            addEntry: function(e) {
                return this.circles.push(new s({
                    canvas: this.canvas,
                    context: this.context,
                    centerX: this.centerX,
                    centerY: this.centerY,
                    innerRadius: this.minRadius + this.circles.length * (this.gapWidth + this.arcWidth),
                    arcWidth: this.arcWidth,
                    infoLineLength: this.infoLineLength,
                    horizLineLength: this.horizLineLength,
                    id: this.circles.length,
                    fillColor: e.fillColor,
                    outlineColor: e.outlineColor,
                    progressListener: e.progressListener,
                    infoListener: e.infoListener,
                    infoLineAngle: this.infoLineBaseAngle + this.circles.length * this.infoLineAngleInterval
                })), this
            },
            start: function(e) {
                var t = this;
                return this.timer = setInterval(function() {
                    t._update()
                }, e || 33), this
            },
            stop: function() {
                clearTimeout(this.timer)
            },
            _update: function() {
                return this._clear(), this.circles.forEach(function(e) {
                    e.update()
                }), this
            },
            _clear: function() {
                return this.context.clearRect(0, 0, this.canvas.width, this.canvas.height), this
            }
        };
        var s = function(e) {
            if (this.id = e.id, this.canvas = e.canvas, this.context = e.context, this.centerX = e.centerX, this.centerY = e.centerY, this.arcWidth = e.arcWidth, this.innerRadius = e.innerRadius || 0, this.fillColor = e.fillColor || "#fff", this.outlineColor = e.outlineColor || this.fillColor, this.progressListener = e.progressListener, this.infoLineLength = e.infoLineLength || 250, this.horizLineLength = e.horizLineLength || 50, this.infoListener = e.infoListener, this.infoLineAngle = e.infoLineAngle, this.outerRadius = this.innerRadius + this.arcWidth, this.infoListener) {
                var i = this.infoLineAngle,
                    s = (this.innerRadius + this.outerRadius) / 2,
                    o = Math.sin(i),
                    r = Math.cos(i);
                this.infoLineStartX = this.centerX + o * s, this.infoLineStartY = this.centerY - r * s, this.infoLineMidX = this.centerX + o * this.infoLineLength, this.infoLineMidY = this.centerY - r * this.infoLineLength, this.infoLineEndX = this.infoLineMidX + (0 > o ? -this.horizLineLength : this.horizLineLength), this.infoLineEndY = this.infoLineMidY;
                var a = t.createElement("div"),
                    l = a.style;
                l.color = this.fillColor, l.position = "absolute", l.left = this.infoLineEndX + n(this.canvas)[0] + "px", a.className = "ProgressCircleInfo", a.id = "progress_circle_info_" + this.id, t.body.appendChild(a), this.infoText = a
            }
        };
        s.prototype = {
            constructor: s,
            update: function() {
                this.progress = this.progressListener(), this._draw(), this.infoListener && (this.info = this.infoListener(), this._drawInfo())
            },
            _draw: function() {
                var e = this.context,
                    t = -Math.PI / 2,
                    n = 0 + t,
                    i = n + this.progress * Math.PI * 2,
                    s = this.centerX,
                    o = this.centerY,
                    r = this.innerRadius,
                    a = this.outerRadius;
                return e.fillStyle = this.fillColor, e.strokeStyle = this.outlineColor, e.beginPath(), e.arc(s, o, r, n, i, !1), e.arc(s, o, a, i, n, !0), e.closePath(), e.stroke(), e.fill(), this
            },
            _drawInfo: function() {
                var e, t;
                return e = [
                    [this.infoLineStartX, this.infoLineStartY],
                    [this.infoLineMidX, this.infoLineMidY],
                    [this.infoLineEndX, this.infoLineEndY]
                ], this._drawSegments(e, !1), this.infoText.innerHTML = this.info, t = this.infoText.offsetHeight, this.infoText.style.top = this.infoLineEndY + n(this.canvas)[1] - t / 2 + "px", this
            },
            _drawSegments: function(e, t) {
                var n = this.context;
                n.beginPath(), n.moveTo(e[0][0], e[0][1]);
                for (var i = 1; i < e.length; ++i) n.lineTo(e[i][0], e[i][1]);
                t && n.closePath(), n.stroke()
            }
        }, e.ProgressCircle = i
    }(window, document), document.createElement("svg").getAttributeNS) {
    var checkbxsCross = Array.prototype.slice.call(document.querySelectorAll('form.ac-cross input[type="checkbox"]')),
        radiobxsFill = Array.prototype.slice.call(document.querySelectorAll('form.ac-fill input[type="radio"]')),
        checkbxsCheckmark = Array.prototype.slice.call(document.querySelectorAll('form.ac-checkmark input[type="checkbox"]')),
        radiobxsCircle = Array.prototype.slice.call(document.querySelectorAll('form.ac-circle input[type="radio"]')),
        checkbxsBoxfill = Array.prototype.slice.call(document.querySelectorAll('form.ac-boxfill input[type="checkbox"]')),
        radiobxsSwirl = Array.prototype.slice.call(document.querySelectorAll('form.ac-swirl input[type="radio"]')),
        checkbxsDiagonal = Array.prototype.slice.call(document.querySelectorAll('form.ac-diagonal input[type="checkbox"]')),
        checkbxsList = Array.prototype.slice.call(document.querySelectorAll('form.ac-list input[type="checkbox"]')),
        pathDefs = {
            cross: ["M 10 10 L 90 90", "M 90 10 L 10 90"],
            fill: ["M15.833,24.334c2.179-0.443,4.766-3.995,6.545-5.359 c1.76-1.35,4.144-3.732,6.256-4.339c-3.983,3.844-6.504,9.556-10.047,13.827c-2.325,2.802-5.387,6.153-6.068,9.866 c2.081-0.474,4.484-2.502,6.425-3.488c5.708-2.897,11.316-6.804,16.608-10.418c4.812-3.287,11.13-7.53,13.935-12.905 c-0.759,3.059-3.364,6.421-4.943,9.203c-2.728,4.806-6.064,8.417-9.781,12.446c-6.895,7.477-15.107,14.109-20.779,22.608 c3.515-0.784,7.103-2.996,10.263-4.628c6.455-3.335,12.235-8.381,17.684-13.15c5.495-4.81,10.848-9.68,15.866-14.988 c1.905-2.016,4.178-4.42,5.556-6.838c0.051,1.256-0.604,2.542-1.03,3.672c-1.424,3.767-3.011,7.432-4.723,11.076 c-2.772,5.904-6.312,11.342-9.921,16.763c-3.167,4.757-7.082,8.94-10.854,13.205c-2.456,2.777-4.876,5.977-7.627,8.448 c9.341-7.52,18.965-14.629,27.924-22.656c4.995-4.474,9.557-9.075,13.586-14.446c1.443-1.924,2.427-4.939,3.74-6.56 c-0.446,3.322-2.183,6.878-3.312,10.032c-2.261,6.309-5.352,12.53-8.418,18.482c-3.46,6.719-8.134,12.698-11.954,19.203 c-0.725,1.234-1.833,2.451-2.265,3.77c2.347-0.48,4.812-3.199,7.028-4.286c4.144-2.033,7.787-4.938,11.184-8.072 c3.142-2.9,5.344-6.758,7.925-10.141c1.483-1.944,3.306-4.056,4.341-6.283c0.041,1.102-0.507,2.345-0.876,3.388 c-1.456,4.114-3.369,8.184-5.059,12.212c-1.503,3.583-3.421,7.001-5.277,10.411c-0.967,1.775-2.471,3.528-3.287,5.298 c2.49-1.163,5.229-3.906,7.212-5.828c2.094-2.028,5.027-4.716,6.33-7.335c-0.256,1.47-2.07,3.577-3.02,4.809"],
            checkmark: ["M16.667,62.167c3.109,5.55,7.217,10.591,10.926,15.75 c2.614,3.636,5.149,7.519,8.161,10.853c-0.046-0.051,1.959,2.414,2.692,2.343c0.895-0.088,6.958-8.511,6.014-7.3 c5.997-7.695,11.68-15.463,16.931-23.696c6.393-10.025,12.235-20.373,18.104-30.707C82.004,24.988,84.802,20.601,87,16"],
            circle: ["M34.745,7.183C25.078,12.703,13.516,26.359,8.797,37.13 c-13.652,31.134,9.219,54.785,34.77,55.99c15.826,0.742,31.804-2.607,42.207-17.52c6.641-9.52,12.918-27.789,7.396-39.713 C85.873,20.155,69.828-5.347,41.802,13.379"],
            boxfill: ["M6.987,4.774c15.308,2.213,30.731,1.398,46.101,1.398 c9.74,0,19.484,0.084,29.225,0.001c2.152-0.018,4.358-0.626,6.229,1.201c-5.443,1.284-10.857,2.58-16.398,2.524 c-9.586-0.096-18.983,2.331-28.597,2.326c-7.43-0.003-14.988-0.423-22.364,1.041c-4.099,0.811-7.216,3.958-10.759,6.81 c8.981-0.104,17.952,1.972,26.97,1.94c8.365-0.029,16.557-1.168,24.872-1.847c2.436-0.2,24.209-4.854,24.632,2.223 c-14.265,5.396-29.483,0.959-43.871,0.525c-12.163-0.368-24.866,2.739-36.677,6.863c14.93,4.236,30.265,2.061,45.365,2.425 c7.82,0.187,15.486,1.928,23.337,1.903c2.602-0.008,6.644-0.984,9,0.468c-2.584,1.794-8.164,0.984-10.809,1.165 c-13.329,0.899-26.632,2.315-39.939,3.953c-6.761,0.834-13.413,0.95-20.204,0.938c-1.429-0.001-2.938-0.155-4.142,0.436 c5.065,4.68,15.128,2.853,20.742,2.904c11.342,0.104,22.689-0.081,34.035-0.081c9.067,0,20.104-2.412,29.014,0.643 c-4.061,4.239-12.383,3.389-17.056,4.292c-11.054,2.132-21.575,5.041-32.725,5.289c-5.591,0.124-11.278,1.001-16.824,2.088 c-4.515,0.885-9.461,0.823-13.881,2.301c2.302,3.186,7.315,2.59,10.13,2.694c15.753,0.588,31.413-0.231,47.097-2.172 c7.904-0.979,15.06,1.748,22.549,4.877c-12.278,4.992-25.996,4.737-38.58,5.989c-8.467,0.839-16.773,1.041-25.267,0.984 c-4.727-0.031-10.214-0.851-14.782,1.551c12.157,4.923,26.295,2.283,38.739,2.182c7.176-0.06,14.323,1.151,21.326,3.07 c-2.391,2.98-7.512,3.388-10.368,4.143c-8.208,2.165-16.487,3.686-24.71,5.709c-6.854,1.685-13.604,3.616-20.507,4.714 c-1.707,0.273-3.337,0.483-4.923,1.366c2.023,0.749,3.73,0.558,5.95,0.597c9.749,0.165,19.555,0.31,29.304-0.027 c15.334-0.528,30.422-4.721,45.782-4.653"],
            swirl: ["M49.346,46.341c-3.79-2.005,3.698-10.294,7.984-8.89 c8.713,2.852,4.352,20.922-4.901,20.269c-4.684-0.33-12.616-7.405-14.38-11.818c-2.375-5.938,7.208-11.688,11.624-13.837 c9.078-4.42,18.403-3.503,22.784,6.651c4.049,9.378,6.206,28.09-1.462,36.276c-7.091,7.567-24.673,2.277-32.357-1.079 c-11.474-5.01-24.54-19.124-21.738-32.758c3.958-19.263,28.856-28.248,46.044-23.244c20.693,6.025,22.012,36.268,16.246,52.826 c-5.267,15.118-17.03,26.26-33.603,21.938c-11.054-2.883-20.984-10.949-28.809-18.908C9.236,66.096,2.704,57.597,6.01,46.371 c3.059-10.385,12.719-20.155,20.892-26.604C40.809,8.788,58.615,1.851,75.058,12.031c9.289,5.749,16.787,16.361,18.284,27.262 c0.643,4.698,0.646,10.775-3.811,13.746"],
            diagonal: ["M16.053,91.059c0.435,0,0.739-0.256,0.914-0.768 c3.101-2.85,5.914-6.734,8.655-9.865C41.371,62.438,56.817,44.11,70.826,24.721c3.729-5.16,6.914-10.603,10.475-15.835 c0.389-0.572,0.785-1.131,1.377-1.521"],
            list: ["M1.986,8.91c41.704,4.081,83.952,5.822,125.737,2.867 c17.086-1.208,34.157-0.601,51.257-0.778c21.354-0.223,42.706-1.024,64.056-1.33c18.188-0.261,36.436,0.571,54.609,0.571", "M3.954,25.923c9.888,0.045,19.725-0.905,29.602-1.432 c16.87-0.897,33.825-0.171,50.658-2.273c14.924-1.866,29.906-1.407,44.874-1.936c19.9-0.705,39.692-0.887,59.586,0.45 c35.896,2.407,71.665-1.062,107.539-1.188"]
        },
        animDefs = {
            cross: {
                speed: .2,
                easing: "ease-in-out"
            },
            fill: {
                speed: .8,
                easing: "ease-in-out"
            },
            checkmark: {
                speed: .2,
                easing: "ease-in-out"
            },
            circle: {
                speed: .2,
                easing: "ease-in-out"
            },
            boxfill: {
                speed: .8,
                easing: "ease-in"
            },
            swirl: {
                speed: .8,
                easing: "ease-in"
            },
            diagonal: {
                speed: .2,
                easing: "ease-in-out"
            },
            list: {
                speed: .3,
                easing: "ease-in-out"
            }
        };
    checkbxsCross.forEach(function(e) {
        controlCheckbox(e, "cross")
    }), radiobxsFill.forEach(function(e) {
        controlRadiobox(e, "fill")
    }), checkbxsCheckmark.forEach(function(e) {
        controlCheckbox(e, "checkmark")
    }), radiobxsCircle.forEach(function(e) {
        controlRadiobox(e, "circle")
    }), checkbxsBoxfill.forEach(function(e) {
        controlCheckbox(e, "boxfill")
    }), radiobxsSwirl.forEach(function(e) {
        controlRadiobox(e, "swirl")
    }), checkbxsDiagonal.forEach(function(e) {
        controlCheckbox(e, "diagonal")
    }), checkbxsList.forEach(function(e) {
        controlCheckbox(e, "list", {
            viewBox: "0 0 300 100",
            preserveAspectRatio: "none"
        })
    })
}
$(document).ready(function() {
        $('input[type="radio"]').ezMark(), $("select").not(".tab-pane:not(.active) select").selectBox({
            keepInViewport: !1,
            mobile: !0
        }), $('a[data-toggle="tab"]').on("shown.bs.tab", function(e) {
            $("select", $($(e.target).attr("href"))).selectBox({
                keepInViewport: !1,
                mobile: !0
            })
        }), $("input, textarea").placeholder(), $(".passport-box .pagination-wrapper li").size() && setPagination();
        $("#animated-boxes").size() && ($("#animated-boxes li a").click(function(e) {
            e.preventDefault()
        }), $("#animated-boxes li a").hover(function() {
            var e = $(this);
            if ($(this).hasClass("active")) return e.find(".icon").css("top", -100), e.find("h2").css("bottom", 200), e.find("p").css("top", 0), void 0;
            var t = $(this).data("timers") || {
                h2: 0,
                icon: 0,
                p: 0
            };
            clearTimeout(t.h2), clearTimeout(t.icon), clearTimeout(t.p), t.icon = setTimeout(function() {
                e.find(".icon").stop(1, 0).animate({
                    top: "-100px"
                }, 350, "easeInExpo")
            }, 0), t.h2 = setTimeout(function() {
                e.find("h2").stop(1, 0).animate({
                    bottom: "+200px"
                }, 350, "easeInExpo")
            }, 100), t.p = setTimeout(function() {
                e.find("p").stop(1, 0).animate({
                    top: "0"
                }, 350, "easeOutExpo")
            }, 450), $(this).data("timers", t)
        }, function() {
            var e = $(this),
                t = $(this).data("timers") || {
                    h2: 0,
                    icon: 0,
                    p: 0
                };
            clearTimeout(t.h2), clearTimeout(t.icon), clearTimeout(t.p), t.icon = setTimeout(function() {
                e.find(".icon").stop(1, 0).animate({
                    top: "0"
                }, 300, "easeOutExpo")
            }, 450), t.h2 = setTimeout(function() {
                e.find("h2").stop(1, 0).animate({
                    bottom: "10px"
                }, 300, "easeOutExpo")
            }, 350), t.p = setTimeout(function() {
                e.find("p").stop(1, 0).animate({
                    top: "-300px"
                }, 300, "easeInExpo")
            }, 0), $(this).data("timers", t), $(this).removeClass("active")
        })), onlyForDevelopment()
    }), $(window).load(function() {
        $(".form-box .content").jScrollPane(), $(".form-box .jspDrag").addClass("border-box")
    }),
    function(e) {
        "use strict";

        function t(t, n) {
            this.itemsArray = [], this.$element = e(t), this.$element.hide(), this.isSelect = "SELECT" === t.tagName, this.multiple = this.isSelect && t.hasAttribute("multiple"), this.objectItems = n && n.itemValue, this.placeholderText = t.hasAttribute("placeholder") ? this.$element.attr("placeholder") : "", this.inputSize = Math.max(1, this.placeholderText.length), this.$container = e('<div class="bootstrap-tagsinput"></div>'), this.$input = e('<input size="' + this.inputSize + '" type="text" placeholder="' + this.placeholderText + '"/>').appendTo(this.$container), this.$element.after(this.$container), this.build(n)
        }

        function n(e, t) {
            if ("function" != typeof e[t]) {
                var n = e[t];
                e[t] = function(e) {
                    return e[n]
                }
            }
        }

        function i(e, t) {
            if ("function" != typeof e[t]) {
                var n = e[t];
                e[t] = function() {
                    return n
                }
            }
        }

        function s(e) {
            return e ? a.text(e).html() : ""
        }

        function o(e) {
            var t = 0;
            if (document.selection) {
                e.focus();
                var n = document.selection.createRange();
                n.moveStart("character", -e.value.length), t = n.text.length
            } else(e.selectionStart || "0" == e.selectionStart) && (t = e.selectionStart);
            return t
        }
        var r = {
            tagClass: function() {
                return "label label-info"
            },
            itemValue: function(e) {
                return e ? e.toString() : e
            },
            itemText: function(e) {
                return this.itemValue(e)
            },
            freeInput: !0,
            maxTags: void 0,
            confirmKeys: [13],
            onTagExists: function(e, t) {
                t.hide().fadeIn()
            }
        };
        t.prototype = {
            constructor: t,
            add: function(t, n) {
                var i = this;
                if (!(i.options.maxTags && i.itemsArray.length >= i.options.maxTags || t !== !1 && !t)) {
                    if ("object" == typeof t && !i.objectItems) throw "Can't add objects when itemValue option is not set";
                    if (!t.toString().match(/^\s*$/)) {
                        if (i.isSelect && !i.multiple && i.itemsArray.length > 0 && i.remove(i.itemsArray[0]), "string" == typeof t && "INPUT" === this.$element[0].tagName) {
                            var o = t.split(",");
                            if (o.length > 1) {
                                for (var r = 0; r < o.length; r++) this.add(o[r], !0);
                                return n || i.pushVal(), void 0
                            }
                        }
                        var a = i.options.itemValue(t),
                            l = i.options.itemText(t),
                            u = i.options.tagClass(t),
                            c = e.grep(i.itemsArray, function(e) {
                                return i.options.itemValue(e) === a
                            })[0];
                        if (c) {
                            if (i.options.onTagExists) {
                                var d = e(".tag", i.$container).filter(function() {
                                    return e(this).data("item") === c
                                });
                                i.options.onTagExists(t, d)
                            }
                        } else {
                            i.itemsArray.push(t);
                            var h = e('<span class="tag ' + s(u) + '">' + s(l) + '<span data-role="remove"></span></span>');
                            if (h.data("item", t), i.findInputWrapper().before(h), h.after(" "), i.isSelect && !e('option[value="' + escape(a) + '"]', i.$element)[0]) {
                                var p = e("<option selected>" + s(l) + "</option>");
                                p.data("item", t), p.attr("value", a), i.$element.append(p)
                            }
                            n || i.pushVal(), i.options.maxTags === i.itemsArray.length && i.$container.addClass("bootstrap-tagsinput-max"), i.$element.trigger(e.Event("itemAdded", {
                                item: t
                            }))
                        }
                    }
                }
            },
            remove: function(t, n) {
                var i = this;
                i.objectItems && (t = "object" == typeof t ? e.grep(i.itemsArray, function(e) {
                    return i.options.itemValue(e) == i.options.itemValue(t)
                })[0] : e.grep(i.itemsArray, function(e) {
                    return i.options.itemValue(e) == t
                })[0]), t && (e(".tag", i.$container).filter(function() {
                    return e(this).data("item") === t
                }).remove(), e("option", i.$element).filter(function() {
                    return e(this).data("item") === t
                }).remove(), i.itemsArray.splice(e.inArray(t, i.itemsArray), 1)), n || i.pushVal(), i.options.maxTags > i.itemsArray.length && i.$container.removeClass("bootstrap-tagsinput-max"), i.$element.trigger(e.Event("itemRemoved", {
                    item: t
                }))
            },
            removeAll: function() {
                var t = this;
                for (e(".tag", t.$container).remove(), e("option", t.$element).remove(); t.itemsArray.length > 0;) t.itemsArray.pop();
                t.pushVal(), t.options.maxTags && !this.isEnabled() && this.enable()
            },
            refresh: function() {
                var t = this;
                e(".tag", t.$container).each(function() {
                    var n = e(this),
                        i = n.data("item"),
                        o = t.options.itemValue(i),
                        r = t.options.itemText(i),
                        a = t.options.tagClass(i);
                    if (n.attr("class", null), n.addClass("tag " + s(a)), n.contents().filter(function() {
                            return 3 == this.nodeType
                        })[0].nodeValue = s(r), t.isSelect) {
                        var l = e("option", t.$element).filter(function() {
                            return e(this).data("item") === i
                        });
                        l.attr("value", o)
                    }
                })
            },
            items: function() {
                return this.itemsArray
            },
            pushVal: function() {
                var t = this,
                    n = e.map(t.items(), function(e) {
                        return t.options.itemValue(e).toString()
                    });
                t.$element.val(n, !0).trigger("change")
            },
            build: function(t) {
                var s = this;
                s.options = e.extend({}, r, t);
                var a = s.options.typeahead || {};
                s.objectItems && (s.options.freeInput = !1), n(s.options, "itemValue"), n(s.options, "itemText"), n(s.options, "tagClass"), s.options.source && (a.source = s.options.source), a.source && e.fn.typeahead && (i(a, "source"), s.$input.typeahead({
                    source: function(t, n) {
                        function i(e) {
                            for (var t = [], i = 0; i < e.length; i++) {
                                var r = s.options.itemText(e[i]);
                                o[r] = e[i], t.push(r)
                            }
                            n(t)
                        }
                        this.map = {};
                        var o = this.map,
                            r = a.source(t);
                        e.isFunction(r.success) ? r.success(i) : e.when(r).then(i)
                    },
                    updater: function(e) {
                        s.add(this.map[e])
                    },
                    matcher: function(e) {
                        return -1 !== e.toLowerCase().indexOf(this.query.trim().toLowerCase())
                    },
                    sorter: function(e) {
                        return e.sort()
                    },
                    highlighter: function(e) {
                        var t = new RegExp("(" + this.query + ")", "gi");
                        return e.replace(t, "<strong>$1</strong>")
                    }
                })), s.$container.on("click", e.proxy(function() {
                    s.$input.focus()
                }, s)), s.$container.on("keydown", "input", e.proxy(function(t) {
                    var n = e(t.target),
                        i = s.findInputWrapper();
                    switch (t.which) {
                        case 8:
                            if (0 === o(n[0])) {
                                var r = i.prev();
                                r && s.remove(r.data("item"))
                            }
                            break;
                        case 46:
                            if (0 === o(n[0])) {
                                var a = i.next();
                                a && s.remove(a.data("item"))
                            }
                            break;
                        case 37:
                            var l = i.prev();
                            0 === n.val().length && l[0] && (l.before(i), n.focus());
                            break;
                        case 39:
                            var u = i.next();
                            0 === n.val().length && u[0] && (u.after(i), n.focus());
                            break;
                        default:
                            s.options.freeInput && e.inArray(t.which, s.options.confirmKeys) >= 0 && (s.add(n.val()), n.val(""), t.preventDefault())
                    }
                    n.attr("size", Math.max(this.inputSize, n.val().length))
                }, s)), s.$container.on("click", "[data-role=remove]", e.proxy(function(t) {
                    s.remove(e(t.target).closest(".tag").data("item"))
                }, s)), s.options.itemValue === r.itemValue && ("INPUT" === s.$element[0].tagName ? s.add(s.$element.val()) : e("option", s.$element).each(function() {
                    s.add(e(this).attr("value"), !0)
                }))
            },
            destroy: function() {
                var e = this;
                e.$container.off("keypress", "input"), e.$container.off("click", "[role=remove]"), e.$container.remove(), e.$element.removeData("tagsinput"), e.$element.show()
            },
            focus: function() {
                this.$input.focus()
            },
            input: function() {
                return this.$input
            },
            findInputWrapper: function() {
                for (var t = this.$input[0], n = this.$container[0]; t && t.parentNode !== n;) t = t.parentNode;
                return e(t)
            }
        }, e.fn.tagsinput = function(n, i) {
            var s = [];
            return this.each(function() {
                var o = e(this).data("tagsinput");
                if (o) {
                    var r = o[n](i);
                    void 0 !== r && s.push(r)
                } else o = new t(this, n), e(this).data("tagsinput", o), s.push(o), "SELECT" === this.tagName && e("option", e(this)).attr("selected", "selected"), e(this).val(e(this).val())
            }), "string" == typeof n ? s.length > 1 ? s : s[0] : s
        }, e.fn.tagsinput.Constructor = t;
        var a = e("<div />");
        e(function() {
            e("input[data-role=tagsinput], select[multiple][data-role=tagsinput]").tagsinput()
        })
    }(window.jQuery),
    function(e) {
        var t = {
                isMsie: function() {
                    return /(msie|trident)/i.test(navigator.userAgent) ? navigator.userAgent.match(/(msie |rv:)(\d+(.\d+)?)/i)[2] : !1
                },
                isBlankString: function(e) {
                    return !e || /^\s*$/.test(e)
                },
                escapeRegExChars: function(e) {
                    return e.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&")
                },
                isString: function(e) {
                    return "string" == typeof e
                },
                isNumber: function(e) {
                    return "number" == typeof e
                },
                isArray: e.isArray,
                isFunction: e.isFunction,
                isObject: e.isPlainObject,
                isUndefined: function(e) {
                    return "undefined" == typeof e
                },
                bind: e.proxy,
                each: function(t, n) {
                    function i(e, t) {
                        return n(t, e)
                    }
                    e.each(t, i)
                },
                map: e.map,
                filter: e.grep,
                every: function(t, n) {
                    var i = !0;
                    return t ? (e.each(t, function(e, s) {
                        return (i = n.call(null, s, e, t)) ? void 0 : !1
                    }), !!i) : i
                },
                some: function(t, n) {
                    var i = !1;
                    return t ? (e.each(t, function(e, s) {
                        return (i = n.call(null, s, e, t)) ? !1 : void 0
                    }), !!i) : i
                },
                mixin: e.extend,
                getUniqueId: function() {
                    var e = 0;
                    return function() {
                        return e++
                    }
                }(),
                templatify: function(t) {
                    function n() {
                        return String(t)
                    }
                    return e.isFunction(t) ? t : n
                },
                defer: function(e) {
                    setTimeout(e, 0)
                },
                debounce: function(e, t, n) {
                    var i, s;
                    return function() {
                        var o, r, a = this,
                            l = arguments;
                        return o = function() {
                            i = null, n || (s = e.apply(a, l))
                        }, r = n && !i, clearTimeout(i), i = setTimeout(o, t), r && (s = e.apply(a, l)), s
                    }
                },
                throttle: function(e, t) {
                    var n, i, s, o, r, a;
                    return r = 0, a = function() {
                            r = new Date, s = null, o = e.apply(n, i)
                        },
                        function() {
                            var l = new Date,
                                u = t - (l - r);
                            return n = this, i = arguments, 0 >= u ? (clearTimeout(s), s = null, r = l, o = e.apply(n, i)) : s || (s = setTimeout(a, u)), o
                        }
                },
                noop: function() {}
            },
            n = "0.10.1",
            i = function() {
                function e(e) {
                    this.maxSize = e || 100, this.size = 0, this.hash = {}, this.list = new n
                }

                function n() {
                    this.head = this.tail = null
                }

                function i(e, t) {
                    this.key = e, this.val = t, this.prev = this.next = null
                }
                return t.mixin(e.prototype, {
                    set: function(e, t) {
                        var n, s = this.list.tail;
                        this.size >= this.maxSize && (this.list.remove(s), delete this.hash[s.key]), (n = this.hash[e]) ? (n.val = t, this.list.moveToFront(n)) : (n = new i(e, t), this.list.add(n), this.hash[e] = n, this.size++)
                    },
                    get: function(e) {
                        var t = this.hash[e];
                        return t ? (this.list.moveToFront(t), t.val) : void 0
                    }
                }), t.mixin(n.prototype, {
                    add: function(e) {
                        this.head && (e.next = this.head, this.head.prev = e), this.head = e, this.tail = this.tail || e
                    },
                    remove: function(e) {
                        e.prev ? e.prev.next = e.next : this.head = e.next, e.next ? e.next.prev = e.prev : this.tail = e.prev
                    },
                    moveToFront: function(e) {
                        this.remove(e), this.add(e)
                    }
                }), e
            }(this),
            s = function() {
                function e(e) {
                    this.prefix = ["__", e, "__"].join(""), this.ttlKey = "__ttl__", this.keyMatcher = new RegExp("^" + this.prefix)
                }

                function n() {
                    return (new Date).getTime()
                }

                function i(e) {
                    return JSON.stringify(t.isUndefined(e) ? null : e)
                }

                function s(e) {
                    return JSON.parse(e)
                }
                var o, r;
                try {
                    o = window.localStorage, o.setItem("~~~", "!"), o.removeItem("~~~")
                } catch (a) {
                    o = null
                }
                return r = o && window.JSON ? {
                    _prefix: function(e) {
                        return this.prefix + e
                    },
                    _ttlKey: function(e) {
                        return this._prefix(e) + this.ttlKey
                    },
                    get: function(e) {
                        return this.isExpired(e) && this.remove(e), s(o.getItem(this._prefix(e)))
                    },
                    set: function(e, s, r) {
                        return t.isNumber(r) ? o.setItem(this._ttlKey(e), i(n() + r)) : o.removeItem(this._ttlKey(e)), o.setItem(this._prefix(e), i(s))
                    },
                    remove: function(e) {
                        return o.removeItem(this._ttlKey(e)), o.removeItem(this._prefix(e)), this
                    },
                    clear: function() {
                        var e, t, n = [],
                            i = o.length;
                        for (e = 0; i > e; e++)(t = o.key(e)).match(this.keyMatcher) && n.push(t.replace(this.keyMatcher, ""));
                        for (e = n.length; e--;) this.remove(n[e]);
                        return this
                    },
                    isExpired: function(e) {
                        var i = s(o.getItem(this._ttlKey(e)));
                        return t.isNumber(i) && n() > i ? !0 : !1
                    }
                } : {
                    get: t.noop,
                    set: t.noop,
                    remove: t.noop,
                    clear: t.noop,
                    isExpired: t.noop
                }, t.mixin(e.prototype, r), e
            }(),
            o = function() {
                function n(t) {
                    t = t || {}, this._send = t.transport ? s(t.transport) : e.ajax, this._get = t.rateLimiter ? t.rateLimiter(this._get) : this._get
                }

                function s(n) {
                    return function(i, s) {
                        function o(e) {
                            t.defer(function() {
                                a.resolve(e)
                            })
                        }

                        function r(e) {
                            t.defer(function() {
                                a.reject(e)
                            })
                        }
                        var a = e.Deferred();
                        return n(i, s, o, r), a
                    }
                }
                var o = 0,
                    r = {},
                    a = 6,
                    l = new i(10);
                return n.setMaxPendingRequests = function(e) {
                    a = e
                }, n.resetCache = function() {
                    l = new i(10)
                }, t.mixin(n.prototype, {
                    _get: function(e, t, n) {
                        function i(t) {
                            n && n(t), l.set(e, t)
                        }

                        function s() {
                            o--, delete r[e], c.onDeckRequestArgs && (c._get.apply(c, c.onDeckRequestArgs), c.onDeckRequestArgs = null)
                        }
                        var u, c = this;
                        (u = r[e]) ? u.done(i): a > o ? (o++, r[e] = this._send(e, t).done(i).always(s)) : this.onDeckRequestArgs = [].slice.call(arguments, 0)
                    },
                    get: function(e, n, i) {
                        var s;
                        return t.isFunction(n) && (i = n, n = {}), (s = l.get(e)) ? t.defer(function() {
                            i && i(s)
                        }) : this._get(e, n, i), !!s
                    }
                }), n
            }(),
            r = function() {
                function n(t) {
                    t = t || {}, t.datumTokenizer && t.queryTokenizer || e.error("datumTokenizer and queryTokenizer are both required"), this.datumTokenizer = t.datumTokenizer, this.queryTokenizer = t.queryTokenizer, this.datums = [], this.trie = s()
                }

                function i(e) {
                    return e = t.filter(e, function(e) {
                        return !!e
                    }), e = t.map(e, function(e) {
                        return e.toLowerCase()
                    })
                }

                function s() {
                    return {
                        ids: [],
                        children: {}
                    }
                }

                function o(e) {
                    for (var t = {}, n = [], i = 0; i < e.length; i++) t[e[i]] || (t[e[i]] = !0, n.push(e[i]));
                    return n
                }

                function r(e, t) {
                    function n(e, t) {
                        return e - t
                    }
                    var i = 0,
                        s = 0,
                        o = [];
                    for (e = e.sort(n), t = t.sort(n); i < e.length && s < t.length;) e[i] < t[s] ? i++ : e[i] > t[s] ? s++ : (o.push(e[i]), i++, s++);
                    return o
                }
                return t.mixin(n.prototype, {
                    bootstrap: function(e) {
                        this.datums = e.datums, this.trie = e.trie
                    },
                    add: function(e) {
                        var n = this;
                        e = t.isArray(e) ? e : [e], t.each(e, function(e) {
                            var o, r;
                            o = n.datums.push(e) - 1, r = i(n.datumTokenizer(e)), t.each(r, function(e) {
                                var t, i, r;
                                for (t = n.trie, i = e.split(""); r = i.shift();) t = t.children[r] || (t.children[r] = s()), t.ids.push(o)
                            })
                        })
                    },
                    get: function(e) {
                        var n, s, a = this;
                        return n = i(this.queryTokenizer(e)), t.each(n, function(e) {
                            var t, n, i, o;
                            if (s && 0 === s.length) return !1;
                            for (t = a.trie, n = e.split(""); t && (i = n.shift());) t = t.children[i];
                            return t && 0 === n.length ? (o = t.ids.slice(0), s = s ? r(s, o) : o, void 0) : (s = [], !1)
                        }), s ? t.map(o(s), function(e) {
                            return a.datums[e]
                        }) : []
                    },
                    serialize: function() {
                        return {
                            datums: this.datums,
                            trie: this.trie
                        }
                    }
                }), n
            }(),
            a = function() {
                function i(e) {
                    var n = e.local || null;
                    return t.isFunction(n) && (n = n.call(null)), n
                }

                function s(i) {
                    var s, o;
                    return o = {
                        url: null,
                        thumbprint: "",
                        ttl: 864e5,
                        filter: null,
                        ajax: {}
                    }, (s = i.prefetch || null) && (s = t.isString(s) ? {
                        url: s
                    } : s, s = t.mixin(o, s), s.thumbprint = n + s.thumbprint, s.ajax.type = s.ajax.type || "GET", s.ajax.dataType = s.ajax.dataType || "json", !s.url && e.error("prefetch requires url to be set")), s
                }

                function o(n) {
                    function i(e) {
                        return function(n) {
                            return t.debounce(n, e)
                        }
                    }

                    function s(e) {
                        return function(n) {
                            return t.throttle(n, e)
                        }
                    }
                    var o, r;
                    return r = {
                        url: null,
                        wildcard: "%QUERY",
                        replace: null,
                        rateLimitBy: "debounce",
                        rateLimitWait: 300,
                        send: null,
                        filter: null,
                        ajax: {}
                    }, (o = n.remote || null) && (o = t.isString(o) ? {
                        url: o
                    } : o, o = t.mixin(r, o), o.rateLimiter = /^throttle$/i.test(o.rateLimitBy) ? s(o.rateLimitWait) : i(o.rateLimitWait), o.ajax.type = o.ajax.type || "GET", o.ajax.dataType = o.ajax.dataType || "json", delete o.rateLimitBy, delete o.rateLimitWait, !o.url && e.error("remote requires url to be set")), o
                }
                return {
                    local: i,
                    prefetch: s,
                    remote: o
                }
            }(),
            l = (window.Bloodhound = function() {
                function n(t) {
                    t && (t.local || t.prefetch || t.remote) || e.error("one of local, prefetch, or remote is required"), this.limit = t.limit || 5, this.sorter = i(t.sorter), this.dupDetector = t.dupDetector || l, this.local = a.local(t), this.prefetch = a.prefetch(t), this.remote = a.remote(t), this.cacheKey = this.prefetch ? this.prefetch.cacheKey || this.prefetch.url : null, this.index = new r({
                        datumTokenizer: t.datumTokenizer,
                        queryTokenizer: t.queryTokenizer
                    }), this.storage = this.cacheKey ? new s(this.cacheKey) : null
                }

                function i(e) {
                    function n(t) {
                        return t.sort(e)
                    }

                    function i(e) {
                        return e
                    }
                    return t.isFunction(e) ? n : i
                }

                function l() {
                    return !1
                }
                var u;
                return u = {
                    data: "data",
                    protocol: "protocol",
                    thumbprint: "thumbprint"
                }, n.tokenizers = {
                    whitespace: function(e) {
                        return e.split(/\s+/)
                    },
                    nonword: function(e) {
                        return e.split(/\W+/)
                    }
                }, t.mixin(n.prototype, {
                    _loadPrefetch: function(t) {
                        function n(e) {
                            var n;
                            n = t.filter ? t.filter(e) : e, o.add(n), o._saveToStorage(o.index.serialize(), t.thumbprint, t.ttl)
                        }
                        var i, s, o = this;
                        return (i = this._readFromStorage(t.thumbprint)) ? (this.index.bootstrap(i), s = e.Deferred().resolve()) : s = e.ajax(t.url, t.ajax).done(n), s
                    },
                    _getFromRemote: function(e, t) {
                        function n(e) {
                            var n = o.remote.filter ? o.remote.filter(e) : e;
                            t(n)
                        }
                        var i, s, o = this;
                        return e = e || "", s = encodeURIComponent(e), i = this.remote.replace ? this.remote.replace(this.remote.url, e) : this.remote.url.replace(this.remote.wildcard, s), this.transport.get(i, this.remote.ajax, n)
                    },
                    _saveToStorage: function(e, t, n) {
                        this.storage && (this.storage.set(u.data, e, n), this.storage.set(u.protocol, location.protocol, n), this.storage.set(u.thumbprint, t, n))
                    },
                    _readFromStorage: function(e) {
                        var t, n = {};
                        return this.storage && (n.data = this.storage.get(u.data), n.protocol = this.storage.get(u.protocol), n.thumbprint = this.storage.get(u.thumbprint)), t = n.thumbprint !== e || n.protocol !== location.protocol, n.data && !t ? n.data : null
                    },
                    initialize: function() {
                        function t() {
                            i.add(i.local)
                        }
                        var n, i = this;
                        return n = this.prefetch ? this._loadPrefetch(this.prefetch) : e.Deferred().resolve(), this.local && n.done(t), this.transport = this.remote ? new o(this.remote) : null, this.initialize = function() {
                            return n.promise()
                        }, n.promise()
                    },
                    add: function(e) {
                        this.index.add(e)
                    },
                    get: function(e, n) {
                        function i(e) {
                            var i = s.slice(0);
                            t.each(e, function(e) {
                                var n;
                                return n = t.some(i, function(t) {
                                    return o.dupDetector(e, t)
                                }), !n && i.push(e), i.length < o.limit
                            }), n && n(o.sorter(i))
                        }
                        var s, o = this,
                            r = !1;
                        s = this.index.get(e), s = this.sorter(s).slice(0, this.limit), s.length < this.limit && this.transport && (r = this._getFromRemote(e, i)), !r && n && n(s)
                    },
                    ttAdapter: function() {
                        return t.bind(this.get, this)
                    }
                }), n
            }(), {
                wrapper: '<span class="twitter-typeahead"></span>',
                dropdown: '<span class="tt-dropdown-menu"></span>',
                dataset: '<div class="tt-dataset-%CLASS%"></div>',
                suggestions: '<span class="tt-suggestions"></span>',
                suggestion: '<div class="tt-suggestion">%BODY%</div>'
            }),
            u = {
                wrapper: {
                    position: "relative",
                    display: "inline-block"
                },
                hint: {
                    position: "absolute",
                    top: "0",
                    left: "0",
                    borderColor: "transparent",
                    boxShadow: "none"
                },
                input: {
                    position: "relative",
                    verticalAlign: "top",
                    backgroundColor: "transparent"
                },
                inputWithNoHint: {
                    position: "relative",
                    verticalAlign: "top"
                },
                dropdown: {
                    position: "absolute",
                    top: "100%",
                    left: "0",
                    zIndex: "100",
                    display: "none"
                },
                suggestions: {
                    display: "block"
                },
                suggestion: {
                    whiteSpace: "nowrap",
                    cursor: "pointer"
                },
                suggestionChild: {
                    whiteSpace: "normal"
                },
                ltr: {
                    left: "0",
                    right: "auto"
                },
                rtl: {
                    left: "auto",
                    right: " 0"
                }
            };
        t.isMsie() && t.mixin(u.input, {
            backgroundImage: "url(data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7)"
        }), t.isMsie() && t.isMsie() <= 7 && t.mixin(u.input, {
            marginTop: "-1px"
        });
        var c = function() {
                function n(t) {
                    t && t.el || e.error("EventBus initialized without el"), this.$el = e(t.el)
                }
                var i = "typeahead:";
                return t.mixin(n.prototype, {
                    trigger: function(e) {
                        var t = [].slice.call(arguments, 1);
                        this.$el.trigger(i + e, t)
                    }
                }), n
            }(),
            d = function() {
                function e(e, t, n, i) {
                    var s;
                    if (!n) return this;
                    for (t = t.split(l), n = i ? a(n, i) : n, this._callbacks = this._callbacks || {}; s = t.shift();) this._callbacks[s] = this._callbacks[s] || {
                        sync: [],
                        async: []
                    }, this._callbacks[s][e].push(n);
                    return this
                }

                function t(t, n, i) {
                    return e.call(this, "async", t, n, i)
                }

                function n(t, n, i) {
                    return e.call(this, "sync", t, n, i)
                }

                function i(e) {
                    var t;
                    if (!this._callbacks) return this;
                    for (e = e.split(l); t = e.shift();) delete this._callbacks[t];
                    return this
                }

                function s(e) {
                    var t, n, i, s, r;
                    if (!this._callbacks) return this;
                    for (e = e.split(l), i = [].slice.call(arguments, 1);
                        (t = e.shift()) && (n = this._callbacks[t]);) s = o(n.sync, this, [t].concat(i)), r = o(n.async, this, [t].concat(i)), s() && u(r);
                    return this
                }

                function o(e, t, n) {
                    function i() {
                        for (var i, s = 0; !i && s < e.length; s += 1) i = e[s].apply(t, n) === !1;
                        return !i
                    }
                    return i
                }

                function r() {
                    var e;
                    return e = window.setImmediate ? function(e) {
                        setImmediate(function() {
                            e()
                        })
                    } : function(e) {
                        setTimeout(function() {
                            e()
                        }, 0)
                    }
                }

                function a(e, t) {
                    return e.bind ? e.bind(t) : function() {
                        e.apply(t, [].slice.call(arguments, 0))
                    }
                }
                var l = /\s+/,
                    u = r();
                return {
                    onSync: n,
                    onAsync: t,
                    off: i,
                    trigger: s
                }
            }(),
            h = function(e) {
                function n(e, n, i) {
                    for (var s, o = [], r = 0; r < e.length; r++) o.push(t.escapeRegExChars(e[r]));
                    return s = i ? "\\b(" + o.join("|") + ")\\b" : "(" + o.join("|") + ")", n ? new RegExp(s) : new RegExp(s, "i")
                }
                var i = {
                    node: null,
                    pattern: null,
                    tagName: "strong",
                    className: null,
                    wordsOnly: !1,
                    caseSensitive: !1
                };
                return function(s) {
                    function o(t) {
                        var n, i;
                        return (n = a.exec(t.data)) && (wrapperNode = e.createElement(s.tagName), s.className && (wrapperNode.className = s.className), i = t.splitText(n.index), i.splitText(n[0].length), wrapperNode.appendChild(i.cloneNode(!0)), t.parentNode.replaceChild(wrapperNode, i)), !!n
                    }

                    function r(e, t) {
                        for (var n, i = 3, s = 0; s < e.childNodes.length; s++) n = e.childNodes[s], n.nodeType === i ? s += t(n) ? 1 : 0 : r(n, t)
                    }
                    var a;
                    s = t.mixin({}, i, s), s.node && s.pattern && (s.pattern = t.isArray(s.pattern) ? s.pattern : [s.pattern], a = n(s.pattern, s.caseSensitive, s.wordsOnly), r(s.node, o))
                }
            }(window.document),
            p = function() {
                function n(n) {
                    var s, o, a, l, u = this;
                    n = n || {}, n.input || e.error("input is missing"), s = t.bind(this._onBlur, this), o = t.bind(this._onFocus, this), a = t.bind(this._onKeydown, this), l = t.bind(this._onInput, this), this.$hint = e(n.hint), this.$input = e(n.input).on("blur.tt", s).on("focus.tt", o).on("keydown.tt", a), 0 === this.$hint.length && (this.setHintValue = this.getHintValue = this.clearHint = t.noop), t.isMsie() ? this.$input.on("keydown.tt keypress.tt cut.tt paste.tt", function(e) {
                        r[e.which || e.keyCode] || t.defer(t.bind(u._onInput, u, e))
                    }) : this.$input.on("input.tt", l), this.query = this.$input.val(), this.$overflowHelper = i(this.$input)
                }

                function i(t) {
                    return e('<pre aria-hidden="true"></pre>').css({
                        position: "absolute",
                        visibility: "hidden",
                        whiteSpace: "nowrap",
                        fontFamily: t.css("font-family"),
                        fontSize: t.css("font-size"),
                        fontStyle: t.css("font-style"),
                        fontVariant: t.css("font-variant"),
                        fontWeight: t.css("font-weight"),
                        wordSpacing: t.css("word-spacing"),
                        letterSpacing: t.css("letter-spacing"),
                        textIndent: t.css("text-indent"),
                        textRendering: t.css("text-rendering"),
                        textTransform: t.css("text-transform")
                    }).insertAfter(t)
                }

                function s(e, t) {
                    return n.normalizeQuery(e) === n.normalizeQuery(t)
                }

                function o(e) {
                    return e.altKey || e.ctrlKey || e.metaKey || e.shiftKey
                }
                var r;
                return r = {
                    9: "tab",
                    27: "esc",
                    37: "left",
                    39: "right",
                    13: "enter",
                    38: "up",
                    40: "down"
                }, n.normalizeQuery = function(e) {
                    return (e || "").replace(/^\s*/g, "").replace(/\s{2,}/g, " ")
                }, t.mixin(n.prototype, d, {
                    _onBlur: function() {
                        this.resetInputValue(), this.trigger("blurred")
                    },
                    _onFocus: function() {
                        this.trigger("focused")
                    },
                    _onKeydown: function(e) {
                        var t = r[e.which || e.keyCode];
                        this._managePreventDefault(t, e), t && this._shouldTrigger(t, e) && this.trigger(t + "Keyed", e)
                    },
                    _onInput: function() {
                        this._checkInputValue()
                    },
                    _managePreventDefault: function(e, t) {
                        var n, i, s;
                        switch (e) {
                            case "tab":
                                i = this.getHintValue(), s = this.getInputValue(), n = i && i !== s && !o(t);
                                break;
                            case "up":
                            case "down":
                                n = !o(t);
                                break;
                            default:
                                n = !1
                        }
                        n && t.preventDefault()
                    },
                    _shouldTrigger: function(e, t) {
                        var n;
                        switch (e) {
                            case "tab":
                                n = !o(t);
                                break;
                            default:
                                n = !0
                        }
                        return n
                    },
                    _checkInputValue: function() {
                        var e, t, n;
                        e = this.getInputValue(), t = s(e, this.query), n = t ? this.query.length !== e.length : !1, t ? n && this.trigger("whitespaceChanged", this.query) : this.trigger("queryChanged", this.query = e)
                    },
                    focus: function() {
                        this.$input.focus()
                    },
                    blur: function() {
                        this.$input.blur()
                    },
                    getQuery: function() {
                        return this.query
                    },
                    setQuery: function(e) {
                        this.query = e
                    },
                    getInputValue: function() {
                        return this.$input.val()
                    },
                    setInputValue: function(e, t) {
                        this.$input.val(e), !t && this._checkInputValue()
                    },
                    getHintValue: function() {
                        return this.$hint.val()
                    },
                    setHintValue: function(e) {
                        this.$hint.val(e)
                    },
                    resetInputValue: function() {
                        this.$input.val(this.query)
                    },
                    clearHint: function() {
                        this.$hint.val("")
                    },
                    getLanguageDirection: function() {
                        return (this.$input.css("direction") || "ltr").toLowerCase()
                    },
                    hasOverflow: function() {
                        var e = this.$input.width() - 2;
                        return this.$overflowHelper.text(this.getInputValue()), this.$overflowHelper.width() >= e
                    },
                    isCursorAtEnd: function() {
                        var e, n, i;
                        return e = this.$input.val().length, n = this.$input[0].selectionStart, t.isNumber(n) ? n === e : document.selection ? (i = document.selection.createRange(), i.moveStart("character", -e), e === i.text.length) : !0
                    },
                    destroy: function() {
                        this.$hint.off(".tt"), this.$input.off(".tt"), this.$hint = this.$input = this.$overflowHelper = null
                    }
                }), n
            }(),
            f = function() {
                function n(n) {
                    n = n || {}, n.templates = n.templates || {}, n.source || e.error("missing source"), n.name && !o(n.name) && e.error("invalid dataset name: " + n.name), this.query = null, this.highlight = !!n.highlight, this.name = n.name || t.getUniqueId(), this.source = n.source, this.displayFn = i(n.display || n.displayKey), this.templates = s(n.templates, this.displayFn), this.$el = e(l.dataset.replace("%CLASS%", this.name))
                }

                function i(e) {
                    function n(t) {
                        return t[e]
                    }
                    return e = e || "value", t.isFunction(e) ? e : n
                }

                function s(e, n) {
                    function i(e) {
                        return "<p>" + n(e) + "</p>"
                    }
                    return {
                        empty: e.empty && t.templatify(e.empty),
                        header: e.header && t.templatify(e.header),
                        footer: e.footer && t.templatify(e.footer),
                        suggestion: e.suggestion || i
                    }
                }

                function o(e) {
                    return /^[_a-zA-Z0-9-]+$/.test(e)
                }
                var r = "ttDataset",
                    a = "ttValue",
                    c = "ttDatum";
                return n.extractDatasetName = function(t) {
                    return e(t).data(r)
                }, n.extractValue = function(t) {
                    return e(t).data(a)
                }, n.extractDatum = function(t) {
                    return e(t).data(c)
                }, t.mixin(n.prototype, d, {
                    _render: function(n, i) {
                        function s() {
                            return m.templates.empty({
                                query: n,
                                isEmpty: !0
                            })
                        }

                        function o() {
                            function s(t) {
                                var n, i, s;
                                return i = m.templates.suggestion(t), s = l.suggestion.replace("%BODY%", i), n = e(s).data(r, m.name).data(a, m.displayFn(t)).data(c, t), n.children().each(function() {
                                    e(this).css(u.suggestionChild)
                                }), n
                            }
                            var o, d;
                            return o = e(l.suggestions).css(u.suggestions), d = t.map(i, s), o.append.apply(o, d), m.highlight && h({
                                node: o[0],
                                pattern: n
                            }), o
                        }

                        function d() {
                            return m.templates.header({
                                query: n,
                                isEmpty: !f
                            })
                        }

                        function p() {
                            return m.templates.footer({
                                query: n,
                                isEmpty: !f
                            })
                        }
                        if (this.$el) {
                            var f, m = this;
                            this.$el.empty(), f = i && i.length, !f && this.templates.empty ? this.$el.html(s()).prepend(m.templates.header ? d() : null).append(m.templates.footer ? p() : null) : f && this.$el.html(o()).prepend(m.templates.header ? d() : null).append(m.templates.footer ? p() : null), this.trigger("rendered")
                        }
                    },
                    getRoot: function() {
                        return this.$el
                    },
                    update: function(e) {
                        function t(t) {
                            e === n.query && n._render(e, t)
                        }
                        var n = this;
                        this.query = e, this.source(e, t)
                    },
                    clear: function() {
                        this._render(this.query || "")
                    },
                    isEmpty: function() {
                        return this.$el.is(":empty")
                    },
                    destroy: function() {
                        this.$el = null
                    }
                }), n
            }(),
            m = function() {
                function n(n) {
                    var s, o, r, a = this;
                    n = n || {}, n.menu || e.error("menu is required"), this.isOpen = !1, this.isEmpty = !0, this.datasets = t.map(n.datasets, i), s = t.bind(this._onSuggestionClick, this), o = t.bind(this._onSuggestionMouseEnter, this), r = t.bind(this._onSuggestionMouseLeave, this), this.$menu = e(n.menu).on("click.tt", ".tt-suggestion", s).on("mouseenter.tt", ".tt-suggestion", o).on("mouseleave.tt", ".tt-suggestion", r), t.each(this.datasets, function(e) {
                        a.$menu.append(e.getRoot()), e.onSync("rendered", a._onRendered, a)
                    })
                }

                function i(e) {
                    return new f(e)
                }
                return t.mixin(n.prototype, d, {
                    _onSuggestionClick: function(t) {
                        this.trigger("suggestionClicked", e(t.currentTarget))
                    },
                    _onSuggestionMouseEnter: function(t) {
                        this._removeCursor(), this._setCursor(e(t.currentTarget), !0)
                    },
                    _onSuggestionMouseLeave: function() {
                        this._removeCursor()
                    },
                    _onRendered: function() {
                        function e(e) {
                            return e.isEmpty()
                        }
                        this.isEmpty = t.every(this.datasets, e), this.isEmpty ? this._hide() : this.isOpen && this._show(), this.trigger("datasetRendered")
                    },
                    _hide: function() {
                        this.$menu.hide()
                    },
                    _show: function() {
                        this.$menu.css("display", "block")
                    },
                    _getSuggestions: function() {
                        return this.$menu.find(".tt-suggestion")
                    },
                    _getCursor: function() {
                        return this.$menu.find(".tt-cursor").first()
                    },
                    _setCursor: function(e, t) {
                        e.first().addClass("tt-cursor"), !t && this.trigger("cursorMoved")
                    },
                    _removeCursor: function() {
                        this._getCursor().removeClass("tt-cursor")
                    },
                    _moveCursor: function(e) {
                        var t, n, i, s;
                        if (this.isOpen) {
                            if (n = this._getCursor(), t = this._getSuggestions(), this._removeCursor(), i = t.index(n) + e, i = (i + 1) % (t.length + 1) - 1, -1 === i) return this.trigger("cursorRemoved"), void 0; - 1 > i && (i = t.length - 1), this._setCursor(s = t.eq(i)), this._ensureVisible(s)
                        }
                    },
                    _ensureVisible: function(e) {
                        var t, n, i, s;
                        t = e.position().top, n = t + e.outerHeight(!0), i = this.$menu.scrollTop(), s = this.$menu.height() + parseInt(this.$menu.css("paddingTop"), 10) + parseInt(this.$menu.css("paddingBottom"), 10), 0 > t ? this.$menu.scrollTop(i + t) : n > s && this.$menu.scrollTop(i + (n - s))
                    },
                    close: function() {
                        this.isOpen && (this.isOpen = !1, this._removeCursor(), this._hide(), this.trigger("closed"))
                    },
                    open: function() {
                        this.isOpen || (this.isOpen = !0, !this.isEmpty && this._show(), this.trigger("opened"))
                    },
                    setLanguageDirection: function(e) {
                        this.$menu.css("ltr" === e ? u.ltr : u.rtl)
                    },
                    moveCursorUp: function() {
                        this._moveCursor(-1)
                    },
                    moveCursorDown: function() {
                        this._moveCursor(1)
                    },
                    getDatumForSuggestion: function(e) {
                        var t = null;
                        return e.length && (t = {
                            raw: f.extractDatum(e),
                            value: f.extractValue(e),
                            datasetName: f.extractDatasetName(e)
                        }), t
                    },
                    getDatumForCursor: function() {
                        return this.getDatumForSuggestion(this._getCursor().first())
                    },
                    getDatumForTopSuggestion: function() {
                        return this.getDatumForSuggestion(this._getSuggestions().first())
                    },
                    update: function(e) {
                        function n(t) {
                            t.update(e)
                        }
                        t.each(this.datasets, n)
                    },
                    empty: function() {
                        function e(e) {
                            e.clear()
                        }
                        t.each(this.datasets, e), this.isEmpty = !0
                    },
                    isVisible: function() {
                        return this.isOpen && !this.isEmpty
                    },
                    destroy: function() {
                        function e(e) {
                            e.destroy()
                        }
                        this.$menu.off(".tt"), this.$menu = null, t.each(this.datasets, e)
                    }
                }), n
            }(),
            g = function() {
                function n(n) {
                    var s, o, r;
                    n = n || {}, n.input || e.error("missing input"), this.autoselect = !!n.autoselect, this.minLength = t.isNumber(n.minLength) ? n.minLength : 1, this.$node = i(n.input, n.withHint), s = this.$node.find(".tt-dropdown-menu"), o = this.$node.find(".tt-input"), r = this.$node.find(".tt-hint"), this.eventBus = n.eventBus || new c({
                        el: o
                    }), this.dropdown = new m({
                        menu: s,
                        datasets: n.datasets
                    }).onSync("suggestionClicked", this._onSuggestionClicked, this).onSync("cursorMoved", this._onCursorMoved, this).onSync("cursorRemoved", this._onCursorRemoved, this).onSync("opened", this._onOpened, this).onSync("closed", this._onClosed, this).onAsync("datasetRendered", this._onDatasetRendered, this), this.input = new p({
                        input: o,
                        hint: r
                    }).onSync("focused", this._onFocused, this).onSync("blurred", this._onBlurred, this).onSync("enterKeyed", this._onEnterKeyed, this).onSync("tabKeyed", this._onTabKeyed, this).onSync("escKeyed", this._onEscKeyed, this).onSync("upKeyed", this._onUpKeyed, this).onSync("downKeyed", this._onDownKeyed, this).onSync("leftKeyed", this._onLeftKeyed, this).onSync("rightKeyed", this._onRightKeyed, this).onSync("queryChanged", this._onQueryChanged, this).onSync("whitespaceChanged", this._onWhitespaceChanged, this), s.on("mousedown.tt", function(e) {
                        t.isMsie() && t.isMsie() < 9 && (o[0].onbeforedeactivate = function() {
                            window.event.returnValue = !1, o[0].onbeforedeactivate = null
                        }), e.preventDefault()
                    })
                }

                function i(t, n) {
                    var i, o, a, c;
                    i = e(t), o = e(l.wrapper).css(u.wrapper), a = e(l.dropdown).css(u.dropdown), c = i.clone().css(u.hint).css(s(i)), c.val("").removeData().addClass("tt-hint").removeAttr("id name placeholder").prop("disabled", !0).attr({
                        autocomplete: "off",
                        spellcheck: "false"
                    }), i.data(r, {
                        dir: i.attr("dir"),
                        autocomplete: i.attr("autocomplete"),
                        spellcheck: i.attr("spellcheck"),
                        style: i.attr("style")
                    }), i.addClass("tt-input").attr({
                        autocomplete: "off",
                        spellcheck: !1
                    }).css(n ? u.input : u.inputWithNoHint);
                    try {
                        !i.attr("dir") && i.attr("dir", "auto")
                    } catch (d) {}
                    return i.wrap(o).parent().prepend(n ? c : null).append(a)
                }

                function s(e) {
                    return {
                        backgroundAttachment: e.css("background-attachment"),
                        backgroundClip: e.css("background-clip"),
                        backgroundColor: e.css("background-color"),
                        backgroundImage: e.css("background-image"),
                        backgroundOrigin: e.css("background-origin"),
                        backgroundPosition: e.css("background-position"),
                        backgroundRepeat: e.css("background-repeat"),
                        backgroundSize: e.css("background-size")
                    }
                }

                function o(e) {
                    var n = e.find(".tt-input");
                    t.each(n.data(r), function(e, i) {
                        t.isUndefined(e) ? n.removeAttr(i) : n.attr(i, e)
                    }), n.detach().removeData(r).removeClass("tt-input").insertAfter(e), e.remove()
                }
                var r = "ttAttrs";
                return t.mixin(n.prototype, {
                    _onSuggestionClicked: function(e, t) {
                        var n;
                        (n = this.dropdown.getDatumForSuggestion(t)) && this._select(n)
                    },
                    _onCursorMoved: function() {
                        var e = this.dropdown.getDatumForCursor();
                        this.input.clearHint(), this.input.setInputValue(e.value, !0), this.eventBus.trigger("cursorchanged", e.raw, e.datasetName)
                    },
                    _onCursorRemoved: function() {
                        this.input.resetInputValue(), this._updateHint()
                    },
                    _onDatasetRendered: function() {
                        this._updateHint()
                    },
                    _onOpened: function() {
                        this._updateHint(), this.eventBus.trigger("opened")
                    },
                    _onClosed: function() {
                        this.input.clearHint(), this.eventBus.trigger("closed")
                    },
                    _onFocused: function() {
                        this.dropdown.empty(), this.dropdown.open()
                    },
                    _onBlurred: function() {
                        this.dropdown.close()
                    },
                    _onEnterKeyed: function(e, t) {
                        var n, i;
                        n = this.dropdown.getDatumForCursor(), i = this.dropdown.getDatumForTopSuggestion(), n ? (this._select(n), t.preventDefault()) : this.autoselect && i && (this._select(i), t.preventDefault())
                    },
                    _onTabKeyed: function(e, t) {
                        var n;
                        (n = this.dropdown.getDatumForCursor()) ? (this._select(n), t.preventDefault()) : this._autocomplete()
                    },
                    _onEscKeyed: function() {
                        this.dropdown.close(), this.input.resetInputValue()
                    },
                    _onUpKeyed: function() {
                        var e = this.input.getQuery();
                        !this.dropdown.isOpen && e.length >= this.minLength && this.dropdown.update(e), this.dropdown.open(), this.dropdown.moveCursorUp()
                    },
                    _onDownKeyed: function() {
                        var e = this.input.getQuery();
                        !this.dropdown.isOpen && e.length >= this.minLength && this.dropdown.update(e), this.dropdown.open(), this.dropdown.moveCursorDown()
                    },
                    _onLeftKeyed: function() {
                        "rtl" === this.dir && this._autocomplete()
                    },
                    _onRightKeyed: function() {
                        "ltr" === this.dir && this._autocomplete()
                    },
                    _onQueryChanged: function(e, t) {
                        this.input.clearHint(), this.dropdown.empty(), t.length >= this.minLength && this.dropdown.update(t), this.dropdown.open(), this._setLanguageDirection()
                    },
                    _onWhitespaceChanged: function() {
                        this._updateHint(), this.dropdown.open()
                    },
                    _setLanguageDirection: function() {
                        var e;
                        this.dir !== (e = this.input.getLanguageDirection()) && (this.dir = e, this.$node.css("direction", e), this.dropdown.setLanguageDirection(e))
                    },
                    _updateHint: function() {
                        var e, n, i, s, o, r;
                        e = this.dropdown.getDatumForTopSuggestion(), e && this.dropdown.isVisible() && !this.input.hasOverflow() && (n = this.input.getInputValue(), i = p.normalizeQuery(n), s = t.escapeRegExChars(i), o = new RegExp("^(?:" + s + ")(.*$)", "i"), r = o.exec(e.value), this.input.setHintValue(n + (r ? r[1] : "")))
                    },
                    _autocomplete: function() {
                        var e, t, n;
                        e = this.input.getHintValue(), t = this.input.getQuery(), e && t !== e && this.input.isCursorAtEnd() && (n = this.dropdown.getDatumForTopSuggestion(), n && this.input.setInputValue(n.value), this.eventBus.trigger("autocompleted", n.raw, n.datasetName))
                    },
                    _select: function(e) {
                        this.input.clearHint(), this.input.setQuery(e.value), this.input.setInputValue(e.value, !0), this._setLanguageDirection(), this.eventBus.trigger("selected", e.raw, e.datasetName), this.dropdown.close(), t.defer(t.bind(this.dropdown.empty, this.dropdown))
                    },
                    open: function() {
                        this.dropdown.open()
                    },
                    close: function() {
                        this.dropdown.close()
                    },
                    getQuery: function() {
                        return this.input.getQuery()
                    },
                    setQuery: function(e) {
                        this.input.setInputValue(e)
                    },
                    destroy: function() {
                        this.input.destroy(), this.dropdown.destroy(), o(this.$node), this.$node = null
                    }
                }), n
            }();
        ! function() {
            var n, i, s;
            n = e.fn.typeahead, i = "ttTypeahead", s = {
                initialize: function(n, s) {
                    function o() {
                        var o, r, a = e(this);
                        t.each(s, function(e) {
                            e.highlight = !!n.highlight
                        }), r = new g({
                            input: a,
                            eventBus: o = new c({
                                el: a
                            }),
                            withHint: t.isUndefined(n.hint) ? !0 : !!n.hint,
                            minLength: n.minLength,
                            autoselect: n.autoselect,
                            datasets: s
                        }), a.data(i, r)
                    }
                    return s = t.isArray(s) ? s : [].slice.call(arguments, 1), n = n || {}, this.each(o)
                },
                open: function() {
                    function t() {
                        var t, n = e(this);
                        (t = n.data(i)) && t.open()
                    }
                    return this.each(t)
                },
                close: function() {
                    function t() {
                        var t, n = e(this);
                        (t = n.data(i)) && t.close()
                    }
                    return this.each(t)
                },
                val: function(t) {
                    function n() {
                        var n, s = e(this);
                        (n = s.data(i)) && n.setQuery(t)
                    }

                    function s(e) {
                        var t, n;
                        return (t = e.data(i)) && (n = t.getQuery()), n
                    }
                    return arguments.length ? this.each(n) : s(this.first())
                },
                destroy: function() {
                    function t() {
                        var t, n = e(this);
                        (t = n.data(i)) && (t.destroy(), n.removeData(i))
                    }
                    return this.each(t)
                }
            }, e.fn.typeahead = function(e) {
                return s[e] ? s[e].apply(this, [].slice.call(arguments, 1)) : s.initialize.apply(this, arguments)
            }, e.fn.typeahead.noConflict = function() {
                return e.fn.typeahead = n, this
            }
        }()
    }(window.jQuery),
    function($) {
        $.fn.editable = function(e, t) {
            if ("disable" == e) return $(this).data("disabled.editable", !0), void 0;
            if ("enable" == e) return $(this).data("disabled.editable", !1), void 0;
            if ("destroy" == e) return $(this).unbind($(this).data("event.editable")).removeData("disabled.editable").removeData("event.editable"), void 0;
            var n = $.extend({}, $.fn.editable.defaults, {
                    target: e
                }, t),
                i = $.editable.types[n.type].plugin || function() {},
                s = $.editable.types[n.type].submit || function() {},
                o = $.editable.types[n.type].buttons || $.editable.types.defaults.buttons,
                r = $.editable.types[n.type].content || $.editable.types.defaults.content,
                a = $.editable.types[n.type].element || $.editable.types.defaults.element,
                l = $.editable.types[n.type].reset || $.editable.types.defaults.reset,
                u = n.callback || function() {},
                c = n.onedit || function() {},
                d = n.onsubmit || function() {},
                h = n.onreset || function() {},
                p = n.onerror || l;
            return n.tooltip && $(this).attr("title", n.tooltip), n.autowidth = "auto" == n.width, n.autoheight = "auto" == n.height, this.each(function() {
                var e = this,
                    t = $(e).width(),
                    f = $(e).height();
                $(this).data("event.editable", n.event), $.trim($(this).html()) || $(this).html(n.placeholder), $(this).bind(n.event, function(h) {
                    if (!0 !== $(this).data("disabled.editable") && !e.editing && !1 !== c.apply(this, [n, e])) {
                        h.preventDefault(), h.stopPropagation(), n.tooltip && $(e).removeAttr("title"), 0 == $(e).width() ? (n.width = t, n.height = f) : ("none" != n.width && (n.width = n.autowidth ? $(e).width() : n.width), "none" != n.height && (n.height = n.autoheight ? $(e).height() : n.height)), $(this).html().toLowerCase().replace(/(;|")/g, "") == n.placeholder.toLowerCase().replace(/(;|")/g, "") && $(this).html(""), e.editing = !0, e.revert = $(e).html(), $(e).html("");
                        var m = $("<form />");
                        n.cssclass && ("inherit" == n.cssclass ? m.attr("class", $(e).attr("class")) : m.attr("class", n.cssclass)), n.style && ("inherit" == n.style ? (m.attr("style", $(e).attr("style")), m.css("display", $(e).css("display"))) : m.attr("style", n.style));
                        var g, v = a.apply(m, [n, e]);
                        if (n.loadurl) {
                            var y = setTimeout(function() {
                                    v.disabled = !0, r.apply(m, [n.loadtext, n, e])
                                }, 100),
                                b = {};
                            b[n.id] = e.id, $.isFunction(n.loaddata) ? $.extend(b, n.loaddata.apply(e, [e.revert, n])) : $.extend(b, n.loaddata), $.ajax({
                                type: n.loadtype,
                                url: n.loadurl,
                                data: b,
                                async: !1,
                                success: function(e) {
                                    window.clearTimeout(y), g = e, v.disabled = !1
                                }
                            })
                        } else n.data ? (g = n.data, $.isFunction(n.data) && (g = n.data.apply(e, [e.revert, n]))) : g = e.revert;
                        r.apply(m, [g, n, e]), v.attr("name", n.name), o.apply(m, [n, e]), $(e).append(m), i.apply(m, [n, e]), $(":input:visible:enabled:first", m).focus(), n.select && v.select(), v.keydown(function(t) {
                            27 == t.keyCode && (t.preventDefault(), l.apply(m, [n, e]))
                        });
                        var y;
                        "cancel" == n.onblur ? v.blur(function() {
                            y = setTimeout(function() {
                                l.apply(m, [n, e])
                            }, 500)
                        }) : "submit" == n.onblur ? v.blur(function() {
                            y = setTimeout(function() {
                                m.submit()
                            }, 200)
                        }) : $.isFunction(n.onblur) ? v.blur(function() {
                            n.onblur.apply(e, [v.val(), n])
                        }) : v.blur(function() {}), m.submit(function(t) {
                            if (y && clearTimeout(y), t.preventDefault(), !1 !== d.apply(m, [n, e]) && !1 !== s.apply(m, [n, e]))
                                if ($.isFunction(n.target)) {
                                    var i = n.target.apply(e, [v.val(), n]);
                                    $(e).html(i), e.editing = !1, u.apply(e, [e.innerHTML, n]), $.trim($(e).html()) || $(e).html(n.placeholder)
                                } else {
                                    var o = {};
                                    o[n.name] = v.val(), o[n.id] = e.id, $.isFunction(n.submitdata) ? $.extend(o, n.submitdata.apply(e, [e.revert, n])) : $.extend(o, n.submitdata), "PUT" == n.method && (o._method = "put"), $(e).html(n.indicator);
                                    var r = {
                                        type: "POST",
                                        data: o,
                                        dataType: "html",
                                        url: n.target,
                                        success: function(t) {
                                            "html" == r.dataType && $(e).html(t), e.editing = !1, u.apply(e, [t, n]), $.trim($(e).html()) || $(e).html(n.placeholder)
                                        },
                                        error: function(t) {
                                            p.apply(m, [n, e, t])
                                        }
                                    };
                                    $.extend(r, n.ajaxoptions), $.ajax(r)
                                }
                            return $(e).attr("title", n.tooltip), !1
                        })
                    }
                }), this.reset = function(t) {
                    this.editing && !1 !== h.apply(t, [n, e]) && ($(e).html(e.revert), e.editing = !1, $.trim($(e).html()) || $(e).html(n.placeholder), n.tooltip && $(e).attr("title", n.tooltip))
                }
            })
        }, $.editable = {
            types: {
                defaults: {
                    element: function() {
                        var e = $('<input type="hidden"></input>');
                        return $(this).append(e), e
                    },
                    content: function(e) {
                        $(":input:first", this).val(e)
                    },
                    reset: function(e, t) {
                        t.reset(this)
                    },
                    buttons: function(e, t) {
                        var n = this;
                        if (e.submit) {
                            if (e.submit.match(/>$/)) var i = $(e.submit).click(function() {
                                "submit" != i.attr("type") && n.submit()
                            });
                            else {
                                var i = $('<button type="submit" />');
                                i.html(e.submit)
                            }
                            $(this).append(i)
                        }
                        if (e.cancel) {
                            if (e.cancel.match(/>$/)) var s = $(e.cancel);
                            else {
                                var s = $('<button type="cancel" />');
                                s.html(e.cancel)
                            }
                            $(this).append(s), $(s).click(function() {
                                if ($.isFunction($.editable.types[e.type].reset)) var i = $.editable.types[e.type].reset;
                                else var i = $.editable.types.defaults.reset;
                                return i.apply(n, [e, t]), !1
                            })
                        }
                    }
                },
                text: {
                    element: function(e) {
                        var t = $("<input />");
                        return "none" != e.width && t.width(e.width), "none" != e.height && t.height(e.height), t.attr("autocomplete", "off"), $(this).append(t), t
                    }
                },
                textarea: {
                    element: function(e) {
                        var t = $("<textarea />");
                        return e.rows ? t.attr("rows", e.rows) : "none" != e.height && t.height(e.height), e.cols ? t.attr("cols", e.cols) : "none" != e.width && t.width(e.width), $(this).append(t), t
                    }
                },
                select: {
                    element: function() {
                        var e = $("<select />");
                        return $(this).append(e), e
                    },
                    content: function(data, settings, original) {
                        if (String == data.constructor) eval("var json = " + data);
                        else var json = data;
                        for (var key in json)
                            if (json.hasOwnProperty(key) && "selected" != key) {
                                var option = $("<option />").val(key).append(json[key]);
                                $("select", this).append(option)
                            }
                        $("select", this).children().each(function() {
                            ($(this).val() == json.selected || $(this).text() == $.trim(original.revert)) && $(this).attr("selected", "selected")
                        })
                    }
                }
            },
            addInputType: function(e, t) {
                $.editable.types[e] = t
            }
        }, $.fn.editable.defaults = {
            name: "value",
            id: "id",
            type: "text",
            width: "auto",
            height: "auto",
            event: "click.editable",
            onblur: "cancel",
            loadtype: "GET",
            loadtext: "Loading...",
            placeholder: "Click to edit",
            loaddata: {},
            submitdata: {},
            ajaxoptions: {}
        }
    }(jQuery);
var mejs = mejs || {};
mejs.version = "2.13.2", mejs.meIndex = 0, mejs.plugins = {
        silverlight: [{
            version: [3, 0],
            types: ["video/mp4", "video/m4v", "video/mov", "video/wmv", "audio/wma", "audio/m4a", "audio/mp3", "audio/wav", "audio/mpeg"]
        }],
        flash: [{
            version: [9, 0, 124],
            types: ["video/mp4", "video/m4v", "video/mov", "video/flv", "video/rtmp", "video/x-flv", "audio/flv", "audio/x-flv", "audio/mp3", "audio/m4a", "audio/mpeg", "video/youtube", "video/x-youtube"]
        }],
        youtube: [{
            version: null,
            types: ["video/youtube", "video/x-youtube", "audio/youtube", "audio/x-youtube"]
        }],
        vimeo: [{
            version: null,
            types: ["video/vimeo", "video/x-vimeo"]
        }]
    }, mejs.Utility = {
        encodeUrl: function(e) {
            return encodeURIComponent(e)
        },
        escapeHTML: function(e) {
            return e.toString().split("&").join("&amp;").split("<").join("&lt;").split('"').join("&quot;")
        },
        absolutizeUrl: function(e) {
            var t = document.createElement("div");
            return t.innerHTML = '<a href="' + this.escapeHTML(e) + '">x</a>', t.firstChild.href
        },
        getScriptPath: function(e) {
            for (var t, n, i, s, o, r, a = 0, l = "", u = "", c = document.getElementsByTagName("script"), d = c.length, h = e.length; d > a; a++) {
                for (s = c[a].src, n = s.lastIndexOf("/"), n > -1 ? (r = s.substring(n + 1), o = s.substring(0, n + 1)) : (r = s, o = ""), t = 0; h > t; t++)
                    if (u = e[t], i = r.indexOf(u), i > -1) {
                        l = o;
                        break
                    }
                if ("" !== l) break
            }
            return l
        },
        secondsToTimeCode: function(e, t, n, i) {
            "undefined" == typeof n ? n = !1 : "undefined" == typeof i && (i = 25);
            var s = Math.floor(e / 3600) % 24,
                o = Math.floor(e / 60) % 60,
                r = Math.floor(e % 60),
                a = Math.floor((e % 1 * i).toFixed(3)),
                l = (t || s > 0 ? (10 > s ? "0" + s : s) + ":" : "") + (10 > o ? "0" + o : o) + ":" + (10 > r ? "0" + r : r) + (n ? ":" + (10 > a ? "0" + a : a) : "");
            return l
        },
        timeCodeToSeconds: function(e, t, n, i) {
            "undefined" == typeof n ? n = !1 : "undefined" == typeof i && (i = 25);
            var s = e.split(":"),
                o = parseInt(s[0], 10),
                r = parseInt(s[1], 10),
                a = parseInt(s[2], 10),
                l = 0,
                u = 0;
            return n && (l = parseInt(s[3]) / i), u = 3600 * o + 60 * r + a + l
        },
        convertSMPTEtoSeconds: function(e) {
            if ("string" != typeof e) return !1;
            e = e.replace(",", ".");
            var t = 0,
                n = -1 != e.indexOf(".") ? e.split(".")[1].length : 0,
                i = 1;
            e = e.split(":").reverse();
            for (var s = 0; s < e.length; s++) i = 1, s > 0 && (i = Math.pow(60, s)), t += Number(e[s]) * i;
            return Number(t.toFixed(n))
        },
        removeSwf: function(e) {
            var t = document.getElementById(e);
            t && /object|embed/i.test(t.nodeName) && (mejs.MediaFeatures.isIE ? (t.style.display = "none", function() {
                4 == t.readyState ? mejs.Utility.removeObjectInIE(e) : setTimeout(arguments.callee, 10)
            }()) : t.parentNode.removeChild(t))
        },
        removeObjectInIE: function(e) {
            var t = document.getElementById(e);
            if (t) {
                for (var n in t) "function" == typeof t[n] && (t[n] = null);
                t.parentNode.removeChild(t)
            }
        }
    }, mejs.PluginDetector = {
        hasPluginVersion: function(e, t) {
            var n = this.plugins[e];
            return t[1] = t[1] || 0, t[2] = t[2] || 0, n[0] > t[0] || n[0] == t[0] && n[1] > t[1] || n[0] == t[0] && n[1] == t[1] && n[2] >= t[2] ? !0 : !1
        },
        nav: window.navigator,
        ua: window.navigator.userAgent.toLowerCase(),
        plugins: [],
        addPlugin: function(e, t, n, i, s) {
            this.plugins[e] = this.detectPlugin(t, n, i, s)
        },
        detectPlugin: function(e, t, n, i) {
            var s, o, r, a = [0, 0, 0];
            if ("undefined" != typeof this.nav.plugins && "object" == typeof this.nav.plugins[e]) {
                if (s = this.nav.plugins[e].description, s && ("undefined" == typeof this.nav.mimeTypes || !this.nav.mimeTypes[t] || this.nav.mimeTypes[t].enabledPlugin))
                    for (a = s.replace(e, "").replace(/^\s+/, "").replace(/\sr/gi, ".").split("."), o = 0; o < a.length; o++) a[o] = parseInt(a[o].match(/\d+/), 10)
            } else if ("undefined" != typeof window.ActiveXObject) try {
                r = new ActiveXObject(n), r && (a = i(r))
            } catch (l) {}
            return a
        }
    }, mejs.PluginDetector.addPlugin("flash", "Shockwave Flash", "application/x-shockwave-flash", "ShockwaveFlash.ShockwaveFlash", function(e) {
        var t = [],
            n = e.GetVariable("$version");
        return n && (n = n.split(" ")[1].split(","), t = [parseInt(n[0], 10), parseInt(n[1], 10), parseInt(n[2], 10)]), t
    }), mejs.PluginDetector.addPlugin("silverlight", "Silverlight Plug-In", "application/x-silverlight-2", "AgControl.AgControl", function(e) {
        var t = [0, 0, 0, 0],
            n = function(e, t, n, i) {
                for (; e.isVersionSupported(t[0] + "." + t[1] + "." + t[2] + "." + t[3]);) t[n] += i;
                t[n] -= i
            };
        return n(e, t, 0, 1), n(e, t, 1, 1), n(e, t, 2, 1e4), n(e, t, 2, 1e3), n(e, t, 2, 100), n(e, t, 2, 10), n(e, t, 2, 1), n(e, t, 3, 1), t
    }), mejs.MediaFeatures = {
        init: function() {
            var e, t, n = this,
                i = document,
                s = mejs.PluginDetector.nav,
                o = mejs.PluginDetector.ua.toLowerCase(),
                r = ["source", "track", "audio", "video"];
            n.isiPad = null !== o.match(/ipad/i), n.isiPhone = null !== o.match(/iphone/i), n.isiOS = n.isiPhone || n.isiPad, n.isAndroid = null !== o.match(/android/i), n.isBustedAndroid = null !== o.match(/android 2\.[12]/), n.isBustedNativeHTTPS = "https:" === location.protocol && (null !== o.match(/android [12]\./) || null !== o.match(/macintosh.* version.* safari/)), n.isIE = -1 != s.appName.toLowerCase().indexOf("microsoft") || null !== s.appName.toLowerCase().match(/trident/gi), n.isChrome = null !== o.match(/chrome/gi), n.isFirefox = null !== o.match(/firefox/gi), n.isWebkit = null !== o.match(/webkit/gi), n.isGecko = null !== o.match(/gecko/gi) && !n.isWebkit && !n.isIE, n.isOpera = null !== o.match(/opera/gi), n.hasTouch = "ontouchstart" in window, n.svg = !!document.createElementNS && !!document.createElementNS("http://www.w3.org/2000/svg", "svg").createSVGRect;
            for (e = 0; e < r.length; e++) t = document.createElement(r[e]);
            n.supportsMediaTag = "undefined" != typeof t.canPlayType || n.isBustedAndroid;
            try {
                t.canPlayType("video/mp4")
            } catch (a) {
                n.supportsMediaTag = !1
            }
            n.hasSemiNativeFullScreen = "undefined" != typeof t.webkitEnterFullscreen, n.hasNativeFullscreen = "undefined" != typeof t.requestFullscreen, n.hasWebkitNativeFullScreen = "undefined" != typeof t.webkitRequestFullScreen, n.hasMozNativeFullScreen = "undefined" != typeof t.mozRequestFullScreen, n.hasMsNativeFullScreen = "undefined" != typeof t.msRequestFullscreen, n.hasTrueNativeFullScreen = n.hasWebkitNativeFullScreen || n.hasMozNativeFullScreen || n.hasMsNativeFullScreen, n.nativeFullScreenEnabled = n.hasTrueNativeFullScreen, n.hasMozNativeFullScreen ? n.nativeFullScreenEnabled = document.mozFullScreenEnabled : n.hasMsNativeFullScreen && (n.nativeFullScreenEnabled = document.msFullscreenEnabled), n.isChrome && (n.hasSemiNativeFullScreen = !1), n.hasTrueNativeFullScreen && (n.fullScreenEventName = "", n.hasWebkitNativeFullScreen ? n.fullScreenEventName = "webkitfullscreenchange" : n.hasMozNativeFullScreen ? n.fullScreenEventName = "mozfullscreenchange" : n.hasMsNativeFullScreen && (n.fullScreenEventName = "MSFullscreenChange"), n.isFullScreen = function() {
                return t.mozRequestFullScreen ? i.mozFullScreen : t.webkitRequestFullScreen ? i.webkitIsFullScreen : t.hasMsNativeFullScreen ? null !== i.msFullscreenElement : void 0
            }, n.requestFullScreen = function(e) {
                n.hasWebkitNativeFullScreen ? e.webkitRequestFullScreen() : n.hasMozNativeFullScreen ? e.mozRequestFullScreen() : n.hasMsNativeFullScreen && e.msRequestFullscreen()
            }, n.cancelFullScreen = function() {
                n.hasWebkitNativeFullScreen ? document.webkitCancelFullScreen() : n.hasMozNativeFullScreen ? document.mozCancelFullScreen() : n.hasMsNativeFullScreen && document.msExitFullscreen()
            }), n.hasSemiNativeFullScreen && o.match(/mac os x 10_5/i) && (n.hasNativeFullScreen = !1, n.hasSemiNativeFullScreen = !1)
        }
    }, mejs.MediaFeatures.init(), mejs.HtmlMediaElement = {
        pluginType: "native",
        isFullScreen: !1,
        setCurrentTime: function(e) {
            this.currentTime = e
        },
        setMuted: function(e) {
            this.muted = e
        },
        setVolume: function(e) {
            this.volume = e
        },
        stop: function() {
            this.pause()
        },
        setSrc: function(e) {
            for (var t = this.getElementsByTagName("source"); t.length > 0;) this.removeChild(t[0]);
            if ("string" == typeof e) this.src = e;
            else {
                var n, i;
                for (n = 0; n < e.length; n++)
                    if (i = e[n], this.canPlayType(i.type)) {
                        this.src = i.src;
                        break
                    }
            }
        },
        setVideoSize: function(e, t) {
            this.width = e, this.height = t
        }
    }, mejs.PluginMediaElement = function(e, t, n) {
        this.id = e, this.pluginType = t, this.src = n, this.events = {}, this.attributes = {}
    }, mejs.PluginMediaElement.prototype = {
        pluginElement: null,
        pluginType: "",
        isFullScreen: !1,
        playbackRate: -1,
        defaultPlaybackRate: -1,
        seekable: [],
        played: [],
        paused: !0,
        ended: !1,
        seeking: !1,
        duration: 0,
        error: null,
        tagName: "",
        muted: !1,
        volume: 1,
        currentTime: 0,
        play: function() {
            null != this.pluginApi && ("youtube" == this.pluginType ? this.pluginApi.playVideo() : this.pluginApi.playMedia(), this.paused = !1)
        },
        load: function() {
            null != this.pluginApi && ("youtube" == this.pluginType || this.pluginApi.loadMedia(), this.paused = !1)
        },
        pause: function() {
            null != this.pluginApi && ("youtube" == this.pluginType ? this.pluginApi.pauseVideo() : this.pluginApi.pauseMedia(), this.paused = !0)
        },
        stop: function() {
            null != this.pluginApi && ("youtube" == this.pluginType ? this.pluginApi.stopVideo() : this.pluginApi.stopMedia(), this.paused = !0)
        },
        canPlayType: function(e) {
            var t, n, i, s = mejs.plugins[this.pluginType];
            for (t = 0; t < s.length; t++)
                if (i = s[t], mejs.PluginDetector.hasPluginVersion(this.pluginType, i.version))
                    for (n = 0; n < i.types.length; n++)
                        if (e == i.types[n]) return "probably";
            return ""
        },
        positionFullscreenButton: function(e, t, n) {
            null != this.pluginApi && this.pluginApi.positionFullscreenButton && this.pluginApi.positionFullscreenButton(Math.floor(e), Math.floor(t), n)
        },
        hideFullscreenButton: function() {
            null != this.pluginApi && this.pluginApi.hideFullscreenButton && this.pluginApi.hideFullscreenButton()
        },
        setSrc: function(e) {
            if ("string" == typeof e) this.pluginApi.setSrc(mejs.Utility.absolutizeUrl(e)), this.src = mejs.Utility.absolutizeUrl(e);
            else {
                var t, n;
                for (t = 0; t < e.length; t++)
                    if (n = e[t], this.canPlayType(n.type)) {
                        this.pluginApi.setSrc(mejs.Utility.absolutizeUrl(n.src)), this.src = mejs.Utility.absolutizeUrl(e);
                        break
                    }
            }
        },
        setCurrentTime: function(e) {
            null != this.pluginApi && ("youtube" == this.pluginType ? this.pluginApi.seekTo(e) : this.pluginApi.setCurrentTime(e), this.currentTime = e)
        },
        setVolume: function(e) {
            null != this.pluginApi && ("youtube" == this.pluginType ? this.pluginApi.setVolume(100 * e) : this.pluginApi.setVolume(e), this.volume = e)
        },
        setMuted: function(e) {
            null != this.pluginApi && ("youtube" == this.pluginType ? (e ? this.pluginApi.mute() : this.pluginApi.unMute(), this.muted = e, this.dispatchEvent("volumechange")) : this.pluginApi.setMuted(e), this.muted = e)
        },
        setVideoSize: function(e, t) {
            this.pluginElement.style && (this.pluginElement.style.width = e + "px", this.pluginElement.style.height = t + "px"), null != this.pluginApi && this.pluginApi.setVideoSize && this.pluginApi.setVideoSize(e, t)
        },
        setFullscreen: function(e) {
            null != this.pluginApi && this.pluginApi.setFullscreen && this.pluginApi.setFullscreen(e)
        },
        enterFullScreen: function() {
            null != this.pluginApi && this.pluginApi.setFullscreen && this.setFullscreen(!0)
        },
        exitFullScreen: function() {
            null != this.pluginApi && this.pluginApi.setFullscreen && this.setFullscreen(!1)
        },
        addEventListener: function(e, t) {
            this.events[e] = this.events[e] || [], this.events[e].push(t)
        },
        removeEventListener: function(e, t) {
            if (!e) return this.events = {}, !0;
            var n = this.events[e];
            if (!n) return !0;
            if (!t) return this.events[e] = [], !0;
            for (i = 0; i < n.length; i++)
                if (n[i] === t) return this.events[e].splice(i, 1), !0;
            return !1
        },
        dispatchEvent: function(e) {
            var t, n, i = this.events[e];
            if (i)
                for (n = Array.prototype.slice.call(arguments, 1), t = 0; t < i.length; t++) i[t].apply(null, n)
        },
        hasAttribute: function(e) {
            return e in this.attributes
        },
        removeAttribute: function(e) {
            delete this.attributes[e]
        },
        getAttribute: function(e) {
            return this.hasAttribute(e) ? this.attributes[e] : ""
        },
        setAttribute: function(e, t) {
            this.attributes[e] = t
        },
        remove: function() {
            mejs.Utility.removeSwf(this.pluginElement.id), mejs.MediaPluginBridge.unregisterPluginElement(this.pluginElement.id)
        }
    }, mejs.MediaPluginBridge = {
        pluginMediaElements: {},
        htmlMediaElements: {},
        registerPluginElement: function(e, t, n) {
            this.pluginMediaElements[e] = t, this.htmlMediaElements[e] = n
        },
        unregisterPluginElement: function(e) {
            delete this.pluginMediaElements[e], delete this.htmlMediaElements[e]
        },
        initPlugin: function(e) {
            var t = this.pluginMediaElements[e],
                n = this.htmlMediaElements[e];
            if (t) {
                switch (t.pluginType) {
                    case "flash":
                        t.pluginElement = t.pluginApi = document.getElementById(e);
                        break;
                    case "silverlight":
                        t.pluginElement = document.getElementById(t.id), t.pluginApi = t.pluginElement.Content.MediaElementJS
                }
                null != t.pluginApi && t.success && t.success(t, n)
            }
        },
        fireEvent: function(e, t, n) {
            var i, s, o, r = this.pluginMediaElements[e];
            if (r) {
                i = {
                    type: t,
                    target: r
                };
                for (s in n) r[s] = n[s], i[s] = n[s];
                o = n.bufferedTime || 0, i.target.buffered = i.buffered = {
                    start: function() {
                        return 0
                    },
                    end: function() {
                        return o
                    },
                    length: 1
                }, r.dispatchEvent(i.type, i)
            }
        }
    }, mejs.MediaElementDefaults = {
        mode: "auto",
        plugins: ["flash", "silverlight", "youtube", "vimeo"],
        enablePluginDebug: !1,
        httpsBasicAuthSite: !1,
        type: "",
        pluginPath: mejs.Utility.getScriptPath(["mediaelement.js", "mediaelement.min.js", "mediaelement-and-player.js", "mediaelement-and-player.min.js"]),
        flashName: "flashmediaelement.swf",
        flashStreamer: "",
        enablePluginSmoothing: !1,
        enablePseudoStreaming: !1,
        pseudoStreamingStartQueryParam: "start",
        silverlightName: "silverlightmediaelement.xap",
        defaultVideoWidth: 480,
        defaultVideoHeight: 270,
        pluginWidth: -1,
        pluginHeight: -1,
        pluginVars: [],
        timerRate: 250,
        startVolume: .8,
        success: function() {},
        error: function() {}
    }, mejs.MediaElement = function(e, t) {
        return mejs.HtmlMediaElementShim.create(e, t)
    }, mejs.HtmlMediaElementShim = {
        create: function(e, t) {
            var n, i, s = mejs.MediaElementDefaults,
                o = "string" == typeof e ? document.getElementById(e) : e,
                r = o.tagName.toLowerCase(),
                a = "audio" === r || "video" === r,
                l = a ? o.getAttribute("src") : o.getAttribute("href"),
                u = o.getAttribute("poster"),
                c = o.getAttribute("autoplay"),
                d = o.getAttribute("preload"),
                h = o.getAttribute("controls");
            for (i in t) s[i] = t[i];
            return l = "undefined" == typeof l || null === l || "" == l ? null : l, u = "undefined" == typeof u || null === u ? "" : u, d = "undefined" == typeof d || null === d || "false" === d ? "none" : d, c = !("undefined" == typeof c || null === c || "false" === c), h = !("undefined" == typeof h || null === h || "false" === h), n = this.determinePlayback(o, s, mejs.MediaFeatures.supportsMediaTag, a, l), n.url = null !== n.url ? mejs.Utility.absolutizeUrl(n.url) : "", "native" == n.method ? (mejs.MediaFeatures.isBustedAndroid && (o.src = n.url, o.addEventListener("click", function() {
                o.play()
            }, !1)), this.updateNative(n, s, c, d)) : "" !== n.method ? this.createPlugin(n, s, u, c, d, h) : (this.createErrorMessage(n, s, u), this)
        },
        determinePlayback: function(e, t, n, i, s) {
            var o, r, a, l, u, c, d, h, p, f, m, g = [],
                v = {
                    method: "",
                    url: "",
                    htmlMediaElement: e,
                    isVideo: "audio" != e.tagName.toLowerCase()
                };
            if ("undefined" != typeof t.type && "" !== t.type)
                if ("string" == typeof t.type) g.push({
                    type: t.type,
                    url: s
                });
                else
                    for (o = 0; o < t.type.length; o++) g.push({
                        type: t.type[o],
                        url: s
                    });
            else if (null !== s) c = this.formatType(s, e.getAttribute("type")), g.push({
                type: c,
                url: s
            });
            else
                for (o = 0; o < e.childNodes.length; o++) u = e.childNodes[o], 1 == u.nodeType && "source" == u.tagName.toLowerCase() && (s = u.getAttribute("src"), c = this.formatType(s, u.getAttribute("type")), m = u.getAttribute("media"), (!m || !window.matchMedia || window.matchMedia && window.matchMedia(m).matches) && g.push({
                    type: c,
                    url: s
                }));
            if (!i && g.length > 0 && null !== g[0].url && this.getTypeFromFile(g[0].url).indexOf("audio") > -1 && (v.isVideo = !1), mejs.MediaFeatures.isBustedAndroid && (e.canPlayType = function(e) {
                    return null !== e.match(/video\/(mp4|m4v)/gi) ? "maybe" : ""
                }), !(!n || "auto" !== t.mode && "auto_plugin" !== t.mode && "native" !== t.mode || mejs.MediaFeatures.isBustedNativeHTTPS && t.httpsBasicAuthSite === !0)) {
                for (i || (f = document.createElement(v.isVideo ? "video" : "audio"), e.parentNode.insertBefore(f, e), e.style.display = "none", v.htmlMediaElement = e = f), o = 0; o < g.length; o++)
                    if ("" !== e.canPlayType(g[o].type).replace(/no/, "") || "" !== e.canPlayType(g[o].type.replace(/mp3/, "mpeg")).replace(/no/, "")) {
                        v.method = "native", v.url = g[o].url;
                        break
                    }
                if ("native" === v.method && (null !== v.url && (e.src = v.url), "auto_plugin" !== t.mode)) return v
            }
            if ("auto" === t.mode || "auto_plugin" === t.mode || "shim" === t.mode)
                for (o = 0; o < g.length; o++)
                    for (c = g[o].type, r = 0; r < t.plugins.length; r++)
                        for (d = t.plugins[r], h = mejs.plugins[d], a = 0; a < h.length; a++)
                            if (p = h[a], null == p.version || mejs.PluginDetector.hasPluginVersion(d, p.version))
                                for (l = 0; l < p.types.length; l++)
                                    if (c == p.types[l]) return v.method = d, v.url = g[o].url, v;
            return "auto_plugin" === t.mode && "native" === v.method ? v : ("" === v.method && g.length > 0 && (v.url = g[0].url), v)
        },
        formatType: function(e, t) {
            return e && !t ? this.getTypeFromFile(e) : t && ~t.indexOf(";") ? t.substr(0, t.indexOf(";")) : t
        },
        getTypeFromFile: function(e) {
            e = e.split("?")[0];
            var t = e.substring(e.lastIndexOf(".") + 1).toLowerCase();
            return (/(mp4|m4v|ogg|ogv|webm|webmv|flv|wmv|mpeg|mov)/gi.test(t) ? "video" : "audio") + "/" + this.getTypeFromExtension(t)
        },
        getTypeFromExtension: function(e) {
            switch (e) {
                case "mp4":
                case "m4v":
                    return "mp4";
                case "webm":
                case "webma":
                case "webmv":
                    return "webm";
                case "ogg":
                case "oga":
                case "ogv":
                    return "ogg";
                default:
                    return e
            }
        },
        createErrorMessage: function(e, t, n) {
            var i = e.htmlMediaElement,
                s = document.createElement("div");
            s.className = "me-cannotplay";
            try {
                s.style.width = i.width + "px", s.style.height = i.height + "px"
            } catch (o) {}
            s.innerHTML = t.customError ? t.customError : "" !== n ? '<a href="' + e.url + '"><img src="' + n + '" width="100%" height="100%" /></a>' : '<a href="' + e.url + '"><span>' + mejs.i18n.t("Download File") + "</span></a>", i.parentNode.insertBefore(s, i), i.style.display = "none", t.error(i)
        },
        createPlugin: function(e, t, n, i, s, o) {
            var r, a, l, u = e.htmlMediaElement,
                c = 1,
                d = 1,
                h = "me_" + e.method + "_" + mejs.meIndex++,
                p = new mejs.PluginMediaElement(h, e.method, e.url),
                f = document.createElement("div");
            p.tagName = u.tagName;
            for (var m = 0; m < u.attributes.length; m++) {
                var g = u.attributes[m];
                1 == g.specified && p.setAttribute(g.name, g.value)
            }
            for (a = u.parentNode; null !== a && "body" != a.tagName.toLowerCase();) {
                if ("p" == a.parentNode.tagName.toLowerCase()) {
                    a.parentNode.parentNode.insertBefore(a, a.parentNode);
                    break
                }
                a = a.parentNode
            }
            switch (e.isVideo ? (c = t.pluginWidth > 0 ? t.pluginWidth : t.videoWidth > 0 ? t.videoWidth : null !== u.getAttribute("width") ? u.getAttribute("width") : t.defaultVideoWidth, d = t.pluginHeight > 0 ? t.pluginHeight : t.videoHeight > 0 ? t.videoHeight : null !== u.getAttribute("height") ? u.getAttribute("height") : t.defaultVideoHeight, c = mejs.Utility.encodeUrl(c), d = mejs.Utility.encodeUrl(d)) : t.enablePluginDebug && (c = 320, d = 240), p.success = t.success, mejs.MediaPluginBridge.registerPluginElement(h, p, u), f.className = "me-plugin", f.id = h + "_container", e.isVideo ? u.parentNode.insertBefore(f, u) : document.body.insertBefore(f, document.body.childNodes[0]), l = ["id=" + h, "isvideo=" + (e.isVideo ? "true" : "false"), "autoplay=" + (i ? "true" : "false"), "preload=" + s, "width=" + c, "startvolume=" + t.startVolume, "timerrate=" + t.timerRate, "flashstreamer=" + t.flashStreamer, "height=" + d, "pseudostreamstart=" + t.pseudoStreamingStartQueryParam], null !== e.url && ("flash" == e.method ? l.push("file=" + mejs.Utility.encodeUrl(e.url)) : l.push("file=" + e.url)), t.enablePluginDebug && l.push("debug=true"), t.enablePluginSmoothing && l.push("smoothing=true"), t.enablePseudoStreaming && l.push("pseudostreaming=true"), o && l.push("controls=true"), t.pluginVars && (l = l.concat(t.pluginVars)), e.method) {
                case "silverlight":
                    f.innerHTML = '<object data="data:application/x-silverlight-2," type="application/x-silverlight-2" id="' + h + '" name="' + h + '" width="' + c + '" height="' + d + '" class="mejs-shim"><param name="initParams" value="' + l.join(",") + '" /><param name="windowless" value="true" /><param name="background" value="black" /><param name="minRuntimeVersion" value="3.0.0.0" /><param name="autoUpgrade" value="true" /><param name="source" value="' + t.pluginPath + t.silverlightName + '" /></object>';
                    break;
                case "flash":
                    mejs.MediaFeatures.isIE ? (r = document.createElement("div"), f.appendChild(r), r.outerHTML = '<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" codebase="//download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab" id="' + h + '" width="' + c + '" height="' + d + '" class="mejs-shim"><param name="movie" value="' + t.pluginPath + t.flashName + "?x=" + new Date + '" /><param name="flashvars" value="' + l.join("&amp;") + '" /><param name="quality" value="high" /><param name="bgcolor" value="#000000" /><param name="wmode" value="transparent" /><param name="allowScriptAccess" value="always" /><param name="allowFullScreen" value="true" /><param name="scale" value="default" /></object>') : f.innerHTML = '<embed id="' + h + '" name="' + h + '" play="true" loop="false" quality="high" bgcolor="#000000" wmode="transparent" allowScriptAccess="always" allowFullScreen="true" type="application/x-shockwave-flash" pluginspage="//www.macromedia.com/go/getflashplayer" src="' + t.pluginPath + t.flashName + '" flashvars="' + l.join("&") + '" width="' + c + '" height="' + d + '" scale="default"class="mejs-shim"></embed>';
                    break;
                case "youtube":
                    var v = e.url.substr(e.url.lastIndexOf("=") + 1);
                    youtubeSettings = {
                        container: f,
                        containerId: f.id,
                        pluginMediaElement: p,
                        pluginId: h,
                        videoId: v,
                        height: d,
                        width: c
                    }, mejs.PluginDetector.hasPluginVersion("flash", [10, 0, 0]) ? mejs.YouTubeApi.createFlash(youtubeSettings) : mejs.YouTubeApi.enqueueIframe(youtubeSettings);
                    break;
                case "vimeo":
                    p.vimeoid = e.url.substr(e.url.lastIndexOf("/") + 1), f.innerHTML = '<iframe src="http://player.vimeo.com/video/' + p.vimeoid + '?portrait=0&byline=0&title=0" width="' + c + '" height="' + d + '" frameborder="0" class="mejs-shim"></iframe>'
            }
            return u.style.display = "none", u.removeAttribute("autoplay"), p
        },
        updateNative: function(e, t) {
            var n, i = e.htmlMediaElement;
            for (n in mejs.HtmlMediaElement) i[n] = mejs.HtmlMediaElement[n];
            return t.success(i, i), i
        }
    }, mejs.YouTubeApi = {
        isIframeStarted: !1,
        isIframeLoaded: !1,
        loadIframeApi: function() {
            if (!this.isIframeStarted) {
                var e = document.createElement("script");
                e.src = "//www.youtube.com/player_api";
                var t = document.getElementsByTagName("script")[0];
                t.parentNode.insertBefore(e, t), this.isIframeStarted = !0
            }
        },
        iframeQueue: [],
        enqueueIframe: function(e) {
            this.isLoaded ? this.createIframe(e) : (this.loadIframeApi(), this.iframeQueue.push(e))
        },
        createIframe: function(e) {
            var t = e.pluginMediaElement,
                n = new YT.Player(e.containerId, {
                    height: e.height,
                    width: e.width,
                    videoId: e.videoId,
                    playerVars: {
                        controls: 0
                    },
                    events: {
                        onReady: function() {
                            e.pluginMediaElement.pluginApi = n, mejs.MediaPluginBridge.initPlugin(e.pluginId), setInterval(function() {
                                mejs.YouTubeApi.createEvent(n, t, "timeupdate")
                            }, 250)
                        },
                        onStateChange: function(e) {
                            mejs.YouTubeApi.handleStateChange(e.data, n, t)
                        }
                    }
                })
        },
        createEvent: function(e, t, n) {
            var i = {
                type: n,
                target: t
            };
            if (e && e.getDuration) {
                t.currentTime = i.currentTime = e.getCurrentTime(), t.duration = i.duration = e.getDuration(), i.paused = t.paused, i.ended = t.ended, i.muted = e.isMuted(), i.volume = e.getVolume() / 100, i.bytesTotal = e.getVideoBytesTotal(), i.bufferedBytes = e.getVideoBytesLoaded();
                var s = i.bufferedBytes / i.bytesTotal * i.duration;
                i.target.buffered = i.buffered = {
                    start: function() {
                        return 0
                    },
                    end: function() {
                        return s
                    },
                    length: 1
                }
            }
            t.dispatchEvent(i.type, i)
        },
        iFrameReady: function() {
            for (this.isLoaded = !0, this.isIframeLoaded = !0; this.iframeQueue.length > 0;) {
                var e = this.iframeQueue.pop();
                this.createIframe(e)
            }
        },
        flashPlayers: {},
        createFlash: function(e) {
            this.flashPlayers[e.pluginId] = e;
            var t, n = "//www.youtube.com/apiplayer?enablejsapi=1&amp;playerapiid=" + e.pluginId + "&amp;version=3&amp;autoplay=0&amp;controls=0&amp;modestbranding=1&loop=0";
            mejs.MediaFeatures.isIE ? (t = document.createElement("div"), e.container.appendChild(t), t.outerHTML = '<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" codebase="//download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab" id="' + e.pluginId + '" width="' + e.width + '" height="' + e.height + '" class="mejs-shim"><param name="movie" value="' + n + '" /><param name="wmode" value="transparent" /><param name="allowScriptAccess" value="always" /><param name="allowFullScreen" value="true" /></object>') : e.container.innerHTML = '<object type="application/x-shockwave-flash" id="' + e.pluginId + '" data="' + n + '" width="' + e.width + '" height="' + e.height + '" style="visibility: visible; " class="mejs-shim"><param name="allowScriptAccess" value="always"><param name="wmode" value="transparent"></object>'
        },
        flashReady: function(e) {
            var t = this.flashPlayers[e],
                n = document.getElementById(e),
                i = t.pluginMediaElement;
            i.pluginApi = i.pluginElement = n, mejs.MediaPluginBridge.initPlugin(e), n.cueVideoById(t.videoId);
            var s = t.containerId + "_callback";
            window[s] = function(e) {
                mejs.YouTubeApi.handleStateChange(e, n, i)
            }, n.addEventListener("onStateChange", s), setInterval(function() {
                mejs.YouTubeApi.createEvent(n, i, "timeupdate")
            }, 250)
        },
        handleStateChange: function(e, t, n) {
            switch (e) {
                case -1:
                    n.paused = !0, n.ended = !0, mejs.YouTubeApi.createEvent(t, n, "loadedmetadata");
                    break;
                case 0:
                    n.paused = !1, n.ended = !0, mejs.YouTubeApi.createEvent(t, n, "ended");
                    break;
                case 1:
                    n.paused = !1, n.ended = !1, mejs.YouTubeApi.createEvent(t, n, "play"), mejs.YouTubeApi.createEvent(t, n, "playing");
                    break;
                case 2:
                    n.paused = !0, n.ended = !1, mejs.YouTubeApi.createEvent(t, n, "pause");
                    break;
                case 3:
                    mejs.YouTubeApi.createEvent(t, n, "progress");
                    break;
                case 5:
            }
        }
    }, window.mejs = mejs, window.MediaElement = mejs.MediaElement,
    function(e, t) {
        "use strict";
        var n = {
            locale: {
                language: "",
                strings: {}
            },
            methods: {}
        };
        n.getLanguage = function() {
            var e = n.locale.language || window.navigator.userLanguage || window.navigator.language;
            return e.substr(0, 2).toLowerCase()
        }, "undefined" != typeof mejsL10n && (n.locale.language = mejsL10n.language), n.methods.checkPlain = function(e) {
            var t, n, i = {
                "&": "&amp;",
                '"': "&quot;",
                "<": "&lt;",
                ">": "&gt;"
            };
            e = String(e);
            for (t in i) i.hasOwnProperty(t) && (n = new RegExp(t, "g"), e = e.replace(n, i[t]));
            return e
        }, n.methods.t = function(e, t) {
            return n.locale.strings && n.locale.strings[t.context] && n.locale.strings[t.context][e] && (e = n.locale.strings[t.context][e]), n.methods.checkPlain(e)
        }, n.t = function(e, t) {
            if ("string" == typeof e && e.length > 0) {
                var i = n.getLanguage();
                return t = t || {
                    context: i
                }, n.methods.t(e, t)
            }
            throw {
                name: "InvalidArgumentException",
                message: "First argument is either not a string or empty."
            }
        }, t.i18n = n
    }(document, mejs),
    function(e) {
        "use strict";
        "undefined" != typeof mejsL10n && (e[mejsL10n.language] = mejsL10n.strings)
    }(mejs.i18n.locale.strings),
    function(e) {
        "use strict";
        "undefined" == typeof e.de && (e.de = {
            Fullscreen: "Vollbild",
            "Go Fullscreen": "Vollbild an",
            "Turn off Fullscreen": "Vollbild aus",
            Close: "Schließen"
        })
    }(mejs.i18n.locale.strings),
    function(e) {
        "use strict";
        "undefined" == typeof e.zh && (e.zh = {
            Fullscreen: "全螢幕",
            "Go Fullscreen": "全屏模式",
            "Turn off Fullscreen": "退出全屏模式",
            Close: "關閉"
        })
    }(mejs.i18n.locale.strings), "undefined" != typeof jQuery ? mejs.$ = jQuery : "undefined" != typeof ender && (mejs.$ = ender),
    function(e) {
        mejs.MepDefaults = {
                poster: "",
                showPosterWhenEnded: !1,
                defaultVideoWidth: 480,
                defaultVideoHeight: 270,
                videoWidth: -1,
                videoHeight: -1,
                defaultAudioWidth: 400,
                defaultAudioHeight: 30,
                defaultSeekBackwardInterval: function(e) {
                    return .05 * e.duration
                },
                defaultSeekForwardInterval: function(e) {
                    return .05 * e.duration
                },
                audioWidth: -1,
                audioHeight: -1,
                startVolume: .8,
                loop: !1,
                autoRewind: !0,
                enableAutosize: !0,
                alwaysShowHours: !1,
                showTimecodeFrameCount: !1,
                framesPerSecond: 25,
                autosizeProgress: !0,
                alwaysShowControls: !1,
                hideVideoControlsOnLoad: !1,
                clickToPlayPause: !0,
                iPadUseNativeControls: !1,
                iPhoneUseNativeControls: !1,
                AndroidUseNativeControls: !1,
                features: ["playpause", "current", "progress", "duration", "tracks", "volume", "fullscreen"],
                isVideo: !0,
                enableKeyboard: !0,
                pauseOtherPlayers: !0,
                keyActions: [{
                    keys: [32, 179],
                    action: function(e, t) {
                        t.paused || t.ended ? e.play() : e.pause()
                    }
                }, {
                    keys: [38],
                    action: function(e, t) {
                        var n = Math.min(t.volume + .1, 1);
                        t.setVolume(n)
                    }
                }, {
                    keys: [40],
                    action: function(e, t) {
                        var n = Math.max(t.volume - .1, 0);
                        t.setVolume(n)
                    }
                }, {
                    keys: [37, 227],
                    action: function(e, t) {
                        if (!isNaN(t.duration) && t.duration > 0) {
                            e.isVideo && (e.showControls(), e.startControlsTimer());
                            var n = Math.max(t.currentTime - e.options.defaultSeekBackwardInterval(t), 0);
                            t.setCurrentTime(n)
                        }
                    }
                }, {
                    keys: [39, 228],
                    action: function(e, t) {
                        if (!isNaN(t.duration) && t.duration > 0) {
                            e.isVideo && (e.showControls(), e.startControlsTimer());
                            var n = Math.min(t.currentTime + e.options.defaultSeekForwardInterval(t), t.duration);
                            t.setCurrentTime(n)
                        }
                    }
                }, {
                    keys: [70],
                    action: function(e) {
                        "undefined" != typeof e.enterFullScreen && (e.isFullScreen ? e.exitFullScreen() : e.enterFullScreen())
                    }
                }]
            }, mejs.mepIndex = 0, mejs.players = {}, mejs.MediaElementPlayer = function(t, n) {
                if (!(this instanceof mejs.MediaElementPlayer)) return new mejs.MediaElementPlayer(t, n);
                var i = this;
                return i.$media = i.$node = e(t), i.node = i.media = i.$media[0], "undefined" != typeof i.node.player ? i.node.player : (i.node.player = i, "undefined" == typeof n && (n = i.$node.data("mejsoptions")), i.options = e.extend({}, mejs.MepDefaults, n), i.id = "mep_" + mejs.mepIndex++, mejs.players[i.id] = i, i.init(), i)
            }, mejs.MediaElementPlayer.prototype = {
                hasFocus: !1,
                controlsAreVisible: !0,
                init: function() {
                    var t = this,
                        n = mejs.MediaFeatures,
                        i = e.extend(!0, {}, t.options, {
                            success: function(e, n) {
                                t.meReady(e, n)
                            },
                            error: function(e) {
                                t.handleError(e)
                            }
                        }),
                        s = t.media.tagName.toLowerCase();
                    if (t.isDynamic = "audio" !== s && "video" !== s, t.isVideo = t.isDynamic ? t.options.isVideo : "audio" !== s && t.options.isVideo, n.isiPad && t.options.iPadUseNativeControls || n.isiPhone && t.options.iPhoneUseNativeControls) t.$media.attr("controls", "controls"), n.isiPad && null !== t.media.getAttribute("autoplay") && t.play();
                    else if (n.isAndroid && t.options.AndroidUseNativeControls);
                    else {
                        if (t.$media.removeAttr("controls"), t.container = e('<div id="' + t.id + '" class="mejs-container ' + (mejs.MediaFeatures.svg ? "svg" : "no-svg") + '"><div class="mejs-inner"><div class="mejs-mediaelement"></div><div class="mejs-layers"></div><div class="mejs-controls"></div><div class="mejs-clear"></div></div></div>').addClass(t.$media[0].className).insertBefore(t.$media), t.container.addClass((n.isAndroid ? "mejs-android " : "") + (n.isiOS ? "mejs-ios " : "") + (n.isiPad ? "mejs-ipad " : "") + (n.isiPhone ? "mejs-iphone " : "") + (t.isVideo ? "mejs-video " : "mejs-audio ")), n.isiOS) {
                            var o = t.$media.clone();
                            t.container.find(".mejs-mediaelement").append(o), t.$media.remove(), t.$node = t.$media = o, t.node = t.media = o[0]
                        } else t.container.find(".mejs-mediaelement").append(t.$media);
                        t.controls = t.container.find(".mejs-controls"), t.layers = t.container.find(".mejs-layers");
                        var r = t.isVideo ? "video" : "audio",
                            a = r.substring(0, 1).toUpperCase() + r.substring(1);
                        t.width = t.options[r + "Width"] > 0 || t.options[r + "Width"].toString().indexOf("%") > -1 ? t.options[r + "Width"] : "" !== t.media.style.width && null !== t.media.style.width ? t.media.style.width : null !== t.media.getAttribute("width") ? t.$media.attr("width") : t.options["default" + a + "Width"], t.height = t.options[r + "Height"] > 0 || t.options[r + "Height"].toString().indexOf("%") > -1 ? t.options[r + "Height"] : "" !== t.media.style.height && null !== t.media.style.height ? t.media.style.height : null !== t.$media[0].getAttribute("height") ? t.$media.attr("height") : t.options["default" + a + "Height"], t.setPlayerSize(t.width, t.height), i.pluginWidth = t.width, i.pluginHeight = t.height
                    }
                    mejs.MediaElement(t.$media[0], i), "undefined" != typeof t.container && t.controlsAreVisible && t.container.trigger("controlsshown")
                },
                showControls: function(e) {
                    var t = this;
                    e = "undefined" == typeof e || e, t.controlsAreVisible || (e ? (t.controls.css("visibility", "visible").stop(!0, !0).fadeIn(200, function() {
                        t.controlsAreVisible = !0, t.container.trigger("controlsshown")
                    }), t.container.find(".mejs-control").css("visibility", "visible").stop(!0, !0).fadeIn(200, function() {
                        t.controlsAreVisible = !0
                    })) : (t.controls.css("visibility", "visible").css("display", "block"), t.container.find(".mejs-control").css("visibility", "visible").css("display", "block"), t.controlsAreVisible = !0, t.container.trigger("controlsshown")), t.setControlsSize())
                },
                hideControls: function(t) {
                    var n = this;
                    t = "undefined" == typeof t || t, n.controlsAreVisible && !n.options.alwaysShowControls && (t ? (n.controls.stop(!0, !0).fadeOut(200, function() {
                        e(this).css("visibility", "hidden").css("display", "block"), n.controlsAreVisible = !1, n.container.trigger("controlshidden")
                    }), n.container.find(".mejs-control").stop(!0, !0).fadeOut(200, function() {
                        e(this).css("visibility", "hidden").css("display", "block")
                    })) : (n.controls.css("visibility", "hidden").css("display", "block"), n.container.find(".mejs-control").css("visibility", "hidden").css("display", "block"), n.controlsAreVisible = !1, n.container.trigger("controlshidden")))
                },
                controlsTimer: null,
                startControlsTimer: function(e) {
                    var t = this;
                    e = "undefined" != typeof e ? e : 1500, t.killControlsTimer("start"), t.controlsTimer = setTimeout(function() {
                        t.hideControls(), t.killControlsTimer("hide")
                    }, e)
                },
                killControlsTimer: function() {
                    var e = this;
                    null !== e.controlsTimer && (clearTimeout(e.controlsTimer), delete e.controlsTimer, e.controlsTimer = null)
                },
                controlsEnabled: !0,
                disableControls: function() {
                    var e = this;
                    e.killControlsTimer(), e.hideControls(!1), this.controlsEnabled = !1
                },
                enableControls: function() {
                    var e = this;
                    e.showControls(!1), e.controlsEnabled = !0
                },
                meReady: function(e, t) {
                    var n, i, s = this,
                        o = mejs.MediaFeatures,
                        r = t.getAttribute("autoplay"),
                        a = !("undefined" == typeof r || null === r || "false" === r);
                    if (!s.created) {
                        if (s.created = !0, s.media = e, s.domNode = t, !(o.isAndroid && s.options.AndroidUseNativeControls || o.isiPad && s.options.iPadUseNativeControls || o.isiPhone && s.options.iPhoneUseNativeControls)) {
                            s.buildposter(s, s.controls, s.layers, s.media), s.buildkeyboard(s, s.controls, s.layers, s.media), s.buildoverlays(s, s.controls, s.layers, s.media), s.findTracks();
                            for (n in s.options.features)
                                if (i = s.options.features[n], s["build" + i]) try {
                                    s["build" + i](s, s.controls, s.layers, s.media)
                                } catch (l) {}
                                s.container.trigger("controlsready"), s.setPlayerSize(s.width, s.height), s.setControlsSize(), s.isVideo && (mejs.MediaFeatures.hasTouch ? s.$media.bind("touchstart", function() {
                                s.controlsAreVisible ? s.hideControls(!1) : s.controlsEnabled && s.showControls(!1)
                            }) : (mejs.MediaElementPlayer.prototype.clickToPlayPauseCallback = function() {
                                s.options.clickToPlayPause && (s.media.paused ? s.play() : s.pause())
                            }, s.media.addEventListener("click", s.clickToPlayPauseCallback, !1), s.container.bind("mouseenter mouseover", function() {
                                s.controlsEnabled && (s.options.alwaysShowControls || (s.killControlsTimer("enter"), s.showControls(), s.startControlsTimer(2500)))
                            }).bind("mousemove", function() {
                                s.controlsEnabled && (s.controlsAreVisible || s.showControls(), s.options.alwaysShowControls || s.startControlsTimer(2500))
                            }).bind("mouseleave", function() {
                                s.controlsEnabled && (s.media.paused || s.options.alwaysShowControls || s.startControlsTimer(1e3))
                            })), s.options.hideVideoControlsOnLoad && s.hideControls(!1), a && !s.options.alwaysShowControls && s.hideControls(), s.options.enableAutosize && s.media.addEventListener("loadedmetadata", function(e) {
                                s.options.videoHeight <= 0 && null === s.domNode.getAttribute("height") && !isNaN(e.target.videoHeight) && (s.setPlayerSize(e.target.videoWidth, e.target.videoHeight), s.setControlsSize(), s.media.setVideoSize(e.target.videoWidth, e.target.videoHeight))
                            }, !1)), e.addEventListener("play", function() {
                                var e;
                                for (e in mejs.players) {
                                    var t = mejs.players[e];
                                    t.id == s.id || !s.options.pauseOtherPlayers || t.paused || t.ended || t.pause(), t.hasFocus = !1
                                }
                                s.hasFocus = !0
                            }, !1), s.media.addEventListener("ended", function() {
                                if (s.options.autoRewind) try {
                                    s.media.setCurrentTime(0)
                                } catch (e) {}
                                s.media.pause(), s.setProgressRail && s.setProgressRail(), s.setCurrentRail && s.setCurrentRail(), s.options.loop ? s.play() : !s.options.alwaysShowControls && s.controlsEnabled && s.showControls()
                            }, !1), s.media.addEventListener("loadedmetadata", function() {
                                s.updateDuration && s.updateDuration(), s.updateCurrent && s.updateCurrent(), s.isFullScreen || (s.setPlayerSize(s.width, s.height), s.setControlsSize())
                            }, !1), setTimeout(function() {
                                s.setPlayerSize(s.width, s.height), s.setControlsSize()
                            }, 50), s.globalBind("resize", function() {
                                s.isFullScreen || mejs.MediaFeatures.hasTrueNativeFullScreen && document.webkitIsFullScreen || s.setPlayerSize(s.width, s.height), s.setControlsSize()
                            }), "youtube" == s.media.pluginType && s.container.find(".mejs-overlay-play").hide()
                        }
                        a && "native" == e.pluginType && s.play(), s.options.success && ("string" == typeof s.options.success ? window[s.options.success](s.media, s.domNode, s) : s.options.success(s.media, s.domNode, s))
                    }
                },
                handleError: function(e) {
                    var t = this;
                    t.controls.hide(), t.options.error && t.options.error(e)
                },
                setPlayerSize: function(t, n) {
                    var i = this;
                    if ("undefined" != typeof t && (i.width = t), "undefined" != typeof n && (i.height = n), i.height.toString().indexOf("%") > 0 || "100%" === i.$node.css("max-width") || parseInt(i.$node.css("max-width").replace(/px/, ""), 10) / i.$node.offsetParent().width() === 1 || i.$node[0].currentStyle && "100%" === i.$node[0].currentStyle.maxWidth) {
                        var s = i.isVideo ? i.media.videoWidth && i.media.videoWidth > 0 ? i.media.videoWidth : i.options.defaultVideoWidth : i.options.defaultAudioWidth,
                            o = i.isVideo ? i.media.videoHeight && i.media.videoHeight > 0 ? i.media.videoHeight : i.options.defaultVideoHeight : i.options.defaultAudioHeight,
                            r = i.container.parent().closest(":visible").width(),
                            a = i.isVideo || !i.options.autosizeProgress ? parseInt(r * o / s, 10) : o;
                        "body" === i.container.parent()[0].tagName.toLowerCase() && (r = e(window).width(), a = e(window).height()), 0 != a && 0 != r && (i.container.width(r).height(a), i.$media.add(i.container.find(".mejs-shim")).width("100%").height("100%"), i.isVideo && i.media.setVideoSize && i.media.setVideoSize(r, a), i.layers.children(".mejs-layer").width("100%").height("100%"))
                    } else i.container.width(i.width).height(i.height), i.layers.children(".mejs-layer").width(i.width).height(i.height);
                    var l = i.layers.find(".mejs-overlay-play"),
                        u = l.find(".mejs-overlay-button");
                    l.height(i.container.height() - i.controls.height()), u.css("margin-top", "-" + (u.height() / 2 - i.controls.height() / 2).toString() + "px")
                },
                setControlsSize: function() {
                    var t = this,
                        n = 0,
                        i = 0,
                        s = t.controls.find(".mejs-time-rail"),
                        o = t.controls.find(".mejs-time-total"),
                        r = (t.controls.find(".mejs-time-current"), t.controls.find(".mejs-time-loaded"), s.siblings());
                    t.options && !t.options.autosizeProgress && (i = parseInt(s.css("width"))), 0 !== i && i || (r.each(function() {
                        var t = e(this);
                        "absolute" != t.css("position") && t.is(":visible") && (n += e(this).outerWidth(!0))
                    }), i = t.controls.width() - n - (s.outerWidth(!0) - s.width())), s.width(i), o.width(i - (o.outerWidth(!0) - o.width())), t.setProgressRail && t.setProgressRail(), t.setCurrentRail && t.setCurrentRail()
                },
                buildposter: function(t, n, i, s) {
                    var o = this,
                        r = e('<div class="mejs-poster mejs-layer"></div>').appendTo(i),
                        a = t.$media.attr("poster");
                    "" !== t.options.poster && (a = t.options.poster), "" !== a && null != a ? o.setPoster(a) : r.hide(), s.addEventListener("play", function() {
                        r.hide()
                    }, !1), t.options.showPosterWhenEnded && t.options.autoRewind && s.addEventListener("ended", function() {
                        r.show()
                    }, !1)
                },
                setPoster: function(t) {
                    var n = this,
                        i = n.container.find(".mejs-poster"),
                        s = i.find("img");
                    0 == s.length && (s = e('<img width="100%" height="100%" />').appendTo(i)), s.attr("src", t), i.css({
                        "background-image": "url(" + t + ")"
                    })
                },
                buildoverlays: function(t, n, i, s) {
                    var o = this;
                    if (t.isVideo) {
                        var r = e('<div class="mejs-overlay mejs-layer"><div class="mejs-overlay-loading"><span></span></div></div>').hide().appendTo(i),
                            a = e('<div class="mejs-overlay mejs-layer"><div class="mejs-overlay-error"></div></div>').hide().appendTo(i),
                            l = e('<div class="mejs-overlay mejs-layer mejs-overlay-play"><div class="mejs-overlay-button"></div></div>').appendTo(i).bind("click touchstart", function() {
                                o.options.clickToPlayPause && s.paused && o.play()
                            });
                        s.addEventListener("play", function() {
                            l.hide(), r.hide(), n.find(".mejs-time-buffering").hide(), a.hide()
                        }, !1), s.addEventListener("playing", function() {
                            l.hide(), r.hide(), n.find(".mejs-time-buffering").hide(), a.hide()
                        }, !1), s.addEventListener("seeking", function() {
                            r.show(), n.find(".mejs-time-buffering").show()
                        }, !1), s.addEventListener("seeked", function() {
                            r.hide(), n.find(".mejs-time-buffering").hide()
                        }, !1), s.addEventListener("pause", function() {
                            mejs.MediaFeatures.isiPhone || l.show()
                        }, !1), s.addEventListener("waiting", function() {
                            r.show(), n.find(".mejs-time-buffering").show()
                        }, !1), s.addEventListener("loadeddata", function() {
                            r.show(), n.find(".mejs-time-buffering").show()
                        }, !1), s.addEventListener("canplay", function() {
                            r.hide(), n.find(".mejs-time-buffering").hide()
                        }, !1), s.addEventListener("error", function() {
                            r.hide(), n.find(".mejs-time-buffering").hide(), a.show(), a.find("mejs-overlay-error").html("Error loading this resource")
                        }, !1)
                    }
                },
                buildkeyboard: function(t, n, i, s) {
                    var o = this;
                    o.globalBind("keydown", function(e) {
                        if (t.hasFocus && t.options.enableKeyboard)
                            for (var n = 0, i = t.options.keyActions.length; i > n; n++)
                                for (var o = t.options.keyActions[n], r = 0, a = o.keys.length; a > r; r++)
                                    if (e.keyCode == o.keys[r]) return e.preventDefault(), o.action(t, s, e.keyCode), !1;
                        return !0
                    }), o.globalBind("click", function(n) {
                        0 == e(n.target).closest(".mejs-container").length && (t.hasFocus = !1)
                    })
                },
                findTracks: function() {
                    var t = this,
                        n = t.$media.find("track");
                    t.tracks = [], n.each(function(n, i) {
                        i = e(i), t.tracks.push({
                            srclang: i.attr("srclang") ? i.attr("srclang").toLowerCase() : "",
                            src: i.attr("src"),
                            kind: i.attr("kind"),
                            label: i.attr("label") || "",
                            entries: [],
                            isLoaded: !1
                        })
                    })
                },
                changeSkin: function(e) {
                    this.container[0].className = "mejs-container " + e, this.setPlayerSize(this.width, this.height), this.setControlsSize()
                },
                play: function() {
                    this.load(), this.media.play()
                },
                pause: function() {
                    try {
                        this.media.pause()
                    } catch (e) {}
                },
                load: function() {
                    this.isLoaded || this.media.load(), this.isLoaded = !0
                },
                setMuted: function(e) {
                    this.media.setMuted(e)
                },
                setCurrentTime: function(e) {
                    this.media.setCurrentTime(e)
                },
                getCurrentTime: function() {
                    return this.media.currentTime
                },
                setVolume: function(e) {
                    this.media.setVolume(e)
                },
                getVolume: function() {
                    return this.media.volume
                },
                setSrc: function(e) {
                    this.media.setSrc(e)
                },
                remove: function() {
                    var e, t, n = this;
                    for (e in n.options.features)
                        if (t = n.options.features[e], n["clean" + t]) try {
                            n["clean" + t](n)
                        } catch (i) {}
                        n.isDynamic ? n.$node.insertBefore(n.container) : (n.$media.prop("controls", !0), n.$node.clone().show().insertBefore(n.container), n.$node.remove()), "native" !== n.media.pluginType && n.media.remove(), delete mejs.players[n.id], n.container.remove(), n.globalUnbind(), delete n.node.player
                }
            },
            function() {
                function t(t, i) {
                    var s = {
                        d: [],
                        w: []
                    };
                    return e.each((t || "").split(" "), function(e, t) {
                        var o = t + "." + i;
                        0 === o.indexOf(".") ? (s.d.push(o), s.w.push(o)) : s[n.test(t) ? "w" : "d"].push(o)
                    }), s.d = s.d.join(" "), s.w = s.w.join(" "), s
                }
                var n = /^((after|before)print|(before)?unload|hashchange|message|o(ff|n)line|page(hide|show)|popstate|resize|storage)\b/;
                mejs.MediaElementPlayer.prototype.globalBind = function(n, i, s) {
                    var o = this;
                    n = t(n, o.id), n.d && e(document).bind(n.d, i, s), n.w && e(window).bind(n.w, i, s)
                }, mejs.MediaElementPlayer.prototype.globalUnbind = function(n, i) {
                    var s = this;
                    n = t(n, s.id), n.d && e(document).unbind(n.d, i), n.w && e(window).unbind(n.w, i)
                }
            }(), "undefined" != typeof jQuery && (jQuery.fn.mediaelementplayer = function(e) {
                return e === !1 ? this.each(function() {
                    var e = jQuery(this).data("mediaelementplayer");
                    e && e.remove(), jQuery(this).removeData("mediaelementplayer")
                }) : this.each(function() {
                    jQuery(this).data("mediaelementplayer", new mejs.MediaElementPlayer(this, e))
                }), this
            }), e(document).ready(function() {
                e(".mejs-player").mediaelementplayer()
            }), window.MediaElementPlayer = mejs.MediaElementPlayer
    }(mejs.$),
    function(e) {
        e.extend(mejs.MepDefaults, {
            playpauseText: mejs.i18n.t("Play/Pause")
        }), e.extend(MediaElementPlayer.prototype, {
            buildplaypause: function(t, n, i, s) {
                var o = this,
                    r = e('<div class="mejs-button mejs-playpause-button mejs-play" ><button type="button" aria-controls="' + o.id + '" title="' + o.options.playpauseText + '" aria-label="' + o.options.playpauseText + '"></button></div>').appendTo(n).click(function(e) {
                        return e.preventDefault(), s.paused ? s.play() : s.pause(), !1
                    });
                s.addEventListener("play", function() {
                    r.removeClass("mejs-play").addClass("mejs-pause")
                }, !1), s.addEventListener("playing", function() {
                    r.removeClass("mejs-play").addClass("mejs-pause")
                }, !1), s.addEventListener("pause", function() {
                    r.removeClass("mejs-pause").addClass("mejs-play")
                }, !1), s.addEventListener("paused", function() {
                    r.removeClass("mejs-pause").addClass("mejs-play")
                }, !1)
            }
        })
    }(mejs.$),
    function(e) {
        e.extend(mejs.MepDefaults, {
            stopText: "Stop"
        }), e.extend(MediaElementPlayer.prototype, {
            buildstop: function(t, n, i, s) {
                {
                    var o = this;
                    e('<div class="mejs-button mejs-stop-button mejs-stop"><button type="button" aria-controls="' + o.id + '" title="' + o.options.stopText + '" aria-label="' + o.options.stopText + '"></button></div>').appendTo(n).click(function() {
                        s.paused || s.pause(), s.currentTime > 0 && (s.setCurrentTime(0), s.pause(), n.find(".mejs-time-current").width("0px"), n.find(".mejs-time-handle").css("left", "0px"), n.find(".mejs-time-float-current").html(mejs.Utility.secondsToTimeCode(0)), n.find(".mejs-currenttime").html(mejs.Utility.secondsToTimeCode(0)), i.find(".mejs-poster").show())
                    })
                }
            }
        })
    }(mejs.$),
    function(e) {
        e.extend(MediaElementPlayer.prototype, {
            buildprogress: function(t, n, i, s) {
                e('<div class="mejs-time-rail"><span class="mejs-time-total"><span class="mejs-time-buffering"></span><span class="mejs-time-loaded"></span><span class="mejs-time-current"></span><span class="mejs-time-handle"></span><span class="mejs-time-float"><span class="mejs-time-float-current">00:00</span><span class="mejs-time-float-corner"></span></span></span></div>').appendTo(n), n.find(".mejs-time-buffering").hide();
                var o = this,
                    r = n.find(".mejs-time-total"),
                    a = n.find(".mejs-time-loaded"),
                    l = n.find(".mejs-time-current"),
                    u = n.find(".mejs-time-handle"),
                    c = n.find(".mejs-time-float"),
                    d = n.find(".mejs-time-float-current"),
                    h = function(e) {
                        var t = e.pageX,
                            n = r.offset(),
                            i = r.outerWidth(!0),
                            o = 0,
                            a = 0,
                            l = 0;
                        s.duration && (t < n.left ? t = n.left : t > i + n.left && (t = i + n.left), l = t - n.left, o = l / i, a = .02 >= o ? 0 : o * s.duration, p && a !== s.currentTime && s.setCurrentTime(a), mejs.MediaFeatures.hasTouch || (c.css("left", l), d.html(mejs.Utility.secondsToTimeCode(a)), c.show()))
                    },
                    p = !1,
                    f = !1;
                r.bind("mousedown", function(e) {
                    return 1 === e.which ? (p = !0, h(e), o.globalBind("mousemove.dur", function(e) {
                        h(e)
                    }), o.globalBind("mouseup.dur", function() {
                        p = !1, c.hide(), o.globalUnbind(".dur")
                    }), !1) : void 0
                }).bind("mouseenter", function() {
                    f = !0, o.globalBind("mousemove.dur", function(e) {
                        h(e)
                    }), mejs.MediaFeatures.hasTouch || c.show()
                }).bind("mouseleave", function() {
                    f = !1, p || (o.globalUnbind(".dur"), c.hide())
                }), s.addEventListener("progress", function(e) {
                    t.setProgressRail(e), t.setCurrentRail(e)
                }, !1), s.addEventListener("timeupdate", function(e) {
                    t.setProgressRail(e), t.setCurrentRail(e)
                }, !1), o.loaded = a, o.total = r, o.current = l, o.handle = u
            },
            setProgressRail: function(e) {
                var t = this,
                    n = void 0 != e ? e.target : t.media,
                    i = null;
                n && n.buffered && n.buffered.length > 0 && n.buffered.end && n.duration ? i = n.buffered.end(0) / n.duration : n && void 0 != n.bytesTotal && n.bytesTotal > 0 && void 0 != n.bufferedBytes ? i = n.bufferedBytes / n.bytesTotal : e && e.lengthComputable && 0 != e.total && (i = e.loaded / e.total), null !== i && (i = Math.min(1, Math.max(0, i)), t.loaded && t.total && t.loaded.width(t.total.width() * i))
            },
            setCurrentRail: function() {
                var e = this;
                if (void 0 != e.media.currentTime && e.media.duration && e.total && e.handle) {
                    var t = Math.round(e.total.width() * e.media.currentTime / e.media.duration),
                        n = t - Math.round(e.handle.outerWidth(!0) / 2);
                    e.current.width(t), e.handle.css("left", n)
                }
            }
        })
    }(mejs.$),
    function(e) {
        e.extend(mejs.MepDefaults, {
            duration: -1,
            timeAndDurationSeparator: "<span> | </span>"
        }), e.extend(MediaElementPlayer.prototype, {
            buildcurrent: function(t, n, i, s) {
                var o = this;
                e('<div class="mejs-time"><span class="mejs-currenttime">' + (t.options.alwaysShowHours ? "00:" : "") + (t.options.showTimecodeFrameCount ? "00:00:00" : "00:00") + "</span></div>").appendTo(n), o.currenttime = o.controls.find(".mejs-currenttime"), s.addEventListener("timeupdate", function() {
                    t.updateCurrent()
                }, !1)
            },
            buildduration: function(t, n, i, s) {
                var o = this;
                n.children().last().find(".mejs-currenttime").length > 0 ? e(o.options.timeAndDurationSeparator + '<span class="mejs-duration">' + (o.options.duration > 0 ? mejs.Utility.secondsToTimeCode(o.options.duration, o.options.alwaysShowHours || o.media.duration > 3600, o.options.showTimecodeFrameCount, o.options.framesPerSecond || 25) : (t.options.alwaysShowHours ? "00:" : "") + (t.options.showTimecodeFrameCount ? "00:00:00" : "00:00")) + "</span>").appendTo(n.find(".mejs-time")) : (n.find(".mejs-currenttime").parent().addClass("mejs-currenttime-container"), e('<div class="mejs-time mejs-duration-container"><span class="mejs-duration">' + (o.options.duration > 0 ? mejs.Utility.secondsToTimeCode(o.options.duration, o.options.alwaysShowHours || o.media.duration > 3600, o.options.showTimecodeFrameCount, o.options.framesPerSecond || 25) : (t.options.alwaysShowHours ? "00:" : "") + (t.options.showTimecodeFrameCount ? "00:00:00" : "00:00")) + "</span></div>").appendTo(n)), o.durationD = o.controls.find(".mejs-duration"), s.addEventListener("timeupdate", function() {
                    t.updateDuration()
                }, !1)
            },
            updateCurrent: function() {
                var e = this;
                e.currenttime && e.currenttime.html(mejs.Utility.secondsToTimeCode(e.media.currentTime, e.options.alwaysShowHours || e.media.duration > 3600, e.options.showTimecodeFrameCount, e.options.framesPerSecond || 25))
            },
            updateDuration: function() {
                var e = this;
                e.container.toggleClass("mejs-long-video", e.media.duration > 3600), e.durationD && (e.options.duration > 0 || e.media.duration) && e.durationD.html(mejs.Utility.secondsToTimeCode(e.options.duration > 0 ? e.options.duration : e.media.duration, e.options.alwaysShowHours, e.options.showTimecodeFrameCount, e.options.framesPerSecond || 25))
            }
        })
    }(mejs.$),
    function(e) {
        e.extend(mejs.MepDefaults, {
            muteText: mejs.i18n.t("Mute Toggle"),
            hideVolumeOnTouchDevices: !0,
            audioVolume: "horizontal",
            videoVolume: "vertical"
        }), e.extend(MediaElementPlayer.prototype, {
            buildvolume: function(t, n, i, s) {
                if (!mejs.MediaFeatures.hasTouch || !this.options.hideVolumeOnTouchDevices) {
                    var o = this,
                        r = o.isVideo ? o.options.videoVolume : o.options.audioVolume,
                        a = "horizontal" == r ? e('<div class="mejs-button mejs-volume-button mejs-mute"><button type="button" aria-controls="' + o.id + '" title="' + o.options.muteText + '" aria-label="' + o.options.muteText + '"></button></div><div class="mejs-horizontal-volume-slider"><div class="mejs-horizontal-volume-total"></div><div class="mejs-horizontal-volume-current"></div><div class="mejs-horizontal-volume-handle"></div></div>').appendTo(n) : e('<div class="mejs-button mejs-volume-button mejs-mute"><button type="button" aria-controls="' + o.id + '" title="' + o.options.muteText + '" aria-label="' + o.options.muteText + '"></button><div class="mejs-volume-slider"><div class="mejs-volume-total"></div><div class="mejs-volume-current"></div><div class="mejs-volume-handle"></div></div></div>').appendTo(n),
                        l = o.container.find(".mejs-volume-slider, .mejs-horizontal-volume-slider"),
                        u = o.container.find(".mejs-volume-total, .mejs-horizontal-volume-total"),
                        c = o.container.find(".mejs-volume-current, .mejs-horizontal-volume-current"),
                        d = o.container.find(".mejs-volume-handle, .mejs-horizontal-volume-handle"),
                        h = function(e, t) {
                            if (!l.is(":visible") && "undefined" == typeof t) return l.show(), h(e, !0), l.hide(), void 0;
                            if (e = Math.max(0, e), e = Math.min(e, 1), 0 == e ? a.removeClass("mejs-mute").addClass("mejs-unmute") : a.removeClass("mejs-unmute").addClass("mejs-mute"), "vertical" == r) {
                                var n = u.height(),
                                    i = u.position(),
                                    s = n - n * e;
                                d.css("top", Math.round(i.top + s - d.height() / 2)), c.height(n - s), c.css("top", i.top + s)
                            } else {
                                var o = u.width(),
                                    i = u.position(),
                                    p = o * e;
                                d.css("left", Math.round(i.left + p - d.width() / 2)), c.width(Math.round(p))
                            }
                        },
                        p = function(e) {
                            var t = null,
                                n = u.offset();
                            if ("vertical" == r) {
                                var i = u.height(),
                                    o = (parseInt(u.css("top").replace(/px/, ""), 10), e.pageY - n.top);
                                if (t = (i - o) / i, 0 == n.top || 0 == n.left) return
                            } else {
                                var a = u.width(),
                                    l = e.pageX - n.left;
                                t = l / a
                            }
                            t = Math.max(0, t), t = Math.min(t, 1), h(t), 0 == t ? s.setMuted(!0) : s.setMuted(!1), s.setVolume(t)
                        },
                        f = !1,
                        m = !1;
                    a.hover(function() {
                        l.show(), m = !0
                    }, function() {
                        m = !1, f || "vertical" != r || l.hide()
                    }), l.bind("mouseover", function() {
                        m = !0
                    }).bind("mousedown", function(e) {
                        return p(e), o.globalBind("mousemove.vol", function(e) {
                            p(e)
                        }), o.globalBind("mouseup.vol", function() {
                            f = !1, o.globalUnbind(".vol"), m || "vertical" != r || l.hide()
                        }), f = !0, !1
                    }), a.find("button").click(function() {
                        s.setMuted(!s.muted)
                    }), s.addEventListener("volumechange", function() {
                        f || (s.muted ? (h(0), a.removeClass("mejs-mute").addClass("mejs-unmute")) : (h(s.volume), a.removeClass("mejs-unmute").addClass("mejs-mute")))
                    }, !1), o.container.is(":visible") && (h(t.options.startVolume), 0 === t.options.startVolume && s.setMuted(!0), "native" === s.pluginType && s.setVolume(t.options.startVolume))
                }
            }
        })
    }(mejs.$),
    function(e) {
        e.extend(mejs.MepDefaults, {
            usePluginFullScreen: !0,
            newWindowCallback: function() {
                return ""
            },
            fullscreenText: mejs.i18n.t("Fullscreen")
        }), e.extend(MediaElementPlayer.prototype, {
            isFullScreen: !1,
            isNativeFullScreen: !1,
            isInIframe: !1,
            buildfullscreen: function(t, n, i, s) {
                if (t.isVideo) {
                    if (t.isInIframe = window.location != window.parent.location, mejs.MediaFeatures.hasTrueNativeFullScreen) {
                        var o = function() {
                            t.isFullScreen && (mejs.MediaFeatures.isFullScreen() ? (t.isNativeFullScreen = !0, t.setControlsSize()) : (t.isNativeFullScreen = !1, t.exitFullScreen()))
                        };
                        mejs.MediaFeatures.hasMozNativeFullScreen ? t.globalBind(mejs.MediaFeatures.fullScreenEventName, o) : t.container.bind(mejs.MediaFeatures.fullScreenEventName, o)
                    }
                    var r = this,
                        a = (t.container, e('<div class="mejs-button mejs-fullscreen-button"><button type="button" aria-controls="' + r.id + '" title="' + r.options.fullscreenText + '" aria-label="' + r.options.fullscreenText + '"></button></div>').appendTo(n));
                    if ("native" === r.media.pluginType || !r.options.usePluginFullScreen && !mejs.MediaFeatures.isFirefox) a.click(function() {
                        var e = mejs.MediaFeatures.hasTrueNativeFullScreen && mejs.MediaFeatures.isFullScreen() || t.isFullScreen;
                        e ? t.exitFullScreen() : t.enterFullScreen()
                    });
                    else {
                        var l = null,
                            u = function() {
                                var e, t = document.createElement("x"),
                                    n = document.documentElement,
                                    i = window.getComputedStyle;
                                return "pointerEvents" in t.style ? (t.style.pointerEvents = "auto", t.style.pointerEvents = "x", n.appendChild(t), e = i && "auto" === i(t, "").pointerEvents, n.removeChild(t), !!e) : !1
                            }();
                        if (u && !mejs.MediaFeatures.isOpera) {
                            var c, d, h = !1,
                                p = function() {
                                    if (h) {
                                        for (var e in f) f[e].hide();
                                        a.css("pointer-events", ""), r.controls.css("pointer-events", ""), r.media.removeEventListener("click", r.clickToPlayPauseCallback), h = !1
                                    }
                                },
                                f = {},
                                m = ["top", "left", "right", "bottom"],
                                g = function() {
                                    var e = a.offset().left - r.container.offset().left,
                                        t = a.offset().top - r.container.offset().top,
                                        n = a.outerWidth(!0),
                                        i = a.outerHeight(!0),
                                        s = r.container.width(),
                                        o = r.container.height();
                                    for (c in f) f[c].css({
                                        position: "absolute",
                                        top: 0,
                                        left: 0
                                    });
                                    f.top.width(s).height(t), f.left.width(e).height(i).css({
                                        top: t
                                    }), f.right.width(s - e - n).height(i).css({
                                        top: t,
                                        left: e + n
                                    }), f.bottom.width(s).height(o - i - t).css({
                                        top: t + i
                                    })
                                };
                            for (r.globalBind("resize", function() {
                                    g()
                                }), c = 0, d = m.length; d > c; c++) f[m[c]] = e('<div class="mejs-fullscreen-hover" />').appendTo(r.container).mouseover(p).hide();
                            a.on("mouseover", function() {
                                if (!r.isFullScreen) {
                                    var e = a.offset(),
                                        n = t.container.offset();
                                    s.positionFullscreenButton(e.left - n.left, e.top - n.top, !1), a.css("pointer-events", "none"), r.controls.css("pointer-events", "none"), r.media.addEventListener("click", r.clickToPlayPauseCallback);
                                    for (c in f) f[c].show();
                                    g(), h = !0
                                }
                            }), s.addEventListener("fullscreenchange", function() {
                                r.isFullScreen = !r.isFullScreen, r.isFullScreen ? r.media.removeEventListener("click", r.clickToPlayPauseCallback) : r.media.addEventListener("click", r.clickToPlayPauseCallback), p()
                            }), r.globalBind("mousemove", function(e) {
                                if (h) {
                                    var t = a.offset();
                                    (e.pageY < t.top || e.pageY > t.top + a.outerHeight(!0) || e.pageX < t.left || e.pageX > t.left + a.outerWidth(!0)) && (a.css("pointer-events", ""), r.controls.css("pointer-events", ""), h = !1)
                                }
                            })
                        } else a.on("mouseover", function() {
                            null !== l && (clearTimeout(l), delete l);
                            var e = a.offset(),
                                n = t.container.offset();
                            s.positionFullscreenButton(e.left - n.left, e.top - n.top, !0)
                        }).on("mouseout", function() {
                            null !== l && (clearTimeout(l), delete l), l = setTimeout(function() {
                                s.hideFullscreenButton()
                            }, 1500)
                        })
                    }
                    t.fullscreenBtn = a, r.globalBind("keydown", function(e) {
                        (mejs.MediaFeatures.hasTrueNativeFullScreen && mejs.MediaFeatures.isFullScreen() || r.isFullScreen) && 27 == e.keyCode && t.exitFullScreen()
                    })
                }
            },
            cleanfullscreen: function(e) {
                e.exitFullScreen()
            },
            containerSizeTimeout: null,
            enterFullScreen: function() {
                var t = this;
                if ("native" === t.media.pluginType || !mejs.MediaFeatures.isFirefox && !t.options.usePluginFullScreen) {
                    if (e(document.documentElement).addClass("mejs-fullscreen"), normalHeight = t.container.height(), normalWidth = t.container.width(), "native" === t.media.pluginType)
                        if (mejs.MediaFeatures.hasTrueNativeFullScreen) mejs.MediaFeatures.requestFullScreen(t.container[0]), t.isInIframe && setTimeout(function i() {
                            t.isNativeFullScreen && (e(window).width() !== screen.width ? t.exitFullScreen() : setTimeout(i, 500))
                        }, 500);
                        else if (mejs.MediaFeatures.hasSemiNativeFullScreen) return t.media.webkitEnterFullscreen(), void 0;
                    if (t.isInIframe) {
                        var n = t.options.newWindowCallback(this);
                        if ("" !== n) {
                            if (!mejs.MediaFeatures.hasTrueNativeFullScreen) return t.pause(), window.open(n, t.id, "top=0,left=0,width=" + screen.availWidth + ",height=" + screen.availHeight + ",resizable=yes,scrollbars=no,status=no,toolbar=no"), void 0;
                            setTimeout(function() {
                                t.isNativeFullScreen || (t.pause(), window.open(n, t.id, "top=0,left=0,width=" + screen.availWidth + ",height=" + screen.availHeight + ",resizable=yes,scrollbars=no,status=no,toolbar=no"))
                            }, 250)
                        }
                    }
                    t.container.addClass("mejs-container-fullscreen").width("100%").height("100%"), t.containerSizeTimeout = setTimeout(function() {
                        t.container.css({
                            width: "100%",
                            height: "100%"
                        }), t.setControlsSize()
                    }, 500), "native" === t.media.pluginType ? t.$media.width("100%").height("100%") : (t.container.find(".mejs-shim").width("100%").height("100%"), t.media.setVideoSize(e(window).width(), e(window).height())), t.layers.children("div").width("100%").height("100%"), t.fullscreenBtn && t.fullscreenBtn.removeClass("mejs-fullscreen").addClass("mejs-unfullscreen"), t.setControlsSize(), t.isFullScreen = !0
                }
            },
            exitFullScreen: function() {
                var t = this;
                return clearTimeout(t.containerSizeTimeout), "native" !== t.media.pluginType && mejs.MediaFeatures.isFirefox ? (t.media.setFullscreen(!1), void 0) : (mejs.MediaFeatures.hasTrueNativeFullScreen && (mejs.MediaFeatures.isFullScreen() || t.isFullScreen) && mejs.MediaFeatures.cancelFullScreen(), e(document.documentElement).removeClass("mejs-fullscreen"), t.container.removeClass("mejs-container-fullscreen").width(normalWidth).height(normalHeight), "native" === t.media.pluginType ? t.$media.width(normalWidth).height(normalHeight) : (t.container.find(".mejs-shim").width(normalWidth).height(normalHeight), t.media.setVideoSize(normalWidth, normalHeight)), t.layers.children("div").width(normalWidth).height(normalHeight), t.fullscreenBtn.removeClass("mejs-unfullscreen").addClass("mejs-fullscreen"), t.setControlsSize(), t.isFullScreen = !1, void 0)
            }
        })
    }(mejs.$),
    function(e) {
        e.extend(mejs.MepDefaults, {
            startLanguage: "",
            tracksText: mejs.i18n.t("Captions/Subtitles"),
            hideCaptionsButtonWhenEmpty: !0,
            toggleCaptionsButtonWhenOnlyOne: !1,
            slidesSelector: ""
        }), e.extend(MediaElementPlayer.prototype, {
            hasChapters: !1,
            buildtracks: function(t, n, i, s) {
                if (0 != t.tracks.length) {
                    var o, r = this;
                    if (r.domNode.textTracks)
                        for (var o = r.domNode.textTracks.length - 1; o >= 0; o--) r.domNode.textTracks[o].mode = "hidden";
                    t.chapters = e('<div class="mejs-chapters mejs-layer"></div>').prependTo(i).hide(), t.captions = e('<div class="mejs-captions-layer mejs-layer"><div class="mejs-captions-position mejs-captions-position-hover"><span class="mejs-captions-text"></span></div></div>').prependTo(i).hide(), t.captionsText = t.captions.find(".mejs-captions-text"), t.captionsButton = e('<div class="mejs-button mejs-captions-button"><button type="button" aria-controls="' + r.id + '" title="' + r.options.tracksText + '" aria-label="' + r.options.tracksText + '"></button><div class="mejs-captions-selector"><ul><li><input type="radio" name="' + t.id + '_captions" id="' + t.id + '_captions_none" value="none" checked="checked" /><label for="' + t.id + '_captions_none">' + mejs.i18n.t("None") + "</label></li></ul></div></div>").appendTo(n);
                    var a = 0;
                    for (o = 0; o < t.tracks.length; o++) "subtitles" == t.tracks[o].kind && a++;
                    for (r.options.toggleCaptionsButtonWhenOnlyOne && 1 == a ? t.captionsButton.on("click", function() {
                            if (null == t.selectedTrack) var e = t.tracks[0].srclang;
                            else var e = "none";
                            t.setTrack(e)
                        }) : t.captionsButton.hover(function() {
                            e(this).find(".mejs-captions-selector").css("visibility", "visible")
                        }, function() {
                            e(this).find(".mejs-captions-selector").css("visibility", "hidden")
                        }).on("click", "input[type=radio]", function() {
                            lang = this.value, t.setTrack(lang)
                        }), t.options.alwaysShowControls ? t.container.find(".mejs-captions-position").addClass("mejs-captions-position-hover") : t.container.bind("controlsshown", function() {
                            t.container.find(".mejs-captions-position").addClass("mejs-captions-position-hover")
                        }).bind("controlshidden", function() {
                            s.paused || t.container.find(".mejs-captions-position").removeClass("mejs-captions-position-hover")
                        }), t.trackToLoad = -1, t.selectedTrack = null, t.isLoadingTrack = !1, o = 0; o < t.tracks.length; o++) "subtitles" == t.tracks[o].kind && t.addTrackButton(t.tracks[o].srclang, t.tracks[o].label);
                    t.loadNextTrack(), s.addEventListener("timeupdate", function() {
                        t.displayCaptions()
                    }, !1), "" != t.options.slidesSelector && (t.slidesContainer = e(t.options.slidesSelector), s.addEventListener("timeupdate", function() {
                        t.displaySlides()
                    }, !1)), s.addEventListener("loadedmetadata", function() {
                        t.displayChapters()
                    }, !1), t.container.hover(function() {
                        t.hasChapters && (t.chapters.css("visibility", "visible"), t.chapters.fadeIn(200).height(t.chapters.find(".mejs-chapter").outerHeight()))
                    }, function() {
                        t.hasChapters && !s.paused && t.chapters.fadeOut(200, function() {
                            e(this).css("visibility", "hidden"), e(this).css("display", "block")
                        })
                    }), null !== t.node.getAttribute("autoplay") && t.chapters.css("visibility", "hidden")
                }
            },
            setTrack: function(e) {
                var t, n = this;
                if ("none" == e) n.selectedTrack = null, n.captionsButton.removeClass("mejs-captions-enabled");
                else
                    for (t = 0; t < n.tracks.length; t++)
                        if (n.tracks[t].srclang == e) {
                            null == n.selectedTrack && n.captionsButton.addClass("mejs-captions-enabled"), n.selectedTrack = n.tracks[t], n.captions.attr("lang", n.selectedTrack.srclang), n.displayCaptions();
                            break
                        }
            },
            loadNextTrack: function() {
                var e = this;
                e.trackToLoad++, e.trackToLoad < e.tracks.length ? (e.isLoadingTrack = !0, e.loadTrack(e.trackToLoad)) : (e.isLoadingTrack = !1, e.checkForTracks())
            },
            loadTrack: function(t) {
                var n = this,
                    i = n.tracks[t],
                    s = function() {
                        i.isLoaded = !0, n.enableTrackButton(i.srclang, i.label), n.loadNextTrack()
                    };
                e.ajax({
                    url: i.src,
                    dataType: "text",
                    success: function(e) {
                        i.entries = "string" == typeof e && /<tt\s+xml/gi.exec(e) ? mejs.TrackFormatParser.dfxp.parse(e) : mejs.TrackFormatParser.webvvt.parse(e), s(), "chapters" == i.kind && n.media.addEventListener("play", function() {
                            n.media.duration > 0 && n.displayChapters(i)
                        }, !1), "slides" == i.kind && n.setupSlides(i)
                    },
                    error: function() {
                        n.loadNextTrack()
                    }
                })
            },
            enableTrackButton: function(t, n) {
                var i = this;
                "" === n && (n = mejs.language.codes[t] || t), i.captionsButton.find("input[value=" + t + "]").prop("disabled", !1).siblings("label").html(n), i.options.startLanguage == t && e("#" + i.id + "_captions_" + t).click(), i.adjustLanguageBox()
            },
            addTrackButton: function(t, n) {
                var i = this;
                "" === n && (n = mejs.language.codes[t] || t), i.captionsButton.find("ul").append(e('<li><input type="radio" name="' + i.id + '_captions" id="' + i.id + "_captions_" + t + '" value="' + t + '" disabled="disabled" /><label for="' + i.id + "_captions_" + t + '">' + n + " (loading)</label></li>")), i.adjustLanguageBox(), i.container.find(".mejs-captions-translations option[value=" + t + "]").remove()
            },
            adjustLanguageBox: function() {
                var e = this;
                e.captionsButton.find(".mejs-captions-selector").height(e.captionsButton.find(".mejs-captions-selector ul").outerHeight(!0) + e.captionsButton.find(".mejs-captions-translations").outerHeight(!0))
            },
            checkForTracks: function() {
                var e = this,
                    t = !1;
                if (e.options.hideCaptionsButtonWhenEmpty) {
                    for (i = 0; i < e.tracks.length; i++)
                        if ("subtitles" == e.tracks[i].kind) {
                            t = !0;
                            break
                        }
                    t || (e.captionsButton.hide(), e.setControlsSize())
                }
            },
            displayCaptions: function() {
                if ("undefined" != typeof this.tracks) {
                    var e, t = this,
                        n = t.selectedTrack;
                    if (null != n && n.isLoaded) {
                        for (e = 0; e < n.entries.times.length; e++)
                            if (t.media.currentTime >= n.entries.times[e].start && t.media.currentTime <= n.entries.times[e].stop) return t.captionsText.html(n.entries.text[e]), t.captions.show().height(0), void 0;
                        t.captions.hide()
                    } else t.captions.hide()
                }
            },
            setupSlides: function(e) {
                var t = this;
                t.slides = e, t.slides.entries.imgs = [t.slides.entries.text.length], t.showSlide(0)
            },
            showSlide: function(t) {
                if ("undefined" != typeof this.tracks && "undefined" != typeof this.slidesContainer) {
                    var n = this,
                        i = n.slides.entries.text[t],
                        s = n.slides.entries.imgs[t];
                    "undefined" == typeof s || "undefined" == typeof s.fadeIn ? n.slides.entries.imgs[t] = s = e('<img src="' + i + '">').on("load", function() {
                        s.appendTo(n.slidesContainer).hide().fadeIn().siblings(":visible").fadeOut()
                    }) : s.is(":visible") || s.is(":animated") || s.fadeIn().siblings(":visible").fadeOut()
                }
            },
            displaySlides: function() {
                if ("undefined" != typeof this.slides) {
                    var e, t = this,
                        n = t.slides;
                    for (e = 0; e < n.entries.times.length; e++)
                        if (t.media.currentTime >= n.entries.times[e].start && t.media.currentTime <= n.entries.times[e].stop) return t.showSlide(e), void 0
                }
            },
            displayChapters: function() {
                var e, t = this;
                for (e = 0; e < t.tracks.length; e++)
                    if ("chapters" == t.tracks[e].kind && t.tracks[e].isLoaded) {
                        t.drawChapters(t.tracks[e]), t.hasChapters = !0;
                        break
                    }
            },
            drawChapters: function(t) {
                var n, i, s = this,
                    o = 0,
                    r = 0;
                for (s.chapters.empty(), n = 0; n < t.entries.times.length; n++) i = t.entries.times[n].stop - t.entries.times[n].start, o = Math.floor(i / s.media.duration * 100), (o + r > 100 || n == t.entries.times.length - 1 && 100 > o + r) && (o = 100 - r), s.chapters.append(e('<div class="mejs-chapter" rel="' + t.entries.times[n].start + '" style="left: ' + r.toString() + "%;width: " + o.toString() + '%;"><div class="mejs-chapter-block' + (n == t.entries.times.length - 1 ? " mejs-chapter-block-last" : "") + '"><span class="ch-title">' + t.entries.text[n] + '</span><span class="ch-time">' + mejs.Utility.secondsToTimeCode(t.entries.times[n].start) + "&ndash;" + mejs.Utility.secondsToTimeCode(t.entries.times[n].stop) + "</span></div></div>")), r += o;
                s.chapters.find("div.mejs-chapter").click(function() {
                    s.media.setCurrentTime(parseFloat(e(this).attr("rel"))), s.media.paused && s.media.play()
                }), s.chapters.show()
            }
        }), mejs.language = {
            codes: {
                af: "Afrikaans",
                sq: "Albanian",
                ar: "Arabic",
                be: "Belarusian",
                bg: "Bulgarian",
                ca: "Catalan",
                zh: "Chinese",
                "zh-cn": "Chinese Simplified",
                "zh-tw": "Chinese Traditional",
                hr: "Croatian",
                cs: "Czech",
                da: "Danish",
                nl: "Dutch",
                en: "English",
                et: "Estonian",
                tl: "Filipino",
                fi: "Finnish",
                fr: "French",
                gl: "Galician",
                de: "German",
                el: "Greek",
                ht: "Haitian Creole",
                iw: "Hebrew",
                hi: "Hindi",
                hu: "Hungarian",
                is: "Icelandic",
                id: "Indonesian",
                ga: "Irish",
                it: "Italian",
                ja: "Japanese",
                ko: "Korean",
                lv: "Latvian",
                lt: "Lithuanian",
                mk: "Macedonian",
                ms: "Malay",
                mt: "Maltese",
                no: "Norwegian",
                fa: "Persian",
                pl: "Polish",
                pt: "Portuguese",
                ro: "Romanian",
                ru: "Russian",
                sr: "Serbian",
                sk: "Slovak",
                sl: "Slovenian",
                es: "Spanish",
                sw: "Swahili",
                sv: "Swedish",
                tl: "Tagalog",
                th: "Thai",
                tr: "Turkish",
                uk: "Ukrainian",
                vi: "Vietnamese",
                cy: "Welsh",
                yi: "Yiddish"
            }
        }, mejs.TrackFormatParser = {
            webvvt: {
                pattern_identifier: /^([a-zA-z]+-)?[0-9]+$/,
                pattern_timecode: /^([0-9]{2}:[0-9]{2}:[0-9]{2}([,.][0-9]{1,3})?) --\> ([0-9]{2}:[0-9]{2}:[0-9]{2}([,.][0-9]{3})?)(.*)$/,
                parse: function(t) {
                    for (var n, i, s = 0, o = mejs.TrackFormatParser.split2(t, /\r?\n/), r = {
                            text: [],
                            times: []
                        }; s < o.length; s++)
                        if (this.pattern_identifier.exec(o[s]) && (s++, n = this.pattern_timecode.exec(o[s]), n && s < o.length)) {
                            for (s++, i = o[s], s++;
                                "" !== o[s] && s < o.length;) i = i + "\n" + o[s], s++;
                            i = e.trim(i).replace(/(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/gi, "<a href='$1' target='_blank'>$1</a>"), r.text.push(i), r.times.push({
                                start: 0 == mejs.Utility.convertSMPTEtoSeconds(n[1]) ? .2 : mejs.Utility.convertSMPTEtoSeconds(n[1]),
                                stop: mejs.Utility.convertSMPTEtoSeconds(n[3]),
                                settings: n[5]
                            })
                        }
                    return r
                }
            },
            dfxp: {
                parse: function(t) {
                    t = e(t).filter("tt");
                    var n, i, s = 0,
                        o = t.children("div").eq(0),
                        r = o.find("p"),
                        a = t.find("#" + o.attr("style")),
                        l = {
                            text: [],
                            times: []
                        };
                    if (a.length) {
                        var u = a.removeAttr("id").get(0).attributes;
                        if (u.length)
                            for (n = {}, s = 0; s < u.length; s++) n[u[s].name.split(":")[1]] = u[s].value
                    }
                    for (s = 0; s < r.length; s++) {
                        var c, d = {
                            start: null,
                            stop: null,
                            style: null
                        };
                        if (r.eq(s).attr("begin") && (d.start = mejs.Utility.convertSMPTEtoSeconds(r.eq(s).attr("begin"))), !d.start && r.eq(s - 1).attr("end") && (d.start = mejs.Utility.convertSMPTEtoSeconds(r.eq(s - 1).attr("end"))), r.eq(s).attr("end") && (d.stop = mejs.Utility.convertSMPTEtoSeconds(r.eq(s).attr("end"))), !d.stop && r.eq(s + 1).attr("begin") && (d.stop = mejs.Utility.convertSMPTEtoSeconds(r.eq(s + 1).attr("begin"))), n) {
                            c = "";
                            for (var h in n) c += h + ":" + n[h] + ";"
                        }
                        c && (d.style = c), 0 == d.start && (d.start = .2), l.times.push(d), i = e.trim(r.eq(s).html()).replace(/(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/gi, "<a href='$1' target='_blank'>$1</a>"), l.text.push(i), 0 == l.times.start && (l.times.start = 2)
                    }
                    return l
                }
            },
            split2: function(e, t) {
                return e.split(t)
            }
        }, 3 != "x\n\ny".split(/\n/gi).length && (mejs.TrackFormatParser.split2 = function(e, t) {
            var n, i = [],
                s = "";
            for (n = 0; n < e.length; n++) s += e.substring(n, n + 1), t.test(s) && (i.push(s.replace(t, "")), s = "");
            return i.push(s), i
        })
    }(mejs.$),
    function(e) {
        e.extend(mejs.MepDefaults, {
            contextMenuItems: [{
                render: function(e) {
                    return "undefined" == typeof e.enterFullScreen ? null : e.isFullScreen ? mejs.i18n.t("Turn off Fullscreen") : mejs.i18n.t("Go Fullscreen")
                },
                click: function(e) {
                    e.isFullScreen ? e.exitFullScreen() : e.enterFullScreen()
                }
            }, {
                render: function(e) {
                    return e.media.muted ? mejs.i18n.t("Unmute") : mejs.i18n.t("Mute")
                },
                click: function(e) {
                    e.media.muted ? e.setMuted(!1) : e.setMuted(!0)
                }
            }, {
                isSeparator: !0
            }, {
                render: function() {
                    return mejs.i18n.t("Download Video")
                },
                click: function(e) {
                    window.location.href = e.media.currentSrc
                }
            }]
        }), e.extend(MediaElementPlayer.prototype, {
            buildcontextmenu: function(t) {
                t.contextMenu = e('<div class="mejs-contextmenu"></div>').appendTo(e("body")).hide(), t.container.bind("contextmenu", function(e) {
                    return t.isContextMenuEnabled ? (e.preventDefault(), t.renderContextMenu(e.clientX - 1, e.clientY - 1), !1) : void 0
                }), t.container.bind("click", function() {
                    t.contextMenu.hide()
                }), t.contextMenu.bind("mouseleave", function() {
                    t.startContextMenuTimer()
                })
            },
            cleancontextmenu: function(e) {
                e.contextMenu.remove()
            },
            isContextMenuEnabled: !0,
            enableContextMenu: function() {
                this.isContextMenuEnabled = !0
            },
            disableContextMenu: function() {
                this.isContextMenuEnabled = !1
            },
            contextMenuTimeout: null,
            startContextMenuTimer: function() {
                var e = this;
                e.killContextMenuTimer(), e.contextMenuTimer = setTimeout(function() {
                    e.hideContextMenu(), e.killContextMenuTimer()
                }, 750)
            },
            killContextMenuTimer: function() {
                var e = this.contextMenuTimer;
                null != e && (clearTimeout(e), delete e, e = null)
            },
            hideContextMenu: function() {
                this.contextMenu.hide()
            },
            renderContextMenu: function(t, n) {
                for (var i = this, s = "", o = i.options.contextMenuItems, r = 0, a = o.length; a > r; r++)
                    if (o[r].isSeparator) s += '<div class="mejs-contextmenu-separator"></div>';
                    else {
                        var l = o[r].render(i);
                        null != l && (s += '<div class="mejs-contextmenu-item" data-itemindex="' + r + '" id="element-' + 1e6 * Math.random() + '">' + l + "</div>")
                    }
                i.contextMenu.empty().append(e(s)).css({
                    top: n,
                    left: t
                }).show(), i.contextMenu.find(".mejs-contextmenu-item").each(function() {
                    var t = e(this),
                        n = parseInt(t.data("itemindex"), 10),
                        s = i.options.contextMenuItems[n];
                    "undefined" != typeof s.show && s.show(t, i), t.click(function() {
                        "undefined" != typeof s.click && s.click(i), i.contextMenu.hide()
                    })
                }), setTimeout(function() {
                    i.killControlsTimer("rev3")
                }, 100)
            }
        })
    }(mejs.$),
    function(e) {
        e.extend(mejs.MepDefaults, {
            postrollCloseText: mejs.i18n.t("Close")
        }), e.extend(MediaElementPlayer.prototype, {
            buildpostroll: function(t, n, i) {
                var s = this,
                    o = s.container.find('link[rel="postroll"]').attr("href");
                "undefined" != typeof o && (t.postroll = e('<div class="mejs-postroll-layer mejs-layer"><a class="mejs-postroll-close" onclick="$(this).parent().hide();return false;">' + s.options.postrollCloseText + '</a><div class="mejs-postroll-layer-content"></div></div>').prependTo(i).hide(), s.media.addEventListener("ended", function() {
                    e.ajax({
                        dataType: "html",
                        url: o,
                        success: function(e) {
                            i.find(".mejs-postroll-layer-content").html(e)
                        }
                    }), t.postroll.show()
                }, !1))
            }
        })
    }(mejs.$);