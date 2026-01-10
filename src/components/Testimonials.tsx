"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Header from "./Header";
import Footer from "./Footer";

export default function Testimonials() {
  const testimonials = [
    {
      name: "John Doe",
      location: "Los Angeles, USA",
      text: "The team at NexaLaw went above and beyond to resolve my legal issue. Their attention to detail, clear communication, and professionalism gave me the confidence I needed during a stressful time. I highly recommend them.",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuCcX7ChHvQi2nv5_QunJFWilqbYSOby5LIJBbvXrEXRP5Jk0wjwr323iP-VCykEogaD6dkYVra-uH6FsXZ4Qx7wy8KcfdMSZ3rpuLcwABKQxTNBzjjgogNZtjvI7yzonx-MBf-aJHx14I3dA_-A6EIFTdNDTIbVeiJ7Oa7lkY_QDo7K8bkT9Ysh6epj9JSjfv-EL_ERoyNnzw6yazNdc9f1hbZpebOFvSefURMRHgS5QM5dJOlYMVGSV6VBACFvVl8267JfMI97RzPI",
    },
    {
      name: "Emily Carter",
      location: "Chicago, USA",
      text: "NexaLaw turned a complex property dispute into a manageable process. Their strategic approach and dedication to my case ensured a favorable outcome. I'm incredibly grateful for their support and legal expertise.",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuBwkX3hzR33nybFkYq2CFJjHNc9uuWRAXgBtkM1P0XYX1s8cLoSFoFrYx7eDv9XamL7T_gAPZPNvOYEZITQkYF9TBUZheWhM2AvOzt_W8Xuij_h36rqnoMCj01xob1GGkMxMV0SiukCMYbJ5pqpKRe8JiXpr_IZFWYhPC8nub8daapXQLzVRNVvoP-1sKH23ae9bH3QlT79-WVWFt0dGS7xaG22NvuKzFc663AR_y5wFiMOIUANnoiX_IeXoVFKjO06CfsX-Dm-4tV7",
    },
    {
      name: "Michael Brown",
      location: "New York, USA",
      text: "Their expertise in corporate law was exactly what my business needed. From contract negotiations to compliance advice, NexaLaw delivered exceptional results every step of the way with utmost precision.",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuASslemnkuvBX3jNSfKv4PiQyQ_b7cDqqpp1XMRlNx6kUJYvULyaRjfCzDuyZf65XqzGyj8qGIs4QD22w_krEZNuQzCO9uCVwGzuQXKkDKm-wkFucPDPqNfbneVaoHuJjsTX5CN_-rD0aUeLTEhTbitRSG2m91rHfR9ZIDC1nd368I4OToz0H_7LjP2s0xVvzrQZOM0BNJKQeWjpg59R9CQeqHo91Xci2euJnmuvnehy1yMDhCljUy4ZCF5-fmUlpxCar9lLhZA-xmI",
    },
  ];

  return (
    <div className="min-h-screen bg-[#F5F3EF] dark:bg-[#0A0A0A] text-gray-900 dark:text-gray-100 font-sans antialiased transition-colors duration-300">
      <Header />

      <section className="py-24 px-6 md:px-12 lg:px-20 relative overflow-hidden bg-[#F5F3EF] dark:bg-[#0A0A0A]">
        <div className="max-w-7xl mx-auto mb-16 flex flex-col md:flex-row justify-between items-end md:items-center gap-8">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display text-gray-900 dark:text-[#D4C5A9] leading-tight">
            What Our Clients Say
          </h2>
          <div className="flex items-center gap-4">
            <button
              aria-label="Previous testimonial"
              className="w-12 h-12 rounded-full border border-gray-400 dark:border-gray-600 flex items-center justify-center text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-white/10 transition-colors duration-300"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              aria-label="Next testimonial"
              className="w-12 h-12 rounded-full bg-[#D4C5A9] flex items-center justify-center text-[#0A0A0A] hover:opacity-90 transition-opacity duration-300"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative">
            <div className="absolute inset-y-0 left-1/3 w-px bg-gray-200 dark:bg-gray-800 hidden lg:block"></div>
            <div className="absolute inset-y-0 left-2/3 w-px bg-gray-200 dark:bg-gray-800 hidden lg:block"></div>
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.name}
                className={`flex flex-col justify-between h-full p-6 ${
                  index === 0
                    ? "lg:pr-10"
                    : index === 1
                    ? "lg:px-10"
                    : "lg:pl-10"
                } border-b lg:border-b-0 border-gray-200 dark:border-gray-800 lg:border-none pb-12 lg:pb-0`}
              >
                <div className="mb-8">
                  <p className="text-lg md:text-xl font-light leading-relaxed text-gray-600 dark:text-gray-400">
                    {testimonial.text}
                  </p>
                </div>
                <div className="flex items-center gap-4 mt-auto">
                  <div className="relative w-14 h-14 rounded-full overflow-hidden bg-gray-300 flex-shrink-0">
                    <Image
                      src={testimonial.image}
                      alt={`Portrait of ${testimonial.name}`}
                      fill
                      className="object-cover grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
                    />
                  </div>
                  <div>
                    <h4 className="text-xl font-display font-medium text-gray-900 dark:text-[#D4C5A9]">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-gray-500 dark:text-gray-500 uppercase tracking-wide">
                      {testimonial.location}
                    </p>
                  </div>
                </div>
              </div>
            ))}
            <div className="hidden lg:block absolute -right-64 top-0 w-64 h-full p-6 pl-10 opacity-30 pointer-events-none">
              <div className="mb-8">
                <p className="text-lg md:text-xl font-light leading-relaxed text-gray-600 dark:text-gray-400">
                  NexaLaw&apos;s divorce proceedings support was foundational.
                  They handled...
                </p>
              </div>
              <div className="flex items-center gap-4 mt-auto">
                <div className="relative w-14 h-14 rounded-full overflow-hidden bg-gray-300 flex-shrink-0">
                  <Image
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCiKjXeqAXrMxubK8D4W8gfKqhuE4OM5PoKnov3an57LiZgKAJQgiCLHHyaNmaWthpfw7pxB4hMs_x2FxNj1rR8b_WZ_q7paP9luXM1WvDqp1mKPU7hIQJbvN7GbRl_VKSGrq_fNdXqAElgFWfSAkhUfgO_Xx83IiCjsgxQVGfnYBsw0hPhwwTlnjsvPb70QIWf1e2t9D16461wwmuxQwfxdBckrDglbKGt_3u4lQak-7Cmfjp9kNg8qvaplBeECt5kTfseL10utjLu"
                    alt="Portrait"
                    fill
                    className="object-cover grayscale"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-px bg-gray-200 dark:bg-gray-800"></div>
      </section>

      <Footer />
    </div>
  );
}

