module.exports = {
  name: "getVersion",
  ns: "pkgcloud",
  title: "Server Version",
  description: "Get the server version",
  phrases: {
    active: "Getting server version"
  },
  ports: {
    input: {
      client: {
        title: "Client",
        type: "object",
        required: true
      }
    },
    output: {
      error: {
        title: "Error",
        type: "object"
      },
      version: {
        title: "Version",
        type: "string"
      }
    }
  },
  fn: function getVersion(input, $, output, state, done, cb, on) {
    var r = function() {
      client.getVersion(function getVersionCallback(error, version) {
        cb({
          error: error,
          version: version
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