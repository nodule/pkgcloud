module.exports = {
  name: "destroyContainer",
  ns: "pkgcloud",
  title: "Destroy Storage Container",
  description: "Destroy a Storage Container",
  phrases: {
    active: "Destroying container {{input.containerName}}"
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
      }
    }
  },
  fn: function destroyContainer(input, $, output, state, done, cb, on) {
    var r = function() {
      client.destroyContainer($.containerName, function destroyContainerCallback(error) {
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