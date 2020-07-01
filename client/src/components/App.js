import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

const PageOne = () => {
    return <div>PageOne
        <a href="/pagetwo">Naviagte to page 2</a>
    </div>;
}

const PageTwo = () => {
    return <div>
        PageTwo
        <a href="/">Naviagte to page 1</a>
        </div>;
}


const App = () => {
    return (
        <BrowserRouter>
        <div>
            <Route path="/" exact component={PageOne} />
            <Route path="/pagetwo" component={PageTwo} />
        </div>
        </BrowserRouter>
    );
}

export default App;