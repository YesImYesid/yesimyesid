// DATOS DE POSTS (aquí agregarás los tuyos)
const posts = [
    {
        id: 1,
        title: "Mi primer post sobre Barismo",
        date: "15 de Enero, 2024",
        category: "Barismo",
        excerpt: "Aprendí a hacer un buen espresso...",
        slug: "primer-post-barismo"
    },
    {
        id: 2,
        title: "Cómo hice este blog retro",
        date: "14 de Enero, 2024",
        category: "Coding",
        excerpt: "Un tutorial de HTML, CSS y JavaScript...",
        slug: "como-hice-blog-retro"
    }
];

// RENDERIZAR POSTS EN LA PÁGINA PRINCIPAL
function renderPosts() {
    const postList = document.querySelector('.post-list');
    
    posts.forEach(post => {
        const postCard = document.createElement('div');
        postCard.className = 'post-card';
        postCard.innerHTML = `
            <h3>${post.title}</h3>
            <div class="meta">📅 ${post.date} | 🏷️ ${post.category}</div>
            <p>${post.excerpt}</p>
            <a href="posts/${post.slug}.html">Leer más →</a>
        `;
        
        // Al hacer click, va al post completo
        postCard.addEventListener('click', () => {
            window.location.href = `posts/${post.slug}.html`;
        });
        
        postList.appendChild(postCard);
    });
}

// EFECTO GLITCH AL CARGAR (retro effect)
function glitchEffect() {
    const header = document.querySelector('header h1');
    const originalText = header.textContent;
    
    let glitchCounter = 0;
    const glitchInterval = setInterval(() => {
        if (glitchCounter > 10) {
            clearInterval(glitchInterval);
            header.textContent = originalText;
            return;
        }
        
        // Distorsiona el texto brevemente
        header.textContent = originalText
            .split('')
            .map(char => Math.random() > 0.7 ? '▓' : char)
            .join('');
        
        glitchCounter++;
    }, 50);
}

// INICIALIZAR TODO AL CARGAR LA PÁGINA
document.addEventListener('DOMContentLoaded', () => {
    renderPosts();
    glitchEffect();
    console.log('🎵 Blog retro cargado');
});