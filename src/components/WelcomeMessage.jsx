import { Link } from 'react-router-dom';
import './WelcomeMessage.css';

export default function WelcomeMessage() {
  return (
    <section className="welcome-message section" id="introduction">
      <div className="container welcome-copy">
        {/* <span className="section-badge">Let the TRUTH be known</span> */}
        <h2>Introduction</h2>
        <p className="welcome-summary">
          Let the Truth be Known helps you explore what the Bible says about
          Jesus Christ and salvation.
        </p>
        <details className="welcome-details">
          <summary>Read our full welcome and purpose</summary>
          <p>
            This site, 'Let the TRUTH be known’, is specifically designed to be
            a source of truth, to give you clear direction. It is easy to
            navigate and to get the answers you are seeking after. The Word of
            God tells us, and the world is evidence, that we are in a spiritual
            battle; a battle for the souls of men.
          </p>
          <p>
            Salvation is the most important issue that every human being in this
            world faces and our video clearly presents the truth, from
            Scripture, on ‘How to be saved.’ It gives you the truth without
            delving into every false doctrine, false religion, and false
            teacher.
          </p>
          <p>
            We have an explanation of the Gospel of Christ in the form of tracts
            and video. They explain Salvation in a number of different
            languages. Also, for the new Christian there is a set of specific,
            easy to understand lessons called ‘Foundations of Our Faith’. Then
            to help you understand the Bible more clearly, we have included more
            in-depth materials that can be trusted to teach the truth.
          </p>
          <p>
            A <Link to="/faqs">Frequently Asked Questions</Link> section gives
            short simple answers to the most often asked questions and will be
            added to as our readers forward their questions to us through our{' '}
            <Link to="/contact">Contact page</Link>. Our final authority is the
            Word of God which is the Foundation of our Faith and the basis of
            all truth. May you be blessed and a blessing to others as you grow
            in knowledge and understanding of God’s Word.
          </p>
          <p>
            Our intention on this site, ‘Let the TRUTH be known’, is to make the
            truth readily accessible and reduce the confusion that surrounds
            Jesus Christ and the Scriptures. This is done by giving free and
            open access to materials which are honest, reliable and available
            for scrutiny and an excellent resource for personal study. Our
            priority is to make sure that a clear salvation message is available
            to whoever is seeking Biblical truth and the Gospel of Jesus Christ.
          </p>
          <blockquote>
            “And ye shall know the truth, and the truth shall make you free.”{' '}
            <cite>John 8:32</cite>
          </blockquote>
        </details>
        <div className="welcome-promise">
          <h2>God’s Will and His Promise</h2>
          <h3>Created and loved by God</h3>
          <p>
            God does not want anyone to go to Hell. He loves His creation but He
            is also a righteous and Holy God. He created the Earth and He
            created Man. God created man in His own image.
          </p>
          <blockquote>
            “So God created man in his own image, in the image of God created he
            him; male and female created he them.” <cite>Genesis 1:27</cite>
          </blockquote>
          <details className="welcome-details">
            <summary>More Scripture: Genesis 1:31</summary>
            <blockquote>
              “And God saw every thing that he had made, and, behold, it was
              very good. And the evening and the morning were the sixth day.”{' '}
              <cite>Genesis 1:31</cite>
            </blockquote>
          </details>
          <h3>God desires our salvation</h3>
          <p>
            God wants all men and women to be saved and receive eternal life
            through Jesus Christ our Lord.
          </p>
          <blockquote>
            “The Lord is not slack concerning his promise, as some men count
            slackness; but is longsuffering to us-ward, not willing that any
            should perish, but that all should come to repentance.”{' '}
            <cite>2 Peter 3:9</cite>
          </blockquote>
          <h3>His promise of eternal life</h3>
          <p>
            Repentance is a change of mind to believing and receiving Jesus
            Christ as your personal Saviour.
          </p>
          <details className="welcome-details">
            <summary>Read John 1:12 and Romans 10:10–13</summary>
            <blockquote>
              “But as many as received him, to them gave he power to become the
              sons of God, even to them that believe on his name:”{' '}
              <cite>John 1:12</cite>
            </blockquote>
            <blockquote>
              “For with the heart man believeth unto righteousness; and with the
              mouth confession is made unto salvation.”{' '}
              <cite>Romans 10:10</cite>
            </blockquote>
            <blockquote>
              “For whosoever shall call upon the name of the Lord shall be
              saved.” <cite>Romans 10:13</cite>
            </blockquote>
          </details>
          <blockquote>
            “And this is the promise that he hath promised us, even eternal
            life.” <cite>1 John 2:25</cite>
          </blockquote>
        </div>
      </div>
    </section>
  );
}
