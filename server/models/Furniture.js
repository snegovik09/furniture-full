const { model, Schema } = require("mongoose");

const schema = new Schema(
  {
    id_product: {
      type: String,
      required: true,
    },
    category_product: {
      type: String,
      required: true,
    },
    product_name: {
      type: String,
      required: true,
    },
    product_name_rus: {
      type: String,
      required: true,
    },
    product_image: {
      type: String,
      required: true,
    },
    present_price: {
      type: String,
      required: true,
    },
    past_price: {
      type: String,
      required: true,
    },
  },
  {
    timestamp: true,
  }
);

module.exports = model("Furniture", schema);
