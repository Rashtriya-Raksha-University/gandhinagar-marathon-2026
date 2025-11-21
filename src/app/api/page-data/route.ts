import { NextResponse } from "next/server";

const avatarList = [
  {
    image: "/images/avatar/avatar_1.jpg",
    title: "Sarah Johnson",
  },
  {
    image: "/images/avatar/avatar_2.jpg",
    title: "Olivia Miller",
  },
  {
    image: "/images/avatar/avatar_3.jpg",
    title: "Sophia Roberts",
  },
  {
    image: "/images/avatar/avatar_4.jpg",
    title: "Isabella Clark",
  },
];

const statsFactData = {
  number: "01",
  name: "Stats & facts",
  heading: "We're more than just a running event...",
  description:
    "The BCORE Night Run 2026 is set to welcome thousands of participants, spectators, and sponsors, making it one of India's most remarkable running events. The twist to the tale is that it take place in the glowing night of Gandhinagar. From all across the country, the law enforcement officers shall blend with the civilians, para-abled and u-16 athletes runners. Excited? Simply Register.",
  scoreData: [
    {
      number: 1500,
      numberValue: "",
      scoreDescp: "Expected Participants",
    },
    {
      number: 500,
      numberValue: "",
      scoreDescp: "Spectators",
    },
    {
      number: 5,
      numberValue: "",
      scoreDescp: "Sponsors",
    },
  ],
};

const servicesData = {
  number: "03",
  name: "Race Categories",
  heading: "Choose Your Perfect Race Distance",
  description:
    "From challenging half-marathons to family-friendly team run, we have the perfect race category for every runner. Join us in Gandhinagar for an unforgettable running experience.",
  data: [
    {
      id: 1,
      image: "/images/home/services/service_1.jpg",
      heading: "Half Marathon",
      descp:
        "The BCORE Half-Marathon is going to be one of the fastest and exciting marathons in India. It isn't just any other race – it's the first race organized by an Indian Olympic Centre.",
    },
    {
      id: 2,
      image: "/images/home/services/service_2.jpg",
      heading: "10KM Run",
      descp:
        "The BCORE 10k is the challenge you need. This race will take you across Gandhinagar's most beautiful parks and neighborhoods – from Swarnim Park to the Salt Mount.",
    },
    {
      id: 3,
      image: "/images/crousal/img3.jpg",
      heading: "5KM Run",
      descp:
        "The BCORE 5k is the perfect way to create your own running story. With chill and sporty vibes, this is a running event suitable for young and old to challenge themselves and reach new heights.",
    },
    {
      id: 4,
      image: "/images/crousal/img2.jpg",
      heading: "3KM",
      descp:
        " Get ready for big smiles and lots of excitement! The 3km race is accessible to the u-16 age category and the para-abled. It's all about celebrating the art of inclusivity, ideal for our next generation of runners and people looking to feel a mini mini minimarathon!",
    },
    {
      id: 5,
      image: "/images/crousal/img4.jpg",
      heading: "Team Run",
      descp:
        "Bhaag Milkar Bhaag embodies the spirit of collaboration and endurance across every domain — sea, air, and land. Designed to foster unity and camaraderie, this unique team run invites 3- person pairs to achieve success or gossip together. The event culminates with winning teams receiving personalized gift vouchers, celebrating both achievement and teamwork.",
    },
  ],
};

const testimonialData = {
  data_1: {
    preTitle: "Hear from them",
    title:
      "Our website redesign was flawless. They understood our vision perfectly!",
    author: "Albert Flores",
    company: "MasterCard",
  },
  data_2: {
    preTitle: "Hear from them",
    title:
      "From concept to execution, they delivered outstanding results. Highly recommend their expertise!",
    author: "Robert Fox",
    company: "Mitsubishi",
  },
  data_3: {
    preTitle: "Hear from them",
    title: "Super smooth process with incredible results. highly recommend!",
    author: "Jenny Wilson",
    company: "Pizza Hut",
  },
};

const teamData = {
  number: "06",
  data: [
    {
      image: "/images/home/team/team-img-1.png",
      name: "Martha Finley",
      position: "Creative Director",
      socialLinks: [
        {
          icon: "/images/socialIcon/twitter.svg",
          link: "https://twitter.com",
        },
        {
          icon: "/images/socialIcon/Be.svg",
          link: "https://www.behance.net/",
        },
        {
          icon: "/images/socialIcon/linkedin.svg",
          link: "https://linkedin.com",
        },
      ],
    },
    {
      image: "/images/home/team/team-img-2.png",
      name: "Floyd Miles",
      position: "Marketing Strategist",
      socialLinks: [
        {
          icon: "/images/socialIcon/twitter.svg",
          link: "https://twitter.com",
        },
        {
          icon: "/images/socialIcon/Be.svg",
          link: "https://www.behance.net/",
        },
        {
          icon: "/images/socialIcon/linkedin.svg",
          link: "https://linkedin.com",
        },
      ],
    },
    {
      image: "/images/home/team/team-img-3.png",
      name: "Glenna Snyder",
      position: "Lead Designer",
      socialLinks: [
        {
          icon: "/images/socialIcon/twitter.svg",
          link: "https://twitter.com",
        },
        {
          icon: "/images/socialIcon/Be.svg",
          link: "https://www.behance.net/",
        },
        {
          icon: "/images/socialIcon/linkedin.svg",
          link: "https://linkedin.com",
        },
      ],
    },
    {
      image: "/images/home/team/team-img-4.png",
      name: "Albert Flores",
      position: "UX/UI Developer",
      socialLinks: [
        {
          icon: "/images/socialIcon/twitter.svg",
          link: "https://twitter.com",
        },
        {
          icon: "/images/socialIcon/Be.svg",
          link: "https://www.behance.net/",
        },
        {
          icon: "/images/socialIcon/linkedin.svg",
          link: "https://linkedin.com",
        },
      ],
    },
  ],
};

const pricingData = {
  data: [
    {
      planName: "Mini Mini Mini Marathon(3 km)",
      planPrice: "Rs.240/-",
      cancelPrice: "",
      tag: "",
      planDescp:
        "Fun and family-friendly race for civilians, including para-athletes.",
      eligibility: "Under 16 + Para-Abled (Men/Boy, Women/Girl)",
      tags: [
        "Flat Fee: Rs.240/- Including GST",
        "Open for Under 16 & Para-Abled",
        "Inclusive Run for All",
      ],
      discounts: [],
      slug: "race/fun-run",
    },
    {
      planName: " 5k Ka Funda(5 km)",
      planPrice: "Rs.710/-",
      cancelPrice: "",
      tag: "",
      planDescp:
        "Perfect for beginners and fitness enthusiasts above 16 years.",
      eligibility:
        "For civilian, law enforcement and RRU/NCC/NSS/Bharat Scout & Guide",
      tags: [
        "Base Fee: Rs.710/- Including GST",
        "Age-Based Discounts (Women/Girl)",
      ],
      discounts: [
        {
          group: "Women/Girl (31–40 years)",
          discount: "10%",
          fee: "Rs.639/-",
        },
        {
          group: "Women/Girl (41–50 years)",
          discount: "25%",
          fee: "Rs.532/-",
        },
        {
          group: "Women/Girl (Above 51 years)",
          discount: "50%",
          fee: "Rs.355/-",
        },
      ],
      slug: "race/five-km",
    },
    {
      planName: "Dus ke Dam (10 km)",
      planPrice: "Rs.830/-",
      cancelPrice: "",
      tag: "Most Popular",
      planDescp:
        "Perfect for fitness enthusiasts looking for a competitive run.",
      eligibility:
        "For civilian, law enforcement and RRU/NCC/NSS/Bharat Scout & Guide",
      tags: [
        "Base Fee: Rs.830/- Including GST",
        "Age-Based Discounts (Women/Girl)",
      ],
      discounts: [
        {
          group: "Women/Girl (31–40 years)",
          discount: "10%",
          fee: "Rs.747/-",
        },
        {
          group: "Women/Girl (41–50 years)",
          discount: "25%",
          fee: "Rs.622/-",
        },
        {
          group: "Women/Girl (Above 51 years)",
          discount: "50%",
          fee: "Rs.415/-",
        },
      ],
      slug: "race/ten-km",
    },
    {
      planName: "21 Kadam Aage (21 km)",
      planPrice: "Rs.1200/-",
      cancelPrice: "",
      tag: "",
      planDescp:
        "Challenge yourself with India's prestigious night half-marathon.",
      eligibility:
        "(Above 16 only) For civilian, law enforcement and RRU/NCC/NSS/Bharat Scout & Guide",
      tags: [
        "Base Fee: Rs.1200/- Including GST",
        "Age-Based Discounts (Women/Girl)",
        "Not Applicable for Under 16",
      ],
      discounts: [
        {
          group: "Women/Girl (31–40 years)",
          discount: "10%",
          fee: "Rs.1080/-",
        },
        {
          group: "Women/Girl (41–50 years)",
          discount: "25%",
          fee: "Rs.900/-",
        },
        {
          group: "Women/Girl (Above 51 years)",
          discount: "50%",
          fee: "Rs.600/-",
        },
      ],
      slug: "race/half-marathon",
    },
    {
      planName: "Bhaag Milkar Bhaag(team)",
      planPrice: "1200/- per team",
      cancelPrice: "",
      tag: "Teamwork",
      planDescp:
        "Run together with your team of 3 members in this exciting night challenge.",
      eligibility:
        "Teams of 3 Members both civilians & law enforcement officers",
      tags: [
        "Team Category",
        "Based on Race Type (3 km, 5 km, 10 km, Half Marathon)",
        "Same Discounts Apply per Race",
      ],
      discounts: ["Applicable as per selected race (A & B tables)"],
      slug: "race/team-run",
    },
  ],

  partnerLogo: [
    "/images/logo/hyperlab.png",
    "/images/logo/gsc.png",
    "/images/logo/adc.png",
    "/images/logo/bcore.png",
    "/images/logo/rru.png",
  ],
};

const faqData = {
  data: [
    {
      faq_que:
        "I have not received a confirmation email or SMS. What should I do?",
      faq_ans:
        "Contact us to submit a query. We will help you as soon as possible.",
    },
    {
      faq_que: "Can I run any running event without a bib?",
      faq_ans:
        "No. Running with a bib attached is mandatory for all five events.",
    },
    {
      faq_que: "What is the minimum age of participants for all the events?",
      faq_ans: `Minimum age as on 4 January 2025:\n- Half Marathon (HM): 18 years\n- 10K Run: 12 years\n- 5 Kilometres - 1 hour (Team Run as well)
\n-3 Kilometres - 30 minutes for u-16 and 1 hour for para-abled participants.`,
    },
    {
      faq_que: "When is the last date to register?",
      faq_ans: "20 December 2025",
    },
    {
      faq_que: "What are the cut-off times for all the events?",
      faq_ans: `- Half Marathon (HM): 3 hours 30 mins\n- 10K Run: 1 hour 30 mins\n- 5K Run: 1 hour\n- 3KM (3 km): 45 minutes`,
    },
    {
      faq_que: "Can I run barefoot in all the events?",
      faq_ans:
        "Yes. However, we do not recommend running the race barefooted. Barefoot runners must account for their own risks and responsibilities.",
    },
    {
      faq_que: "Can I get a refund or transfer my registration to a friend?",
      faq_ans: "No. Please read the Refund Policy or contact us.",
    },
    {
      faq_que:
        "Can I use headphones/earphones to listen to music during the race?",
      faq_ans:
        "Yes. Also, note that music systems with speakers will be stationed across the race route to bring more energy and fun.",
    },
    {
      faq_que: "Can I participate in multiple race events?",
      faq_ans: "No.",
    },
    {
      faq_que: "What payment modes can be used for registration?",
      faq_ans: "Credit Card and Debit Cards, Net Banking, UPI & Wallet",
    },
    {
      faq_que:
        "Will there be hydration and medical aid stations throughout the route?",
      faq_ans:
        "Yes. All participants can remain assured to receive sufficient hydration, energy and medical facilities. Physiotherapy services will also be provided at medical checkpoints and finish points.",
    },
  ],
};

const contactData = {
  keypoint: [
    "24/7 Marathon Support",
    "Assistance for Participants, Volunteers & Sponsors",
  ],
  managerProfile: {
    image: "/images/avatar/avatar_1.jpg",
    name: "Courtney Henry",
    position: "Marathon Support & Registration Manager",
  },
};

const aboutusStats = [
  {
    number: 45,
    postfix: "+",
    title: "Presence in global markets",
    descp:
      "Expanding reach across international regions with localized expertise and worldwide impact.",
  },
  {
    number: 15,
    prefix: "$",
    postfix: "M",
    title: "In strategic investments",
    descp:
      "Driving growth with curated partnerships and high-performing, audience-driven initiatives.",
  },
  {
    number: 158,
    postfix: "+",
    title: "Trusted brand collaborations",
    descp:
      "Shaping industry conversations through innovation, creativity, and lasting influence.",
  },
];

const servicesSliderData = [
  "Branding",
  "Web development",
  "Agency",
  "Content creation",
  "SaaS",
  "Motion & 3d modeling",
  "Photography",
];

export const GET = async () => {
  return NextResponse.json({
    avatarList,
    statsFactData,
    servicesData,
    testimonialData,
    teamData,
    pricingData,
    faqData,
    contactData,
    aboutusStats,
    servicesSliderData,
  });
};
