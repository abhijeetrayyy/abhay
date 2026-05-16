export async function token() {
  return process.env.SANITY_API_READ_TOKEN || "";
}
