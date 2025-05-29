import { useState, useEffect } from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Tooltip, Legend } from 'chart.js';
import Header from '../components/Header';

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

const QueryForm = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [queries, setQueries] = useState([]);
  const [statusMessage, setStatusMessage] = useState('');

  useEffect(() => {
    fetchQueries();
  }, []);

  const fetchQueries = async () => {
    try {
      const res = await fetch('http://localhost:5000/api/client-queries');
      const data = await res.json();
      setQueries(data);
    } catch (err) {
      console.error('Error fetching queries:', err);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatusMessage('Submitting...');

    try {
      const res = await fetch('http://localhost:5000/api/client-queries', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const result = await res.json();
      setStatusMessage(`Query submitted: Status - ${result.status}`);
      setFormData({ name: '', email: '', message: '' });
      fetchQueries();
    } catch (err) {
      console.error('Submission error:', err);
      setStatusMessage('Submission failed.');
    }
  };

  const countByStatus = (status) =>
    queries.filter((query) => query.status === status).length;

  const markAsComplete = async (id) => {
    try {
      await fetch(`http://localhost:5000/api/client-queries/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status: 'complete' }),
      });
      fetchQueries();
    } catch (err) {
      console.error('Error updating status:', err);
    }
  };

  const chartData = {
    labels: ['Pending', 'Complete'],
    datasets: [
      {
        label: 'Number of Queries',
        data: [countByStatus('pending'), countByStatus('complete')],
        backgroundColor: ['#fbba3f', '#83C760'],
      },
    ],
  };

  return (
    <div style={{ padding: '6rem', background: '#ffff', color: 'black', fontFamily: 'Arial' }}>
      <Header />
      <h2 style={{ color: '#4facfe' }}>Client Query Submission</h2>

      <form onSubmit={handleSubmit} style={{ background: '#ffff', padding: '1rem', marginBottom: '2rem', borderRadius: '8px' }}>
        <input
          style={{ background: '#e3f2fd', color: 'black', margin: '5px', padding: '10px', border: 'none', borderRadius: '5px' }}
          type="text"
          placeholder="Name"
          value={formData.name}
          required
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        />
        <input
          style={{ background: '#e3f2fd', color: 'black', margin: '5px', padding: '10px', border: 'none', borderRadius: '5px' }}
          type="email"
          placeholder="Email"
          value={formData.email}
          required
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />
        <textarea
          style={{ background: '#e3f2fd', color: 'black', margin: '5px', padding: '10px', border: 'none', borderRadius: '5px', width: '100%' }}
          placeholder="Your message"
          value={formData.message}
          required
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
        />
        <button
          type="submit"
          style={{ background: '#4facfe', color: '#1e1e2f', padding: '10px 20px', border: 'none', borderRadius: '5px', cursor: 'pointer' }}
        >
          Submit
        </button>
        <p>{statusMessage}</p>
      </form>

      <h3 style={{ color: '#4facfe' }}>All Queries</h3>
      <div style={{ maxHeight: '300px', overflowY: 'auto', background: '#ffff', borderRadius: '8px', padding: '1rem' }}>
        <table style={{ width: '100%', color: 'black' }}>
          <thead>
            <tr>
              <th>Name</th>
              <th>Status</th>
              <th>Message</th>
              <th>Auto-Reply</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {queries.map((q) => (
              <tr key={q._id}>
                <td>{q.name}</td>
                <td style={{ color: q.status === 'complete' ? '#83C760' : '#fbba3f' }}>{q.status}</td>
                <td>{q.message}</td>
                <td style={{ color: q.status === 'pending' ? '#4facfe' : '#4ea217' }}>
                  {q.autoReply}
                </td>

                <td>
                  {q.status === 'pending' && (
                    <button
                      onClick={() => markAsComplete(q._id)}
                      style={{
                        background: '#4facfe',
                        color: '#1e1e2f',
                        border: 'none',
                        padding: '5px 10px',
                        borderRadius: '4px',
                        cursor: 'pointer',
                      }}
                    >
                      Mark Complete
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default QueryForm;
