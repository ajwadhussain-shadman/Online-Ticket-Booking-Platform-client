import AdvertisementSection from "@/components/advertisement/AdvertisementSection";
import Banner from "@/components/Banner";
import LatestTicketsSection from "@/components/Latest/LatestTicketsSection";


export default function Home() {
  return (
   <>
   <Banner></Banner>
   <AdvertisementSection></AdvertisementSection>
   <LatestTicketsSection></LatestTicketsSection>
   </>
  );
}
