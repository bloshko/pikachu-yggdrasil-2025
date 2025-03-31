// Kommenter ut linjen ved å fjerne // og bytt ut DITT_TEMA med navnet på temaet ditt
import "../design-tokens-build/theme.css";
import {
  Button,
  Heading,
  Paragraph,
  Textfield,
} from "@digdir/designsystemet-react";
import "./App.css";

function App() {
  return (
    <>
      <Heading data-size="lg" level={1}>
        Velkommen til Designsystemet workshop.
      </Heading>
      <Paragraph>
        Redigere kildekoden i <code>App.tsx</code> for å endre utseendet på
        denne siden
      </Paragraph>
      <Button>Knapp</Button>
      {/* <Textfield label="My label">Test text field</Textfield> */}
    </>
  );
}

export default App;
