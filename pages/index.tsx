import Contact from '../app/components/contact';
import Education from '../app/components/education';
import Experience from '../app/components/experience';
import Header from '../app/components/header';
import Languages from '../app/components/languages';
import Navbar from '../app/components/navbar';
import Profile from '../app/components/profile';
import Skills from '../app/components/skills';

export default function Index() {
  return (
    <div className="relative w-full ">
      <div className="absolute h-fit mt-12">
        <div className="left  bg-orange-200 grid grid-cols-2 w-screen">
          <div></div>
          <div className="p-16">
            <p className="text-2xl font-bold">Prosper</p>
            <p className="text-xl font-bold">Farai</p>
            <p className="text-sm font-bold italic">Student</p>
          </div>
        </div>
        <div className="grid grid-cols-2">
          <div className=""></div>
          <div className="text-lg w-full  px-16 mb-12">
            <p className="relative">
              <Education />
              <Languages />
              <Skills />
              <Experience />
            </p>
          </div>
        </div>
      </div>
      <div className="relative flex flex-col w-1/4 bg-green-400 mx-96 h-screen drop-shadow-2xl">
        <Header />
        <Profile />
        <Contact />
      </div>
    </div>
  );
}
