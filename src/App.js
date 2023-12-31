import React, { useState } from 'react';
/* 
* Inital code

function MyButton() {
  return (
    <button>
      I'm a button
    </button>
  );
}

export default function MyApp() {
  return (
    <React.Fragment>
      <div>
        <h1>Welcome to my app</h1>
        <MyButton />
      </div>
    </React.Fragment>
  );
}
*/

/**
 * Displaying Data
 */

/*
const user = {
  name: 'Hedy Lamarr',
  imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
  imageSize: 90,
};

export default function Profile() {
  return (
    <React.Fragment>
      <h1>{user.name}</h1>
      <img
        className="avatar"
        src={user.imageUrl}
        alt={'Photo of' + user.name}
        style={{
          width: user.imageSize,
          height: user.imageSize
        }}
      />
    </React.Fragment>
  );
}

*/

/**
 * Conditional Rendering
 */
/*
function AdminPannel() {
  return (
    <h1>The Admin Panel</h1>
  );
}

function LoginForm() {
  return (
    <h1>The Log-In Form</h1>
  );
}
*/

/**
 *  Start - Responding to Events
 */
/*
function MyButton() {

  function handleClick() {
    alert('You clicked me!');
  }

  return (
    <button onClick={handleClick} >
      Click Me
    </button>
  );
}
*/
/**
 *  End - Responding to Events
 */


/**
 *  Start - Updating the Screen
 */
/*
function MyButton2() {

  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <button onClick={handleClick} >
      Click {count} times
    </button>
  );
}
*/
/**
 *  End - Updating the Screen
 */


/**
 *  Start - Sharing Data Between Components
 */

function MyButton3({ count, onClick }) {
  return (
    <button onClick={onClick} >
      Click {count} times
    </button>
  );
}

/**
 *  End - Sharing Data Between Components
 */



export default function Page() {
  //let content;
  //var isLoggedIn = true;

  // Start - Long method
  /*
  if (isLoggedIn) {
    content = <AdminPannel />
  } else {  
    content = <LoginForm />
  }

  return (
    <React.Fragment>
      <div>
        {content}
      </div>
    </React.Fragment>
  );
  */
  // End - Long Method



  // Start - Compact Method
  /*
  return (
    <React.Fragment>
      <div>
        {isLoggedIn ? (
          <AdminPannel />
        ) : (
          <LoginForm />
        )}
      </div>
    </React.Fragment>
  );
  */
  // End - Compact Method



  // Start - No need of 'else' branch
  /*
  return (
    <React.Fragment>
      <div>
        { isLoggedIn &&  <AdminPannel /> }
      </div>
    </React.Fragment>
  );
  */
  // End - No need of 'else' branch



  /**
   *  Start - Responding to Events
   */
  /*
  return (
    <React.Fragment>
      <div>
        <MyButton />
      </div>
    </React.Fragment>
  );
    */
  /**
   *  End - Responding to Events
   */



  /**
   *  Start - Updating the Screen
   */
  /*
  return (
    <React.Fragment>
      <div>
        <MyButton2 />
        <MyButton2 />
      </div>
    </React.Fragment>
  );
  */
  /**
   *  End - Updating the Screen
   */



  /**
   *  Start - Sharing Data Between Components
   */
  
  const [count, setCount] = useState(0);
  
  function handleClick() {
    setCount(count + 1);
  }
  
  return (
    <React.Fragment>
      <div>
        <h1>Counters that update together</h1>
        <MyButton3 count={count} onClick={handleClick} />
        <MyButton3 count={count} onClick={handleClick} />
      </div>
    </React.Fragment>
  );
  
  /**
   *  End - Sharing Data Between Components
   */
}

