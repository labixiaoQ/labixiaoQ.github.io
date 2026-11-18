import { SiteNav } from "./site-nav";

export function SiteShell({ children }: { children: React.ReactNode }) {
  return (
    <>
      <a className="skip-link" href="#content">Skip to content</a>
      <header className="masthead"><div className="masthead__inner-wrap">
        <SiteNav />
      </div></header>
      <div id="main">
        <aside className="sidebar sticky" aria-label="Profile">
          <div itemScope itemType="https://schema.org/Person" className="profile_box">
            <div className="author__avatar"><img src="./renmin-cheng.png" alt="Portrait of Renmin Cheng" itemProp="image" width="180" height="180" /></div>
            <div className="author__content">
              <h2 className="author__name" itemProp="name">Renmin Cheng</h2>
              <p className="author__bio"><span lang="zh-CN">程人民</span><br />Ph.D. Student<br />Nanjing University</p>
            </div>
            <div className="author__urls-wrapper">
              <ul className="author__urls social-icons">
                <li><a href="https://www.lamda.nju.edu.cn/"><i className="fas fa-fw fa-university" aria-hidden="true" /> LAMDA Group</a></li>
                <li><a href="mailto:18729503350@163.com" itemProp="email"><i className="fas fa-fw fa-envelope" aria-hidden="true" /> Email</a></li>
                <li><a href="https://github.com/labixiaoQ" itemProp="sameAs"><i className="fab fa-fw fa-github" aria-hidden="true" /> GitHub</a></li>
              </ul>
            </div>
          </div>
        </aside>
        <main id="content" className="page" tabIndex={-1}>
          <div className="page__inner-wrap">
            <div className="page__content">{children}</div>
            <footer className="site-footer">
              <p>Renmin Cheng · LAMDA Group, Nanjing University</p>
              <p><a href="mailto:18729503350@163.com">18729503350@163.com</a><a href="#content">Back to top ↑</a></p>
            </footer>
          </div>
        </main>
      </div>
    </>
  );
}
