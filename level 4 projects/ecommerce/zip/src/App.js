

export class App extends Component {


    render() {
        return (
<Routes>
            {/* home */ }
            < Route exact path = '/' />
                {/* signup */ }
                < Route path = "/signup" />
                    {/* login */ }
                    < Route path = "/login" />
                        {/* cart products */ }
                        < Route path = "/cartproducts" /> />
{/* add products */ }
<Route path="/addproducts" />
{/* cashout */ }
<Route path='/cashout' />
{/*incorrect routes*/ }
<Route path='*' />
</Routes>       
        );
    }
}

export default App;
