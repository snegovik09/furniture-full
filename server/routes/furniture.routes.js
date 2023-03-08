const express = require("express");
const Furniture = require("../models/Furniture");
const router = express.Router({ mergeParams: true });
const path = require("path");
const uuid = require("uuid");

router.get("/", async (req, res) => {
  try {
    const furniture = await Furniture.find();
    res.status(200).send(furniture);
  } catch (error) {
    res.status(500).json({
      message: "На сервере произошла ошибка. Попробуйте позже",
    });
  }
});

router.post("/product-change", async (req, res) => {
  try {
    const {
      id_product,
      category_product,
      product_name,
      product_name_rus,
      present_price,
      past_price,
    } = req.body;
    const { product_image } = req.files;
    let fileName = uuid.v4() + ".jpg";
    product_image.mv(path.resolve(__dirname, "..", "static", fileName));
    const newItem = await Furniture.create({
      id_product,
      category_product,
      product_name,
      product_name_rus,
      present_price,
      past_price,
      product_image: fileName,
    });
    res.status(201).send(newItem);
  } catch (error) {
    res.status(500).json({
      message: "На сервере произошла ошибка. Попробуйте позже",
    });
  }
});

router.delete("/:unitId", async (req, res) => {
  try {
    const { unitId } = req.params;
    const removedUnit = await Furniture.findById(unitId);
    await removedUnit.remove();
    res.send(null);
  } catch (error) {
    res.status(500).json({
      message: "На сервере произошла ошибка. Попробуйте позже",
    });
  }
});
router.get("/:payload", async (req, res) => {
  try {
    const { payload } = req.params;
    const currentElement = await Furniture.find({ product_name: `${payload}` });
    res.status(200).send(currentElement);
  } catch (error) {
    res.status(500).json({
      message: "На сервере произошла ошибка. Попробуйте позже",
    });
  }
});
router.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { product_name_rus, present_price, past_price } = req.body;
    const { product_image } = req.files;
    let fileName = uuid.v4() + ".jpg";
    product_image.mv(path.resolve(__dirname, "..", "static", fileName));
    const updatedElem = await Furniture.findByIdAndUpdate(
      id,
      { product_name_rus, present_price, past_price, product_image: fileName },
      {
        new: true,
      }
    );
    res.status(201).send(updatedElem);
  } catch (error) {
    res.status(500).json({
      message: "На сервере произошла ошибка. Попробуйте позже",
    });
  }
});

module.exports = router;
