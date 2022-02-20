import { get } from 'lodash';
import Image from 'next/image';
import Link from 'next/link';
import { Text, Title } from '..';
import { IProject } from '../../collection';
import { useDevice } from '../../helps';

interface Props {
  numberKey: number;
  project: IProject;
}

function ProjectItem({ numberKey, project }: Props) {
  const device = useDevice();

  if (device === 'mobile' || device === 'table') {
    return (
      <div>
        <div className='md:w-2/3 mx-auto bg-pink-300'>
          <Link href={`/projects/view/${project.slug}`}>
            <a
              className="block"
            >
              <Image
                src={get(project, 'thumbnail.url')}
                alt={project.title}
                width="100%"
                height="100%"
                layout='responsive'
                className="object-cover"
              />
            </a>
          </Link>

          <Title level='3' className="border-b my-3 pb-2 text-base uppercase">
            <Link href={`/projects/view/${project.slug}`}>
              <a>{project.title}</a>
            </Link>
          </Title>

          <Text className="text-3">{project.service}</Text>
        </div>
      </div>

    )
  }

  if (numberKey % 10 === 0) {
    return (
      <div className="col-start-1 col-end-4">
        <div className="grid grid-cols-3 gap-10">
          <Link href={`/projects/view/${project.slug}`}>
            <a
              style={{ paddingBottom: '70%' }}
              className="block relative col-start-2 col-span-2 text-dark dark:text-white h-60 bg-pink-500"
            >
              <Image
                src={get(project, 'thumbnail.url')}
                layout="fill"
                alt={project.title}
                className="object-cover"
              />
            </a>
          </Link>
          <div className="col-start-1 row-start-1 ">
            <div className="grid content-end h-full">
              <Title level='3' className="border-b mb-3 pb-3 text-4xl uppercase">
                <Link href={`/projects/view/${project.slug}`}>
                  <a>{project.title}</a>
                </Link>
              </Title>

              <Text className="text-2xl">{project.service}</Text>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (numberKey % 10 === 1) {
    return (
      <div className="col-start-2">
        <Link href={`/projects/view/${project.slug}`}>
          <a
            className="bg-pink-500 relative block"
            style={{ paddingBottom: '100%' }}
          >
            <Image
              src={get(project, 'thumbnail.url')}
              layout="fill"
              alt={project.title}
              className="object-cover"
            />
          </a>
        </Link>
        <div className="text-white mt-8">
          <h3 className="border-b mb-3 pb-3">
            <Link href={`/projects/view/${project.slug}`}>
              <a>{project.title}</a>
            </Link>
          </h3>
          <span>{project.service}</span>
        </div>
      </div>
    );
  }

  if (numberKey % 10 === 2) {
    return (
      <div>
        <Link href={`/projects/view/${project.slug}`}>

          <a
            className="bg-pink-500 relative block"
            style={{ paddingBottom: '100%' }}
          >
            <Image
              src={get(project, 'thumbnail.url')}
              layout="fill"
              alt={project.title}
              className="object-cover"
            />
          </a>
        </Link>
        <div className="text-white mt-8">
          <h3 className="border-b mb-3 pb-3">
            <Link href={`/projects/view/${project.slug}`}>
              <a>{project.title}</a>
            </Link>
          </h3>
          <span>{project.service}</span>
        </div>
      </div>
    );
  }

  if (numberKey % 10 === 3) {
    return (
      <div>
        <Link href={`/projects/view/${project.slug}`}>
          <a className="h-52 bg-pink-500 relative block">
            <Image
              src={get(project, 'thumbnail.url')}
              layout="fill"
              alt={project.title}
              className="object-cover"
            />
          </a>
        </Link>
        <div className="text-white mt-8">
          <h3 className="border-b mb-3 pb-3">
            <Link href={`/projects/view/${project.slug}`}>
              <a>{project.title}</a>
            </Link>
          </h3>
          <span>{project.service}</span>
        </div>
      </div>
    );
  }

  if (numberKey % 10 === 4) {
    return (
      <div>
        <Link href={`/projects/view/${project.slug}`}>
          <a className="h-48 bg-pink-500 relative">
            <Image
              src={get(project, 'thumbnail.url')}
              layout="fill"
              alt={project.title}
              className="object-cover"
            />
          </a>
        </Link>
        <div className="text-white mt-8">
          <h3 className="border-b mb-3 pb-3">
            <Link href={`/projects/view/${project.slug}`}>
              <a>{project.title}</a>
            </Link>
          </h3>
          <span>{project.service}</span>
        </div>
      </div>
    );
  }

  if (numberKey % 10 === 5) {
    return (
      <div className="col-start-1 col-end-4">
        <div className="grid grid-cols-3 gap-10">
          <Link href={`/projects/view/${project.slug}`}>
            <a
              style={{ paddingBottom: '70%' }}
              className="relative col-start-1 col-span-2 text-dark dark:text-white h-60 block bg-pink-500"
            >
              <Image
                src={get(project, 'thumbnail.url')}
                layout="fill"
                alt={project.title}
                className="object-cover"
              />
            </a>
          </Link>
          <div className=" dark dark:text-white">
            <div className="grid content-end h-full">
              <h3 className="border-b mb-3 pb-3">
                <Link href={`/projects/view/${project.slug}`}>
                  <a>{project.title}</a>
                </Link>
              </h3>
              <span>{project.service}</span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (numberKey % 10 === 6) {
    return (
      <div>
        <Link href={`/projects/view/${project.slug}`}>
          <a className="h-52 bg-pink-500 relative block">
            <Image
              src={get(project, 'thumbnail.url')}
              layout="fill"
              alt={project.title}
              className="object-cover"
            />
          </a>
        </Link>
        <div className="text-white mt-8">
          <h3 className="border-b mb-3 pb-3 uppercase">
            <Link href={`/projects/view/${project.slug}`}>
              <a>{project.title}</a>
            </Link>
          </h3>
          <span>{project.service}</span>
        </div>
      </div>
    );
  }

  if (10 * (numberKey - 7) + 8 === numberKey + 1) {
    return (
      <div>
        <Link href={`/projects/view/${project.slug}`}>
          <a className="h-48 bg-pink-500 relative block">
            <Image
              src={get(project, 'thumbnail.url')}
              layout="fill"
              alt={project.title}
              className="object-cover"
            />
          </a>
        </Link>
        <div className="text-white mt-8">
          <h3 className="border-b mb-3 pb-3">
            <Link href={`/projects/view/${project.slug}`}>
              <a>{project.title}</a>
            </Link>
          </h3>
          <span>{project.service}</span>
        </div>
      </div>
    );
  }

  if (10 * (numberKey - 8) + 9 === numberKey + 1) {
    return (
      <div className="col-start-2">
        <Link href={`/projects/view/${project.slug}`}>
          <a className="h-52 bg-pink-500 relative block">
            <Image
              src={get(project, 'thumbnail.url')}
              layout="fill"
              alt={project.title}
              className="object-cover"
            />
          </a>
        </Link>
        <div className="text-white mt-8">
          <h3 className="border-b mb-3 pb-3">
            <Link href={`/projects/view/${project.slug}`}>
              <a>{project.title}</a>
            </Link>
          </h3>
          <span>{project.service}</span>
        </div>
      </div>
    );
  }

  if (10 * (numberKey - 9) + 10 === numberKey + 1) {
    return (
      <div>
        <Link href={`/projects/view/${project.slug}`}>
          <a className="h-48 bg-pink-500 relative block">
            <Image
              src={get(project, 'thumbnail.url')}
              layout="fill"
              alt={project.title}
              className="object-cover"
            />
          </a>
        </Link>
        <div className="text-white mt-8">
          <h3 className="border-b mb-3 pb-3">
            <Link href={`/projects/view/${project.slug}`}>
              <a>{project.title}</a>
            </Link>
          </h3>
          <span>{project.service}</span>
        </div>
      </div>
    );
  }

  return (
    <div>
      <Link href={`/projects/view/${project.slug}`}>
        <a className="h-48 bg-pink-500 relative block">
          <Image
            src={get(project, 'thumbnail.url')}
            layout="fill"
            alt={project.title}
            className="object-cover"
          />
        </a>
      </Link>
      <div className="text-white mt-8">
        <h3 className="border-b mb-3 pb-3">
          <Link href={`/projects/view/${project.slug}`}>
            <a>{project.title}</a>
          </Link>
        </h3>
        <span>{project.service}</span>
      </div>
    </div>
  );
}

export { ProjectItem };
