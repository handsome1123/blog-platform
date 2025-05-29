export default function EditableContentPreview({ data, onChange }) {
  return (
    <section style={{ padding: '2rem', background: '#fff' }}>
      <h2
        contentEditable
        suppressContentEditableWarning
        onBlur={(e) =>
          onChange({ ...data, contentPreview: { ...data.contentPreview, title: e.target.innerText } })
        }
      >
        {data.contentPreview.title}
      </h2>
      <p
        contentEditable
        suppressContentEditableWarning
        onBlur={(e) =>
          onChange({ ...data, contentPreview: { ...data.contentPreview, summary: e.target.innerText } })
        }
      >
        {data.contentPreview.summary}
      </p>
    </section>
  );
}
