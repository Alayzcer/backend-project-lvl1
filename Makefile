brain-calc:
	node bin/brain-calc.js

brain-even:
	node bin/brain-even.js

brain-games:
	node bin/brain-games.js

install:
	npm ci

publish:
	npm publish --dry-run

lint:
	npx eslint .
