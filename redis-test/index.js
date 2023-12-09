import { createClient } from "redis";

const client = createClient();

client.on("error", (err) => {
  console.error(err);
});

client.on("connect", () => {
  console.log("Connected");
});

await client.connect();

await client.set("foo", "bar");

const value = await client.get("foo");
console.log(value);

client.quit();