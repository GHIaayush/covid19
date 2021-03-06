import React from 'react';
import styles from './App.module.css'


import {Cards,Chart,CountryPicker} from './components';
import {fetchData} from './api';

class App extends React.Component{

    state = {
        data: {},        
    }

    async componentDidMount(){
        const fetchedData = await fetchData();
        this.setState({data:fetchedData});
        // console.log(data);
    }
    render(){
        const {data} = this.state;
        return(
         <div className ={styles.container}>
            <Cards data =  {data} />
            <Chart data ={data} />
            <CountryPicker />
            
         </div>   
        )
    }
}

export default App;