type RateLimitEntry = {
  count: number;
  start: number;
};

const rateLimitMap = new Map<string, RateLimitEntry>();

export function rateLimit(
  ip: string,
  limit = 5,
  windowMs = 60_000
): boolean {
  const now = Date.now();

  const entry = rateLimitMap.get(ip);

  if (!entry) {
    rateLimitMap.set(ip, { count: 1, start: now });
    return true;
  }

  if (now - entry.start > windowMs) {
    rateLimitMap.set(ip, { count: 1, start: now });
    return true;
  }

  if (entry.count >= limit) {
    return false;
  }

  entry.count++;
  return true;
}