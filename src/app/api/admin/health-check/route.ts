export const dynamic = "force-dynamic";

const SITES = [
  { name: "ArsiTech Group", url: "https://www.arsitechgroup.com" },
  { name: "Cimaa Sites", url: "https://cimaasites.vercel.app" },
  { name: "CareConnect Live", url: "https://www.careconnectlive.org" },
  { name: "SaveYours", url: "https://www.saveyours.net" },
  { name: "Arsi Command Center", url: "https://arsi-command-center.vercel.app" },
  { name: "Oromo Platform", url: "https://oromo-platform.vercel.app" },
];

async function checkSite(url: string) {
  try {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 8000);
    const res = await fetch(url, {
      method: "HEAD",
      signal: controller.signal,
      redirect: "follow",
    });
    clearTimeout(timeout);
    return {
      status: res.ok ? "online" : "degraded",
      statusCode: res.status,
      ssl: url.startsWith("https"),
    };
  } catch {
    return { status: "offline" as const, statusCode: 0, ssl: false };
  }
}

export async function GET() {
  const results = await Promise.all(
    SITES.map(async (site) => {
      const check = await checkSite(site.url);
      return {
        name: site.name,
        url: site.url,
        ...check,
        checkedAt: new Date().toISOString(),
      };
    })
  );
  return Response.json(results);
}
