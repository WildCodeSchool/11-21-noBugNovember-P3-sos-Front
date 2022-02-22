import CardsProjects from './CardsProjects';
import { useState, useEffect } from 'react';

const CardProjectsList = () => {
  const [project, setProject] = useState([]);
  // const [lessProject, setLessProject] = useState(6);

  useEffect(() => {
    console.log('poulet');
    fetch('https://wild-games.herokuapp.com/api/v1')
      .then((res) => res.json())
      .then((res) => setProject(res) || console.log(project));
  }, []);

  // let seeLessProject = () => setLessProject(lessProject - 6);
  // useEffect(() => {
  //   seeLessProject();
  // }, [project.poScroll]);

  return (
    <div>
      {project.map((project) => (
        <CardsProjects
          id={project.id}
          named={project.name}
          released={project.released}
          rating={project.rating}
          satured_color={project.satured_color}
          dominant_color={project.dominant_color}
        />
      ))}
    </div>
  );
};
export default CardProjectsList;
