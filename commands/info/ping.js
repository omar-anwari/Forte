module.exports = {
  name: 'ping',
  category: 'info',
  description: 'Pings server and returns the latency for the server and API',
  run: async (client, message, args) => {
    const msg = await message.channel.send(`🏓 Pinging server, please wait!`);
    msg.edit(
      `🏓 Pong!\nLatency is ${Math.floor(
        msg.createdAt - message.createdAt
      )}ms\nThe API's Latency is ${Math.round(client.ws.ping)}ms`
    );
    // .then(console.log)
    // .catch(console.error);
  },
};
