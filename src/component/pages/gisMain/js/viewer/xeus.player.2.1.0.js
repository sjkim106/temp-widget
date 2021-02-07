/* eslint-disable no-unused-expressions,no-sequences,eqeqeq,no-mixed-operators,new-parens */
//2020-0826-0000
var console = window.console || {
    log: function () {
    }
};
// console.log("Xeus-Gate PlayerListItem VER: 2.1.0 2020-0826-0000");
const XeusGate = {
    Player: null, Source: null, Renderer: {}, debug: !1, Now: function () {
        return window.performance ? window.performance.now() / 1e3 : Date.now() / 1e3
    }, BrowserType: function () {
        var e = navigator.userAgent, t = "Unknown";
        return e.search("Edge") >= 0 ? t = "Edge" : e.search("Trident") >= 0 ? t = "Trident" : e.search("Whale") >= 0 || e.search("OPR") >= 0 || e.search("Chrome") >= 0 ? t = "Chrome" : e.search("Firefox") >= 0 && (t = "Firefox"), t
    }, ToHex: function (e) {
        return Array.prototype.map.call(e, function (e) {
            return ("00" + (255 & e).toString(16)).slice(-2)
        }).join(" ")
    }, Log: function (e) {
        this.debug && console.log(e)
    }, Queue: function () {
        var e = [], t = 0;
        this.getLength = function () {
            return e.length - t
        }, this.isEmpty = function () {
            return 0 == e.length
        }, this.enqueue = function (i) {
            e.length - t > this.capability && this.dequeue(), e.push(i)
        }, this.dequeue = function () {
            if (0 != e.length) {
                var i = e[t];
                return 2 * ++t >= e.length && (e = e.slice(t), t = 0), i
            }
        }, this.peek = function () {
            return e.length > 0 ? e[t] : void 0
        }
    }
};
XeusGate.Player = function () {
    var e = function (e, t) {
        for (var i in t) e.style[i] = t[i]
    }, t = function (e) {
        this.options = e || {}, this.options.browser = XeusGate.BrowserType(), this.options.debug && (XeusGate.debug = this.options.debug), this.options.codec && "auto" != this.options.codec || (this.options.codec = "h264"), this.options.reconnect || (this.options.reconnect = !0), this.options.timeout || (this.options.timeout = 20), this.playerElement = document.getElementById(this.options.playerId), this.playerVisible = !0;
        var t = this;
        document.addEventListener("visibilitychange", function () {
            "hidden" === document.visibilityState ? (t.playerVisible = !1, XeusGate.Log("PlayerListItem visibilitychange  hidden..."), t.options.videoElement && t.renderer && t.renderer.pause()) : (XeusGate.Log("PlayerListItem visibilitychange  visible..."), t.playerVisible = !0, t.options.videoElement && t.renderer && t.renderer.play())
        }), "h264" == this.options.codec ? (this.createVideoElement("video"), this.renderer = new XeusGate.Renderer.H264(this, this.options), XeusGate.Log("PlayerListItem create renderer : XeusGate.Renderer.H264")) : "mjpeg" == this.options.codec ? (this.createVideoElement("img"), this.renderer = new XeusGate.Renderer.MJPEG(this, this.options), XeusGate.Log("PlayerListItem create renderer : XeusGate.Renderer.MJPEG")) : XeusGate.Log("unsupported codec name: " + this.options.codec), this.createTextElement(), this.source = new XeusGate.Source(this, this.renderer, this.options), this.start()
    };
    return t.prototype.start = function () {
        this.renderer && this.source ? (this.renderer.start(), this.source.start(), XeusGate.Log("PlayerListItem started...")) : XeusGate.Log("PlayerListItem start: renderer or source is null.")
    }, t.prototype.isPlayerVisible = function () {
        return this.playerVisible
    }, t.prototype.showText = function (e) {
        this.options.spanElement.innerHTML = e, this.visible(this.options.textElement, !0)
    }, t.prototype.visible = function (e, t) {
        e.style.visibility = t ? "visible" : "hidden"
    }, t.prototype.createTextElement = function () {
        var t = document.createElement("div");
        e(t, {
            display: "block",
            width: "100%",
            height: "100%",
            position: "absolute",
            left: "0px",
            top: "0px",
            "text-align": "center",
            "background-color": "rgb(34, 34, 34)"
        });
        var i = document.createElement("div");
        e(i, {position: "relative", top: "50%", "margin-top": "-1em", "background-color": "rgb(34, 34, 34)"});
        var s = document.createElement("span");
        e(s, {
            "font-size": "13px",
            display: "block",
            color: "rgb(180, 180, 180)"
        }), i.appendChild(s), t.appendChild(i), this.playerElement.appendChild(t), this.options.textElement = t, this.options.spanElement = s, this.showText("연결을 시도합니다."), XeusGate.Log("PlayerListItem TextElement created...")
    }, t.prototype.createVideoElement = function (t) {
        var i = "100%", s = "100%";
        this.options.width && (i = this.options.width), this.options.heigh && (s = this.options.height);
        var o = document.createElement(t);
        "video" == t && (o.autoplay = !0, o.muted = !0, o.controls = !1, o.loop = !1, o.setAttribute("oncontextmenu", "return false;")), e(o, {
            'object-fit': 'fill',
            display: "block",
            width: i,
            height: s,
            left: "0px",
            top: "0px",
            transform: "translateZ(0)",
            "background-color": "rgb(34, 34, 34)"
        }), this.playerElement.appendChild(o), this.options.videoElement = o, XeusGate.Log("PlayerListItem VideoElement created...")
    }, t.prototype.moveto = function (e) {
        this.source && this.source.moveto(e)
    }, t.prototype.speed = function (e) {
        this.source && this.source.speed(e)
    }, t.prototype.pause = function () {
        this.source && this.source.pause()
    }, t.prototype.resume = function () {
        this.source && this.source.resume()
    }, t.prototype.forward = function () {
        this.source && this.source.forward()
    }, t.prototype.backward = function () {
        this.source && this.source.backward()
    }, t.prototype.close = function () {
        this.source && this.source.close(), this.renderer && this.renderer.close(), XeusGate.Log("PlayerListItem closed...")
    }, t.prototype.destroy = function () {
        this.close(), this.options.videoElement && (this.playerElement.removeChild(this.options.videoElement), this.options.videoElement = void 0), this.options.textElement && (this.playerElement.removeChild(this.options.textElement), this.options.textElement = void 0), this.source && this.source.destroy(), this.renderer && this.renderer.destroy(), XeusGate.Log("PlayerListItem destroyed...")
    }, t
}(),
    XeusGate.Source = function () {
    var e = function (e, t, i) {
        this.options = i || {}, this.socket = null, this.player = e, this.renderer = t, this.connectIntervalId = 0, this.retryCount = 0, this.message = "연결이 종료 되었습니다.", this.playing = !1
    };
    return e.prototype.start = function () {
        this.playing = !1, this.socket = new WebSocket(this.options.url), this.socket.binaryType = "arraybuffer", this.socket.onmessage = this.onMessage.bind(this), this.socket.onopen = this.onOpen.bind(this), this.socket.onerror = this.onClose.bind(this), this.socket.onclose = this.onClose.bind(this), XeusGate.Log("WsSource Started...")
    }, e.prototype.onOpen = function () {
        this.playing = !1;
        var e = '{"cmd":"open","cctvMgrNo":"' + this.options.cctvMgrNo + '","size":"' + this.options.size + '","bitrate":"' + this.options.bitrate + '","framerate":"' + this.options.framerate + '","userId":"' + this.options.userId + '", "evtType":"' + this.options.evtType + '", "timestamp":"' + this.options.timestamp + '", "speed":"' + this.options.speed + '", "codec":"' + this.options.codec + '", "src":"' + this.options.rtspUrl + '" }';
        XeusGate.Log(e), this.socket.send(e), this.retryCount = 0, this.connectIntervalId = setInterval(function () {
            this.player.showText("데이터 수신 대기중... (" + this.retryCount + "초)"), this.retryCount >= this.options.timeout && this.onClose(), this.retryCount++
        }.bind(this), 1e3)
    }, e.prototype.onClose = function () {
        XeusGate.Log("WsSource onClosing..."), this.playing = !1, clearInterval(this.connectIntervalId), this.player && (this.player.showText(this.message), this.player.close())
    }, e.prototype.onMessage = function (e) {
        if (0 == this.playing && (clearInterval(this.connectIntervalId), this.playing), this.renderer) {
            var t = new Uint8Array(e.data), i = t[0];
            if (110 == i) switch (t[1]) {
                case 11:
                    this.message = "카메라 정보 없음.";
                    break;
                case 12:
                    this.message = "영상 수신대기 초과.";
                    break;
                case 13:
                    this.message = "영상 연결요청 실패.";
                    break;
                case 14:
                    this.message = "Bridge 요청 오류.";
                    break;
                case 15:
                case 90:
                    this.message = "요청처리 실패.";
                    break;
                default:
                    this.message = "연결종료."
            } else 112 == i && this.renderer.feed(t.subarray(1))
        }
    }, e.prototype.moveto = function (e) {
        var t = '{"cmd":"playback","cctvMgrNo":"' + this.options.cctvMgrNo + '","mode":"GoTo","timestamp":"' + e + '"}';
        this.socket.readyState === this.socket.OPEN && this.socket.send(t)
    }, e.prototype.speed = function (e) {
        var t = '{"cmd":"playback","cctvMgrNo":"' + this.options.cctvMgrNo + '","mode":"Speed","speed":"' + e + '"}';
        this.socket.readyState === this.socket.OPEN && this.socket.send(t)
    }, e.prototype.pause = function () {
        var e = '{"cmd":"playback","cctvMgrNo":"' + this.options.cctvMgrNo + '","mode":"Pause"}';
        this.socket.readyState === this.socket.OPEN && this.socket.send(e)
    }, e.prototype.resume = function () {
        var e = '{"cmd":"playback","cctvMgrNo":"' + this.options.cctvMgrNo + '","mode":"Resume"}';
        this.socket.readyState === this.socket.OPEN && this.socket.send(e)
    }, e.prototype.forward = function () {
        var e = '{"cmd":"playback","cctvMgrNo":"' + this.options.cctvMgrNo + '","mode":"Forward"}';
        this.socket.readyState === this.socket.OPEN && this.socket.send(e)
    }, e.prototype.backward = function () {
        var e = '{"cmd":"playback","cctvMgrNo":"' + this.options.cctvMgrNo + '","mode":"Backward"}';
        this.socket.readyState === this.socket.OPEN && this.socket.send(e)
    }, e.prototype.close = function () {
        var e = '{"cmd":"close","cctvMgrNo":"' + this.options.cctvMgrNo + '","size":"' + this.options.size + '","bitrate":"' + this.options.bitrate + '","framerate":"' + this.options.framerate + '","userId":"' + this.options.userId + '", "evtType":"' + this.options.evtType + '", "timestamp":"' + this.options.timestamp + '", "speed":"' + this.options.speed + '", "codec":"' + this.options.codec + '", "src":"' + this.options.rtspUrl + '" }';
        this.socket.readyState === this.socket.OPEN && this.socket.send(e), clearInterval(this.connectIntervalId), this.retryCount = 0, this.playing, this.socket.close(), XeusGate.Log("WsSource closed...")
    }, e.prototype.destroy = function () {
        this.player = null, this.renderer = null, XeusGate.Log("WsSource destroyed...")
    }, e
}(),
    XeusGate.Renderer.H264 = function () {
    var e = function (e, t) {
        this.CLEAN_INTERVAL = 1e4, this.options = t || {}, this.player = e, this.mediaSource = null, this.sourceBuffer = null, this.mediaSourceReady = !1, this.initSegmentReady = !1, this.codecSupported = !0, this.initialized = !1, this.codec = null, this.queue = new Uint8Array, this.lastCleanUpTime = 0, this.lastCleanUpOffset = 0
    };
    return e.prototype.appendByteArray = function (e, t) {
        var i = new Uint8Array((0 | e.byteLength) + (0 | t.byteLength));
        return i.set(e, 0), i.set(t, 0 | e.byteLength), i
    }, e.prototype.start = function () {
        if (window.MediaSource = window.MediaSource || window.WebKitMediaSource, !!!window.MediaSource)
            return XeusGate.Log("Oops! Browser does not support media source extension."), void this.player.destroy();
        this.mediaSource = new MediaSource, this.options.videoElement.setAttribute("src", URL.createObjectURL(this.mediaSource)), this.mediaSource.addEventListener("sourceopen", this.onMSEOpen.bind(this)), this.mediaSource.addEventListener("sourceclose", this.onMSEClose.bind(this)), this.mediaSource.addEventListener("webkitsourceopen", this.onMSEOpen.bind(this)), this.mediaSource.addEventListener("webkitsourceclose", this.onMSEClose.bind(this)), XeusGate.Log("H264Renderer Started...")
    }, e.prototype.onMSEOpen = function () {
        this.mediaSourceReady = !0
    }, e.prototype.onMSEClose = function () {
        XeusGate.Log("H264Renderer onMSEClose..."), this.player.close()
    }, e.prototype.cleanUpBuffer = function () {
        if (this.options.videoElement.paused) XeusGate.Log("cleanUp video paused.. return"); else if (this.sourceBuffer.buffered && this.sourceBuffer.buffered.length) for (var e = 0; e < this.sourceBuffer.buffered.length; ++e) {
            var t = this.sourceBuffer.buffered.start(e), i = this.sourceBuffer.buffered.end(e),
                s = this.options.videoElement.currentTime, o = i - 20;
            t < o && !this.sourceBuffer.updating && (this.sourceBuffer.remove(this.lastCleanUpOffset, o), this.lastCleanUpOffset = t), XeusGate.Log("cleanUp curTime: " + s + " endTime: " + i + " offset:" + this.lastCleanUpOffset)
        }
    }, e.prototype.feed = function (e) {
        if (0 != e.byteLength) if (this.codecSupported) {
            var t = new Uint8Array(e);
            if (!this.initSegmentReady) {
                this.options.videoElement.pause();
                var i = String.fromCharCode.apply(null, t.subarray(0, 6));
                if (this.codec = 'video/mp4; codecs="avc1.' + i + '"', XeusGate.Log("H264Renderer codec: " + this.codec), !MediaSource.isTypeSupported(this.codec)) return this.codecSupported = !1, void XeusGate.Log("Video codec not supported. " + this.codec);
                this.queue = this.appendByteArray(this.queue, t.subarray(6)), this.initSegmentReady = !0
            }
            var s = this;
            if (this.initSegmentReady && this.mediaSourceReady) if (this.initialized) this.queue = this.appendByteArray(this.queue, t); else {
                var o = this.mediaSource.addSourceBuffer(this.codec);
                this.sourceBuffer = o, this.sourceBuffer.mode = "sequence", this.sourceBuffer.addEventListener("updateend", function () {
                    try {
                        0 == s.lastCleanUpTime ? s.lastCleanUpTime = Date.now() : s.options.videoElement.currentTime > 20 && Date.now() - s.lastCleanUpTime > s.CLEAN_INTERVAL && (s.cleanUpBuffer(), s.lastCleanUpTime = Date.now())
                    } catch (e) {

                    }
                }), this.initialized = !0, console.log("H264Renderer Initialized............. ")
            }
            this.initialized && ("visible" == this.options.textElement.style.visibility && (this.player.visible(this.options.textElement, !1), this.options.videoElement.paused && (this.options.videoElement.play(), XeusGate.Log("H264Renderer playing...."))), this.update())
        } else XeusGate.Log("Video codec not supported. " + this.codec)
    }, e.prototype.update = function () {
        if (this.queue.length) {
            try {
                this.sourceBuffer.updating || (this.sourceBuffer.appendBuffer(this.queue), this.queue = new Uint8Array)
            } catch (e) {
                XeusGate.Log(e.name + " : sourceBuffer.appendBuffer error")
            }
            try {
                var e = this.options.videoElement.currentTime;
                this.options.videoElement.ended;
                if (e > 10) {
                    var t = this.options.videoElement.buffered.end(0);
                    parseFloat(t) - parseFloat(e) < .03 ? (this.options.videoElement.pause(), XeusGate.Log("> etime-curtime<=0.03, paused. ctime: " + e + " eTime: " + t), parseFloat(e) >= parseFloat(t) && (this.options.videoElement.currentTime = parseFloat(t) - .03, XeusGate.Log("> curtime>endtime, (endtime-0.03): " + this.options.videoElement.currentTime))) : this.options.videoElement.paused && (this.options.videoElement.play(), XeusGate.Log("> etime-curtime>0.03, replayed. ctime: " + e + " eTime: " + t))
                }
            } catch (e) {
                XeusGate.Log(e.name + " : videoElement timecheck error")
            }
        }
    }, e.prototype.pause = function () {
        this.options.videoElement.pause()
    }, e.prototype.play = function () {
        this.options.videoElement.play()
    }, e.prototype.close = function () {
        if (this.mediaSource) {
            try {
                this.mediaSource.removeSourceBuffer(this.sourceBuffer), this.mediaSource.endOfStream()
            } catch (e) {
            }
            this.mediaSource = null
        }
        this.sourceBuffer = null, this.mseReady = !1, this.initialized = !1, this.lastCleanUpTime = 0, this.lastCleanUpOffset = 0, this.queue = null, this.mediaSourceReady = !1, this.initSegmentReady = !1, XeusGate.Log("H264Renderer closed...")
    }, e.prototype.destroy = function () {
        XeusGate.Log("H264Renderer destroyed...")
    }, e
}(),
    XeusGate.Renderer.MJPEG = function () {
    var e = [255, 217], t = function (e, t) {
        this.options = t || {}, this.imageElement = this.options.videoElement, this.player = e, this.isPlaying = !1, this.isDrawing = !1, this.jpegUrl = null, this.interval
    };
    return t.prototype.start = function () {
        this.isPlaying = !1, this.isDrawing = !1, this.jpegUrl = null, this.queue = new XeusGate.Queue, this.play(), XeusGate.Log("MjpegRenderer Started...")
    }, t.prototype.feed = function (e) {
        this.isPlaying && ("visible" == this.options.textElement.style.visibility && this.player.visible(this.options.textElement, !1), this.queue.enqueue(new Uint8Array(e)))
    }, t.prototype.render = function (t) {
        if (t) {
            var i = t.length, s = this;
            t[i - 2] === e[0] && t[i - 1] === e[1] && (s.isDrawing = !0, s.jpegUrl && URL.revokeObjectURL(s.jpegUrl), s.jpegUrl = URL.createObjectURL(new Blob([t], {type: "image/jpeg"})), s.imageElement.onload = function () {
                s.isDrawing = !1
            }, s.imageElement.setAttribute("src", s.jpegUrl))
        }
    }, t.prototype.pause = function () {
        this.interval && clearInterval(this.interval), this.isPlaying = !1
    }, t.prototype.play = function () {
        var e = this;
        this.interval = setInterval(function () {
            var t = e.queue.dequeue();
            e.render(t)
        }, 1e3 / e.DEFAULT_FPS), this.isPlaying = !0
    }, t.prototype.close = function () {
        this.isPlaying = !1, this.isDrawing = !1, this.jpegUrl = null, clearInterval(this.interval), XeusGate.Log("MjpegRenderer closed...")
    }, t.prototype.destroy = function () {
        XeusGate.Log("MjpegRenderer destroyed...")
    }, t
}();

const XeusPlayer = (_url, _cctvId, _elemId, _isRecord, _rtspUrl) => {

    // if(!_cctvId) {
    //     console.warn("XeusPlayer : cctvId not defined")
    //     return false
    // }

    if(!_elemId) {
        console.warn("XeusPlayer : elemId not defined")
        return false
    }

    return new XeusGate.Player({
        playerId: _elemId,
        url: _url,
        size: '',
        cctvMgrNo: _cctvId,
        userId: 'geomex1',
        evtType: '',
        timestamp :'',
        speed: _isRecord ? '10' : '',
        codec: 'h264',
        rtspUrl: _rtspUrl?_rtspUrl:'',
        debug: false
    });
}

export default XeusPlayer