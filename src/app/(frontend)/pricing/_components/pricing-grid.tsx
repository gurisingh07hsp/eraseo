'use client';

import { useSettings } from '@/app/_providers/settings-provider';
import { useProfile, useUserSubscription } from '@/app/admin/profile/_services/profile-hooks';
import { Plan } from '@/server/plans/plan-services';
import { useRouter } from 'nextjs-toploader/app';
import React from 'react';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Check, X } from 'lucide-react';
import { motion } from 'motion/react';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';

import { useCheckout } from '../_services/pricing-hooks';
import PricingCard from './pricing-card';
const parseFeatures = (features: string) => {
  return features
    .split(',')
    .map((feature) => feature.trim())
    .filter((feature) => feature !== '');
};

const calculateYearlySavings = (plans: Plan[]) => {
  if (plans.length === 0) {
    return 0;
  }

  let monthlyPrice = 0;
  let yearlyPrice = 0;

  const popularPlan = plans.find((plan) => plan.isPopular);
  if (popularPlan) {
    monthlyPrice = popularPlan.monthlyPrice;
    yearlyPrice = popularPlan.yearlyPrice;
  } else {
    const firstPlan = plans[0];
    monthlyPrice = firstPlan.monthlyPrice;
    yearlyPrice = firstPlan.yearlyPrice;
  }

  const monthlyTotal = monthlyPrice * 12;
  const yearlyTotal = yearlyPrice;
  const savings = ((monthlyTotal - yearlyTotal) / monthlyTotal) * 100;

  return Math.round(savings);
};

const whyChooseFeatures = [
  'AI-powered background removal in seconds',
  'High-resolution downloads',
  'Clean, professional cutouts',
  'Fast cloud processing',
  'Secure image handling',
  'Affordable pricing',
  'Easy upgrades anytime',
];

const industries = [
  {
    title: 'eCommerce',
    description:
      'Create professional product images for Shopify, WooCommerce, Amazon, Etsy, and other online marketplaces.',
  },
  {
    title: 'Photography',
    description: 'Deliver studio-quality portraits with perfectly removed backgrounds.',
  },
  {
    title: 'Marketing',
    description: 'Design banners, advertisements, and social media graphics in minutes.',
  },
  {
    title: 'Graphic Design',
    description:
      'Create transparent PNG images for branding, presentations, and creative projects.',
  },
  {
    title: 'Developers',
    description: 'Automate background removal with our API for websites and applications.',
  },
];

const comparisonFeatures = [
  { name: 'AI Background Removal', free: true, pro: true, business: true },
  { name: 'High-Resolution Downloads', free: 'Limited', pro: true, business: true },
  { name: 'Unlimited Processing', free: false, pro: true, business: true },
  { name: 'Bulk Processing', free: false, pro: false, business: true },
  { name: 'API Access', free: false, pro: false, business: true },
  { name: 'Commercial Use', free: false, pro: true, business: true },
  { name: 'Priority Support', free: false, pro: true, business: true },
  { name: 'Business Invoicing', free: false, pro: false, business: true },
];

const PricingGrid = ({ plans }: { plans: Plan[] }) => {
  const router = useRouter();
  const { user, isLoading } = useProfile();
  const { handleCheckout, isPending, selectedPlan, setSelectedPlan } = useCheckout();
  const { subscription, isLoading: subscriptionLoading } = useUserSubscription();
  const settings = useSettings();
  const [paymentFrequency, setPaymentFrequency] = React.useState<'monthly' | 'yearly'>('monthly');

  return (
    <div className="space-y-24">
      {/* Hero Intro */}
      <div className="container">
        <div className="flex flex-col items-center text-center space-y-4">
          <Badge className="mb-2" variant="secondary">
            Pricing
          </Badge>
          <h1 className="text-3xl md:text-5xl font-bold">
            Simple, Transparent Pricing for Every Workflow
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl">
            Whether you're removing backgrounds for personal projects, running an online store, or
            creating content for clients, BackErase offers a pricing plan that fits your needs.
            Start for free and upgrade whenever you need more features.
          </p>
          <p className="text-muted-foreground">
            No complicated pricing. No hidden fees. Just fast, accurate AI background removal.
          </p>
        </div>
      </div>

      {/* Why Choose BackErase */}
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose BackErase?</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {whyChooseFeatures.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex items-center gap-3 p-4 rounded-lg bg-accent/30 border border-border/50"
            >
              <Check className="text-primary flex-shrink-0" />
              <span>{feature}</span>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Pricing Cards */}
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">Compare Plans</h2>
        </div>
        <div className="mb-12 flex justify-center">
          <Tabs
            value={paymentFrequency}
            onValueChange={(value) => setPaymentFrequency(value as 'monthly' | 'yearly')}
          >
            <TabsList className="rounded-full h-12 border">
              <TabsTrigger className="rounded-full px-4 h-10 text-md" value="monthly">
                Monthly
              </TabsTrigger>
              <TabsTrigger className="rounded-full px-4 h-10 text-md" value="yearly">
                Yearly{' '}
                <span className="bg-primary text-primary-foreground rounded-full ml-1 px-2 text-xs font-semibold py-0.5">
                  Save {calculateYearlySavings(plans)}%
                </span>
              </TabsTrigger>
            </TabsList>
          </Tabs>
        </div>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-6">
          <PricingCard
            name="Free Plan"
            description="Perfect for beginners & casual users"
            features={[
              'Remove backgrounds online for free',
              'High-quality transparent PNG export',
              'Basic AI processing',
              'Web access on all devices',
              'No credit card required',
            ]}
            price="Free"
            buttonText={user ? 'Profile' : 'Get Started Free'}
            disabled={isLoading || subscriptionLoading}
            paymentFrequency={paymentFrequency === 'monthly' ? 'Month' : 'Year'}
            onButtonClick={() => {
              if (user) {
                router.push('/profile/?tab=billing');
              } else {
                router.push('/signup');
              }
            }}
          />
          {plans.map((plan) => (
            <PricingCard
              key={plan.id}
              name={plan.name}
              description={plan.description || ''}
              features={parseFeatures(plan.features)}
              price={paymentFrequency === 'monthly' ? plan.monthlyPrice : plan.yearlyPrice}
              paymentFrequency={paymentFrequency === 'monthly' ? 'Month' : 'Year'}
              buttonText={
                subscription
                  ? 'Manage'
                  : plan.name === 'Pro Plan'
                    ? 'Upgrade to Pro'
                    : 'Upgrade to Business'
              }
              isPopular={plan.isPopular}
              disabled={isLoading || subscriptionLoading}
              isLoading={isPending && selectedPlan === plan.id}
              onButtonClick={() => {
                if (subscription) {
                  router.push(`/profile`);
                } else if (!user) {
                  router.push('/signup');
                } else {
                  setSelectedPlan(plan.id);
                  const priceId =
                    paymentFrequency === 'monthly' ? plan.monthlyPriceId : plan.yearlyPriceId;
                  if (priceId) {
                    handleCheckout(priceId);
                  }
                }
              }}
            />
          ))}
        </div>
      </div>

      {/* Feature Comparison Table */}
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">Features Comparison</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b">
                <th className="text-left py-4 px-4 font-semibold">Feature</th>
                <th className="text-center py-4 px-4 font-semibold">Free</th>
                <th className="text-center py-4 px-4 font-semibold">Pro</th>
                <th className="text-center py-4 px-4 font-semibold">Business</th>
              </tr>
            </thead>
            <tbody>
              {comparisonFeatures.map((feature, index) => (
                <tr key={index} className="border-b">
                  <td className="py-4 px-4">{feature.name}</td>
                  <td className="text-center py-4 px-4">
                    {typeof feature.free === 'boolean' ? (
                      feature.free ? (
                        <Check className="text-green-500 inline" />
                      ) : (
                        <X className="text-muted-foreground inline" />
                      )
                    ) : (
                      feature.free
                    )}
                  </td>
                  <td className="text-center py-4 px-4">
                    {typeof feature.pro === 'boolean' ? (
                      feature.pro ? (
                        <Check className="text-green-500 inline" />
                      ) : (
                        <X className="text-muted-foreground inline" />
                      )
                    ) : (
                      feature.pro
                    )}
                  </td>
                  <td className="text-center py-4 px-4">
                    {typeof feature.business === 'boolean' ? (
                      feature.business ? (
                        <Check className="text-green-500 inline" />
                      ) : (
                        <X className="text-muted-foreground inline" />
                      )
                    ) : (
                      feature.business
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Built for Every Industry */}
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">Built for Every Industry</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((industry, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="py-5">
                <CardHeader>
                  <CardTitle>{industry.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{industry.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Scale as You Grow */}
      <div className="container">
        <Card className="bg-gradient-to-br from-accent/30 to-background">
          <CardContent className="p-8 md:p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Scale as You Grow</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Start with the Free plan and upgrade whenever your needs increase. Whether you're
              editing a few images each week or processing thousands every month, BackErase provides
              the speed and reliability you need.
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Ready to Get Started */}
      <div className="container">
        <div className="text-center space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold">Ready to Get Started?</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Join thousands of creators, photographers, online sellers, and businesses using
            BackErase to remove backgrounds quickly and professionally.
          </p>
          <p className="text-muted-foreground">
            Start Free Today • Upgrade Anytime • Create Better Images Faster
          </p>
          <Button size="lg" onClick={() => router.push(user ? '/upload' : '/signup')}>
            Get Started Free
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PricingGrid;
