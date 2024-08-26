import React from 'react';

const NavbarDesign1 = ({
  FullName,
  Thubmnail,
  experienceTitle,
  educationTitle,
  skillsTitle,
  interestsTitle,
  awardsTitle,
  projectsTitle,
  isExperienceEnabled,
  isEducationEnabled,
  isSkillEnabled,
  isInterestEnabled,
  isAwardsEnabled,
  isProjectEnabled,
}) => {
  return (
    <div className='fixed top-0 left-0 z-20 w-full rounded-full flex justify-center font-Manrope' >
      <div className='w-full md:w-2/3 flex justify-around items-center mt-4 mx-4 md:mx-8 font-normal rounded-full p-2 md:p-3 text-sm md:text-lg text-white' style={{"backgroundColor":"rgba(29, 29, 29, 1)"}}> 

        <a href="#about"  className='mx-2 md:mx-4  '> 
          <li className='inline-block  hover:text-blue-400 text-center hover:scale-[1.03]'>About</li>
        </a>
        {isExperienceEnabled && (<a href="#experience" className='mx-2 md:mx-4'>   
            <li className='inline-block hover:text-blue-400 text-center hover:scale-[1.03]'>Experience</li>
        </a>)}
        {isEducationEnabled && (<a href="#education" className='hidden md:block mx-2 md:mx-4'>  
            <li className='inline-block hover:text-blue-400  text-center hover:scale-[1.03]'>Education</li>
        </a>)}
        {isSkillEnabled && (<a href="#skills" className='hidden md:block hover:text-blue-500 mx-1 md:mx-4'>  
            <li className='inline-block hover:text-blue-400  text-center hover:scale-[1.03]'>Skills</li>
        </a>)}
        {isInterestEnabled && (<a href="#interests" className='hidden md:block mx-2 md:mx-4'>  
            <li className='inline-block hover:text-blue-400  text-center hover:scale-[1.03]'>Interests</li>
        </a>)}
        {isAwardsEnabled && (<a href="#awards" className='hidden md:block mx-2 md:mx-4'>  
            <li className='inline-block hover:text-blue-400  text-center hover:scale-[1.03]'>Awards</li>
        </a>)}
        {isProjectEnabled && (<a href="#projects" className='rounded-2xl mx-2 md:mx-4'>  
            <li className='inline-block hover:text-blue-400  text-center hover:scale-[1.03]'>Projects</li>
        </a>)}
        <a href="#touch" className='rounded-2xl mx-2 md:mx-4 hover:text-blue-400'>  
            <li className='inline-block text-center hover:scale-[1.03] border border-white rounded-md p-1'>Get In Touch</li>
        </a>
        

      </div>
    </div>
  );
};

export default NavbarDesign1;
