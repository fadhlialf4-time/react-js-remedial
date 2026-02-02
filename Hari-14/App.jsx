import ShowHideText from "./CustomHooks/ShowHideText";
import Switch from "./CustomHooks/Switch";
import Post from "./EkstrasiLogika/Post";
import Counter from "./HooksCompostion/Counter";
import Form from "./FormHandling/Form";
import Theme from "./LocalStorage/Theme";

function App() {
  return (
    <div>
      <ShowHideText />
      
      <br />
      <Switch />
      
      <br />
      <Post />
      
      <br />
      <Counter />
      
      <br />
      <Form />
      
      <br />
      <Theme />
    </div>
  );
}

export default App;
