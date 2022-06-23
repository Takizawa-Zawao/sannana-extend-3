export default class TestApp extends React.Component{
    render(){
        return <h1>OK</h1>;
    }
}

const app = document.getElementById("app");
const root = ReactDOM.createRoot(app);
root.render(<TestApp />);