const apiKey = "";
const ably = new Ably.Realtime({
  key: "ER9x-g.WmJrrA:zAVRHAJwGRlrKqByzRmn0vwMCOhxOq8_2fg0Iin50-o",
});
const subChannel = ably.channels.get("time");
subChannel.subscribe(function (msg) {
  document.getElementById("text").innerHTML = JSON.stringify(msg.data);
});
