import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";

const projectId = "vlyb715a";
const dataset = "production";

export default defineConfig({
  name: "default",
  title: "El Aula",
  projectId,
  dataset,
  plugins: [structureTool(), visionTool()],
  schema: {
    types: [
      {
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
      },
      {
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
      },
      {
        name: "whyChoose",
        title: "Why Choose Section",
        type: "document",
        fields: [
          {
            name: "title",
            title: "Section Title",
            type: "string",
          },
          {
            name: "description",
            title: "Description",
            type: "text",
          },
          {
            name: "points",
            title: "Benefit Points",
            type: "array",
            of: [
              {
                type: "object",
                title: "Benefit Point",
                fields: [
                  {
                    name: "title",
                    title: "Benefit Title",
                    type: "string",
                  },
                  {
                    name: "description",
                    title: "Benefit Description",
                    type: "text",
                  },
                  {
                    name: "icon",
                    title: "Icon Name (lucide-react)",
                    type: "string",
                    description:
                      'e.g., CheckCircle, Star, Award, Zap, Heart',
                  },
                ],
              },
            ],
          },
        ],
      },
      {
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
                title: "Course",
                fields: [
                  {
                    name: "name",
                    type: "string",
                    title: "Course Name",
                  },
                  {
                    name: "description",
                    type: "text",
                    title: "Description",
                  },
                  {
                    name: "icon",
                    type: "string",
                    title: "Icon Name (lucide-react)",
                    description: "e.g., Book, GraduationCap, Briefcase",
                  },
                  {
                    name: "target",
                    type: "string",
                    title: "Target/Goal",
                  },
                  {
                    name: "stats",
                    type: "string",
                    title: "Statistics/Achievement",
                  },
                  {
                    name: "priceRange",
                    type: "string",
                    title: "Price Range",
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        name: "resources",
        title: "Resources Section",
        type: "document",
        fields: [
          {
            name: "title",
            title: "Section Title",
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
                title: "Resource Type",
                fields: [
                  {
                    name: "icon",
                    type: "string",
                    title: "Icon Name (lucide-react)",
                    description:
                      "e.g., Play, FileText, PenTool, TrendingUp",
                  },
                  {
                    name: "name",
                    type: "string",
                    title: "Resource Type Name",
                  },
                  {
                    name: "description",
                    type: "text",
                    title: "Description",
                  },
                  {
                    name: "count",
                    type: "string",
                    title: "Count (e.g., 50+ videos)",
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        name: "cta",
        title: "Call To Action Section",
        type: "document",
        fields: [
          {
            name: "title",
            title: "Main Title",
            type: "string",
          },
          {
            name: "highlight",
            title: "Highlight Text",
            type: "string",
            description: "The emphasized part of the message",
          },
        ],
      },
      {
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
      },
      {
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
            title: "Motto (Lograremos Juntos)",
            type: "string",
          },
        ],
      },
      {
        name: "navbar",
        title: "Navigation Bar",
        type: "document",
        fields: [
          {
            name: "brandName",
            title: "Brand Name",
            type: "string",
            validation: (Rule: any) => Rule.required(),
          },
        ],
      },
    ],
  },
});
