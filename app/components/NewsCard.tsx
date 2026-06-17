import Image from 'next/image';

interface Article {
  title: string;
  description: string;
  url: string;
  image: string;
  source: { name: string };
  publishedAt: string;
}

export default function NewsCard({ article }: { article: Article }) {
  // Format the date cleanly
  const date = new Date(article.publishedAt).toLocaleDateString('en-US', {
    month: 'short', day: 'numeric', year: 'numeric'
  });

  return (
    <article className="group flex flex-col bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-md transition-shadow duration-300">
      <div className="relative w-full h-48 bg-slate-200 overflow-hidden">
        {/* Using standard img for external URLs to avoid Next.js domain config hassles in mini-projects */}
        <img 
          src={article.image || 'https://via.placeholder.com/400x200?text=No+Image'} 
          alt={article.title} 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      <div className="p-5 flex flex-col flex-grow">
        <div className="flex justify-between items-center text-xs text-slate-500 mb-3 font-medium uppercase tracking-wider">
          <span>{article.source.name}</span>
          <time>{date}</time>
        </div>
        <h2 className="text-lg font-semibold text-slate-900 mb-2 line-clamp-2 leading-snug">
          {article.title}
        </h2>
        <p className="text-slate-600 text-sm mb-4 line-clamp-3 flex-grow">
          {article.description}
        </p>
        <a 
          href={article.url} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="inline-flex items-center text-sm font-semibold text-blue-600 hover:text-blue-800 transition-colors mt-auto"
        >
          Read Full Briefing
          <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
        </a>
      </div>
    </article>
  );
}