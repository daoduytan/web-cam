import Image from 'next/image';
import Link from 'next/link';
import React, { useCallback, useEffect, useState } from 'react';
import { Button } from '..';
import { PickToHome } from './pick-to-home';
import { RemoveProjectBtn } from './remove-project-btn';

interface Props {
  columns: any[];
  data: any[];
}

const tdClass = `bg-white text-left p-4 border-r`;

const columns = ['STT', 'Ảnh', 'Tên', 'Hiện ở trang chủ', 'Cập nhật'];

const ProjectList = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [projects, setProject] = useState<any[]>([]);
  const [page, setPage] = useState<number>(1);

  const fetchData = useCallback(async () => {
    try {
      setLoading(true);
      const response = await fetch('/api/project/', {
        method: 'GET',
      });

      const data = await response.json();

      setProject(data.data);
    } catch (error) {
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

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
                <div className="w-20 h-20 bg-pink-100">
                  {
                    project?.thumbnail?.url && <Image
                      src={project.thumbnail.url}
                      height={100}
                      width={100}
                      alt=""
                    />
                  }

                </div>
              </td>
              <td className={`${tdClass} border-t`}>{project.title}</td>
              <td className={`${tdClass} border-t`}>
                <PickToHome project={project} callback={fetchData} />
              </td>
              <td className={`${tdClass} border-t`}>
                <span className='flex gap-2'>
                  <Link href={`/admin/projects/${project._id}`}>
                    <a>
                      <Button>
                        Edit
                      </Button>
                    </a>
                  </Link>
                  <RemoveProjectBtn
                    projectId={project._id}
                    callback={fetchData}
                  />

                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export { ProjectList };
