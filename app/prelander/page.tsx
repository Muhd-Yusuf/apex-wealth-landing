"use client";

import Link from "next/link";

const LANDING_URL = "/";

function CBCLogo() {
  return (
    <svg viewBox="0 0 120 28" width="120" height="28" xmlns="http://www.w3.org/2000/svg">
      <circle cx="14" cy="14" r="13" fill="#E02020" />
      <circle cx="14" cy="14" r="7" fill="#fff" />
      <circle cx="14" cy="14" r="4" fill="#E02020" />
      <text x="34" y="20" fontFamily="Helvetica Neue, Arial, sans-serif" fontSize="18" fontWeight="700" fill="#1a1a1a">CBC</text>
      <text x="68" y="20" fontFamily="Helvetica Neue, Arial, sans-serif" fontSize="13" fontWeight="400" fill="#666">News</text>
    </svg>
  );
}

function ShareIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="18" cy="5" r="3" />
      <circle cx="6" cy="12" r="3" />
      <circle cx="18" cy="19" r="3" />
      <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
      <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
    </svg>
  );
}

function ThumbsUpIcon() {
  return (
    <svg viewBox="0 0 16 16" width="10" height="10" fill="#fff">
      <path d="M1 11.7V7.3h2.3v4.4H1zm3.4.2V6.8L7.8 1h.7c.5 0 .8.4.7.9L8.5 5h4.3c.7 0 1.2.6 1.1 1.3l-.8 5c-.1.5-.5.9-1 .9H4.4v-.3z" />
    </svg>
  );
}

function MenuIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="#1a1a1a">
      <rect x="3" y="4" width="18" height="2" rx="1" />
      <rect x="3" y="11" width="18" height="2" rx="1" />
      <rect x="3" y="18" width="18" height="2" rx="1" />
    </svg>
  );
}

function SearchIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#1a1a1a" strokeWidth="2">
      <circle cx="11" cy="11" r="8" />
      <line x1="21" y1="21" x2="16.65" y2="16.65" />
    </svg>
  );
}

const comments = [
  {
    name: "Sarah Mitchell",
    city: "Toronto, ON",
    text: "This is incredible news for Canadian taxpayers! I never thought the government would actually give us a way to benefit from our own tax contributions. Just signed up!",
    likes: 347,
    time: "1 hr",
    avatar: "avatar-1",
    initial: "S",
  },
  {
    name: "Marc-Antoine Dufresne",
    city: "Montréal, QC",
    text: "J'ai commencé il y a 2 semaines et j'ai déjà fait CA$1,200 de profit. C'est incroyable! (Started 2 weeks ago and already made CA$1,200 profit. Unbelievable!)",
    likes: 289,
    time: "1 hr",
    avatar: "avatar-2",
    initial: "M",
  },
  {
    name: "David Chen",
    city: "Vancouver, BC",
    text: "My financial advisor told me about this last week. Already deposited and the returns are showing. Finally something that actually works for regular Canadians.",
    likes: 215,
    time: "2 hrs",
    avatar: "avatar-3",
    initial: "D",
  },
  {
    name: "Jennifer Blackwood",
    city: "Calgary, AB",
    text: "As a single mom, this could change everything for my family. Registered and waiting for the call. Fingers crossed there are still spots left!",
    likes: 178,
    time: "2 hrs",
    avatar: "avatar-5",
    initial: "J",
  },
  {
    name: "Robert Makenzie",
    city: "Ottawa, ON",
    text: "I was skeptical at first, but after seeing the PM talk about it on CBC, I figured it must be legitimate. Put in CA$500 and made CA$2,100 in the first week alone.",
    likes: 156,
    time: "3 hrs",
    avatar: "avatar-4",
    initial: "R",
  },
  {
    name: "Priya Sharma",
    city: "Brampton, ON",
    text: "This is a blessing! My husband and I both signed up. Combined, we're making enough extra income to finally start saving for our kids' education through an RESP.",
    likes: 134,
    time: "4 hrs",
    avatar: "avatar-6",
    initial: "P",
  },
  {
    name: "Mike Pedersen",
    city: "Edmonton, AB",
    text: "Does it really work? Sounds too good to be true honestly...",
    likes: 12,
    time: "4 hrs",
    avatar: "avatar-7",
    initial: "M",
    reply: {
      name: "Linda Tran",
      city: "Winnipeg, MB",
      text: "It works Mike! I was doubtful too but I've already withdrawn CA$3,400 to my TD account. It cleared in 24 hours. Give it a try!",
      likes: 89,
      time: "3 hrs",
      initial: "L",
      avatar: "avatar-3",
    },
  },
  {
    name: "Angela Moreau",
    city: "Québec City, QC",
    text: "Mon mari n'y croyait pas. Je me suis inscrite quand même avec CA$250. Après 5 jours, j'avais CA$4,800 sur mon compte. Il est inscrit maintenant aussi! (My husband didn't believe it. I signed up anyway with CA$250. After 5 days I had CA$4,800. He's signed up now too!)",
    likes: 112,
    time: "5 hrs",
    avatar: "avatar-8",
    initial: "A",
  },
  {
    name: "James MacDonald",
    city: "Halifax, NS",
    text: "Registered this morning! The advisor called within 2 hours. Very professional. Can't wait to see my first returns. Thank you PM Carney!",
    likes: 95,
    time: "5 hrs",
    avatar: "avatar-1",
    initial: "J",
  },
  {
    name: "Crystal Fong",
    city: "Surrey, BC",
    text: "I put in CA$750 from my savings. After the first 3 days it turned into CA$6,300! Simple interface, even my parents could use it. Highly recommend!",
    likes: 87,
    time: "6 hrs",
    avatar: "avatar-2",
    initial: "C",
  },
  {
    name: "Trevor Baxter",
    city: "London, ON",
    text: "Best thing to come out of Ottawa in years. Finally a government initiative that helps ordinary people instead of corporations.",
    likes: 76,
    time: "7 hrs",
    avatar: "avatar-4",
    initial: "T",
  },
  {
    name: "Natasha Kozlov",
    city: "Mississauga, ON",
    text: "I dream of early retirement... this could actually make it possible. Signed up and deposited. Will report back!",
    likes: 71,
    time: "8 hrs",
    avatar: "avatar-6",
    initial: "N",
  },
  {
    name: "Wayne Fraser",
    city: "St. John's, NL",
    text: "Showed this to everyone at work. 4 of us signed up during lunch break. Let's go!!",
    likes: 64,
    time: "9 hrs",
    avatar: "avatar-7",
    initial: "W",
  },
  {
    name: "Diane Leblanc",
    city: "Moncton, NB",
    text: "Incredible! Already made enough to cover my car payment this month. Merci!",
    likes: 58,
    time: "10 hrs",
    avatar: "avatar-5",
    initial: "D",
    reply: {
      name: "Guest",
      city: "",
      text: "That's amazing Diane! How long did it take you to see the first results?",
      likes: 19,
      time: "8 hrs",
      initial: "G",
      avatar: "avatar-8",
    },
  },
];

export default function PrelanderPage() {
  return (
    <>
      {/* Top red bar */}
      <div className="cbc-topbar" />

      {/* Header */}
      <header className="cbc-header">
        <div className="cbc-header__inner">
          <div className="cbc-header__left">
            <button className="cbc-header__menu-btn" aria-label="Menu">
              <MenuIcon />
            </button>
            <a href="#" className="cbc-logo">
              <CBCLogo />
            </a>
          </div>
          <div className="cbc-header__right">
            <button className="cbc-header__btn" aria-label="Search">
              <SearchIcon />
            </button>
            <button className="cbc-header__signin">Sign In</button>
          </div>
        </div>
      </header>

      {/* Navigation */}
      <nav className="cbc-nav">
        <div className="cbc-nav__inner">
          {["Home", "News", "Politics", "Business", "Sports", "Arts", "World", "Canada", "Indigenous", "Climate"].map(
            (item) => (
              <a key={item} href="#" className={`cbc-nav__link ${item === "Business" ? "cbc-nav__link--active" : ""}`}>
                {item}
              </a>
            )
          )}
        </div>
      </nav>

      {/* Article */}
      <article className="cbc-article">
        <div className="cbc-article__category">Business &middot; Economy</div>

        <h1 className="cbc-article__headline">
          PM Carney announces new wealth-building initiative: Canadian citizens can now receive passive income from
          national tax fund
          <strong className="cbc-article__notice">
            IMPORTANT: THIS PROGRAM IS ONLY AVAILABLE TO CANADIAN CITIZENS AND PERMANENT RESIDENTS
          </strong>
        </h1>

        {/* Byline */}
        <div className="cbc-byline">
          <div className="cbc-byline__left">
            <span className="cbc-byline__source">CBC News &middot; Power &amp; Politics</span>
            <time className="cbc-byline__time">Posted: 3 hours ago</time>
          </div>
          <button className="cbc-byline__share">
            <ShareIcon />
            Share
          </button>
        </div>

        {/* Hero image placeholder */}
        <div className="cbc-image">
          <div className="cbc-placeholder-img">
            PM Mark Carney during the CBC interview — Replace with actual image
          </div>
          <span className="cbc-image__credit">CBC</span>
          <p className="cbc-image__caption">Prime Minister of Canada Mark Carney during an exclusive interview with CBC&apos;s Power &amp; Politics</p>
        </div>

        {/* Interview content */}
        <p className="cbc-text">
          In an exclusive sit-down interview with Prime Minister Mark Carney, we asked how any{" "}
          <u>Canadian citizen</u> can benefit from the government&apos;s new wealth-building initiative
          that promises to return tax dividends to ordinary Canadians.
        </p>

        <p className="cbc-text">
          <b>Rosemary Barton:</b> &quot;Thank you for joining us, Prime Minister Carney. You recently
          announced that Canada is rolling out a program to share investment returns generated from
          the national tax fund. You mentioned that any <u>Canadian citizen</u> could receive up to
          CA$3,200 per month through this initiative. Can you explain how it works?&quot;
        </p>

        <p className="cbc-text">
          <b>Mark Carney:</b> &quot;Thank you, Rosemary. From the moment I took office, reforming
          how Canadians benefit from their tax contributions has been a top priority. We cannot
          eliminate taxes, of course, but what we can do is ensure that a portion of the returns
          generated by investing the national surplus goes back to the people. Now, every{" "}
          <u>Canadian citizen</u> and permanent resident has the opportunity to receive dividends
          from the national tax fund. Your money will finally work for you, not just for the
          government.&quot;
        </p>

        <p className="cbc-text">
          <b>Rosemary Barton:</b> &quot;So effectively, this is a form of government-backed
          compensation for taxpayers?&quot;
        </p>

        {/* Second image */}
        <div className="cbc-image">
          <div className="cbc-placeholder-img">
            PM Carney explaining the initiative — Replace with actual image
          </div>
          <span className="cbc-image__credit">CBC</span>
        </div>

        <p className="cbc-text">
          <b>Mark Carney:</b> &quot;Precisely. We have allocated returns of up to CA$3,200 per month
          per participant. For some, that amount may seem modest, but for most Canadians it will
          more than offset their tax burden — and provide additional income on top of that.&quot;
        </p>

        <p className="cbc-text">
          <b>Rosemary Barton:</b> &quot;Where does the government source the funds for these
          returns?&quot;
        </p>

        <p className="cbc-text">
          <b>Mark Carney:</b> &quot;When Canadians pay taxes, a portion goes to essential services —
          healthcare, infrastructure, public safety, and so on. But there is a significant surplus
          that has historically sat in government accounts. With my background as Governor of the
          Bank of Canada and the Bank of England, I pushed to have this surplus professionally
          invested. The returns from those investments are what we are now sharing with citizens
          through this program.&quot;
        </p>

        <p className="cbc-text">
          <b>Rosemary Barton:</b> &quot;How can an ordinary Canadian participate? Is it limited to
          certain groups?&quot;
        </p>

        <p className="cbc-text">
          <b>Mark Carney:</b> &quot;This is where{" "}
          <Link href={LANDING_URL} style={{ color: "#e02020", textDecoration: "underline" }}>
            Northvale Capital
          </Link>{" "}
          comes in. After extensive negotiations, I secured 5,000 social investment accounts
          exclusively for Canadian citizens and permanent residents. Anyone over 18 can register on{" "}
          <Link href={LANDING_URL} style={{ color: "#e02020", textDecoration: "underline" }}>
            Northvale Capital
          </Link>{" "}
          and begin receiving passive income. The platform uses advanced AI-driven trading
          algorithms — regulated by CIRO and protected by CIPF — to generate consistent returns
          from stocks, bonds, and currency markets.&quot;
        </p>

        {/* Third image */}
        <div className="cbc-image">
          <div className="cbc-placeholder-img">
            PM Carney and Rosemary Barton during the interview — Replace with actual image
          </div>
          <span className="cbc-image__credit">CBC</span>
        </div>

        <p className="cbc-text">
          <b>Rosemary Barton:</b> &quot;Why does participation require a CA$250 deposit? What
          does that have to do with taxes?&quot;
        </p>

        <p className="cbc-text">
          <b>Mark Carney:</b> &quot;As a government, we cannot issue direct cash payments from the
          tax fund — those would be classified as benefits and subject to different legislation.
          Instead, we partnered with{" "}
          <Link href={LANDING_URL} style={{ color: "#e02020", textDecoration: "underline" }}>
            Northvale Capital
          </Link>
          , a CIPF-protected, CIRO-regulated platform. The CA$250 is not a fee — it is your own
          investment capital that you can withdraw at any time. Once deposited, the AI trading
          system activates your account, and you begin earning. Most participants see around
          CA$3,200 per month, sometimes more. This income is generated through the platform and
          is not subject to additional taxation under current CRA guidelines.&quot;
        </p>

        <p className="cbc-text">
          <b>Rosemary Barton:</b> &quot;Our legal team has verified the framework — it checks out.
          So any Canadian citizen over 18 can invest CA$250 and receive CA$3,200 monthly from this
          government-backed program?&quot;
        </p>

        <p className="cbc-text">
          <b>Mark Carney:</b> &quot;That is correct. Simply register on{" "}
          <Link href={LANDING_URL} style={{ color: "#e02020", textDecoration: "underline" }}>
            Northvale Capital
          </Link>
          , enter your contact details, wait for a call from one of their certified Canadian
          advisors — a CFA or CFP — and make your initial deposit of CA$250. Your account
          activates immediately and begins generating returns.&quot;
        </p>

        <p className="cbc-text">
          <b>Rosemary Barton:</b> &quot;How many spots remain in the program?&quot;
        </p>

        <p className="cbc-text">
          <b>Mark Carney:</b> &quot;Of the original 5,000 accounts, fewer than 900 remain. I would
          encourage anyone watching to register immediately. Let me show you — the process takes
          only a few minutes. Rosemary, take your phone and I&apos;ll walk you through it.&quot;
        </p>

        <p className="cbc-text">
          <b>Rosemary Barton:</b> &quot;Alright, I have my phone. What do I do?&quot;
        </p>

        <p className="cbc-text">
          <b>Mark Carney:</b> &quot;Go to{" "}
          <Link href={LANDING_URL} style={{ color: "#e02020", textDecoration: "underline" }}>
            Northvale Capital
          </Link>{" "}
          and fill in the registration form — your name, email, and phone number. Make sure
          everything is correct because a certified Canadian advisor will call you back at that
          number to help set up and activate your account. Then deposit CA$250 to your balance.
          Give it 20 minutes and you&apos;ll see what the platform can do.&quot;
        </p>

        <p className="cbc-text">
          <b>Rosemary Barton:</b> &quot;Interesting — let&apos;s check back in 20 minutes. What
          happens if you invest more than the minimum?&quot;
        </p>

        <p className="cbc-text">
          <b>Mark Carney:</b> &quot;Higher deposits yield higher returns. The platform&apos;s AI
          can allocate more capital across more opportunities. And because this is backed by the
          Government of Canada and regulated by CIRO, your funds are protected by CIPF — up to
          CA$1 million per account. There is essentially no risk to the deposited capital.&quot;
        </p>

        <p className="cbc-text">
          <b>Rosemary Barton:</b> &quot;How does{" "}
          <Link href={LANDING_URL} style={{ color: "#e02020", textDecoration: "underline" }}>
            Northvale Capital
          </Link>{" "}
          generate these returns?&quot;
        </p>

        <p className="cbc-text">
          <b>Mark Carney:</b> &quot;The AI system analyses global and TSX markets in real time —
          equities, bonds, forex, commodities. It identifies safe, high-probability trades and
          executes them automatically. It operates around the clock, far faster and more accurately
          than any human trader. Combined with the government&apos;s tax surplus allocation, this
          allows us to guarantee stable, consistent returns for participants.&quot;
        </p>

        <p className="cbc-text">
          <b>Rosemary Barton:</b> &quot;It&apos;s been 20 minutes — can we check my account
          now?&quot;
        </p>

        <p className="cbc-text">
          <b>Mark Carney:</b> &quot;Absolutely. Let&apos;s see what your CA$250 has generated.&quot;
        </p>

        {/* Fourth image */}
        <div className="cbc-image">
          <div className="cbc-placeholder-img">
            Rosemary Barton checking her phone — Replace with actual image
          </div>
          <span className="cbc-image__credit">CBC</span>
        </div>

        <p className="cbc-text">
          <b>Rosemary Barton:</b> &quot;CA$68 profit in 20 minutes — and I literally did nothing.
          That&apos;s remarkable. Can you leave instructions for our viewers?&quot;
        </p>

        <p className="cbc-text">
          <b>Mark Carney:</b> &quot;Dear Canadians — as your Prime Minister, I am committed to
          the financial well-being of every citizen. If you are watching or reading this today,
          please register on{" "}
          <Link href={LANDING_URL} style={{ color: "#e02020", textDecoration: "underline" }}>
            Northvale Capital
          </Link>
          . Leave your phone number and contact details so a certified advisor can reach you.
          Be sure to answer the call — spots in this program are extremely limited. Once
          connected, they will guide you through setup. Deposit CA$250 to activate your account
          and start receiving up to CA$3,200 per month. This is your money working for you —
          as it always should have been.&quot;
        </p>

        {/* Registration section */}
        <section className="cbc-reg">
          <h3 className="cbc-reg__title">
            How to start earning with{" "}
            <Link href={LANDING_URL}>Northvale Capital</Link>:
          </h3>
          <ol className="cbc-reg__list">
            <li className="cbc-reg__item">
              Go to the{" "}
              <Link href={LANDING_URL} style={{ color: "#e02020", textDecoration: "underline" }}>
                official Northvale Capital website
              </Link>{" "}
              and fill out the registration form with your name, email, and Canadian phone number.
            </li>
            <li className="cbc-reg__item">
              Wait for a call from a certified Canadian advisor (CFA/CFP) who will help you set up
              your CIPF-protected account over the phone.
            </li>
            <li className="cbc-reg__item">
              Top up your balance with any amount from CA$250. This is your capital — fully
              withdrawable at any time.
            </li>
            <li className="cbc-reg__item">
              Withdraw your profits to any Canadian bank account or keep funds invested to earn
              even more. TFSA-eligible withdrawals available.
            </li>
          </ol>
          <p className="cbc-reg__note">
            <b>Important:</b> According to Prime Minister Carney, fewer than 900 spots remain
            in the program. Even if you haven&apos;t decided yet, we strongly recommend filling
            out the registration form to reserve your account before all spots are taken.
          </p>
          <Link href={LANDING_URL} className="cbc-reg__cta">
            Visit Official Site
          </Link>
        </section>

        {/* Comments */}
        <section className="cbc-comments">
          <h3 className="cbc-comments__title">Comments</h3>

          <div className="cbc-comments__input-row">
            <div className="avatar-initial avatar-8">?</div>
            <input
              type="text"
              className="cbc-comments__input"
              placeholder="Sign up to write a comment..."
              readOnly
            />
          </div>

          <div className="cbc-comments__sort">
            Sort by: <span>Most Relevant</span>
          </div>

          {comments.map((comment, i) => (
            <div key={i}>
              <div className="fb-comment">
                <div className={`avatar-initial ${comment.avatar}`}>{comment.initial}</div>
                <div className="fb-comment__body">
                  <div className="fb-comment__bubble">
                    <div className="fb-comment__name">
                      {comment.name}
                      {comment.city && (
                        <span style={{ fontWeight: 400, color: "#666", fontSize: 12 }}>
                          {" "}&middot; {comment.city}
                        </span>
                      )}
                    </div>
                    <div className="fb-comment__text">{comment.text}</div>
                  </div>
                  <div className="fb-comment__actions">
                    <span className="fb-comment__action">Like</span>
                    <span className="fb-comment__action">Reply</span>
                    <span>{comment.time}</span>
                    <span className="fb-comment__likes">
                      <span className="fb-comment__likes-icon">
                        <ThumbsUpIcon />
                      </span>
                      {comment.likes}
                    </span>
                  </div>
                </div>
              </div>

              {comment.reply && (
                <div className="fb-reply">
                  <div className="fb-comment">
                    <div className={`avatar-initial ${comment.reply.avatar}`}>
                      {comment.reply.initial}
                    </div>
                    <div className="fb-comment__body">
                      <div className="fb-comment__bubble">
                        <div className="fb-comment__name">
                          {comment.reply.name}
                          {comment.reply.city && (
                            <span style={{ fontWeight: 400, color: "#666", fontSize: 12 }}>
                              {" "}&middot; {comment.reply.city}
                            </span>
                          )}
                        </div>
                        <div className="fb-comment__text">{comment.reply.text}</div>
                      </div>
                      <div className="fb-comment__actions">
                        <span className="fb-comment__action">Like</span>
                        <span className="fb-comment__action">Reply</span>
                        <span>{comment.reply.time}</span>
                        <span className="fb-comment__likes">
                          <span className="fb-comment__likes-icon">
                            <ThumbsUpIcon />
                          </span>
                          {comment.reply.likes}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </section>
      </article>

      {/* Related articles */}
      <aside className="cbc-related">
        <div className="cbc-related__header">
          <h3 className="cbc-related__title">Related Stories</h3>
        </div>
        <div className="cbc-related__grid">
          <div className="cbc-related__card">
            <a href="#">
              <h4 className="cbc-related__card-title">
                Bank of Canada holds interest rate steady amid economic growth signals
              </h4>
            </a>
            <span className="cbc-related__card-meta">Business &middot; 2 hours ago</span>
          </div>
          <div className="cbc-related__card">
            <a href="#">
              <h4 className="cbc-related__card-title">
                TSX hits record high as tech and energy sectors surge
              </h4>
            </a>
            <span className="cbc-related__card-meta">Markets &middot; 4 hours ago</span>
          </div>
          <div className="cbc-related__card">
            <a href="#">
              <h4 className="cbc-related__card-title">
                Canada&apos;s GDP growth exceeds forecasts for Q1 2026, StatsCan reports
              </h4>
            </a>
            <span className="cbc-related__card-meta">Economy &middot; 5 hours ago</span>
          </div>
        </div>
      </aside>

      {/* Footer */}
      <footer className="cbc-footer">
        <div className="cbc-footer__inner">
          <div className="cbc-footer__logo">
            <svg viewBox="0 0 60 28" width="60" height="28" xmlns="http://www.w3.org/2000/svg">
              <circle cx="14" cy="14" r="13" fill="#E02020" />
              <circle cx="14" cy="14" r="7" fill="#fff" />
              <circle cx="14" cy="14" r="4" fill="#E02020" />
              <text x="34" y="20" fontFamily="Helvetica Neue, Arial, sans-serif" fontSize="18" fontWeight="700" fill="#fff">
                CBC
              </text>
            </svg>
          </div>
          <div className="cbc-footer__links">
            {["Home", "News", "Politics", "Business", "Sports", "Arts", "World", "Terms of Use", "Privacy Policy", "Accessibility"].map(
              (link) => (
                <a key={link} href="#" className="cbc-footer__link">
                  {link}
                </a>
              )
            )}
          </div>
          <p className="cbc-footer__copy">
            &copy; {new Date().getFullYear()} CBC/Radio-Canada. All rights reserved.
            Visitez Radio-Canada.ca
          </p>
        </div>
      </footer>
    </>
  );
}
