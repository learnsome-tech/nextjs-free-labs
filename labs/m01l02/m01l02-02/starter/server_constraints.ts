interface Metric { service: string; latencyMs: number; }
async function readTelemetry(): Promise<Metric[]> {
  return [
    { service: "auth-gateway", latencyMs: 14 },
    { service: "billing-worker", latencyMs: 28 },
  ];
}
async function SystemHealthPanel() {
  const metrics = await readTelemetry();
  const avg = metrics.reduce((acc, m) => acc + m.latencyMs, 0) / metrics.length;
  return {
    type: "section",
    props: { count: metrics.length, averageLatency: avg },
  };
}
const node = await SystemHealthPanel();
console.log(`Aggregated services: ${node.props.count}`);
console.log(`Average latency: ${node.props.averageLatency} ms`);
