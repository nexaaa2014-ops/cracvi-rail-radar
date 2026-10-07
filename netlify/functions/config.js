exports.handler = async () => {
  const key = process.env.MAPTILER_KEY;
  return {
    statusCode: 200,
    headers: { "Content-Type": "application/json", "Cache-Control": "public, max-age=3600" },
    body: JSON.stringify({
      tiles: key ? "https://api.maptiler.com/maps/streets-v2/{z}/{x}/{y}.png?key=" + key : ""
    })
  };
};
