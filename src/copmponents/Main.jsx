import styled from "styled-components";
import Search from "./Search";
import AddForm from "./AddFrom";

function Main() {
  return (
    <MainTag>
      <Search />
      <AddForm />
    </MainTag>
  );
}

export default Main;

const MainTag = styled.main`
  margin-bottom: auto;
`;
