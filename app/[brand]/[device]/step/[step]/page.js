import Link from "next/link";
import schemas from "../../../../../config/schemas";
import getBasePath from "../../../../lib/getBasePath";

const createSchemaPaths = ({ brands, ...schema }) => {
  let paths = [];
  brands.forEach((brand) =>
    ["desktop", "mobile"].forEach((device) =>
      Object.keys(schema[device].pages).forEach((step) =>
        paths.push({
          brand,
          step: step,
          device,
        })
      )
    )
  );

  return paths;
};

function getModel({ device, step }) {
  return {
    ...schemas.default[device].pages[step],
  };
}

export function generateStaticParams() {
  const paths = createSchemaPaths(schemas.default);
  return paths;
}

export default function Page({ params: { brand, device, step } }) {
  const model = getModel({ device, step });

  return (
    <>
      <h2>
        {brand} - {step}
      </h2>
      {model.buttonText ? (
        <Link href={`${getBasePath(brand)}/${device}/step/${model.nextStep}`}>
          <button>{model.buttonText}</button>
        </Link>
      ) : (
        "Fim!"
      )}
    </>
  );
}
