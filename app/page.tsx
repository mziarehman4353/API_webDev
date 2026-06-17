import NewsCard from '@/app/components/NewsCard';
import Link from 'next/link';

async function getNews(query: string) {
  const apiKey = process.env.GNEWS_API_KEY; 
  // Added error handling for missing API keys
  if (!apiKey) {
    console.warn("API Key is missing!");
    return [];
  }

  const url = `https://gnews.io/api/v4/search?q="${query}"&lang=en&max=9&sortby=publishedAt&apikey=${apiKey}`;

  // Next.js fetch with 30-minute caching to save API limits
  const res = await fetch(url, { next: { revalidate: 1800 } }); 
  
  if (!res.ok) {
    throw new Error(`Failed to fetch news: ${res.statusText}`);
  }

  const data = await res.json();
  return data.articles || [];
}

export default async function Dashboard({
  searchParams,
}: {
  searchParams: { topic?: string };
}) {
  const currentTopic = searchParams.topic || "Artificial Intelligence";
  const articles = await getNews(currentTopic);

  // Active state styling for buttons
  const baseBtn = "px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-200 border";
  const activeBtn = `${baseBtn} bg-slate-900 text-white border-slate-900 shadow-md`;
  const inactiveBtn = `${baseBtn} bg-white text-slate-600 border-slate-200 hover:border-slate-300 hover:bg-slate-50`;

  return (
    <div className="animate-in fade-in duration-500">
      
      {/* Page Header */}
      <div className="mb-10">
        <h1 className="text-3xl font-bold text-slate-900 mb-2">Live Intelligence Feed</h1>
        <p className="text-slate-500">Monitoring global developments in technology and policy.</p>
      </div>

      {/* Dynamic Topic Filters */}
      <div className="flex flex-wrap gap-3 mb-8">
        <Link 
          href="/?topic=Artificial Intelligence" 
          className={currentTopic === "Artificial Intelligence" ? activeBtn : inactiveBtn}
        >
          Artificial Intelligence
        </Link>
        <Link 
          href="/?topic=Fiscal Policy" 
          className={currentTopic === "Fiscal Policy" ? activeBtn : inactiveBtn}
        >
          Fiscal Policy
        </Link>
        <Link 
          href="/?topic=Cybersecurity" 
          className={currentTopic === "Cybersecurity" ? activeBtn : inactiveBtn}
        >
          Cybersecurity
        </Link>
      </div>

      {/* Error State / Empty State */}
      {articles.length === 0 && (
        <div className="text-center py-20 bg-white rounded-xl border border-slate-200">
          <p className="text-slate-500">No data available at the moment. Please check your API connection.</p>
        </div>
      )}

      {/* Responsive Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {articles.map((article: any, index: number) => (
          <NewsCard key={index} article={article} />
        ))}
      </div>
      
    </div>
  );
}