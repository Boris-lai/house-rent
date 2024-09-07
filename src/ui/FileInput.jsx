import styled from "styled-components";

const FileInput = styled.input.attrs({ type: "file" })`
  font-size: 1.4rem;
  border-radius: 5px;

  &::file-selector-button {
    font: inherit;
    padding: 0.8rem;
    font-weight: 500;
    margin-right: 1.2rem;
    border-radius: 5px;
    border: none;
    color: #eef2ff;
    background-color: #003566;
    cursor: pointer;
    transition: color 0.2s background-color 0.2s;

    &:hover {
      background-color: #001d3d;
    }
  }
`;

export default FileInput;
