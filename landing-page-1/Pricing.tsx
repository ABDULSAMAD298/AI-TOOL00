// This component displays the different subscription plans or pricing tiers available for the product or service.
// It typically includes information such as price, features included in each plan, and a call-to-action for users to sign up or purchase.
// This component is key for conversion and clearly communicates the value proposition of each pricing tier.

import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { FaFire } from 'react-icons/fa';
import CheckedIcon from '@/assets/landing-page-1/CheckedIcon';
import { cn } from '@/utils/utils';
import GreenBadge from '@/assets/landing-page-1/GreenBadge';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const plans = [
  {
    badge: 'Professional',
    price: '56',
    features: ['Single user license', 'Lifetime updates', '5,000+ icons', '6 unique styles'],
    isHiglighted: false,
  },
  {
    badge: 'Team',
    price: '112',
    features: [
      'Single user license',
      'Lifetime updates',
      '5,000+ icons',
      '6 unique styles',
      'Live stroke & corners',
    ],
    isHiglighted: true,
  },
  {
    badge: 'Enterprise',
    price: '224',
    features: [
      'Single user license',
      'Lifetime updates',
      '5,000+ icons',
      '6 unique styles',
      'Powered by variants',
      'IconJar & SVG library',
      'Unlimited projects',
    ],
    isHiglighted: false,
  },
];

const Pricing = () => {
  return (
    <div id='pricing' className='space-y-[120px] px-6 mt-[200px] mb-24'>
      <div className='space-y-6'>
        <p className='text-center text-3xl md:text-5xl font-medium header-gradient !leading-normal'>
          Pay once, use forever, upgrade for free
        </p>
        <p className='text-[#C9C9C9] text-center md:text-xl  font-normal max-w-3xl mx-auto'>
          Flexible pricing for any team size. It's a one-time payment — you only buy a license once, and all
          future updates are free for you forever.
        </p>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-4'>
        {plans.map((plan, index) => (
          <Card
            key={index}
            className={cn(plan.isHiglighted && 'border-4 border-[#26AB75]', 'h-fit bg-white')}>
            <CardContent className='m-8 p-0 text-[#050316]'>
              {plan.isHiglighted && (
                <div className='relative'>
                  <GreenBadge />
                  <p className='text-lg  font-semibold leading-7 text-white absolute top-[-63px] left-1/2 -translate-x-1/2'>
                    Best value
                  </p>
                </div>
              )}
              <Badge className='text-sm font-medium leading-5 mb-8 bg-[#26AB75]'>{plan.badge}</Badge>
              <div className='flex gap-1 mb-2'>
                <p className='text-3xl font-normal'>$</p>
                <p className='text-5xl font-bold'>{plan.price}</p>
              </div>
              <p className='font-normal'>For freelancers, indie developers or solopreneurs.</p>
              <Button
                className={cn(
                  'rounded-full w-full border border-[#e7e7e7] py-6 font-bold mt-6 mb-12 gap-2 shadow-none',
                  plan.isHiglighted
                    ? 'text-white bg-[#26AB75] hover:bg-[#26AB75]/90'
                    : 'text-[#2AA875] bg-[#DFFFF2] hover:bg-[#DFFFF2]/45'
                )}>
                <FaFire className='size-5' />
                Buy Now
              </Button>
              <ul className='space-y-2'>
                {plan.features.map((text, index) => (
                  <li key={index} className='flex items-center gap-3 font-normal leading-7'>
                    <CheckedIcon /> {text}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Pricing;
