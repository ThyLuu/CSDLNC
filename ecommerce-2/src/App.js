import React, { Fragment } from 'react';
import { useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DefaultComponent from './components/DefaultComponent/DefaultComponent';
import { routes } from './routes';
import axios from 'axios';
import { useQuery } from '@tanstack/react-query';

export function App() {

  // const fetchApi = async () => {
  //   try {
  //     const res = await axios.get(`${process.env.REACT_APP_API_URL}/product/get-all`);
  //     return res.data
  //   } catch (error) {
  //     console.error('Error fetching API:', error);
  //   }
  // };

  // const query = useQuery({ queryKey: ['todos'], queryFn: fetchApi })

  // console.log('query', query)

  // useEffect(()=>{
  //   fetchApi()
  // }, [])

  console.log('process.env.REACT_APP_API_URL', process.env.REACT_APP_API_KEY)

  const fetchApi = async() => {
    const res = await axios.get(`${process.env.REACT_APP_API_KEY}/product/get-all`)
    return res.data
  }

  const query = useQuery({ queryKey: ['todos'], queryFn: fetchApi })

  console.log('query', query)

  return (
    <div>
      <Router>
        <Routes>
          {routes.map((route) => {
            const Page = route.page;
            const Layout = route.isShowHeader ? DefaultComponent : Fragment;
            return (
              <Route key={route.path} path={route.path} element={
                <Layout>
                  <Page />
                </Layout>
              } />
            );
          })}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
