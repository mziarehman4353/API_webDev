import './globals.css';
import Link from 'next/link';

export const metadata = {
  title: 'Intelligence Dashboard | Tech & Policy',
  description: 'Real-time aggregation of AI and Fiscal Policy news.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen bg-slate-50 text-slate-900 font-sans">
        
        {/* Professional Header */}
        <header className="sticky top-0 z-50 bg-white border-b border-slate-200 shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <div className="flex-shrink-0 flex items-center">
                <Link href="/" className="text-2xl font-bold tracking-tight text-slate-900">
                  Nexus<span className="text-blue-600">Intelligence</span>
                </Link>
              </div>
              <nav className="hidden md:flex space-x-8">
                <Link href="/?topic=Artificial Intelligence" className="text-slate-600 hover:text-blue-600 font-medium transition-colors">AI & Models</Link>
                <Link href="/?topic=Fiscal Policy" className="text-slate-600 hover:text-blue-600 font-medium transition-colors">Economic Policy</Link>
                <Link href="/?topic=Cybersecurity" className="text-slate-600 hover:text-blue-600 font-medium transition-colors">Security</Link>
              </nav>
            </div>
          </div>
        </header>

        {/* Main Content Area */}
        <main className="flex-grow w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {children}
        </main>

        {/* Professional Footer */}
        <footer className="bg-slate-900 text-slate-300 py-8 mt-auto">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <span className="text-lg font-bold text-white">Nexus Intelligence Framework</span>
              <p className="text-sm mt-1 text-slate-400">Aggregating global discourse.</p>
            </div>
            <div className="text-sm text-slate-400">
              
              &copy; {new Date().getFullYear()} All rights reserved,{" "}
              <a 
                href="https://codewithzia.vercel.app" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-blue-500 transition"
              >
                CodewithZia
              </a>{" "}
              2026. 
            </div>
          </div>
        </footer>

      </body>
    </html>
  );
}