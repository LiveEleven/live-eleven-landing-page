import Image from "next/image";

const Footer = () => {
  const icons = [
    {
      icon: "icon-facebook",
      link: "https://www.facebook.com/profile.php?id=61560118615609",
    },
    { icon: "icon-line", link: "https://line.me/en/" },
    { icon: "icon-youtube", link: "https://www.youtube.com/@LiveEleven" },
    { icon: "icon-instagram", link: "https://www.instagram.com/" },
  ];
  return (
    <div className="bg-primary-color py-4 lg:py-6">
      <div className="flex justify-center items-center flex-col gap-2">
        <div className="flex item-center justify-center gap-2 lg:gap-4">
          {icons.map((icon) => (
            <div
              className="relative w-4 h-4 lg:w-7 lg:h-7 cursor-pointer"
              key={icon.icon}
            >
              <a href={icon.link} target="_blank" rel="noopener noreferrer">
                <Image
                  src={`/${icon.icon}.png`}
                  key={icon.icon}
                  alt={icon.icon}
                  fill
                  sizes="(max-width: 1024px) 16px, 28px"
                />
              </a>
            </div>
          ))}
        </div>
        <p>Copyright © 2024 ELEVEN MEDIA LIVE</p>
      </div>
    </div>
  );
};

export default Footer;
