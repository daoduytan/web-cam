import { IProject } from '../../collection';
import { ProjectItem } from '../project-item';

interface Props {
  projects: IProject[];
}

function ProjectList({ projects }: Props) {
  return (
    <div className="grid lg:grid-cols-3 gap-10">
      {projects.map((item, index) => {
        return <ProjectItem numberKey={index} key={item._id} project={item} />;
      })}
    </div>
  );
}

export { ProjectList };
