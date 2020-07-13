start:
	deno run -A -r --unstable src/mod.ts
start-server:
	deno run --allow-net src/server.ts
start-docker:
	docker build -t app . && docker run -it --init -p 8000:8000 app
tests:
	deno test
