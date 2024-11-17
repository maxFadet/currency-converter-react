import { Footer, PageWrapper, CenteredContent, Link } from "./Footer/styled";
import Form from "./Form";

function App() {
  return (
    <PageWrapper>
      <CenteredContent>
        <Form />
      </CenteredContent>
      <Footer>© 2024 Created by
        <Link
          href="https://github.com/maxFadet?tab=repositories"
          target="_blank"
          rel="noopener noreferrer"
          title="My GitHub page"
        >
          maxFadet
        </Link>
      </Footer>
    </PageWrapper >
  );
}

export default App;