module.exports = {
  name: "upload",
  ns: "pkgcloud",
  title: "Upload file",
  description: "Uploads a file to storage",
  phrases: {
    active: "Uploading {{input.options.remote}} to {{input.options.container}}"
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
  fn: function upload(input, $, output, state, done, cb, on) {
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