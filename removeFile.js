module.exports = {
  name: "removeFile",
  ns: "pkgcloud",
  title: "Remove File",
  description: "Remove a File",
  phrases: {
    active: "Removing file {{input.file}} from {{input.container}}"
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
      }
    }
  },
  fn: function removeFile(input, $, output, state, done, cb, on) {
    var r = function() {
      client.removeFile($.container, $.file, function removeFileCallback(error) {
        cb({
          error: error
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