import React from "react";
import axios from "axios";


class App extends React.Component {
    state = {
        isLoading:true,
        movies:[]    
    };
    getMovies = async () =>{
        const {data: {data :{movies}}} = await axios.get("https://yts-proxy.nomadcoders1.now.sh/list_movies.json");
        this.setState({movies, isLoading:false});
    };
    componentDidMount() {
        this.getMovies();
    }
    render() {
        const {isLoading} = this.state; //state 객체에 있는 isloading 비구조화 할당
        return <div>{isLoading ? "Loading..." : "We are ready"}</div>
    }
  
}

export default App;