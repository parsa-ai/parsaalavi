import React from 'react';
import { ArrowRight } from 'lucide-react';

const Blog = () => {
  const posts = [
    {
      title: 'Getting Started with Next.js',
      excerpt: 'A comprehensive guide to building modern web applications with Next.js',
      date: 'March 15, 2024',
      image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=800'
    },
    {
      title: 'Advanced Angular Techniques',
      excerpt: 'Deep dive into advanced Angular concepts and best practices',
      date: 'March 10, 2024',
      image: 'https://images.unsplash.com/photo-1516116216624-53e697fedbea?auto=format&fit=crop&q=80&w=800'
    },
    {
      title: 'WordPress Development Tips',
      excerpt: 'Essential tips and tricks for WordPress theme development',
      date: 'March 5, 2024',
      image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&q=80&w=800'
    }
  ];

  return (
    <section id="blog" className="py-20">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-8">Blog</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post, index) => (
            <article
              key={index}
              className="group bg-slate-800/50 backdrop-blur-xs rounded-xl overflow-hidden hover:bg-slate-700/50 transition-colors"
            >
              <div className="relative aspect-video">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <span className="text-sm text-slate-400">{post.date}</span>
                <h3 className="text-xl font-semibold mt-2 mb-3">{post.title}</h3>
                <p className="text-slate-400 text-sm mb-4">{post.excerpt}</p>
                <a
                  href="#"
                  className="inline-flex items-center gap-2 text-sm font-medium hover:text-slate-300 transition-colors"
                >
                  Read More
                  <ArrowRight size={16} />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;