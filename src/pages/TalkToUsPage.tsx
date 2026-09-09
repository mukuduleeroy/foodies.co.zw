import React from "react";
import { Clock, Mail, MapPin, MessageSquare, Phone, Send, Store, Utensils } from "lucide-react";

const contactTopics = [
  {
    title: "Store Enquiry",
    description: "Ask about opening hours, locations, or a recent visit.",
    icon: Store
  },
  {
    title: "Menu Question",
    description: "Check ingredients, availability, specials, or catering options.",
    icon: Utensils
  },
  {
    title: "Feedback",
    description: "Tell us what worked, what missed, or how we can make it better.",
    icon: MessageSquare
  }
];

const contactDetails = [
  { label: "Call", value: "+263 000 000 000", icon: Phone },
  { label: "Email", value: "hello@foodies.co.zw", icon: Mail },
  { label: "Hours", value: "Open daily, 9:00 AM - 9:00 PM", icon: Clock },
  { label: "Harare", value: "Karigamombe Centre and Graniteside", icon: MapPin }
];

export function TalkToUsPage() {
  const [submitted, setSubmitted] = React.useState(false);
  const [topic, setTopic] = React.useState(contactTopics[0].title);

  return (
    <main className="talk-page">
      <section className="talk-hero" aria-labelledby="talk-title">
        <span className="talk-rule" aria-hidden="true"></span>
        <p>Contact Foodies</p>
        <h1 id="talk-title">Talk To Us</h1>
        <strong>Questions, feedback, store help, or cravings. Send it through.</strong>
      </section>

      <section className="talk-grid" aria-label="Contact options">
        {contactTopics.map((item) => {
          const Icon = item.icon;
          return (
            <button
              className={topic === item.title ? "talk-topic active" : "talk-topic"}
              key={item.title}
              type="button"
              onClick={() => setTopic(item.title)}
            >
              <Icon size={24} />
              <span>{item.title}</span>
              <small>{item.description}</small>
            </button>
          );
        })}
      </section>

      <section className="talk-content" aria-label="Contact form and details">
        <form
          className="talk-form"
          onSubmit={(event) => {
            event.preventDefault();
            setSubmitted(true);
          }}
        >
          <div className="form-heading">
            <span>{topic}</span>
            <h2>Send A Message</h2>
          </div>
          <label>
            Full name
            <input name="name" type="text" required placeholder="Your name" />
          </label>
          <label>
            Email address
            <input name="email" type="email" required placeholder="you@example.com" />
          </label>
          <label>
            Phone number
            <input name="phone" type="tel" placeholder="+263" />
          </label>
          <label>
            Message
            <textarea name="message" required rows={5} placeholder="How can we help?" />
          </label>
          <button className="talk-submit" type="submit">
            <Send size={18} />
            Send message
          </button>
          {submitted && <p className="form-success">Thanks. Your message is ready for the Foodies team.</p>}
        </form>

        <aside className="talk-details" aria-label="Foodies contact details">
          <h2>Foodies Help Desk</h2>
          <p>Reach us directly or choose a topic and we will route your message to the right team.</p>
          <div className="talk-detail-list">
            {contactDetails.map((item) => {
              const Icon = item.icon;
              return (
                <article className="talk-detail" key={item.label}>
                  <Icon size={21} />
                  <div>
                    <strong>{item.label}</strong>
                    <span>{item.value}</span>
                  </div>
                </article>
              );
            })}
          </div>
        </aside>
      </section>
    </main>
  );
}
