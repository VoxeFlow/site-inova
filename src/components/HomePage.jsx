import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import ImplantTrustBlock from '@/components/ImplantTrustBlock';
import ImplantInvestmentSection from '@/components/ImplantInvestmentSection';
import ImplantIndications from '@/components/ImplantIndications';
import ImplantJourney from '@/components/ImplantJourney';
import ImplantQuickFaq from '@/components/ImplantQuickFaq';
import TeamAuthority from '@/components/TeamAuthority';
import Location from '@/components/Location';
import Footer from '@/components/Footer';
import ChatWidget from '@/components/ChatWidget';
import MobileStickyCTA from '@/components/MobileStickyCTA';
import JsonLd from '@/components/JsonLd';
import AuthorityHub from '@/components/AuthorityHub';
import HomeFinalCta from '@/components/HomeFinalCta';
import { homeFaqs } from '@/lib/faqs';
import { buildDentistSchema, buildFaqSchema, buildBreadcrumbSchema } from '@/lib/seo';

export default function HomePage() {
    return (
        <main className="min-h-screen bg-white pb-24 text-txt-primary selection:bg-brand-gold selection:text-white md:pb-0">
            <JsonLd data={buildDentistSchema()} />
            <JsonLd data={buildFaqSchema(homeFaqs)} />
            <JsonLd
                data={buildBreadcrumbSchema([
                    { name: 'Início', path: '/' },
                ])}
            />
            <Navbar />
            <Hero />
            <ImplantTrustBlock />
            <ImplantInvestmentSection />
            <ImplantIndications />
            <ImplantJourney />
            <ImplantQuickFaq />
            <TeamAuthority />
            <AuthorityHub />
            <HomeFinalCta />
            <Location />
            <Footer />
            <ChatWidget />
            <MobileStickyCTA />
        </main>
    );
}
