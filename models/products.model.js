const mongoose = require("mongoose");

const DB_URL =
    "mongodb+srv://Hany_Sabeh:H@Ny$@Be7@cluster0.i6gw8.mongodb.net/online-shop?retryWrites=true&w=majority";
const productSchema = mongoose.Schema({
    name: String,
    image: String,
    price: Number,
    description: String,
    category: String
});

const Product = mongoose.model("product", productSchema);

exports.addNewProduct = data => {
    return new Promise((resolve, reject) => {
        mongoose
            .connect(DB_URL, { useNewUrlParser: true,useUnifiedTopology: true })
            .then(() => {
                let newProduct = new Product(data);
                return newProduct.save();
            })
            .then(products => {
                mongoose.disconnect();
                resolve(products);
            })
            .catch(err => {
                mongoose.disconnect();
                reject(err);
            });
    });
};

exports.getAllProducts = () => {
    return new Promise((resolve, reject) => {
        mongoose
            .connect(DB_URL, { useNewUrlParser: true,useUnifiedTopology: true })
            .then(() => {
                return Product.find({});
            })
            .then(products => {
                mongoose.disconnect();
                resolve(products);
            })
            .catch(err => {
                mongoose.disconnect();
                reject(err);
            });
    });
};

exports.getProductsByCategory = category => {
    return new Promise((resolve, reject) => {
        mongoose
            .connect(DB_URL, { useNewUrlParser: true,useUnifiedTopology: true })
            .then(() => {
                return Product.find({ category: category });
            })
            .then(products => {
                mongoose.disconnect();
                resolve(products);
            })
            .catch(err => {
                mongoose.disconnect(reject(err));
            });
    });
};

exports.getProductById = id => {
    return new Promise((resolve, reject) => {
        mongoose
            .connect(DB_URL, { useNewUrlParser: true,useUnifiedTopology: true })
            .then(() => {
                return Product.findById(id);
            })
            .then(product => {
                mongoose.disconnect();
                resolve(product);
            })
            .catch(err => {
                mongoose.disconnect();
                reject(err);
            });
    });
};

exports.getFirstProduct = () => {
    return new Promise((resolve, reject) => {
        mongoose
            .connect(DB_URL, { useNewUrlParser: true,useUnifiedTopology: true })
            .then(() => {
                return Product.findOne({});
            })
            .then(product => {
                mongoose.disconnect();
                resolve(product);
            })
            .catch(err => {
                mongoose.disconnect();
                reject(err);
            });
    });
};
