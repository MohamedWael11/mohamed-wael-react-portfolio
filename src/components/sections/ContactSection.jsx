import React from "react";
import { Github, Linkedin, Mail } from "lucide-react";
import Reveal from "../Reveal";

export default function ContactSection() {
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

          <form
            id="contact-form"
            className="contact-form"
            action="https://formsubmit.co/mwael3834@gmail.com"
            method="POST"
          >
            <input type="hidden" name="_subject" value="New portfolio message" />
            <input type="hidden" name="_captcha" value="true" />
            <input type="hidden" name="_template" value="table" />
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
              <input name="_honey" type="text" tabIndex="-1" autoComplete="off" />
            </label>
            <button type="submit" className="btn primary">
              Send message <Mail size={17} />
            </button>
            <p className="contact-form-note">
              Your message will be sent directly to mwael3834@gmail.com.
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
