example:
	deno run src/example.ts
start:
	deno run -A -r --unstable src/mod.ts
start-simple-server:
	deno run --allow-net src/simple-server.ts
start-rest-server:
	deno run --allow-net --allow-env server/app.ts
start-docker:
	docker build -t app . && docker run -it --init -p 8000:8000 app
start-subprocess:
	deno run --allow-run ./src/subprocess.ts
start-check-main:
	deno run src/check_main_program_input.ts
start-filewatch:
	deno run --allow-read src/filewatcher.ts
tests:
	deno test
commit:
	git add --all; git-cz
