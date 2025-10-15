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
  heading: "We're more than just a marathon...",
  description:
    "The Gandhinagar Marathon 2026 presented by Bcore is set to welcome tens of thousands of participants, spectators, and sponsors, making it one of India's most remarkable running events.",
  scoreData: [
    {
      number: 50,
      numberValue: "K",
      scoreDescp: "Expected Participants",
    },
    {
      number: 10,
      numberValue: "K",
      scoreDescp: "Spectators",
    },
    {
      number: 10,
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
    "From challenging half-marathons to family-friendly 3KMs, we have the perfect race category for every runner. Join us in Gandhinagar for an unforgettable running experience.",
  data: [
    {
      id: 1,
      image: "/images/home/services/service_1.jpg",
      heading: "BCORE Half Marathon",
      descp:
        "The BCORE Half-Marathon is going to be one of the fastest and exciting marathons in India. It isn't just any other race – it's the first race organized by an Indian Olympic Centre.",
    },
    {
      id: 2,
      image: "/images/home/services/service_2.jpg",
      heading: "BCORE 10KM Run",
      descp:
        "The BCORE 10k is the challenge you need. This race will take you across Gandhinagar's most beautiful parks and neighborhoods – from Swarnim Park to the Salt Mount.",
    },
    {
      id: 3,
      image: "/images/home/services/services_3.png",
      heading: "BCORE 5KM Run",
      descp:
        "The BCORE 5k is the perfect way to create your own running story. With chill and sporty vibes, this is a running event suitable for young and old to challenge themselves and reach new heights.",
    },
    {
      id: 4,
      image: "/images/home/services/services_4.png",
      heading: "BCORE 3KM",
      descp:
        "Get ready for big smiles and lots of excitement! The BCORE 3KM is a 3km race accessible to everyone – perfect for first-timers, families and kids. It's all about celebrating the art of running, ideal for our next generation of runners and people looking to increase their weekend footsteps!",
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
      planName: "Half Marathon",
      planPrice: "₹1100",
      planDescp: "Challenge yourself with the 21.1 KM half marathon distance.",
      planIncludes: [
        "Race bib with timing chip",
        "Finisher medal",
        "Refreshments & hydration support",
        "Official event T-shirt",
      ],
    },
    {
      planName: "10 KM Run",
      tag: "Most Popular",
      planPrice: "₹800",
      planDescp:
        "Perfect for fitness enthusiasts looking for a competitive run.",
      planIncludes: [
        "Race bib with timing chip",
        "Finisher medal",
        "Refreshments & hydration support",
        "Official event T-shirt",
      ],
    },
    {
      planName: "5 KM Run",
      planPrice: "₹600",
      planDescp: "A short and energetic run for beginners and 3KMners.",
      planIncludes: [
        "Race bib",
        "Finisher medal",
        "Refreshments & hydration support",
        "Official event T-shirt",
      ],
    },
    {
      planName: "3KM",
      planPrice: "₹350",
      planDescp:
        "Enjoy the joy of running with friends and family in this non-competitive category.",
      planIncludes: [
        "Race bib",
        "NA",
        "Refreshments",
        "Official event T-shirt",
      ],
    },
  ],

  partnerLogo: [
    {
      light: "/images/home/pricing/partner-1.svg",
      dark: "/images/home/pricing/partner-dark-1.svg",
    },
    {
      light: "/images/home/pricing/partner-2.svg",
      dark: "/images/home/pricing/partner-dark-2.svg",
    },
    {
      light: "/images/home/pricing/partner-3.svg",
      dark: "/images/home/pricing/partner-dark-3.svg",
    },
    {
      light: "/images/home/pricing/partner-4.svg",
      dark: "/images/home/pricing/partner-dark-4.svg",
    },
    {
      light: "/images/home/pricing/partner-5.svg",
      dark: "/images/home/pricing/partner-dark-5.svg",
    },
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
        "No. Running with a bib attached is mandatory for all four events.",
    },
    {
      faq_que: "What is the minimum age of participants for all the events?",
      faq_ans: `Minimum age as on 4 January 2025:\n- Half Marathon (HM): 18 years\n- 10K Run: 12 years\n- 5K Run: 6 years\n- 3KM (3 km): 6 years`,
    },
    {
      faq_que: "When is the last date to register?",
      faq_ans: "20 December 2025",
    },
    {
      faq_que: "What are the cut-off times for all the events?",
      faq_ans: `- Half Marathon (HM): 3 hours\n- 10K Run: 1 hour 30 mins\n- 5K Run: 1 hour\n- 3KM (3 km): 45 minutes`,
    },
    {
      faq_que: "Can I run barefoot in all the events?",
      faq_ans:
        "Yes. However, we do not recommend running the race barefooted. Barefoot runners must account for their own risks and responsibilities.",
    },
    {
      faq_que: "Can I get a refund or transfer my registration to a friend?",
      faq_ans: "No. We do not have a refund or transfer policy for any event.",
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
