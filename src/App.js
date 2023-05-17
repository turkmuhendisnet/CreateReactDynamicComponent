import "./styles.css";

// project imports
import DynamicFormComponent from "./dynamically-component/DynamicFormComponent";
import component from "./data/component";
import componentValue from "./data/componentValue";

export default function App() {
  const onChange = (e) => {
    if (componentValue) {
    }
  };

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      {component.tabs?.map((item, index) => (
        <DynamicFormComponent
          componentInfo={item}
          componentValue={componentValue}
          event={{ onChange }}
        />
      ))}
    </div>
  );
}
