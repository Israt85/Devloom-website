import React from 'react';
import ProjectBanner from '../../Components/ProjectDetails/ProjectBanner';
import Section2 from '../../Components/ProjectDetails/Section2';
import Section3 from '../../Components/ProjectDetails/Section3';
import Section4 from '../../Components/ProjectDetails/Section4';

const ProjectDetails = () => {
    return (
        <div>
          <ProjectBanner></ProjectBanner> 
          <Section2></Section2>
          <Section3></Section3>
          <Section4></Section4>
        </div>
    );
};

export default ProjectDetails;