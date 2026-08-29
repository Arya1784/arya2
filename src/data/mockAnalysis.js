export const mockAnalysis = {
  score: 82,
  status: 'Strong Match',
  summary:
    'Your resume matches most of the important requirements for this role.',
  skillsMatch: 82,
  experienceMatch: 76,
  keywordMatch: 88,
  educationMatch: 95,
  matchingSkills: ['Python', 'JavaScript', 'React', 'SQL', 'Git', 'REST APIs', 'Machine Learning'],
  missingSkills: [
    { name: 'Docker', priority: 'High' },
    { name: 'AWS', priority: 'High' },
    { name: 'Kubernetes', priority: 'Medium' },
    { name: 'CI/CD', priority: 'Medium' },
  ],
  keywordAnalysis: [
    { keyword: 'React', status: 'Found', recommendation: 'Good' },
    { keyword: 'TypeScript', status: 'Missing', recommendation: 'Add if applicable' },
    { keyword: 'AWS', status: 'Missing', recommendation: 'Mention relevant experience' },
    { keyword: 'REST API', status: 'Found', recommendation: 'Strengthen with project details' },
    { keyword: 'Leadership', status: 'Weak', recommendation: 'Highlight team ownership' },
  ],
  improvements: [
    {
      title: 'Add measurable achievements',
      description:
        'Instead of: Worked on a website. Use: Developed a responsive website that reduced page load time by 30%.',
      type: 'warning',
    },
    {
      title: 'Strengthen your professional summary',
      description:
        'Position your strongest skills, domain focus, and career goals in the opening section of the resume.',
      type: 'info',
    },
    {
      title: 'Add missing technical keywords where truthful',
      description:
        'Mention Docker, AWS, Kubernetes, and CI/CD if you have hands-on experience to improve ATS relevance.',
      type: 'warning',
    },
    {
      title: 'Highlight relevant projects',
      description:
        'Emphasize your best product or ML projects with outcomes, tools, and business impact.',
      type: 'info',
    },
    {
      title: 'Improve experience bullet points',
      description:
        'Use action verbs, outcomes, and project scope to make accomplishments easier to verify.',
      type: 'info',
    },
  ],
  summaryText:
    'Computer Engineering student with hands-on experience in React, Python, SQL, and machine learning, passionate about developing scalable software solutions and creating intuitive user experiences. Strong foundation in full-stack development, data analysis, and product-focused problem solving with a focus on building high-impact applications and collaborating across cross-functional teams.',
  projectMatches: [
    {
      name: 'Web Development Project',
      match: 91,
      description: 'Strong alignment with frontend engineering, responsive UI work, and product implementation.',
    },
    {
      name: 'Machine Learning Project',
      match: 84,
      description: 'Relevant to predictive modeling, experimentation, and analysis of real-world datasets.',
    },
    {
      name: 'Database Management Project',
      match: 72,
      description: 'Shows solid database design and SQL fundamentals, though it could detail more cloud workflows.',
    },
  ],
  potentialScore: 91,
  recommendation:
    'Focus on adding relevant keywords, quantifying your achievements, and highlighting your experience with Docker and AWS.',
};
