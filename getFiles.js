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
      }
    },
    output: {
      error: {
        title: "Error",
        type: "object"
      },
      files: {
        title: "Files",
        type: "array"
      }
    }
  },
  fn: function getFiles(input, $, output, state, done, cb, on) {
    var r = function() {
      client.getFiles($.container, function getFilesCallback(error, files) {
        cb({
          error: error,
          files: files
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