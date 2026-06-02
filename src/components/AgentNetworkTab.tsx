export function AgentNetworkTab() {
  const src = `${import.meta.env.BASE_URL}agent-network.html`;
  return (
    <div className="w-full" style={{ height: 'calc(100vh - 160px)' }}>
      <iframe
        src={src}
        title="Complaints Management Agent Network"
        style={{ width: '100%', height: '100%', border: 'none', display: 'block' }}
      />
    </div>
  );
}
