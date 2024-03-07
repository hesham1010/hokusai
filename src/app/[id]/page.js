import { getArticleById } from "@/utils/action";
import Image from "next/image";
export default async function ArticlePage({ params }) {
  const { id } = params;
  const article = await getArticleById(id);
  return (
    <>
      <div>
        <div
          style={{
            marginTop: "20px",
            position: "relative",
            width: "100%",
            height: "500px",
          }}
        >
          <Image
            src={`/images/arts/${article.img}`}
            alt={article.name}
            style={{ objectFit: "cover" }}
            fill
          />
        </div>
        <div className="article_container">
          <h1>{article.name}</h1>
          <div dangerouslySetInnerHTML={{ __html: article.content }} />
        </div>
      </div>
    </>
  );
}
export async function getStaticParams() {
  const articles = await fetch("http://localhost:8000/articles").then((res) => {
    res.json();
  });
  return articles.map((article) => {
    return {
      id: article.id.toString(),
    };
  });
}
