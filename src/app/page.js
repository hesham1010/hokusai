import CarouselComponent from "@/components/carousel";
import MasonryComponent from "@/components/masonry";
import { getArticles } from "@/utils/action";

export default async function Home() {
  const getSlides = await fetch("http://localhost:8000/carousel");
  const slides = await getSlides.json();
  const articles = await getArticles();
  // console.log(articles);
  return (
    <>
      <CarouselComponent data={slides} />
      <MasonryComponent data={articles} />
    </>
  );
}
