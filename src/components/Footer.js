const Footer = () => {
  return (
    <div className="footer">
      <div className="footerleft">
        <div className="div1">
          <img
            alt="img"
            className="footerimg"
            src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
          ></img>
          <h3>© 2022 GitHub, Inc.</h3>
        </div>

        <div className="div2">
          <p>
            ProTip! The feed shows you events from people you follow and
            repositories you watch or star.
          </p>
        </div>
      </div>
      <div className="footerright">
        <div className="div3">
          <a href="https://github.blog/">
            <p>Blog</p>
          </a>
          <a href="https://github.com/about">
            <p>About</p>
          </a>
          <a href="https://thegithubshop.com/">
            <p>Shop </p>
          </a>
          <a href="https://support.github.com/?tags=dotcom-footer">
            <p>Contact</p>
            <p>Github</p>
          </a>
          <a href="https://github.com/pricing">
            <p>Pricing</p>
          </a>
        </div>
        <div className="div4">
          <a href="https://docs.github.com/en">
            <p>API</p>
          </a>
          <a href="https://github.com/services/">
            <p>Traning</p>
          </a>
          <a href="https://www.githubstatus.com/">
            <p>Status </p>
          </a>
          <a href="https://github.com/security">
            <p>Security</p>
          </a>
        </div>
        <div className="div5">
          <a href="https://docs.github.com/en/site-policy/github-terms/github-terms-of-service">
            <p>Terms</p>
          </a>
          <a href="https://docs.github.com/en/site-policy/privacy-policies/github-privacy-statement">
            <p>Policy</p>
          </a>
          <a href="https://docs.github.com/en">
            <p>Docs </p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
