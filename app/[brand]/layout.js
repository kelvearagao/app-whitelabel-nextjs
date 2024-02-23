import schemas from "../../config/schemas";
import getBasePath from "../lib/getBasePath";

export default function DashboardLayout({
  children, // will be a page or nested layout
  params: { brand },
}) {
  return (
    <div>
      <link rel="stylesheet" href={`${getBasePath(brand)}/styles.css`}></link>

      <section>
        {/* Include shared UI here e.g. a header or sidebar */}
        <h1>Whitelabel {brand}</h1>

        {children}
      </section>
    </div>
  );
}

export const getStaticPaths = async () => {
  const brands = schemas.default.brands;

  const paths = brands.map((brand) => ({
    params: {
      brand,
    },
  }));

  return {
    paths,
    fallback: true, // false or "blocking"
  };
};
