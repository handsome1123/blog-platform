import { useEffect, useState } from 'react';
import EditableHeroBanner from '../../components/EditableHeroBanner';
import EditableContentPreview from '../../components/EditableContentPreview';
import EditableLatestVideo from '../../components/EditableLatestVideo';
import AdminLayout from '../../components/admin/AdminLayout';

export default function EditHome() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('http://localhost:5000/api/homepage')
      .then((res) => res.json())
      .then(setData);
  }, []);

  const handleChange = (newData) => {
    setData((prev) => ({ ...prev, ...newData }));
  };

  const handleSave = async () => {
    await fetch('http://localhost:5000/api/homepage', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
    alert('Homepage updated!');
  };

  if (!data) return <p>Loading...</p>;

  return (
    <div>
      <AdminLayout>
        <h1 style={{ padding: '1rem' }}>Edit Homepage</h1>
        <EditableHeroBanner data={data} onChange={handleChange} />
        <EditableContentPreview data={data} onChange={handleChange} />
        <EditableLatestVideo data={data} onChange={handleChange} />

        <div style={{ padding: '1rem' }}>
          <button onClick={handleSave}>💾 Save Changes</button>
        </div>
      </AdminLayout>
    </div>
  );
}
