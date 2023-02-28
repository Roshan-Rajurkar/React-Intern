// Here are our all the functional components

import User from "./components/user";

function App() {
  return (
    <div>
      <h1>User Info..</h1>
      {/* we are using Rr bcz we have imported the user component as a name of Rr */}
      <User name="Roshan" description="WEB DEV." />
      {/* <User name="karan" description="frontend DEV." />
      <User name="priyash" description="backend DEV." />
      <User name="Aniket" description="software DEV." /> */}
    </div>
  );
}

export default App;
