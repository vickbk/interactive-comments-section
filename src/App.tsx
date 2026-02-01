import "bootstrap-icons/font/bootstrap-icons.css";
import { CommentSection } from "./app/comment-section";
import { Heading, Main } from "./components/shared/heading-managers";
import { ContextProvider } from "./contexts/context-provider";
import "./styles/global.css";
import "./styles/scss/global.scss";

function App() {
  return (
    <ContextProvider>
      <Main>
        <Heading className="sr-only">Interactive comment section</Heading>
      </Main>
      <CommentSection />
    </ContextProvider>
  );
}

export default App;
