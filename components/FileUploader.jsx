export const FileUploader = ({ onFileSelectSuccess, onFileSelectError }) => {
  const handleFileInput = (e) => {
    // handle validations
    const file = e.target.files[0];
    if (file.size > 20480)
      onFileSelectError({ error: "File size cannot exceed more than 20MB" });
    onFileSelectSuccess(file);
  };

  return (
    <div>
      <label className="flex w-full cursor-pointer items-center justify-center rounded-md bg-[#252525] py-4">
        <span>Attach a brief</span>
        <input type="file" onChange={handleFileInput} className="hidden" />
      </label>
      <small className="text-xs dark:text-light-gray">Max file size 20mb</small>
    </div>
  );
};
