import AdvertisementSection from "@/components/advertisement/AdvertisementSection";
import Banner from "@/components/Banner";
import LatestTicketsSection from "@/components/Latest/LatestTicketsSection";
import PopularRoutes from "@/components/PopularRoutes";
import WhyChooseSection from "@/components/WhyChooseSection";


export default function Home() {
  return (
   <>
   <Banner></Banner>
   <AdvertisementSection></AdvertisementSection>
   <LatestTicketsSection></LatestTicketsSection>
   <PopularRoutes></PopularRoutes>
   <WhyChooseSection></WhyChooseSection>
   </>
  );
}
