import React from 'react';
import Main from './components/Main';
import './App.css';

function app() { // por padrao so pode ser retornado 1 elemento com o maio nivel hieranquico, como solucao pode ser usado um elemento vazio <>
  return (
    <>
      <Main />
    </>
  );
}
export default app;
