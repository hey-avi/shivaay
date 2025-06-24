
import { Separator } from "@/components/ui/separator";

export default function TeamInfoPage() {
  return (
    <div className="max-w-4xl mx-auto py-8 md:py-16 px-4">
      <header className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Team Information & Terms</h1>
        <p className="text-lg md:text-xl text-muted-foreground">Important details about our team and this website.</p>
      </header>
      
      <div className="space-y-8 text-lg leading-relaxed prose prose-lg dark:prose-invert max-w-none bg-card/50 p-6 md:p-8 rounded-lg shadow-lg">
        <section>
          <h2 className="text-2xl font-semibold text-primary">Our Identity</h2>
          <p>
            "Shivaay.dev", also referred to as "Team Shivaay" or simply "Shivaay", represents the collaborative effort of our core team members: Avinash, Neha, and Deepak. This website serves as a portfolio and digital presence for the projects and skills developed by our team.
          </p>
        </section>

        <Separator />

        <section>
          <h2 className="text-2xl font-semibold text-primary">Ownership of Content</h2>
          <p>
            All content, projects, blog posts, and materials presented on this website (shivaay.dev) are the intellectual property of the respective team members who created them, unless otherwise stated. The projects showcased here are the result of personal development, hackathon participation, and educational pursuits.
          </p>
        </section>

        <Separator />

        <section>
          <h2 className="text-2xl font-semibold text-primary">Use of Information</h2>
          <p>
            The information provided on this website is for general informational purposes only. While we strive to keep the information up-to-date and correct, we make no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability, or availability with respect to the website or the information, products, services, or related graphics contained on the website for any purpose. Any reliance you place on such information is therefore strictly at your own risk.
          </p>
        </section>

        <Separator />
        
        <section>
          <h2 className="text-2xl font-semibold text-primary">External Links</h2>
          <p>
            Through this website, you may be able to link to other websites which are not under the control of Shivaay.dev. We have no control over the nature, content, and availability of those sites. The inclusion of any links does not necessarily imply a recommendation or endorse the views expressed within them.
          </p>
        </section>
      </div>
    </div>
  );
}
