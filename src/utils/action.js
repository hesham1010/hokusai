"use server";
export async function getArticles() {
  try {
    const getArt = await fetch("http://localhost:8000/articles");
    const articles = await getArt.json();
    if (Object.keys(articles).length === 0) {
      throw new Error("we could not find any articles");
    }
    return articles;
  } catch (err) {
    throw new Error(err.message);
  }
}
export async function getArticleById(id) {
  try {
    const getArticle = await fetch(`http://localhost:8000/articles/${id}`);
    const article = await getArticle.json();
    if (Object.keys(article).length === 0) {
      throw new Error("we could not find any articles");
    }
    return article;
  } catch (error) {
    throw new Error(error.message);
  }
}
