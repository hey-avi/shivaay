
"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogDescription,
} from "@/components/ui/dialog";
import { Separator } from "@/components/ui/separator";

export function TeamInfoDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="text-sm text-muted-foreground hover:text-primary transition-colors">
          Team Info & Terms
        </button>
      </DialogTrigger>
      <DialogContent className="max-w-2xl bg-card/80 backdrop-blur-lg border-primary/30">
        <DialogHeader>
          <DialogTitle className="text-2xl">Team Information & Terms</DialogTitle>
          <DialogDescription>
            Important details about our team and this website.
          </DialogDescription>
        </DialogHeader>
        <div className="space-y-4 text-sm leading-relaxed max-h-[60vh] overflow-y-auto pr-4">
          <section>
            <h3 className="text-lg font-semibold text-primary mb-2">Our Identity</h3>
            <p>
              "Shivaay.dev", also referred to as "Team Shivaay" or simply "Shivaay", represents the collaborative effort of our core team members: Avinash, Neha, and Deepak. This website serves as a portfolio and digital presence for the projects and skills developed by our team.
            </p>
          </section>

          <Separator />

          <section>
            <h3 className="text-lg font-semibold text-primary mb-2">Ownership of Content</h3>
            <p>
              All content, projects, blog posts, and materials presented on this website (shivaay.dev) are the intellectual property of the respective team members who created them, unless otherwise stated. The projects showcased here are the result of personal development, hackathon participation, and educational pursuits.
            </p>
          </section>

          <Separator />

          <section>
            <h3 className="text-lg font-semibold text-primary mb-2">Use of Information</h3>
            <p>
              The information provided on this website is for general informational purposes only. While we strive to keep the information up-to-date and correct, we make no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability, or availability with respect to the website or the information, products, services, or related graphics contained on the website for any purpose. Any reliance you place on such information is therefore strictly at your own risk.
            </p>
          </section>
          
          <Separator />

          <section>
            <h3 className="text-lg font-semibold text-primary mb-2">External Links</h3>
            <p>
              Through this website, you may be able to link to other websites which are not under the control of Shivaay.dev. We have no control over the nature, content, and availability of those sites. The inclusion of any links does not necessarily imply a recommendation or endorse the views expressed within them.
            </p>
          </section>
        </div>
      </DialogContent>
    </Dialog>
  );
}
