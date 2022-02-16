// Apart from primitives, the most common sort of type you’ll
// encounter is an object type. This refers to any JavaScript value with properties,
// which is almost all of them! To define an object type,
// we simply list its properties and their types.

function getArticleName(article: {name: string, content: string}) {
  console.log(`Your article's name is ${article.name}`);
}

const article = {
  name: "Why Typescript is good?",
  content: ":)",
};

getArticleName(article);

// Here, we annotated the parameter with a type with two properties - x and
// y - which are both of type number. You can use , or ; to separate the properties,
// and the last separator is optional either way.

// The type part of each property is also optional.
// If you don’t specify a type, it will be assumed to be any.
