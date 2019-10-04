export default function getVersion<T extends { version: string }>(value: T): string {
  return value.version;
}
