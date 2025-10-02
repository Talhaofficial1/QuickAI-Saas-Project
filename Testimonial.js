import React from "react";

const Testimonial = () => {
  const dummyTestimonialData = [
    {
      image:
        "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=200",
      name: "John Doe",
      title: "Marketing Director, TechCorp",
      content:
        "ContentAI has revolutionized our content workflow. The quality of the articles is outstanding, and it saves us hours of work every week.",
      rating: 4,
    },
    {
      image:
        "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200",
      name: "Jane Smith",
      title: "Content Creator, TechCorp",
      content:
        "ContentAI has made our content creation process effortless. The AI tools have helped us produce high-quality content faster than ever before.",
      rating: 5,
    },
    {
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&h=200&auto=format&fit=crop",
      name: "David Lee",
      title: "Content Writer, TechCorp",
      content:
        "ContentAI has transformed our content creation process. The AI tools have helped us produce high-quality content faster than ever before.",
      rating: 4,
    },
  ];

  return (
    <div className="px-4 sm:px-20 xl:px-32 py-24">
      <div className="text-center">
        <h2 className="text-slate-700 text-[42px] font-semibold">
          Loved by Creators
        </h2>
        <p className="text-gray-500 max-w-lg mx-auto">
          Don't just take our word for it. Here's what our users are saying.
        </p>
      </div>

   <div className='grid grid-cols-3 gap-6 mt-10'>
  {dummyTestimonialData.map((testimonial, index) => (
    <div 
      key={index} 
      className='bg-white p-6 rounded-xl shadow-lg border border-gray-200 flex flex-col justify-between'
    >
      
      <div className="flex items-center text-primary mb-3 text-lg">
        {"★".repeat(testimonial.rating) + "☆".repeat(5 - testimonial.rating)}
      </div>

      
      <p className='text-gray-600 text-sm leading-relaxed mb-4 line-clamp-4'>
        "{testimonial.content}"
      </p>

      
      <div className='flex items-center gap-3 mt-auto pt-3 border-t border-gray-200'>
        <img 
          src={testimonial.image} 
          className='w-12 h-12 object-cover rounded-full' 
          alt={testimonial.name} 
        />
        <div className='text-sm'>
          <h3 className='font-semibold text-gray-800'>{testimonial.name}</h3>
          <p className='text-xs text-gray-500'>{testimonial.title}</p>
        </div>
      </div>
    </div>
  ))}
</div>




    </div>
  );
};

export default Testimonial;
