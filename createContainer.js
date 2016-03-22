module.exports = {
  name: "createContainer",
  ns: "pkgcloud",
  title: "Create Storage Container",
  description: "Create a Storage Container",
  phrases: {
    active: "Creating storage container"
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
  fn: function createContainer(input, $, output, state, done, cb, on) {
    var r = function() {
      client.createContainer($.options, function createContainerCallback(error, container) {
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