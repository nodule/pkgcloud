module.exports = {
  name: "destroyServer",
  ns: "pkgcloud",
  title: "Destroy Server",
  description: "Destroys a server",
  phrases: {
    active: "Destroying server"
  },
  ports: {
    input: {
      client: {
        title: "Client",
        type: "object",
        required: true
      },
      server: {
        title: "Server",
        type: "object",
        required: true
      }
    },
    output: {
      error: {
        title: "Error",
        type: "object"
      },
      serverId: {
        title: "Server ID",
        type: "string"
      }
    }
  },
  fn: function destroyServer(input, $, output, state, done, cb, on) {
    var r = function() {
      client.destroyServer($.server, function destroyServerCallback(error, serverId) {
        cb({
          error: error,
          serverId: serverId
        });
      });
    }.call(this);
    return {
      output: output,
      state: state,
      on: on,
      return: r
    };
  }
}