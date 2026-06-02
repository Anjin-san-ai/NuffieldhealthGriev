export function AgentNetworkTab() {
  const src = `${import.meta.env.BASE_URL}agent-network.html`;
  return (
    <div className="w-full flex-1 flex" style={{ minHeight: 720 }}>
      <iframe
        src={src}
        title="Complaints Management Agent Network"
        style={{ width: '100%', height: '100%', minHeight: 720, border: 'none', display: 'block', flex: 1 }}
      />
    </div>
  );
}
