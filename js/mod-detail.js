// Configuração
const MODS_FILE = 'mods/mods.json';
const GITHUB_REPO = 'byhenriquesilva/modhubmine'; // Substitua

// Inicialização
document.addEventListener('DOMContentLoaded', async () => {
    const urlParams = new URLSearchParams(window.location.search);
    const modId = urlParams.get('id');
    
    if (!modId) {
        window.location.href = 'index.html';
        return;
    }

    await loadModDetail(modId);
});

// Carregar detalhes do mod
async function loadModDetail(modId) {
    try {
        const response = await fetch(MODS_FILE);
        const data = await response.json();
        const mod = data.mods.find(m => m.id === modId);
        
        if (!mod) {
            showToast('Mod não encontrado', 'error');
            setTimeout(() => window.location.href = 'index.html', 2000);
            return;
        }

        renderModDetail(mod);
    } catch (error) {
        console.error('Erro ao carregar detalhes:', error);
        showToast('Erro ao carregar detalhes', 'error');
    }
}

// Renderizar detalhes do mod
function renderModDetail(mod) {
    const container = document.getElementById('modDetail');
    
    container.innerHTML = `
        <div class="mod-detail-header">
            <div class="mod-detail-icon" style="background: ${mod.color || '#9146FF'}">
                <i class="${mod.icon || 'fas fa-cube'}"></i>
            </div>
            <div class="mod-detail-info">
                <h1>${mod.name}</h1>
                <div class="version">
                    <i class="fas fa-tag"></i> Versão ${mod.version || '1.0.0'}
                    <span style="margin-left: 16px;">
                        <i class="fas fa-download"></i> ${mod.downloads || 0} downloads
                    </span>
                </div>
                <div class="mod-detail-actions">
                    <button class="btn btn-download" onclick="downloadMod('${mod.id}')">
                        <i class="fas fa-download"></i> Baixar Mod
                    </button>
                    <button class="btn btn-secondary" onclick="window.location.href='index.html'">
                        <i class="fas fa-arrow-left"></i> Voltar
                    </button>
                </div>
            </div>
        </div>
        
        <div class="mod-detail-description">
            <h2>Sobre este mod</h2>
            <p>${mod.fullDescription || mod.description || 'Sem descrição detalhada.'}</p>
        </div>
        
        <div class="mod-detail-description">
            <h2>Informações</h2>
            <ul style="list-style: none; padding: 0; color: var(--text-secondary);">
                <li><strong>Autor:</strong> ${mod.author || 'Desconhecido'}</li>
                <li><strong>Data de atualização:</strong> ${mod.updated || '2024'}</li>
                <li><strong>Compatibilidade:</strong> ${mod.compatibility || '1.20.4'}</li>
                ${mod.license ? `<li><strong>Licença:</strong> ${mod.license}</li>` : ''}
            </ul>
        </div>
    `;
}

// Download do mod (mesma função do main.js)
async function downloadMod(modId) {
    try {
        const response = await fetch(MODS_FILE);
        const data = await response.json();
        const mod = data.mods.find(m => m.id === modId);
        
        if (!mod) {
            showToast('Mod não encontrado', 'error');
            return;
        }

        const downloadUrl = `https://raw.githubusercontent.com/${GITHUB_REPO}/main/mods/${mod.file}`;
        const fileResponse = await fetch(downloadUrl);
        
        if (!fileResponse.ok) throw new Error('Arquivo não encontrado');
        
        const blob = await fileResponse.blob();
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = mod.file;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        window.URL.revokeObjectURL(url);
        
        showToast(`Download de ${mod.name} iniciado!`, 'success');
    } catch (error) {
        console.error('Erro no download:', error);
        showToast('Erro ao baixar mod', 'error');
    }
}

// Sistema de toast (copiado do main.js)
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