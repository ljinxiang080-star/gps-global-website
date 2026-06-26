import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { products, type Product, type ProductModel } from "@/lib/site-data";

function getProduct(slug: string) {
  return products.find((product) => product.slug === slug);
}

export function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug,
  }));
}

function ProductCategoryHero({ product }: { product: Product }) {
  return (
    <section className="relative isolate overflow-hidden bg-[#061936] text-white">
      <div
        className="absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(circle at 76% 18%, rgba(11, 104, 255, 0.38), transparent 34%), radial-gradient(circle at 18% 84%, rgba(121, 215, 255, 0.14), transparent 34%), linear-gradient(135deg, #061936 0%, #082756 52%, #061936 100%)",
        }}
      />
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 lg:grid-cols-[0.88fr_1.12fr] lg:items-center lg:py-24">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#79d7ff]">
            产品分类
          </p>
          <p className="mt-4 text-sm font-semibold text-blue-100">
            {product.category}
          </p>
          <h1 className="mt-4 text-4xl font-semibold leading-tight md:text-5xl">
            {product.name}
          </h1>
          <p className="mt-5 max-w-xl text-base leading-8 text-slate-200">
            {product.summary}
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href={`/contact?product=${product.slug}`}
              className="inline-flex h-12 items-center justify-center rounded-md bg-[#0b68ff] px-6 text-sm font-semibold text-white shadow-lg shadow-blue-950/30 transition hover:bg-[#0056df]"
            >
              获取报价
            </Link>
            <Link
              href="/contact"
              className="inline-flex h-12 items-center justify-center rounded-md border border-white/30 px-6 text-sm font-semibold text-white transition hover:border-white hover:bg-white/10"
            >
              联系我们
            </Link>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -inset-5 rounded-xl bg-[#0b68ff]/20 blur-2xl" />
          <div className="relative overflow-hidden rounded-xl border border-white/10 bg-white p-4 shadow-2xl shadow-blue-950/30">
            <Image
              src={product.heroImage ?? product.image}
              alt={product.name}
              width={900}
              height={675}
              priority
              sizes="(min-width: 1024px) 52vw, 100vw"
              className="aspect-[4/3] w-full rounded-lg bg-slate-50 object-contain p-6"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function ProductModelCard({
  model,
  productSlug,
}: {
  model: ProductModel;
  productSlug: string;
}) {
  const contactHref = `/contact?product=${model.slug}`;
  const detailHref = `/products/${productSlug}/${model.slug}`;

  return (
    <article className="group flex min-h-[360px] min-w-0 flex-col rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:border-blue-300 hover:shadow-lg hover:shadow-blue-950/10 sm:p-6">
      <div className="flex min-w-0 flex-1 flex-col">
        {model.image ? (
          <div className="mb-6 min-w-0 overflow-hidden rounded-xl border border-slate-200 bg-slate-50 p-4">
            <Image
              src={model.image}
              alt={model.name}
              width={1000}
              height={1000}
              sizes="(min-width: 1280px) 25vw, (min-width: 768px) 50vw, 100vw"
              className="aspect-square w-full rounded-lg bg-white object-contain"
            />
          </div>
        ) : null}
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#0b68ff]">
          Model
        </p>
        <h3 className="mt-3 text-xl font-semibold leading-8 text-slate-950">
          {model.name}
        </h3>
        <p className="mt-4 text-sm leading-7 text-slate-600">
          {model.summary}
        </p>

        <div className="mt-5 flex flex-wrap gap-2">
          {model.tags.map((tag) => (
            <span
              key={`${model.slug}-${tag}`}
              className="rounded-full border border-blue-100 bg-blue-50 px-3 py-1 text-xs font-semibold text-[#0b68ff]"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-6 overflow-hidden rounded-lg border border-slate-200">
          {model.specs.map((spec) => (
            <div
              key={`${model.slug}-${spec.label}`}
              className="grid min-w-0 grid-cols-[80px_minmax(0,1fr)] border-b border-slate-200 text-sm last:border-b-0 sm:grid-cols-[92px_minmax(0,1fr)]"
            >
              <div className="bg-slate-50 px-3 py-3 font-semibold text-slate-900">
                {spec.label}
              </div>
              <div className="min-w-0 break-words px-3 py-3 leading-6 text-slate-600">
                {spec.value}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-6 flex flex-col gap-3 sm:flex-row">
        <Link
          href={contactHref}
          className="inline-flex h-11 flex-1 items-center justify-center rounded-md bg-[#0b68ff] px-4 text-sm font-semibold text-white transition hover:bg-[#0056df]"
        >
          获取报价
        </Link>
        <Link
          href={detailHref}
          className="inline-flex h-11 flex-1 items-center justify-center rounded-md border border-slate-200 px-4 text-sm font-semibold text-slate-700 transition hover:border-blue-300 hover:text-[#0b68ff]"
        >
          查看详情
        </Link>
      </div>
    </article>
  );
}

function ProductModelsSection({ product }: { product: Product }) {
  return (
    <section className="bg-slate-50 py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-3xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.22em] text-[#0b68ff]">
            产品型号
          </p>
          <h2 className="text-3xl font-semibold leading-tight text-slate-950 md:text-4xl">
            <span>{product.name}</span>
            <span className="block">型号与应用类型</span>
          </h2>
          <p className="mt-5 text-base leading-8 text-slate-600">
            根据车辆类型、供电方式、报警能力和项目需求选择合适的定位终端。
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
          {product.children.map((model) => (
            <ProductModelCard
              key={model.slug}
              model={model}
              productSlug={product.slug}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProductCategoryCta({ product }: { product: Product }) {
  return (
    <section className="bg-[#061936] py-16 text-white">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-6 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#79d7ff]">
            Inquiry
          </p>
          <h2 className="mt-3 text-3xl font-semibold">
            需要按项目选择 {product.name}？
          </h2>
        </div>
        <Link
          href={`/contact?product=${product.slug}`}
          className="inline-flex h-12 items-center justify-center rounded-md bg-white px-6 text-sm font-semibold text-[#061936] transition hover:bg-blue-50"
        >
          联系产品顾问
        </Link>
      </div>
    </section>
  );
}

export default async function ProductCategoryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = getProduct(slug);

  if (!product) {
    notFound();
  }

  return (
    <>
      <ProductCategoryHero product={product} />
      <ProductModelsSection product={product} />
      <ProductCategoryCta product={product} />
    </>
  );
}
