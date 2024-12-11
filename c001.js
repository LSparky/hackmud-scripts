function (context, args) { // t:#s.wayland.public
    if (!args) return
    var c = ['green', 'lime', 'yellow', 'orange', 'red', 'purple', 'blue', 'cyan'],
        g = {}, r, f = () => r = (args.t.call(g)).split('\n').pop()
    for (var i = 0; i < c.length; i++) {
        g.c001 = c[i]
        g.color_digit = c[i].length
        f()
        if (!r.includes('is not the correct')) return { msg: 'Correct color found.', result: g }
    }
}
