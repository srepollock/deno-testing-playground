FROM hayd/alpine-deno:1.2.0

EXPOSE 8000

WORKDIR /app

USER deno

COPY src/deps.ts .
RUN deno cache --unstable deps.ts

ADD . .

# Compile the app so it's not done on run
RUN deno cache main.ts

CMD ["run", "-A", "-r", "--allow-net", "--unstable", "src/mod.ts"]
