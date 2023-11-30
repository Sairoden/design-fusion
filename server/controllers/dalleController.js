// LIBRARIES
const OpenAI = require("openai");

require("dotenv").config({ path: "./.env" });

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY, // defaults to process.env["OPENAI_API_KEY"]
});

const getPrompt = async (req, res) => {
  return res.status(200).send({ message: "Hello world from DALL E ROUTER" });
};

const createPrompt = async (req, res) => {
  try {
    const { prompt } = req.body;

    const result = await openai.images.generate({
      prompt,
      n: 1,
      size: "1024x1024",
      response_format: "b64_json",
    });

    const image = result.data[0].b64_json;

    return res.status(200).send({ photo: image });
  } catch (err) {
    console.error(err.message);
    return res.status(500).send({ message: err.message });
  }
};

module.exports = {
  getPrompt,
  createPrompt,
};
