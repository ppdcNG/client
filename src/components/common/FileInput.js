import React from 'react';

const FileInput = (props) => {
  return (
    <>
      <label for="file-upload" class="outer-shadow">Select File
          <i class="fas fa-angle-down ml-auto gw-accent-color"></i>
      </label>
      <input type="file" name="file-upload" id="file-upload" />
    </>
  )
}

export default FileInput;