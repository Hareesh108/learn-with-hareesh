import { useEffect } from 'react';

function Index() {

    useEffect(()=>{

        console.log("Mount");
        
        return () => {
            console.log("Component unmount");
            
        }

    },[])
    
  return (
    <div>Index</div>
  )
}

export default Index