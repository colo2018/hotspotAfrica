import {
  demoDataLabel,
  demoDataNotice,
  demoSales,
  demoSites,
  demoStats,
} from "./lib/demo-dashboard";

export default function DashboardPage() {
  return (
    <div className="mx-auto flex w-full max-w-6xl flex-col gap-6">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-xs font-semibold tracking-[0.14em] text-teal-800 uppercase">
            Vue d&apos;ensemble
          </p>
          <h1 className="mt-2 text-2xl font-semibold tracking-tight text-slate-950 sm:text-3xl">
            Tableau de bord
          </h1>
        </div>
        <p className="text-sm text-slate-500">Aujourd&apos;hui · aperçu fictif</p>
      </div>

      <div
        role="note"
        className="rounded-xl border border-amber-200 bg-amber-50 px-4 py-3 text-sm leading-6 text-amber-950"
      >
        <p className="font-semibold">{demoDataLabel}</p>
        <p className="mt-1">{demoDataNotice}</p>
      </div>

      <section aria-label="Indicateurs de démonstration">
        <ul className="grid gap-3 sm:grid-cols-2 xl:grid-cols-5">
          {demoStats.map((stat) => (
            <li
              key={stat.label}
              className="rounded-xl border border-slate-200 bg-white px-4 py-4 shadow-sm"
            >
              <p className="text-sm text-slate-500">{stat.label}</p>
              <p className="mt-2 text-2xl font-semibold tracking-tight text-slate-950">
                {stat.value}
              </p>
              <p className="mt-2 text-xs leading-5 text-slate-500">{stat.detail}</p>
            </li>
          ))}
        </ul>
      </section>

      <div className="grid gap-6 xl:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)]">
        <section className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
          <div className="flex items-center justify-between gap-3 border-b border-slate-100 px-4 py-3 sm:px-5">
            <h2 className="text-base font-semibold text-slate-950">
              Dernières ventes
            </h2>
            <span className="rounded-full bg-slate-100 px-2 py-1 text-xs font-medium text-slate-600">
              {demoDataLabel}
            </span>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full text-left text-sm">
              <thead className="bg-slate-50 text-xs tracking-wide text-slate-500 uppercase">
                <tr>
                  <th className="px-4 py-3 font-medium sm:px-5">Heure</th>
                  <th className="px-4 py-3 font-medium">Site</th>
                  <th className="px-4 py-3 font-medium">Forfait</th>
                  <th className="px-4 py-3 font-medium">Canal</th>
                  <th className="px-4 py-3 font-medium sm:px-5">Montant</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {demoSales.map((sale) => (
                  <tr key={`${sale.time}-${sale.site}-${sale.plan}`}>
                    <td className="px-4 py-3 whitespace-nowrap text-slate-700 sm:px-5">
                      {sale.time}
                    </td>
                    <td className="px-4 py-3 whitespace-nowrap text-slate-900">
                      {sale.site}
                    </td>
                    <td className="px-4 py-3 whitespace-nowrap text-slate-700">
                      {sale.plan}
                    </td>
                    <td className="px-4 py-3 whitespace-nowrap text-slate-700">
                      {sale.channel}
                    </td>
                    <td className="px-4 py-3 whitespace-nowrap font-medium text-slate-950 sm:px-5">
                      {sale.amount}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white shadow-sm">
          <div className="flex items-center justify-between gap-3 border-b border-slate-100 px-4 py-3 sm:px-5">
            <h2 className="text-base font-semibold text-slate-950">Sites suivis</h2>
            <span className="rounded-full bg-slate-100 px-2 py-1 text-xs font-medium text-slate-600">
              {demoDataLabel}
            </span>
          </div>
          <ul className="divide-y divide-slate-100">
            {demoSites.map((site) => {
              const online = site.status === "En ligne";

              return (
                <li
                  key={site.name}
                  className="flex items-start justify-between gap-3 px-4 py-4 sm:px-5"
                >
                  <div className="min-w-0">
                    <p className="font-medium text-slate-950">{site.name}</p>
                    <p className="mt-1 text-sm text-slate-500">
                      {site.city} · {site.router}
                    </p>
                    <p className="mt-1 text-xs text-slate-500">
                      {site.clients > 1
                        ? `${site.clients} clients connectés`
                        : `${site.clients} client connecté`}
                    </p>
                  </div>
                  <span
                    className={`shrink-0 rounded-full px-2.5 py-1 text-xs font-medium ${
                      online
                        ? "bg-teal-50 text-teal-800"
                        : "bg-slate-100 text-slate-600"
                    }`}
                  >
                    {site.status}
                  </span>
                </li>
              );
            })}
          </ul>
        </section>
      </div>
    </div>
  );
}
