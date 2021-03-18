import React, { Component } from 'react';
import { ThemeProvider } from 'styled-components';

import TodoList from './components/TodoList';
import ThemeSwitcher from './components/ThemeSwitcher';

import * as themes from './styles/themes';
import ThemeContext from './styles/themes/context';


/*  
Context API: para se consumir uma variável, independente do componente que esteja consumindo essa variável,
              ela precisa ter um provider por fora dela. 
O ThemeContext possui duas funções: provider e consumer. 
              O provider dá um valor para alguma varível de contexto e o consumer consome essa variavel.


*/
class App extends Component {
  
  state = {
    theme: themes.dark,
  };

  toggleTheme = () => {
    this.setState({ 
      theme: this.state.theme === themes.dark ? themes.light : themes.dark
    });
  };
  
  render() {
    return(
      <div>
        <ThemeContext.Provider value={this.state}> 
          <ThemeSwitcher toggleTheme={this.toggleTheme} />
          <ThemeContext.Consumer>
            {theme => (
              <ThemeProvider theme={theme}>
                <TodoList/>
              </ThemeProvider>
            )}            
          </ThemeContext.Consumer>           
        </ThemeContext.Provider>       
      </div>
    );      
  }
}

export default App;
