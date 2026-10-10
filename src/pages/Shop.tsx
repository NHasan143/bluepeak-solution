import PageTitle from "../components/common/PageTitle";
import ShopFooter from "../components/layout/ShopFooter";
import ProductGrid from "../components/sections/ProductGrid";

export default function Shop() {
  return (
    <>
      <PageTitle title="Shop" crumb="Products" />

      <section className="featured-products">
        <div className="mx-auto! w-full! max-w-[1320px]! px-[15px]!">
          <ProductGrid />
        </div>
      </section>

      <ShopFooter />
    </>
  );
}
