// Ilustração (HTML/CSS, sem imagem) de como a prévia de um post chega ao Telegram no
// CrownTech Marketing. É só uma ilustração: os "botões" não fazem nada aqui.
export default function TelegramPreview() {
  return (
    <figure className="tg">
      <div className="tg-window" aria-hidden="true">
        <div className="tg-head">
          <span className="tg-avatar">C</span>
          <span className="tg-who">
            <strong>CrownTech Marketing</strong>
            <span>bot</span>
          </span>
        </div>
        <div className="tg-body">
          <div className="tg-bubble">
            <div className="tg-media">
              <span className="tg-media-tag">vídeo 9:16</span>
            </div>
            <p className="tg-text">
              <strong>Novo post agendado</strong>
              <br />
              Facebook e Instagram · hoje, 19:30
            </p>
            <p className="tg-hint">Publica no horário se você não vetar.</p>
          </div>
          <div className="tg-actions">
            <span>Vetar</span>
            <span>Publicar já</span>
          </div>
        </div>
      </div>
      <figcaption>
        Ilustração: a prévia chega ao Telegram antes do horário, com os botões Vetar e Publicar já.
      </figcaption>
    </figure>
  );
}
