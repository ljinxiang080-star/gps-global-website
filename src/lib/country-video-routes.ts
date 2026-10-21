export function countryVideoPath(country: string) {
  const slug = country.normalize("NFKD").replace(/[\u0300-\u036f]/g, "")
    .toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
  return `/cases/videos/${slug}`;
}
