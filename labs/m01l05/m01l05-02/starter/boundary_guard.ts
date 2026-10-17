function assertSerializable(propKey: string, val: unknown): void {
  const isFunction = typeof val === "function";
  const isSymbol = typeof val === "symbol";
  if (isFunction || isSymbol) {
    throw new Error(`Prop ${propKey} is not serializable`);
  }
}
function sanitizeProps(raw: Record<string, unknown>) {
  const clean: Record<string, unknown> = {};
  for (const [k, v] of Object.entries(raw)) {
    assertSerializable(k, v);
    if (k.toLowerCase().includes("secret")) continue;
    clean[k] = v;
  }
  return clean;
}
const safeProps = sanitizeProps({ user: "Ada", tokenSecret: "xyz", id: 42 });
console.log(`Sanitized keys: ${Object.keys(safeProps).join(", ")}`);
console.log(`Passed user prop: ${safeProps.user}`);
