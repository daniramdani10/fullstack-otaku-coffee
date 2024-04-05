const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");

const app = express();
dotenv.config();
const PORT = process.env.PORT;

const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Docs");
});

app.get("/products", async (req, res) => {
  const allProducts = await prisma.products.findMany({
    include: {
      tags: {
        select: {
          name: true,
        },
      },
    },
  });
  res.send(allProducts);
});

app.post("/products", async (req, res) => {
  const newProductData = req.body;

  try {
    const addProducts = await prisma.products.create({
      data: {
        title: newProductData.title,
        price: newProductData.price,
        image: newProductData.image,
        description: newProductData.description,
      },
    });
    res.send({
      data: addProducts,
      message: "Product Created",
    });
  } catch (error) {
    res.send("Some filed is missing");
  }
});

app.delete("/products/:id", async (req, res) => {
  const productID = req.params.id;
  console.log(productID);
  const deleteProduct = await prisma.products.delete({
    where: {
      id: parseInt(productID),
    },
  });
  res.send({
    data: deleteProduct,
    message: "Data Deleted",
  });
});

app.listen(PORT, () => {
  console.log("Express api running in port  : " + PORT);
});
