// Função para gerar o PDF
function generatePDF() {
    try {
        const { jsPDF } = window.jspdf;
        const doc = new jsPDF();
        
        let y = 10; // Posição inicial no eixo y

        if (Array.isArray(Chat_history)) {
            chathistory.forEach((message, index) => {
                doc.text(10, y, `${message.sender}: ${message.text}`);
                y += 10; // Incremento para a próxima linha
            });

            // Gera o PDF e faz o download
            doc.save('Chat_history.pdf');
            console.log('PDF gerado e baixado.');
        } else {
            console.error('chathistory não é um array:', Chat_history);
        }
    } catch (error) {
        console.error('Erro ao gerar o PDF:', error);
    }
}

// Função para adicionar o botão ao chatbot
function addButton() {
    try {
        const downloadButton = document.createElement('button');
        downloadButton.innerText = 'Download Chat History';
        downloadButton.onclick = generatePDF;
        downloadButton.style.margin = '10px'; // Adicionar margem para melhor visualização
        
        // Adiciona o botão à área de mensagens do Typebot
        const chatArea = document.querySelector('.typebot-chat');
        if (chatArea) {
            chatArea.appendChild(downloadButton);
            console.log('Botão adicionado à área de mensagens do Typebot.');
        } else {
            console.error('Área de mensagens do Typebot não encontrada.');
        }
    } catch (error) {
        console.error('Erro ao adicionar o botão:', error);
    }
}

// Adiciona o botão quando o Typebot estiver totalmente carregado
document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        try {
            console.log('Tentando adicionar o botão...');
            addButton();
        } catch (error) {
            console.error('Erro ao tentar adicionar o botão:', error);
        }
    }, 2000); // Atraso para garantir que o Typebot esteja totalmente carregado
});
