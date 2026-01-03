# El Aula Setup & Deployment Guide

## ✅ What's Built

Your production-ready El Aula website is complete with:

### 📄 Pages
- **Home** (/) — Hero, stats, programs, CTA
- **About** (/about) — Candice bio, accolades, philosophy
- **Courses** (/courses) — CSEC, CAPE, Corporate, Revision programs
- **Reviews** (/reviews) — Student testimonials
- **Contact** (/contact) — WhatsApp, email, phone, contact form

### 🎨 Design
- Orange (#ff8c00) / Black / White theme
- Mobile-first responsive design
- Smooth hover effects & transitions
- Professional spacing & typography

### 📊 Analytics (GA4)
- **CTA tracking**: Register, WhatsApp, Subscribe buttons
- **Scroll depth**: 25%, 50%, 75%, 90% marks
- **Form tracking**: Subscribe & contact form submits
- **Event dashboard ready**: All events fire to GA4

### 🔗 Features
- SEO metadata + OG tags for social sharing
- API routes for subscribe & contact forms
- Google Analytics 4 integration
- Newsletter subscription form
- Contact form with validation

---

## 🚀 Next Steps (Before Going Live)

### 1. Set Up Google Analytics 4

Go to [Google Analytics](https://analytics.google.com):

1. Click **Create Account** (if new)
2. Create a **Property** for El Aula
3. Select **Web** as the platform
4. Copy your **Measurement ID** (looks like `G-XXXXXXXXXX`)
5. Add to `.env.local`:
   ```bash
   NEXT_PUBLIC_GA4_ID=G-XXXXXXXXXX
   ```
6. Restart dev server: `npm run dev`

### 2. Update Your Information

Edit these files with your real details:

**WhatsApp number** (all pages):
- Find: `https://wa.me/1234567890`
- Replace with: `https://wa.me/YOUR_COUNTRY_CODE_AND_NUMBER` (no spaces)
- Example: `https://wa.me/16175551234`

**Email**:
- In [Footer](src/components/Footer.tsx) and [Contact](src/app/(marketing)/contact/page.tsx)
- Replace: `contact@elaula.com`

**Phone**:
- In [Footer](src/components/Footer.tsx) and [Contact](src/app/(marketing)/contact/page.tsx)
- Replace: `+1 (234) 567-890`

**Instagram/Social Media**:
- In [Footer](src/components/Footer.tsx)

**Domain**:
- In [Layout](src/app/layout.tsx)
- Find: `metadataBase: new URL("https://YOUR_DOMAIN.com")`
- Replace with your actual domain

### 3. Set Up Email Integration (Optional but Recommended)

**For newsletter subscribes** ([src/app/api/subscribe/route.ts](src/app/api/subscribe/route.ts)):

Choose one:
- **Mailchimp** (free, popular) — [signup.mailchimp.com](https://signup.mailchimp.com)
- **Brevo** (simple) — [brevo.com](https://www.brevo.com)
- **ConvertKit** (creators) — [convertkit.com](https://convertkit.com)

Add API integration to the subscribe route.

**For contact form** ([src/app/api/contact/route.ts](src/app/api/contact/route.ts)):

- **Resend** (modern email) — [resend.com](https://resend.com)
- **SendGrid** (reliable) — [sendgrid.com](https://sendgrid.com)
- Save emails to database (Supabase, Firebase, etc.)

---

## 📊 GA4 Setup

### Mark Events as Conversions

1. GA4 → **Admin** → **Events**
2. Click `subscribe_submit` → **Mark as conversion**
3. Click `cta_register_click` → **Mark as conversion**

Now these appear in your **Conversions** report.

### Watch Your Dashboard

**Weekly KPIs to monitor**:
- **Users**: Total unique visitors (7-day trend)
- **Engagement rate**: % of sessions with 10+ secs or 2+ pages
- **Top pages**: Which courses/content attracts attention
- **Traffic sources**: Where visitors come from (Instagram, Google, Linktree, WhatsApp)
- **CTA clicks**: Register/WhatsApp/Subscribe conversions
- **Scroll depth**: How far down pages visitors read

Go to **Reports** → **Realtime** to see live visitors.

---

## 🚀 Deploy to Vercel (Recommended)

Vercel is the official Next.js hosting platform (free tier available).

### Steps:

1. **Push to GitHub**:
   ```bash
   git init
   git add .
   git commit -m "Initial El Aula build"
   git push origin main
   ```

2. **Deploy via Vercel**:
   - Go to [vercel.com](https://vercel.com)
   - Click **Import Project**
   - Select your GitHub repo
   - Vercel auto-detects Next.js settings
   - Add **Environment Variable**:
     - Key: `NEXT_PUBLIC_GA4_ID`
     - Value: Your GA4 Measurement ID
   - Click **Deploy**

3. **Custom Domain** (optional):
   - After deployment → **Settings** → **Domains**
   - Add your domain (e.g., `elaula.com`)
   - Follow DNS instructions

### Vercel Benefits:
✅ Free hosting (includes generous limits)  
✅ Auto-deploys on every GitHub push  
✅ CDN for fast global delivery  
✅ Built-in analytics  
✅ One-click rollback  
✅ Environment variables easy to manage  

---

## 🧪 Test Before Going Live

### Local Testing:

1. **Run dev server**: `npm run dev`
2. **Open site**: http://localhost:3000
3. **Test all pages**: Click through all menu items
4. **Test CTAs**: 
   - Click "WhatsApp Now" → Should open WhatsApp (or prompt to download)
   - Click "Register" → Track event in GA4
   - Submit subscribe form → Check console for POST request
5. **GA4 check**:
   - Open GA4 → **Realtime**
   - Refresh page → Should see 1 active user
   - Click CTA button → Event should appear in DebugView

### Mobile Testing:

1. Get local IP: `ipconfig` (Windows) / `ifconfig` (Mac/Linux)
2. Open on phone: `http://YOUR_IP:3000`
3. Test responsive design
4. Test WhatsApp CTA (should work on phone)

---

## 🛠 Customization Checklist

- [ ] GA4 ID added to `.env.local`
- [ ] WhatsApp number updated (all pages)
- [ ] Email address updated
- [ ] Phone number updated
- [ ] Social media links updated
- [ ] Domain updated in metadata
- [ ] Course details customized (prices, descriptions)
- [ ] Testimonials reviewed/updated
- [ ] About page customized for Candice
- [ ] Logo added to `public/` folder
- [ ] Favicon added (optional)
- [ ] Email service integrated (subscribe/contact forms)
- [ ] Tested on mobile
- [ ] GA4 conversion goals set
- [ ] Deployed to production domain

---

## 📱 Managing Content

### Update Course Details:
Edit [src/app/(marketing)/courses/page.tsx](src/app/(marketing)/courses/page.tsx):
- Course titles, descriptions, pricing
- Add/remove courses (CSEC, CAPE, Corporate, Revision)
- Session frequency, duration

### Update Testimonials:
Edit [src/app/(marketing)/reviews/page.tsx](src/app/(marketing)/reviews/page.tsx):
- Add student names & roles
- Update testimonial text
- Adjust star ratings

### Update About Page:
Edit [src/app/(marketing)/about/page.tsx](src/app/(marketing)/about/page.tsx):
- Candice bio
- Accolades/achievements
- Mission statement

### Update Home Page:
Edit [src/app/(marketing)/page.tsx](src/app/(marketing)/page.tsx):
- Hero section text
- Stats (500+ students, 95% pass rate, etc.)
- Course preview cards
- CTA copy

---

## 🔄 Deployments & Updates

After deployment to Vercel:

**To update site**:
1. Edit files locally
2. Commit & push to GitHub:
   ```bash
   git add .
   git commit -m "Update course pricing"
   git push origin main
   ```
3. Vercel **auto-deploys** (no manual step needed)
4. Live in ~1 minute

**To rollback**:
- Vercel Dashboard → **Deployments**
- Click the previous deployment
- Click **Redeploy**

---

## 📊 Analytics Events Reference

Your site tracks these events automatically:

| Event | When | Where |
|-------|------|-------|
| `cta_whatsapp_click_hero` | Hero WhatsApp button | Home |
| `cta_courses_click` | View Courses button | Home |
| `cta_schedule_click` | Schedule Session button | Home |
| `cta_subscribe_click` | Subscribe button hover | Home |
| `cta_course_card_click` | Course card CTA | Home |
| `cta_enroll_*` | Enroll Now buttons | Courses page |
| `cta_whatsapp_contact` | WhatsApp on Contact | Contact |
| `subscribe_submit` | Newsletter form submit | Home + Footer |
| `scroll_depth` | User scrolls (25/50/75/90%) | All pages |

---

## 💡 Pro Tips

1. **Backup your code**: Push to GitHub regularly
2. **Monitor GA4 weekly**: See what's working
3. **Update testimonials**: Add new student reviews regularly
4. **Test forms**: Submit test emails before going live
5. **Mobile first**: Most visitors will be on phones
6. **Clear CTAs**: Make Register/WhatsApp buttons obvious
7. **Fast load times**: Image optimization is key (Vercel handles this)
8. **Social sharing**: Share course links with OG metadata

---

## ❓ Troubleshooting

**GA4 events not showing?**
- Check `NEXT_PUBLIC_GA4_ID` is correct in `.env.local`
- Restart dev server: `npm run dev`
- Check GA4 **Realtime** report, not historical
- Wait ~5 minutes for data to appear

**Contact form not working?**
- Check API route: `/src/app/api/contact/route.ts`
- Currently logs to console (implement email service)
- Test in browser DevTools → Network tab

**Mobile looks weird?**
- Run `npm run dev`
- Test on actual phone (not Chrome DevTools)
- Check responsive breakpoints in Tailwind

**Slow page load?**
- Check images in `public/` folder
- Use Next.js `<Image>` component for optimization
- Deploy to Vercel for CDN caching

---

## 🎓 Resources

- [Next.js Docs](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com)
- [Google Analytics 4](https://analytics.google.com)
- [Vercel Deployment](https://vercel.com/docs)
- [Mailchimp Setup](https://mailchimp.com/marketing/getting-started/)
- [Resend Email API](https://resend.com)

---

## 📞 Support

For questions:
- Check README.md for quick reference
- Review component code for structure
- Use `npm run build` to catch TypeScript errors
- Test locally with `npm run dev` before deploying

---

**Lograremos Juntos — You've got this! 🎓**
