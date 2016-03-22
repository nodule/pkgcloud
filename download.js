module.exports = {
  name: "download",
  ns: "pkgcloud",
  title: "Download file",
  description: "Downloads a file from storage",
  phrases: {
    active: "Downloading {{input.options.remote}} from {{input.options.container}}"
  },
  ports: {
    input: {
      client: {
        title: "Client",
        type: "object",
        required: true
      },
      options: {
        title: "Options",
        type: "object",
        container: {
          title: "Container name",
          type: "string",
          required: true
        },
        remote: {
          title: "Remote filename",
          type: "string",
          required: true
        }
      }
    },
    output: {
      error: {
        title: "Error",
        type: "object"
      }
    }
  },
  fn: function download(input, $, output, state, done, cb, on) {
    var r = function() {
      output = {
        upload: $.create(client.upload($.options))
      }
    }.call(this);
    return {
      output: output,
      state: state,
      on: on,
      return: r
    };
  }
}