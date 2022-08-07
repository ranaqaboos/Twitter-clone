export function textLimiter(text: string, count: number = 100): string {
  return text.slice(0, count) + (text.length > count ? '...' : '');
}
