import TopSocialBar from "@/components/enem/TopSocialBar";
import HeroSection from "@/components/enem/HeroSection";
import ValueProposition from "@/components/enem/ValueProposition";
import PainSection from "@/components/enem/PainSection";
import MechanismSection from "@/components/enem/MechanismSection";
import ProductDemo from "@/components/enem/ProductDemo";
import OnboardingSection from "@/components/enem/OnboardingSection";
import FeaturesSection from "@/components/enem/FeaturesSection";
import ComparisonTable from "@/components/enem/ComparisonTable";
import OffersSection from "@/components/enem/OffersSection";
import PlanComparison from "@/components/enem/PlanComparison";
import SocialProof from "@/components/enem/SocialProof";
import EvolutionSection from "@/components/enem/EvolutionSection";
import GuaranteeFaqFooter from "@/components/enem/GuaranteeFaqFooter";
import MobileCTA from "@/components/enem/MobileCTA";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <TopSocialBar />
      <HeroSection />
      <ValueProposition />
      <PainSection />
      <MechanismSection />
      <ProductDemo />
      <OnboardingSection />
      <FeaturesSection />
      <ComparisonTable />
      <OffersSection />
      <PlanComparison />
      <SocialProof />
      <EvolutionSection />
      <GuaranteeFaqFooter />
      <MobileCTA />
    </main>
  );
}
