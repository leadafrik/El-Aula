export interface SiteContent {
  hero: {
    mainTitle: string;
    subtitle: string;
    tagline: string;
  };
  stats: {
    studentsImpacted: string;
    studentsImpactedLabel: string;
    passRate: string;
    passRateLabel: string;
    yearsExperience: string;
    yearsExperienceLabel: string;
    support: string;
    supportLabel: string;
  };
  whyChoose: {
    title: string;
    description: string;
    points: Array<{
      title: string;
      description: string;
      icon: string;
    }>;
  };
  programs: {
    title: string;
    courses: Array<{
      name: string;
      description: string;
      icon: string;
      target: string;
      stats: string;
      priceRange: string;
    }>;
  };
  resources: {
    title: string;
    description: string;
    types: Array<{
      icon: string;
      name: string;
      description: string;
      count: string;
    }>;
  };
  cta: {
    title: string;
    highlight: string;
  };
  subscribe: {
    title: string;
    description: string;
  };
  footer: {
    tagline: string;
    motto: string;
  };
  navbar: {
    brandName: string;
  };
}

export const siteContentQuery = `
{
  "hero": *[_type == "hero"][0]{
    mainTitle,
    subtitle,
    tagline
  },
  "stats": *[_type == "stats"][0]{
    studentsImpacted,
    studentsImpactedLabel,
    passRate,
    passRateLabel,
    yearsExperience,
    yearsExperienceLabel,
    support,
    supportLabel
  },
  "whyChoose": *[_type == "whyChoose"][0]{
    title,
    description,
    "points": points[]{
      title,
      description,
      icon
    }
  },
  "programs": *[_type == "programs"][0]{
    title,
    "courses": courses[]{
      name,
      description,
      icon,
      target,
      stats,
      priceRange
    }
  },
  "resources": *[_type == "resources"][0]{
    title,
    description,
    "types": types[]{
      icon,
      name,
      description,
      count
    }
  },
  "cta": *[_type == "cta"][0]{
    title,
    highlight
  },
  "subscribe": *[_type == "subscribe"][0]{
    title,
    description
  },
  "footer": *[_type == "footer"][0]{
    tagline,
    motto
  },
  "navbar": *[_type == "navbar"][0]{
    brandName
  }
}
`;
