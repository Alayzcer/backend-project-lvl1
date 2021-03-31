install:
	npm ci

publish:
	npm publish --dry-run

lint:
	npx eslint .

build:
	docker build -t hexlet-code:1.0.0 .

run:
	# run npm link for brain games executing!
	docker run --rm -it hexlet-code:1.0.0 
