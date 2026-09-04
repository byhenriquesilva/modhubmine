// ============================================
// CONFIGURAÇÃO
// ============================================

const GITHUB_REPO = 'byhenriquesilva/modhubmine'; // Substitua pelo seu

// ============================================
// DADOS DOS MODS (do seu mods.json)
// ============================================

const MODS_DATA = [
    {
        "id": "fabric-api",
        "name": "Fabric API",
        "author": "FabricMC",
        "version": "0.154.2+26.2",
        "loader": "Fabric",
        "mc": "26.2",
        "category": "Biblioteca",
        "size": "2465 KB",
        "file": "fabricapi.jar",
        "summary": "API essencial que fornece os hooks e recursos de compatibilidade usados por praticamente todos os mods Fabric.",
        "description": "<p>O <strong>Fabric API</strong> é o módulo central que fornece ganchos (hooks) importantes e recursos de intercompatibilidade utilizados por mods que usam o toolchain Fabric.</p><p>É uma dependência obrigatória para a grande maioria dos mods Fabric, incluindo praticamente todos os outros itens desta lista.</p>",
        "dependencies": [],
        "tags": ["api", "essencial", "biblioteca"],
        "icon": "fa-code-branch",
        "color": "#56B4E9"
    },
    {
        "id": "forgeconfigapiport",
        "name": "Forge Config API Port",
        "author": "Fuzs",
        "version": "26.2.1",
        "loader": "Fabric",
        "mc": "26.2",
        "category": "Biblioteca",
        "size": "595 KB",
        "file": "ForgeConfigAPIPort.jar",
        "summary": "Porta o sistema de configuração do Forge/NeoForge para outros ecossistemas de mods, como o Fabric.",
        "description": "<p><strong>Forge Config API Port</strong> disponibiliza o sistema de configuração do NeoForge e do Forge para outros ecossistemas de modding.</p><p>Foi projetado com uma arquitetura multi-loader, sendo usado como dependência por diversos mods de Fuzs (como Puzzles Lib, Pick Up Notifier e Visual Workbench).</p>",
        "dependencies": ["Fabric API"],
        "tags": ["api", "configuração", "biblioteca"],
        "icon": "fa-sliders-h",
        "color": "#FCA311"
    },
    {
        "id": "puzzleslib",
        "name": "Puzzles Lib",
        "author": "Fuzs",
        "version": "26.2.1",
        "loader": "Fabric",
        "mc": "26.2",
        "category": "Biblioteca",
        "size": "1119 KB",
        "file": "PuzzlesLib.jar",
        "summary": "Biblioteca compartilhada usada pelos mods de Fuzs, como Pick Up Notifier e Visual Workbench.",
        "description": "<p><strong>Puzzles Lib</strong> é a biblioteca comum utilizada pelos mods do desenvolvedor Fuzs.</p><p>Não adiciona conteúdo por si só, mas é um pré-requisito para diversos outros mods do mesmo autor.</p>",
        "dependencies": ["Fabric API", "Forge Config API Port"],
        "tags": ["biblioteca", "dependência"],
        "icon": "fa-puzzle-piece",
        "color": "#E63946"
    },
    {
        "id": "baguettelib",
        "name": "BaguetteLib",
        "author": "Leclowndu93150",
        "version": "2.0.4",
        "loader": "Fabric",
        "mc": "26.2",
        "category": "Biblioteca",
        "size": "99 KB",
        "file": "baguettelib.jar",
        "summary": "Biblioteca que adiciona novos eventos à API de modding, usada como base por outros mods do mesmo autor.",
        "description": "<p><strong>BaguetteLib</strong> é uma biblioteca focada em adicionar mais eventos à API de modding (e outras funcionalidades extras).</p><p>É uma dependência do mod Particular Reforged, do mesmo desenvolvedor.</p>",
        "dependencies": ["Fabric API"],
        "tags": ["biblioteca", "eventos"],
        "icon": "fa-bread-slice",
        "color": "#F4A261"
    },
    {
        "id": "konkrete",
        "name": "Konkrete",
        "author": "Keksuccino",
        "version": "1.11.1",
        "loader": "Fabric",
        "mc": "26.2",
        "category": "Biblioteca",
        "size": "747 KB",
        "file": "konkrete.jar",
        "summary": "Biblioteca central usada pelos mods de Keksuccino, incluindo o Melody.",
        "description": "<p><strong>Konkrete</strong> é a biblioteca principal (core) usada pelos mods desenvolvidos por Keksuccino.</p><p>É um pré-requisito para o funcionamento do mod Melody.</p>",
        "dependencies": ["Fabric API"],
        "tags": ["biblioteca", "dependência"],
        "icon": "fa-cubes",
        "color": "#2A9D8F"
    },
    {
        "id": "modmenu",
        "name": "Mod Menu",
        "author": "Prospector, haykam821, gniftygnome, TerraformersMC",
        "version": "20.0.0",
        "loader": "Fabric",
        "mc": "26.2",
        "category": "Utilidade",
        "size": "600 KB",
        "file": "modmenu.jar",
        "summary": "Adiciona um menu de mods ao jogo para visualizar e configurar todos os mods instalados.",
        "description": "<p><strong>Mod Menu</strong> adiciona uma tela dedicada para visualizar a lista completa de mods instalados no jogo.</p><p>A partir dele também é possível acessar as telas de configuração dos mods compatíveis, tudo em um único lugar.</p>",
        "dependencies": ["Fabric API"],
        "tags": ["interface", "utilidade", "configuração"],
        "icon": "fa-bars",
        "color": "#E9C46A"
    },
    {
        "id": "appleskin",
        "name": "AppleSkin",
        "author": "squeek502",
        "version": "3.0.10+mc26.2",
        "loader": "Fabric",
        "mc": "26.2",
        "category": "Interface (HUD)",
        "size": "177 KB",
        "file": "appleskin.jar",
        "summary": "Melhora a HUD de comida, mostrando informações sobre saturação, regeneração e valor nutricional dos itens.",
        "description": "<p><strong>AppleSkin</strong> adiciona diversas melhorias visuais na interface (HUD) relacionadas à comida.</p><p>Mostra a barra de saturação de fome, o efeito da regeneração natural de vida, e exibe informações nutricionais ao passar o mouse sobre alimentos no inventário.</p>",
        "dependencies": ["Fabric API"],
        "tags": ["hud", "comida", "informação"],
        "icon": "fa-apple-alt",
        "color": "#E76F51"
    },
    {
        "id": "bettersearch",
        "name": "Better Search",
        "author": "rivalzin",
        "version": "1.3.0",
        "loader": "Fabric",
        "mc": "26.2",
        "category": "Utilidade",
        "size": "270 KB",
        "file": "bettersearch.jar",
        "summary": "Deixa as barras de busca do jogo (como no inventário criativo) mais inteligentes.",
        "description": "<p><strong>Better Search</strong> melhora as barras de pesquisa do Minecraft, tornando-as mais inteligentes e eficientes.</p><p>Facilita a busca por itens, por exemplo no inventário criativo, com resultados mais precisos.</p>",
        "dependencies": ["Fabric API"],
        "tags": ["busca", "inventário", "qualidade de vida"],
        "icon": "fa-search",
        "color": "#4A9EFF"
    },
    {
        "id": "clientsort",
        "name": "ClientSort",
        "author": "NotRyken",
        "version": "3.103.1+26.2",
        "loader": "Fabric",
        "mc": "26.2",
        "category": "Utilidade",
        "size": "342 KB",
        "file": "clientsort.jar",
        "summary": "Organização de inventário versátil e fácil, com diversas opções de ordenação.",
        "description": "<p><strong>ClientSort</strong> permite organizar rapidamente inventários, baús e outros containers com apenas um clique.</p><p>Oferece várias estratégias de ordenação, sendo totalmente client-side (funciona mesmo em servidores sem o mod instalado).</p>",
        "dependencies": ["Fabric API"],
        "tags": ["inventário", "organização", "qualidade de vida"],
        "icon": "fa-sort",
        "color": "#FF6B6B"
    },
    {
        "id": "immediatelyfast",
        "name": "ImmediatelyFast",
        "author": "RK_01",
        "version": "1.16.1+26.2",
        "loader": "Fabric",
        "mc": "26.2",
        "category": "Performance",
        "size": "89 KB",
        "file": "ImmediatelyFast.jar",
        "summary": "Acelera e otimiza a renderização em modo imediato do Minecraft, melhorando o FPS.",
        "description": "<p><strong>ImmediatelyFast</strong> otimiza a forma como o Minecraft renderiza elementos usando o modo imediato (immediate mode), reduzindo o impacto no desempenho.</p><p>É especialmente útil quando há muitos mods que adicionam texto, itens e elementos de tela ao mesmo tempo.</p>",
        "dependencies": [],
        "tags": ["otimização", "render", "fps"],
        "icon": "fa-bolt",
        "color": "#FFD93D"
    },
    {
        "id": "notenoughanimations",
        "name": "NotEnoughAnimations",
        "author": "tr7zw",
        "version": "1.12.4",
        "loader": "Fabric",
        "mc": "26.2",
        "category": "Estética",
        "size": "1892 KB",
        "file": "notenoughanimations.jar",
        "summary": "Adiciona e melhora animações do jogador em terceira pessoa, como ao andar, correr e segurar itens.",
        "description": "<p><strong>NotEnoughAnimations</strong> adiciona animações mais fluidas e realistas para o personagem quando visto em terceira pessoa.</p><p>Melhora movimentos como caminhar, correr, agachar e segurar itens, deixando a visualização do jogador mais natural.</p>",
        "dependencies": ["Fabric API"],
        "tags": ["animação", "terceira pessoa", "visual"],
        "icon": "fa-walking",
        "color": "#9B59B6"
    },
    {
        "id": "lambdynlights",
        "name": "LambDynamicLights",
        "author": "LambdAurora",
        "version": "4.12.2+26.2",
        "loader": "Fabric",
        "mc": "26.2",
        "category": "Estética",
        "size": "1317 KB",
        "file": "lambdynamiclights.jar",
        "summary": "Mod de iluminação dinâmica mais completo, fazendo itens luminosos (como tochas) iluminarem o ambiente ao serem segurados.",
        "description": "<p><strong>LambDynamicLights</strong> é considerado o mod de luz dinâmica mais completo disponível.</p><p>Faz com que itens que emitem luz (tochas, lava, itens brilhantes, etc.) iluminem o ambiente ao redor mesmo sem serem colocados no mundo.</p>",
        "dependencies": ["Fabric API"],
        "tags": ["iluminação", "visual", "qualidade de vida"],
        "icon": "fa-lightbulb",
        "color": "#F4D03F"
    },
    {
        "id": "particular",
        "name": "Particular Reforged",
        "author": "Leclowndu93150",
        "version": "1.5.5",
        "loader": "Fabric",
        "mc": "26.2",
        "category": "Estética",
        "size": "282 KB",
        "file": "particular.jar",
        "summary": "Aprimora a ambientação do jogo com diversos efeitos visuais artesanais.",
        "description": "<p><strong>Particular Reforged</strong> é um mod que melhora a ambientação do Minecraft através de vários efeitos visuais feitos à mão (partículas, atmosfera, detalhes ambientais).</p>",
        "dependencies": ["Fabric API", "Forge Config API Port", "BaguetteLib"],
        "tags": ["partículas", "ambientação", "visual"],
        "icon": "fa-sparkles",
        "color": "#E74C3C"
    },
    {
        "id": "skinlayers3d",
        "name": "3d-Skin-Layers",
        "author": "tr7zw",
        "version": "1.11.2",
        "loader": "Fabric",
        "mc": "26.2",
        "category": "Estética",
        "size": "1920 KB",
        "file": "skinlayers3d.jar",
        "summary": "Renderiza a camada externa (segunda camada) da skin do jogador em 3D, em vez de plana.",
        "description": "<p><strong>3d-Skin-Layers</strong> transforma a segunda camada da skin do jogador (a parte 'overlay') em um modelo 3D, dando mais volume e realismo à aparência do personagem.</p>",
        "dependencies": ["Fabric API"],
        "tags": ["skin", "visual", "personagem"],
        "icon": "fa-user",
        "color": "#2ECC71"
    },
    {
        "id": "smoothgui",
        "name": "SmoothGui",
        "author": "Ezzenix",
        "version": "2.0.0",
        "loader": "Fabric",
        "mc": "26.2",
        "category": "Interface (HUD)",
        "size": "61 KB",
        "file": "smoothgui.jar",
        "summary": "Adiciona animações suaves de abertura e fechamento às interfaces do jogo.",
        "description": "<p><strong>SmoothGui</strong> adiciona uma animação suave ao abrir telas de interface (GUIs), como inventário, baús e menus, deixando a experiência visual mais fluida.</p>",
        "dependencies": [],
        "tags": ["interface", "animação", "visual"],
        "icon": "fa-window-maximize",
        "color": "#3498DB"
    },
    {
        "id": "afkcinematics",
        "name": "AFK Cinematics",
        "author": "spunkyinsaan",
        "version": "1.0.5+26.2",
        "loader": "Fabric",
        "mc": "26.2",
        "category": "Estética",
        "size": "69 KB",
        "file": "afkcinematics.jar",
        "summary": "Inicia tomadas cinematográficas automáticas quando o jogador fica AFK.",
        "description": "<p><strong>AFK Cinematics</strong> ativa câmeras cinematográficas legais quando o jogador permanece parado (AFK) por um tempo, criando cenas dinâmicas ao redor do personagem.</p>",
        "dependencies": ["Fabric API"],
        "tags": ["afk", "câmera", "visual"],
        "icon": "fa-film",
        "color": "#8E44AD"
    },
    {
        "id": "melody",
        "name": "Melody",
        "author": "Keksuccino",
        "version": "1.0.17",
        "loader": "Fabric",
        "mc": "26.2",
        "category": "Áudio",
        "size": "222 KB",
        "file": "melody.jar",
        "summary": "Mod de biblioteca baseado em OpenAL para tocar músicas de fundo personalizadas.",
        "description": "<p><strong>Melody</strong> é um mod de biblioteca baseado em OpenAL que permite tocar músicas de fundo personalizadas no jogo.</p>",
        "dependencies": ["Fabric API", "Konkrete"],
        "tags": ["música", "áudio", "biblioteca"],
        "icon": "fa-music",
        "color": "#1ABC9C"
    },
    {
        "id": "pickupnotifier",
        "name": "Pick Up Notifier",
        "author": "Fuzs",
        "version": "26.2.0",
        "loader": "Fabric",
        "mc": "26.2",
        "category": "Interface (HUD)",
        "size": "71 KB",
        "file": "PickUpNotifier.jar",
        "summary": "Notifica na tela tudo o que o jogador acabou de coletar.",
        "description": "<p><strong>Pick Up Notifier</strong> exibe uma notificação na tela sempre que o jogador coleta um item, mostrando de forma clara tudo que acabou de ser pego.</p>",
        "dependencies": ["Fabric API", "Forge Config API Port", "Puzzles Lib"],
        "tags": ["hud", "notificação", "itens"],
        "icon": "fa-hand",
        "color": "#F39C12"
    },
    {
        "id": "visualworkbench",
        "name": "Visual Workbench",
        "author": "Fuzs",
        "version": "26.2.1",
        "loader": "Fabric",
        "mc": "26.2",
        "category": "Estética",
        "size": "66 KB",
        "file": "VisualWorkbench.jar",
        "summary": "Os itens permanecem visíveis dentro das mesas de trabalho, sendo renderizados sobre elas.",
        "description": "<p><strong>Visual Workbench</strong> faz com que os itens colocados em mesas de crafting (e outras bancadas) permaneçam visíveis, sendo renderizados sobre a própria mesa.</p>",
        "dependencies": ["Fabric API", "Forge Config API Port", "Puzzles Lib"],
        "tags": ["crafting", "visual", "qualidade de vida"],
        "icon": "fa-hammer",
        "color": "#D35400"
    },
    {
        "id": "sodium",
        "name": "Sodium",
        "author": "JellySquid",
        "version": "0.9.0+mc26.2",
        "loader": "Fabric",
        "mc": "26.2",
        "category": "Performance",
        "size": "1788 KB",
        "file": "sodium.jar",
        "summary": "Motor de renderização otimizado com ganhos massivos de FPS.",
        "description": "<p><strong>Sodium</strong> é um motor de renderização poderoso para o Minecraft que melhora bastante a taxa de quadros (FPS) e reduz microtravamentos, além de corrigir diversos problemas gráficos do jogo original.</p>",
        "dependencies": ["Fabric API"],
        "tags": ["otimização", "render", "fps"],
        "icon": "fa-microchip",
        "color": "#2ECC71"
    },
    {
        "id": "sodium-extra",
        "name": "Sodium Extra",
        "author": "FlashyReese",
        "version": "0.9.1+mc26.2",
        "loader": "Fabric",
        "mc": "26.2",
        "category": "Utilidade",
        "size": "445 KB",
        "file": "sodiumextra.jar",
        "summary": "Adiciona opções e recursos extras que não fazem parte do Sodium original.",
        "description": "<p><strong>Sodium Extra</strong> complementa o Sodium com funcionalidades e opções de configuração adicionais que os desenvolvedores optaram por não incluir no mod base.</p>",
        "dependencies": ["Fabric API", "Sodium"],
        "tags": ["otimização", "configuração", "complemento"],
        "icon": "fa-plus-circle",
        "color": "#27AE60"
    },
    {
        "id": "lithium",
        "name": "Lithium",
        "author": "JellySquid, 2No2Name",
        "version": "0.25.1+mc26.2",
        "loader": "Fabric",
        "mc": "26.2",
        "category": "Performance",
        "size": "891 KB",
        "file": "lithium.jar",
        "summary": "Mod gratuito e open-source que otimiza a lógica do jogo, melhorando o desempenho geral.",
        "description": "<p><strong>Lithium</strong> é um mod de otimização gratuito e de código aberto que traz uma ampla gama de melhorias de desempenho ao Minecraft, sem alterar a jogabilidade.</p>",
        "dependencies": [],
        "tags": ["otimização", "performance", "tps"],
        "icon": "fa-battery-full",
        "color": "#3498DB"
    },
    {
        "id": "ferritecore",
        "name": "FerriteCore",
        "author": "malte0811",
        "version": "9.0.0",
        "loader": "Fabric",
        "mc": "26.2",
        "category": "Performance",
        "size": "71 KB",
        "file": "ferritecore.jar",
        "summary": "Reduz o consumo de memória RAM do jogo.",
        "description": "<p><strong>FerriteCore</strong> otimiza a forma como o Minecraft armazena dados internamente, reduzindo significativamente o uso de memória RAM.</p>",
        "dependencies": [],
        "tags": ["otimização", "memória", "performance"],
        "icon": "fa-memory",
        "color": "#9B59B6"
    },
    {
        "id": "iris",
        "name": "Iris",
        "author": "coderbot, IMS212, Justsnoopy30, FoundationGames",
        "version": "1.11.1+mc26.2",
        "loader": "Fabric",
        "mc": "26.2",
        "category": "Estética",
        "size": "2747 KB",
        "file": "iris.jar",
        "summary": "Mod moderno de shaders, compatível com pacotes de shaders feitos para o OptiFine.",
        "description": "<p><strong>Iris</strong> é um mod moderno de shaders para o Minecraft, desenvolvido para ser compatível com pacotes de shaders já existentes feitos para o OptiFine.</p><p>Funciona em conjunto com o Sodium para manter bom desempenho mesmo com shaders ativados.</p>",
        "dependencies": ["Sodium"],
        "tags": ["shaders", "visual", "gráficos"],
        "icon": "fa-eye",
        "color": "#E74C3C"
    },
    {
        "id": "cloth-config",
        "name": "Cloth Config",
        "author": "shedaniel",
        "version": "26.2.155",
        "loader": "Fabric",
        "mc": "26.2",
        "category": "Biblioteca",
        "size": "1109 KB",
        "file": "clothconfig.jar",
        "summary": "API para criação de telas de configuração, usada como dependência por vários mods.",
        "description": "<p><strong>Cloth Config</strong> é uma API que fornece telas de configuração prontas para outros mods utilizarem.</p><p>É uma dependência comum de mods como Visuality e InvMove.</p>",
        "dependencies": [],
        "tags": ["api", "configuração", "biblioteca"],
        "icon": "fa-cog",
        "color": "#7F8C8D"
    },
    {
        "id": "iceberg",
        "name": "Iceberg",
        "author": "Grend",
        "version": "1.4.2.1",
        "loader": "Fabric",
        "mc": "26.2",
        "category": "Biblioteca",
        "size": "352 KB",
        "file": "Iceberg.jar",
        "summary": "Biblioteca com eventos, helpers e utilitários para facilitar o desenvolvimento de outros mods.",
        "description": "<p><strong>Iceberg</strong> é uma biblioteca que contém eventos, funções auxiliares e utilitários para facilitar a criação de outros mods.</p><p>É uma dependência do mod Advancement Plaques, do mesmo autor.</p>",
        "dependencies": ["Fabric API"],
        "tags": ["biblioteca", "dependência"],
        "icon": "fa-iceberg",
        "color": "#5DADE2"
    },
    {
        "id": "polymer-bundled",
        "name": "Polymer",
        "author": "Patbox",
        "version": "0.17.1+26.2",
        "loader": "Fabric",
        "mc": "26.2",
        "category": "Biblioteca",
        "size": "1356 KB",
        "file": "polymerbundled.jar",
        "summary": "Conjunto de bibliotecas para criação de conteúdo controlado pelo servidor sem precisar de resource pack no cliente.",
        "description": "<p><strong>Polymer</strong> é um conjunto de bibliotecas voltado para a criação de conteúdo 'server driven' de forma mais eficiente (itens, blocos e entidades customizados sem exigir mod no cliente).</p><p>É uma dependência do mod Universal Graves.</p>",
        "dependencies": [],
        "tags": ["biblioteca", "servidor", "api"],
        "icon": "fa-link",
        "color": "#2980B9"
    },
    {
        "id": "universal-graves",
        "name": "Universal Graves",
        "author": "Patbox",
        "version": "3.12.0+26.2",
        "loader": "Fabric",
        "mc": "26.2",
        "category": "Gameplay",
        "size": "752 KB",
        "file": "graves.jar",
        "summary": "Mod de covas totalmente customizável que funciona inteiramente no lado do servidor.",
        "description": "<p><strong>Universal Graves</strong> cria uma cova com os itens do jogador ao morrer, evitando perda total do inventário.</p><p>Funciona inteiramente no servidor e é totalmente customizável.</p>",
        "dependencies": ["Fabric API", "Polymer"],
        "tags": ["morte", "inventário", "servidor"],
        "icon": "fa-skull",
        "color": "#2C3E50"
    },
    {
        "id": "jade",
        "name": "Jade",
        "author": "Snownee",
        "version": "26.2.8+fabric",
        "loader": "Fabric",
        "mc": "26.2",
        "category": "Interface (HUD)",
        "size": "997 KB",
        "file": "Jade.jar",
        "summary": "Mostra informações sobre o bloco ou entidade para o qual o jogador está olhando (fork do Hwyla/WAILA).",
        "description": "<p><strong>Jade</strong> exibe um tooltip com informações sobre o bloco ou entidade que o jogador está mirando, como conteúdo de baús, progresso de fornos e muito mais.</p><p>É um fork do clássico mod Hwyla/WAILA.</p>",
        "dependencies": ["Fabric API"],
        "tags": ["hud", "informação", "waila"],
        "icon": "fa-info-circle",
        "color": "#16A085"
    },
    {
        "id": "advancementplaques",
        "name": "Advancement Plaques",
        "author": "Grend",
        "version": "1.7.2",
        "loader": "Fabric",
        "mc": "26.2",
        "category": "Interface (HUD)",
        "size": "191 KB",
        "file": "AdvancementPlaques.jar",
        "summary": "Substitui os avisos padrão de conquistas por placas mais elegantes.",
        "description": "<p><strong>Advancement Plaques</strong> substitui as notificações padrão de conquistas (toasts) por placas visuais mais bonitas e estilizadas.</p>",
        "dependencies": ["Fabric API", "Iceberg"],
        "tags": ["conquistas", "hud", "visual"],
        "icon": "fa-trophy",
        "color": "#F1C40F"
    },
    {
        "id": "visuality",
        "name": "Visuality",
        "author": "PinkGoosik",
        "version": "0.7.14+26.2",
        "loader": "Fabric",
        "mc": "26.2",
        "category": "Estética",
        "size": "79 KB",
        "file": "visuality.jar",
        "summary": "Pequenas melhorias visuais adicionando um monte de novas partículas.",
        "description": "<p><strong>Visuality</strong> adiciona pequenas melhorias visuais ao jogo através de uma variedade de novas partículas.</p>",
        "dependencies": ["Fabric API", "Cloth Config"],
        "tags": ["partículas", "visual", "ambientação"],
        "icon": "fa-cloud",
        "color": "#85C1E9"
    },
    {
        "id": "fwa",
        "name": "Fancy World Animations",
        "author": "maDU59_",
        "version": "1.2.36",
        "loader": "Fabric",
        "mc": "26.2",
        "category": "Estética",
        "size": "199 KB",
        "file": "fwa.jar",
        "summary": "Adiciona diversas animações ao mundo para deixá-lo mais vivo.",
        "description": "<p><strong>Fancy World Animations</strong> adiciona uma série de animações ao mundo (como folhas, grama e outros elementos) para deixar o ambiente mais vivo e dinâmico.</p>",
        "dependencies": ["Fabric API"],
        "tags": ["animação", "ambientação", "visual"],
        "icon": "fa-tree",
        "color": "#27AE60"
    },
    {
        "id": "continuity",
        "name": "Continuity",
        "author": "PepperCode1",
        "version": "3.0.1+26.2",
        "loader": "Fabric",
        "mc": "26.2",
        "category": "Estética",
        "size": "1016 KB",
        "file": "continuity.jar",
        "summary": "Permite usar texturas conectadas e emissivas de resource packs no formato OptiFine, sem precisar do OptiFine.",
        "description": "<p><strong>Continuity</strong> permite que resource packs que usam o formato de texturas conectadas do OptiFine (CTM) ou texturas emissivas do OptiFine funcionem sem a necessidade de instalar o OptiFine.</p>",
        "dependencies": ["Fabric API"],
        "tags": ["texturas", "resource pack", "visual"],
        "icon": "fa-paint-brush",
        "color": "#E67E22"
    },
    {
        "id": "invmove",
        "name": "InvMove",
        "author": "PieKing1215",
        "version": "0.9.5",
        "loader": "Fabric",
        "mc": "26.2",
        "category": "Utilidade",
        "size": "82 KB",
        "file": "InvMove.jar",
        "summary": "Permite que o jogador se mova enquanto está com um inventário ou baú aberto.",
        "description": "<p><strong>InvMove</strong> permite que o jogador continue se movendo enquanto tem uma tela de inventário, baú ou outro container aberta.</p>",
        "dependencies": ["Cloth Config"],
        "tags": ["inventário", "movimento", "qualidade de vida"],
        "icon": "fa-arrows-alt",
        "color": "#2ECC71"
    },
    {
        "id": "mr_serversleep",
        "name": "Server Sleep",
        "author": "aninus",
        "version": "3",
        "loader": "Fabric",
        "mc": "26.2",
        "category": "Utilidade",
        "size": "9 KB",
        "file": "serversleep.jar",
        "summary": "O mod de sono multiplayer mais simples: reduz a porcentagem de jogadores necessária para dormir para 50%.",
        "description": "<p><strong>Server Sleep</strong> é o mod de sono multiplayer mais simples que existe. Ele altera a porcentagem de jogadores necessária para pular a noite (playersSleepingPercentage) para 50%.</p>",
        "dependencies": [],
        "tags": ["multiplayer", "sono", "servidor"],
        "icon": "fa-moon",
        "color": "#34495E"
    },
    {
        "id": "simple_villager_follow",
        "name": "Simple Villager Follow",
        "author": "Leclowndu93150, Lupin",
        "version": "1.0.0",
        "loader": "Fabric",
        "mc": "26.2",
        "category": "Gameplay",
        "size": "14 KB",
        "file": "simplevillagerfollow.jar",
        "summary": "Faz os aldeões seguirem jogadores que estejam segurando esmeraldas.",
        "description": "<p><strong>Simple Villager Follow</strong> faz com que os aldeões sigam o jogador quando este estiver segurando esmeraldas na mão, de forma simples e direta.</p>",
        "dependencies": [],
        "tags": ["aldeões", "gameplay", "diversão"],
        "icon": "fa-hat-wizard",
        "color": "#8E44AD"
    },
    {
        "id": "essential-container",
        "name": "Essential",
        "author": "SparkUniverse_ (Essential)",
        "version": "1.4.1.1",
        "loader": "Fabric",
        "mc": "26.2",
        "category": "Social/Utilidade",
        "size": "51924 KB",
        "file": "Essential.jar",
        "summary": "Mod client-side que adiciona hospedagem gratuita de mundos, chat com amigos, cosméticos e ferramentas de captura de tela.",
        "description": "<p><strong>Essential</strong> reúne diversos recursos sociais e de qualidade de vida em um único mod client-side.</p><p>Entre as principais funcionalidades estão a hospedagem gratuita de mundos multiplayer (sem precisar configurar um servidor), um sistema de chat e mensagens com amigos, uma biblioteca de skins, e ferramentas para capturar, editar e compartilhar screenshots. Também oferece uma loja opcional de cosméticos.</p>",
        "dependencies": [],
        "tags": ["social", "hospedagem", "cosméticos", "screenshot"],
        "icon": "fa-users",
        "color": "#3498DB"
    }
];

// ============================================
// CÓDIGO DO SITE
// ============================================

let allMods = [];
let filteredMods = [];

// Inicialização
document.addEventListener('DOMContentLoaded', async () => {
    await loadMods();
    setupSearch();
    setupFilters();
    setupDownloadAll();
    updateStats();
});

// Carregar mods
async function loadMods() {
    const loadingMessage = document.getElementById('loadingMessage');
    
    try {
        // Usar dados embutidos
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
        
        if (loadingMessage) loadingMessage.style.display = 'none';
        
        filteredMods = [...allMods];
        renderMods(filteredMods);
    } catch (error) {
        console.error('Erro ao carregar mods:', error);
        if (loadingMessage) {
            loadingMessage.innerHTML = `
                <i class="fas fa-exclamation-circle" style="font-size: 48px; color: #f44336;"></i>
                <p style="margin-top: 16px;">Erro ao carregar mods. Tente novamente.</p>
            `;
        }
    }
}

// Renderizar mods
function renderMods(mods) {
    const grid = document.getElementById('modsGrid');
    
    if (!mods || mods.length === 0) {
        grid.innerHTML = `
            <div class="no-results">
                <i class="fas fa-search"></i>
                <p>Nenhum mod encontrado</p>
                <p style="font-size: 14px; color: var(--text-muted);">Tente ajustar os filtros ou a busca</p>
            </div>
        `;
        return;
    }

    grid.innerHTML = mods.map(mod => `
        <div class="mod-card" onclick="openModDetail('${mod.id}')">
            <div class="mod-card-header">
                <div class="mod-icon" style="background: ${mod.color || '#9146FF'}">
                    <i class="fas ${mod.icon || 'fa-cube'}"></i>
                </div>
                <div class="mod-title">
                    <h3>${mod.name}</h3>
                    <div>
                        <span class="version">${mod.version || '1.0.0'}</span>
                        <span class="category">${mod.category || 'Geral'}</span>
                    </div>
                </div>
            </div>
            <p class="mod-description">${mod.summary || mod.description || 'Sem descrição'}</p>
            <div class="mod-tags">
                ${(mod.tags || []).slice(0, 3).map(tag => `<span class="mod-tag">#${tag}</span>`).join('')}
            </div>
            <div class="mod-footer">
                <div class="mod-meta">
                    <span><i class="fas fa-user"></i> ${mod.author || 'Desconhecido'}</span>
                    <span><i class="fas fa-download"></i> ${mod.downloads || 0}</span>
                    <span><i class="fas fa-file-alt"></i> ${mod.size || 'N/A'}</span>
                </div>
                <div class="mod-actions">
                    <button class="btn btn-download btn-sm" onclick="event.stopPropagation(); downloadMod('${mod.id}')">
                        <i class="fas fa-download"></i>
                    </button>
                </div>
            </div>
        </div>
    `).join('');
}

// Atualizar estatísticas
function updateStats() {
    const totalSpan = document.getElementById('totalMods');
    if (totalSpan) {
        totalSpan.textContent = allMods.length;
    }
}

// Abrir detalhes do mod
function openModDetail(modId) {
    window.location.href = `mod-detail.html?id=${modId}`;
}

// Baixar mod
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

// Baixar todos
function setupDownloadAll() {
    const btn = document.getElementById('downloadAllBtn');
    if (btn) {
        btn.addEventListener('click', async () => {
            const toDownload = filteredMods.length > 0 ? filteredMods : allMods;
            for (const mod of toDownload) {
                await downloadMod(mod.id);
                await new Promise(resolve => setTimeout(resolve, 500));
            }
            showToast(`${toDownload.length} mods baixados!`, 'success');
        });
    }
}

// Configurar busca
function setupSearch() {
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            applyFilters();
        });
    }
}

// Configurar filtros
function setupFilters() {
    const filters = ['categoryFilter', 'versionFilter', 'sortFilter'];
    filters.forEach(id => {
        const el = document.getElementById(id);
        if (el) {
            el.addEventListener('change', applyFilters);
        }
    });
}

// Aplicar filtros
function applyFilters() {
    const searchQuery = document.getElementById('searchInput')?.value.toLowerCase() || '';
    const category = document.getElementById('categoryFilter')?.value || 'all';
    const version = document.getElementById('versionFilter')?.value || 'all';
    const sort = document.getElementById('sortFilter')?.value || 'name';

    let result = allMods.filter(mod => {
        const matchSearch = mod.name.toLowerCase().includes(searchQuery) ||
                           (mod.summary && mod.summary.toLowerCase().includes(searchQuery)) ||
                           (mod.description && mod.description.toLowerCase().includes(searchQuery));
        const matchCategory = category === 'all' || mod.category === category;
        const matchVersion = version === 'all' || mod.mc === version;
        return matchSearch && matchCategory && matchVersion;
    });

    // Ordenar
    result.sort((a, b) => {
        if (sort === 'name') return a.name.localeCompare(b.name);
        if (sort === 'downloads') return (b.downloads || 0) - (a.downloads || 0);
        if (sort === 'size') {
            const sizeA = parseInt(a.size) || 0;
            const sizeB = parseInt(b.size) || 0;
            return sizeB - sizeA;
        }
        return 0;
    });

    filteredMods = result;
    renderMods(result);
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
        if (toast.parentNode) toast.remove();
    }, 3000);
}
