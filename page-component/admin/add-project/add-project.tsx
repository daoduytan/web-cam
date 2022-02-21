import { get } from 'lodash';
import { Card } from '../card';
import { AddContent } from './add-content';
import { InputValue } from './input-value';
import { ProjectSubmitBtn } from './project-submit-btn';
import { ProviderFormProject, useFormProject } from './state';
import { UpdateThumbnail } from './update-thumbnail';

function FormAddProject() {
  const { project } = useFormProject();

  return (
    <div className="grid grid-cols-12 gap-8 pb-10">
      <div className=" col-span-8">
        <div className="grid gap-4">
          <Card title="Project name">
            <InputValue>
              <input
                name="title"
                className="w-full border rounded p-2 block text-sm"
                placeholder="Tên dự án"
                value={get(project, 'title')}
              />
            </InputValue>
          </Card>

          <Card title="Description">
            <InputValue>
              <textarea
                rows={4}
                name="description"
                placeholder="Mô tả"
                className="w-full border rounded p-2 block full-width text-sm"
                value={get(project, 'description')}
              ></textarea>
            </InputValue>
          </Card>

          <Card title="Content">
            <AddContent />
          </Card>
        </div>
      </div>

      <div className="col-span-4">
        <div
          className='grid gap-4'
        >
          <Card title="Thumbnail">
            <UpdateThumbnail />
          </Card>


          <Card title="Agency">
            <InputValue>
              <input
                name="agency"
                placeholder="Agency"
                className="w-full border rounded p-2 block full-width text-sm"
                value={get(project, 'agency')}
              />
            </InputValue>
          </Card>

          <Card title="Service">
            <InputValue>
              <textarea
                name="service"
                placeholder="Service"
                className="w-full border rounded p-2 block full-width text-sm"
                value={get(project, 'service')}
              ></textarea>
            </InputValue>
          </Card>

          <Card title="Service">
            <InputValue>
              <textarea
                name="credits"
                placeholder="Credits"
                className="w-full border rounded p-2 block full-width text-sm"
                value={get(project, 'credits')}
              ></textarea>
            </InputValue>
          </Card>

        </div>

      </div>

      <div className="text-right">
        <ProjectSubmitBtn />
      </div>
    </div>
  );
}

const AddProject = ({ projectId }: { projectId?: string }) => {
  return (
    <ProviderFormProject projectId={projectId}>
      <FormAddProject />
    </ProviderFormProject>
  );
};

export { AddProject };
