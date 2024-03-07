export const dynamic = "force-dynamic";
export default async function BioPage() {
  const request = await fetch(
    "https://baconipsum.com/api/?type=meat-and-filler"
  );
  const bioData = await request.json();
  return (
    <>
      <div className="row">
        <article>
          <div className="mb-4">
            <h1 className="fw-border mb-1">Hokusai Bio</h1>
          </div>
          <section>
            {bioData.map((content, index) => (
              <p key={index} className="fs-5 mb-4">
                {content}
              </p>
            ))}
          </section>
        </article>
      </div>
    </>
  );
}
