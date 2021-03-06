// Importações //
import { FiX, FiClipboard } from 'react-icons/fi';

// CSS //
import './link-item.css';

export default function LinkItem({ closeModal, content }){

    // Função para copiar o link encurtado //
    async function copyLink(){
        await navigator.clipboard.writeText(content.link);
        alert("URL copiada com sucesso!");
    }
    // Fim //

    return(
        <div className="modal-container">

            <div className="modal-header">
              <h2 className="title">Link Encurtado</h2>
              <button onClick={closeModal}>
                  <FiX size={28} color="#000" />
              </button>
            </div>

            <span>
            {content.long_url}
            </span>

            <button className='modal-link' onClick={copyLink}>
                {content.link}
                <FiClipboard size={20} color="#FFF" />
            </button>

        </div>
    );
}