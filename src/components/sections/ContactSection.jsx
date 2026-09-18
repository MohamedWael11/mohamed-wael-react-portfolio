import React, { useState } from "react";
import { Github, Linkedin, Mail } from "lucide-react";
import Reveal from "../Reveal";

export default function ContactSection() {
  const [status, setStatus] = useState("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    setStatus("sending");
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.get("name"),
          email: form.get("email"),
          message: form.get("message"),
          website: form.get("website")
        })
      });

      const responseText = await response.text();
      let result = {};
      try {
        result = responseText ? JSON.parse(responseText) : {};
      } catch {
        throw new Error(
          response.status === 404
            ? "The contact API is not available here yet. Deploy the project to Vercel first."
            : "The server returned an invalid response."
        );
      }
      if (!response.ok) throw new Error(result.error || "Unable to send your message.");

      event.currentTarget.reset();
      setStatus("sent");
    } catch (error) {
      console.error("Contact form submission failed:", error);
      setErrorMessage(error instanceof Error ? error.message : "Unable to send your message.");
      setStatus("error");
    }
  };

  return (
    <Reveal>
      <section id="contact" className="section section-block contact">
        <div className="contact-inner">
          <div className="section-label">04 / Contact</div>
          <p className="contact-kicker">HAVE A PROJECT IN MIND?</p>
          <h2>Let's create<br /><span>something great.</span></h2>
          <p className="contact-desc">Open to internships, junior frontend opportunities, collaborations, and interesting projects.</p>

          <a href="#contact-form" className="btn primary">
            Start a Conversation <Mail size={17} />
          </a>

          <form id="contact-form" className="contact-form" onSubmit={handleSubmit}>
            <div className="contact-form-grid">
              <label>
                Your name
                <input name="name" type="text" placeholder="Mohamed Ali" required />
              </label>
              <label>
                Your email
                <input name="email" type="email" placeholder="you@example.com" required />
              </label>
            </div>
            <label>
              What would you like to build?
              <textarea name="message" rows="5" placeholder="Tell me about your project, idea, or opportunity..." required></textarea>
            </label>
            <label className="contact-honeypot" aria-hidden="true">
              Website
              <input name="website" type="text" tabIndex="-1" autoComplete="off" />
            </label>
            <button type="submit" className="btn primary" disabled={status === "sending"}>
              {status === "sending" ? "Sending..." : status === "sent" ? "Message sent" : "Send message"} <Mail size={17} />
            </button>
            <p className={`contact-form-note ${status === "error" ? "error" : status === "sent" ? "success" : ""}`}>
              {status === "error"
                ? errorMessage
                : status === "sent"
                  ? "Thanks — your message was sent successfully."
                  : "Your message will be sent directly to mwael3834@gmail.com."}
            </p>
          </form>

          <div className="contact-links">
            <a href="https://github.com/MohamedWael11" target="_blank" rel="noreferrer"><Github size={17} /> GitHub</a>
            <a href="https://linkedin.com/in/mohammed-wael-8120b027" target="_blank" rel="noreferrer"><Linkedin size={17} /> LinkedIn</a>
          </div>
        </div>
      </section>
    </Reveal>
  );
}
