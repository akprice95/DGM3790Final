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
export const getAllStats = (req, res, next) => {
  Product.find()
    .then(products => {
      res.json(products);
    })
    .catch(err => console.log(err));
};

// read one
export const getStatsById = (req, res, next) => {
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
export const postEditStats = (req, res, next) => {
  const playId = req.body.playerId;
  const updatedPlatform = req.body.platform;
  const updatedGamerTag = req.body.gamerTag;
  const updatedmatchesPlayed = req.body.matchesPlayed;
  const updatedKD = req.body.KD;

  Product.findById(playId)
    .then(product => {
      product.platform = updatedPlatform;
      product.gamerTag = updatedGamerTag;
      product.matchesPlayed = updatedmatchesPlayed;
      product.KD = updatedKD;
      console.log(updatedGamerTag);
      console.log(updatedPlatform);
      console.log(updatedmatchesPlayed);
      console.log(upda);

      return product.save();
    })
    .then(result => {
      console.log("Updated product");
      res.redirect("/admin/getAllStats");
    })
    .catch(err => console.log(err));
};

// delete

export const postDeleteProduct = (req, res, next) => {
  const playId = req.body.playerId;
  Product.findByIdAndRemove(playId)
    .then(() => {
      console.log("Deleted the product");
      res.redirect("/admin/getAllStats");
    })
    .catch(err => console.log(err));
};
