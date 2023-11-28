import useMediaQuery from "../../Hooks/UseMediaQuery";
import Header_web from "./Header_web";
import Header_mobile from "./Header_mobile";

function Header() {
  const isDesktop = useMediaQuery("(min-width: 960px)");
  const isTablet = useMediaQuery("(min-width: 600px)");
  //const isMobile = useMediaQuery("max-width: 600px");

  if (isDesktop || isTablet) {
    return <Header_web></Header_web>;
  } else {
    return <Header_mobile></Header_mobile>;
  }
}

export default Header;
