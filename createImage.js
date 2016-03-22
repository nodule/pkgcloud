module.exports = {
  name: "createImage",
  ns: "pkgcloud",
  title: "Create Image",
  description: "Create Image",
  phrases: {
    active: "Creating image"
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
        required: true,
        name: {
          title: "Image Name",
          type: "string",
          required: true
        },
        server: {
          title: "Server ID",
          type: "string",
          required: true
        }
      }
    },
    output: {
      error: {
        title: "Error",
        type: "object"
      },
      image: {
        title: "Image",
        type: "object"
      }
    }
  },
  fn: function createImage(input, $, output, state, done, cb, on) {
    var r = function() {
      client.createImage($.options, function createImageCallback(error, image) {
        cb({
          error: error,
          image: image
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