document.addEventListener('DOMContentLoaded', function() {

    // Lógica para o Acordeão do FAQ
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        const answer = item.querySelector('.faq-answer');

        question.addEventListener('click', () => {
            
            faqItems.forEach(otherItem => {
                if (otherItem !== item && otherItem.classList.contains('active')) {
                    otherItem.classList.remove('active');
                    otherItem.querySelector('.faq-answer').style.maxHeight = 0;
                }
            });

            
            const isActive = item.classList.toggle('active');
            if (isActive) {
                answer.style.maxHeight = answer.scrollHeight + 'px';
            } else {
                answer.style.maxHeight = 0;
            }
        });
    });

});

// LÓGICA PARA O MENU MOBILE
const mobileMenuIcon = document.querySelector('.mobile-menu-icon');
const mainNav = document.querySelector('.main-nav');
const navLinks = document.querySelectorAll('.main-nav a');
const icon = mobileMenuIcon.querySelector('.material-icons'); 

// Abre e fecha o menu pelo mesmo botão
if (mobileMenuIcon) {
    mobileMenuIcon.addEventListener('click', () => {
        
        mainNav.classList.toggle('mobile-open');

        if (mainNav.classList.contains('mobile-open')) {
            icon.textContent = 'close'; 
        } else {
            icon.textContent = 'menu'; 
        }
    });
}

// Fecha o menu e reseta o ícone ao clicar em um link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        if (mainNav.classList.contains('mobile-open')) {
            mainNav.classList.remove('mobile-open');
            icon.textContent = 'menu'; 
        }
    });
});

// LÓGICA PARA O PLAYER DE VÍDEO DO YOUTUBE 

let player;

// Chamada da API do Youtube
function onYouTubeIframeAPIReady() {
    const videoWrapper = document.querySelector('.video-wrapper');
    if (!videoWrapper) return; 

    player = new YT.Player('youtube-player', {
        height: '100%',
        width: '100%',
        videoId: '_a2B7ddhE-M', 
        playerVars: {
            'playsinline': 1,
            'autoplay': 0, 
            'controls': 0, 
            'rel': 0, 
            'showinfo': 0, 
            'modestbranding': 1, 
            'iv_load_policy': 3 
        },
        events: {
            'onStateChange': onPlayerStateChange
        }
    });
}

// Pega o clique no nosso botão de play customizado
const playButton = document.getElementById('play-button');
const videoWrapper = document.querySelector('.video-wrapper');

if (playButton) {
    playButton.addEventListener('click', () => {
        if (player) {
            player.playVideo();
        }
    });
}

// Função para lidar com as mudanças de estado do player
function onPlayerStateChange(event) {
    const videoWrapper = document.querySelector('.video-wrapper');

     
    if (event.data == YT.PlayerState.PLAYING) {
        
        videoWrapper.classList.add('playing');
    } 
    
    else if (event.data == YT.PlayerState.ENDED) {
        
        player.stopVideo(); 
        
        videoWrapper.classList.remove('playing');
    }
}

// --- LÓGICA PARA O FORMULÁRIO DE LEADS ---
const leadForm = document.getElementById('lead-form');

if (leadForm) {
    leadForm.addEventListener('submit', function(event) {
       
        event.preventDefault(); 

        // Definir com Jack se enviará as informações para um servidor ou plataforma de automação de marketing.
        
        alert('Obrigado! Seus dados foram enviados com sucesso. Em breve, um de nossos especialistas entrará em contato.');
        
        
        leadForm.reset();
    });
}