// import { useEffect, useState } from 'react';
// import { motion } from 'framer-motion';
// import { Check, Send } from 'lucide-react';
// import emailjs from '@emailjs/browser';

// export default function BookTour() {
//     useEffect(() => {
//         window.scrollTo(0, 0);
//     }, []);

//     const [formData, setFormData] = useState({
//         name: '',
//         email: '',
//         phone: '',
//         company: '',
//         date: '',
//         time: '',
//         tourType: 'In-Person Tour',
//         interests: [] as string[],
//         teamSize: 'Just me',
//         message: '',
//     });
//     const [submitted, setSubmitted] = useState(false);
//     const [isSubmitting, setIsSubmitting] = useState(false);

//     const handleChange = (
//         e: React.ChangeEvent<
//             HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
//         >,
//     ) => {
//         const { name, value, type } = e.target;

//         if (type === 'checkbox') {
//             const checkedValue = (e.target as HTMLInputElement).value;
//             setFormData((prev) => ({
//                 ...prev,
//                 interests: prev.interests.includes(checkedValue)
//                     ? prev.interests.filter((i) => i !== checkedValue)
//                     : [...prev.interests, checkedValue],
//             }));
//         } else {
//             setFormData((prev) => ({ ...prev, [name]: value }));
//         }
//     };

//     const handleSubmit = async (
//         e: React.FormEvent<HTMLFormElement>,
//     ): Promise<void> => {
//         e.preventDefault();
//         setIsSubmitting(true);

//         try {
//             const templateParams = {
//                 name: formData.name,
//                 email: formData.email,
//                 phone: formData.phone,
//                 company: formData.company,
//                 date: formData.date,
//                 time: formData.time,
//                 tourType: formData.tourType,
//                 interests: formData.interests.join(', '),
//                 teamSize: formData.teamSize,
//                 message: formData.message,
//             };

//             await emailjs.send(
//                 process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || '',
//                 process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || '',
//                 templateParams,
//                 process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || '',
//             );

//             setSubmitted(true);
//         } catch (error) {
//             console.error('Error sending email:', error);
//             alert('Failed to book tour. Please try again.');
//         } finally {
//             setIsSubmitting(false);
//         }
//     };

//     const handleBookAgain = () => {
//         setFormData({
//             name: '',
//             email: '',
//             phone: '',
//             company: '',
//             date: '',
//             time: '',
//             tourType: 'In-Person Tour',
//             interests: [],
//             teamSize: 'Just me',
//             message: '',
//         });
//         setSubmitted(false);
//     };

//     return (
//         <section className="py-16 md:py-20 px-4 bg-gray-50">
//             <div className="max-w-4xl mx-auto text-center">
//                 <motion.h2
//                     className="text-3xl md:text-4xl font-bold mb-4 text-gray-800"
//                     initial={{ opacity: 0, y: -20 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     transition={{ duration: 0.6 }}
//                 >
//                     Book Your Workspace Tour
//                 </motion.h2>
//                 <motion.p
//                     className="text-gray-600 mb-8 max-w-2xl mx-auto text-base md:text-lg"
//                     initial={{ opacity: 0, y: 20 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     transition={{ duration: 0.6, delay: 0.2 }}
//                 >
//                     Discover the perfect workspace tailored to your needs.
//                     Schedule a personalized tour and explore our modern,
//                     flexible work environments.
//                 </motion.p>
//             </div>

//             <div className="max-w-2xl mx-auto bg-white p-6 md:p-10 rounded-2xl shadow-xl">
//                 {!submitted ? (
//                     <form
//                         onSubmit={handleSubmit}
//                         className="grid gap-4 grid-cols-1 md:grid-cols-2"
//                     >
//                         <input
//                             className="w-full p-3 border border-gray-300 rounded-lg col-span-1 md:col-span-2 focus:ring-2 focus:ring-blue-200 transition-all"
//                             name="name"
//                             placeholder="Full Name"
//                             value={formData.name}
//                             onChange={handleChange}
//                             required
//                             aria-label="Full Name"
//                         />
//                         <input
//                             className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-200 transition-all"
//                             type="email"
//                             name="email"
//                             placeholder="Email Address"
//                             value={formData.email}
//                             onChange={handleChange}
//                             required
//                             aria-label="Email Address"
//                         />
//                         <input
//                             className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-200 transition-all"
//                             type="tel"
//                             name="phone"
//                             placeholder="Phone Number"
//                             value={formData.phone}
//                             onChange={handleChange}
//                             required
//                             aria-label="Phone Number"
//                         />
//                         <input
//                             className="w-full p-3 border border-gray-300 rounded-lg col-span-1 md:col-span-2 focus:ring-2 focus:ring-blue-200 transition-all"
//                             name="company"
//                             placeholder="Company (Optional)"
//                             value={formData.company}
//                             onChange={handleChange}
//                             aria-label="Company"
//                         />
//                         <div className="grid grid-cols-2 gap-4 col-span-1 md:col-span-2">
//                             <input
//                                 className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-200 transition-all"
//                                 type="date"
//                                 name="date"
//                                 value={formData.date}
//                                 onChange={handleChange}
//                                 required
//                                 aria-label="Date"
//                             />
//                             <input
//                                 className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-200 transition-all"
//                                 type="time"
//                                 name="time"
//                                 value={formData.time}
//                                 onChange={handleChange}
//                                 required
//                                 aria-label="Time"
//                             />
//                         </div>

//                         <div className="col-span-1 md:col-span-2">
//                             <legend className="text-sm font-medium text-gray-700 mb-2">
//                                 Tour Type
//                             </legend>
//                             <div className="flex space-x-4">
//                                 {['In-Person Tour', 'Virtual Tour'].map(
//                                     (type) => (
//                                         <label
//                                             key={type}
//                                             className="inline-flex items-center"
//                                         >
//                                             <input
//                                                 type="radio"
//                                                 name="tourType"
//                                                 value={type}
//                                                 checked={
//                                                     formData.tourType === type
//                                                 }
//                                                 onChange={handleChange}
//                                                 className="form-radio text-blue-500"
//                                                 aria-label={type}
//                                             />
//                                             <span className="ml-2">{type}</span>
//                                         </label>
//                                     ),
//                                 )}
//                             </div>
//                         </div>

//                         <div className="col-span-1 md:col-span-2">
//                             <legend className="text-sm font-medium text-gray-700 mb-2">
//                                 Interests
//                             </legend>
//                             <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
//                                 {[
//                                     'Hot Desk',
//                                     'Dedicated Desk',
//                                     'Private Office',
//                                     'Meeting Rooms',
//                                     'Event Space',
//                                 ].map((interest) => (
//                                     <label
//                                         key={interest}
//                                         className="inline-flex items-center"
//                                     >
//                                         <input
//                                             type="checkbox"
//                                             name="interests"
//                                             value={interest}
//                                             checked={formData.interests.includes(
//                                                 interest,
//                                             )}
//                                             onChange={handleChange}
//                                             className="form-checkbox text-blue-500"
//                                             aria-label={interest}
//                                         />
//                                         <span className="ml-2 text-sm">
//                                             {interest}
//                                         </span>
//                                     </label>
//                                 ))}
//                             </div>
//                         </div>

//                         <div className="col-span-1 md:col-span-2">
//                             <label
//                                 htmlFor="teamSize"
//                                 className="block text-sm font-medium text-gray-700 mb-2"
//                             >
//                                 Team Size
//                             </label>
//                             <select
//                                 id="teamSize"
//                                 name="teamSize"
//                                 value={formData.teamSize}
//                                 onChange={handleChange}
//                                 className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-200 transition-all"
//                                 aria-label="Team Size"
//                             >
//                                 {[
//                                     'Just me',
//                                     '2-5',
//                                     '6-10',
//                                     '11-20',
//                                     '21-50',
//                                     '50+',
//                                 ].map((size) => (
//                                     <option key={size} value={size}>
//                                         {size} members
//                                     </option>
//                                 ))}
//                             </select>
//                         </div>

//                         <textarea
//                             className="w-full p-3 border border-gray-300 rounded-lg col-span-1 md:col-span-2 focus:ring-2 focus:ring-blue-200 transition-all"
//                             name="message"
//                             placeholder="Additional Information (Optional)"
//                             value={formData.message}
//                             onChange={handleChange}
//                             rows={4}
//                             aria-label="Additional Information"
//                         />

//                         <button
//                             type="submit"
//                             disabled={isSubmitting}
//                             className={`col-span-1 md:col-span-2 w-full p-3 rounded-lg text-white font-semibold transition-all ${
//                                 isSubmitting
//                                     ? 'bg-blue-300 cursor-not-allowed'
//                                     : 'bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2'
//                             }`}
//                         >
//                             {isSubmitting ? (
//                                 'Booking...'
//                             ) : (
//                                 <span className="flex items-center justify-center">
//                                     <Send className="mr-2 h-5 w-5" /> Book a
//                                     Tour
//                                 </span>
//                             )}
//                         </button>
//                     </form>
//                 ) : (
//                     <motion.div
//                         className="text-center"
//                         initial={{ opacity: 0, scale: 0.9 }}
//                         animate={{ opacity: 1, scale: 1 }}
//                         transition={{ duration: 0.5 }}
//                     >
//                         <Check className="w-16 h-16 text-green-500 mx-auto mb-4" />
//                         <h3 className="text-2xl font-bold text-gray-800 mb-2">
//                             Tour Booked Successfully!
//                         </h3>
//                         <p className="text-gray-600 mb-4">
//                             We'll contact you shortly to confirm your tour
//                             details.
//                         </p>
//                         <button
//                             onClick={handleBookAgain}
//                             className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
//                         >
//                             Book Another Tour
//                         </button>
//                     </motion.div>
//                 )}
//             </div>
//         </section>
//     );
// }








import { useEffect } from 'react';

const BookTour = () => {
  const formId = import.meta.env.VITE_TYPEFORM_ID;

  useEffect(() => {
    // Load Typeform embed script dynamically
    const script = document.createElement('script');
    script.src = '//embed.typeform.com/next/embed.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Clean up script on unmount
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="p-4">
      <div data-tf-live={formId} style={{ minHeight: '500px' }}></div>
    </div>
  );
};

export default BookTour;

