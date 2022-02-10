import { ProjectItem } from '../project-item';

interface Props {
  projects: any[];
}

function ProjectList({ projects }: Props) {
  return (
    <div className="grid grid-cols-3 gap-10">
      {projects.map((item) => {
        return <ProjectItem numberKey={item} />;
      })}
    </div>
  );
}

export { ProjectList };
