module.exports = {
  name: "getServer",
  ns: "pkgcloud",
  title: "Get Server",
  description: "Get a server",
  phrases: {
    active: "Getting Server"
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
  fn: function getServer(input, $, output, state, done, cb, on) {
    var r = function() {
      client.getServer($.server, function getServerCallback(error, serverId) {
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