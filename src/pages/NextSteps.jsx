import { useState } from 'react';
import { Link } from 'react-router-dom';
import './NextSteps.css';

const NextSteps = () => {
  const [completedSteps, setCompletedSteps] = useState([]);

  const toggleStep = (stepIndex) => {
    setCompletedSteps((prev) =>
      prev.includes(stepIndex)
        ? prev.filter((i) => i !== stepIndex)
        : [...prev, stepIndex],
    );
  };

  const steps = [
    {
      title: 'Get a Bible',
      desc: "The Bible is God's Word and your guide for life. Start with a translation you can understand easily.",
      actionUrl: 'https://www.biblegateway.com/',
      isExternal: true,
      actionLabel: 'Find a Bible',
    },
    {
      title: 'Start Reading',
      desc: "Begin reading God's Word daily. Start with the Gospel of John to learn about Jesus, then Romans to understand salvation.",
      actionUrl:
        'https://www.biblegateway.com/passage/?search=John%201&version=KJV',
      isExternal: true,
      actionLabel: 'Read John 1',
    },
    {
      title: 'Pray Daily',
      desc: 'Prayer is simply talking to God. Thank Him, confess sins, ask for help, and pray for others.',
    },
    {
      title: 'Find a Church',
      desc: 'Join a Bible-believing church where you can grow, learn, and fellowship with other Christians.',
    },
    {
      title: 'Get Baptized',
      desc: 'Baptism is your public declaration of faith in Jesus Christ. It symbolizes your old life dying and new life beginning.',
    },
    {
      title: 'Share Your Faith',
      desc: 'Tell others what Jesus has done for you! Your testimony is powerful and can lead others to Christ.',
      actionUrl: '/gospel-tracts',
      actionLabel: 'Explore gospel tracts',
    },
  ];

  return (
    <div className="next-steps-page">
      <header className="next-steps-intro">
        <h1>New Believer — Next Steps</h1>
        <p>Congratulations on your decision to follow Jesus! Here are six
          practical steps to help you grow in your new faith.</p>
      </header>

      <section className="next-steps-guide" aria-labelledby="next-steps-heading">
        <div className="next-steps-heading">
          <div>
            <h2 id="next-steps-heading">Begin your walk with Jesus</h2>
            <p>Take one step at a time. Mark each one as you go.</p>
          </div>
          <p className="next-steps-count" role="status">
            {completedSteps.length} of {steps.length} completed
          </p>
        </div>
        <ol className="next-steps-list">
          {steps.map((step, index) => (
            <li className="next-steps-item" key={step.title}>
              <div className="next-steps-details">
                <span className="next-steps-number">Step {index + 1}</span>
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
                {step.actionUrl && (step.isExternal ? (
                  <a href={step.actionUrl} target="_blank" rel="noopener noreferrer"
                    className="next-steps-link"
                    aria-label={`${step.actionLabel} (opens in a new tab)`}>
                    {step.actionLabel} <span aria-hidden="true">↗</span>
                  </a>
                ) : (
                  <Link to={step.actionUrl} className="next-steps-link">{step.actionLabel}</Link>
                ))}
              </div>
              <label className="next-steps-check">
                <input type="checkbox" checked={completedSteps.includes(index)}
                  onChange={() => toggleStep(index)}
                  aria-label={`Mark ${step.title} complete`} />
                <span>{completedSteps.includes(index) ? 'Completed' : 'Mark complete'}</span>
              </label>
            </li>
          ))}
        </ol>
      </section>

      <section className="next-steps-support" aria-labelledby="next-steps-support-heading">
        <h2 id="next-steps-support-heading">You’re not alone</h2>
        <p>God is with you every step of the way. The Holy Spirit lives
          within you to guide, comfort, and strengthen you.</p>
        <div className="next-steps-actions">
          <Link to="/discipleship" className="next-steps-primary">Foundations of Our Faith</Link>
          <Link to="/contact" className="next-steps-link">Need help? Contact us</Link>
        </div>
      </section>
    </div>
  );
};

export default NextSteps;
