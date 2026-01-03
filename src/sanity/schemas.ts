export const heroSchema = {
  name: "hero",
  title: "Hero Section",
  type: "document",
  fields: [
    {
      name: "mainTitle",
      title: "Main Title",
      type: "string",
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "subtitle",
      title: "Subtitle",
      type: "text",
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "tagline",
      title: "Tagline",
      type: "string",
    },
  ],
};

export const statsSchema = {
  name: "stats",
  title: "Statistics Section",
  type: "document",
  fields: [
    {
      name: "studentsImpacted",
      title: "Students Impacted Number",
      type: "string",
    },
    {
      name: "studentsImpactedLabel",
      title: "Students Impacted Label",
      type: "string",
    },
    {
      name: "passRate",
      title: "Pass Rate Number",
      type: "string",
    },
    {
      name: "passRateLabel",
      title: "Pass Rate Label",
      type: "string",
    },
    {
      name: "yearsExperience",
      title: "Years Experience Number",
      type: "string",
    },
    {
      name: "yearsExperienceLabel",
      title: "Years Experience Label",
      type: "string",
    },
    {
      name: "support",
      title: "Support Number",
      type: "string",
    },
    {
      name: "supportLabel",
      title: "Support Label",
      type: "string",
    },
  ],
};

export const whyChooseSchema = {
  name: "whyChoose",
  title: "Why Choose Section",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "description",
      title: "Description",
      type: "text",
    },
    {
      name: "points",
      title: "Points",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "title", type: "string" },
            { name: "description", type: "text" },
            { name: "icon", type: "string" },
          ],
        },
      ],
    },
  ],
};

export const programsSchema = {
  name: "programs",
  title: "Programs Section",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Section Title",
      type: "string",
    },
    {
      name: "courses",
      title: "Courses",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "name", type: "string", title: "Course Name" },
            { name: "description", type: "text", title: "Description" },
            { name: "icon", type: "string", title: "Icon Name" },
            { name: "target", type: "string", title: "Target" },
            { name: "stats", type: "string", title: "Stats" },
            { name: "priceRange", type: "string", title: "Price Range" },
          ],
        },
      ],
    },
  ],
};

export const resourcesSchema = {
  name: "resources",
  title: "Resources Section",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "description",
      title: "Description",
      type: "text",
    },
    {
      name: "types",
      title: "Resource Types",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "icon", type: "string", title: "Icon Name" },
            { name: "name", type: "string", title: "Resource Name" },
            { name: "description", type: "text", title: "Description" },
            { name: "count", type: "string", title: "Count" },
          ],
        },
      ],
    },
  ],
};

export const ctaSchema = {
  name: "cta",
  title: "Call To Action Section",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "highlight",
      title: "Highlight Text",
      type: "string",
    },
  ],
};

export const subscribeSchema = {
  name: "subscribe",
  title: "Subscribe Section",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "description",
      title: "Description",
      type: "text",
    },
  ],
};

export const footerSchema = {
  name: "footer",
  title: "Footer",
  type: "document",
  fields: [
    {
      name: "tagline",
      title: "Tagline",
      type: "string",
    },
    {
      name: "motto",
      title: "Motto",
      type: "string",
    },
  ],
};

export const navbarSchema = {
  name: "navbar",
  title: "Navigation Bar",
  type: "document",
  fields: [
    {
      name: "brandName",
      title: "Brand Name",
      type: "string",
    },
  ],
};
