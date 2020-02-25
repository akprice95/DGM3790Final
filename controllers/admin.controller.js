import { Product } from "../models/product";

// create
export const postAddGamer = (req, res, next) => {
  console.log(req.body.platform);
  const product = new Product({
    platform: req.body.platform,
    gamerTag: req.body.gamerTag,
    matchesPlayed: req.body.matchesPlayed,
    KD: req.body.KD
  });
  console.log(product);
  product
    .save()
    .then(result => {
      console.log("Added Gamer");
      res.send("Added Gamer! Check your DB");
      // res.redirect('/admin/products')
    })
    .catch(err => console.log(err));
};

// read all
export const getAllProducts = (req, res, next) => {
  Product.find()
    .then(products => {
      res.json(products);
    })
    .catch(err => console.log(err));
};

// read one
export const getProductById = (req, res, next) => {
  const playId = req.body.playerId;
  console.log(playId);
  Product.findById(playId)
    .then(product => {
      if (!product) {
        return res.redirect("/");
      }
      res.json(product);
    })
    .catch(err => console.log(err));
};

// update
export const postEditProduct = (req, res, next) => {
  const playId = req.body.playerId;
  const updatedPlatform = req.body.platform;
  const updatedGamerTag = req.body.gamerTag;
  const updatedDesc = req.body.description;
  const updatedImageUrl = req.body.imageUrl;

  Product.findById(playId)
    .then(product => {
      product.platform = updatedPlatform;
      product.gamerTag = updatedGamerTag;
      product.description = updatedDesc;
      product.imageUrl = updatedImageUrl;
      return product.save();
    })
    .then(result => {
      console.log("Updated product");
      res.redirect("/admin/getAllProducts");
    })
    .catch(err => console.log(err));
};

// delete

export const postDeleteProduct = (req, res, next) => {
  const playId = req.body.playerId;
  Product.findByIdAndRemove(playId)
    .then(() => {
      console.log("Deleted the product");
      res.redirect("/admin/getAllProducts");
    })
    .catch(err => console.log(err));
};
