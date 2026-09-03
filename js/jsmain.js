// Configuração
const MODS_FILE = 'mods/mods.json';
const GITHUB_REPO = 'byhenriquesilva/modhubmine'; // Substitua pelo seu

let allMods = [];

// Inicialização
document.addEventListener('DOMContentLoaded', async () => {
    await loadMods();
    setupSearch();
    setupDownloadAll();
});

// Carregar mods do JSON
async function loadMods() {
    try {
        const response = await fetch(MODS_FILE);
        const data = await response.json();
        allMods = data.mods;
        renderMods(allMods);
    } catch (error) {
        console.error('Erro ao carregar mods:', error);
        showToast('Erro ao carregar mods', 'error');
    }
}

// Renderizar mods no grid
function renderMods(mods) {
    const grid = document.getElementById('modsGrid');
    
    if (mods.length === 0) {
        grid.innerHTML = `
            <div class="no-results">
                <i class="fas fa-search"></i>
                <p>Nenhum mod encontrado</p>
            </div>
        `;
        return;
    }

    grid.innerHTML = mods.map(mod => `
        <div class="mod-card" onclick="openModDetail('${mod.id}')">
            <div class="mod-card-header">
                <div class="mod-icon" style="background: ${mod.color || '#9146FF'}">
                    <i class="${mod.icon || 'fas fa-cube'}"></i>
                </div>
                <div class="mod-title">
                    <h3>${mod.name}</h3>
                    <span class="version">${mod.version || '1.0.0'}</span>
                </div>
            </div>
            <p class="mod-description">${mod.description || 'Sem descrição'}</p>
            <div class="mod-footer">
                <div class="mod-meta">
                    <span><i class="fas fa-download"></i> ${mod.downloads || 0}</span>
                    <span><i class="fas fa-calendar"></i> ${mod.updated || '2024'}</span>
                </div>
                <div class="mod-actions">
                    <button class="btn btn-download" onclick="event.stopPropagation(); downloadMod('${mod.id}')">
                        <i class="fas fa-download"></i>
                    </button>
                </div>
            </div>
        </div>
    `).join('');
}

// Abrir detalhes do mod
function openModDetail(modId) {
    window.location.href = `mod-detail.html?id=${modId}`;
}

// Baixar mod individual
async function downloadMod(modId) {
    const mod = allMods.find(m => m.id === modId);
    if (!mod) {
        showToast('Mod não encontrado', 'error');
        return;
    }

    try {
        const downloadUrl = `https://raw.githubusercontent.com/${GITHUB_REPO}/main/mods/${mod.file}`;
        const response = await fetch(downloadUrl);
        
        if (!response.ok) throw new Error('Arquivo não encontrado');
        
        const blob = await response.blob();
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = mod.file;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        window.URL.revokeObjectURL(url);
        
        showToast(`Download de ${mod.name} iniciado!`, 'success');
        
        // Incrementar contador de downloads (opcional)
        // Aqui você pode implementar um sistema para contar downloads
    } catch (error) {
        console.error('Erro no download:', error);
        showToast('Erro ao baixar mod', 'error');
    }
}

// Baixar todos os mods
function setupDownloadAll() {
    const btn = document.getElementById('downloadAllBtn');
    btn.addEventListener('click', async () => {
        for (const mod of allMods) {
            await downloadMod(mod.id);
            // Pequeno delay para não sobrecarregar
            await new Promise(resolve => setTimeout(resolve, 500));
        }
        showToast('Todos os mods foram baixados!', 'success');
    });
}

// Configurar busca
function setupSearch() {
    const searchInput = document.getElementById('searchInput');
    searchInput.addEventListener('input', (e) => {
        const query = e.target.value.toLowerCase();
        const filtered = allMods.filter(mod => 
            mod.name.toLowerCase().includes(query) ||
            mod.description.toLowerCase().includes(query)
        );
        renderMods(filtered);
    });
}

// Sistema de toast
function showToast(message, type = 'success') {
    const existing = document.querySelector('.toast');
    if (existing) existing.remove();

    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    toast.innerHTML = `
        <i class="fas ${type === 'success' ? 'fa-check-circle' : 'fa-exclamation-circle'}"></i>
        <span>${message}</span>
    `;
    document.body.appendChild(toast);

    setTimeout(() => {
        toast.remove();
    }, 3000);
}