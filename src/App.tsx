import { 
  CheckSquare, Folder, FolderLock, Clock, Code2, GitMerge, LayoutDashboard, 
  Lock, Network, Zap, FolderOpen, Check, Search, Info, PlayCircle, Folders, 
  Calendar, Flag, MessageSquareMore, Lightbulb, ChevronsRight 
} from 'lucide-react';

function App() {
  return (
    <>
      <div className="top-layout-box">
        <div className="bg-pattern-boxed"></div>

        <header className="navbar">
          <div className="logo">
            <div className="logo-icon">
              <span></span><span></span><span></span><span className="blue-dot"></span>
            </div>
            <strong>MakaNote</strong>
          </div>
          <nav className="nav-links">
            <a href="#features">Features</a>
            <a href="#solutions">Solutions</a>
            <a href="#resources">Resources</a>
            <a href="#pricing">Pricing</a>
          </nav>
          <div className="nav-actions">
            <a href="#signin" className="nav-link-subtle">Sign in</a>
            <a href="#demo" className="btn btn-outline">Get demo</a>
          </div>
        </header>

        {/* Hero Section */}
        <section className="hero">
          <div className="hero-inner relative">
            <div className="hero-content">
              <div className="logo-large">
                <div className="logo-icon-large">
                  <span></span><span></span><span className="blue-dot"></span><span></span>
                </div>
              </div>
              <h1>Think, link, and grow<br /><span className="text-gray">in one place</span></h1>
              <p>Connect your thoughts, build your world. Efficiently manage your notes with a beautifully fast local-first experience.</p>
              <a href="#demo" className="btn btn-primary btn-large">Get free demo</a>
            </div>

            {/* Floating UI Elements */}
            <div className="hero-floating">
              <div className="floating-card sticky-note top-left tilt-left">
                <div className="pin"></div>
                <p>Take notes to keep track of crucial ideas, link them up, and build a second brain.</p>
              </div>
              
              <div className="floating-card icon-card top-left-inner float-slow">
                <CheckSquare className="text-blue" />
              </div>
              
              <div className="floating-card top-right float-med">
                <div className="card-header">
                  <strong>My Vaults</strong>
                </div>
                <div className="card-body vault-list">
                  <div className="vault-item">
                    <Folder /> Personal Notes
                  </div>
                  <div className="vault-item selected">
                    <FolderLock /> Work Projects
                  </div>
                  <div className="vault-item">
                    <Folder /> Creative Writing
                  </div>
                </div>
              </div>
              
              <div className="floating-card icon-card top-right-inner float-fast">
                <Clock />
              </div>

              <div className="floating-card bottom-left float-med">
                <div className="card-header">
                  <strong>Recent Links</strong>
                </div>
                <div className="card-body tasks-list">
                  <div className="task-item">
                    <span className="badge red">M</span> Marketing Ideas
                    <div className="progress"><div className="bar red" style={{ width: '60%' }}></div></div>
                  </div>
                  <div className="task-item mt-2">
                    <span className="badge green">P</span> Product Roadmap
                    <div className="progress"><div className="bar green" style={{ width: '100%' }}></div></div>
                  </div>
                </div>
              </div>

              <div className="floating-card bottom-right float-slow">
                <div className="card-header">
                  <strong>Graph Nodes</strong>
                </div>
                <div className="card-body app-icons">
                  <div className="app-icon shadow-sm"><Code2 className="text-blue" /></div>
                  <div className="app-icon shadow-sm"><GitMerge className="text-green" /></div>
                  <div className="app-icon shadow-sm"><LayoutDashboard className="text-red" /></div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <main>
        {/* Solution Section */}
        <section className="solutions section-pad" id="solutions">
          <span className="badge-rounded">Solutions</span>
          <h2>Solve your workflow's<br />biggest challenges</h2>
          
          <div className="solutions-grid">
            <div className="solution-item">
              <Lock className="icon-orange" />
              <p>Ensure your notes are securely stored offline locally, giving you total peace of mind.</p>
            </div>
            <div className="solution-item">
              <Network className="icon-orange" />
              <p>Prioritize your thoughts by visually mapping their connections through graph networks.</p>
            </div>
            <div className="solution-item">
              <Zap className="icon-orange" />
              <p>Navigate blazingly fast with command shortcuts and an intuitive address bar.</p>
            </div>
          </div>

          <div className="showcase-container main-app-ui relative">
            <img src="assets/app_ui.png" alt="Maka Desktop App Interface" className="app-mockup shadow-lg" />
            <div className="floating-card small-cube float-left">
              <FolderOpen />
            </div>
            <div className="floating-card small-cube float-right">
              <Check />
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="features section-pad bg-light" id="features">
          <span className="badge-rounded">Features</span>
          <h2>Keep everything in one place</h2>
          <p className="section-desc">Forget complex folders constraint. Welcome your second brain.</p>

          <div className="feature-bento-grid">
            <div className="bento-card col-span-2 shadow-sm">
              <div className="bento-content text-center">
                <div className="mockup-ui-mini">
                  <div className="address-bar-mock">
                    <Search />
                    <span>Find in [[Project Alpha]]</span>
                    <div className="cmd-k">⌘ L</div>
                  </div>
                  <div className="users-mock mt-4">
                    <div className="user-row">
                      <div className="avatar blue">J</div>
                      <span>Journal / Ideation</span>
                    </div>
                    <div className="user-row">
                      <div className="avatar pink">W</div>
                      <span>Work / Meeting Note</span>
                    </div>
                  </div>
                </div>
                <h3>Lightning Fast Search</h3>
                <p>Find your notes, headings, or tags in milliseconds right from the address bar.</p>
              </div>
            </div>

            <div className="bento-card col-span-2 shadow-sm">
              <div className="bento-content text-center">
                <div className="mockup-ui-mini">
                  <div className="graph-animation">
                    <span className="node n1"></span>
                    <span className="node n2"></span>
                    <span className="node n3"></span>
                    <span className="node n4"></span>
                    <svg className="edges"><line x1="20%" y1="20%" x2="50%" y2="50%" stroke="#e2e8f0" strokeWidth="2"/><line x1="80%" y1="30%" x2="50%" y2="50%" stroke="#e2e8f0" strokeWidth="2"/><line x1="30%" y1="80%" x2="50%" y2="50%" stroke="#e2e8f0" strokeWidth="2"/></svg>
                  </div>
                </div>
                <h3>Network Graph</h3>
                <p>Visualize how your ideas connect to each other. See the big picture and discover patterns.</p>
              </div>
            </div>

            <div className="bento-card col-span-2 shadow-sm">
              <div className="bento-content">
                <div className="mockup-ui-mini left-align">
                  <div className="code-editor-mock">
                    <div className="code-line"><span className="c-purple">const</span> sayHi = () =&gt; {'{'}</div>
                    <div className="code-line ind">console.log(<span className="c-green">"Hello Maka"</span>);</div>
                    <div className="code-line">{'}'}</div>
                  </div>
                  <div className="admonition-mock">
                    <Info />
                    <span>Note: Remember to run tests</span>
                  </div>
                </div>
                <h3>Powerful Rich Editor</h3>
                <p>Write with syntax highlighting, mermaid diagrams, and smart admonitions.</p>
              </div>
            </div>

            <div className="bento-card col-span-1 shadow-sm">
              <div className="bento-content text-center">
                <div className="mockup-ui-mini row-flex">
                  <div className="music-player">
                    <PlayCircle className="play-icon" />
                    <div className="bars"><i></i><i></i><i></i></div>
                  </div>
                </div>
                <h3>Built-in Focus</h3>
                <p>Integrated background music player to keep you in the zone.</p>
              </div>
            </div>
            
            <div className="bento-card col-span-1 shadow-sm">
              <div className="bento-content text-center">
                <div className="mockup-ui-mini row-flex">
                  <div className="custom-vault-icon">
                    <Folders className="text-blue" />
                  </div>
                </div>
                <h3>Local Independence</h3>
                <p>Your vaults live solely on your local device storage.</p>
              </div>
            </div>
          </div>
          
          <p className="text-center mt-4">and a lot more features...</p>
        </section>

        {/* Pricing Section */}
        <section className="pricing section-pad" id="pricing">
          <span className="badge-rounded">Pricing</span>
          <h2>Simple pricing plans</h2>
          
          <div className="pricing-grid">
            <div className="pricing-card shadow-sm">
              <h3>Basic plan</h3>
              <p className="subtitle">Perfect for individuals.</p>
              <div className="price"><strong>$0</strong><span>/mo</span></div>
              <a href="#" className="btn btn-primary w-100">Get started</a>
              <ul className="features-list">
                <li><Check /> All core features</li>
                <li><Check /> Unlimited local vaults</li>
                <li><Check /> Network graph</li>
                <li><Check /> Unlimited offline storage</li>
              </ul>
              <a href="#" className="learn-more">Learn more</a>
            </div>

            <div className="pricing-card pro shadow-lg relative">
              <div className="highlight-badge"><Zap /></div>
              <h3>Pro plan</h3>
              <p className="subtitle text-light">Ideal for sync & backup.</p>
              <div className="price text-white"><strong>$9</strong><span className="text-light">/mo</span></div>
              <span className="best-choice">Best choice</span>
              <a href="#" className="btn btn-white w-100 mt-2">Get started</a>
              <ul className="features-list text-white">
                <li><Check /> All basic features</li>
                <li><Check /> Cloud sync across devices</li>
                <li><Check /> Priority support</li>
                <li><Check /> Publish notes online</li>
              </ul>
              <a href="#" className="learn-more text-light">Learn more</a>
            </div>

            <div className="pricing-card shadow-sm">
              <h3>Lifetime</h3>
              <p className="subtitle">Best for early adopters.</p>
              <div className="price"><strong>$49</strong><span>/once</span></div>
              <a href="#" className="btn btn-primary w-100">Get started</a>
              <ul className="features-list">
                <li><Check /> All pro features included</li>
                <li><Check /> Lifetime updates</li>
                <li><Check /> VIP support</li>
                <li><Check /> Support the dev</li>
              </ul>
              <a href="#" className="learn-more">Learn more</a>
            </div>
          </div>
        </section>
        
        <section className="bottom-cta section-pad">
          <div className="cta-inner flex-between align-center">
            <div className="cta-text">
              <div className="logo-inline">
                <div className="logo-icon small">
                  <span></span><span></span><span></span><span className="blue-dot"></span>
                </div>
                <strong>MakaNote</strong>
              </div>
              <h2>Stay organized and<br />boost your productivity</h2>
            </div>
            <div className="cta-links duo-grid">
              <ul>
                <li><a href="#">About Us</a></li>
                <li><a href="#">Contact</a></li>
                <li><a href="#">What's New</a></li>
                <li><a href="#">Careers</a></li>
              </ul>
              <ul>
                <li><a href="#">Product</a></li>
                <li><a href="#">Solutions</a></li>
                <li><a href="#">Integrations</a></li>
                <li><a href="#">Price</a></li>
              </ul>
            </div>
          </div>
          
          <div className="floating-icons-abstract">
            <div className="f-icon f1 shadow-sm"><Calendar /></div>
            <div className="f-icon f2 shadow-sm"><Clock /></div>
            <div className="f-icon f3 shadow-sm"><Flag /></div>
            <div className="f-icon f4 shadow-sm"><MessageSquareMore /></div>
            <div className="f-icon f5 shadow-sm"><CheckSquare /></div>
            <div className="f-icon f6 shadow-sm"><FolderOpen /></div>
            <div className="f-icon f7 shadow-sm"><Lightbulb className="text-orange" /></div>
            <div className="f-icon f8 shadow-sm"><ChevronsRight className="text-blue" /></div>
          </div>
        </section>

      </main>

      <footer className="footer">
        <div className="footer-bottom flex-between">
          <p>&copy; 2026 MakaNote. All rights reserved.</p>
          <div className="footer-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;
