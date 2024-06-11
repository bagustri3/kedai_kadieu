const express = require("express");
const http = require("http");
const app = express();
const cors = require("cors");
const { urlencoded, json } = require("body-parser");
const compression = require("compression");
const { PrismaClient } = require("@prisma/client");
const signale = require("signale");
const { verivy } = require("./service/jwt");
const prisma = new PrismaClient();

app.set("view engine", "ejs");
app.set("views", __dirname + "/views");
app.use(urlencoded({ extended: false }));
app.use(compression(), json({ limit: "50mb" }));
app.use(cors({ origin: true }));

app.get("/", async (req, res) => {
  try {
    const { query } = req;
    const { table } = query;

    let tableNo = null;
    if (table) {
      tableNo = verivy(table);
      const isValidTable = await prisma.table.findFirst({
        where: {
          id: tableNo.id,
        },
      });

      if (!isValidTable) {
        tableNo = null;
      } else {
        tableNo = isValidTable;
      }
    }

    //   const categories = await prisma.category.findMany({
    //     include: {
    //       Items: true,
    //     },
    //   });

    res.render("menu", { name: "Bagus", table: "nani" });
  } catch (e) {
    res.status(500).json({ error: e });
  }
});

// app.use(require("./router"));

http.createServer(app).listen(4004, "0.0.0.0", () => {
  signale.info("Port running");
});
