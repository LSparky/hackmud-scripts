function (context, args) { // t:#s.wayland.public
    if (!args) return
    var e = ['open', 'release', 'unlock'],
        p = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97],
        g = {}, r, f = () => r = (args.t.call(g)).split('\n').pop()
    for (var i = 0; i < e.length; i++) {
        for (var j = 0; j < p.length; j++) {
            g.ez_40 = e[i]
            g.ez_prime = p[j]
            f()
            if (!r.includes('is not the correct')) return {msg: 'EZ_40 complete.', result: g}
        }
    }
}
