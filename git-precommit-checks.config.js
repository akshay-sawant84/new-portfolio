module.exports = {
	display: {
		notifications: true,
		offendingContent: true,
		rulesSummary: false,
		shortStats: true,
		verbose: false,
	},
	rules: [
		{
			message: 'You’ve got conflict markers laying around',
			regex: /^[<>|=]{4,}/m,
		},
		{
			message: 'Looks like you still have some work to do?',
			nonBlocking: true,
			regex: /(?:FIXME|TODO)/,
		},
		{
			message: 'Sure looks like you left a "if - (true)" somewhere',
			regex: /if\s+\(?(?:.*\|\|\s*)?true\)?/,
		},
		// JS specific
		{
			filter: /\.js$/,
			message: '🤔 Hu.  There are "console.log(…)" call in there.',
			nonBlocking: true,
			regex: /^\s*console\.log/,
		},
	],
};
