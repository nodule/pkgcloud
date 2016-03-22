module.exports = {
  name: "getContainers",
  ns: "pkgcloud",
  title: "Get Storage Containers",
  description: "Get Storage Containers",
  phrases: {
    active: "Getting available storage containers"
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
      containers: {
        title: "Containers",
        type: "array"
      }
    }
  },
  fn: function getContainers(input, $, output, state, done, cb, on) {
    var r = function() {
      client.getContainers(function getContainersCallback(error, containers) {
        cb({
          error: error,
          containers: containers
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