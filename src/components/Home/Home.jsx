import { Link } from "react-router-dom";
import PublicLayout from "../Layout/PublicLayout";

function Home(props) {
  return (
    <PublicLayout fluid={true}>
      <div className="flex flex-col text-white w-full">

        {/* --- Hero Section --- */}
        <section className="flex flex-col items-center justify-center min-h-[85vh] text-center px-4 w-full">
          <h1 className="mb-6 py-3 text-4xl md:text-5xl lg:text-7xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600 drop-shadow-lg">
            PowerByte
          </h1>
          <p className="mb-10 text-lg md:text-2xl lg:text-3xl font-light text-gray-100 max-w-3xl mx-auto leading-relaxed drop-shadow-md">
            The AI-powered ecosystem for smart energy management. <br className="hidden md:block" />
            <span className="font-semibold text-blue-200">Efficiency</span>, <span className="font-semibold text-purple-200">Analytics</span>, and <span className="font-semibold text-green-200">Control</span> in one platform.
          </p>
          <div className="flex flex-col justify-center gap-5 sm:flex-row">
            <Link
              to="/login"
              className="px-10 py-4 text-lg font-bold text-gray-900 transition-all bg-white rounded-full shadow-xl hover:bg-gray-100 hover:scale-105 hover:shadow-2xl focus:outline-none focus:ring-4 focus:ring-blue-500/50"
            >
              Get Started
            </Link>
            <Link
              to="/signup"
              className="px-10 py-4 text-lg font-bold text-white transition-all bg-white/10 backdrop-blur-md border border-white/30 rounded-full shadow-xl hover:bg-white/20 hover:scale-105 hover:shadow-2xl focus:outline-none focus:ring-4 focus:ring-white/50"
            >
              Create Account
            </Link>
          </div>
        </section>

        {/* --- Overview Section --- */}
        <section className="py-12 md:py-20 px-4 md:px-12 lg:px-24 bg-gray-900/90 backdrop-blur-md border-t border-gray-800">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="mb-8 text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-300">Overview</h2>
            <p className="text-xl text-gray-300 leading-relaxed font-light">
              <span className="font-semibold text-white">PowerByte</span> is an industrial-grade energy solution designed to revolutionize how you monitor and control power.
              We combine real‑time IoT sensors with predictive LSTM models to deliver actionable insights that cut operational costs and reduce environmental impact.
            </p>
            <p className="mt-8 text-sm text-gray-500 uppercase tracking-widest">
              Award Winning Project • SIH 2023 • Team Bright Sparks
            </p>
          </div>
        </section>

        {/* --- Problem & Solution --- */}
        <section className="py-16 md:py-24 px-4 md:px-12 lg:px-24 bg-black/40">
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 md:gap-16 items-center">
            <div className="space-y-6">
              <div className="inline-block p-3 rounded-2xl bg-red-500/10 mb-2">
                <span className="text-3xl">⚠️</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white">The Energy Crisis</h2>
              <p className="text-gray-400 text-lg leading-relaxed">
                Traditional energy management is reactive, manual, and inefficient. Facilities waste millions annually due to lack of visibility and outdated control systems.
              </p>
              <ul className="space-y-4 text-gray-300">
                <li className="flex items-start"><span className="mr-3 text-red-500">✕</span> Unpredictable operational costs</li>
                <li className="flex items-start"><span className="mr-3 text-red-500">✕</span> Manual tracking errors</li>
                <li className="flex items-start"><span className="mr-3 text-red-500">✕</span> No real-time consumption data</li>
              </ul>
            </div>
            <div className="space-y-6">
              <div className="inline-block p-3 rounded-2xl bg-green-500/10 mb-2">
                <span className="text-3xl">💡</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white">The PowerByte Way</h2>
              <p className="text-gray-400 text-lg leading-relaxed">
                We automate the entire lifecycle of energy management. From the sensor node to the cloud dashboard, PowerByte provides end-to-end visibility and AI-driven control.
              </p>
              <ul className="space-y-4 text-gray-300">
                <li className="flex items-start"><span className="mr-3 text-green-500">✓</span> 98% Accurate AI Predictions</li>
                <li className="flex items-start"><span className="mr-3 text-green-500">✓</span> Automated Load Balancing</li>
                <li className="flex items-start"><span className="mr-3 text-green-500">✓</span> IoT-driven Real-time Alerts</li>
              </ul>
            </div>
          </div>
        </section>

        {/* --- Hardware & Features --- */}
        <section className="py-16 md:py-24 px-4 md:px-12 lg:px-24 bg-gradient-to-b from-gray-900 to-gray-800 border-y border-gray-700">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Powerful Hardware. Intelligent Software.</h2>
              <p className="text-gray-400 text-lg">A seamless integration of physical nodes and digital intelligence.</p>
            </div>

            <div className="grid lg:grid-cols-2 gap-10 md:gap-16 items-center">

              {/* Hardware Image */}
              <div className="relative group overflow-hidden rounded-3xl shadow-2xl border border-gray-700 bg-black">
                <div className="aspect-[4/3] w-full relative">
                  <img
                    src="/hardware/hw-demo-1.jpeg"
                    alt="PowerByte Hardware Prototype"
                    className="absolute inset-0 w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
                  />
                  {/* Very light gradient just for text contrast */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                </div>

                {/* Small Badge instead of full-width box */}
                <div className="absolute bottom-4 left-4">
                  <div className="bg-black/60 backdrop-blur-md px-4 py-3 rounded-xl border border-white/10">
                    <p className="font-bold text-base md:text-xl text-white leading-none">IoT Node Gen-1</p>
                    <p className="block text-[10px] md:text-sm text-gray-300 mt-1 uppercase tracking-wider">Mesh (NRF + WiFi)</p>
                  </div>
                </div>
              </div>

              <div className="grid gap-8">
                <div className="p-6 rounded-2xl bg-gray-800/50 hover:bg-gray-700/50 transition-colors border border-gray-700 hover:border-blue-500/50 group">
                  <div className="w-12 h-12 rounded-lg bg-blue-500/20 flex items-center justify-center mb-4 group-hover:bg-blue-500/30 transition-colors">
                    <span data-feather="activity" className="text-blue-400">📊</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">Real‑Time Monitoring</h3>
                  <p className="text-gray-400">Millisecond-latency data streaming for Voltage, Current, and Power Factor analysis.</p>
                </div>

                <div className="p-6 rounded-2xl bg-gray-800/50 hover:bg-gray-700/50 transition-colors border border-gray-700 hover:border-purple-500/50 group">
                  <div className="w-12 h-12 rounded-lg bg-purple-500/20 flex items-center justify-center mb-4 group-hover:bg-purple-500/30 transition-colors">
                    <span className="text-purple-400">🤖</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">LSTM Predictive AI</h3>
                  <p className="text-gray-400">Neural networks trained on 250k+ datapoints to forecast future consumption trends.</p>
                </div>

                <div className="p-6 rounded-2xl bg-gray-800/50 hover:bg-gray-700/50 transition-colors border border-gray-700 hover:border-green-500/50 group">
                  <div className="w-12 h-12 rounded-lg bg-green-500/20 flex items-center justify-center mb-4 group-hover:bg-green-500/30 transition-colors">
                    <span className="text-green-400">⚡</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">Smart Automation</h3>
                  <p className="text-gray-400">Automatic load shedding and appliance control based on user-defined carbon goals.</p>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* --- Tech Stack --- */}
        <section className="py-12 md:py-20 px-4 bg-black/60">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-xl md:text-2xl font-bold text-gray-400 mb-8 md:mb-12 uppercase tracking-widest">Powered By Modern Tech</h2>
            <div className="flex flex-wrap justify-center gap-6 md:gap-16 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">

              {/* React */}
              <div className="text-center hover:scale-110 transition-transform cursor-default group">
                <div className="w-16 h-16 mx-auto mb-3 flex items-center justify-center bg-gray-800 rounded-full group-hover:bg-[#61DAFB]/20 transition-colors">
                  <svg className="w-10 h-10 text-[#61DAFB]" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 21.36c-1.39 0-2.68-.42-3.8-1.14.33-.27.68-.53 1.05-.75A11.02 11.02 0 0012 20.14c1.07 0 2.08-.23 3.01-.65.2.14.4.29.59.45-1.12.92-2.51 1.42-3.6 1.42zM4.77 16.73c-1.04-1.29-1.57-2.85-1.57-4.47 0-1.03.22-2.02.62-2.92.35.41.73.81 1.13 1.18a11.1 11.1 0 00-.73 2.53c.12.59.3 1.15.55 1.68zM12 2.64c1.39 0 2.68.42 3.8 1.14-.33.27-.68.53-1.05.75-.93-.42-1.94-.65-3.01-.65-1.07 0-2.08.23-3.01.65-.2-.14-.4-.29-.59-.45 1.12-.92 2.51-1.42 3.6-1.42zm7.23 7.27c1.04 1.29 1.57 2.85 1.57 4.47 0 1.03-.22 2.02-.62 2.92-.35-.41-.73-.81-1.13-1.18.29-.81.54-1.66.73-2.53-.12-.59-.3-1.15-.55-1.68zM12 0C5.37 0 0 5.37 0 12s5.37 12 12 12 12-5.37 12-12S18.63 0 12 0zm0 10.91c.6 0 1.09.49 1.09 1.09 0 .6-.49 1.09-1.09 1.09-.6 0-1.09-.49-1.09-1.09 0-.6.49-1.09 1.09-1.09z" opacity="0.4" />
                    <ellipse cx="12" cy="12" rx="3" ry="8" transform="rotate(60 12 12)" stroke="currentColor" strokeWidth="1.5" fill="none" />
                    <ellipse cx="12" cy="12" rx="3" ry="8" transform="rotate(120 12 12)" stroke="currentColor" strokeWidth="1.5" fill="none" />
                    <ellipse cx="12" cy="12" rx="3" ry="8" stroke="currentColor" strokeWidth="1.5" fill="none" />
                    <circle cx="12" cy="12" r="1.5" fill="currentColor" />
                  </svg>
                </div>
                <span className="font-semibold text-gray-300 group-hover:text-[#61DAFB] transition-colors">React</span>
              </div>

              {/* Firebase */}
              <div className="text-center hover:scale-110 transition-transform cursor-default group">
                <div className="w-16 h-16 mx-auto mb-3 flex items-center justify-center bg-gray-800 rounded-full group-hover:bg-[#FFCA28]/20 transition-colors">
                  <svg
                    className="w-10 h-10"
                    viewBox="0 0 32 32"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M5.8,24.6l.17-.237L13.99,9.149l.017-.161L10.472,2.348a.656.656,0,0,0-1.227.207Z" fill="#ffc24a" />
                    <path d="M5.9,24.42l.128-.25L13.965,9.114,10.439,2.448a.6.6,0,0,0-1.133.206Z" fill="#ffa712" />
                    <path d="M16.584,14.01l2.632-2.7L16.583,6.289a.678.678,0,0,0-1.195,0L13.981,8.971V9.2Z" fill="#f4bd62" />
                    <path d="M16.537,13.9l2.559-2.62L16.537,6.4a.589.589,0,0,0-1.074-.047L14.049,9.082l-.042.139Z" fill="#ffa50e" />
                    <polygon points="5.802 24.601 5.879 24.523 6.158 24.41 16.418 14.188 16.548 13.834 13.989 8.956 5.802 24.601" fill="#f6820c" />
                    <path d="M16.912,29.756,26.2,24.577,23.546,8.246A.635.635,0,0,0,22.471,7.9L5.8,24.6l9.233,5.155a1.927,1.927,0,0,0,1.878,0" fill="#fde068" />
                    <path d="M26.115,24.534,23.483,8.326a.557.557,0,0,0-.967-.353L5.9,24.569l9.131,5.1a1.912,1.912,0,0,0,1.863,0Z" fill="#fcca3f" />
                    <path d="M16.912,29.6a1.927,1.927,0,0,1-1.878,0L5.876,24.522,5.8,24.6l9.233,5.155a1.927,1.927,0,0,0,1.878,0L26.2,24.577l-.023-.14Z" fill="#eeab37" />
                  </svg>
                </div>
                <span className="font-semibold text-gray-300 group-hover:text-[#FFCA28] transition-colors">Firebase</span>
              </div>

              {/* Node.js */}
              <div className="text-center hover:scale-110 transition-transform cursor-default group">
                <div className="w-16 h-16 mx-auto mb-3 flex items-center justify-center bg-gray-800 rounded-full group-hover:bg-[#83cd29]/20 transition-colors">
                  <svg
                    className="w-10 h-10"
                    viewBox="0 0 32 32"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M16,30a2.151,2.151,0,0,1-1.076-.288L11.5,27.685c-.511-.286-.262-.387-.093-.446a6.828,6.828,0,0,0,1.549-.7.263.263,0,0,1,.255.019l2.631,1.563a.34.34,0,0,0,.318,0l10.26-5.922a.323.323,0,0,0,.157-.278V10.075a.331.331,0,0,0-.159-.283L16.158,3.875a.323.323,0,0,0-.317,0L5.587,9.794a.33.33,0,0,0-.162.281V21.916a.315.315,0,0,0,.161.274L8.4,23.814c1.525.762,2.459-.136,2.459-1.038V11.085a.3.3,0,0,1,.3-.3h1.3a.3.3,0,0,1,.3.3V22.777c0,2.035-1.108,3.2-3.038,3.2a4.389,4.389,0,0,1-2.363-.642L4.661,23.788a2.166,2.166,0,0,1-1.076-1.872V10.075A2.162,2.162,0,0,1,4.661,8.2L14.922,2.276a2.246,2.246,0,0,1,2.156,0L27.338,8.2a2.165,2.165,0,0,1,1.077,1.87V21.916a2.171,2.171,0,0,1-1.077,1.872l-10.26,5.924A2.152,2.152,0,0,1,16,30Z"
                      fill="#83cd29"
                    />
                    <path
                      d="M14.054,17.953a.3.3,0,0,1,.3-.3h1.327a.3.3,0,0,1,.295.251c.2,1.351.8,2.032,3.513,2.032,2.161,0,3.082-.489,3.082-1.636,0-.661-.261-1.152-3.62-1.481-2.808-.278-4.544-.9-4.544-3.144,0-2.07,1.745-3.305,4.67-3.305,3.287,0,4.914,1.141,5.12,3.589a.3.3,0,0,1-.295.323H22.566a.3.3,0,0,1-.288-.232c-.319-1.421-1.1-1.875-3.2-1.875-2.36,0-2.634.822-2.634,1.438,0,.746.324.964,3.51,1.385,3.153.417,4.651,1.007,4.651,3.223,0,2.236-1.864,3.516-5.115,3.516C14.995,21.743,14.054,19.682,14.054,17.953Z"
                      fill="#83cd29"
                    />
                  </svg>
                </div>
                <span className="font-semibold text-gray-300 group-hover:text-[#83cd29] transition-colors">Node.js</span>
              </div>

              {/* Python */}
              <div className="text-center hover:scale-110 transition-transform cursor-default group">
                <div className="w-16 h-16 mx-auto mb-3 flex items-center justify-center bg-gray-800 rounded-full group-hover:bg-[#36cfbf]/20 transition-colors">
                  <svg
                    className="w-10 h-10"
                    viewBox="0 0 32 32"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M13.0164 2C10.8193 2 9.03825 3.72453 9.03825 5.85185V8.51852H15.9235V9.25926H5.97814C3.78107 9.25926 2 10.9838 2 13.1111L2 18.8889C2 21.0162 3.78107 22.7407 5.97814 22.7407H8.27322V19.4815C8.27322 17.3542 10.0543 15.6296 12.2514 15.6296H19.5956C21.4547 15.6296 22.9617 14.1704 22.9617 12.3704V5.85185C22.9617 3.72453 21.1807 2 18.9836 2H13.0164ZM12.0984 6.74074C12.8589 6.74074 13.4754 6.14378 13.4754 5.40741C13.4754 4.67103 12.8589 4.07407 12.0984 4.07407C11.3378 4.07407 10.7213 4.67103 10.7213 5.40741C10.7213 6.14378 11.3378 6.74074 12.0984 6.74074Z"
                      fill="url(#python_blue)"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M18.9834 30C21.1805 30 22.9616 28.2755 22.9616 26.1482V23.4815L16.0763 23.4815L16.0763 22.7408L26.0217 22.7408C28.2188 22.7408 29.9998 21.0162 29.9998 18.8889V13.1111C29.9998 10.9838 28.2188 9.25928 26.0217 9.25928L23.7266 9.25928V12.5185C23.7266 14.6459 21.9455 16.3704 19.7485 16.3704L12.4042 16.3704C10.5451 16.3704 9.03809 17.8296 9.03809 19.6296L9.03809 26.1482C9.03809 28.2755 10.8192 30 13.0162 30H18.9834ZM19.9015 25.2593C19.1409 25.2593 18.5244 25.8562 18.5244 26.5926C18.5244 27.329 19.1409 27.9259 19.9015 27.9259C20.662 27.9259 21.2785 27.329 21.2785 26.5926C21.2785 25.8562 20.662 25.2593 19.9015 25.2593Z"
                      fill="url(#python_yellow)"
                    />
                    <defs>
                      <linearGradient id="python_blue" x1="12.4809" y1="2" x2="12.4809" y2="22.7407" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#327EBD" />
                        <stop offset="1" stopColor="#1565A7" />
                      </linearGradient>
                      <linearGradient id="python_yellow" x1="19.519" y1="9.25928" x2="19.519" y2="30" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#FFDA4B" />
                        <stop offset="1" stopColor="#F9C600" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
                <span className="font-semibold text-gray-300 group-hover:text-[#32bdaf] transition-colors">Python</span>
              </div>

              {/* IOT */}
              <div className="text-center hover:scale-110 transition-transform cursor-default group">
                <div className="w-16 h-16 mx-auto mb-3 flex items-center justify-center bg-gray-800 rounded-full group-hover:bg-purple-500/20 transition-colors">
                  <svg
                    className="w-10 h-10 text-purple-400"
                    viewBox="0 0 32 32"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M30,19H26V15H24v9H8V8l9-.0009V6H13V2H11V6H8A2.002,2.002,0,0,0,6,8v3H2v2H6v6H2v2H6v3a2.0023,2.0023,0,0,0,2,2h3v4h2V26h6v4h2V26h3a2.0027,2.0027,0,0,0,2-2V21h4Z" />

                    <path d="M21,21H11V11H21Zm-8-2h6V13H13Z" />

                    <path d="M31,13H29A10.0117,10.0117,0,0,0,19,3V1A12.0131,12.0131,0,0,1,31,13Z" />
                    <path d="M26,13H24a5.0059,5.0059,0,0,0-5-5V6A7.0085,7.0085,0,0,1,26,13Z" />

                    <rect width="32" height="32" fill="none" />
                  </svg>
                </div>
                <span className="font-semibold text-gray-300 group-hover:text-purple-500 transition-colors">IoT</span>
              </div>
            </div>
          </div>
        </section>

        {/* --- PPT Placeholder --- */}
        <section className="py-16 md:py-24 px-4 md:px-12 lg:px-24 bg-gray-900 border-t border-gray-800">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="mb-4 text-3xl font-bold text-white">Deep Dive Presentation</h2>
            <p className="text-gray-400 mb-10">Explore the technical details and implementation strategies.</p>

            <div className="aspect-video w-full bg-black rounded-2xl border border-gray-700 shadow-2xl flex flex-col items-center justify-center relative overflow-hidden group hover:border-blue-500/50 transition-colors cursor-pointer">
              <div className="absolute inset-0 bg-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="text-7xl mb-6 opacity-30 group-hover:opacity-100 transition-all transform group-hover:scale-110 duration-300">📑</div>
              <h3 className="text-2xl font-bold text-gray-500 group-hover:text-white transition-colors">View Project Slides</h3>
              <button className="mt-6 px-6 py-2 bg-gray-800 hover:bg-gray-700 text-white rounded-lg text-sm font-medium transition-colors border border-gray-600 relative z-10"
                onClick={() => alert("Document will be available soon")}
              >
                Click to Open
              </button>
            </div>
          </div>
        </section>


        <footer className="w-full bg-black border-t border-gray-800 pt-10 md:pt-20 pb-8 md:pb-10 px-4 md:px-12 lg:px-24">
          <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-8 md:gap-12 mb-10 md:mb-16">
            <div className="col-span-1 md:col-span-2 space-y-6">
              <Link to="/" className="text-3xl font-extrabold tracking-tight text-white flex items-center gap-2">
                <span className="text-blue-500">
                  <img
                    className="w-8 h-8"
                    src="/logo192.png"
                    alt=""
                  />
                </span> PowerByte
              </Link>
              <p className="text-gray-400 leading-relaxed max-w-sm text-lg">
                Empowering a sustainable future through AI-driven energy management. Join us in reducing carbon footprints and optimizing efficiency for tomorrow.
              </p>
              <div className="flex gap-4 pt-4">

                <div className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-blue-600 hover:text-white transition-colors cursor-pointer">𝕏</div>
                <div className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-blue-800 hover:text-white transition-colors cursor-pointer">in</div>
                <div className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-gray-100 hover:text-black transition-colors cursor-pointer">✉️</div>
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-sm font-bold text-gray-500 uppercase tracking-widest">Platform</h3>
              <ul className="space-y-4 text-gray-300">
                <li><Link to="/" className="hover:text-blue-400 transition-colors flex items-center gap-2"><span className="opacity-0 hover:opacity-100 transition-opacity"></span> Home</Link></li>
                <li><Link to="/login" className="hover:text-blue-400 transition-colors flex items-center gap-2"><span className="opacity-0 hover:opacity-100 transition-opacity"></span> Dashboard Login</Link></li>
                <li><Link to="/signup" className="hover:text-blue-400 transition-colors flex items-center gap-2"><span className="opacity-0 hover:opacity-100 transition-opacity"></span> Create Account</Link></li>
                {/* <li><a href="#" className="hover:text-blue-400 transition-colors flex items-center gap-2"><span className="opacity-0 hover:opacity-100 transition-opacity">›</span> Documentation</a></li> */}
              </ul>
            </div>

            {/* <div className="space-y-6">
              <h3 className="text-sm font-bold text-gray-500 uppercase tracking-widest">Company</h3>
              <ul className="space-y-4 text-gray-300">
                <li><a href="#" className="hover:text-blue-400 transition-colors">About Team</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">SIH 2023 Journey</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">Contact Support</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">Privacy Policy</a></li>
              </ul>
            </div> */}
          </div>

          <div className="max-w-7xl mx-auto pt-8 border-t border-gray-900 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-600 text-sm">
              © {new Date().getFullYear()} PowerByte Inc. All rights reserved.
            </p>
            <div className="flex flex-col md:flex-row items-center gap-2 text-sm text-gray-500">
              <span>Designed & Developed by</span>
              <span className="text-gray-300 font-semibold">Team Bright Sparks 🚀</span>
            </div>
          </div>
        </footer>

      </div>
    </PublicLayout>
  );
}

export default Home;
