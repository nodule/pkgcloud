module.exports = {
  name: "getImages",
  ns: "pkgcloud",
  title: "Get Images",
  description: "Get Images",
  phrases: {
    active: "Getting images"
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
      images: {
        title: "Images",
        type: "array"
      }
    }
  },
  fn: function getImages(input, $, output, state, done, cb, on) {
    var r = function() {
      client.getImages(function getImagesCallback(error, images) {
        cb({
          error: error,
          images: images
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