import { ViewBoardsIcon } from '@heroicons/react/solid';
import Link from 'next/link';
import { ReactNode } from 'react';
import { Container } from '../../components';

interface Props {
  children: ReactNode;
  title?: string;
  extra?: ReactNode;
}

const menus: Array<{ title: string; href: string; icon: ReactNode }> = [
  { title: 'Setting', href: '/admin/setting', icon: <ViewBoardsIcon /> },
  { title: 'Dự án', href: '/admin/projects', icon: <ViewBoardsIcon /> },
  { title: 'Kinh nghiệm', href: '/admin/experience', icon: <ViewBoardsIcon /> },
  { title: 'Thành tích', href: '/admin/recognition', icon: <ViewBoardsIcon /> },
];

const DashboardLayout = ({ children, title, extra }: Props) => {
  return (
    <div className="flex">
      <div className="w-64 min-h-screen bg-blue-900">
        <div className="p-4">Logo</div>
        <div>
          {menus.map((item) => (
            <Link key={item.href} href={item.href}>
              <a className="flex items-center text-white hover:bg-blue-800  px-4 py-2">
                <ViewBoardsIcon className="w-4 mr-2" />
                {item.title}
              </a>
            </Link>
          ))}
        </div>
      </div>

      <div className="flex-1 bg-gray-100">
        <div className="flex bg-white border-b justify-end py-4 px-6">
          <div className="">dasds</div>
        </div>

        <div className="pt-6">
          <Container>
            <div className="flex justify-between items-center mb-4">
              {title && <h3 className="text-2xl">{title}</h3>}
              {extra}
            </div>
            {children}
          </Container>
        </div>
      </div>
    </div>
  );
};

export { DashboardLayout };
