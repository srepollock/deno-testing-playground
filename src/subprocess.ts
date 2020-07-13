console.log("This is not the subprocess, but the main process");
let p = Deno.run({
    cmd: ["echo", "hello,", "subprocess", "here"],
});
await p.status();
