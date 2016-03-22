module.exports = {
  name: "destroyImage",
  ns: "pkgcloud",
  title: "Destroy Image",
  description: "Destroy Image",
  phrases: {
    active: "Destroying image"
  },
  ports: {
    input: {
      client: {
        title: "Client",
        type: "object",
        required: true
      },
      image: {
        title: "Image",
        type: "object",
        required: true
      }
    },
    output: {
      error: {
        title: "Error",
        type: "object"
      },
      success: {
        title: "Success",
        type: "object"
      }
    }
  },
  fn: function destroyImage(input, $, output, state, done, cb, on) {
    var r = function() {
      client.destroyImage($.image, function destroyImageCallback(error, success) {
        cb({
          error: error,
          success: success
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