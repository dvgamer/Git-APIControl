module.exports = ({
	dev: {
		run: 'dev',
		domain: 'localhost',
		git: 8100,
		api: 8200,
		mysql: {
			host: 'pgm.ns.co.th',
			user: 'root',
			port: 33061,
			password: '123456',
			database: 'ns_develop'
		},
		smtp: {
		  host: '192.168.10.2',
		  port: 25,
		  auth: { user: 'pgm', pass: '123456' },            
		  secure: false,
		  tls: { rejectUnauthorized: false },
		  debug: true
		},
		path: './tmp',
		core: 'C:/Program Files/Git/mingw64/libexec/git-core',
		lfs: 'C:/Program Files/Git LFS'
	},
	serv: {
		run: 'serv',
		domain: 'dev.ns.co.th',
		git: 810,
		api: 811,
		mysql: {
			host: 'pgm.ns.co.th',
			user: 'root',
			port: 3300,
			password: 'pgm!1234',
			database: 'js_debugger'
		},
		smtp: {
		  host: '192.168.10.2',
		  port: 25,
		  auth: { user: 'pgm', pass: '123456' },            
		  secure: false,
		  tls: { rejectUnauthorized: false },
		  debug: true
		},
		path: '/data/debugger-source',
		core: '/usr/bin',
		lfs: '/usr/bin'
	}
})[(/--(\w+)/.exec(process.argv[2] || '--serv') || ['', 'serv'])[1]]