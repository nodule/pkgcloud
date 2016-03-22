module.exports = {
  name: "getFiles",
  ns: "pkgcloud",
  title: "Get Files",
  description: "Get Files",
  phrases: {
    active: "Getting files from {{input.container}}"
  },
  ports: {
    input: {
      client: {
        title: "Client",
        type: "object",
        required: true
      },
      container: {
        title: "Container",
        type: "object",
        required: true
      },
      file: {
        title: "File",
        type: "string",
        required: true
      }
    },
    output: {
      error: {
        title: "Error",
        type: "object"
      },
      server: {
        title: "Server",
        type: "object"
      }
    }
  },
  fn: function getFiles(input, $, output, state, done, cb, on) {
    var r = function() {
      client.getFiles($.container, $.file, function getFilesCallback(error, server) {
        cb({
          error: error,
          server: server
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