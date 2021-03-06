function initMobileNav() {
    $(".menu-mobile-toggle").click(function(t) {
        t.preventDefault(), $(".menu, .menu-mobile-toggle").toggleClass("is-active")
    })
}

function isIE(t) {
    return t = t || navigator.userAgent, t.indexOf("MSIE ") > -1 || t.indexOf("Trident/") > -1
}

function initNavHide() {
    var t = 0,
        e = $(window),
        n = $(".menu, .subnav");
    e.on("scroll", function() {
        var i = e.scrollTop();
        i > t && $(document).scrollTop() >= 300 ? (n.addClass("hidden"), t = i) : (n.removeClass("hidden"), t = i)
    })
}

function subnavIndicators() {
    var t = document.querySelector(".subnav-container"),
        e = t.scrollWidth - t.clientWidth,
        n = $(".subnav-scroll-indicator--left"),
        i = $(".subnav-scroll-indicator--right"),
        o = $(".subnav-container").scrollLeft();
    t.scrollWidth == t.clientWidth ? (n.addClass("is-hidden"), i.addClass("is-hidden")) : o <= 0 ? (n.addClass("is-hidden"), i.removeClass("is-hidden")) : o >= e ? (i.addClass("is-hidden"), n.removeClass("is-hidden"), $(".subnav__scroll-indicator").removeClass("scrolled")) : (n.removeClass("is-hidden"), i.removeClass("is-hidden"))
}

function toggleSection(t) {
    var e = $(t + "-btn"),
        n = $(t + "-box");
    e.click(function(t) {
        t.stopPropagation(), t.preventDefault(), $(this).toggleClass("is-active"), $(this).hasClass("is-active") ? $(n).css("max-height", $(n).get(0).scrollHeight) : $(n).css("max-height", 0)
    })
}

function sectionJump() {
    $("a.btn").click(function(t) {
        var e = $("html").find(this).attr("href");
        "#" == e[0] && (t.preventDefault(), t.stopPropagation(), $("html, body").animate({
            scrollTop: $(e).offset().top
        }, 900))
    })
}

function caseTeaseNext() {
    var t = $(".cta-button-right");
    t.waypoint({
        handler: function(e) {
            "down" === e ? t.addClass("is-expanded") : t.removeClass("is-expanded")
        },
        offset: "bottom-in-view"
    })
}

function scrollReveal() {
    window.sr = ScrollReveal();
    var t = {
            duration: 700,
            distance: "30%",
            easing: "ease-in-out",
            origin: "top",
            scale: 1,
            viewFactor: .5
        },
        e = {
            duration: 700,
            distance: "30%",
            easing: "ease-in-out",
            origin: "right",
            scale: 1,
            viewFactor: .5
        },
        n = {
            duration: 700,
            distance: "30%",
            easing: "ease-in-out",
            origin: "bottom",
            scale: 1,
            viewFactor: .5
        },
        i = {
            duration: 700,
            distance: "30%",
            easing: "ease-in-out",
            origin: "left",
            scale: 1,
            viewFactor: .5
        },
        o = {
            duration: 700,
            distance: "40px",
            easing: "ease-in-out",
            origin: "bottom",
            scale: 1,
            viewFactor: .5
        },
        r = {
            duration: 700,
            distance: "0",
            easing: "ease-in-out",
            scale: 1,
            viewFactor: .5
        },
        a = {
            duration: 700,
            distance: "30px",
            easing: "ease-in-out",
            rotate: {
                z: 10
            },
            scale: 1.1,
            viewFactor: .6
        },
        s = {
            duration: 1e3,
            distance: "30%",
            easing: "ease-in-out",
            origin: "bottom",
            scale: 1,
            viewFactor: .1
        };
    sr.reveal(".post-referral-quote-icon", {
        duration: 1e3,
        distance: "40px",
        easing: "ease-out",
        origin: "top",
        scale: 1,
        viewFactor: .9
    }), sr.reveal(".pin", {
        duration: 700,
        distance: "40px",
        easing: "ease-out",
        origin: "top",
        scale: 1,
        viewFactor: .9
    }, 300), sr.reveal(".rokt-hiw .inner-block-image.absolute-top", {
        duration: 700,
        delay: 600,
        distance: "200px",
        easing: "ease-out",
        origin: "bottom",
        scale: 1,
        viewFactor: .1
    }, 300), sr.reveal(".card", {
        duration: 600,
        distance: "60px",
        easing: "ease-out",
        origin: "bottom",
        scale: 1,
        viewFactor: .5,
        beforeReveal: function(t) {
            t.classList.add("is-visible")
        }
    }, 150), sr.reveal(".inner-block-content", o), sr.reveal(".post-content"), sr.reveal(".sr-delay", {
        delay: 200
    }), sr.reveal(".sr-delay-double", {
        delay: 400
    }), sr.reveal(".sr-delay-tripple", {
        delay: 600
    }), sr.reveal(".sr-half-view", {
        viewFactor: .5
    }), sr.reveal(".sr-reveal", r), sr.reveal(".sr-rotate", a), sr.reveal(".sr-top", t), sr.reveal(".sr-right", e), sr.reveal(".sr-bottom", n), sr.reveal(".sr-left", i), sr.reveal(".sr-tall", s), sr.reveal(".post-breakdown-box", o, 200), sr.reveal(".sr-stagger-rotate", a, 200), sr.reveal(".sr-stagger-reveal", r, 200), sr.reveal(".sr-stagger-top", t, 200), sr.reveal(".sr-stagger-right", e, 200), sr.reveal(".sr-stagger-bottom", n, 150), sr.reveal(".sr-stagger-tall", s, 300), sr.reveal(".sr-stagger-left", i, 200), sr.reveal(".unbox-forklift .inner-block-image:nth-of-type(1)", {
        distance: "50px",
        origin: "bottom"
    }), sr.reveal(".unbox-forklift .inner-block-image:nth-of-type(2)", {
        distance: "100px",
        origin: "left",
        delay: "500"
    }), sr.reveal(".unbox-forklift .inner-block-image:nth-of-type(3)", {
        distance: "50px",
        origin: "right",
        delay: "1000"
    }), sr.reveal(".unbox-forklift .inner-block-image:nth-of-type(4)", {
        distance: "20px",
        origin: "top",
        delay: "1500"
    })
}

function contactCardFlip() {
    if ($("body").find(".contact-letter").length && !isIE()) {
        var t = $(".contact-letter");
        t.on("click", function() {
            t.toggleClass("is-flipped")
        }), new Waypoint({
            element: t,
            handler: function(e) {
                "down" == e && t.addClass("is-flipped")
            },
            offset: "25%"
        })
    }
}

function videoPlay() {
    $("video").each(function(t, e) {
        $(this).hasClass("marquee__video") || new Waypoint.Inview({
            element: $(this),
            enter: function() {
                e.play()
            },
            exited: function() {
                e.pause()
            }
        })
    })
}

function imageRatio() {
    $(".lazy-ratio").each(function() {
        var t = $(this),
            e = 100 * parseFloat(t.css("width")) / (parseFloat(t.parent().css("width")) - (parseFloat(t.parent().css("padding-left")) + parseFloat(t.parent().css("padding-right")))),
            n = (this.dataset.height / this.dataset.width * e).toFixed(2);
        n >= 0 && t.css("padding-bottom", n + "%").removeAttr("data-height data-width")
    })
}

function navCurrent() {
    var t = window.location.href.split("/"),
        e = t[t.length - 1],
        n = $('.subnav-item[href*="' + e + '"]');
    $("body").find(".subnav").length && n.addClass("is-active")
}

function introAnimate() {
    var t = $(".post-header-logo, .post-header-title, .post-header-tagline, .post-header-type");
    new TimelineMax({
        delay: .5
    }).staggerFromTo(t, 2, {
        autoAlpha: 0
    }, {
        autoAlpha: 1
    }, .25, 0).staggerFrom(t, .8, {
        y: "100px",
        ease: Power1.easeOut
    }, .15, 0)
}

! function() {
    "use strict";

    function t(i) {
        if (!i) throw new Error("No options passed to Waypoint constructor");
        if (!i.element) throw new Error("No element option passed to Waypoint constructor");
        if (!i.handler) throw new Error("No handler option passed to Waypoint constructor");
        this.key = "waypoint-" + e, this.options = t.Adapter.extend({}, t.defaults, i), this.element = this.options.element, this.adapter = new t.Adapter(this.element), this.callback = i.handler, this.axis = this.options.horizontal ? "horizontal" : "vertical", this.enabled = this.options.enabled, this.triggerPoint = null, this.group = t.Group.findOrCreate({
            name: this.options.group,
            axis: this.axis
        }), this.context = t.Context.findOrCreateByElement(this.options.context), t.offsetAliases[this.options.offset] && (this.options.offset = t.offsetAliases[this.options.offset]), this.group.add(this), this.context.add(this), n[this.key] = this, e += 1
    }
    var e = 0,
        n = {};
    t.prototype.queueTrigger = function(t) {
        this.group.queueTrigger(this, t)
    }, t.prototype.trigger = function(t) {
        this.enabled && this.callback && this.callback.apply(this, t)
    }, t.prototype.destroy = function() {
        this.context.remove(this), this.group.remove(this), delete n[this.key]
    }, t.prototype.disable = function() {
        return this.enabled = !1, this
    }, t.prototype.enable = function() {
        return this.context.refresh(), this.enabled = !0, this
    }, t.prototype.next = function() {
        return this.group.next(this)
    }, t.prototype.previous = function() {
        return this.group.previous(this)
    }, t.invokeAll = function(t) {
        var e = [];
        for (var i in n) e.push(n[i]);
        for (var o = 0, r = e.length; r > o; o++) e[o][t]()
    }, t.destroyAll = function() {
        t.invokeAll("destroy")
    }, t.disableAll = function() {
        t.invokeAll("disable")
    }, t.enableAll = function() {
        t.Context.refreshAll();
        for (var e in n) n[e].enabled = !0;
        return this
    }, t.refreshAll = function() {
        t.Context.refreshAll()
    }, t.viewportHeight = function() {
        return window.innerHeight || document.documentElement.clientHeight
    }, t.viewportWidth = function() {
        return document.documentElement.clientWidth
    }, t.adapters = [], t.defaults = {
        context: window,
        continuous: !0,
        enabled: !0,
        group: "default",
        horizontal: !1,
        offset: 0
    }, t.offsetAliases = {
        "bottom-in-view": function() {
            return this.context.innerHeight() - this.adapter.outerHeight()
        },
        "right-in-view": function() {
            return this.context.innerWidth() - this.adapter.outerWidth()
        }
    }, window.Waypoint = t
}(),
function() {
    "use strict";

    function t(t) {
        window.setTimeout(t, 1e3 / 60)
    }

    function e(t) {
        this.element = t, this.Adapter = o.Adapter, this.adapter = new this.Adapter(t), this.key = "waypoint-context-" + n, this.didScroll = !1, this.didResize = !1, this.oldScroll = {
            x: this.adapter.scrollLeft(),
            y: this.adapter.scrollTop()
        }, this.waypoints = {
            vertical: {},
            horizontal: {}
        }, t.waypointContextKey = this.key, i[t.waypointContextKey] = this, n += 1, o.windowContext || (o.windowContext = !0, o.windowContext = new e(window)), this.createThrottledScrollHandler(), this.createThrottledResizeHandler()
    }
    var n = 0,
        i = {},
        o = window.Waypoint,
        r = window.onload;
    e.prototype.add = function(t) {
        var e = t.options.horizontal ? "horizontal" : "vertical";
        this.waypoints[e][t.key] = t, this.refresh()
    }, e.prototype.checkEmpty = function() {
        var t = this.Adapter.isEmptyObject(this.waypoints.horizontal),
            e = this.Adapter.isEmptyObject(this.waypoints.vertical),
            n = this.element == this.element.window;
        t && e && !n && (this.adapter.off(".waypoints"), delete i[this.key])
    }, e.prototype.createThrottledResizeHandler = function() {
        function t() {
            e.handleResize(), e.didResize = !1
        }
        var e = this;
        this.adapter.on("resize.waypoints", function() {
            e.didResize || (e.didResize = !0, o.requestAnimationFrame(t))
        })
    }, e.prototype.createThrottledScrollHandler = function() {
        function t() {
            e.handleScroll(), e.didScroll = !1
        }
        var e = this;
        this.adapter.on("scroll.waypoints", function() {
            (!e.didScroll || o.isTouch) && (e.didScroll = !0, o.requestAnimationFrame(t))
        })
    }, e.prototype.handleResize = function() {
        o.Context.refreshAll()
    }, e.prototype.handleScroll = function() {
        var t = {},
            e = {
                horizontal: {
                    newScroll: this.adapter.scrollLeft(),
                    oldScroll: this.oldScroll.x,
                    forward: "right",
                    backward: "left"
                },
                vertical: {
                    newScroll: this.adapter.scrollTop(),
                    oldScroll: this.oldScroll.y,
                    forward: "down",
                    backward: "up"
                }
            };
        for (var n in e) {
            var i = e[n],
                o = i.newScroll > i.oldScroll,
                r = o ? i.forward : i.backward;
            for (var a in this.waypoints[n]) {
                var s = this.waypoints[n][a];
                if (null !== s.triggerPoint) {
                    var l = i.oldScroll < s.triggerPoint,
                        c = i.newScroll >= s.triggerPoint,
                        d = l && c,
                        u = !l && !c;
                    (d || u) && (s.queueTrigger(r), t[s.group.id] = s.group)
                }
            }
        }
        for (var h in t) t[h].flushTriggers();
        this.oldScroll = {
            x: e.horizontal.newScroll,
            y: e.vertical.newScroll
        }
    }, e.prototype.innerHeight = function() {
        return this.element == this.element.window ? o.viewportHeight() : this.adapter.innerHeight()
    }, e.prototype.remove = function(t) {
        delete this.waypoints[t.axis][t.key], this.checkEmpty()
    }, e.prototype.innerWidth = function() {
        return this.element == this.element.window ? o.viewportWidth() : this.adapter.innerWidth()
    }, e.prototype.destroy = function() {
        var t = [];
        for (var e in this.waypoints)
            for (var n in this.waypoints[e]) t.push(this.waypoints[e][n]);
        for (var i = 0, o = t.length; o > i; i++) t[i].destroy()
    }, e.prototype.refresh = function() {
        var t, e = this.element == this.element.window,
            n = e ? void 0 : this.adapter.offset(),
            i = {};
        this.handleScroll(), t = {
            horizontal: {
                contextOffset: e ? 0 : n.left,
                contextScroll: e ? 0 : this.oldScroll.x,
                contextDimension: this.innerWidth(),
                oldScroll: this.oldScroll.x,
                forward: "right",
                backward: "left",
                offsetProp: "left"
            },
            vertical: {
                contextOffset: e ? 0 : n.top,
                contextScroll: e ? 0 : this.oldScroll.y,
                contextDimension: this.innerHeight(),
                oldScroll: this.oldScroll.y,
                forward: "down",
                backward: "up",
                offsetProp: "top"
            }
        };
        for (var r in t) {
            var a = t[r];
            for (var s in this.waypoints[r]) {
                var l, c, d, u, h, f = this.waypoints[r][s],
                    p = f.options.offset,
                    g = f.triggerPoint,
                    v = 0,
                    w = null == g;
                f.element !== f.element.window && (v = f.adapter.offset()[a.offsetProp]), "function" == typeof p ? p = p.apply(f) : "string" == typeof p && (p = parseFloat(p), f.options.offset.indexOf("%") > -1 && (p = Math.ceil(a.contextDimension * p / 100))), l = a.contextScroll - a.contextOffset, f.triggerPoint = Math.floor(v + l - p), c = g < a.oldScroll, d = f.triggerPoint >= a.oldScroll, u = c && d, h = !c && !d, !w && u ? (f.queueTrigger(a.backward), i[f.group.id] = f.group) : !w && h ? (f.queueTrigger(a.forward), i[f.group.id] = f.group) : w && a.oldScroll >= f.triggerPoint && (f.queueTrigger(a.forward), i[f.group.id] = f.group)
            }
        }
        return o.requestAnimationFrame(function() {
            for (var t in i) i[t].flushTriggers()
        }), this
    }, e.findOrCreateByElement = function(t) {
        return e.findByElement(t) || new e(t)
    }, e.refreshAll = function() {
        for (var t in i) i[t].refresh()
    }, e.findByElement = function(t) {
        return i[t.waypointContextKey]
    }, window.onload = function() {
        r && r(), e.refreshAll()
    }, o.requestAnimationFrame = function(e) {
        (window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || t).call(window, e)
    }, o.Context = e
}(),
function() {
    "use strict";

    function t(t, e) {
        return t.triggerPoint - e.triggerPoint
    }

    function e(t, e) {
        return e.triggerPoint - t.triggerPoint
    }

    function n(t) {
        this.name = t.name, this.axis = t.axis, this.id = this.name + "-" + this.axis, this.waypoints = [], this.clearTriggerQueues(), i[this.axis][this.name] = this
    }
    var i = {
            vertical: {},
            horizontal: {}
        },
        o = window.Waypoint;
    n.prototype.add = function(t) {
        this.waypoints.push(t)
    }, n.prototype.clearTriggerQueues = function() {
        this.triggerQueues = {
            up: [],
            down: [],
            left: [],
            right: []
        }
    }, n.prototype.flushTriggers = function() {
        for (var n in this.triggerQueues) {
            var i = this.triggerQueues[n],
                o = "up" === n || "left" === n;
            i.sort(o ? e : t);
            for (var r = 0, a = i.length; a > r; r += 1) {
                var s = i[r];
                (s.options.continuous || r === i.length - 1) && s.trigger([n])
            }
        }
        this.clearTriggerQueues()
    }, n.prototype.next = function(e) {
        this.waypoints.sort(t);
        var n = o.Adapter.inArray(e, this.waypoints);
        return n === this.waypoints.length - 1 ? null : this.waypoints[n + 1]
    }, n.prototype.previous = function(e) {
        this.waypoints.sort(t);
        var n = o.Adapter.inArray(e, this.waypoints);
        return n ? this.waypoints[n - 1] : null
    }, n.prototype.queueTrigger = function(t, e) {
        this.triggerQueues[e].push(t)
    }, n.prototype.remove = function(t) {
        var e = o.Adapter.inArray(t, this.waypoints);
        e > -1 && this.waypoints.splice(e, 1)
    }, n.prototype.first = function() {
        return this.waypoints[0]
    }, n.prototype.last = function() {
        return this.waypoints[this.waypoints.length - 1]
    }, n.findOrCreate = function(t) {
        return i[t.axis][t.name] || new n(t)
    }, o.Group = n
}(),
function() {
    "use strict";

    function t(t) {
        this.$element = e(t)
    }
    var e = window.jQuery,
        n = window.Waypoint;
    e.each(["innerHeight", "innerWidth", "off", "offset", "on", "outerHeight", "outerWidth", "scrollLeft", "scrollTop"], function(e, n) {
        t.prototype[n] = function() {
            var t = Array.prototype.slice.call(arguments);
            return this.$element[n].apply(this.$element, t)
        }
    }), e.each(["extend", "inArray", "isEmptyObject"], function(n, i) {
        t[i] = e[i]
    }), n.adapters.push({
        name: "jquery",
        Adapter: t
    }), n.Adapter = t
}(),
function() {
    "use strict";

    function t(t) {
        return function() {
            var n = [],
                i = arguments[0];
            return t.isFunction(arguments[0]) && (i = t.extend({}, arguments[1]), i.handler = arguments[0]), this.each(function() {
                var o = t.extend({}, i, {
                    element: this
                });
                "string" == typeof o.context && (o.context = t(this).closest(o.context)[0]), n.push(new e(o))
            }), n
        }
    }
    var e = window.Waypoint;
    window.jQuery && (window.jQuery.fn.waypoint = t(window.jQuery)), window.Zepto && (window.Zepto.fn.waypoint = t(window.Zepto))
}(),
function() {
    "use strict";

    function t() {}

    function e(t) {
        this.options = n.Adapter.extend({}, e.defaults, t), this.axis = this.options.horizontal ? "horizontal" : "vertical", this.waypoints = [], this.element = this.options.element, this.createWaypoints()
    }
    var n = window.Waypoint;
    e.prototype.createWaypoints = function() {
        for (var t = {
                vertical: [{
                    down: "enter",
                    up: "exited",
                    offset: "100%"
                }, {
                    down: "entered",
                    up: "exit",
                    offset: "bottom-in-view"
                }, {
                    down: "exit",
                    up: "entered",
                    offset: 0
                }, {
                    down: "exited",
                    up: "enter",
                    offset: function() {
                        return -this.adapter.outerHeight()
                    }
                }],
                horizontal: [{
                    right: "enter",
                    left: "exited",
                    offset: "100%"
                }, {
                    right: "entered",
                    left: "exit",
                    offset: "right-in-view"
                }, {
                    right: "exit",
                    left: "entered",
                    offset: 0
                }, {
                    right: "exited",
                    left: "enter",
                    offset: function() {
                        return -this.adapter.outerWidth()
                    }
                }]
            }, e = 0, n = t[this.axis].length; n > e; e++) {
            var i = t[this.axis][e];
            this.createWaypoint(i)
        }
    }, e.prototype.createWaypoint = function(t) {
        var e = this;
        this.waypoints.push(new n({
            context: this.options.context,
            element: this.options.element,
            enabled: this.options.enabled,
            handler: function(t) {
                return function(n) {
                    e.options[t[n]].call(e, n)
                }
            }(t),
            offset: t.offset,
            horizontal: this.options.horizontal
        }))
    }, e.prototype.destroy = function() {
        for (var t = 0, e = this.waypoints.length; e > t; t++) this.waypoints[t].destroy();
        this.waypoints = []
    }, e.prototype.disable = function() {
        for (var t = 0, e = this.waypoints.length; e > t; t++) this.waypoints[t].disable()
    }, e.prototype.enable = function() {
        for (var t = 0, e = this.waypoints.length; e > t; t++) this.waypoints[t].enable()
    }, e.defaults = {
        context: window,
        enabled: !0,
        enter: t,
        entered: t,
        exit: t,
        exited: t
    }, n.Inview = e
}(),
function(t, e) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : t.Layzr = e()
}(this, function() {
    "use strict";
    var t = Object.assign || function(t) {
            for (var e = 1; e < arguments.length; e++) {
                var n = arguments[e];
                for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i])
            }
            return t
        },
        e = function() {
            function e(t, e) {
                return a[t] = a[t] || [], a[t].push(e), this
            }

            function n(t, n) {
                return n._once = !0, e(t, n), this
            }

            function i(t) {
                var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                return e ? a[t].splice(a[t].indexOf(e), 1) : delete a[t], this
            }

            function o(t) {
                for (var e = this, n = arguments.length, o = Array(n > 1 ? n - 1 : 0), r = 1; r < n; r++) o[r - 1] = arguments[r];
                var s = a[t] && a[t].slice();
                return s && s.forEach(function(n) {
                    n._once && i(t, n), n.apply(e, o)
                }), this
            }
            var r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                a = Object.create(null);
            return t({}, r, {
                on: e,
                once: n,
                off: i,
                emit: o
            })
        };
    return function() {
        function t() {
            return window.scrollY || window.pageYOffset
        }

        function n() {
            u = t(), i()
        }

        function i() {
            h || (window.requestAnimationFrame(function() {
                return l()
            }), h = !0)
        }

        function o(t) {
            return t.getBoundingClientRect().top + u
        }

        function r(t) {
            var e = u,
                n = e + p,
                i = o(t),
                r = i + t.offsetHeight,
                a = g.threshold / 100 * p;
            return r >= e - a && i <= n + a
        }

        function a(t) {
            if (y.emit("src:before", t), v && t.hasAttribute(g.srcset)) t.setAttribute("srcset", t.getAttribute(g.srcset));
            else {
                var e = w > 1 && t.getAttribute(g.retina);
                t.setAttribute("src", e || t.getAttribute(g.normal))
            }
            y.emit("src:after", t), [g.normal, g.retina, g.srcset].forEach(function(e) {
                return t.removeAttribute(e)
            }), c()
        }

        function s(t) {
            var e = t ? "addEventListener" : "removeEventListener";
            return ["scroll", "resize"].forEach(function(t) {
                return window[e](t, n)
            }), this
        }

        function l() {
            return p = window.innerHeight, f.forEach(function(t) {
                return r(t) && a(t)
            }), h = !1, this
        }

        function c() {
            return f = Array.prototype.slice.call(document.querySelectorAll("[" + g.normal + "]")), this
        }
        var d = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            u = t(),
            h = void 0,
            f = void 0,
            p = void 0,
            g = {
                normal: d.normal || "data-normal",
                retina: d.retina || "data-retina",
                srcset: d.srcset || "data-srcset",
                threshold: d.threshold || 0
            },
            v = document.body.classList.contains("srcset") || "srcset" in document.createElement("img"),
            w = window.devicePixelRatio || window.screen.deviceXDPI / window.screen.logicalXDPI,
            y = e({
                handlers: s,
                check: l,
                update: c
            });
        return y
    }
}), $(document).ready(function() {
    initMobileNav(), initNavHide(), caseTeaseNext(), imageRatio(), sectionJump(), contactCardFlip(), videoPlay(), navCurrent(), introAnimate(), console.log("Looking for this? https://github.com/GlitchWitchIO/boldux")
}), $("video").length && $(window).on("scroll", _.throttle(function() {
    Waypoint.refreshAll()
}, 1e3)), $(".subnav-scroll-indicator--left").on("click", function(t) {
    t.preventDefault(), $(".subnav-container").animate({
        scrollLeft: "-=150px"
    }, "normal")
}), $(".subnav-scroll-indicator--right").on("click", function(t) {
    t.preventDefault(), $(".subnav-container").animate({
        scrollLeft: "+=150px"
    }, "normal")
}), $(".subnav-container").scroll(function() {
    $("body").find(".subnav").length && subnavIndicators()
}), $(window).on("resize", function() {
    $("body").find(".subnav").length && subnavIndicators()
}), $(document).ready(function() {
    $("body").find(".subnav").length && subnavIndicators()
});
var instance = Layzr({
    threshold: 200
});
instance.on("src:after", function(t) {
    t.classList.contains("bg-image") && (t.style.backgroundImage = 'url("' + t.getAttribute("src") + '")', t.removeAttribute("src"))
}), document.addEventListener("DOMContentLoaded", function(t) {
    instance.update().check().handlers(!0), scrollReveal()
});
