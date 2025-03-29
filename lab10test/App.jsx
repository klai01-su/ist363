const list = [1, 2, 3, 4];

    function App() {
        return (
            <div>
                <h1>Map to Loop Lists</h1>
                <ul>
                    {
                        list.map(function(item) {
                            return <li>{item}</li>;
                    })}
                </ul>
            </div>
        );
        }
        
export default App; 