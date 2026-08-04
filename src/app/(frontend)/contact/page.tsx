import settingServices from '@/server/settings/setting-services';
import { Metadata } from 'next';
import React, { cache } from 'react';
import { Mail, MessageSquare, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

export async function generateMetadata(): Promise<Metadata> {
  const settings = await cache(settingServices.publicSettings)();

  return {
    title: `Contact Us - ${settings?.general?.applicationName || 'Back Erase'}`,
    description: `Get in touch with the ${settings?.general?.applicationName || 'Back Erase'} team. We're here to help with any questions or feedback.`,
  };
}

const ContactPage = async () => {
  const settings = await cache(settingServices.publicSettings)();

  return (
    <div className="container py-16 sm:py-24">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold tracking-tight mb-4">Contact Us</h1>
          <p className="text-lg text-muted-foreground">
            Have questions? We&apos;d love to hear from you. Send us a message and we&apos;ll
            respond as soon as possible.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <div className="size-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                <Mail className="size-5 text-primary" />
              </div>
              <div>
                <h3 className="font-bold text-lg">Email Us</h3>
                <p className="text-muted-foreground">support@backerase.com</p>
                <p className="text-muted-foreground text-sm mt-1">
                  We usually reply within 24 hours.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="size-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                <MessageSquare className="size-5 text-primary" />
              </div>
              <div>
                <h3 className="font-bold text-lg">Live Chat</h3>
                <p className="text-muted-foreground">Available Mon-Fri</p>
                <p className="text-muted-foreground text-sm mt-1">9am - 5pm EST</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="size-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                <MapPin className="size-5 text-primary" />
              </div>
              <div>
                <h3 className="font-bold text-lg">Office</h3>
                <p className="text-muted-foreground">123 AI Avenue, Tech City</p>
                <p className="text-muted-foreground text-sm mt-1">Silicon Valley, CA 94025</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="md:col-span-2 bg-card border border-border/50 rounded-3xl p-8 shadow-sm">
            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">
                    Name
                  </label>
                  <Input id="name" placeholder="Your name" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    Email
                  </label>
                  <Input id="email" type="email" placeholder="Your email" />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium">
                  Subject
                </label>
                <Input id="subject" placeholder="How can we help?" />
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">
                  Message
                </label>
                <Textarea id="message" placeholder="Your message..." className="min-h-[150px]" />
              </div>
              <Button
                type="submit"
                className="w-full sm:w-auto px-8 h-12 rounded-xl bg-primary hover:bg-primary/90"
              >
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
