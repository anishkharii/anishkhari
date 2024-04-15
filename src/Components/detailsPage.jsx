import { useNavbar } from "../Contexts/navbarContext";
import ContactPage from "./contact";
import WorkPage from "./works";
const MainPage = ()=>{
    const {activeMenu} = useNavbar();
    return (
        <>
            <div className="main">
          {activeMenu === "about-me" && (
            <span>Hello, I&apos;m Anish.</span>
            )}
          {activeMenu === "skills" &&(
            <span>Skills Page</span>
            )}
          {activeMenu === "works" && (
            <WorkPage/>
            )}
          {activeMenu === "contact" && (
            <ContactPage/>
          )}
        </div>
        </>
    )
}

export default MainPage;