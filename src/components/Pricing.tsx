import { useState } from 'react';
import { motion } from 'framer-motion';
import {
    Check,
    Coffee,
    Wifi,
    Calendar,
    Users,
    Monitor,
    Clock,
    Zap,
} from 'lucide-react';

export default function PricingSection() {
    const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>(
        'monthly',
    );

    const pricingPlans = [
        {
            name: 'Day Pass',
            description:
                'Perfect for occasional visits and trying out our space',
            price: billingCycle === 'monthly' ? '₹499' : '₹399',
            duration: 'per day',
            features: [
                'Access from 9 AM to 6 PM',
                'High-speed WiFi',
                'Free coffee & tea',
                'Community events access',
                'Printing (10 pages)',
                'Meeting room (1 hour)',
            ],
            popular: false,
            icon: <Calendar className="size-5" />,
            color: 'bg-blue-50',
            textColor: 'text-blue-600',
            borderColor: 'border-blue-200',
        },
        {
            name: 'Flex Desk',
            description: 'For those who need a regular but flexible workspace',
            price: billingCycle === 'monthly' ? '₹5,999' : '₹4,999',
            duration: 'per month',
            features: [
                '12 days access per month',
                'Access from 9 AM to 6 PM',
                'High-speed WiFi',
                'Free coffee & tea',
                'Community events access',
                'Printing (100 pages/month)',
                'Meeting room (5 hours/month)',
                'Locker storage',
            ],
            popular: true,
            icon: <Clock className="size-5" />,
            color: 'bg-purple-50',
            textColor: 'text-purple-600',
            borderColor: 'border-purple-200',
        },
        {
            name: 'Dedicated Desk',
            description: 'Your own permanent desk in our collaborative space',
            price: billingCycle === 'monthly' ? '₹9,999' : '₹8,499',
            duration: 'per month',
            features: [
                '24/7 access',
                'Personal dedicated desk',
                'Ergonomic chair',
                'High-speed WiFi',
                'Free coffee & tea',
                'Community events access',
                'Printing (250 pages/month)',
                'Meeting room (10 hours/month)',
                'Locker storage',
                'Business address usage',
            ],
            popular: false,
            icon: <Monitor className="size-5" />,
            color: 'bg-emerald-50',
            textColor: 'text-emerald-600',
            borderColor: 'border-emerald-200',
        },
        {
            name: 'Private Office',
            description: 'Enclosed space for teams of 2-4 people',
            price: billingCycle === 'monthly' ? '₹24,999' : '₹19,999',
            duration: 'per month',
            features: [
                '24/7 access',
                'Private enclosed office',
                'Desks for up to 4 people',
                'Ergonomic chairs',
                'High-speed WiFi',
                'Free coffee & tea',
                'Community events access',
                'Printing (500 pages/month)',
                'Meeting room (20 hours/month)',
                'Locker storage',
                'Business address usage',
                'Mail handling',
            ],
            popular: false,
            icon: <Users className="size-5" />,
            color: 'bg-amber-50',
            textColor: 'text-amber-600',
            borderColor: 'border-amber-200',
        },
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2,
            },
        },
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { type: 'spring', stiffness: 300, damping: 24 },
        },
    };

    const featureVariants = {
        hidden: { opacity: 0, x: -10 },
        visible: (i: number) => ({
            opacity: 1,
            x: 0,
            transition: {
                delay: i * 0.05,
                duration: 0.5,
            },
        }),
    };

    function sendEmail(planName: string) {
        const email = "example@coworkassam.com"; // Replace with your email address
        const subject = `Booking Request for ${planName}`;
        const body = `Hello,\n\nI would like to book a tour for the "${planName}" plan. Please provide more details.\n\nThank you.`;
        window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    }

    return (
        <section className="py-20 px-4 bg-gradient-to-b from-white to-slate-50">
            <div className="max-w-7xl mx-auto">
                <div className="text-center flex flex-col gap-3 items-center mb-16 w-full">
                    <motion.h2
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-2xl text-center  w-[10rem] font-bold mb-4 bg-yellow-400 rounded-full shadow-[0px_5px_0px_0px_#000]  px-4 py-1"
                    >
                        Pricing
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-gray-600 max-w-2xl mx-auto mb-8"
                    >
                        No long-term leases, no hidden fees—just flexible plans
                        designed to help you do your best work.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="flex items-center justify-center gap-3 mb-8"
                    >
                        <label
                            htmlFor="billing-toggle"
                            className={`${
                                billingCycle === 'monthly'
                                    ? 'text-black'
                                    : 'text-gray-400'
                            }`}
                        >
                            Monthly
                        </label>
                        <div
                            className="relative inline-block w-12 h-6 bg-gray-300 rounded-full cursor-pointer"
                            onClick={() =>
                                setBillingCycle(
                                    billingCycle === 'monthly'
                                        ? 'yearly'
                                        : 'monthly',
                                )
                            }
                        >
                            <span
                                className={`absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full transition-transform duration-300 ease-in-out ${
                                    billingCycle === 'yearly'
                                        ? 'translate-x-6'
                                        : ''
                                }`}
                            ></span>
                        </div>
                        <div className="flex items-center gap-2">
                            <label
                                htmlFor="billing-toggle"
                                className={`${
                                    billingCycle === 'yearly'
                                        ? 'text-black'
                                        : 'text-gray-400'
                                }`}
                            >
                                Yearly
                            </label>
                            <span className="inline-block px-2 py-1 text-xs font-medium rounded-full bg-green-100 text-green-800">
                                Save 20%
                            </span>
                        </div>
                    </motion.div>
                </div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
                >
                    {pricingPlans.map((plan) => (
                        <motion.div
                            key={plan.name}
                            variants={itemVariants}
                            className={`relative rounded-xl border hover:shadow-[2px_5px_0px_0px_#000] cursor-pointer ${plan.borderColor} bg-card shadow-sm overflow-hidden transition-all duration-300  ${
                                plan.popular ? 'ring-2 ring-[#4CAF50]' : ''
                            }`}
                        >
                            {plan.popular && (
                                <div className="absolute top-0 right-0">
                                    <div className="text-xs font-semibold px-3 py-1 bg-[#4CAF50] text-white rounded-bl-lg">
                                        Most Popular
                                    </div>
                                </div>
                            )}

                            <div className={`p-6 ${plan.color}`}>
                                <div
                                    className={`size-12 rounded-lg flex items-center justify-center mb-4 ${plan.textColor} bg-white shadow-sm`}
                                >
                                    {plan.icon}
                                </div>
                                <h3 className="text-xl font-bold">
                                    {plan.name}
                                </h3>
                                <p className="text-gray-600 text-sm mt-1 mb-4">
                                    {plan.description}
                                </p>
                                <div className="flex items-baseline mt-4">
                                    <span className="text-3xl font-bold">
                                        {plan.price}
                                    </span>
                                    <span className="ml-1 text-gray-600">
                                        {plan.duration}
                                    </span>
                                </div>
                            </div>

                            <div className="p-6">
                                <ul className="space-y-3">
                                    {plan.features.map((feature, i) => (
                                        <motion.li
                                            custom={i}
                                            variants={featureVariants}
                                            initial="hidden"
                                            animate="visible"
                                            key={i}
                                            className="flex items-start gap-2"
                                        >
                                            <Check className="size-4 text-green-500 mt-1 shrink-0" />
                                            <span className="text-sm">
                                                {feature}
                                            </span>
                                        </motion.li>
                                    ))}
                                </ul>

                                <button
                                    className={`w-full mt-6 px-4 py-2 rounded-md transition-colors duration-300 hover:bg-[#4CAF50] cursor-pointer ${
                                        plan.popular
                                            ? 'bg-[#4CAF50] text-white hover:bg-[#4CAF50]/90'
                                            : 'border border-[#4CAF50] text-[#4CAF50] hover:bg-[#4CAF50]/10'
                                    }`}
                                    onClick={() => sendEmail(plan.name)}
                                >
                                    {plan.name === 'Day Pass'
                                        ? 'Book Now'
                                        : 'Get Started'}
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}