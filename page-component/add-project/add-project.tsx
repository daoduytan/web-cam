import { get } from 'lodash';
import { AddContent } from './add-content';
import { InputValue } from './input-value';
import { ProjectSubmitBtn } from './project-submit-btn';
import { ProviderFormProject, useFormProject } from './state';
import { UpdateThumbnail } from './update-thumbnail';

function FormAddProject() {
  const { project } = useFormProject();

  return (
    <div className="grid grid-cols-12 gap-8">
      <div className=" col-span-8">
        <div className="grid gap-4">
          <InputValue>
            <input
              name="title"
              className="w-full border rounded p-2 block"
              placeholder="Tên dự án"
              value={get(project, 'title')}
            />
          </InputValue>

          <InputValue>
            <textarea
              name="description"
              placeholder="Mô tả"
              className="w-full border rounded p-2 block full-width"
              value={get(project, 'description')}
            ></textarea>
          </InputValue>

          <div>Noi dung</div>
          <AddContent />
        </div>
      </div>

      <div className="col-span-4">
        <UpdateThumbnail />

        <InputValue>
          <input
            name="agency"
            placeholder="Agency"
            className="w-full border rounded p-2 block full-width"
            value={get(project, 'agency')}
          />
        </InputValue>

        <InputValue>
          <textarea
            name="service"
            placeholder="Service"
            className="w-full border rounded p-2 block full-width"
            value={get(project, 'service')}
          ></textarea>
        </InputValue>
        <InputValue>
          <textarea
            name="credits"
            placeholder="Credits"
            className="w-full border rounded p-2 block full-width"
            value={get(project, 'credits')}
          ></textarea>
        </InputValue>
      </div>

      <div className="text-right">
        <ProjectSubmitBtn />
      </div>
    </div>
  );
}

const AddProjet = ({ projectId }: { projectId?: string }) => {
  return (
    <ProviderFormProject projectId={projectId}>
      <FormAddProject />
    </ProviderFormProject>
  );
};

export { AddProjet };
