function (context, args) { // t:#s.wayland.public
    if (!args) return
    var c = [['green', 'orange', 'purple'], ['lime', 'red', 'blue'], ['yellow', 'purple', 'cyan'], ['orange', 'blue', 'green'], ['red', 'cyan', 'lime'], ['purple', 'green', 'yellow'], ['blue', 'lime', 'orange'], ['cyan', 'yellow', 'red']],
        g = {}, r, f = () => r = args.t.call(g).split('\n').pop();
    for (var i = 0; i < c.length; i++) {
        g.c003 = c[i][0];
        g.c003_triad_1 = c[i][1];
        g.c003_triad_2 = c[i][2];
        f();
        if (!r.includes('is not the correct')) return { msg: r, result: g}
    }
}