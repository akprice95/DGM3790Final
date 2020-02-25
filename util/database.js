import mongodb from "mongodb";
const MongoClient = mongodb.MongoClient;

let _db;

export const mongoConnect = callback => {
  MongoClient.connect(
    "mongodb+srv://Akprice95:Kamana24@@daplug-egqaw.mongodb.net/test?retryWrites=true&w=majority"
  )
    .then(client => {
      console.log("Connected");
      _db = client.db();
      callback();
    })
    .catch(err => {
      console.log(err);
      throw err;
    });
};

export const getDb = () => {
  if (_db) {
    return _db;
  }
  throw "No database found!";
};
