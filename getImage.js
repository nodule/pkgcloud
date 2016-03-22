module.exports = {
  name: "getImage",
  ns: "pkgcloud",
  title: "Get Image",
  description: "Get Image",
  phrases: {
    active: "Getting image {{input.imageID}}"
  },
  ports: {
    input: {
      client: {
        title: "Client",
        type: "object",
        required: true
      },
      image: {
        title: "ImageID",
        type: "string",
        required: true
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
  fn: function getImage(input, $, output, state, done, cb, on) {
    var r = function() {
      client.getImage(function getImageCallback(error, image) {
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