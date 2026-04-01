export interface Program {
  id: string;
  title: string;
  shortDesc: string;
  longDesc: string;
  benefits: string[];
  impact: string;
  image: string;
  color: string;
}

export const programs: Program[] = [
  {
    id: "rehabilitation-through-jobs",
    title: "Rehabilitation through Jobs",
    shortDesc: "Helping displaced individuals regain financial independence by connecting them with job opportunities.",
    longDesc: "Our Job Rehabilitation program is designed to provide immediate economic stability to individuals displaced by violence. We understand that financial independence is the first step toward restoring dignity and hope. We partner with local businesses and industries to create placement opportunities, while also providing job readiness coaching, interview preparation, and workplace integration support. This program doesn't just provide a paycheck; it provides a sense of purpose and a path toward a sustainable future for entire families.",
    benefits: [
      "Immediate financial stability for displaced families",
      "Partnerships with over 50 local businesses",
      "Job readiness and soft skills training",
      "Ongoing mentorship and workplace support",
      "Career path mapping for long-term growth"
    ],
    impact: "Over 400 individuals have been successfully placed in stable jobs, directly benefiting more than 1,600 family members through increased household income and stability.",
    image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=1974&auto=format&fit=crop",
    color: "bg-blue-50 text-blue-600"
  },
  {
    id: "skill-development-training",
    title: "Skill Development Training",
    shortDesc: "Equipping individuals with practical skills that improve employability and long-term career growth.",
    longDesc: "In a rapidly changing economy, relevant skills are the most valuable asset an individual can possess. Our Skill Development centers offer intensive training in high-demand fields such as digital literacy, sustainable agriculture, tailoring, and basic engineering. We focus on practical, hands-on learning that translates directly to the job market. By bridging the gap between existing capabilities and industry requirements, we empower our beneficiaries to compete for higher-paying roles and adapt to new economic realities.",
    benefits: [
      "Industry-aligned vocational curriculum",
      "Hands-on training in modern workshops",
      "Certification upon successful completion",
      "Entrepreneurship modules for small business start-ups",
      "Access to modern tools and technology"
    ],
    impact: "More than 800 graduates have completed our training programs, with 75% reporting a significant increase in their monthly earnings within six months of graduation.",
    image: "https://images.unsplash.com/photo-1544531585-9847b68c8c86?q=80&w=2070&auto=format&fit=crop",
    color: "bg-emerald-50 text-emerald-600"
  },
  {
    id: "women-empowerment",
    title: "Women's Livelihood & Empowerment",
    shortDesc: "Providing sustainable employment to women, particularly widows, through the production of essential hygiene products.",
    longDesc: "Our Women's Livelihood initiative is a cornerstone of our empowerment strategy. We focus on providing dignified employment to women who have lost their primary breadwinners, particularly widows in conflict-affected regions. Our production centers train and employ these women in the manufacturing of high-quality sanitary pads and hygiene wipes. This model serves a dual purpose: it provides a stable income for vulnerable women while simultaneously addressing the critical need for affordable menstrual hygiene products in rural and displaced communities. By fostering economic independence, we help these women rebuild their lives and support their families with pride.",
    benefits: [
      "Specialized employment programs for widows",
      "Training in industrial hygiene product manufacturing",
      "Fair wages and safe working environments",
      "Distribution networks for women-led cooperatives",
      "Health and menstrual hygiene awareness training"
    ],
    impact: "Over 150 widows are currently employed in our production units, producing over 50,000 hygiene kits monthly for distribution in relief camps.",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=1974&auto=format&fit=crop",
    color: "bg-purple-50 text-purple-600"
  },
  {
    id: "safe-drinking-water",
    title: "Safe Drinking Water",
    shortDesc: "Providing access to clean and safe water in relief camps to improve health and living conditions.",
    longDesc: "Access to clean water is a fundamental human right, yet it remains a luxury for many in crisis-affected areas. Our Safe Drinking Water program installs and maintains high-capacity filtration systems in relief camps and underserved villages. We also conduct extensive hygiene education to prevent the spread of waterborne diseases. By ensuring a reliable supply of safe water, we significantly reduce the burden of illness, particularly among children and the elderly, allowing communities to focus on rebuilding their lives.",
    benefits: [
      "Installation of solar-powered filtration units",
      "Community-led water management committees",
      "Regular water quality testing and monitoring",
      "Hygiene and sanitation (WASH) education",
      "Reduction in time spent fetching water"
    ],
    impact: "We have provided daily access to safe drinking water for over 10,000 individuals, resulting in a 60% decrease in reported cases of waterborne diseases in our target areas.",
    image: "https://images.unsplash.com/photo-1541544741938-0af808871cc0?q=80&w=2069&auto=format&fit=crop",
    color: "bg-cyan-50 text-cyan-600"
  },
  {
    id: "educational-scholarships",
    title: "Manipur Educational Recovery",
    shortDesc: "Comprehensive educational scholarships and support for children and youth affected by the Manipur violence.",
    longDesc: "The recent crisis in Manipur has left thousands of students with uncertain futures. Our Manipur Educational Recovery program is a dedicated response to ensure that the education of affected children is not permanently disrupted. We provide full scholarships covering tuition, books, and living expenses for students from primary school through university. Recognizing the deep trauma associated with the violence, our program also integrates psychological counseling and bridge-course learning to help students reintegrate into the academic environment. We are committed to standing with the youth of Manipur as they reclaim their right to a bright and stable future.",
    benefits: [
      "Full scholarships for victims of Manipur violence",
      "Trauma-informed counseling and mental health support",
      "Bridge courses to cover academic gaps from displacement",
      "Provision of tablets and digital learning tools",
      "Mentorship from academic and industry professionals"
    ],
    impact: "Currently supporting 200+ students from Manipur, ensuring 100% educational continuity for all enrolled beneficiaries despite the ongoing challenges.",
    image: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?q=80&w=2073&auto=format&fit=crop",
    color: "bg-orange-50 text-orange-600"
  }
];
