import { heroInfo } from "./data";

const Soc1als = () => {
  const socialLinks = heroInfo.find((info) => "soc1als" in info)?.soc1als || [];
  return (
    <div className="hero__soc1als soc1als">
      {socialLinks.map((social, index) => (
        <a
          key={index}
          href={social.to}
          aria-label={social.ariaLabel}
          target="_blank"
          className="soc1al-link"
        >
          <social.icon strokeWidth={1} color="white" />
        </a>
      ))}
    </div>
  );
};

export default Soc1als;
