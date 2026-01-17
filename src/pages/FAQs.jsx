import { useState } from 'react';
import './FAQs.css';

const FAQs = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "Are these materials really free?",
      answer: "Yes! All materials on this website are completely free to download, print, and distribute. We believe the Gospel should be freely shared with everyone."
    },
    {
      question: "Can I print and distribute these tracts?",
      answer: "Absolutely! We encourage you to print and distribute these tracts freely. They are designed to be printed and shared with others. For best results, print on both sides and fold as indicated."
    },
    {
      question: "What languages are available?",
      answer: "We currently offer materials in English, Swahili, Luo, Kikuyu, Kalenjin, Kisii, Arabic, Amharic, Maasai, and Kamba. We are continuously working on adding more languages."
    },
    {
      question: "How do I use the Discipleship materials?",
      answer: "The discipleship program is designed to be completed in order. Start with Level 1 (Foundations) and work through each book. Each level builds on the previous one. You can use these for personal study or to disciple new believers."
    },
    {
      question: "Can I use these materials in my church?",
      answer: "Yes! Churches are welcome to use all materials for evangelism, Sunday school, Bible studies, and discipleship programs. We only ask that you don't sell them."
    },
    {
      question: "How do I take the Salvation Quiz?",
      answer: "Simply visit our Salvation Quiz page and answer each question honestly. The quiz is based on Bible verses and will help you examine your understanding of salvation according to Scripture."
    },
    {
      question: "What is the 'Answer Book' series?",
      answer: "The Answer Book series is a 7-volume collection that answers common questions about Christianity, including topics like soul-winning, church issues, Christian living, false doctrines, and false religions."
    },
    {
      question: "Can I request materials in a new language?",
      answer: "Yes! If you would like to see materials translated into a specific language, please contact us. We are always looking for opportunities to reach more people with the Gospel."
    },
    {
      question: "How can I support this ministry?",
      answer: "The best way to support us is by sharing these materials with others and praying for the ministry. If you'd like to help with translations or distribution, please reach out through our contact page."
    },
    {
      question: "Are the videos on this site original content?",
      answer: "We feature various gospel-related videos and worship content. Some are original productions, while others are curated from trusted sources to edify and encourage believers."
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="faqs-page">
      {/* Hero */}
      <section className="page-hero faqs-hero">
        <div className="container">
          <div className="page-hero-content">
            <span className="section-badge">Help Center</span>
            <h1>Frequently Asked <span className="gradient-text">Questions</span></h1>
            <p>Find answers to common questions about our ministry and resources.</p>
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="faqs-section section">
        <div className="container">
          <div className="faqs-grid">
            {faqs.map((faq, index) => (
              <div 
                className={`faq-item ${openIndex === index ? 'open' : ''}`} 
                key={index}
                onClick={() => toggleFAQ(index)}
              >
                <div className="faq-question">
                  <h4>{faq.question}</h4>
                  <span className="faq-icon">{openIndex === index ? '−' : '+'}</span>
                </div>
                <div className="faq-answer">
                  <p>{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Still Have Questions */}
      <section className="questions-cta section">
        <div className="container">
          <div className="cta-card">
            <h2>Still Have <span className="gradient-text">Questions?</span></h2>
            <p>We'd love to hear from you. Reach out and we'll get back to you as soon as possible.</p>
            <a href="/contact" className="btn btn-primary">Contact Us</a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQs;
