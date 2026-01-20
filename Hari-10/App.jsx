import AbortControll from "./homework/AbortControll";
import PostDenganLoading from "./homework/PostDenganLoading";
import PostFetch from "./homework/PostFetch";
import UserAxios from "./homework/UserAxios";
import UserList from "./homework/UserList";

function App () {
    
    return(
        <>
            <PostFetch />
            <UserAxios />
            <PostDenganLoading />
            <AbortControll />
            <UserList />
        </>
    );
}

export default App