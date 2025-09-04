import { useEffect, useState } from 'react';

export default function TodoItem() {
  const [data, setData] = useState(null);
  const [status, setStatus] = useState('idle'); // 'idle' | 'loading' | 'error'

  useEffect(() => {
    async function fetchTodo() {
      try {
        setStatus('loading');
        const res = await fetch('https://jsonplaceholder.typicode.com/todos/1');
        if (!res.ok) throw new Error('eerror');
        const json = await res.json();
        setData(json);
        setStatus('idle');
      } catch (e) {
        console.error(e);
        setStatus('error');
      }
    }
    fetchTodo();
  }, []);

  if (status === 'loading') return <p>loading…</p>;
  if (status === 'error') return <p className="error">failed to load todo...</p>;

  return data ? (
    <div>
      <p><strong>Title: </strong> {data.title}</p>
      <p><strong>ID: </strong> {data.id}</p>
      <p><strong>User ID: </strong> {data.userId}</p>
      <p><strong>Completed: </strong> {String(data.completed)}</p>
    </div>
  ) : null;
}
