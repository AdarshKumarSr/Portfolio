import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

const Contact = () => {
  const [state, handleSubmit] = useForm("xdkzqgaj");

  if (state.succeeded) {
    return (
      <div
        className="flex items-center justify-center min-h-screen px-6 py-12"
        style={{ backgroundColor: "var(--bg-color)", color: "var(--text-color)" }}
      >
        <div
          className="p-8 rounded-xl shadow-lg text-center max-w-md"
          style={{ backgroundColor: "var(--button-bg)", color: "var(--text-color)" }}
        >
          <h2 className="text-2xl font-bold mb-2" style={{ color: "var(--button-text)" }}>
            Thank you!
          </h2>
          <p>Your message has been sent successfully.</p>
        </div>
      </div>
    );
  }

  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen px-6 py-12"
      style={{ backgroundColor: "var(--bg-color)", color: "var(--text-color)" }}
    >
      <h1 className="text-4xl font-extrabold mb-6" style={{ color: "var(--text-color)" }}>
        Get in Touch
      </h1>

      <p className="text-lg mb-8 text-center max-w-2xl" style={{ color: "var(--text-color)" }}>
        I’d love to hear from you! Whether you have a question about projects, collaborations, or just want to say hi,
        feel free to drop a message.
      </p>

      <form
        onSubmit={handleSubmit}
        className="w-full max-w-lg rounded-xl shadow-lg p-8 space-y-6"
        style={{ backgroundColor: "var(--button-bg)", color: "var(--text-color)" }}
      >
        <div>
          <label
            className="block text-sm font-semibold mb-2"
            htmlFor="name"
            style={{ color: "var(--text-color)" }}
          >
            Name
          </label>
          <input
            id="name"
            type="text"
            name="name"
            placeholder="Your Name"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2"
            style={{
              backgroundColor: "var(--bg-color)",
              color: "var(--text-color)",
              borderColor: "var(--link-bg-hover)",
            }}
            required
          />
        </div>

        <div>
          <label
            className="block text-sm font-semibold mb-2"
            htmlFor="email"
            style={{ color: "var(--text-color)" }}
          >
            Email
          </label>
          <input
            id="email"
            type="email"
            name="email"
            placeholder="you@example.com"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2"
            style={{
              backgroundColor: "var(--bg-color)",
              color: "var(--text-color)",
              borderColor: "var(--link-bg-hover)",
            }}
            required
          />
          <ValidationError prefix="Email" field="email" errors={state.errors} />
        </div>

        <div>
          <label
            className="block text-sm font-semibold mb-2"
            htmlFor="message"
            style={{ color: "var(--text-color)" }}
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows="4"
            placeholder="Your message..."
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2"
            style={{
              backgroundColor: "var(--bg-color)",
              color: "var(--text-color)",
              borderColor: "var(--link-bg-hover)",
            }}
            required
          />
          <ValidationError prefix="Message" field="message" errors={state.errors} />
        </div>

        <button
          type="submit"
          disabled={state.submitting}
          className="w-full font-semibold py-3 rounded-lg transition-colors duration-200"
          style={{
            backgroundColor: "var(--button-bg)",
            color: "var(--button-text)",
          }}
        >
          {state.submitting ? 'Sending...' : 'Send Message'}
        </button>
      </form>
    </div>
  );
};

export default Contact;
