// 4. Types for Tooling

// TypeScript can catch bugs when we make mistakes in our code.
// That’s great, but TypeScript can also prevent us from making those mistakes in the first place.

// The type-checker has information to check things like whether we’re accessing the right
// properties on variables and other properties. Once it has that information,
// it can also start suggesting which properties you might want to use.

// That means TypeScript can be leveraged for editing code too, and the core type-checker
// can provide error messages and code completion as you type in the editor.
// That’s part of what people often refer to when they talk about tooling in TypeScript.

import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send();
});

app.listen(3000);
