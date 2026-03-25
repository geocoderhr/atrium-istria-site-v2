type ConversationPanelProps = {
  prompt: string;
  placeholder: string;
};

export function ConversationPanel({ prompt, placeholder }: ConversationPanelProps) {
  return (
    <section className="conversation-panel" aria-label="Početak razgovora">
      <p className="conversation-panel__prompt">{prompt}</p>
      <div className="conversation-panel__input" role="group" aria-label="Opis objekta">
        <textarea rows={3} placeholder={placeholder} />
        <button type="button">Pošaljite opis</button>
      </div>
    </section>
  );
}
