export default function EditableHeroBanner({ data, onChange }) {
  return (
    <section style={{ background: '#f4f4f4', padding: '2rem' }}>
      <h1
        contentEditable
        suppressContentEditableWarning
        onBlur={(e) => onChange({ ...data, heroTitle: e.target.innerText })}
      >
        {data.heroTitle}
      </h1>
      <p
        contentEditable
        suppressContentEditableWarning
        onBlur={(e) => onChange({ ...data, heroSubtitle: e.target.innerText })}
      >
        {data.heroSubtitle}
      </p>
    </section>
  );
}
