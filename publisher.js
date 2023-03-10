const Ably = require("ably");
const ably = new Ably.Realtime({
  key: "ER9x-g.WmJrrA:zAVRHAJwGRlrKqByzRmn0vwMCOhxOq8_2fg0Iin50-o",
});
const pubChannel = ably.channels.get("time");

setInterval(() => {
  pubChannel.publish("update", "hello");
}, 1000);
