import { createClient } from "redis";

const client = createClient({
  url: 'redis://localhost:6379',
});


client.on("error", (err) => {
  console.error(err);
});

client.on("connect", () => {
  console.log("Connected");
});

await client.connect();

await client.set("fuck", "6666666");

const value = await client.get("fuck");
console.log(value);

client.quit();
