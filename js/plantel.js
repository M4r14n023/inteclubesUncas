// js/plantel.js
window.AppPlantel = {
    renderPlantelSlots: function(plantelActual, onSlotClick, onEdit, onDelete) {
        // Traemos las constantes desde la ventana global
        const { ORDEN_CATS, NOMBRES_CATS, MAX_POR_CATEGORIA } = window.AppConstants;
        
        return (
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '20px' }}>
                {ORDEN_CATS.map(catKey => {
                    const jugadoresEnCat = (plantelActual && plantelActual[catKey]) ? plantelActual[catKey] : [];
                    const maxCupos = MAX_POR_CATEGORIA[catKey] || 5;
                    const slots = Array.from({ length: maxCupos });

                    return (
                        <div key={catKey} style={{ background: 'white', padding: '15px', borderRadius: '12px', border: '1px solid #e2e8f0', boxShadow: '0 2px 4px rgba(0,0,0,0.02)' }}>
                            <div style={{ fontWeight: '800', color: '#1e3c72', fontSize: '12px', marginBottom: '12px', borderBottom: '2px solid #f1f5f9', paddingBottom: '5px', display: 'flex', justifyContent: 'space-between' }}>
                                {NOMBRES_CATS[catKey].toUpperCase()}
                                <span style={{ color: jugadoresEnCat.length === maxCupos ? '#10b981' : '#d4af37' }}>
                                    {jugadoresEnCat.length}/{maxCupos}
                                </span>
                            </div>

                            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                                {slots.map((_, i) => {
                                    const jugador = jugadoresEnCat[i];
                                    return (
                                        <div key={`${catKey}-slot-${i}`}>
                                            {jugador ? (
                                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '8px 10px', background: '#f0f9ff', borderRadius: '8px', border: '1px solid #bae6fd' }}>
                                                    <span style={{ fontSize: '13px', fontWeight: '600', color: '#0369a1', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                                                        {jugador.nombre}
                                                        {jugador.capitan && <span style={{ background: '#f59e0b', color: 'white', fontSize: '9px', padding: '1px 5px', borderRadius: '4px', marginLeft: '6px' }}>CAP</span>}
                                                    </span>
                                                    <div style={{ display: 'flex', gap: '4px', flexShrink: 0 }}>
                                                        <button onClick={() => onEdit(jugador)} style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: '14px' }}>✏️</button>
                                                        <button onClick={() => onDelete(jugador.nombre, catKey)} style={{ background: 'none', border: 'none', color: '#ef4444', cursor: 'pointer', fontSize: '14px' }}>🗑️</button>
                                                    </div>
                                                </div>
                                            ) : (
                                                <button 
                                                    onClick={() => onSlotClick(catKey)}
                                                    style={{ width: '100%', padding: '8px', background: '#f8fafc', border: '1px dashed #cbd5e1', borderRadius: '8px', color: '#94a3b8', fontSize: '12px', cursor: 'pointer', textAlign: 'left', display: 'flex', alignItems: 'center', gap: '5px' }}
                                                >
                                                    <span>➕</span>
                                                    <span>Espacio {i + 1} disponible</span>
                                                </button>
                                            )}
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    );
                })}
            </div>
        );
    }
};