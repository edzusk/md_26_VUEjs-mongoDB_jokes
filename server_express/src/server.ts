import express from "express";
import { Request, Response } from "express";
import bodyparser from "body-parser";
import cors from "cors";
import { model, connect, Schema } from "mongoose";

type newJoke = {
  joke: string;
};

const app = express();

app.use(bodyparser.json());
app.use(cors({ origin: "*" }));

app.get("/", (req: Request, res: Response) => {
  res.send("Application works!");
});

app.listen(3004, () => {
  console.log("Application started on port 3004!");
});

main().catch((err) => console.log(err));

async function main() {
  await connect("mongodb://127.0.0.1:27017/jokes");
}

const jokeSchema = new Schema({
  joke: { type: String, required: true },
});

const Joke = model("Joke", jokeSchema);

app.get("/jokes", async (req: Request, res: Response) => {
  try {
    const jokes = await Joke.find({});
    res.status(200).json(jokes);
  } catch (error) {
    res.status(500).json(error);
  }
});

app.post(
  "/jokes",
  async ({ body }: Request<undefined, undefined, newJoke>, res: Response) => {
    try {
      const result = await Joke.create(body);
      res.status(200).send(result);
    } catch (error) {
      res.status(500).json(error);
    }
  }
);

app.delete("/jokes/:id", async ({ params }: Request, res: Response) => {
  try {
    const result = await Joke.deleteOne({ _id: params.id });
    res.status(200).send(result);
  } catch (error) {
    res.status(500).json(error);
  }
});
