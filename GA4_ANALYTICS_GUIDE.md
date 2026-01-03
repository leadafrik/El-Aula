# Phase 2: GA4 Analytics Setup & Weekly Dashboard

## 🎯 Overview

Your website already tracks all major events. Now let's set up GA4 properly and create a weekly KPI dashboard.

This is where you **measure what works** and **optimize what doesn't**.

---

## 1. GA4 Initial Setup (One-Time: 5 minutes)

### Create a GA4 Property

1. Go to **[Google Analytics](https://analytics.google.com)**
2. Click **Create Account**
3. Fill in:
   - Account name: `El Aula`
   - Property name: `El Aula Website`
4. Select **Web** as your platform
5. Property URL: `https://yourdomain.com`
6. Industry: Education
7. Timezone: `Jamaica Standard Time`
8. Currency: `JMD`
9. Click **Create**

### Get Your Measurement ID

1. Go to **Admin** → **Property Settings**
2. Find **Measurement ID** (looks like `G-XXXXXXXXXX`)
3. Copy it
4. Add to `.env.local`:
   ```
   NEXT_PUBLIC_GA4_ID=G-XXXXXXXXXX
   ```
5. Restart dev server: `npm run dev`

---

## 2. Verify Events Are Firing

### Real-Time Test

1. Open `http://localhost:3000`
2. Go to GA4 → **Realtime**
3. You should see **1 active user**
4. **Scroll down the page** → Watch `scroll_depth` events appear
5. **Click Register** → Watch `cta_register_click` event appear
6. **Submit subscribe form** → Watch `subscribe_submit` event appear

This confirms tracking is working.

---

## 3. Set Up Conversion Goals (Important)

Conversions = actions that matter to your business (Register, Subscribe).

### Mark Events as Conversions

1. GA4 → **Admin** → **Events**
2. Find `cta_register_click` → Click it → **Mark as conversion**
3. Find `subscribe_submit` → Click it → **Mark as conversion**

These now appear in your **Conversions** report.

---

## 4. Events Captured (Complete Reference)

| Event | Trigger | Page | Importance |
|-------|---------|------|-----------|
| `cta_whatsapp_click_hero` | WhatsApp CTA | Home | Critical |
| `cta_courses_click` | View Courses button | Home | High |
| `cta_subscribe_click` | Subscribe section | Home | High |
| `cta_course_card_click` | Course card CTA | Home/Courses | Medium |
| `cta_enroll_csec_spanish` | Enroll button | Courses | Critical |
| `cta_enroll_cape_spanish` | Enroll button | Courses | Critical |
| `cta_enroll_corporate_spanish` | Enroll button | Courses | Critical |
| `cta_enroll_revision_intensive` | Enroll button | Courses | Critical |
| `cta_whatsapp_contact` | WhatsApp | Contact | Critical |
| `cta_tips_click` | Get Tips button | Home | Medium |
| `cta_whatsapp_click_bottom` | WhatsApp CTA | Home (bottom) | Critical |
| `scroll_depth` | Scroll 25/50/75/90% | All pages | High |
| `subscribe_submit` | Newsletter form | Home/Footer | Critical |

---

## 5. Weekly KPI Dashboard (Create Custom Dashboard)

This is **the one report you check every week**.

### Steps to Create Dashboard

1. **GA4** → **Dashboards** (left menu)
2. Click **Create Dashboard**
3. Name: `El Aula Weekly KPIs`
4. Add these cards:

### Card 1: Users (Last 7 Days)

- Metric: **Users**
- Date range: Last 7 days
- Comparison: Week-over-week
- Goal: **Track growth**

### Card 2: Engagement Rate

- Metric: **Engagement Rate** (%)
- Date range: Last 7 days
- Filter: None
- Goal: **Should be 40%+**

### Card 3: Average Engagement Duration

- Metric: **Average Engagement Time (mins)**
- Date range: Last 7 days
- Goal: **Should be 2+ minutes**

### Card 4: Top Pages

- Metric: **Views by Page** (table)
- Date range: Last 7 days
- Limit: Top 5
- Goal: **See which content resonates**

### Card 5: Traffic Source

- Metric: **Users by Traffic Source** (pie chart)
- Date range: Last 7 days
- Goal: **Where are visitors coming from?**

### Card 6: CTA Conversions

- Metric: **Events → cta_register_click + cta_whatsapp_click_*  (total count)**
- Date range: Last 7 days
- Goal: **Track button effectiveness**

### Card 7: Scroll Depth

- Metric: **Event Count for scroll_depth**
- Date range: Last 7 days
- Goal: **Are users reading to the end?**

### Card 8: Subscribe Rate

- Metric: **Event Count for subscribe_submit**
- Date range: Last 7 days
- Goal: **Growing newsletter list?**

---

## 6. Weekly Routine (15 minutes every Monday)

Every Monday morning, open your **El Aula Weekly KPIs** dashboard and check:

### Questions to Ask

1. **Users**: How many new visitors this week?
   - Target: 10+ per week
   - If low: Increase Instagram posts, ask referrals

2. **Engagement Rate**: % of sessions with meaningful action?
   - Target: 40%+
   - If low: Content needs improvement, CTAs not clear

3. **Average Time on Page**: How long do visitors stay?
   - Target: 2+ minutes
   - If low: Pages are confusing or not compelling

4. **Top Pages**: Which pages get the most views?
   - If Home is #1: Good
   - If Reviews is #1: People want social proof (add more)
   - If Courses is #1: Strong interest (follow up!)

5. **Traffic Source**: Where do visitors come from?
   - **Direct**: People typing your URL (good)
   - **Organic Search**: Google found you (growth)
   - **Instagram/Social**: Your marketing works
   - **Referral**: Word of mouth (best)

6. **CTA Clicks**: How many Register / WhatsApp clicks?
   - Target: 5+ per week
   - If low: CTAs not visible or copy needs work

7. **Scroll Depth**: How far do people read?
   - 75%+ reaching 50% scroll: Good engagement
   - If low: Page is too long or unfocused

8. **Subscribes**: How many email signups?
   - Target: 3+ per week
   - If low: Subscribe CTA buried or not compelling

---

## 7. Monthly Deep Dive (1st of month)

Once a month, answer these questions:

### **Traffic & Growth**
- Total users this month?
- Is this growing week-over-week?
- Which traffic sources grew?
- Which declined?

### **Content Performance**
- Which page has highest engagement rate?
- Which page has lowest engagement?
- Why? (Too long? No CTA? Confusing?)

### **Conversion Funnel**
- People visiting → % who click CTA → % who convert
- Example: 100 visitors → 20 CTA clicks (20%) → 3 enrollments (15%)
- Goal: Improve each step

### **Student Acquisition Cost (SAC)**
- If you spend $0: SAC = Free (best!)
- If organic: SAC = Time + effort
- Track manually: How many students came from website?

---

## 8. Reports to Check Regularly

### Real-Time Report (Check Daily)

**GA4** → **Reports** → **Realtime**

Shows:
- Active users right now
- Recent events
- Confirms GA4 is working

### Acquisition Report (Check Weekly)

**GA4** → **Reports** → **User Acquisition**

Shows:
- Where traffic comes from (Google, Instagram, Direct, etc.)
- How many users per source
- Conversion rate per source

### Engagement Report (Check Weekly)

**GA4** → **Reports** → **Engagement Overview**

Shows:
- Total engagement time
- Scroll depth insights
- Which pages keep attention

### Conversions Report (Check Weekly)

**GA4** → **Reports** → **Conversions**

Shows:
- How many conversions (if you marked events)
- Which source converts best
- Conversion rate by page

---

## 9. How to Interpret the Data

### Example Dashboard Reading

**Monday morning review:**
- Users: 47 (last week: 42) ✅ Growing
- Engagement rate: 52% (target: 40%+) ✅ Good
- Avg time on page: 3.2 minutes ✅ Excellent
- Top page: /courses (12 visitors) ✅ Strong interest
- Traffic: 60% Instagram, 20% Direct, 20% Organic ✅ Instagram working
- CTA clicks: 8 (Register + WhatsApp) ✅ Good
- Scroll depth: 68% reaching 50% ✅ Content engaging
- Subscribes: 2 new ⚠️ Could be higher

**Action**: Pages are performing well. Instagram drive is working. Newsletter could use better placement or copy.

---

## 10. Optimization Ideas (Test One Per Week)

Based on your GA4 data, try:

| Problem | Test | Expected Result |
|---------|------|-----------------|
| Low CTA clicks | Make CTA buttons more visible (bigger, more color) | +20% clicks |
| Low engagement time | Shorten content, clearer headings | +1 min time |
| Low subscribe rate | Add subscribe button in 2 more places | +50% signups |
| Low scroll depth | Move important info higher on page | +25% scroll |
| Low traffic | Ask past students to share on Instagram | +30% visitors |
| Low conversion | Add more testimonials to pages | +15% conversions |

---

## 11. Setting Up Email Alerts (Optional)

Want to know immediately when something happens?

1. **GA4** → **Admin** → **Alerts**
2. Create alert: "Notify me if daily users drop below 5"
3. Get email notifications when threshold is hit

---

## 12. Custom Reports (Advanced)

### Report: Which Traffic Source Converts Best?

1. **GA4** → **Reports** → **Acquisition** → **User Acquisition**
2. Add dimension: **Source**
3. Add metric: **Conversions** (if marked events as conversion goals)

You'll see: Instagram 20% conversion, Direct 10%, Organic 15%.
**Action**: Double down on Instagram.

---

## 13. Segment Analysis (Advanced)

### Analyze Different Student Types

**GA4** → **Explore** → Create custom reports:

- **CSEC Students**: Who visits /courses and clicks "CSEC Spanish"
- **CAPE Students**: Who visits /courses and clicks "CAPE Spanish"
- **Mobile Users**: All events on mobile devices
- **Returning Visitors**: Users who visit 2+ times

This shows which segment engages most.

---

## Checklist: GA4 is Ready When

- [ ] GA4 ID added to `.env.local`
- [ ] Real-time dashboard shows visitors
- [ ] Scroll depth events fire when you scroll
- [ ] CTA events fire when you click buttons
- [ ] Subscribe form fires event on submit
- [ ] Custom dashboard created with 8 cards
- [ ] At least one event marked as conversion goal
- [ ] Tested on both desktop and mobile
- [ ] Ready to launch to production

---

## Next Step: Monitor Weekly

Every Monday for 4 weeks, check your dashboard and track:

1. **Users trend**: Growing or flat?
2. **Engagement trend**: Improving or declining?
3. **Top pages**: Which content converts?
4. **Traffic source**: Where should you focus marketing?
5. **Conversion rate**: % of visitors taking action

After 4 weeks, you'll have **actionable data** to improve your site.

---

**Your dashboard is now your weekly scorecard. Use it.**
