import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Your 2026 Life Reading: Upload Your 2025, Reveal Your Future | GodGPT',
  description: 'Turn your 2025 wrap into your 2026 roadmap. Get personalized monthly themes, insights, and step-by-step guidance to achieve your goals. Free preview reading available.',
};

export default function GodGPTInfoPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0a0a0a] via-[#1a0a2e] to-[#0a0a0a]">
      {/* Hero Section */}
      <section className="relative px-5 pt-16 pb-20 md:px-8 md:pt-24 md:pb-32">
        <div className="max-w-6xl mx-auto">
          {/* Mystical glow effect */}
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 bg-purple-500/20 rounded-full blur-[120px] pointer-events-none" />
          
          <div className="relative z-10 text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-purple-500/10 border border-purple-500/30">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500"></span>
              </span>
              <span className="text-sm font-medium text-purple-300">🔮 Limited: Free 2026 Preview Readings</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              <span className="text-white">Your 2025 </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400">
                Wrapped
              </span>
              <br />
              <span className="text-white">Your 2026 </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-400 to-pink-400">
                Revealed
              </span>
            </h1>

            {/* Subheadline */}
            <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Upload your 2025 reflections and 2026 goals. Get a personalized AI reading with 
              <span className="text-purple-300 font-semibold"> monthly themes, hidden patterns, and actionable steps</span> to make this your best year yet.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <a
                href="https://godgpt.fun/en"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 h-[52px] flex items-center justify-center rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold text-lg transition-all duration-200 active:opacity-80 active:scale-[0.98] hover:shadow-[0_0_30px_rgba(168,85,247,0.4)] shadow-[0_4px_20px_rgba(168,85,247,0.3)]"
              >
                Get My Free 2026 Preview →
              </a>
              <a
                href="https://godgpt.fun/en"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 h-[52px] flex items-center justify-center rounded-xl border-2 border-purple-500/50 text-purple-300 font-semibold text-lg transition-all duration-200 active:opacity-80 bg-purple-500/10 hover:bg-purple-500/20"
              >
                See Example Reading
              </a>
            </div>
            
            {/* Social Proof Line */}
            <p className="text-sm text-gray-400 mb-12">
              <span className="text-purple-400 font-semibold">12,847 readings</span> generated this week • <span className="text-green-400">4.9/5</span> average rating
            </p>

            {/* Trust Indicators */}
            <div className="flex flex-wrap gap-6 justify-center items-center text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>No Credit Card Required</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Instant Access</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Private & Secure</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="px-5 py-16 md:px-8 md:py-24 bg-black/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              How Your 2026 Reading Works
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              3 simple steps to turn your past into your roadmap
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Step 1 */}
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">1</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Share Your 2025 Story</h3>
              <p className="text-gray-300 leading-relaxed">
                Upload your reflections: wins, challenges, lessons learned. Your 2025 wrap becomes the foundation for AI analysis.
              </p>
            </div>

            {/* Step 2 */}
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">2</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">AI Analyzes Your Patterns</h3>
              <p className="text-gray-300 leading-relaxed">
                GodGPT identifies hidden themes, growth areas, and opportunities based on your unique journey and stated goals for 2026.
              </p>
            </div>

            {/* Step 3 */}
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">3</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Receive Your 2026 Roadmap</h3>
              <p className="text-gray-300 leading-relaxed">
                Get personalized monthly themes, actionable steps, and guidance tailored to help you achieve your goals this year.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Monthly Themes Preview Section */}
      <section className="px-5 py-16 md:px-8 md:py-24">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Sneak Peek: Your 2026 Monthly Themes
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Each month reveals a unique focus based on your personal journey
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {/* January */}
            <div className="p-4 rounded-xl bg-gradient-to-br from-blue-900/30 to-blue-800/20 border border-blue-500/30 hover:border-blue-400/50 transition-all duration-300">
              <div className="text-blue-400 text-sm font-semibold mb-1">January</div>
              <div className="text-white font-bold">New Beginnings</div>
            </div>

            {/* February */}
            <div className="p-4 rounded-xl bg-gradient-to-br from-pink-900/30 to-pink-800/20 border border-pink-500/30 hover:border-pink-400/50 transition-all duration-300">
              <div className="text-pink-400 text-sm font-semibold mb-1">February</div>
              <div className="text-white font-bold">Love & Connection</div>
            </div>

            {/* March */}
            <div className="p-4 rounded-xl bg-gradient-to-br from-green-900/30 to-green-800/20 border border-green-500/30 hover:border-green-400/50 transition-all duration-300">
              <div className="text-green-400 text-sm font-semibold mb-1">March</div>
              <div className="text-white font-bold">Growth & Action</div>
            </div>

            {/* April */}
            <div className="p-4 rounded-xl bg-gradient-to-br from-yellow-900/30 to-yellow-800/20 border border-yellow-500/30 hover:border-yellow-400/50 transition-all duration-300">
              <div className="text-yellow-400 text-sm font-semibold mb-1">April</div>
              <div className="text-white font-bold">Clarity & Focus</div>
            </div>

            {/* May */}
            <div className="p-4 rounded-xl bg-gradient-to-br from-purple-900/30 to-purple-800/20 border border-purple-500/30 hover:border-purple-400/50 transition-all duration-300">
              <div className="text-purple-400 text-sm font-semibold mb-1">May</div>
              <div className="text-white font-bold">Abundance Flow</div>
            </div>

            {/* June */}
            <div className="p-4 rounded-xl bg-gradient-to-br from-cyan-900/30 to-cyan-800/20 border border-cyan-500/30 hover:border-cyan-400/50 transition-all duration-300">
              <div className="text-cyan-400 text-sm font-semibold mb-1">June</div>
              <div className="text-white font-bold">Balance & Harmony</div>
            </div>

            {/* July */}
            <div className="p-4 rounded-xl bg-gradient-to-br from-orange-900/30 to-orange-800/20 border border-orange-500/30 hover:border-orange-400/50 transition-all duration-300">
              <div className="text-orange-400 text-sm font-semibold mb-1">July</div>
              <div className="text-white font-bold">Inner Power</div>
            </div>

            {/* August */}
            <div className="p-4 rounded-xl bg-gradient-to-br from-red-900/30 to-red-800/20 border border-red-500/30 hover:border-red-400/50 transition-all duration-300">
              <div className="text-red-400 text-sm font-semibold mb-1">August</div>
              <div className="text-white font-bold">Transformation</div>
            </div>
          </div>

          <div className="text-center">
            <p className="text-gray-400 mb-6">
              <span className="text-purple-300 font-semibold">✨ Your themes will be personalized</span> based on your 2025 reflections and 2026 goals
            </p>
            <a
              href="https://godgpt.fun/en"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-purple-500/20 border border-purple-500/50 text-purple-300 font-semibold hover:bg-purple-500/30 transition-all duration-200"
            >
              <span>Unlock Your Full Year Roadmap</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="px-5 py-16 md:px-8 md:py-24 bg-black/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why GodGPT For Your 2026 Reading?
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Not just another AI chatbot—your personalized spiritual growth companion
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* ChatGPT Column */}
            <div className="p-8 rounded-2xl bg-gray-900/50 border border-gray-700">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-gray-700 flex items-center justify-center">
                  <svg className="w-6 h-6 text-gray-300" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white">ChatGPT</h3>
              </div>
              <ul className="space-y-4">
                <li className="flex items-start gap-3 text-gray-400">
                  <span className="text-gray-600 mt-1">•</span>
                  <span>General-purpose information assistant</span>
                </li>
                <li className="flex items-start gap-3 text-gray-400">
                  <span className="text-gray-600 mt-1">•</span>
                  <span>Generic responses based on training data</span>
                </li>
                <li className="flex items-start gap-3 text-gray-400">
                  <span className="text-gray-600 mt-1">•</span>
                  <span>Task-focused: writing, coding, research</span>
                </li>
                <li className="flex items-start gap-3 text-gray-400">
                  <span className="text-gray-600 mt-1">•</span>
                  <span>No spiritual or personal growth focus</span>
                </li>
                <li className="flex items-start gap-3 text-gray-400">
                  <span className="text-gray-600 mt-1">•</span>
                  <span>Transactional interactions</span>
                </li>
              </ul>
            </div>

            {/* GodGPT Column */}
            <div className="p-8 rounded-2xl bg-gradient-to-br from-purple-900/40 to-pink-900/40 border-2 border-purple-500/50 relative overflow-hidden">
              <div className="absolute top-0 right-0 px-3 py-1 bg-gradient-to-r from-purple-600 to-pink-600 text-white text-xs font-bold rounded-bl-lg">
                SPIRITUAL FOCUS
              </div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white">GodGPT</h3>
              </div>
              <ul className="space-y-4">
                <li className="flex items-start gap-3 text-white">
                  <span className="text-purple-400 mt-1">✓</span>
                  <span><strong>Your spiritual guide</strong> for self-discovery</span>
                </li>
                <li className="flex items-start gap-3 text-white">
                  <span className="text-purple-400 mt-1">✓</span>
                  <span><strong>Personalized insights</strong> aligned with your journey</span>
                </li>
                <li className="flex items-start gap-3 text-white">
                  <span className="text-purple-400 mt-1">✓</span>
                  <span><strong>Deep reflection</strong> and pattern recognition</span>
                </li>
                <li className="flex items-start gap-3 text-white">
                  <span className="text-purple-400 mt-1">✓</span>
                  <span><strong>Practical spiritual growth</strong> strategies</span>
                </li>
                <li className="flex items-start gap-3 text-white">
                  <span className="text-purple-400 mt-1">✓</span>
                  <span><strong>Transformational conversations</strong> that evolve with you</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-12 p-6 rounded-2xl bg-purple-900/20 border border-purple-500/30">
            <p className="text-center text-lg text-gray-300">
              <span className="text-purple-400 font-semibold">The Bottom Line:</span> ChatGPT helps you get things done. 
              GodGPT helps you understand <span className="text-white font-semibold">who you are</span> and 
              <span className="text-white font-semibold"> who you're becoming</span>.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonial/Social Proof Section */}
      <section className="px-5 py-16 md:px-8 md:py-24">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              What People Say About Their 2026 Readings
            </h2>
            <p className="text-gray-400 text-lg">
              Real insights from real users who started their year with clarity
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Testimonial 1 */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-purple-900/20 to-transparent border border-purple-500/20">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-300 mb-4 leading-relaxed">
                "I uploaded my 2025 reflections and was shocked at how accurate the monthly themes were for my goals. 
                February's 'Love & Connection' theme lined up perfectly with my relationship work."
              </p>
              <p className="text-purple-400 font-semibold">— Sarah M., Entrepreneur</p>
            </div>

            {/* Testimonial 2 */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-purple-900/20 to-transparent border border-purple-500/20">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-300 mb-4 leading-relaxed">
                "The step-by-step guidance for each month is exactly what I needed. It's not vague predictions—it's 
                actionable insights based on MY patterns and MY goals."
              </p>
              <p className="text-purple-400 font-semibold">— Marcus T., Creative Director</p>
            </div>

            {/* Testimonial 3 */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-purple-900/20 to-transparent border border-purple-500/20">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-300 mb-4 leading-relaxed">
                "Finally, a tool that actually learns from my 2025 journey. The AI connected dots I didn't even see. 
                This isn't generic—it's eerily personalized."
              </p>
              <p className="text-purple-400 font-semibold">— Aisha K., Wellness Coach</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="px-5 py-20 md:px-8 md:py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/20 to-transparent" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Ready to Make 2026 <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Your Best Year Yet</span>?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Start with a free preview reading. See your January theme, get a taste of what's possible. 
            No credit card. No pressure. Just clarity.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <a
              href="https://godgpt.fun/en"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-10 h-[56px] rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold text-xl transition-all duration-200 active:opacity-80 active:scale-[0.98] hover:shadow-[0_0_40px_rgba(168,85,247,0.5)] shadow-[0_8px_30px_rgba(168,85,247,0.4)]"
            >
              <span>Get Free Preview Reading</span>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
          </div>

          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-purple-900/20 border border-purple-500/30 mb-6">
            <svg className="w-5 h-5 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
            <span className="text-sm text-gray-300">
              Love your preview? Unlock the full year roadmap with personalized monthly guidance
            </span>
          </div>

          <p className="text-sm text-gray-500">
            12,000+ readings created this week • 4.9/5 rating • Available on iOS & Web
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-5 py-8 md:px-8 border-t border-gray-800">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-gray-500 text-sm">
              © 2026 GodGPT. All rights reserved.
            </div>
            <div className="flex gap-6 text-sm text-gray-500">
              <a href="https://godgpt.fun/en" className="hover:text-purple-400 transition-colors">Privacy</a>
              <a href="https://godgpt.fun/en" className="hover:text-purple-400 transition-colors">Terms</a>
              <a href="https://godgpt.fun/en" className="hover:text-purple-400 transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
