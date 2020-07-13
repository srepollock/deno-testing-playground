start:
	deno run -A -r --unstable src/mod.ts
start-server:
	deno run --allow-net src/server.ts
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
