import Link from 'next/link';
import React, { useEffect, useState } from 'react';

interface Props {
  columns: any[];
  data: any[];
}

const tdClass = `bg-white text-left p-4 border-r`;

const columns = ['STT', 'Ảnh', 'Tên', 'Cập nhật'];

const ProjectList = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [projects, setProject] = useState<any[]>([]);
  const [page, setPage] = useState<number>(1);

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        const response = await fetch('/api/project/', {
          method: 'GET',
        });

        const data = await response.json();

        console.log('das', data);
        setProject(data.data);
      } catch (error) {
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading</div>;
  }

  return (
    <div>
      <table className="table-auto w-full border-collapse border">
        <thead>
          <tr>
            {columns.map((item) => (
              <th key={tdClass} className={tdClass}>
                {item}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {projects.map((project, index) => (
            <tr key={project._id}>
              <td className={`${tdClass} border-t w-1 text-center font-bold`}>
                {index + 1}
              </td>
              <td className={`${tdClass} border-t w-24`}>
                <div className="w-20 h-20 bg-pink-100"></div>
              </td>
              <td className={`${tdClass} border-t`}>{project.title}</td>
              <td className={`${tdClass} border-t`}>
                <Link href={`/admin/projects/${project._id}`}>
                  <a>Edit</a>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export { ProjectList };
