module.exports = {
  name: "getContainer",
  ns: "pkgcloud",
  title: "Get Storage Container",
  description: "Get a Storage Container",
  phrases: {
    active: "Getting storage container {{input.options.containerName}}"
  },
  ports: {
    input: {
      client: {
        title: "Client",
        type: "object",
        required: true
      },
      containerName: {
        title: "Container name",
        type: "string",
        required: true
      }
    },
    output: {
      error: {
        title: "Error",
        type: "object"
      },
      container: {
        title: "Container",
        type: "object"
      }
    }
  },
  fn: function getContainer(input, $, output, state, done, cb, on) {
    var r = function() {
      client.getContainer($.containerName, function getContainerCallback(error, container) {
        cb({
          error: error,
          container: container
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