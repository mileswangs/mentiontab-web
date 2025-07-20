import Feature from "@/components/Feature";
import Header from "@/components/Header";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <div className="min-h-screen pb-5 ">
      <Header />
      <div className="w-full flex flex-col relative mx-auto mt-20 md:mt-28 mb-16 gap-16">
        <Hero />
        <div id="examples"></div>
        <div className="flex flex-col gap-16">
          <Feature
            title="For Post"
            description="Analyze replies. Suggest better ones."
            video="/x_show.mp4"
          />
          <Feature
            title="For Group Chat"
            description="Find what matters in group chat"
            video="/chat_show.mp4"
          />
          <Feature
            title="For Learning"
            description="A tutor in every tab"
            video="/lab_show.mp4"
          />
        </div>
      </div>
    </div>
  );
}
