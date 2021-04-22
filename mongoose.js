const mongoose = require("mongoose");
// Use the "recipes" database
mongoose.connect("mongodb://localhost/customers2", { 
  useNewUrlParser: true, useUnifiedTopology: true });
async function doStuff() {
  const kittySchema = new mongoose.Schema({
    name: String
  });
  const KittenModel = mongoose.model('Kitten', kittySchema);
  const CatModel = mongoose.model('Cat', kittySchema);
  const fluffy = new KittenModel({ name: 'fluffy' });
try {
  const savedFluffy = await fluffy.save();
  console.log(savedFluffy.name, "has been saved");
} catch(error) {
  console.error(error);
}
}
doStuff();