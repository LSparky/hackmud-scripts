function (context, args) { // t:#s.wayland.public
	if (!args) return
	var c = {'green': 'red', 'lime':'purple', 'yellow':'blue', 'orange':'cyan', 'red':'green', 'purple':'lime', 'blue':'yellow', 'cyan':'orange'},
		g = {}, r, f = () => r = (args.t.call(g)).split('\n').pop()
	for (var i in c) {
		g.c002 = i
		g.c002_complement = c[i]
		f()
		if (!r.includes('is not the correct')) return { msg: r, result: g }
	}
}
