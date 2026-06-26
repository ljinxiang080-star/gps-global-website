import { marketLanguageOptions } from "@/lib/locale-options";

export function LanguageMarketStrip() {
  return (
    <section className="bg-white py-6" data-no-translate="">
      <div className="mx-auto max-w-7xl px-6">
        <div className="overflow-x-auto rounded-md border border-slate-200 bg-white px-4 py-5 shadow-sm">
          <div className="mx-auto flex w-max min-w-full items-center justify-center gap-5 lg:gap-7">
            {marketLanguageOptions.map((option) => (
              <button
                key={option.code}
                type="button"
                className="group flex min-w-[64px] flex-col items-center gap-2 text-center"
                data-region-option=""
                data-locale-code={option.code}
                data-locale-dir={option.dir}
                data-region-label={option.region}
                data-region-flag={option.flag}
                aria-label={`${option.region} ${option.language}`}
              >
                <span className="grid h-12 w-12 place-items-center rounded-full border border-slate-200 bg-white text-3xl shadow-md shadow-slate-950/10 ring-4 ring-slate-100 transition group-hover:-translate-y-0.5 group-hover:border-blue-200 group-hover:ring-blue-50">
                  {option.flag}
                </span>
                <span className="text-xs font-medium leading-5 text-slate-600 transition group-hover:text-[#0b68ff]">
                  {option.language}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
