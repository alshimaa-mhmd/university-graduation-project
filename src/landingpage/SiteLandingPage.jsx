import AnalyticsTeams from "./AnalyticsTeams";
import FeatureSection from "./Features";
import FooterCta from "./FooterCta";
import Hero from "./Hero";
import LandingNav from "./LandingNav";
import SocialProof from "./SocialProof";
import analysisImage from "../assets/img5.avif"
import experimentationImage from "../assets/img6.avif"
import insightsImage from "../assets/img7.avif"

const features = [
  {
    eyebrow: "Complete product analytics",
    title: "Complete product analytics",
    desc: "Track usage, adoption, drop-offs, and retention with powerful funnels and cohorts. Segment users to uncover friction, optimize journeys, and connect metrics directly to product goals with live Metric Trees — no insights turn into action.",
    cta: "Get a Demo →",
    bg: "bg-[#f7f5ff]",
    side: "right",
    image : analysisImage
  },
  {
    eyebrow: "Experimentation",
    title: "Experimentation",
    desc: "Run A/B tests on targeted cohorts and roll out features with confidence. Measure impact across key metrics and drill into session replays to understand why changes work — before you scale them.",
    cta: "Get a Demo →",
    bg: "bg-white",
    side: "left",
    image : experimentationImage
  },
  {
    eyebrow: "Self-serve insights",
    title: "Self-serve insights",
    desc: "Let anyone ask and answer questions in seconds — no SQL or dashboards required. AI surfaces patterns and drivers across trusted metrics, helping you explore deeper and move faster with confidence.",
    cta: "Get a Demo →",
    bg: "bg-[#f7f5ff]",
    side: "right",
    image : insightsImage
  },
];
 

export default function SiteLandingPage() {
  return (
    <div className="font-sans antialiased">
      <LandingNav />
      <Hero />
      <AnalyticsTeams />
      {features.map((f, i) => (
        <FeatureSection key={f.title} feature={f} idx={i} />
      ))}
      <SocialProof />
      {/* <Integrations /> */}
      <FooterCta />
      {/* <Footer /> */}
    </div>
  );
}