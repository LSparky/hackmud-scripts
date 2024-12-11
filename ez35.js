function (context, args) { // t:#s.wayland.public
    if (!args) return
    var e = ['open', 'release', 'unlock'],
        g = {}, r, f = () => r = (args.t.call(g)).split('\n').pop()
    for (var i = 0; i < e.length; i++) {
        for (var j = 0; j < 10; j++) {
            g.ez_35 = e[i]
            g.digit = j
            f()
            if (!r.includes('is not the correct')) return { msg: r, result: g }
        }
    }
}
