import { useState } from 'react';
import "../App.css";

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function ValidatedForm() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
    confirm: '',
  });

  const [touched, setTouched] = useState({});

  const setField = (key, value) => {
    setForm((f) => ({ ...f, [key]: value }));
  };

  const errors = {
    name: form.name.trim() === '' ? '*name is required' : '',
    email:
      form.email.trim() === '' ? '*email is required'
        : !emailRegex.test(form.email) ? '*email is invalid' : '',
    password:
      form.password.length < 8 ? '*password must be at least 8 characters' : '',
    confirm:
      form.confirm !== form.password ? '*passwords do not match' : '',
  };

  const hasErrors = Object.values(errors).some(Boolean);

  const handleSubmit = (e) => {
    e.preventDefault();
    setTouched({ name: true, email: true, password: true, confirm: true });
    if (!hasErrors) {
      alert(`Submitted!\nName: ${form.name}\nEmail: ${form.email}`);
      setForm({ name: '', email: '', password: '', confirm: '' });
      setTouched({});
    }
  };

  const handleBlur = (field) => setTouched((t) => ({ ...t, [field]: true }));

  return (
    <form className="form" onSubmit={handleSubmit} noValidate>
      {/* <label>
      <span>Name</span>
        <input
          type="text"
          value={form.name}
          onChange={(e) => setField('name', e.target.value)}
          onBlur={() => handleBlur('name')}
          aria-invalid={!!errors.name && touched.name}
          aria-describedby="err-name"
          placeholder="Your full name"
        />
        {touched.name && errors.name && (
          <div id="err-name" className="error">{errors.name}</div>
        )}
      </label> */}

      <div className="form-row">
        <label htmlFor="name">Name</label>
        <input
          id="name"
          type="text"
          value={form.name}
          onChange={(e) => setField('name', e.target.value)}
          onBlur={() => handleBlur('name')}
          aria-invalid={!!errors.name && touched.name}
          aria-describedby="err-name"
          placeholder="Your full name"
        />
      </div>
      {touched.name && errors.name && (
        <div id="err-name" className="error">{errors.name}</div>
      )}

      <div className="form-row">
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          value={form.email}
          onChange={(e) => setField('email', e.target.value)}
          onBlur={() => handleBlur('email')}
          aria-invalid={!!errors.email && touched.email}
          aria-describedby="err-email"
          placeholder="you@example.com"
        />
      </div>
      {touched.email && errors.email && (
        <div id="err-email" className="error">{errors.email}</div>
      )}

      <div className="form-row">
        <label htmlFor="password">Password</label>
        <input
          id="password"
          type="password"
          value={form.password}
          onChange={(e) => setField('password', e.target.value)}
          onBlur={() => handleBlur('password')}
          aria-invalid={!!errors.password && touched.password}
          aria-describedby="err-password"
          placeholder="At least 8 characters"
        />
      </div>
      {touched.password && errors.password && (
        <div id="err-password" className="error">{errors.password}</div>
      )}

      {/* Confirm Password */}
      <div className="form-row">
        <label htmlFor="confirm">Confirm</label>
        <input
          id="confirm"
          type="password"
          value={form.confirm}
          onChange={(e) => setField('confirm', e.target.value)}
          onBlur={() => handleBlur('confirm')}
          aria-invalid={!!errors.confirm && touched.confirm}
          aria-describedby="err-confirm"
          placeholder="Repeat your password"
        />
      </div>
      {touched.confirm && errors.confirm && (
        <div id="err-confirm" className="error">{errors.confirm}</div>
      )}
      {/* <button type="submit" disabled={hasErrors}>Submit</button> */}
      <button type="submit" disabled={hasErrors} className={`btn ${hasErrors ? "btn-disabled" : "btn-active"}`}> Submit </button>

    </form>
  );
}
