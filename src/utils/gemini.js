const { GoogleGenerativeAI } = require("@google/generative-ai");
const { GEMINI_API_KEY } = require("./constants");

// Access your API key as an environment variable (see "Set up your API key" above)

const genAI = new GoogleGenerativeAI(GEMINI_API_KEY);

export default genAI;

// ...

// The Gemini 1.5 models are versatile and work with most use cases
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash"});

// ...