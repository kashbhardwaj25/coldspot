/**
 * Whether search engines should index the site at this URL. Not while it runs on localhost or a bare IP
 * address: indexing it there and moving to a domain later splits it into duplicate sites in search results.
 */
export function isIndexable(siteUrl: string) {
  const host = new URL(siteUrl).hostname;
  return !(host === "localhost" || /^[\d.]+$/.test(host) || host.includes(":"));
}
