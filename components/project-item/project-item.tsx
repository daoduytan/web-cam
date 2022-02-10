interface Props {
  numberKey: number;
}

function ProjectItem({ numberKey }: Props) {
  // if (10 * (numberKey - (numberKey - 1)) + 1 === numberKey + 1) {
  if (numberKey % 10 === 0) {
    return (
      <div className="col-start-1 col-end-4">
        <div className="grid grid-cols-3 gap-10">
          <div
            style={{ paddingBottom: '70%' }}
            className="col-start-2 col-span-2 text-dark dark:text-white h-60 bg-pink-500"
          ></div>
          <div className="col-start-1 row-start-1 dark dark:text-white">
            <div className="grid content-end h-full">
              <h3 className="border-b mb-3 pb-3">PROJECT’S NAME ANLOQ</h3>
              <span>Branding, advertising</span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (numberKey % 10 === 1) {
    return (
      <div className="col-start-2">
        <div className="bg-pink-500" style={{ paddingBottom: '100%' }}>
          img
        </div>
        <div className="text-white mt-8">
          <h3 className="border-b mb-3 pb-3">PROJECT’S NAME ANLOQ</h3>
          <span>Branding, advertising</span>
        </div>
      </div>
    );
  }

  if (numberKey % 10 === 2) {
    return (
      <div>
        <div className="h-48 bg-pink-500">img</div>
        <div className="text-white mt-8">
          <h3 className="border-b mb-3 pb-3">PROJECT’S NAME ANLOQ</h3>
          <span>Branding, advertising</span>
        </div>
      </div>
    );
  }

  if (numberKey % 10 === 3) {
    return (
      <div>
        <div className="h-52 bg-pink-500">img</div>
        <div className="text-white mt-8">
          <h3 className="border-b mb-3 pb-3">PROJECT’S NAME ANLOQ</h3>
          <span>Branding, advertising</span>
        </div>
      </div>
    );
  }

  if (numberKey % 10 === 4) {
    return (
      <div>
        <div className="h-48 bg-pink-500">img</div>
        <div className="text-white mt-8">
          <h3 className="border-b mb-3 pb-3">PROJECT’S NAME ANLOQ</h3>
          <span>Branding, advertising</span>
        </div>
      </div>
    );
  }

  if (numberKey % 10 === 5) {
    return (
      <div className="col-start-1 col-end-4">
        <div className="grid grid-cols-3 gap-10">
          <div
            style={{ paddingBottom: '70%' }}
            className="col-start-1 col-span-2 text-dark dark:text-white h-60 bg-pink-500"
          ></div>
          <div className=" dark dark:text-white">
            <div className="grid content-end h-full">
              <h3 className="border-b mb-3 pb-3">PROJECT’S NAME ANLOQ</h3>
              <span>Branding, advertising</span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (numberKey % 10 === 6) {
    return (
      <div>
        <div className="h-52 bg-pink-500">img</div>
        <div className="text-white mt-8">
          <h3 className="border-b mb-3 pb-3">PROJECT’S NAME ANLOQ</h3>
          <span>Branding, advertising</span>
        </div>
      </div>
    );
  }

  if (10 * (numberKey - 7) + 8 === numberKey + 1) {
    return (
      <div>
        <div className="h-48 bg-pink-500">img</div>
        <div className="text-white mt-8">
          <h3 className="border-b mb-3 pb-3">PROJECT’S NAME ANLOQ</h3>
          <span>Branding, advertising</span>
        </div>
      </div>
    );
  }

  if (10 * (numberKey - 8) + 9 === numberKey + 1) {
    return (
      <div className="col-start-2">
        <div className="h-52 bg-pink-500">img</div>
        <div className="text-white mt-8">
          <h3 className="border-b mb-3 pb-3">PROJECT’S NAME ANLOQ</h3>
          <span>Branding, advertising</span>
        </div>
      </div>
    );
  }

  if (10 * (numberKey - 9) + 10 === numberKey + 1) {
    return (
      <div>
        <div className="h-48 bg-pink-500">img</div>
        <div className="text-white mt-8">
          <h3 className="border-b mb-3 pb-3">PROJECT’S NAME ANLOQ</h3>
          <span>Branding, advertising</span>
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className="h-48 bg-pink-500">img</div>
      <div className="text-white mt-8">
        <h3 className="border-b mb-3 pb-3">PROJECT’S NAME ANLOQ</h3>
        <span>Branding, advertising</span>
      </div>
    </div>
  );
}

export { ProjectItem };
