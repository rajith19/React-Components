import styled from "styled-components";
import "./App.css";
import StarRating from "./components/StarRating";

const AppContainer = styled.div`
  margin: 20px;
  text-align: center;
`;

const Header = styled.h2`
  margin: 20px;
  text-align: center;
`;

const App: React.FC = () => {
  return (
    <>
      <Header>Star Component</Header>
      <AppContainer>
        <StarRating />
      </AppContainer>
    </>
  );
};

export default App;
