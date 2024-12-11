function (context, args) { // t:#s.wayland.public
    if (!args) return
    var e = ['open', 'release', 'unlock'],
        g = {}, r, f = () => r = (args.t.call(g)).split('\n').pop()
    for (var i = 0; i < e.length; i++) {
        g.ez_21 = e[i]
        f()
        if (!r.includes('is not the correct')) return { msg: r, result: g }
    }
}
