// ============================================
// CONFIGURAÇÃO
// ============================================

const GITHUB_REPO = 'byhenriquesilva/modhubmine';

// ============================================
// DADOS DOS MODS (cópia do main.js)
// ============================================

const MODS_DATA = [
    // Copie todo o array MODS_DATA do main.js aqui
    // Para não repetir, você pode importar, mas por simplicidade, copie
];

// ============================================
// CÓDIGO DO SITE
// ============================================

let allMods = [];

document.addEventListener('DOMContentLoaded', async () => {
    const urlParams = new URLSearchParams(window.location.search);
    const modId = urlParams.get('id');
    
    if (!modId) {
        window.location.href = 'index.html';
        return;
    }

    // Carregar dados
    allMods = MODS_DATA;
    
    // Tentar carregar do JSON externo
    try {
        const response = await fetch('mods/mods.json');
        if (response.ok) {
            const data = await response.json();
            if (data && data.length > 0) {
                allMods = data;
            }
        }
    } catch (e) {
        console.log('Usando dados embutidos');
    }
    
    const mod = allMods.find(m => m.id === modId);
    
    if (!mod) {
        document.getElementById('loadingDetail').innerHTML = `
            <i class="fas fa-exclamation-circle" style="font-size: 48px; color: #f44336;"></i>
            <p style="margin-top: 16px;">Mod não encontrado</p>
        `;
        setTimeout(() => window.location.href = 'index.html', 2000);
        return;
    }

    document.getElementById('loadingDetail').style.display = 'none';
    renderModDetail(mod);
});

function renderModDetail(mod) {
    const container = document.getElementById('modDetail');
    
    // Extrair versão do Minecraft
    const mcVersion = mod.mc ? `1.${mod.mc}` : 'Desconhecida';
    
    container.innerHTML = `
        <div class="mod-detail-header">
            <div class="mod-detail-icon" style="background: ${mod.color || '#9146FF'}">
                <i class="fas ${mod.icon || 'fa-cube'}"></i>
            </div>
            <div class="mod-detail-info">
                <h1>${mod.name}</h1>
                <div class="mod-author">
                    <i class="fas fa-user"></i> ${mod.author || 'Desconhecido'}
                </div>
                <div class="version-info">
                    <span><i class="fas fa-tag"></i> Versão ${mod.version || '1.0.0'}</span>
                    <span><i class="fas fa-cube"></i> ${mod.loader || 'Fabric'}</span>
                    <span><i class="fas fa-code-branch"></i> Minecraft ${mcVersion}</span>
                    <span><i class="fas fa-folder"></i> ${mod.category || 'Geral'}</span>
                    <span><i class="fas fa-download"></i> ${mod.downloads || 0} downloads</span>
                    <span><i class="fas fa-file-alt"></i> ${mod.size || 'N/A'}</span>
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
            <div>${mod.description || mod.summary || 'Sem descrição detalhada.'}</div>
        </div>
        
        <div class="mod-detail-description">
            <h2>Informações</h2>
            <ul>
                <li><strong>Nome:</strong> ${mod.name}</li>
                <li><strong>ID:</strong> ${mod.id}</li>
                <li><strong>Autor:</strong> ${mod.author || 'Desconhecido'}</li>
                <li><strong>Versão:</strong> ${mod.version || '1.0.0'}</li>
                <li><strong>Loader:</strong> ${mod.loader || 'Fabric'}</li>
                <li><strong>Minecraft:</strong> ${mcVersion}</li>
                <li><strong>Categoria:</strong> ${mod.category || 'Geral'}</li>
                <li><strong>Tamanho:</strong> ${mod.size || 'N/A'}</li>
                <li><strong>Arquivo:</strong> ${mod.file || 'N/A'}</li>
            </ul>
        </div>
        
        ${mod.dependencies && mod.dependencies.length > 0 ? `
        <div class="mod-detail-description">
            <h2>Dependências</h2>
            <div class="dependencies">
                ${mod.dependencies.map(dep => `
                    <span class="dependency-badge">${dep}</span>
                `).join('')}
            </div>
        </div>
        ` : ''}
        
        ${mod.tags && mod.tags.length > 0 ? `
        <div class="mod-detail-description">
            <h2>Tags</h2>
            <div class="dependencies">
                ${mod.tags.map(tag => `
                    <span class="dependency-badge" style="background: rgba(255,255,255,0.05); color: var(--text-secondary);">#${tag}</span>
                `).join('')}
            </div>
        </div>
        ` : ''}
    `;
}

async function downloadMod(modId) {
    const mod = allMods.find(m => m.id === modId);
    if (!mod) {
        showToast('Mod não encontrado', 'error');
        return;
    }

    try {
        const downloadUrl = `https://raw.githubusercontent.com/${GITHUB_REPO}/main/mods/${mod.file}`;
        const response = await fetch(downloadUrl);
        
        if (!response.ok) {
            const localResponse = await fetch(`mods/${mod.file}`);
            if (!localResponse.ok) throw new Error('Arquivo não encontrado');
            
            const blob = await localResponse.blob();
            const url = window.URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = mod.file;
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
            window.URL.revokeObjectURL(url);
        } else {
            const blob = await response.blob();
            const url = window.URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = mod.file;
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
            window.URL.revokeObjectURL(url);
        }
        
        showToast(`Download de ${mod.name} iniciado!`, 'success');
    } catch (error) {
        console.error('Erro no download:', error);
        showToast('Erro ao baixar mod. Verifique se o arquivo existe.', 'error');
    }
}

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
        if (toast.parentNode) toast.remove();
    }, 3000);
}
