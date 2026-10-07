exports.handler = async () => {
  const key = process.env.RAILRADAR_API_KEY;
  if (!key) return { statusCode: 500, body: JSON.stringify({ error: "RAILRADAR_API_KEY is not set" }) };
  try {
    const r = await fetch("https://api.railradar.in/v1/legacy/trains/live-map", {
      headers: { "X-API-Key": key }
    });
    const body = await r.text();
    return {
      statusCode: r.status,
      headers: {
        "Content-Type": "application/json",
        "Cache-Control": "public, max-age=0, must-revalidate",
        "Netlify-CDN-Cache-Control": r.ok ? "public, s-maxage=900, stale-while-revalidate=900" : "no-store"
      },
      body
    };
  } catch (e) {
    return { statusCode: 502, body: JSON.stringify({ error: "Could not reach RailRadar" }) };
  }
};
