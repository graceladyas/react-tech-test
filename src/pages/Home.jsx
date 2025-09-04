import Counter from '../components/Counter.jsx';
import ValidatedForm from '../components/ValidatedForm.jsx';
import TodoItem from '../components/TodoItem.jsx';
import "../App.css";

export default function Home() {
  return (
    <section className="stack">
      <h1>Home</h1>

      <div className="grid">
        <div className="card task1">
          <h2>Task 1: Counter</h2>
          <Counter />
        </div>

        <div className="card task1">
          <h2>Task 2: Form & Validation</h2>
          <ValidatedForm />
        </div>

        <div className="card task1">
          <h2>Task 3: API Integration</h2>
          <TodoItem />
        </div>
      </div>
    </section>
  );
}

<style></style>