# El Aula Sanity CMS Setup Guide

## Project Details
- **Project ID:** vlyb715a
- **Dataset:** production
- **API Token:** Stored in `.env.local` (SANITY_API_TOKEN)

## Quick Start

### 1. Initialize Sanity Studio

The studio configuration is ready in `/studio`. To set it up:

```bash
cd studio
npm install
npm run dev
```

This will start Sanity Studio at **http://localhost:3333**

### 2. Log In to Sanity Studio

- Open http://localhost:3333
- Log in with the same account you used when creating the project
- You should now see the Sanity Studio dashboard

### 3. Create Documents

In the Sanity Studio, create a new document for each of these schemas:

#### **Navbar**
- Brand Name: "El Aula Tutoring Services"

#### **Hero Section**
- Main Title: "Achieve Your Spanish Goals"
- Subtitle: "Expert tutoring for CSEC & CAPE students"
- Tagline: "Master Spanish. Build Confidence. Pass Your Exams."

#### **Statistics**
- Students Impacted: "800+"
- Students Impacted Label: "Students Impacted"
- Pass Rate: "100%"
- Pass Rate Label: "Pass Rate"
- Years Experience: "10+"
- Years Experience Label: "Years Experience"
- Support: "24/7"
- Support Label: "Support Available"

#### **Why Choose Section**
- Title: "Why El Aula Stands Out"
- Description: "We're not just tutors. We're invested in your success."
- Points:
  1. **Premium Tutoring**
     - Icon: Star
     - Description: "Expert instruction backed by 10+ years of exam success"
  
  2. **Exam-Ready Strategy**
     - Icon: Award
     - Description: "Learn the patterns examiners look for, not just grammar"
  
  3. **Affordable Access**
     - Icon: CheckCircle
     - Description: "High-quality tutoring without premium prices"

#### **Programs**
- Title: "Programs Built for Real Exams"
- Courses:
  1. **CSEC Spanish**
     - Icon: Book
     - Description: "Master listening, reading, writing, speaking. Understand exam timing, common traps, scoring. Leave confident."
     - Target: "Target: A or B"
     - Stats: "95% of CSEC students pass"
     - Price Range: "JMD 5,000–8,000/month"
  
  2. **CAPE Spanish**
     - Icon: GraduationCap
     - Description: "Advanced conversation + analytical writing. Learn how examiners think. Build fluency that impresses."
     - Target: "Target: Module 1 & 2 Pass"
     - Stats: "100% of private CAPE students pass"
     - Price Range: "JMD 6,000–9,000/month"
  
  3. **Corporate Spanish**
     - Icon: Briefcase
     - Description: "Business email, meetings, presentations. Speak with confidence in professional settings. Practical + immediately useful."
     - Target: "Target: Business Fluency"
     - Stats: "Perfect for working professionals"
     - Price Range: "JMD 8,000–12,000/month"

#### **Resources**
- Title: "Your Learning Resources"
- Description: "Everything you need to succeed—videos, guides, practice materials"
- Resource Types:
  1. Video Lessons
     - Icon: Play
     - Count: "50+ videos"
     - Description: "Expert-taught video lessons covering all CSEC & CAPE topics"
  
  2. Study Guides
     - Icon: FileText
     - Count: "20+ guides"
     - Description: "Comprehensive downloadable guides for every exam section"
  
  3. Practice Materials
     - Icon: PenTool
     - Count: "200+ questions"
     - Description: "Real exam-style questions with detailed explanations"
  
  4. Progress Tracking
     - Icon: TrendingUp
     - Count: "Real-time stats"
     - Description: "Monitor your improvement with detailed performance analytics"

#### **CTA Section**
- Title: "Ready to Change Your Spanish Grade?"
- Highlight: "Your first consultation is free."

#### **Subscribe Section**
- Title: "Stay Updated"
- Description: "Get free resources, exam tips, and course updates delivered to your inbox."

#### **Footer**
- Tagline: "Spanish tutoring for CSEC & CAPE students."
- Motto: "Lograremos Juntos"

## API Integration

The Next.js app fetches content from Sanity via:
- **Endpoint:** `/api/sanity`
- **Query:** Uses GROQ to fetch all documents in one call
- **Caching:** Configured in `src/sanity/client.ts`

## Deployment

### Deploy Sanity Studio
```bash
cd studio
npm run deploy
```

### Deploy Next.js App
Push to GitHub, and the site will auto-deploy to your hosting (Vercel, etc.)

## Environment Variables

Make sure `.env.local` contains:
```
SANITY_API_TOKEN=skXspQs8ZCoqYsFRHRR1NRtBXvjBBBSlZ24ruj1cGse4HzZdkgsOFcW6iTDOe5In6uD2gXD8H2eVqDua5WlnzWFf3bb6JC0rFnBzCcsi7a4nbOsGyy8VtHkxS61MvOO6q8Oe56IrH9nlX17l9JF60EcQnmwn3mno8VK6rmf0i8vWBGEPucZX
```

## Troubleshooting

### Studio won't start
- Check Node.js version (requires 18+)
- Delete `node_modules` and run `npm install` again
- Ensure you're logged in via `sanity login`

### Content not showing on site
- Verify documents are published in Sanity Studio
- Check `/api/sanity` returns data
- Rebuild the Next.js app: `npm run build`

## Next Steps

1. ✅ Set up Sanity Studio
2. ✅ Create all documents with content
3. ⏳ Update Next.js homepage to use Sanity content
4. ⏳ Add production forms (contact, subscribe)
5. ⏳ Deploy to production
